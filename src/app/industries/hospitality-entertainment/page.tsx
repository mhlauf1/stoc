import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const HospitalityPage = () => {
  return (
    <main className="">
      <SubpageHero
        title="Hospitality and Entertainment"
        sub1="Shifting global dynamics and a post-COVID environment define a shifting landscape for tourism and business travel. As a result, the hospitality and entertainment industry is forced to adapt and evolve for future growth. Marked by increased mergers and acquisitions activity and a high rate of new property development, industry players must meet these growing headwinds with innovative financing, debt restructuring, and partnership agreements. Meanwhile, competition among properties, brands, and service offerings and today’s economic volatility present a constant challenge for hospitality organizations, resulting in the rapid evolution of marketing efforts, digital strategies, and operational initiatives aimed at increasing customer acquisition and retention."
        src="/hospitality.png"
      />
      <CTA />
    </main>
  );
};

export default HospitalityPage;
