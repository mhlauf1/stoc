import React from "react";

const Mission: React.FC = () => (
  <section className="px-6 bg-[#F7F7F7] md:px-12 lg:px-[5vw] py-16 md:py-16">
    <div className="flex flex-col pt-[8vh] items-center gap-[5vw]">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center mb-6 gap-4">
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-600 text-xs font-mono"
          >
            Our Company
          </span>
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-gambetta tracking-tighter leading-tight text-center max-w-[26ch]">
          Partnering with clients through every stage of the acquisition
          lifecycle
        </h1>
        <p className="leading-7 md:leading-8 text-center md:max-w-[64ch] text-md md:text-lg text-neutral-600 mt-8 ">
          STOC Advisory is a business advisory firm specializing in transaction
          advisory services, corporate development, and CFO advisory.
        </p>
      </div>
    </div>
  </section>
);

export default Mission;
