import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full pt-84 bg-gray-900 overflow-hidden flex items-center">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="flex items-center mb-6 gap-4">
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-neutral-200 text-xs font-mono"
            >
              Start Your Diligence Journey
            </span>
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
          </div>
          <h1 className="text-5xl  tracking-tighter max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
            Strategic Partners. <br />
            <span className="font-gambetta italic">Proven Results. </span>
          </h1>
          <p className="mt-8 mb-16 text-lg md:text-xl max-w-xl text-white">
            With over 600 successful engagements and deep sector expertise, Stoc
            partners with businesses to navigate complex transactions and drive
            value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
