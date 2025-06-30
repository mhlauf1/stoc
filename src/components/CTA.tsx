// src/components/CTA.tsx
"use client";
import React from "react";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <div id="newsletter">
      <section className="bg-white px-4 md:px-[5%] my-12 md:my-0 md:pb-24">
        <div className="bg-[#041E40] rounded-2xl px-4 py-16 md:py-24 flex flex-col items-center text-center gap-8">
          {/* Tagline */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-neutral-600 w-[30px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-200 text-xs"
            >
              Grow With STOC
            </span>
            <div className="h-px bg-neutral-600 w-[30px]" />
          </div>

          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-gambetta tracking-tight max-w-[16ch] leading-tight">
            Stay Informed with <br />
            <span className="italic font-gambetta">STOC Insights</span>
          </h2>

          {/* Subtext */}
          <p className="text-neutral-200 tracking-tight md:max-w-xl text-md sm:text-lg">
            Subscribe to receive newsletters on strategies, market intelligence,
            and best practices directly to your inbox.
          </p>

          {/* Animated Email form */}
          <form className="w-full flex flex-col md:flex-row gap-4 mt-4 justify-center">
            <div className="inline-flex w-full bg-white max-w-lg rounded-full overflow-hidden border-2 p-1 border-white">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-6 py-3 focus:outline-none"
              />
              <Link className="md:block hidden" href="/contact">
                <button
                  className="
                  bg-[#18598b] text-white
                  font-medium
                  px-8 md:px-10 py-4 rounded-full text-md
                  hover:bg-[#59809f]
                  cursor-pointer duration-300
                  tracking-tight
                  text-center
                  w-full
                "
                >
                  Subscribe
                </button>
              </Link>
            </div>
            <Link className="block md:hidden" href="/contact">
              <button
                className="
                bg-[#18598b] text-white
                font-medium
                px-8 md:px-10 py-4 rounded-full text-md
                hover:bg-[#59809f]
                cursor-pointer duration-300
                tracking-tight
                text-center
                w-full
              "
              >
                Subscribe
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CTA;
