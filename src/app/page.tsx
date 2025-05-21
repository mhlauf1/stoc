import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import IntroServices from "@/components/home/IntroServices";
import OverviewBento from "@/components/home/OverviewBento";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroServices />
      <OverviewBento />
      <Trust />
      <CTA />
    </main>
  );
}
