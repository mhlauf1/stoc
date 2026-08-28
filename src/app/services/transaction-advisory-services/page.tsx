import React from "react";
import Hero from "@/components/services/tas/Hero";
import CoreServices from "@/components/services/tas/CoreServices";
import Intro from "@/components/services/tas/Intro";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transaction Advisory & Quality of Earnings | STOC Advisory",
  description:
    "Buy-side and sell-side transaction support including Quality of Earnings reports, net working capital analysis, and cash-to-accrual conversions.",
};

const TransactionAdvisoryPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <CoreServices />
      <RelatedInsights
        contentType="white-paper"
        heading="Diligence & transaction research"
      />
    </main>
  );
};

export default TransactionAdvisoryPage;
