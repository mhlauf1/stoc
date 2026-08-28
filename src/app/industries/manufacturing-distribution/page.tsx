import React from "react";
import Hero from "@/components/industries/manufacturing-distribution/Hero";
import Intro from "@/components/industries/manufacturing-distribution/Intro";
import CoreServices from "@/components/industries/manufacturing-distribution/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Distribution M&A Advisory | STOC Advisory",
  description:
    "Transaction advisory for manufacturing and distribution companies: due diligence, quality of earnings analysis, and acquisition support.",
};

const ManufacturtingPage = () => {
  return (
    <main className="">
      <Hero />
      <Intro />
      <CoreServices />
      <RelatedInsights industry="manufacturing-distribution" />
    </main>
  );
};

export default ManufacturtingPage;
