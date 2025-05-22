import React from "react";

export interface OverviewCardProps {
  title: string;
  description: string;
  id: number;
}

const cards: OverviewCardProps[] = [
  {
    id: 0,
    title: "Regulatory Compliance & Risk Management",
    description:
      "Guidance on licensing, reporting requirements and quality standards to keep you ahead of evolving rules.",
  },
  {
    id: 1,
    title: "Revenue Cycle & Reimbursement Strategy",
    description:
      "Optimize billing, coding and payor-contracting models to accelerate cash flow and enhance profitability.",
  },
  {
    id: 2,
    title: "Operational Transformation",
    description:
      "New clinical and operating models, process redesign and cost-control programs that boost efficiency and patient outcomes.",
  },
  {
    id: 3,
    title: "M&A, Integration & Partnership Advisory",
    description:
      "Target screening, due diligence, valuation, deal structuring and post-merger integration for horizontal, vertical or joint-venture strategies.",
  },
  {
    id: 4,
    title: "Deal Structuring & Negotiation",
    description: "Optimize terms, financing, and stakeholder alignment.",
  },
];

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div
    className="
      group
      flex flex-col relative items-start justify-center p-6 md:p-8
      bg-[#041E40] text-white
      rounded-xl
      transition-colors duration-300 ease-out
      hover:bg-[#344b5a]
    "
  >
    <h3 className="text-2xl sm:text-3xl md:text-4xl  tracking-tight md:tracking-tighter font-gambetta mb-2 md:mb-4">
      {title}
    </h3>
    <p className="flex-1 md:text-lg text-base leading-7 md:leading-8">
      {description}
    </p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
    {cards.map((svc) => (
      <ServiceCard key={svc.id} {...svc} />
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col justify-center pt-8 md:pt-12  px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex items-center mb-12 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[60px]" />
      <span
        style={{ letterSpacing: "3px" }}
        className="uppercase text-gray-600 text-xs font-mono"
      >
        Core Capabilities
      </span>
      <div className="h-[1px] bg-neutral-300 w-[60px]" />
    </div>
    <ServicesGrid />
  </section>
);

export default CoreServices;
