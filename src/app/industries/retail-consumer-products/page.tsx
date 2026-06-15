import React from "react";
import Hero from "@/components/industries/retail/Hero";
import Intro from "@/components/industries/retail/Intro";
import CoreServices from "@/components/industries/retail/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

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
