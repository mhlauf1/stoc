import Hero from "@/components/industries/Hero";
import IndustriesSection from "@/components/industries/IndustriesSection";
import { sanityFetch } from "@/sanity/lib/client";
import { INDUSTRIES_QUERY } from "@/sanity/lib/queries";
import type { IndustryDoc } from "@/sanity/lib/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | STOC Advisory",
  description:
    "STOC Advisory serves healthcare, business services, manufacturing, technology, retail, and hospitality companies across the deal lifecycle.",
};

export default async function Industries() {
  const industries = await sanityFetch<IndustryDoc[]>({
    query: INDUSTRIES_QUERY,
  });

  return (
    <main>
      <Hero />
      <IndustriesSection industries={industries} />
    </main>
  );
}
