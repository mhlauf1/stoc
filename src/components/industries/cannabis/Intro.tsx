import React from "react";
import CoreServices from "./CoreServices";

const Intro: React.FC = () => {
  return (
    <section className="px-4 mb-12 md:mb-16 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] lg:px-[5%] py-12 md:py-16">
      <div className="flex justify-between items-center gap-16 flex-col md:flex-row ">
        <div className="flex flex-1 items-start flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-[16ch] tracking-tight text-start font-gambetta ">
            Rooted in Compliance, Growing Your Future
          </h2>
          <p className="tracking-tight mt-4 text-start md:max-w-[84ch]  md:text-lg   text-neutral-600">
            Drawing on deep experience across cultivation, processing,
            distribution and ancillary sectors, STOC Advisory combines niche
            regulatory know-how with rigorous financial and operational
            analysis. We&apos;ve helped growers, manufacturers, distributors,
            technology vendors and investors resolve complex issues and capture
            growth in this fast-evolving market.
          </p>
          <div className="flex flex-col mt-8">
            <p className="tracking-tight mb-8 text-start md:max-w-[84ch] font-gambetta  text-xl md:text-2xl  text-neutral-800">
              Core Services:
            </p>
            <CoreServices />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
