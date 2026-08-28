import Hero from "@/components/services/fdi/Hero";
import Intro from "@/components/services/fdi/Intro";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Data Intelligence | STOC Advisory",
  description:
    "Finance and data intelligence services: financial reporting, KPI dashboards, and data-driven decision support for middle-market businesses.",
};

const FinanceDataIntelligencePage = () => {
  return (
    <main>
      <Hero />
      <Intro />
    </main>
  );
};

export default FinanceDataIntelligencePage;
