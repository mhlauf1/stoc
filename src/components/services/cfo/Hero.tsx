import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh]  relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-12  bg-[#F7F7F7] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 mb-2 md:mb-0 flex-col items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-3xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tight">
          Fractional CFO & Financial Strategy
        </h1>
        <p className="text-[#041E40] tracking-tight text-lg md:text-xl mt-4 md:max-w-[52ch]">
          Interim accounting and finance leadership to accelerate growth,
          optimize performance, and maximize value.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-1/2 h-[45vh] md:h-[65vh]">
      <Image
        src="/cfo-hero.jpg"
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
