import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <section className="bg-[#F7F7F7]  px-6 md:px-12 lg:px-32 py-24 md:py-32">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex flex-col flex-1 items-start">
          <div className="flex items-center mb-4 justify-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-xs font-mono"
            >
              What we do
            </span>
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
          </div>
          <h2 className="text-3xl  tracking-tighter max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
            Tailored Expertise <br />
            <span className="font-gambetta italic">Across Key Industries</span>
          </h2>
          <p className="leading-8 text-lg text-neutral-600 mt-4">
            STOC is a business advisory firm specializing in accounting,
            finance, and operations. We partner with our clients to successfully
            prepare and execute all aspects of changes experienced across the
            business.
          </p>
          <button className="mt-16 flex flex-row gap-4 items-center font-medium bg-[#07171E] text-white px-8 py-4 rounded-full text-lg hover:bg-neutral-200 cursor-pointer transition">
            Meet the Team
            <ArrowUpRight size={28} strokeWidth={"2"} />
          </button>
        </div>
        <div className="flex justify-end flex-1">
          <Image
            src="/about-home.png"
            alt="Meet the STOC Team"
            height={420}
            width={660}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
