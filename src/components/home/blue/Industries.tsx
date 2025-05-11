import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  BriefcaseMedical,
  Leaf,
  Music,
  Package as Box,
  ShoppingCart,
} from "lucide-react";
import { PrimaryButton } from "@/components/Button";

type Industry = {
  id: number;
  title: string;
  Icon: LucideIcon;
};

const industries: Industry[] = [
  { id: 0, title: "Business Services", Icon: Briefcase },
  { id: 1, title: "Healthcare", Icon: BriefcaseMedical },
  { id: 2, title: "Cannabis", Icon: Leaf },
  { id: 3, title: "Hospitality & Entertainment", Icon: Music },
  { id: 4, title: "Manufacturing & Distribution", Icon: Box },
  { id: 5, title: "Retail & Consumer Products", Icon: ShoppingCart },
];

const IndustryCard: React.FC<Industry> = ({ Icon, title }) => (
  <div
    className="
      text-white
      flex flex-col relative items-center py-16 p-8
      bg-[#16203a] rounded-2xl border border-neutral-100
    "
  >
    <div className="border border-white/20 p-2 mb-8 rounded-lg">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-3xl tracking-tighter font-gambetta mb-4">{title}</h3>
    <div className="absolute bottom-0 left-0 right-0 h-[10px] rounded-b-2xl bg-white/20 overflow-hidden"></div>
  </div>
);

const IndustryGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {industries.map((svc) => (
      <IndustryCard key={svc.id} {...svc} />
    ))}

    {/* Plain-text slot */}
    <div className="pt-4 flex items-center">
      <p className="text-gray-600 text-lg leading-8">
        Our unique backgrounds and experiences in public accounting, investment
        banking, private equity, and consulting provides clients with a breadth
        of industry-specific knowledge and expertise.
      </p>
    </div>
  </div>
);

const Industries: React.FC = () => (
  <section className="bg-[#F7F7F7] py-16 md:py-28">
    <div className="flex flex-col  px-4 sm:px-12 md:px-20">
      <div className="flex flex-col md:flex-row justify-between mb-12 items-end gap-4">
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
        <PrimaryButton>Explore Services</PrimaryButton>
      </div>
      <IndustryGrid />
    </div>
  </section>
);

export default Industries;
