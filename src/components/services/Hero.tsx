import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen bg-[#07171E] flex">
      <div className="px-6 justify-between flex flex-col items-center w-full md:px-12 pb-8 md:pb-16 pt-24 md:pt-64 lg:px-32">
        <div className="flex items-center flex-col">
          <Link className="z-10" href="/about">
            <button className="bg-white/10 tracking-wide cursor-pointer gap-2 flex text-sm border mb-6 border-white/20 hover:border-white/60 duration-200 hover:text-white hover:shadow-xs text-neutral-200 px-4 py-1.5 rounded-full">
              Sign up for the stoc newsletter.{" "}
              <span className="text-white font-semibold flex flex-row gap-1 items-center">
                Sign up now <ArrowUpRight size={16} strokeWidth={"2"} />
              </span>
            </button>
          </Link>
          <h1 className="text-5xl text-center tracking-tighter md:max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
            Turning complexity transactions into{" "}
            <span className="italic font-gambetta">opportunity.</span>
          </h1>
          <p className="mt-8 mb-12 text-center text-lg md:text-xl md:max-w-[42ch] text-white">
            From deep-dive due diligence to seamless integration, we ensure
            every deal captures maximum value.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <button className=" z-1 flex flex-row gap-4 items-center font-medium bg-white text-green-950  px-8 py-4 rounded-full text-lg hover:bg-neutral-200 cursor-pointer transition">
              Talk to an Advisor <ArrowUpRight size={28} strokeWidth={"2"} />
            </button>
          </div>
        </div>
        <div className="flex items-center mb-6 gap-12">
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            Due Diligence
          </p>
          <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            M&A Advisory
          </p>
          <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            CFO Advisory
          </p>
        </div>
      </div>
    </section>
  );
}
