import Hero from "@/components/services/Hero";
import CTA from "@/components/CTA";
import ServicesList from "@/components/services/ServicesList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M&A Advisory Services — TAS, CDS, GES, FDI | STOC Advisory",
  description:
    "Explore STOC Advisory's services: Transaction Advisory (TAS), Corporate Development Support (CDS), Growth Enablement (GES), and Finance & Data Intelligence (FDI).",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesList />
      <CTA />
    </main>
  );
}
