import React from "react";

const Intro: React.FC = () => (
  <section className="px-6 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] md:px-12 lg:px-32 py-12 mb-12 md:mb-24 md:py-20">
    <div className="flex justify-between items-center gap-16 flex-col md:flex-row ">
      <div className="flex flex-1 items-center flex-col">
        <div className="flex items-center mb-4 justify-center gap-4">
          <div className="h-px bg-neutral-300 w-8" />
          <span className="uppercase text-gray-600 text-xs font-mono tracking-widest">
            Stoc Advisory Corporate Support
          </span>
          <div className="h-px bg-neutral-300 w-8" />
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <p className="leading-7 md:leading-8 text-center md:max-w-[76ch] text-md md:text-lg text-neutral-600">
            STOC&apos;s Corporate Advisors deliver timely, accurate guidance
            through robust analysis—empowering you to make critical decisions
            that position your company for long-term success.
          </p>
          <p className="leading-7 md:leading-8 text-center md:max-w-[76ch] text-md md:text-lg text-neutral-600">
            Our hands-on approach combines deep sector knowledge with
            disciplined financial modeling to uncover value-creation pathways
            tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
