import assert from "node:assert/strict";
import test from "node:test";

import {
    isAllowedRecaptchaHostname,
    isHoneypotFilled,
    MAX_FORM_BODY_BYTES,
    readJsonBody,
} from "../formSecurity.ts";
import { contactFormSchema } from "./formValidation.ts";

const validPayload = {
    name: "Taylor Smith",
    email: "taylor@example.com",
    phone: "(314) 631-6738",
    message: "I would like to learn more about STOC Advisory.",
    companyWebsite: "",
    recaptchaToken: "token",
    smsConsent: true,
    smsConsentAt: "2026-08-26T00:00:00.000Z",
    userAgent: "Mozilla/5.0",
};

test("accepts the STOC contact form contract", () => {
    assert.equal(contactFormSchema.safeParse(validPayload).success, true);
});

test("accepts a null phone and missing optional metadata", () => {
    const result = contactFormSchema.safeParse({
        name: "Taylor Smith",
        email: "taylor@example.com",
        phone: null,
        message: "Hello",
    });
    assert.equal(result.success, true);
    assert.equal(result.success && result.data.phone, "");
});

test("rejects oversized messages and missing required fields", () => {
    assert.equal(
        contactFormSchema.safeParse({ ...validPayload, message: "x".repeat(2001) })
            .success,
        false
    );
    assert.equal(
        contactFormSchema.safeParse({ ...validPayload, message: "" }).success,
        false
    );
    assert.equal(
        contactFormSchema.safeParse({ ...validPayload, email: "not-an-email" })
            .success,
        false
    );
});

test("rejects invalid phone numbers and control characters in names", () => {
    assert.equal(
        contactFormSchema.safeParse({ ...validPayload, phone: "not-a-phone" })
            .success,
        false
    );
    assert.equal(
        contactFormSchema.safeParse({ ...validPayload, name: "Taylor\nBcc: test" })
            .success,
        false
    );
});

test("recognizes only non-empty honeypot values", () => {
    assert.equal(isHoneypotFilled("https://spam.example"), true);
    assert.equal(isHoneypotFilled("  "), false);
    assert.equal(isHoneypotFilled(undefined), false);
});

test("allows only the intended production, preview, and local hostnames", () => {
    assert.equal(
        isAllowedRecaptchaHostname("www.stocadvisory.com", {
            nodeEnv: "production",
        }),
        true
    );
    assert.equal(
        isAllowedRecaptchaHostname("stocadvisory.com", { nodeEnv: "production" }),
        true
    );
    assert.equal(
        isAllowedRecaptchaHostname("evil.example", { nodeEnv: "production" }),
        false
    );
    assert.equal(
        isAllowedRecaptchaHostname("stoc-ab12cd34-mhlauf1s-projects.vercel.app", {
            nodeEnv: "production",
            vercelEnv: "preview",
            vercelUrl: "stoc-ab12cd34-mhlauf1s-projects.vercel.app",
        }),
        true
    );
    assert.equal(
        isAllowedRecaptchaHostname(
            "stoc-git-fix-contact-mhlauf1s-projects.vercel.app",
            {
                nodeEnv: "production",
                vercelEnv: "preview",
                vercelBranchUrl:
                    "stoc-git-fix-contact-mhlauf1s-projects.vercel.app",
            }
        ),
        true
    );
    assert.equal(
        isAllowedRecaptchaHostname("stoc-unrelated-mhlauf1s-projects.vercel.app", {
            nodeEnv: "production",
            vercelEnv: "preview",
            vercelUrl: "stoc-ab12cd34-mhlauf1s-projects.vercel.app",
        }),
        false
    );
    assert.equal(
        isAllowedRecaptchaHostname("localhost", { nodeEnv: "development" }),
        true
    );
});

test("rejects an oversized JSON body even when content-length is absent", async () => {
    const request = new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ message: "x".repeat(MAX_FORM_BODY_BYTES) }),
    });

    assert.equal(request.headers.get("content-length"), null);
    assert.deepEqual(await readJsonBody(request), { status: "too-large" });
});

test("rejects a non-JSON request body", async () => {
    const request = new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "content-type": "text/plain" },
        body: "not json",
    });

    assert.deepEqual(await readJsonBody(request), { status: "invalid" });
});

test("reads a valid JSON request body", async () => {
    const request = new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(validPayload),
    });

    assert.deepEqual(await readJsonBody(request), {
        status: "valid",
        value: validPayload,
    });
});
