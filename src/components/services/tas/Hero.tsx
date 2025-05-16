import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh] relative overflow-hidden">
    {/* Background image */}
    <Image
      src="/tas-hero.jpg"
      fill
      className="object-cover object-center"
      alt="Transaction Advisory background"
    />

    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-4 items-start justify-end py-24 h-full px-6 md:px-12 lg:px-[5vw] text-start">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-gambetta tracking-tight leading-tight max-w-[30ch]">
        Transaction Advisory Services
      </h1>
      <p className="text-white/80 text-md md:text-lg leading-relaxed max-w-[64ch]">
        Whether buying, building, or exiting an investment, every transaction
        possesses a certain degree of risk. STOC Advisory&apos;s integrated due
        diligence approach helps clients mitigate risk and maximize the value of
        every deal.
      </p>
    </div>
  </section>
);

export default Hero;
