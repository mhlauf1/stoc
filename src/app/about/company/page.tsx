import React from "react";
import CTA from "@/components/CTA";
import Hero from "@/components/about/company/Hero";
import Intro from "@/components/about/company/Intro";
import Values from "@/components/about/company/Values";

const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Values />
      <CTA />
    </main>
  );
};

export default page;
