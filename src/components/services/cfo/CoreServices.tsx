// src/components/CoreServices.tsx
"use client";

import React from "react";
import { BarChart2, Calendar, Users } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

// If your ValueProps type was something like this:
export interface ValueProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  id: number;
}

const cards: ValueProps[] = [
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

// 1) Motion variants for each card
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      ease: "easeOut",
      duration: 0.5,
    },
  }),
};

// 2) ServiceCard now uses whileInView instead of animate
const ServiceCard: React.FC<ValueProps & { index: number }> = ({
  Icon,
  title,
  description,
  index,
}) => (
  <motion.div
    className="
      group
      flex flex-col relative items-start px-8 py-12
      bg-[#041E40] text-white
      rounded-2xl 
      transition-colors duration-300 ease-out
      hover:bg-[#2d384d]
    "
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    {/* Icon at the top */}
    <div className="mb-4">
      <Icon size={32} className="text-white" />
    </div>

    {/* Title */}
    <h3 className="mb-3 text-2xl md:text-3xl lg:text-4xl tracking-tight font-gambetta">
      {title}
    </h3>

    {/* Description */}
    <p className="flex-1 md:text-lg tracking-tight text-md">{description}</p>
  </motion.div>
);

// 3) ServicesGrid passes index into each ServiceCard
const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((svc, idx) => (
      <ServiceCard key={svc.id} index={idx} {...svc} />
    ))}
  </div>
);

// 4) CoreServices section (unchanged)
const CoreServices: React.FC = () => (
  <section className="flex flex-col px-4 md:px-[5%] pb-16 md:pb-28">
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
