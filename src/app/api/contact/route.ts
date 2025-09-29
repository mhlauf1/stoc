import { Resend } from "resend";

// Initialize Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

// Basic in-memory request limiter (super simple version for bots)
let lastRequestTimestamp = 0;

// Optional: helper to pull an IP from common headers
function getClientIp(req: Request): string | null {
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

type ContactPayload = {
    name: string;
    email: string;
    message: string;
    phone?: string | null;
};

export async function POST(req: Request) {
    const now = Date.now();
    if (now - lastRequestTimestamp < 3000) {
        return new Response(
            JSON.stringify({ success: false, error: "Rate limit exceeded" }),
            { status: 429 }
        );
    }
    lastRequestTimestamp = now;

    try {
        const { name, email, phone, message } =
            (await req.json()) as ContactPayload;

        // Basic validation
        if (!name || !email || !message || message.length > 2000) {
            return new Response(
                JSON.stringify({ success: false, error: "Invalid input" }),
                { status: 400 }
            );
        }

        // Optional phone: allow flexible formatting but avoid garbage
        const phoneStr = typeof phone === "string" ? phone.trim() : "";
        const hasPhone = phoneStr.length > 0;

        // Derive consent if phone provided (aligns with on-page consent copy)
        const smsConsent = hasPhone;
        const smsConsentAt = smsConsent ? new Date().toISOString() : null;

        // Server-side metadata for auditability (no explicit any, no .ip off Request)
        const userAgent = req.headers.get("user-agent") || null;
        const ip = getClientIp(req);

        // Build email body
        const lines = [
            `You have received a new inquiry:`,
            ``,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${hasPhone ? phoneStr : "(not provided)"}`,
            ``,
            `Message:`,
            `${message}`,
            ``,
            `---`,
            `Compliance / Metadata`,
            `SMS Consent: ${smsConsent ? "YES" : "NO"}`,
            `Consent Timestamp: ${smsConsentAt ?? "(n/a)"}`,
            `IP: ${ip ?? "(n/a)"}`,
            `User-Agent: ${userAgent ?? "(n/a)"}`,
        ].join("\n");

        await resend.emails.send({
            from: "STOC Advisory <inquiry@stocadvisory.com>", // LIVE PRODUCTION NOW
            to: [
                "inquiry@stocadvisory.com",
                "aswihart@stocadvisory.com",
                "moheir@stocadvisory.com",
            ],
            subject: `New Contact Form Submission: ${name}`,
            replyTo: email,
            text: lines,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Resend error:", error);
        return new Response(
            JSON.stringify({ success: false, error: "Internal error" }),
            { status: 500 }
        );
    }
}
