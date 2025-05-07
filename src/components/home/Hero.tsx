import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen  flex">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image className="-z-1" fill src="/hero-stoc.png" alt="STOC hero" />
      </div>
      <div className="flex z-10 flex-col w-full px-6 md:px-12 lg:px-32 items-center justify-center">
        <Link className="z-10" href="/about">
          <button className="bg-white/10 tracking-wide cursor-pointer flex text-sm border mb-6 gap-2 border-white/20 hover:border-white/60 duration-200 hover:text-white hover:shadow-xs text-neutral-200 px-4 py-1.5 rounded-full">
            Sign up for the stoc newsletter.{" "}
            <span className="text-white font-semibold flex flex-row gap-1 items-center">
              Sign up now <ArrowUpRight size={16} strokeWidth={"2"} />
            </span>
          </button>
        </Link>

        <h1 className="text-5xl text-center tracking-tighter max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
          Where Strategic Transactions{" "}
          <span className="font-gambetta italic">
            Meet Exceptional Advising
          </span>
        </h1>
        <p className="mt-6 mb-12 text-lg text-center md:text-xl max-w-lg text-white">
          Guiding you through every stage of the acquisition lifecycle with
          precision, insight, and proven expertise.{" "}
        </p>
        <div className="flex flex-col items-start text-white  ">
          <button className=" z-1 flex flex-row gap-4 items-center font-medium bg-white text-green-950  px-8 py-4 rounded-full text-lg hover:bg-neutral-200 cursor-pointer transition">
            Schedule a Consultation <ArrowUpRight size={28} strokeWidth={"2"} />
          </button>
        </div>
      </div>
    </section>
  );
}
