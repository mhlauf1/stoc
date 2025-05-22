import React from "react";
import { ValueProps } from "@/utils/types";
import { BarChart2, Calendar, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface OverviewCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  id: number;
}

const cards: OverviewCardProps[] = [
  {
    id: 1,
    Icon: BarChart2,
    title: "Financial Planning & Analysis",
    description:
      "Model scenarios, analyze performance, and drive strategic decisions.",
  },
  {
    id: 2,
    Icon: Calendar,
    title: "Budgeting & Forecasting",
    description:
      "Build rolling budgets and forecasts to align resources with growth goals.",
  },
  {
    id: 3,
    Icon: Users,
    title: "Board & Investor Management",
    description:
      "Prepare board decks, investor updates, and stakeholder communications.",
  },
];

const ServiceCard: React.FC<ValueProps> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-8
      bg-[#041E40] text-white
      rounded-2xl 
      transition-colors duration-300 ease-out
      hover:bg-[#2D474D]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#041E40]" />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl tracking-tighter font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-lg leading-8">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((svc) => (
      <ServiceCard key={svc.id} {...svc} />
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col  px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex items-center mb-12 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[50px]" />
      <span
        style={{ letterSpacing: "3px" }}
        className="uppercase text-gray-600 text-xs font-mono"
      >
        CFO Advisory Services
      </span>
      <div className="h-[1px] bg-neutral-300 w-[50px]" />
    </div>
    <ServicesGrid />
  </section>
);

export default CoreServices;
