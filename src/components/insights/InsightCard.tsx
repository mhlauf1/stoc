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

const ctaLabel = (contentType: string) =>
  contentType === "video" ? "Watch" : "Read";

const InsightCard: React.FC<{ insight: InsightDoc; index?: number }> = ({
  insight,
  index = 0,
}) => {
  const href = insightHref(insight);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      viewport={{ once: true, amount: 0.1 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
    >
      {insight.coverImageUrl && (
        <div className="relative w-full h-[180px]">
          <Image
            src={insight.coverImageUrl}
            alt={insight.coverImageAlt || insight.title}
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
            {contentTypeLabel(insight.contentType)}
          </span>
          <span className="text-xs text-neutral-500">
            {industryLabel(insight.industry)}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-gambetta tracking-tight text-neutral-800 leading-snug">
          {insight.title}
        </h3>

        <p className="text-sm text-neutral-500">
          {insight.author} · {formatMonthYear(insight.publishDate)}
        </p>

        <p className="text-neutral-600 text-sm md:text-base leading-7 flex-1">
          {insight.description}
        </p>

        {href && (
          <span className="inline-flex items-center gap-1 text-[#18598b] font-medium group-hover:gap-2 transition-all w-fit">
            {ctaLabel(insight.contentType)}
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>

      {/* Stretched link: makes the whole card open the PDF / external URL. */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${ctaLabel(insight.contentType)}: ${insight.title}`}
          className="absolute inset-0 z-10"
        />
      )}
    </motion.article>
  );
};

export default InsightCard;
