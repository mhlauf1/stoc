import React from "react";
import CTA from "@/components/CTA";
import Hero from "@/components/services/tas/Hero";
import Intro from "@/components/services/tas/Intro";
import CoreServices from "@/components/services/tas/CoreServices";

const TransactionAdvisoryPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <CoreServices />
      <CTA />
    </main>
  );
};

export default TransactionAdvisoryPage;
