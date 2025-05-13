import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const RetailPage = () => {
  return (
    <main className="">
      <SubpageHero
        title="Retail"
        sub1="While the retail industry expands widely across various segments, there has been a transformation in recent years that has been driven by a rapid acceleration of technology-enabled trends. This transformation is now being propelled at a faster pace due to the evolution in consumer behavior and the demands of the pandemic. While it is not exactly foreseen on how the transformation will re-shape the industry, e-commerce has rapidly increased to provide consumers with more access."
        src="/sean-sam.png"
        sub2="With a strong appreciation of the retail transformation and a vast knowledge of the industry, our retail experts understand the importance of sustainability in the retail marketplace. We have achieved success for clients across all segments in the retail industry, with notable distinction in department stores, specialty retailers, convenience stores, food and beverage retailers, hypermarket and supermarket stores, warehouse retailers, and e-commerce retailers."
      />
      <CTA />
    </main>
  );
};

export default RetailPage;
