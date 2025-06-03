import React from "react";
import Hero from "@/components/industries/healthcare/Hero";
import Intro from "@/components/industries/healthcare/Intro";
import CoreServices from "@/components/industries/healthcare/CoreServices";

const HealthCarePage = () => {
  return (
    <main className="">
      <Hero />
      <Intro />
      <CoreServices />
    </main>
  );
};

export default HealthCarePage;
