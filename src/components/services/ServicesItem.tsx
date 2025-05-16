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
};

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
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8`}
    >
      {/* Text Column */}
      <div className={`flex-1 px-4 ${reverse ? "pl-8" : ""}`}>
        <span className="uppercase text-gray-600 text-xs font-mono tracking-widest">
          {badge}
        </span>
        <h3 className="mt-2 text-2xl sm:text-4xl max-w-[20ch] leading-normal md:text-5xl font-gambetta tracking-tighter">
          {title}
        </h3>
        <p className="mt-4 text-neutral-600 text-lg md:text-xl w-[90%] leading-relaxed">
          {desc}
        </p>
        <Link href={href} className="mt-6 inline-block">
          <PrimaryButton>Learn More</PrimaryButton>
        </Link>
      </div>

      {/* Image Column */}
      <div className="flex-1 px-4">
        <div className="relative w-full aspect-[5/6] rounded-2xl overflow-hidden">
          <Image src={src} alt={title} fill className="object-cover" />
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
