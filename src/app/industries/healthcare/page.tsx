import React from "react";
import Hero from "@/components/industries/healthcare/Hero";
import Intro from "@/components/industries/healthcare/Intro";
import CoreServices from "@/components/industries/healthcare/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare M&A & Financial Due Diligence | STOC Advisory",
  description:
    "M&A advisory and financial due diligence for healthcare businesses, from physician practices to multi-site providers, for investors and operators.",
};

const HealthCarePage = () => {
  return (
    <main className="">
      <Hero />
      <Intro />
      <CoreServices />
      <RelatedInsights industry="healthcare" />
    </main>
  );
};

export default HealthCarePage;
