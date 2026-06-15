import Hero from "@/components/services/cds/Hero";
import Intro from "@/components/services/cds/Intro";
import TargetSourcing from "@/components/services/cds/TargetSourcing";
import RelatedInsights from "@/components/insights/RelatedInsights";

const CorporateDevelopmentPage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <TargetSourcing />
      <RelatedInsights
        contentType="market-landscape-report"
        heading="Market landscapes & sourcing research"
      />
    </main>
  );
};

export default CorporateDevelopmentPage;
