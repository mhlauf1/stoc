import React from "react";
import Hero from "@/components/industries/retail/Hero";
import Intro from "@/components/industries/retail/Intro";
import CoreServices from "@/components/industries/retail/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & Consumer Products M&A Advisory | STOC Advisory",
  description:
    "Transaction advisory for retail and consumer products companies: financial due diligence, quality of earnings, and corporate development.",
};

const ManufacturtingPage = () => {
  return (
    <main className="">
      <Hero />
      <Intro />
      <CoreServices />
      <RelatedInsights industry="retail-consumer-products" />
    </main>
  );
};

export default ManufacturtingPage;
