import React from "react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-white px-4 md:px-[5%] py-16 md:py-24">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* image column */}
        <div className="relative hidden md:flex w-full h-64 md:h-[50vh]">
          <Image
            src="/cfo-2-new.jpg"
            alt="CFO Advisory"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* text column */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-gambetta tracking-tight leading-[1.3] text-gray-900 max-w-prose">
            We advise our clients through an array of services to elevate
            financial strategy, accelerate sustainable growth, optimize
            financial performance, and maximize value.
          </h2>
        </div>
        <div className="relative md:hidden flex w-full h-64 md:h-[50vh]">
          <Image
            src="/cfo-2-new.jpg"
            alt="CFO Advisory"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
