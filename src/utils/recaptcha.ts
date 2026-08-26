"use client";

// Client-side Google reCAPTCHA v3 helpers, shared by the contact and
// newsletter forms. The script is injected on demand (no npm package).

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (
                siteKey: string,
                options: { action: string }
            ) => Promise<string>;
        };
    }
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const SCRIPT_ID = "recaptcha-script";

export function loadRecaptcha(): void {
    if (!RECAPTCHA_SITE_KEY || document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
}

// Fails open (returns null) if the script never loaded or execution throws;
// the server decides what to do with a missing token.
export async function getRecaptchaToken(
    action: string
): Promise<string | null> {
    if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return null;
    try {
        const grecaptcha = window.grecaptcha;
        await new Promise<void>((resolve) => grecaptcha.ready(resolve));
        return await grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
    } catch {
        return null;
    }
}
