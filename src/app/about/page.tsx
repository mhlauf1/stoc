import Hero from "@/components/about/Hero";
import AboutBento from "@/components/about/AboutBento";
import CTA from "@/components/CTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About STOC Advisory | National M&A Advisory Firm",
  description:
    "STOC Advisory is a national M&A advisory firm with offices in Baltimore, Dallas, Minneapolis, Nashville, and Ponte Vedra Beach.",
};

export default function About() {
  return (
    <main>
      <Hero />
      <AboutBento />
      <CTA />
    </main>
  );
}
