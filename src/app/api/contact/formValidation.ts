import { z } from "zod";

export const CONTACT_RECAPTCHA_ACTION = "contact_form";

function containsControlCharacters(value: string): boolean {
    return Array.from(value).some((character) => {
        const codePoint = character.codePointAt(0) ?? 0;
        return codePoint <= 31 || (codePoint >= 127 && codePoint <= 159);
    });
}

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1)
        .max(100)
        .refine(
            (value) => !containsControlCharacters(value),
            "Enter a valid name"
        ),
    email: z.string().trim().max(254).pipe(z.email()),
    phone: z
        .string()
        .trim()
        .max(50)
        .refine(
            (value) => value === "" || /^[0-9+().\-\s]{7,50}$/.test(value),
            "Enter a valid phone number"
        )
        .optional()
        .default("")
        .nullable()
        .transform((value) => value ?? ""),
    message: z.string().trim().min(1).max(2000),
    companyWebsite: z.string().max(200).optional().default(""),
    recaptchaToken: z.string().max(4096).optional(),
    // Client-supplied metadata; the server re-derives consent from `phone`
    // rather than trusting these, but they must parse cleanly.
    smsConsent: z.boolean().optional(),
    smsConsentAt: z.string().max(64).nullable().optional(),
    userAgent: z.string().max(1000).nullable().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
