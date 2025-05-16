import Hero from "@/components/services/Hero";
import CTA from "@/components/CTA";
import ServicesList from "@/components/services/ServicesList";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesList />
      <CTA />
    </main>
  );
}
