import Hero from "@/components/about/brands/Hero";
import CardLayout from "@/components/about/brands/CardLayout";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands | STOC Advisory",
  description:
    "The STOC Advisory family of brands and affiliated companies supporting middle-market transactions and growth.",
};

const page = () => {
  return (
    <main>
      <Hero />
      <CardLayout />
    </main>
  );
};

export default page;
