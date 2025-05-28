import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh]  relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-12  bg-[#062010] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 flex-col items-start md:pt-0 flex-1">
      <div>
        <div className="flex items-center mb-4 md:mb-2 justify-start gap-4">
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-[#EFFFF3] text-xs"
          >
            Growing with Confidence
          </span>
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
        </div>
        <h1 className="text-[#EFFFF3] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Your Partner in Cannabis Excellence
        </h1>
        <p className="text-[#EFFFF3] tracking-tight text-lg md:text-xl mt-4 md:max-w-[52ch]">
          Expert financial, compliance and transaction guidance for every stage
          of your cannabis business.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-1/2 h-[45vh] md:h-[65vh]">
      <Image
        src="/cannabis-hero.png"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />{" "}
    </div>
  </section>
);

export default Hero;
