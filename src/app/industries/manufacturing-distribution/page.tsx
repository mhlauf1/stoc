import React from "react";
import Hero from "@/components/industries/manufacturing-distribution/Hero";
import Intro from "@/components/industries/manufacturing-distribution/Intro";
import CoreServices from "@/components/industries/manufacturing-distribution/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

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
