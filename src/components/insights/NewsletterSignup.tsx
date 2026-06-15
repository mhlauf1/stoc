"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Thanks — you're on the list.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#041E40] rounded-2xl px-6 py-12 md:px-12 md:py-16"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
        <div className="flex-1 flex flex-col gap-3">
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-300 text-xs"
          >
            STOC Insights Newsletter
          </span>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-gambetta tracking-tight leading-tight">
            Market intelligence, delivered.
          </h2>
          <p className="text-neutral-300 tracking-tight md:max-w-[46ch]">
            Get new market landscape reports, white papers, and vertical
            analysis from STOC Advisory in your inbox.
          </p>
        </div>

        <div className="flex-1 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your business email"
              disabled={status === "submitting"}
              className="flex-1 bg-white rounded-full px-6 py-3 focus:outline-none disabled:opacity-70"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#18598b] text-white font-medium px-8 py-3 rounded-full hover:bg-[#59809f] cursor-pointer duration-300 tracking-tight disabled:opacity-70"
            >
              {status === "submitting" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
          {message && (
            <p
              className={`mt-3 text-sm ${
                status === "error" ? "text-red-300" : "text-green-300"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSignup;
