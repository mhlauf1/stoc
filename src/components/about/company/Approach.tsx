import React from "react";
import type { LucideIcon } from "lucide-react";
import { Briefcase, BriefcaseMedical, Leaf } from "lucide-react";

type Approach = {
  id: number;
  title: string;
  Icon: LucideIcon;
  description: string;
};

const industries: Approach[] = [
  {
    id: 0,
    title: "Pre-LOI Advisory",
    Icon: Briefcase,
    description: "Quality of earnings, target assessment.",
  },
  {
    id: 1,
    title: "Due Diligence",
    Icon: BriefcaseMedical,
    description:
      "Financial modeling, contract analysis, working-capital review.",
  },
  {
    id: 2,
    title: "Post-Close Integration",
    Icon: Leaf,
    description:
      "Revenue recognition, month-end close support, opening balance-sheet review.",
  },
];

const ApproachCard: React.FC<Approach> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-8
      bg-[#16333A] text-white
      rounded-2xl border border-[#16333A]
      transition-colors duration-300 ease-out
      hover:bg-[#2D474D]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#16333A]" />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl max-w-[15ch] tracking-tighter font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-lg leading-8 mb-8">{description}</p>
  </div>
);

const IndustryGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1  md:grid-cols-3">
    {industries.map((svc) => (
      <ApproachCard key={svc.id} {...svc} />
    ))}
  </div>
);

const Approach: React.FC = () => (
  <section className="bg-[#F7F7F7] py-16 mb-12 md:py-28">
    <div className="flex flex-col  px-4 sm:px-12 md:px-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div className="flex mb-16 flex-col gap-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-xs font-mono"
            >
              Industries we serve
            </span>
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
          </div>
          <h2 className="text-3xl  tracking-tighter max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
            Driving sector-specific growth and resilience through expert
            advisory.
          </h2>
        </div>
      </div>
      <IndustryGrid />
    </div>
  </section>
);

export default Approach;
