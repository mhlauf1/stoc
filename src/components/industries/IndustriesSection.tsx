import React from "react";
import { industryData } from "@/utils/data";
import { IndustryProps } from "@/utils/types";
import { PrimaryButton } from "../Button";
import Link from "next/link";
import Image from "next/image";

const IndustryCard: React.FC<IndustryProps> = ({
  title,
  src,
  supportText,
  href,
}) => (
  <div className="flex relative bg-white flex-col  rounded-lg border border-neutral-100">
    <div className="h-[200px] md:h-[250px] w-full relative">
      <Image
        src={src!}
        alt={title}
        fill
        className="rounded-t-lg object-cover"
      />
    </div>
    <div className="flex flex-col items-start justify-between pt-5 md:pt-6  mb-6 px-5 md:px-8 gap-2">
      <h3 className="text-3xl lg:text-3xl mt-2 tracking-tighter text-center md:text-start font-gambetta">
        {title}
      </h3>
      <p className="text-gray-600  tracking-tight">{supportText}</p>
      <Link className="mt-2 w-full md:w-auto" href={href!}>
        <PrimaryButton>Learn more</PrimaryButton>
      </Link>
    </div>
  </div>
);

const IndustryGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {industryData.map((svc) => (
      <IndustryCard key={svc.id} {...svc} />
    ))}
  </div>
);

const IndustriesSection: React.FC = () => (
  <section className="bg-[#F7F7F7] py-16 md:py-28">
    <div className="flex flex-col  px-4 sm:px-12 md:px-32">
      <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-16 items-center md:items-end gap-2 md:gap-4">
        <div className="flex md:mb-0 mb-4 flex-col gap-4">
          <div className="flex flex-row md:justify-start justify-center gap-4 items-center">
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-xs"
            >
              Industries we serve
            </span>
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
          </div>
          <h2 className="text-3xl text-center md:text-start tracking-tighter md:max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
            Driving sector specific growth and resilience through expert
            advisory.
          </h2>
        </div>
        <p className="text-gray-600  md:max-w-[64ch] text-lg text-center md:text-start tracking-tight">
          Our unique backgrounds and experiences in public accounting,
          investment banking, private equity, and consulting provides clients
          with a breadth of industry specific knowledge and expertise.
        </p>
      </div>
      <IndustryGrid />
    </div>
  </section>
);

export default IndustriesSection;
