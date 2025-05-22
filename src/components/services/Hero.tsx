import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh] md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-36 md:pt-0 bg-[#041E40] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 flex-col items-start h-full justify-center flex-1">
      <div>
        <h1 className="text-[#d7ebf5] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Scaling Portfolio Companies with Confidence
        </h1>
        <p className="text-[#d7ebf5] text-lg md:text-xl mt-4 md:max-w-[52ch] leading-relaxed">
          Hands-on enablement, AI-driven workflows, and real-time KPI tracking
          to accelerate post-acquisition growth.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-8 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]">
      <Image
        src="/blue-home-hero.jpeg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-right rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div
        className="absolute inset-0 rounded-lg bg-blue-300 opacity-30 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
  </section>
);

export default Hero;
