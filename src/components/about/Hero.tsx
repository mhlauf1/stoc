import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col pb-8 md:flex-row md:h-[85vh]">
      {/* Background */}
      <Image
        src="/dark-green-bg.png"
        alt="STOC About"
        fill
        className="absolute -z-10 object-cover"
      />

      {/* Left column: text */}
      <div className="z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-32 pb-8 md:pb-24 pt-[15vh] md:pt-64">
        <Link href="/about/team" className="mb-6">
          <button className="bg-white/10 tracking-wide flex items-center gap-2 text-sm border border-white/20 text-neutral-200 px-4 py-1.5 rounded-full hover:border-white/60 hover:text-white transition">
            Trusted Advising.{" "}
            <span className="flex items-center gap-1 font-semibold text-white">
              Meet the Team <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </button>
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gambetta tracking-tight leading-tight text-white max-w-[20ch]">
          Built on Expertise.
          <br />
          <span className="italic font-gambetta">Defined by Trust.</span>
        </h1>

        <p className="mt-8 md:mb-16 text-md sm:text-lg md:text-xl text-white max-w-2xl">
          At STOC Advisory, we turn complexity into clarity—offering hands-on
          support in due diligence, negotiation, and integration to ensure your
          transactions deliver measurable value.
        </p>
      </div>

      {/* Right column: portrait */}
      <div className="z-10 flex-1 flex justify-end items-center px-6 md:px-12 lg:px-32">
        <Image
          src="/sean-sam.png"
          alt="Advisor Portrait"
          width={500}
          height={700}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
