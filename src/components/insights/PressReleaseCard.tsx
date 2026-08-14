"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import type { PressReleaseDoc } from "@/sanity/lib/types";
import { formatFullDate, pressReleaseHref } from "@/utils/insights";
import { trackEvent } from "@/utils/gtag";

const PressReleaseCard: React.FC<{
  release: PressReleaseDoc;
  index?: number;
}> = ({ release, index = 0 }) => {
  const href = pressReleaseHref(release.slug);

  const eventParams = {
    release_name: release.slug,
    release_title: release.title,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
    >
      {release.coverImageUrl && (
        <div className="relative w-full h-[180px]">
          <Image
            src={release.coverImageUrl}
            alt={release.coverImageAlt || release.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            style={{ letterSpacing: "1.5px" }}
            className="uppercase text-[10px] font-medium text-[#18598b] bg-[#18598b]/10 px-2 py-1 rounded-full"
          >
            Press Release
          </span>
          <span className="text-xs text-neutral-500">
            {formatFullDate(release.publishDate)}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-gambetta tracking-tight text-neutral-800 leading-snug">
          {release.title}
        </h3>

        <p className="text-neutral-600 text-sm md:text-base leading-7 flex-1">
          {release.excerpt}
        </p>

        <span className="inline-flex items-center gap-1 text-[#18598b] font-medium group-hover:gap-2 transition-all w-fit">
          Read
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Stretched link: makes the whole card open the release page. */}
      <Link
        href={href}
        aria-label={`Read: ${release.title}`}
        onClick={() => {
          trackEvent("press_release_click", eventParams);
          track("Press Release Click", eventParams);
        }}
        className="absolute inset-0 z-10"
      />
    </motion.article>
  );
};

export default PressReleaseCard;
