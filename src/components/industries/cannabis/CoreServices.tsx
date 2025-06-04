// src/components/CoreServices.tsx
"use client";
import React from "react";
import {
  BarChart2,
  ShieldCheck,
  ClipboardCheck,
  TrendingUp,
  Tag,
  Lock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

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
    title: "Anti-Money-Laundering Program Design & Banking Solutions",
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
    title: "Brand Protection & Intellectual Property Strategy",
  },
  {
    id: 6,
    Icon: Lock,
    title: "Cybersecurity & Data Privacy Controls",
  },
];

const ServiceCard: React.FC<{ Icon: LucideIcon; title: string }> = ({
  Icon,
  title,
}) => (
  <div
    className="
      group
      flex flex-col relative items-center p-8
      bg-white 
      rounded-xl h-full
    "
  >
    <div className="flex justify-center items-end w-full">
      <div className="border flex border-white/20 p-4 mb-5 rounded-lg bg-[#F7F7F7] group-hover:border-white">
        <Icon className="h-6 w-6 text-[#041E40]" />
      </div>
    </div>
    <h3 className="text-xl md:text-3xl tracking-tight text-center font-gambetta">
      {title}
    </h3>
  </div>
);

const CoreServices: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((svc, idx) => (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: idx * 0.1,
        }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServiceCard Icon={svc.Icon} title={svc.title} />
      </motion.div>
    ))}
  </div>
);

export default CoreServices;
