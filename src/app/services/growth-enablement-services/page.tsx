import React from "react";
import Intro from "@/components/services/ges/Intro";
import Hero from "@/components/services/ges/Hero";
import OverviewBento from "@/components/services/ges/OverviewBento";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Enablement Services | STOC Advisory",
  description:
    "Growth enablement services that help middle-market companies scale: strategic planning, operational improvement, and performance measurement.",
};

const GrowthEnablementPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <OverviewBento />
    </main>
  );
};

export default GrowthEnablementPage;
