// src/components/OverviewCard.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PrimaryButton } from "../Button";
import { LottieIcon } from "../icons/GlobeIcon";
import type { LottieIconProps } from "../icons/GlobeIcon";

/**
 * cards[].animatedData must match LottieIconProps["data"].
 */
export interface OverviewCardProps {
  title: string;
  description: string;
  href: string;
  cta?: string;
  animatedData: LottieIconProps["data"];
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  description,
  cta,
  href,
  animatedData,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full bg-white items-start px-5 py-4 md:px-8 md:py-8 flex-1 relative border border-neutral-200 rounded-md flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="md:absolute top-4 right-4 p-3 md:p-4 border border-neutral-200 rounded-lg">
        <LottieIcon
          play={hovered}
          data={animatedData}
          width="36px"
          height="36px"
        />
      </div>

      <h3 className="mt-4 md:mt-0 text-2xl md:text-3xl font-gambetta text-gray-900 leading-tight tracking-tight">
        {title}
      </h3>

      <p className="text-neutral-600 tracking-tight mt-2 text-md md:text-lg">
        {description}
      </p>

      <Link className="mt-4 md:mt-5 w-full md:w-auto" href={href}>
        <PrimaryButton>{cta ?? "Learn More"}</PrimaryButton>
      </Link>
    </div>
  );
};

export default OverviewCard;
