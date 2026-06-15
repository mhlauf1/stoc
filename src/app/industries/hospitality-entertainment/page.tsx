import React from "react";
import Hero from "@/components/industries/hospitality-entertainment/Hero";
import CoreServices from "@/components/industries/hospitality-entertainment/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

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
