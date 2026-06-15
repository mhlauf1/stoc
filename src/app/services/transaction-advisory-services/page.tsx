import React from "react";
import Hero from "@/components/services/tas/Hero";
import CoreServices from "@/components/services/tas/CoreServices";
import Intro from "@/components/services/tas/Intro";
import RelatedInsights from "@/components/insights/RelatedInsights";

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
