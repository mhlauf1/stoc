import { Resend } from "resend";

// Initialize Resend instance
const resend = new Resend(process.env.RESEND_API_KEY);

// Basic in-memory request limiter (super simple version for bots)
let lastRequestTimestamp = 0;

export async function POST(req: Request) {
    const now = Date.now();
    if (now - lastRequestTimestamp < 3000) {
        // block any request happening under 3 seconds apart
        return new Response(JSON.stringify({ success: false, error: "Rate limit exceeded" }), { status: 429 });
    }
    lastRequestTimestamp = now;

    try {
        const { name, email, message } = await req.json();

        // Extra sanity check on fields
        if (!name || !email || !message || message.length > 2000) {
            return new Response(JSON.stringify({ success: false, error: "Invalid input" }), { status: 400 });
        }

        await resend.emails.send({
            from: "STOC Advisory <inquiry@stocadvisory.com>",  // LIVE PRODUCTION NOW
            to: [
                "inquiry@stocadvisory.com",
                "aswihart@stocadvisory.com",
                "moheir@stocadvisory.com"
            ],
            subject: `New Contact Form Submission: ${name}`,
            replyTo: email,
            text: `
You have received a new inquiry:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });

    } catch (error) {
        console.error("Resend error:", error);
        return new Response(JSON.stringify({ success: false, error: "Internal error" }), { status: 500 });
    }
}
