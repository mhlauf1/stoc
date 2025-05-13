import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const CannabisPage = () => {
  return (
    <main className="">
      <SubpageHero
        title="Cannabis"
        sub1="As the number of states legalizing cannabis for medical and recreational use increases, businesses involved in the legal cultivation, processing, and distribution of cannabis, as well as those providing ancillary services, face an array of business issues, including: accounting, acquisition disputes, anti-money laundering, banking, branding, IP, cybersecurity, taxation advisory, regulatory compliance, and valuation."
        src="/sean-sam.png"
        sub2="Our firm understands these complex business issues. STOC has been active in all sectors multi-faceted legal cannabis industry. We are uniquely qualified to help clients achieve their business goals in this rapidly growing industry."
      />
      <CTA />
    </main>
  );
};

export default CannabisPage;
