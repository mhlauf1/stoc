import React from "react";
import { PrimaryButton } from "./Button";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="bg-white px-0 md:px-[5%] md:pb-24">
      <div className="bg-[#041E40] md:rounded-2xl px-4 py-16 md:py-24 flex flex-col items-center text-center gap-8">
        {/* Tagline */}
        <div className="flex items-center gap-4">
          <div className="h-px bg-neutral-600 w-16" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-200 text-xs font-mono"
          >
            Grow With STOC
          </span>
          <div className="h-px bg-neutral-600 w-16" />
        </div>

        {/* Headline */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-gambetta tracking-tighter max-w-[16ch] leading-tight">
          Stay Ahead with <br />
          <span className="italic font-gambetta">STOC Insights</span>
        </h2>

        {/* Subtext */}
        <p className="text-neutral-200 text-lg">
          Monthly strategies, market intelligence, and deal best
          practices—delivered straight to your inbox.{" "}
        </p>

        {/* Email form */}
        <form className="w-full flex flex-col md:flex-row gap-4 mt-4 justify-center">
          <div className="inline-flex w-full bg-white max-w-lg rounded-full overflow-hidden border-2 p-1 border-white">
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 px-6 py-3 focus:outline-none"
            />
            <Link className="md:block hidden" href="/contact">
              <PrimaryButton>Subscribe</PrimaryButton>
            </Link>
          </div>
          <Link className="block md:hidden" href="/contact">
            <PrimaryButton>Subscribe</PrimaryButton>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CTA;
