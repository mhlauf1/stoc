import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="h-[85vh]  relative overflow-hidden">
    {/* Background image */}
    <Image
      src="/cannabis-hero.jpg"
      fill
      className="object-cover object-center"
      alt="Transaction Advisory background"
    />

    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-4 items-start justify-end py-24 h-full px-6 md:px-12 lg:px-[5vw] text-start">
      <h1 className="text-5xl text-start text-white tracking-tighter  md:text-6xl font-gambetta lg:text-7xl leading-tight ">
        Cannabis
      </h1>
      <p className="text-white/90 text-md md:text-lg leading-relaxed max-w-[68ch]">
        The Rapid Rise of Legal Cannabis
      </p>
      <p className="text-white/90 text-md md:text-lg leading-relaxed max-w-[88ch]">
        As more states legalize cannabis for medical and recreational use, an
        entirely new ecosystem of growers, processors, distributors and
        service-providers has emerged—bringing enormous opportunity, but also
        significant complexity.
      </p>
    </div>
  </section>
);

export default Hero;
