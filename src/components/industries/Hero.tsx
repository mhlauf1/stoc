import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[95vh] bg-white flex">
      <div className="px-6 justify-center flex flex-col items-center w-full md:px-12 h-full lg:px-32">
        <div className="flex items-center gap-6 flex-col">
          <Link className="z-10" href="/about">
            <button className="bg-black/90 tracking-wide cursor-pointer gap-2 flex text-sm border  border-white/20 hover:border-white/60 duration-200 hover:text-white hover:shadow-xs text-neutral-200 px-4 py-1.5 rounded-full">
              Sign up for the stoc newsletter.{" "}
              <span className="text-white font-semibold flex flex-row gap-1 items-center">
                Sign up now <ArrowUpRight size={16} strokeWidth={"2"} />
              </span>
            </button>
          </Link>
          <h1 className="text-5xl text-center tracking-tighter md:max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight ">
            Industry expertise that <br />
            <span className="italic font-gambetta">
              drives transaction success
            </span>
          </h1>
          <p className="text-center text-lg md:text-xl md:max-w-[64ch] text-neutral-600">
            We combine deep sector expertise with a proven transformation
            playbook—helping you navigate complexity, mitigate risk, and seize
            new opportunities.
          </p>

          <div className="flex absolute bottom-8 items-center mb-6 gap-12">
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Business Services
            </p>
            <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Cannabis{" "}
            </p>
            <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Healthcare{" "}
            </p>
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Hospitality & Entertainment
            </p>
            <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Manufacturing & Distribution
            </p>
            <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Retail & Consumer Products
            </p>
            <p className="text-sm md:text-base text-neutral-500 tracking-wide">
              Technology, Media, & Telecommunications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
