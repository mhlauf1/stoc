// app/components/IntroServices.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function IntroServices() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scale factor reduced from 0.1 to 0.02
  const driftFactor = 0.02;

  return (
    <section className="relative py-48 bg-white overflow-hidden">
      <div className="flex items-center justify-center relative">
        {/* Left Image */}
        <div
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
          style={{ transform: `translateY(${offsetY * driftFactor}px)` }}
        >
          <div className="relative w-[15vw] h-[300px]">
            <Image
              src="/services-1.png"
              alt="Left"
              fill
              className="rounded-r-lg object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col text-center items-center">
          <img src="/logo-1.png" alt="Logo" className="mx-auto mb-6 h-10" />
          <p className="text-3xl tracking-tighter max-w-[42ch] md:text-4xl font-gambetta text-neutral-900 leading-relaxed">
            STOC Advisory partners with middle-market businesses and private
            equity sponsors to unlock value at every stage—accelerating growth
            and delivering lasting impact.
          </p>
          <button className="mt-16 flex flex-row gap-4 items-center font-medium bg-[#07171E] text-white px-8 py-4 rounded-full text-lg hover:bg-neutral-200 cursor-pointer transition">
            Explore Services
            <ArrowUpRight size={28} strokeWidth={2} />
          </button>
        </div>

        {/* Right Image */}
        <div
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"
          style={{ transform: `translateY(-${offsetY * driftFactor}px)` }}
        >
          <div className="relative w-[15vw] h-[300px]">
            <Image
              src="/services-2.png"
              alt="Right"
              fill
              className="rounded-l-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
