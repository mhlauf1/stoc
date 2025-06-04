// src/components/CoreServices.tsx
"use client";
import React from "react";
import { BarChart2, Calendar, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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

const ServiceCard: React.FC<OverviewCardProps> = ({
  Icon,
  title,
  description,
}) => (
  <div
    className="
      group
      flex flex-col relative items-start px-8 py-12
      bg-[#041E40] text-white
      rounded-2xl 
      transition-colors duration-300 ease-out
      hover:bg-[#2D474D]
    "
  >
    <div className="flex mb-4 flex-col md:flex-row gap-3 md:gap-4 items-start md:items-center">
      <Icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
      <h3 className="text-2xl md:text-3xl tracking-tight font-gambetta">
        {title}
      </h3>
    </div>
    <p className="flex-1 text-md tracking-tight md:text-lg">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((svc, idx) => (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: idx * 0.05,
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServiceCard {...svc} />
      </motion.div>
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col items-center bg-[#F7F7F7] px-4 md:px-[5%] pb-16 pt-16 md:pb-28">
    <div className="flex items-center mb-6 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[30px]" />
      <span
        style={{ letterSpacing: "2px" }}
        className="uppercase text-neutral-600 text-xs"
      >
        Our Three Pillars of Expertise
      </span>
      <div className="h-[1px] bg-neutral-300 w-[30px]" />
    </div>
    <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl px-2 md:px-0 font-gambetta text-center md:text-start leading-tight tracking-tight">
      Driving Services Growth
    </h2>
    <p className="tracking-tight max-w-[36ch] mt-2 mb-8 text-md md:text-lg text-center text-neutral-600">
      Combining industry insight, operational excellence & full-cycle deal
      support.
    </p>
    <ServicesGrid />
  </section>
);

export default CoreServices;
