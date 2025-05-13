import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const CorporateDevelopmentPage = () => {
  return (
    <main>
      <SubpageHero
        title="Corporate Development Support"
        sub1="With extensive industry experience and expertise, the Corporate Advisory team assists clients in the identification of opportunities resulting in maximum shareholder value through comprehensive research and financial analysis. STOC’s Corporate Advisors offer timely and accurate advice through robust analysis to enable its clients to make critical business decision that position the company for future success. Some common issues, but not limited to, where we have served clients include:"
        src="/anne_live.png"
        bullets={[
          "Maximizing shareholder value through acquisitions or divestitures",
          "Balance sheet restructuring to augment profitability with a focus on maintaining financial stability",
          "Evaluating the appropriate level of debt and equity",
          "Raising capital in the private markets",
        ]}
      />
      <CTA />
    </main>
  );
};

export default CorporateDevelopmentPage;
