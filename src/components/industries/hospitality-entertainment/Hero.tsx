import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-12  bg-[#041E40] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 mb-2 md:mb-0 flex-col items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#d7ebf5] text-3xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[21ch] leading-tight tracking-tighter">
          Future-Proofing Hospitality & Entertainmen
        </h1>
        <p className="text-[#d7ebf5] text-lg md:text-xl mt-4 md:max-w-[52ch] tracking-tight">
          Financial, strategic and operational guidance to help hotels, resorts
          and leisure brands thrive in a post-COVID, volatile market.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-[40vw] h-[45vh] md:h-[65vh]">
      <Image
        src="/hospitality.jpg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        sizes="(min-width: 768px) 50vw, 100vw"
      />{" "}
    </div>
  </section>
);

export default Hero;
