"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/Button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // NEW
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // If a phone is provided, treat it as consent under the displayed language.
    const smsConsent = Boolean(phone?.trim());
    const payload = {
      name,
      email,
      phone: phone?.trim() || null,
      message,
      // Optional metadata you may want to persist for A2P audit trails:
      smsConsent,
      smsConsentAt: smsConsent ? new Date().toISOString() : null,
      userAgent: typeof window !== "undefined" ? navigator.userAgent : null,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone(""); // NEW
        setMessage("");
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    } finally {
      setSubmitting(false);
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.51, ease: "easeOut" },
    },
  };

  return (
    <main className="pt-[12vh] md:pt-[15vh] px-6 md:px-12 lg:px-32 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        {/* Left Column: Contact Details */}
        <motion.div
          className="flex flex-1 flex-col items-start"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-2xl md:text-3xl font-gambetta tracking-tight mb-1">
            Contact Us
          </h1>
          <p className="text-neutral-600 mb-4 md:mb-8">
            Fill out the form and we will be in touch soon.
          </p>

          <div className="flex flex-col gap-6 text-neutral-700">
            <div className="flex flex-col gap-4 md:gap-8">
              <div className="flex flex-col gap-2">
                <span className="font-gambetta tracking-tight text-lg md:text-xl">
                  Baltimore, MD Office
                </span>
                <div className="flex items-center gap-2">
                  <Phone size={20} className="size-4 md:size-5" />
                  <a href="tel:+14108126927" className="hover:underline">
                    (410)-812-6927
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="size-4 md:size-5" />
                  <address className="not-italic">
                    600 Baltimore Ave., Suite 205, Towson, MD 21204
                  </address>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-gambetta tracking-tight text-lg md:text-xl">
                  Minneapolis, MN Office
                </span>
                <div className="flex items-center gap-2">
                  <Phone size={20} className="size-4 md:size-5" />
                  <a href="tel:+12182448082" className="hover:underline">
                    (218)-244-8082
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="size-4 md:size-5" />
                  <address className="not-italic">
                    7400 Metro Blvd. Suite 450 Edina, MN 55439
                  </address>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-gambetta tracking-tight text-lg md:text-xl">
                  Nashville, TN Office
                </span>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="size-4 md:size-5" />
                  <address className="not-italic">
                    6200 Tennessee 100 Suite 302, Nashville, TN 37205
                  </address>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          className="flex flex-1 flex-col items-start"
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
        >
          {success && (
            <motion.div
              className="bg-green-100 text-green-800 p-4 rounded-lg mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thanks for reaching out! We&apos;ll get back to you shortly.
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="flex flex-col">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3"
              />
            </div>

            {/* NEW: Optional Phone field + consent language */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone{" "}
                <span className="text-neutral-500 font-normal">(optional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                placeholder="(555) 555-1234"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3"
                aria-describedby="sms-consent"
                // Optional light pattern to reduce typos, but keep flexible:
                pattern="^[0-9()+\-\s\.]{7,}$"
              />
              <p
                id="sms-consent"
                className="mt-2 text-xs leading-5 text-neutral-600"
              >
                By providing your phone number,{" "}
                <span className="font-medium">
                  you agree to receive automated follow-up, reminder, and
                  promotional messages with varying frequency.
                </span>{" "}
                Msg &amp; data rates may apply. Reply STOP to end. Text HELP for
                help.{" "}
                <a href="/terms-of-service" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-4 py-3"
              />
            </div>

            <div className="flex items-center justify-center">
              <PrimaryButton
                type="submit"
                className="mt-4"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Submit"}
              </PrimaryButton>
            </div>
          </form>

          <div className="flex mt-8 items-center text-neutral-600 gap-2">
            <Mail size={20} className="size-4 md:size-5" />
            <a
              href="mailto:inquiry@stocadvisory.com"
              className="hover:underline tracking-tight"
            >
              inquiry@stocadvisory.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
