import React from "react";
import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";

const GrowthEnablementPage = () => {
  return (
    <main>
      <SubpageHero
        title="Growth Enablement Services"
        sub1="The business services industry is experiencing rapid growth and disruption, and the fight for talent and differentiation is highly competitive. To truly stand out, businesses must embrace change and embark on frequent initiatives to best serve their clients’ evolving needs."
        src="/sean-sam.png"
      />
      <CTA />
    </main>
  );
};

export default GrowthEnablementPage;
