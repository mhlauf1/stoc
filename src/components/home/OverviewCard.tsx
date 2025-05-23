// components/OverviewCard.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { PrimaryButton } from "../Button";
import { LottieIcon } from "../icons/GlobeIcon";

export interface OverviewCardProps {
  title: string;
  description: string;
  href: string;
  cta?: string;
  animatedData: any;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  description,
  href,
  animatedData,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full bg-linear-to-r from-white via-neutral-50 to-white px-5 py-4 md:px-8 md:py-8 flex-1 relative border border-neutral-200 rounded-md flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-row w-full  items-start gap-4 flex-1">
        <div className="flex flex-col items-start w-full border-neutral-300">
          <div className="md:absolute mb-2 md:mb-0 top-4 right-4">
            <div className="p-3 md:p-4 border border-neutral-200  rounded-lg">
              {/* only plays when hovered === true */}
              <LottieIcon play={hovered} data={animatedData} />
            </div>
          </div>

          <div className="flex flex-row mt-3 justify-between items-center w-full">
            <h3 className="text-3xl md:text-4xl font-gambetta text-gray-900 leading-tight tracking-tighter">
              {title}
            </h3>
          </div>

          <p className="text-neutral-600 tracking-tight mt-2 md:mt-4 text-md md:text-lg">
            {description}
          </p>

          <Link className="mt-4 md:mt-5 w-full md:w-auto flex" href={href}>
            <PrimaryButton>Learn More</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
