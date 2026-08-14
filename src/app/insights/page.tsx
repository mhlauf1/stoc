import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { INSIGHTS_QUERY, PRESS_RELEASES_QUERY } from "@/sanity/lib/queries";
import type { InsightDoc, PressReleaseDoc } from "@/sanity/lib/types";
import FeaturedInsight from "@/components/insights/FeaturedInsight";
import InsightCard from "@/components/insights/InsightCard";
import ReportCard from "@/components/insights/ReportCard";
import PressReleaseCard from "@/components/insights/PressReleaseCard";
import NewsletterSignup from "@/components/insights/NewsletterSignup";

export const metadata: Metadata = {
  title: "Insights | STOC Advisory",
  description:
    "Market landscape reports, white papers, and vertical analysis from STOC Advisory.",
};

export default async function InsightsPage() {
  const [insights, pressReleases] = await Promise.all([
    sanityFetch<InsightDoc[]>({ query: INSIGHTS_QUERY }),
    sanityFetch<PressReleaseDoc[]>({ query: PRESS_RELEASES_QUERY }),
  ]);

  // On-site industry reports get their own section; everything else keeps the
  // featured-hero + grid layout.
  const reports = insights.filter((i) => i.sourceType === "report");
  const others = insights.filter((i) => i.sourceType !== "report");

  // Query orders featured first, then newest — so the lead item is the featured
  // piece (or the newest, if nothing is toggled featured).
  const [featured, ...rest] = others;

  return (
    <main className="bg-[#F7F7F7] min-h-screen">
      <div className="px-4 md:px-[5%] pt-[15vh] pb-16 md:pb-24 flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <header className="flex flex-col gap-4 max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "2px" }}
              className="uppercase text-neutral-600 text-xs"
            >
              Insights
            </span>
          </div>
          <h1 className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-gambetta tracking-tight leading-tight">
            Research &amp; Industry Perspectives
          </h1>
          <p className="text-neutral-600 md:text-lg tracking-tight">
            Market landscape reports, white papers, and vertical-specific
            analysis from across STOC Advisory&apos;s core verticals and service
            lines.
          </p>
        </header>

        {reports.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-gambetta tracking-tight text-neutral-800">
              Industry Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reports.map((insight, i) => (
                <ReportCard key={insight._id} insight={insight} index={i} />
              ))}
            </div>
          </section>
        )}

        {pressReleases.length > 0 && (
          <section id="news" className="flex flex-col gap-8 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-gambetta tracking-tight text-neutral-800">
              News &amp; Press
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((release, i) => (
                <PressReleaseCard key={release._id} release={release} index={i} />
              ))}
            </div>
          </section>
        )}

        {featured ? (
          <>
            <FeaturedInsight insight={featured} />

            {rest.length > 0 && (
              <section className="flex flex-col gap-8">
                <h2 className="text-2xl md:text-3xl font-gambetta tracking-tight text-neutral-800">
                  More Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((insight, i) => (
                    <InsightCard key={insight._id} insight={insight} index={i} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : insights.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-neutral-600 md:text-lg tracking-tight">
              New insights are coming soon. Subscribe below to be the first to
              read them.
            </p>
          </div>
        ) : null}

        <NewsletterSignup />
      </div>
    </main>
  );
}
