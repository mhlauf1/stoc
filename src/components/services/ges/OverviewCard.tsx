// components/OverviewCard.tsx
"use client";
import React from "react";

export interface OverviewCardProps {
  number: string;
  title: string;
  description: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  number,
  title,
  description,
}) => (
  <div className="w-full bg-[#041E40] py-6 px-8 flex-1 border border-neutral-200 rounded-xl flex flex-col">
    <div className="flex flex-row w-full items-start gap-4 flex-1">
      <div className="flex flex-col items-start w-full border-neutral-300">
        <p className="text-white"></p>
        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-gambetta text-neutral-100 leading-tight tracking-tight">
            {number}. {title}
          </h3>
        </div>

        <p className="text-neutral-100 mt-2 md:mt-3  leading-7  text-md md:text-lg">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default OverviewCard;
