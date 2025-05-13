import React from "react";
import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";

const TransactionAdvisoryPage = () => {
  return (
    <main>
      <SubpageHero
        title="Transaction Advisory Services"
        sub1="Whether buying, building, or exiting an investment, every transaction possesses a certain degree of risk. STOC Advisory’s integrated due diligence approach helps clients mitigate risk and maximize the value of a transaction. We apply deep industry expertise to an integrated financial and operational due diligence approach, effectively advising clients of key deal considerations to achieve each opportunity’s full potential. Through a robust process, we provide proven results unanimous to each transaction to maximize value."
        src="/thomson.png"
      />
      <CTA />
    </main>
  );
};

export default TransactionAdvisoryPage;
