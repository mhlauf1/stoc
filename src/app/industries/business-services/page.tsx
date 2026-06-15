import React from "react";
import Hero from "@/components/industries/business-services/Hero";
import Intro from "@/components/industries/business-services/Intro";
import CoreServices from "@/components/industries/business-services/CoreServices";
import RelatedInsights from "@/components/insights/RelatedInsights";

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
