import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh] mb-12 md:mb-24 relative overflow-hidden">
    {/* Background image */}
    <Image
      src="/bus-services-hero.jpg"
      fill
      className="object-cover object-center"
      alt="Transaction Advisory background"
    />

    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-black/50" />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-4 items-start justify-end py-24 h-full px-6 md:px-12 lg:px-[5vw] text-start">
      <h1 className="text-5xl text-start text-white tracking-tighter  md:text-6xl font-gambetta lg:text-7xl leading-tight ">
        Business & Professional Services
      </h1>
      <p className="text-white/90 text-md md:text-lg leading-relaxed max-w-[68ch]">
        The business services industry is experiencing rapid growth and
        disruption, and the fight for talent and differentiation is highly
        competitive. To truly stand out, businesses must embrace change and
        embark on frequent initiatives to best serve their clients’ evolving
        needs.
      </p>
    </div>
  </section>
);

export default Hero;
