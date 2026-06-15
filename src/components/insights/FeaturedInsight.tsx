"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { InsightDoc } from "@/sanity/lib/types";
import {
  formatMonthYear,
  contentTypeLabel,
  industryLabel,
  insightHref,
} from "@/utils/insights";

const FeaturedInsight: React.FC<{ insight: InsightDoc }> = ({ insight }) => {
  const href = insightHref(insight);
  const cta = insight.contentType === "video" ? "Watch" : "Read";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-[#041E40] rounded-2xl overflow-hidden p-6 md:p-10"
    >
      <div className="relative w-full h-[240px] md:h-full min-h-[260px] rounded-xl overflow-hidden bg-[#0a2b54]">
        {insight.coverImageUrl && (
          <Image
            src={insight.coverImageUrl}
            alt={insight.coverImageAlt || insight.title}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="flex flex-col justify-center gap-4 text-white">
        <div className="flex items-center gap-3 flex-wrap">
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-[11px] font-medium text-white bg-white/15 px-3 py-1 rounded-full"
          >
            {contentTypeLabel(insight.contentType)}
          </span>
          <span className="text-sm text-neutral-300">
            {industryLabel(insight.industry)}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-gambetta tracking-tight leading-tight">
          {insight.title}
        </h2>

        <p className="text-sm text-neutral-300">
          {insight.author} · {formatMonthYear(insight.publishDate)}
        </p>

        <p className="text-neutral-200 leading-7 md:text-lg md:max-w-[52ch]">
          {insight.description}
        </p>

        {href && (
          <span className="inline-flex items-center gap-2 bg-[#18598b] group-hover:bg-[#59809f] text-white font-medium px-6 py-3 rounded-full transition-colors w-fit mt-2">
            {cta}
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>

      {/* Stretched link: makes the whole featured block open the PDF / URL. */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${cta}: ${insight.title}`}
          className="absolute inset-0 z-10"
        />
      )}
    </motion.article>
  );
};

export default FeaturedInsight;
