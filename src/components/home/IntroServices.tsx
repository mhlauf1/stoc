"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { PrimaryButton } from "../Button";
import Link from "next/link";

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
    <section className="relative py-24 md:px-0 sm:px-8 px-4 md:py-42 bg-white overflow-hidden">
      <div className="flex  items-center justify-center relative">
        {/* Left Image */}
        <div
          className="hidden md:flex flex-1"
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
        <div className="flex flex-col flex-2 text-center items-center">
          <div className="flex items-center mb-8 md:mb-12 justify-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-xs font-mono"
            >
              Stoc Advisory
            </span>
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
          </div>
          <h2 className="text-2xl  sm:text-3xl tracking-tighter lg:max-w-[42ch] md:text-4xl lg:text-5xl font-gambetta text-neutral-900 leading-normal md:leading-relaxed">
            Unlocking Value at Every Stage
          </h2>
          <p className="leading-7 md:leading-8 text-center max-w-[56ch] mb-8 text-md md:text-lg text-neutral-600 md:mt-2">
            STOC Advisory partners with middle-market businesses and private
            equity sponsors to accelerate growth, mitigate risk, and deliver
            lasting impact.
          </p>
          <Link href="/about" className="w-full md:w-auto">
            <PrimaryButton>Learn More About Us</PrimaryButton>
          </Link>
        </div>

        {/* Right Image */}
        <div
          className="hidden justify-end md:flex flex-1"
          style={{ transform: `translateY(-${offsetY * driftFactor}px)` }}
        >
          <div className="relative w-[15vw] h-[300px]">
            <Image
              src="/drew-mike.png"
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
