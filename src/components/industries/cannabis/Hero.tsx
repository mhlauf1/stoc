import React from "react";

const Hero: React.FC = () => (
  <section className="h-[85vh] relative flex flex-col md:flex-row items-center justify-center md:justify-start pt-0 md:pt-12 bg-[#062010] px-4 md:px-[5%] gap-4">
    <div className="flex flex-col items-center justify-center md:pt-0 flex-1">
      <div className="flex items-center mb-4 md:mb-2 justify-center gap-4">
        <div className="h-[1px] bg-neutral-300 w-[30px]" />
        <span
          style={{ letterSpacing: "3px" }}
          className="uppercase text-[#EFFFF3] text-sm font-mono"
        >
          Growing with Confidence
        </span>
        <div className="h-[1px] bg-neutral-300 w-[30px]" />
      </div>
      <h1 className="text-[#EFFFF3] text-center text-4xl md:text-5xl lg:text-6xl font-gambetta leading-tight tracking-tighter">
        Your Partner in Cannabis Excellence
      </h1>
      <p className="text-[#EFFFF3] text-lg md:text-xl text-center mt-4 md:max-w-[52ch] leading-relaxed">
        Expert financial, compliance and transaction guidance for every stage of
        your cannabis business
      </p>
    </div>
    <div className="bg-[#EFFFF3] h-[1px] absolute bottom-8 right-[7%] left-[7%]"></div>
  </section>
);

export default Hero;
