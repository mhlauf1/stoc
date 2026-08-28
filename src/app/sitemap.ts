import type { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { PRESS_RELEASE_SLUGS_QUERY } from "@/sanity/lib/queries";

const BASE_URL = "https://www.stocadvisory.com";

const STATIC_ROUTES = [
  "/",
  "/services",
  "/services/corporate-development-support",
  "/services/growth-enablement-services",
  "/services/transaction-advisory-services",
  "/services/finance-data-intelligence",
  "/industries",
  "/industries/business-services",
  "/industries/healthcare",
  "/industries/hospitality-entertainment",
  "/industries/manufacturing-distribution",
  "/industries/retail-consumer-products",
  "/industries/technology-media-telecommunications",
  "/insights",
  // Static report viewers served from public/reports-html via rewrite
  "/insights/reports/us-commercial-landscaping-2026",
  "/insights/reports/us-veterinary-services-2026",
  "/insights/reports/us-medical-aesthetics-2026",
  "/about",
  "/about/company",
  "/about/team",
  "/about/locations",
  "/about/careers",
  "/about/brands",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const releases = await sanityFetch<{ slug: string; publishDate?: string }[]>({
    query: PRESS_RELEASE_SLUGS_QUERY,
  });

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}${route}`,
    })),
    ...releases.map(({ slug, publishDate }) => ({
      url: `${BASE_URL}/insights/news/${slug}`,
      lastModified: publishDate,
    })),
  ];
}
