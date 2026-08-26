import { Resend } from "resend";
import {
    createRateLimiter,
    getClientIp,
    isHoneypotFilled,
    readJsonBody,
    verifyRecaptcha,
} from "../formSecurity";
import { CONTACT_RECAPTCHA_ACTION, contactFormSchema } from "./formValidation";

// Initialize Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

const isRateLimited = createRateLimiter({
    maxRequests: 5,
    windowMs: 10 * 60 * 1000,
});

const FALLBACK_CONTACT =
    "Please try again, or email us directly at inquiry@stocadvisory.com.";

export async function POST(req: Request) {
    try {
        const clientIp = getClientIp(req) ?? "unknown";
        if (isRateLimited(clientIp)) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Too many requests. Please wait a few minutes and try again.",
                }),
                { status: 429, headers: { "Retry-After": "600" } }
            );
        }

        const bodyResult = await readJsonBody(req);

        if (bodyResult.status === "too-large") {
            return new Response(
                JSON.stringify({ success: false, error: "Request is too large" }),
                { status: 413 }
            );
        }

        if (bodyResult.status === "invalid") {
            return new Response(
                JSON.stringify({ success: false, error: "Invalid request body" }),
                { status: 400 }
            );
        }

        const untrustedBody = bodyResult.value as Record<string, unknown>;

        // Return the normal success response so the honeypot is not disclosed.
        if (isHoneypotFilled(untrustedBody.companyWebsite)) {
            console.warn("Contact form honeypot triggered; submission discarded", {
                email:
                    typeof untrustedBody.email === "string"
                        ? untrustedBody.email
                        : undefined,
            });
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
            });
        }

        const parsedBody = contactFormSchema.safeParse(untrustedBody);
        if (!parsedBody.success) {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: "Please check the form fields and try again.",
                }),
                { status: 400 }
            );
        }

        const { name, email, phone, message, recaptchaToken } = parsedBody.data;

        const recaptchaVerification = await verifyRecaptcha(
            recaptchaToken,
            CONTACT_RECAPTCHA_ACTION
        );

        if (recaptchaVerification.status === "misconfigured") {
            console.error(
                "RECAPTCHA_SECRET_KEY is missing in a production environment"
            );
            return new Response(
                JSON.stringify({
                    success: false,
                    error: `The contact form is temporarily unavailable. ${FALLBACK_CONTACT}`,
                }),
                { status: 503 }
            );
        }

        if (recaptchaVerification.status === "rejected") {
            return new Response(
                JSON.stringify({
                    success: false,
                    error: `Verification failed. ${FALLBACK_CONTACT}`,
                }),
                { status: 400 }
            );
        }

        const recaptchaUnavailable =
            recaptchaVerification.status === "unavailable";

        const hasPhone = phone.length > 0;

        // Derive consent if phone provided (aligns with on-page consent copy)
        const smsConsent = hasPhone;
        const smsConsentAt = smsConsent ? new Date().toISOString() : null;

        // Server-side metadata for auditability
        const userAgent = req.headers.get("user-agent") || null;

        // Build email body
        const lines = [
            `You have received a new inquiry:`,
            ``,
            ...(recaptchaUnavailable
                ? [
                      `Security notice: Google reCAPTCHA could not be reached after two attempts. This submission was delivered to avoid losing a potentially legitimate lead.`,
                      ``,
                  ]
                : []),
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${hasPhone ? phone : "(not provided)"}`,
            ``,
            `Message:`,
            `${message}`,
            ``,
            `---`,
            `Compliance / Metadata`,
            `SMS Consent: ${smsConsent ? "YES" : "NO"}`,
            `Consent Timestamp: ${smsConsentAt ?? "(n/a)"}`,
            `IP: ${clientIp}`,
            `User-Agent: ${userAgent ?? "(n/a)"}`,
        ].join("\n");

        await resend.emails.send({
            from: "STOC Advisory <inquiry@stocadvisory.com>", // LIVE PRODUCTION NOW
            to: [
                "inquiry@stocadvisory.com",
                "aswihart@stocadvisory.com",
                "moheir@stocadvisory.com",
            ],
            subject: `${recaptchaUnavailable ? "[reCAPTCHA unavailable] " : ""}New Contact Form Submission: ${name}`,
            replyTo: email,
            text: lines,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Contact form error:", error);
        return new Response(
            JSON.stringify({ success: false, error: "Internal error" }),
            { status: 500 }
        );
    }
}
