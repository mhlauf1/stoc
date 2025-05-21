import HeroVideo from "@/components/home/HeroVideo";
import Trust from "@/components/home/Trust";
import IntroServices from "@/components/home/IntroServices";
import OverviewBento from "@/components/home/OverviewBento";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <IntroServices />
      <OverviewBento />
      <Trust />
      <CTA />
    </main>
  );
}
