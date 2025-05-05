import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-32 py-24">
      <div className="mx-auto max-w-7xl bg-[#232323] rounded-2xl px-12 md:px-20 py-8 md:py-24 flex flex-col items-center text-center gap-8">
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
          Ready to move your{" "}
          <span className="italic font-gambetta">business forward?</span>
        </h2>

        {/* Subtext */}
        <p className="text-neutral-300 text-lg">
          Partner with STOC to unlock growth and mitigate risk.
        </p>

        {/* Email form */}
        <form className="w-full flex mt-4 justify-center">
          <div className="inline-flex w-full bg-white max-w-lg rounded-lg overflow-hidden border-2 p-1 border-white">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#07171E] text-white rounded-lg px-6 py-3 flex items-center gap-2 hover:bg-gray-800 transition"
            >
              Get In Touch
              <ArrowUpRight size={20} strokeWidth={2} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CTA;
