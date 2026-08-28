import Hero from "@/components/industries/technology-media-telecommunications/Hero";
import RelatedInsights from "@/components/insights/RelatedInsights";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology, Media & Telecom M&A Advisory | STOC Advisory",
  description:
    "M&A advisory for technology, media, and telecom companies, including IT services and MSPs: diligence, quality of earnings, and deal execution.",
};

const TechnologyPage = () => {
  return (
    <main className="">
      <Hero />
      <RelatedInsights industry="technology-media-telecommunications" />
    </main>
  );
};

export default TechnologyPage;
