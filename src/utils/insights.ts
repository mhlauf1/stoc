import {
  CONTENT_TYPE_OPTIONS,
  INDUSTRY_OPTIONS,
} from "@/sanity/schemaTypes/constants";
import type { InsightDoc } from "@/sanity/lib/types";

// "2026-06-01" -> "June 2026" (UTC to avoid timezone off-by-one).
export const formatMonthYear = (dateStr?: string): string => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00Z");
  if (isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
};

// "2026-08-13" -> "August 13, 2026" (UTC to avoid timezone off-by-one).
export const formatFullDate = (dateStr?: string): string => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00Z");
  if (isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
};

export const pressReleaseHref = (slug: string): string =>
  `/insights/news/${slug}`;

export const contentTypeLabel = (value?: string): string =>
  CONTENT_TYPE_OPTIONS.find((o) => o.value === value)?.title ?? value ?? "";

export const industryLabel = (value?: string): string =>
  INDUSTRY_OPTIONS.find((o) => o.value === value)?.title ?? value ?? "";

// Where an insight card/link should point: the on-site report page, the
// uploaded PDF, or the external URL.
export const insightHref = (insight: InsightDoc): string | undefined => {
  if (insight.sourceType === "report" && insight.reportSlug) {
    return `/insights/reports/${insight.reportSlug}`;
  }
  return insight.sourceType === "url" ? insight.externalUrl : insight.pdfUrl;
};
