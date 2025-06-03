// src/components/Deliverables.tsx
"use client";
import React from "react";
import {
  Search,
  FileSearch,
  BarChart2,
  Puzzle,
  ChartSplineIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    id: 0,
    text: "Target sourcing, qualification, and CRM development",
    Icon: Search,
  },
  {
    id: 1,
    text: "Diligence coordination and financial analysis",
    Icon: FileSearch,
  },
  {
    id: 2,
    text: "Pipeline tracking and internal reporting frameworks",
    Icon: BarChart2,
  },
  {
    id: 3,
    text: "Integration planning and execution support",
    Icon: Puzzle,
  },
  {
    id: 4,
    text: "Board and investor-facing summaries and updates",
    Icon: ChartSplineIcon,
  },
];

const Deliverable = ({ Icon, text }: { Icon: LucideIcon; text: string }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-6 md:p-8
      bg-[#F7F7F7] text-[#041E40]
      rounded-2xl 
      transition-colors duration-300 ease-out
      hover:bg-[#FCFCFC]
    "
  >
    <div className="flex flex-row gap-3 md:gap-4 items-start">
      <Icon className="h-6 w-6 md:h-8 md:w-8 text-[#041E40]" />
      <h3 className="text-2xl lg:text-3xl tracking-tight font-gambetta ">
        {text}
      </h3>
    </div>
  </div>
);

const DeliverableGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {data.map((svc, idx) => (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: idx * 0.1,
        }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <Deliverable Icon={svc.Icon} text={svc.text} />
      </motion.div>
    ))}
  </div>
);

const Deliverables: React.FC = () => (
  <section className="flex flex-col gap-4 md:gap-6 px-4 md:px-[5%] py-12 md:py-20">
    <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-gambetta text-center md:text-start leading-tight tracking-tight">
      Core Deliverables
    </h2>
    <div className="h-[1px] w-full bg-neutral-200 my-1"></div>
    <DeliverableGrid />
  </section>
);

export default Deliverables;
