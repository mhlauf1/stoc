import CTA from "@/components/CTA";
import SubpageHero from "@/components/SubpageHero";
import React from "react";

const HealthCarePage = () => {
  return (
    <main className="">
      <SubpageHero
        title="Healthcare"
        sub1="The healthcare industry is changing fast, as complex and uncertain regulatory requirements, an aging population requiring increasingly expensive clinical and drug therapies, looming cybersecurity threats, ever-evolving payor models, and the rise of telemedicine and other technologies continue to disrupt the US healthcare system. As medical providers, insurers, and patients each adjust to the shifting marketplace; the industry must adapt to the current pace of change or risk getting left behind. Many stakeholders are staying relevant by facing these forces head-on through new clinical and operating models, aggressive revenue management and cost control, mergers and acquisitions, horizontal and vertical integration, and partnership strategies."
        src="/sean-sam.png"
        sub2="We partner with companies across the healthcare industry—hospitals and healthcare systems, delivery providers, senior care facilities, medical suppliers, payors and health plans, and more—to identify opportunities and implement solutions to optimize both clinical and non-clinical operations. We understand healthcare organizations’ evolving challenges and drive positive transformation to enable businesses to continue delivering the best care possible while growing the bottom line. Our focus on healthcare’s operational complexities, regulatory requirements, reimbursement methodologies, and transaction services allows us to bring proven and practical capabilities to each engagement."
      />
      <CTA />
    </main>
  );
};

export default HealthCarePage;
