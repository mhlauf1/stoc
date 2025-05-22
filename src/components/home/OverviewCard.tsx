// components/OverviewCard.tsx
"use client";
import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { PrimaryButton } from "../Button";

export interface OverviewCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  Icon,
  title,
  description,
  href,
}) => (
  <div className="w-full bg-white py-6 px-8 flex-1 border border-neutral-200 rounded-md flex flex-col">
    <div className="flex flex-row w-full items-start gap-4 flex-1">
      <div className="flex flex-col items-start w-full border-neutral-300">
        <div className="  p-4 border border-neutral-200 rounded-lg">
          <Icon className=" size-5 text-[#18598b]" />
        </div>
        <div className="flex flex-row mt-3 justify-between items-center w-full">
          <h3 className="text-3xl  md:text-4xl font-gambetta text-gray-900 leading-tight tracking-tighter">
            {title}
          </h3>
          <Link className="hidden md:flex" href={href}>
            <PrimaryButton>Learn More</PrimaryButton>
          </Link>
        </div>

        <p className="text-neutral-500  mt-3 leading-7  text-md md:text-lg">
          {description}
        </p>
        <Link className="md:hidden mt-3 w-full flex" href={href}>
          <PrimaryButton>Learn More</PrimaryButton>
        </Link>
      </div>
    </div>
  </div>
);

export default OverviewCard;
