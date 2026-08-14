import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import { INSIGHTS_QUERY, PRESS_RELEASES_QUERY } from "@/sanity/lib/queries";
import type { InsightDoc, PressReleaseDoc } from "@/sanity/lib/types";
import ReportCard from "@/components/insights/ReportCard";
import PressReleaseCard from "@/components/insights/PressReleaseCard";

// Homepage teaser for the Insights section: the two newest industry reports
// plus the latest press release, linking through to /insights. Renders
// nothing if there is no content yet.
const LatestInsights: React.FC = async () => {
  const [insights, pressReleases] = await Promise.all([
    sanityFetch<InsightDoc[]>({ query: INSIGHTS_QUERY }),
    sanityFetch<PressReleaseDoc[]>({ query: PRESS_RELEASES_QUERY }),
  ]);

  const reports = insights
    .filter((i) => i.sourceType === "report")
    .sort((a, b) => (b.publishDate ?? "").localeCompare(a.publishDate ?? ""))
    .slice(0, 2);
  const latestRelease = pressReleases[0];

  if (reports.length === 0 && !latestRelease) return null;

  return (
    <section className="bg-[#F7F7F7] px-4 md:px-[5%] py-20 md:py-24">
      <div className="flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] bg-neutral-300 w-[30px]" />
              <span
                style={{ letterSpacing: "2px" }}
                className="uppercase text-neutral-600 text-xs"
              >
                Insights
              </span>
            </div>
            <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-gambetta tracking-tight leading-tight">
              Latest Research &amp; News
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-[#18598b] font-medium hover:gap-2.5 transition-all w-fit"
          >
            View all insights
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((insight, i) => (
            <ReportCard key={insight._id} insight={insight} index={i} />
          ))}
          {latestRelease && (
            <PressReleaseCard
              release={latestRelease}
              index={reports.length}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
