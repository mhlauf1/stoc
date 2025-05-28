import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh]  relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-12 bg-[#041E40] items-center px-4 md:px-[5%]">
    <div className="flex flex-col mt-8 items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#bacaec] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Accelerate M&A Growth Without Adding Headcount
        </h1>
        <p className="text-[#bacaec] text-lg md:text-xl mt-4 md:max-w-[52ch] tracking-tight leading-relaxed">
          We plug directly into your deal team for sourcing, diligence,
          integration and reporting so you can close more deals faster.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]">
      <Image
        src="/cds-hero.jpg"
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
