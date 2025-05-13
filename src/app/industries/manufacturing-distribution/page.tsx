import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const ManufacturingPage = () => {
  return (
    <main className="">
      <SubpageHero
        title="Manufacturing & Distribution"
        sub1="The dynamic global marketplace presents many challenges and opportunities. The multi-faceted industry faces globalization, supply-chain transformation, rising production costs, and other market conditions that impact corporate strategy, operations, and customer demand. Many corporations have invested capital to innovate operations to build long-term success for tomorrow."
        src="/sean-sam.png"
        sub2="Our industry-specific team a breadth of experience and knowledge to assist our clients in making the best decisions today that can help prepare for the future. We serve each client as collaborative business advisors and pair forward-looking insights with a ground value-driven approach. Having worked with clients globally, we understand the financial and operational drivers that shape the industry."
      />
      <CTA />
    </main>
  );
};

export default ManufacturingPage;
