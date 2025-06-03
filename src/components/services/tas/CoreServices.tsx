// src/components/CoreServices.tsx
"use client";
import React from "react";
import { Puzzle, Search, FileSearch, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { WhiteButton } from "@/components/Button";
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
    title: "Pre-LOI Support / Underwriting Assistance",
    description: "Identify high potential opportunities and model outcomes.",
  },
  {
    id: 1,
    Icon: FileSearch,
    title: "Quality of Earnings",
    description: "Dive deep into financials, operations, and compliance.",
  },
  {
    id: 2,
    Icon: Handshake,
    title: "NWC Mechanisms",
    description: "Optimize terms, financing, and stakeholder alignment.",
  },
  {
    id: 3,
    Icon: Puzzle,
    title: "Deal Structuring & Negotiation",
    description: "Plan for synergies, post-close execution, or a smooth exit.",
  },
  {
    id: 4,
    Icon: Puzzle,
    title: "Purchase Price Allocation",
    description: "Plan for synergies, post-close execution, or a smooth exit.",
  },
  {
    id: 5,
    Icon: Puzzle,
    title: "Integration & Exit Planning",
    description: "Plan for synergies, post-close execution, or a smooth exit.",
  },
];

const ServiceCard: React.FC<OverviewCardProps> = ({ title }) => (
  <div
    className="
      group
      flex flex-col relative justify-center p-6 md:p-8
      bg-[#041E40] text-white h-full
      rounded-xl
      transition-colors duration-300 ease-out
      hover:bg-[#344b5a]
    "
  >
    <h3 className="text-xl md:text-2xl tracking-tight font-gambetta">
      {title}
    </h3>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
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
        viewport={{ once: true, amount: 0.15 }}
      >
        <ServiceCard {...svc} />
      </motion.div>
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col md:flex-row gap-8 md:gap-16 pt-12 md:pt-24 px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex flex-1 items-start flex-col">
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-start font-gambetta">
        Structured Support at Every Phase
      </h2>
      <div className="flex mb-8 flex-col gap-4 mt-4">
        <p className="tracking-tight text-start text-md md:text-lg text-neutral-600">
          From initial target screening to final exit planning, we layer in
          rigorous analysis and industry expertise so you minimize surprises and
          unlock hidden value.
        </p>
      </div>

      <ServicesGrid />
    </div>

    <div className="flex w-full flex-1">
      <div className="bg-[#041E40] w-full rounded-2xl px-[5%] py-16 md:py-24 flex flex-col items-center justify-center gap-4">
        {/* Tagline */}
        <div className="flex items-center gap-4">
          <div className="h-px bg-neutral-600 w-[30px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-200 text-xs"
          >
            Grow With STOC
          </span>
          <div className="h-px bg-neutral-600 w-[30px]" />
        </div>

        {/* Headline */}
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-gambetta tracking-tight md:max-w-[24ch] text-center leading-tight">
          Need due diligence that drives{" "}
          <span className="italic font-gambetta">
            confident investment decisions?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-neutral-200 tracking-tight md:max-w-xl text-md text-center sm:text-lg">
          Schedule a conversation with our Transaction Advisory team today.
        </p>

        {/* Animated "Get Started" button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.15 }}
          className="w-full mt-4 md:w-auto"
        >
          <Link href="/contact">
            <WhiteButton>Get Started</WhiteButton>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CoreServices;
