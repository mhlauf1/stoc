import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh]  relative flex flex-col md:flex-row gap-4  pt-[10vh] md:pt-12 bg-[#F7F7F7] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 flex-col items-start md:pt-0 flex-1">
      <div>
        <div className="flex items-center mb-6 gap-4">
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-neutral-600 text-xs"
          >
            Our Company
          </span>
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
        </div>
        <h1 className="text-[#041E40] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Partnering with clients through every stage of the acquisition
          lifecycle
        </h1>
        <p className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[52ch] tracking-tight">
          STOC Advisory is a business advisory firm specializing in transaction
          advisory services, corporate development, and CFO advisory.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]">
      <Image
        src="/about-main.jpg"
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
