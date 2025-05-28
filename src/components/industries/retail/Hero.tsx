import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh] relative flex flex-col md:flex-row gap-4 pt-36 md:pt-12 bg-[#bacaec] items-center px-4 md:px-[5%]">
    <div className="flex  flex-col items-start  md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Harnessing Technology-Driven Change for a Sustainable Future
        </h1>
        <p className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[52ch] tracking-tight">
          The retail landscape is undergoing a seismic shift fueled by
          technology-enabled trends, evolving consumer behaviors, and
          pandemic-induced demand for omnichannel experiences.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-8 md:mb-0 md:w-1/2 h-[45vh] md:h-[65vh]">
      <Image
        src="/ges-main.jpg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  </section>
);

export default Hero;
