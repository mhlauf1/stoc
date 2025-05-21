import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Hero: React.FC = () => (
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4  bg-[#232323] items-center px-6 md:px-24">
    <div className="flex  flex-col items-start pt-[15vh] md:pt-0 flex-1">
      <div>
        <Link href="/about/team" className="mb-6">
          <button className="bg-white/10 tracking-wide flex items-center gap-2 text-sm border border-white/20 text-neutral-200 px-4 py-1.5 rounded-full hover:border-white/60 hover:text-white transition">
            Trusted Advising.{" "}
            <span className="flex items-center gap-1 font-semibold text-white">
              Meet the Team <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </button>
        </Link>
        <h1 className="text-[#d7ebf5] mt-2 text-4x md:max-w-[16ch] md:text-5xl lg:text-6xl font-gambetta  leading-tight tracking-tighter">
          Built on Expertise. Defined by Trust.
        </h1>
        <p className="text-[#d7ebf5] text-lg md:text-xl mt-4 md:max-w-[52ch] leading-relaxed">
          At STOC Advisory, we turn complexity into clarity—offering hands-on
          support in due diligence, negotiation, and integration to ensure your
          transactions deliver measurable value.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-8 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]">
      <Image
        src="/blue-intro-1.jpeg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-right rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  </section>
);

export default Hero;
