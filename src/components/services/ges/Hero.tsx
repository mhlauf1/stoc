import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh] relative flex flex-col md:flex-row gap-4 pt-36 md:pt-12 bg-[#bacaec] items-center px-4 md:px-[5%]">
    <div className="flex  flex-col items-start  md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Scaling Portfolio Companies with Confidence
        </h1>
        <p className="text-[#041E40] tracking-tight text-lg md:text-xl mt-4 md:max-w-[52ch]">
          Hands-on enablement, AI-driven workflows, and real-time KPI tracking
          to accelerate post-acquisition growth.
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
