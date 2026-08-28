import React from "react";
import Hero from "@/components/about/company/Hero";
import Intro from "@/components/about/company/Intro";
import Values from "@/components/about/company/Values";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Company | STOC Advisory",
  description:
    "Learn about STOC Advisory: our story, our approach to strategic transactions, and how we support clients across the acquisition lifecycle.",
};

const page = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <Values />
    </main>
  );
};

export default page;
