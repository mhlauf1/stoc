import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row bg-[#07171E] h-auto md:h-[95vh]">
      {/* Text Column */}
      <div className="flex-1 flex flex-col justify-center pt-[15vh] md:pt-0 px-4 md:px-12 lg:px-32 py-12 md:py-0">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gambetta tracking-tight leading-none text-white md:max-w-[20ch]">
            Turning complex transactions into{" "}
            <span className="italic font-gambetta">opportunity.</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-white md:max-w-[42ch]">
            From deep‐dive due diligence to seamless integration, we ensure
            every deal captures maximum value.
          </p>
        </div>

        {/* Mobile-only image, inside the text padding */}
        <div className="relative w-full h-64 mt-16 md:hidden">
          <Image
            src="/handshake.jpg"
            alt="STOC Industries"
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>

        <div
          className="
        hidden md:flex flex-col mt-8
        items-start gap-4
      "
        >
          {[
            "Transaction Advisory Services",
            "Corporate Development Support",
            "Growth Enablement Services",
            "CFO Advisory",
          ].map((label) => (
            <span
              key={label}
              className="text-sm text-neutral-300 tracking-wide"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop-only Image Column */}
      <div className="flex-1 relative hidden md:block">
        <Image
          src="/handshake.jpg"
          alt="STOC Industries"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
