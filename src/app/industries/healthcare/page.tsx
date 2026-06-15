import React from "react";
import Hero from "@/components/industries/healthcare/Hero";
import Intro from "@/components/industries/healthcare/Intro";
import CoreServices from "@/components/industries/healthcare/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

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
