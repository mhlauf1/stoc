import Hero from "@/components/home/blue/HomeBlue";
import IntroServices from "@/components/home/blue/IntroServices";
import Services from "@/components/home/blue/Services";
import Industries from "@/components/home/blue/Industries";
import Trust from "@/components/home/Trust";
import AboutUs from "@/components/home/blue/AboutUs";
import CTA from "@/components/CTA";
import NewsletterCtaSection from "@/components/NewsletterCtaSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroServices />
      <Services />
      <NewsletterCtaSection />
      <Industries />
      <Trust />
      <AboutUs />
      <CTA />
    </main>
  );
}
