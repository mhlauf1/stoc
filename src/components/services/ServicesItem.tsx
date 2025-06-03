"use client";
import React from "react";
import Link from "next/link";
import { PrimaryButton } from "../Button";
import type { ServicesPageProps } from "@/utils/types";

const ServicesItem: React.FC<ServicesPageProps> = ({ badge, desc, href }) => {
  return (
    <div className="flex bg-[#FCFCFC] border border-neutral-200 py-4 md:py-5 px-6 md:px-8 rounded-lg flex-col items-start">
      <h3 className="text-2xl md:text-3xl lg:text-4xl mt-3 font-gambetta tracking-tight text-start">
        {badge}
      </h3>
      <p className="text-neutral-600 mt-2 md:mt-3 mb-5 tracking-tight text-md sm:text-lg md:text-xl leading-relaxed text-start">
        {desc}
      </p>

      {/* CTA */}
      <Link className="w-full md:w-auto" href={href}>
        <PrimaryButton>Learn More</PrimaryButton>
      </Link>
    </div>
  );
};

export default ServicesItem;
