import React from "react";

const Hero: React.FC = () => (
  <section className="px-6 bg-white md:px-12 lg:px-[5vw] py-16 md:py-24">
    <div className="flex flex-col pt-[8vh] items-center gap-[5vw]">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center mb-6 gap-4">
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-600 text-xs font-mono"
          >
            Strategic CFO Services
          </span>
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-gambetta tracking-tighter leading-tight text-center max-w-[26ch]">
          Fractional CFO & Financial Strategy
        </h1>
        <p className="leading-7 md:leading-8 text-center md:max-w-[64ch] text-md md:text-lg text-neutral-600 mt-8 ">
          Interim accounting and finance leadership to accelerate growth,
          optimize performance, and maximize value.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
