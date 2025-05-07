import Hero from "@/components/home/Hero";
import IntroServices from "@/components/home/IntroServices";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import Trust from "@/components/home/Trust";
import AboutUs from "@/components/home/AboutUs";
import CTA from "@/components/CTA";

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
