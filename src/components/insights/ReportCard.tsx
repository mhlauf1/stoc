"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { track } from "@vercel/analytics";
import type { InsightDoc } from "@/sanity/lib/types";
import { formatMonthYear, industryLabel } from "@/utils/insights";
import { trackEvent } from "@/utils/gtag";

// Card for on-site industry reports (sourceType "report"): unlike InsightCard
// it has two explicit actions — read the HTML report or download the PDF — so
// there is no stretched full-card link.
const ReportCard: React.FC<{ insight: InsightDoc; index?: number }> = ({
  insight,
  index = 0,
}) => {
  const readHref = insight.reportSlug
    ? `/insights/reports/${insight.reportSlug}`
    : undefined;

  const eventParams = {
    report_name: insight.reportSlug ?? insight.slug,
    report_title: insight.title,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
      viewport={{ once: true, amount: 0.1 }}
      className="flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all"
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
            Industry Report
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

        <div className="flex items-center gap-3 flex-wrap pt-1">
          {readHref && (
            <Link
              href={readHref}
              onClick={() => {
                trackEvent("report_read", eventParams);
                track("Report Read", eventParams);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#16333A] text-white text-sm font-medium hover:bg-[#18598b] transition-colors"
            >
              Read Report
              <ArrowUpRight size={16} />
            </Link>
          )}
          {insight.pdfUrl && (
            <a
              href={insight.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("report_download", eventParams);
                track("Report Download", eventParams);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#16333A]/40 text-[#16333A] text-sm font-medium hover:bg-[#16333A] hover:text-white transition-colors"
            >
              Download PDF
              <Download size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ReportCard;
