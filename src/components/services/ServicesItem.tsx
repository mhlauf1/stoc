// components/ServicesItem.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton } from "../Button";
import type { ServicesPageProps } from "@/utils/types";
import { ChartPie, GitMerge, TrendingUp, Calculator } from "lucide-react";

const iconMap = {
  "Transaction Advisory Services": ChartPie,
  "Corporate Development Support": GitMerge,
  "Growth Enablement Services": TrendingUp,
  "CFO Advisory": Calculator,
} as const;

type IconMap = typeof iconMap;
type BadgeKey = keyof IconMap;

const ServicesItem: React.FC<ServicesPageProps> = ({
  badge,
  title,
  desc,
  src,
  href,
  reverse,
}) => {
  const key = badge as BadgeKey;
  const Icon = iconMap[key] ?? ChartPie;

  return (
    <div
      className={`flex border-b border-neutral-300 md:border-0 flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-4 md:gap-8`}
    >
      {/* Text Column */}
      <div className={`flex-1  px-4 rounded-md  ${reverse ? "md:pl-8" : ""}`}>
        <span className="uppercase text-gray-600 text-xs font-mono tracking-widest">
          {badge}
        </span>
        <h3 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-gambetta tracking-tighter">
          {title}
        </h3>
        <p className="mt-2 text-neutral-600 text-lg md:text-xl leading-relaxed">
          {desc}
        </p>
        <Link href={href} className="mt-6 inline-block">
          <PrimaryButton>Learn More</PrimaryButton>
        </Link>

        {/* Mobile Image */}
        <div className="relative w-full h-96 mt-6 mb-8 rounded-2xl overflow-hidden md:hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-center"
          />
          <div
            className={`absolute top-4 ${
              reverse ? "left-4" : "right-4"
            } bg-white h-14 w-14 rounded-md flex items-center justify-center`}
          >
            <Icon className="h-6 w-6 text-black/90 drop-shadow" />
          </div>
        </div>
      </div>

      {/* Image Column (shown on all breakpoints) */}
      <div className="flex-1 px-4">
        <div className="relative w-full h-64  hidden md:flex md:h-auto aspect-square rounded-2xl overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-center"
          />
          <div
            className={`absolute top-6 ${
              reverse ? "left-6" : "right-6"
            } bg-white h-[70px] w-[70px] rounded-md`}
          >
            <Icon className="absolute inset-0 m-auto h-6 w-6 text-black/90 drop-shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
