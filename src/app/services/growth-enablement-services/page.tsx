import React from "react";
import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
const GrowthEnablementPage = () => {
  return (
    <main>
      <SubpageHero
        title="Growth Enablement Services"
        sub1="Design and implement targeted initiatives that optimize operations and accelerate market expansion."
        sub2="Whether buying, building, or exiting an investment, every transaction possesses a certain degree of risk. STOC Advisory's integrated due diligence approach helps clients mitigate risk and maximize the value of a transaction. We apply deep industry expertise to an integrated financial and operational due diligence approach, effectively advising clients of key deal considerations to achieve each opportunity's full potential. Through a robust process, we provide proven results unanimous to each transaction to maximize value."
        src="/sean-sam.png"
      />
      <CTA />
    </main>
  );
};

export default GrowthEnablementPage;
