"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { LottieIcon } from "./icons/GlobeIcon";
import globeData from "../../public/white-globe.json";

export default function NewsLetterBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="z-10 w-auto"
      href="#newsletter"
    >
      <button className="bg-white/10  items-center cursor-pointer flex text-sm md:text-base border  gap-2 border-white/20 hover:border-white/60 duration-200 hover:text-white hover:shadow-xs text-neutral-50 px-4 py-1.5 rounded-full">
        <div className="flex flex-row items-center gap-1">
          <LottieIcon
            play={hovered}
            height="24px"
            width="24px"
            data={globeData}
          />
          Join the Stoc newsletter.{" "}
        </div>

        <span className="text-white font-semibold flex flex-row gap-1 items-center">
          Sign up now <ArrowUpRight size={16} strokeWidth={"2"} />
        </span>
      </button>
    </Link>
  );
}
