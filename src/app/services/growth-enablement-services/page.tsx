import React from "react";
import CTA from "@/components/CTA";
import Intro from "@/components/services/ges/Intro";
import Hero from "@/components/services/ges/Hero";
import OverviewBento from "@/components/services/ges/OverviewBento";

const GrowthEnablementPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <OverviewBento />
      <CTA />
    </main>
  );
};

export default GrowthEnablementPage;
