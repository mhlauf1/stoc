import React from "react";
import Hero from "@/components/services/tas/Hero";
import CoreServices from "@/components/services/tas/CoreServices";
import Intro from "@/components/services/tas/Intro";

const TransactionAdvisoryPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <CoreServices />
    </main>
  );
};

export default TransactionAdvisoryPage;
