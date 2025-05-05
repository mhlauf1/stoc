import Hero from "@/components2/home/Hero";
import IntroServices from "@/components/home/IntroServices";
import Services from "@/components2/home/Services";
import Industries from "@/components2/home/Industries";
import Trust from "@/components2/home/Trust";
import AboutUs from "@/components2/home/AboutUs";
import CTA from "@/components2/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroServices />
      <Services />
      <Industries />
      <Trust />
      <AboutUs />
      <CTA />
    </main>
  );
}
