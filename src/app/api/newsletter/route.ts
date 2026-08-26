import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
    createRateLimiter,
    getClientIp,
    isHoneypotFilled,
    readJsonBody,
    verifyRecaptcha,
} from "../formSecurity";

// Newsletter sign-up endpoint.
//
// The UI posts { email, companyWebsite, recaptchaToken } here; we add the
// contact to the STOC Resend audience.

const NEWSLETTER_RECAPTCHA_ACTION = "newsletter_signup";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

const isRateLimited = createRateLimiter({
    maxRequests: 5,
    windowMs: 10 * 60 * 1000,
});

const SUCCESS_RESPONSE = {
    ok: true,
    message: "Thanks, you're on the list.",
};

export async function POST(req: NextRequest) {
    const clientIp = getClientIp(req) ?? "unknown";
    if (isRateLimited(clientIp)) {
        return NextResponse.json(
            { error: "Too many requests. Please try again in a few minutes." },
            { status: 429, headers: { "Retry-After": "600" } }
        );
    }

    const bodyResult = await readJsonBody(req);
    if (bodyResult.status !== "valid") {
        return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    const body = bodyResult.value as Record<string, unknown>;

    // Return the normal success response so the honeypot is not disclosed.
    if (isHoneypotFilled(body.companyWebsite)) {
        console.warn("[newsletter] honeypot triggered; submission discarded", {
            email: typeof body.email === "string" ? body.email : undefined,
        });
        return NextResponse.json(SUCCESS_RESPONSE);
    }

    const email =
        typeof body.email === "string" ? body.email.trim() : undefined;

    if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
        return NextResponse.json(
            { error: "Please enter a valid email address." },
            { status: 400 }
        );
    }

    const recaptchaToken =
        typeof body.recaptchaToken === "string" &&
        body.recaptchaToken.length <= 4096
            ? body.recaptchaToken
            : undefined;

    const recaptchaVerification = await verifyRecaptcha(
        recaptchaToken,
        NEWSLETTER_RECAPTCHA_ACTION
    );

    if (recaptchaVerification.status === "misconfigured") {
        console.error(
            "[newsletter] RECAPTCHA_SECRET_KEY is missing in a production environment"
        );
        return NextResponse.json(
            {
                error: "Newsletter is temporarily unavailable. Please try again later.",
            },
            { status: 503 }
        );
    }

    if (recaptchaVerification.status === "rejected") {
        return NextResponse.json(
            { error: "Verification failed. Please try again." },
            { status: 400 }
        );
    }
    // "unavailable" (Google unreachable) fails open — adding a contact to the
    // audience is low-stakes compared to losing a real subscriber.

    if (!process.env.RESEND_API_KEY || !AUDIENCE_ID) {
        console.error("[newsletter] RESEND_API_KEY or RESEND_AUDIENCE_ID not set");
        return NextResponse.json(
            {
                error: "Newsletter is temporarily unavailable. Please try again later.",
            },
            { status: 503 }
        );
    }

    const { error } = await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
    });

    if (error) {
        console.error(`[newsletter] Resend error for ${email}:`, error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 502 }
        );
    }

    return NextResponse.json(SUCCESS_RESPONSE);
}
