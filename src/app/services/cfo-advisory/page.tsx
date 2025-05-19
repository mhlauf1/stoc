import React from "react";
import CTA from "@/components/CTA";
import Intro from "@/components/industries/cannabis/Intro";
import CoreServices from "@/components/services/cfo/CoreServices";
import Hero from "@/components/services/cfo/Hero";

const CFOPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <CoreServices />
      <CTA />
    </main>
  );
};

export default CFOPage;
