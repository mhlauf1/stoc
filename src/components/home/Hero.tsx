import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen  flex">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image className="-z-1" fill src="/hero-stoc.png" alt="STOC hero" />
      </div>
      <div className="flex flex-col justify-between py-24 pt-64 items-start">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="max-w-5xl">
            <div className="flex items-center mb-6 gap-4">
              <div className="h-[1px] bg-neutral-300 w-[60px]" />
              <span
                style={{ letterSpacing: "3px" }}
                className="uppercase text-neutral-100 text-xs font-mono"
              >
                Start Your Diligence Journey
              </span>
              <div className="h-[1px] bg-neutral-300 w-[60px]" />
            </div>
            <h1 className="text-5xl  tracking-tighter max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
              Where Strategic Transactions{" "}
              <span className="font-gambetta italic">
                Meet Exceptional Advising
              </span>
            </h1>
            <p className="mt-8 mb-16 text-lg md:text-xl max-w-lg text-white">
              Guiding you through every stage of the acquisition lifecycle with
              precision, insight, and proven expertise.{" "}
            </p>
            <div className="flex flex-col items-start text-white  ">
              <button className=" flex flex-row gap-4 items-center font-medium bg-white text-green-950  px-8 py-4 rounded-full text-lg hover:bg-neutral-200 cursor-pointer transition">
                Schedule a Consultation{" "}
                <ArrowUpRight size={28} strokeWidth={"2"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
