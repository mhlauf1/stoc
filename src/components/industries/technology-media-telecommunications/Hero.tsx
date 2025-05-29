import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh]   relative flex flex-col md:flex-row mb-16 gap-4 pt-[10vh] md:pt-12  bg-[#F7F7F7] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 flex-col items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Powering the Digital Future Through Connectivity, Content & Innovation
        </h1>
        <p className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[52ch] tracking-tight">
          In a world defined by accelerating digital transformation, Technology,
          Media & Telecommunications (TMT) companies sit at the heart of every
          breakthrough.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-1/2 h-[45vh] md:h-[65vh]">
      <Image
        src="/medi.jpg"
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
