import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Newsletter sign-up endpoint.
//
// The UI posts { email } here; we add the contact to the STOC Resend audience.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  let email: string | undefined;
  try {
    const body = await req.json();
    email = typeof body?.email === "string" ? body.email.trim() : undefined;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !AUDIENCE_ID) {
    console.error("[newsletter] RESEND_API_KEY or RESEND_AUDIENCE_ID not set");
    return NextResponse.json(
      { error: "Newsletter is temporarily unavailable. Please try again later." },
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

  return NextResponse.json({
    ok: true,
    message: "Thanks, you're on the list.",
  });
}
