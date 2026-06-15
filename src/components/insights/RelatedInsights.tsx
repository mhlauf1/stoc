import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import { RELATED_INSIGHTS_QUERY } from "@/sanity/lib/queries";
import type { InsightDoc } from "@/sanity/lib/types";
import InsightCard from "./InsightCard";

type Props = {
  industry?: string;
  contentType?: string;
  limit?: number;
  eyebrow?: string;
  heading?: string;
};

// Self-fetching async server component. Renders a contextual band of related
// insights on service/industry pages. Returns null when nothing matches so the
// page never shows an empty section.
export default async function RelatedInsights({
  industry,
  contentType,
  limit = 3,
  eyebrow = "From STOC Insights",
  heading = "Related research",
}: Props) {
  const insights = await sanityFetch<InsightDoc[]>({
    query: RELATED_INSIGHTS_QUERY,
    params: {
      industry: industry ?? null,
      contentType: contentType ?? null,
      limit,
    },
  });

  if (!insights || insights.length === 0) return null;

  return (
    <section className="bg-[#F7F7F7] px-4 md:px-[5%] py-16 md:py-24">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="h-[1px] bg-neutral-300 w-[30px]" />
              <span
                style={{ letterSpacing: "2px" }}
                className="uppercase text-neutral-600 text-xs"
              >
                {eyebrow}
              </span>
            </div>
            <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-gambetta tracking-tight leading-tight">
              {heading}
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-[#18598b] font-medium hover:gap-2 transition-all w-fit"
          >
            View all insights
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <InsightCard key={insight._id} insight={insight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
