import Hero from "@/components/services/cds/Hero";
import Intro from "@/components/services/cds/Intro";
import TargetSourcing from "@/components/services/cds/TargetSourcing";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Development Support | STOC Advisory",
  description:
    "Corporate development support for acquirers: M&A strategy, target sourcing, deal execution, and integration support across the acquisition lifecycle.",
};

const CorporateDevelopmentPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <TargetSourcing />
      <RelatedInsights
        contentType="market-landscape-report"
        heading="Market landscapes & sourcing research"
      />
    </main>
  );
};

export default CorporateDevelopmentPage;
