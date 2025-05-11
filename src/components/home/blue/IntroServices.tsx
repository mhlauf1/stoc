"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="flex items-center justify-center relative">
        {/* Left Image */}
        <div
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
          style={{ transform: `translateY(${offsetY * driftFactor}px)` }}
        >
          <div className="relative w-[15vw] h-[300px]">
            <Image
              src="/blue-intro-1.jpeg"
              alt="Left"
              fill
              className="rounded-r-lg object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col text-center items-center">
          <div className="flex items-center mb-12 justify-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-xs font-mono"
            >
              Stoc Advisory
            </span>
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
          </div>
          <p className="text-3xl tracking-tighter max-w-[42ch] md:text-4xl font-gambetta text-neutral-900 leading-relaxed">
            STOC Advisory partners with middle-market businesses and private
            equity sponsors to unlock value at every stage—accelerating growth
            and delivering lasting impact.
          </p>
        </div>

        {/* Right Image */}
        <div
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2"
          style={{ transform: `translateY(-${offsetY * driftFactor}px)` }}
        >
          <div className="relative w-[15vw] h-[300px]">
            <Image
              src="/home-img-1.jpeg"
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
