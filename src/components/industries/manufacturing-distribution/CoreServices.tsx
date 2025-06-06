// src/components/CoreServices.tsx
"use client";
import React from "react";
import { Map, PieChart, Percent } from "lucide-react";
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
    Icon: Map,
    title: "Supply-Chain Strategy & Redesign",
    description: "Network optimization, inventory management, risk mitigation",
  },
  {
    id: 2,
    Icon: PieChart,
    title: "Capital & Investment Advisory",
    description:
      "ROI analysis for plant expansions, automation, and digital upgrades",
  },
  {
    id: 3,
    Icon: Percent,
    title: "Cost-Reduction & Margin Management",
    description:
      "Lean operations, procurement excellence, pricing optimization",
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
      flex flex-col relative items-start p-8
      bg-[#041E40] text-white
      rounded-2xl h-full
      transition-colors duration-300 ease-out
      hover:bg-[#2d384d]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#041E40]" />
      </div>
    </div>
    <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-md md:text-lg tracking-tight">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((svc, idx) => (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServiceCard {...svc} />
      </motion.div>
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col items-center bg-[#F7F7F7] px-4 md:px-[5%] pb-16 pt-16 md:pb-28">
    <div className="flex items-center mb-8 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[30px]" />
      <span
        style={{ letterSpacing: "2px" }}
        className="uppercase text-gray-600 text-xs"
      >
        Manufacturing Excellence
      </span>
      <div className="h-[1px] bg-neutral-300 w-[30px]" />
    </div>
    <ServicesGrid />
  </section>
);

export default CoreServices;
