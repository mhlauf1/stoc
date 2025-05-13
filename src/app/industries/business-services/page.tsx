import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const BusinessServicesPage = () => {
  return (
    <main className="">
      <SubpageHero
        title="Business & Professional Services"
        sub1="The business services industry is experiencing rapid growth and disruption, and the fight for talent and differentiation is highly competitive. To truly stand out, businesses must embrace change and embark on frequent initiatives to best serve their clients’ evolving needs."
        src="/gunnar-matt.png"
        sub2="STOC has the understanding and expertise to analyze the revenue streams, costs, and the critical key performance indicators of what makes a services business profitable. We use this familiarity to assist transportation and logistics companies, advertising and marketing specialists, professional services firms, and other business service organizations with a broad range of financial and operational projects to optimize performance and value creation."
      />
      <CTA />
    </main>
  );
};

export default BusinessServicesPage;
