import React from "react";
import CTA from "@/components/CTA";
import Hero from "@/components/about/company/Hero";
import Intro from "@/components/about/company/Intro";
import Values from "@/components/about/company/Values";
import Approach from "@/components/about/company/Approach";

const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Values />
      <Approach />
      <CTA />
    </main>
  );
};

export default page;
