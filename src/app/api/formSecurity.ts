// Shared spam-protection helpers for the form API routes (contact, newsletter).
// Ported from the Embark portfolio sites (kingdom-canine reference implementation).

export const MAX_FORM_BODY_BYTES = 32 * 1024;

export function getClientIp(req: Request): string | null {
    const h = req.headers;
    const xff = h.get("x-forwarded-for"); // "client, proxy1, proxy2"
    if (xff) return xff.split(",")[0]!.trim();
    return (
        h.get("x-real-ip") ||
        h.get("cf-connecting-ip") ||
        h.get("true-client-ip") ||
        null
    );
}

// ---------------------------------------------------------------------------
// Per-IP rate limiting
// ---------------------------------------------------------------------------

// Best-effort per-IP throttle. State is per server instance and resets on cold
// start, so this is a friction layer against bursts, not a hard guarantee.
export function createRateLimiter({
    maxRequests,
    windowMs,
}: {
    maxRequests: number;
    windowMs: number;
}) {
    const buckets = new Map<string, { count: number; windowStart: number }>();

    return function isRateLimited(clientIp: string): boolean {
        const now = Date.now();
        const bucket = buckets.get(clientIp);

        if (!bucket || now - bucket.windowStart >= windowMs) {
            if (buckets.size >= 1000) {
                for (const [ip, entry] of buckets) {
                    if (now - entry.windowStart >= windowMs) buckets.delete(ip);
                }
            }
            buckets.set(clientIp, { count: 1, windowStart: now });
            return false;
        }

        bucket.count += 1;
        return bucket.count > maxRequests;
    };
}

// ---------------------------------------------------------------------------
// Request body reading with a hard size cap
// ---------------------------------------------------------------------------

type ReadJsonBodyResult =
    | { status: "valid"; value: unknown }
    | { status: "invalid" }
    | { status: "too-large" };

export async function readJsonBody(
    request: Request
): Promise<ReadJsonBodyResult> {
    const contentType = request.headers
        .get("content-type")
        ?.split(";")[0]
        .trim()
        .toLowerCase();
    if (contentType !== "application/json") return { status: "invalid" };

    const declaredLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(declaredLength) && declaredLength > MAX_FORM_BODY_BYTES) {
        return { status: "too-large" };
    }

    const reader = request.body?.getReader();
    if (!reader) return { status: "invalid" };

    const chunks: Uint8Array[] = [];
    let receivedBytes = 0;

    for (;;) {
        const { done, value } = await reader.read();
        if (done) break;

        receivedBytes += value.byteLength;
        if (receivedBytes > MAX_FORM_BODY_BYTES) {
            await reader.cancel();
            return { status: "too-large" };
        }
        chunks.push(value);
    }

    const bodyBytes = new Uint8Array(receivedBytes);
    let offset = 0;
    for (const chunk of chunks) {
        bodyBytes.set(chunk, offset);
        offset += chunk.byteLength;
    }

    try {
        const rawBody = new TextDecoder("utf-8", { fatal: true }).decode(
            bodyBytes
        );
        const value: unknown = JSON.parse(rawBody);
        if (!value || typeof value !== "object" || Array.isArray(value)) {
            return { status: "invalid" };
        }
        return { status: "valid", value };
    } catch {
        return { status: "invalid" };
    }
}

// ---------------------------------------------------------------------------
// Honeypot
// ---------------------------------------------------------------------------

export function isHoneypotFilled(value: unknown): boolean {
    return typeof value === "string" && value.trim().length > 0;
}

// ---------------------------------------------------------------------------
// reCAPTCHA v3 verification
// ---------------------------------------------------------------------------

export function isAllowedRecaptchaHostname(
    hostname: string | undefined,
    environment: {
        nodeEnv?: string;
        vercelEnv?: string;
        vercelUrl?: string;
        vercelBranchUrl?: string;
    } = {
        nodeEnv: process.env.NODE_ENV,
        vercelEnv: process.env.VERCEL_ENV,
        vercelUrl: process.env.VERCEL_URL,
        vercelBranchUrl: process.env.VERCEL_BRANCH_URL,
    }
): boolean {
    if (!hostname) return false;

    const normalizedHostname = hostname.toLowerCase();
    if (
        ["stocadvisory.com", "www.stocadvisory.com"].includes(normalizedHostname)
    ) {
        return true;
    }

    if (environment.vercelEnv === "preview") {
        const allowedPreviewHostnames = [
            environment.vercelUrl,
            environment.vercelBranchUrl,
        ]
            .filter((value): value is string => Boolean(value))
            .map((value) => value.toLowerCase());

        if (allowedPreviewHostnames.includes(normalizedHostname)) return true;
    }

    return (
        environment.nodeEnv !== "production" &&
        ["localhost", "127.0.0.1"].includes(normalizedHostname)
    );
}

const RECAPTCHA_MIN_SCORE = 0.5;
const RECAPTCHA_TIMEOUT_MS = 3000;
const RECAPTCHA_MAX_ATTEMPTS = 2;

export type RecaptchaVerification =
    | { status: "verified" }
    | { status: "rejected" }
    | { status: "unavailable" }
    | { status: "misconfigured" }
    | { status: "skipped-development" };

export async function verifyRecaptcha(
    token: string | undefined,
    expectedAction: string
): Promise<RecaptchaVerification> {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || "";

    if (!recaptchaSecret) {
        return process.env.NODE_ENV === "production"
            ? { status: "misconfigured" }
            : { status: "skipped-development" };
    }
    if (!token) return { status: "rejected" };

    let lastError: unknown;

    for (let attempt = 1; attempt <= RECAPTCHA_MAX_ATTEMPTS; attempt += 1) {
        try {
            const res = await fetch(
                "https://www.google.com/recaptcha/api/siteverify",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        secret: recaptchaSecret,
                        response: token,
                    }),
                    signal: AbortSignal.timeout(RECAPTCHA_TIMEOUT_MS),
                }
            );

            if (!res.ok) {
                throw new Error(
                    `reCAPTCHA verification returned HTTP ${res.status}`
                );
            }

            const data = (await res.json()) as {
                success?: boolean;
                score?: number;
                action?: string;
                hostname?: string;
                "error-codes"?: string[];
            };

            // A retried token is single-use: Google reports the second attempt
            // as timeout-or-duplicate even when the first verified fine.
            if (
                attempt > 1 &&
                data.success !== true &&
                data["error-codes"]?.includes("timeout-or-duplicate")
            ) {
                return { status: "unavailable" };
            }

            const verified =
                data.success === true &&
                (data.score ?? 0) >= RECAPTCHA_MIN_SCORE &&
                data.action === expectedAction &&
                isAllowedRecaptchaHostname(data.hostname);

            return verified ? { status: "verified" } : { status: "rejected" };
        } catch (error) {
            lastError = error;
        }
    }

    console.error("reCAPTCHA verification unavailable after retries:", lastError);
    return { status: "unavailable" };
}
