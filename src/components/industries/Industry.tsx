import React from "react";
import type { IndustryProps } from "@/utils/types";

const Industry: React.FC<IndustryProps> = ({
  id,
  title,
  tags,
  badge,
  desc1,
  desc2,
  supportText,
  reverse,
}) => {
  return (
    <div
      key={id}
      className={`flex ${
        reverse
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      }  gap-16 items-center md:h-[700px]`}
    >
      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-3">
          <span className="text-sm tracking-wide md:text-md text-emerald-900">
            {badge}
          </span>
          <h3 className="text-2xl md:text-4xl font-gambetta tracking-tighter">
            {title}
          </h3>
          <p className="text-neutral-600 leading-7 mb-4">{desc1}</p>
          {desc2 && <p className="text-neutral-600 leading-7 mb-4">{desc2}</p>}
        </div>
      </div>
      {/* RIGHT COLUMN */}
      <div className="flex flex-col items-start flex-1">
        <div className="relative w-full h-[600px] flex flex-col justify-between py-8 items-center rounded-xl overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-950 to-[#192e06] shadow-sm">
          {/* color overlay for duotone effect */}
          <div></div>
          <div>
            <p className="text-neutral-300 w-[36ch] text-center text-xl">
              {supportText}
            </p>
          </div>
          {/* pills container positioned bottom-left */}
          <div className=" flex flex-row gap-2">
            {tags.map((item) => (
              <div className="bg-white py-2 px-4 rounded-full" key={item}>
                <p className="text-neutral-500 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
