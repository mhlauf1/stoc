"use client";
import React, { useState, FormEvent } from "react";
import { PrimaryButton } from "./Button";

export default function NewsletterCtaSection() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with your newsletter provider
    console.log("Subscribe with:", email);
  };

  return (
    <section className="bg-[#07171E] py-20 md:py-32 px-4 sm:px-8 md:px-12">
      <div className="md:max-w-4xl mx-auto flex flex-col items-center w-full text-center">
        <div className="flex flex-row gap-4 mb-6 items-center">
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-100 text-xs font-mono"
          >
            Never miss a deal.
          </span>
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-tighter text-white font-gambetta  leading-tight mb-6">
          Get exclusive market insights
          <br />
          <span className="text-whitetext-3xl md:text-4xl lg:text-6xl italic tracking-tight  font-gambetta block">
            delivered monthly.
          </span>
        </h2>
        <p className="mb-10 text-lg md:text-xl text-white/70">
          Join STOC Advisory&apos;s newsletter for deal announcements, trends
          analysis, and expert takeaways.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full sm:flex-1
              bg-white text-neutral-900 placeholder-gray-500
              px-6 py-4
              rounded-full
              focus:outline-none focus:ring-2 focus:ring-[#16333A]
            "
          />

          <PrimaryButton>Subscribe</PrimaryButton>
        </form>
      </div>
    </section>
  );
}
