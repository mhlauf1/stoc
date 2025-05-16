import React from "react";
import type { LucideIcon } from "lucide-react";

const Intro: React.FC = () => (
  <section className="px-6 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] md:px-12 lg:px-32 py-12 md:py-20">
    <div className="flex justify-between items-center gap-16 flex-col md:flex-row ">
      <div className="flex flex-1 items-center flex-col">
        <h2 className="text-3xl tracking-tighter text-center  md:text-4xl font-gambetta leading-normal">
          CFO Solutions for Growth & Performance
        </h2>
        <div className="flex flex-col gap-4 mt-6">
          <p className="leading-7 md:leading-8 text-center md:max-w-[84ch] text-md md:text-lg text-neutral-600">
            We apply deep industry expertise to a fully integrated financial &
            operational due diligence process—advising you on key deal
            considerations and ensuring every opportunity is realized to its
            fullest potential.
          </p>
          <p className="leading-7 md:leading-8 text-center md:max-w-[84ch] text-md md:text-lg text-neutral-600">
            Through a robust, repeatable workflow, we deliver proven results
            tailored to each transaction&apos;s unique needs, helping you
            mitigate risk and unlock maximum value.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
