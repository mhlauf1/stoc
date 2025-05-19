import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import IntroServices from "@/components/home/IntroServices";
import OverviewBento from "@/components/home/OverviewBento";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroServices />
      <Trust />
      <OverviewBento />
    </main>
  );
}
