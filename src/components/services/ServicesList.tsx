"use client";
import { servicesPageData } from "@/utils/data";
import ServicesItem from "./ServicesItem";

const IndustryList = () => (
  <section className="bg-[#F7F7F7] mb-16 py-16 md:py-28 px-4 sm:px-12 md:px-20">
    <div className="md:max-w-[80vw] mx-auto flex flex-col">
      {/* header */}
      <div className="flex items-center mb-8 justify-center gap-4">
        <div className="h-px bg-neutral-300 w-12" />
        <span className="uppercase text-gray-600 text-xs font-mono tracking-widest">
          What We Do
        </span>
        <div className="h-px bg-neutral-300 w-12" />
      </div>
      <h3 className="text-2xl md:text-4xl text-center max-w-[42ch] mx-auto font-gambetta tracking-tighter leading-snug">
        Our seasoned advisors deliver data-driven insights and hands-on support—
        guiding decisions, optimizing performance, and turning strategic vision
        into measurable outcomes.
      </h3>

      {/* items */}
      <div className="mt-16 space-y-12 md:space-y-20">
        {servicesPageData.map((item, idx) => (
          <ServicesItem key={item.id} {...item} reverse={idx % 2 === 1} />
        ))}
      </div>
    </div>
  </section>
);

export default IndustryList;
