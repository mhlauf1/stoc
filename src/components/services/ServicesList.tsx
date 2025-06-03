"use client";
import { servicesPageData } from "@/utils/data";
import ServicesItem from "./ServicesItem";
import Image from "next/image";

const IndustryList = () => (
  <section className="bg-[#F7F7F7] md:mb-12 py-16 md:py-20 px-4 md:px-[5%]">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex flex-col flex-1 items-center md:items-start ">
        <div className="flex items-center mb-2 justify-center gap-4">
          <div className="h-px bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-neutral-600 text-xs"
          >
            What We Do
          </span>
          <div className="h-px bg-neutral-300 w-[30px]" />
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl  text-center md:text-start md:max-w-[20ch] mt-2 font-gambetta tracking-tighter leading-snug">
          Transforming Strategic Vision into Tangible Results
        </h3>
        <p className="text-neutral-600 text-center md:text-start tracking-tight  md:max-w-[58ch] mt-3 mb-5  text-md sm:text-lg md:text-xl">
          Our experienced advisors deliver data-driven insights and practical
          support to inform decision-making and enhance performance.
        </p>
        <p className="text-neutral-600 text-start md:text-center  tracking-tight font-medium md:max-w-[58ch] mt-1 text-md md:text-lg">
          Key Services:
        </p>
        <div className="grid  pt-4 w-full grid-cols-1  gap-4">
          {servicesPageData.map((item) => (
            <ServicesItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      {/* items */}
      <div className="flex relative flex-1">
        <Image
          src="/services-list.jpeg"
          className="object-cover rounded-lg"
          fill
          alt="Services"
        />
        <div
          className="absolute inset-0 rounded-lg bg-blue-300 opacity-30 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
);

export default IndustryList;
