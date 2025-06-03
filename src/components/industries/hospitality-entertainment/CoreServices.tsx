// src/components/CoreServices.tsx
"use client";
import React from "react";
import { Puzzle, Search, FileSearch, Handshake } from "lucide-react";
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
    id: 0,
    Icon: Search,
    title: "Innovative Financing & Capital Raising",
    description:
      "Craft debt and equity solutions—bridge loans, project financing and joint-venture structures—that unlock development and expansion.",
  },
  {
    id: 1,
    Icon: FileSearch,
    title: "Debt Restructuring & Refinancing",
    description:
      "Optimize your balance sheet through covenant negotiation, maturity extensions and refinancing to reduce cost and free up cash flow.",
  },
  {
    id: 2,
    Icon: Handshake,
    title: "Operational Performance Improvement",
    description:
      "Implement process redesign, cost-control measures and technology deployments—from revenue-management systems to contactless service—to elevate efficiency and guest satisfaction.",
  },
  {
    id: 3,
    Icon: Puzzle,
    title: "Digital & Marketing Strategy",
    description:
      "Design data-driven digital campaigns, loyalty programs and direct-booking initiatives to boost occupancy, rev-par and guest lifetime value.",
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
      flex flex-col relative items-start p-6 md:p-8
      bg-[#041E40] text-white
      rounded-xl h-full
      transition-colors duration-300 ease-out
      hover:bg-[#344b5a]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#16333A]" />
      </div>
    </div>

    <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-md md:text-lg tracking-tight mb-8">
      {description}
    </p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
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
  <section className="flex flex-col md:flex-row gap-8 pt-12 md:pt-24 px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex flex-1 items-start flex-col">
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-start font-gambetta leading-normal">
        Our Partnership Approach
      </h2>
      <div className="flex flex-col gap-4 mt-3 md:mt-4">
        <p className="tracking-tight text-start md:max-w-[64ch] text-md md:text-lg text-neutral-600">
          We sit alongside hoteliers, resort owners, entertainment venues and
          travel service providers to turn disruption into opportunity. By
          blending deep sector expertise with rigorous financial analysis and
          hands-on operational support, we help you structure deals, secure
          capital and implement growth strategies that resonate with
          today&apos;s travelers.
        </p>
      </div>
    </div>
    <div className="flex flex-2">
      <ServicesGrid />
    </div>
  </section>
);

export default CoreServices;
