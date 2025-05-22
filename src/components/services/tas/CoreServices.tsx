import React from "react";
import { ValueProps } from "@/utils/types";
import { Puzzle, Search, FileSearch, Handshake } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface OverviewCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  id: number;
}

const cards: OverviewCardProps[] = [
  {
    id: 0,
    Icon: Search,
    title: "Target Screening & Valuation",
    description: "Identify high-potential opportunities and model outcomes.",
  },
  {
    id: 1,
    Icon: FileSearch,
    title: "Due Diligence & Risk Assessment",
    description: "Dive deep into financials, operations, and compliance.",
  },
  {
    id: 2,
    Icon: Handshake,
    title: "Deal Structuring & Negotiation",
    description: "Optimize terms, financing, and stakeholder alignment.",
  },
  {
    id: 3,
    Icon: Puzzle,
    title: "Integration & Exit Planning",
    description: "Plan for synergies, post-close execution, or a smooth exit.",
  },
];

const ServiceCard: React.FC<ValueProps> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-6 md:p-8
      bg-[#041E40] text-white
      rounded-xl
      transition-colors duration-300 ease-out
      hover:bg-[#344b5a]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#16333A]" />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl  tracking-tighter font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-lg leading-8 mb-8">{description}</p>
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
  <section className="flex flex-col md:flex-row  gap-8 md:gap-16 pt-12 md:pt-24 px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex flex-1 items-start flex-col">
      <h2 className="text-3xl tracking-tighter text-start  md:text-4xl font-gambetta leading-normal">
        Structured Support at Every Stage
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        <p className="leading-7 md:leading-8 text-start md:max-w-[64ch] text-md md:text-lg text-neutral-600">
          From initial target screening to final exit planning, we layer in
          rigorous analysis and industry expertise—so you minimize surprises and
          unlock hidden value.
        </p>
      </div>
    </div>
    <ServicesGrid />
  </section>
);

export default CoreServices;
