import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh] relative flex flex-col md:flex-row gap-4  pt-36 md:pt-12 bg-[#F7F7F7] items-center px-4 md:px-[5%]">
    <div className="flex  flex-col items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Mitigate Risk & Maximize Deal Value
        </h1>
        <p className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[52ch] leading-relaxed">
          Whether buying, building, or exiting an investment, every transaction
          poses risk. Our integrated due diligence approach helps you safeguard
          returns and capture upside.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-8 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]">
      <Image
        src="/tas-2.jpg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />{" "}
      <div
        className="absolute inset-0 bg-blue-400 opacity-30 mix-blend-multiply"
        aria-hidden="true"
      />{" "}
    </div>
  </section>
);

export default Hero;
