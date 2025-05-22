import React from "react";
import { ValueProps } from "@/utils/types";
import {
  BarChart2,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Tag,
  Lock,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface OverviewCardProps {
  Icon: LucideIcon;
  title: string;
  id: number;
}

const cards: OverviewCardProps[] = [
  {
    id: 1,
    Icon: BarChart2,
    title: "Financial Planning & Analysis",
  },
  {
    id: 2,
    Icon: ShieldCheck,
    title: "Anti-Money-Laundering Program Design & Banking Solutionsg",
  },
  {
    id: 3,
    Icon: ClipboardCheck,
    title: "Regulatory Compliance & Licensing Support",
  },
  {
    id: 4,
    Icon: TrendingUp,
    title: "Valuation, Diligence & M&A Structuring",
  },
  {
    id: 5,
    Icon: Tag,
    title: " Brand Protection & Intellectual Property Strategy",
  },
  {
    id: 6,
    Icon: Lock,
    title: "Cybersecurity & Data Privacy Controls",
  },
];

const ServiceCard: React.FC<ValueProps> = ({ Icon, title }) => (
  <div
    className="
      group
      flex flex-col relative items-center p-8
      bg-white 
      rounded-xl 
    "
  >
    <div className="flex justify-center items-end w-full">
      <div className="border flex border-white/20  p-4 mb-5 rounded-lg bg-[#F7F7F7] group-hover:border-white">
        <Icon className="h-6 w-6 text-[#041E40]" />
      </div>
    </div>

    <h3 className="text-2xl md:text-3xl tracking-tighter text-center font-gambetta ">
      {title}
    </h3>
  </div>
);

const CoreServices: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-3 lg:grid-cols-3">
    {cards.map((svc) => (
      <ServiceCard key={svc.id} {...svc} />
    ))}
  </div>
);

export default CoreServices;
