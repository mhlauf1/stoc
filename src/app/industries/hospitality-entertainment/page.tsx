import React from "react";
import Hero from "@/components/industries/hospitality-entertainment/Hero";
import CoreServices from "@/components/industries/hospitality-entertainment/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospitality & Entertainment M&A Advisory | STOC Advisory",
  description:
    "M&A advisory for hospitality and entertainment businesses: transaction support, financial due diligence, and growth advisory services.",
};

const HealthCarePage = () => {
  return (
    <main className="">
      <Hero />
      <CoreServices />
      <RelatedInsights industry="hospitality-entertainment" />
    </main>
  );
};

export default HealthCarePage;
