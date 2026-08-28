import React from "react";
import Hero from "@/components/industries/business-services/Hero";
import Intro from "@/components/industries/business-services/Intro";
import CoreServices from "@/components/industries/business-services/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Services M&A Advisory | STOC Advisory",
  description:
    "M&A advisory for business services companies: transaction support, due diligence, and corporate development for buyers and founder-owned firms.",
};

const BusinessServicesPage = () => {
  return (
    <main className="">
      <Hero />
      <Intro />
      <CoreServices />
      <RelatedInsights industry="business-services" />
    </main>
  );
};

export default BusinessServicesPage;
