// src/app/OverviewBento.tsx
"use client";
import React from "react";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import { motion } from "framer-motion";

const cards: OverviewCardProps[] = [
  {
    number: "1",
    title: "CRM Design and Operational Buildout",
    description:
      "Architect, implement, and optimize CRM infrastructure to reflect real sales processes, enforce data hygiene, and support lead-to-close visibility",
  },
  {
    number: "2",
    title: "Sales Funnel Structuring and KPI Definition",
    description:
      "Define and implement full-funnel metrics including MQLs, SQLs, speed-to-lead, conversion rates, sales activity volume, win rate, and marketing-sourced revenue. Establish source-level tracking and conversion attribution across digital and outbound channels",
  },
  {
    number: "3",
    title: "Outbound Infrastructure and Campaign Execution",
    description:
      "Stand up outbound workflows including list building, sequencer tools, messaging frameworks, and A/B testing. Train teams on real-world usage and follow-up practices",
  },
  {
    number: "4",
    title: "Pipeline Management and Forecasting Enablement",
    description:
      "Build systems to track pipeline by stage, owner, and conversion likelihood. Implement automated forecasting tools and reporting for sales leadership and executive teams",
  },
  {
    number: "5",
    title: "Revenue Analytics and Growth Diagnostics",
    description:
      "Establish reporting across leading and lagging indicators, including website traffic by source, CAC, CLV, sales cycle length, and gross margin. Enable operators to understand what’s driving performance and where breakdowns occur",
  },
  {
    number: "6",
    title: "Sales Playbooks and Process Enablement",
    description:
      "Document end-to-end sales processes from lead handling to close. Deliver playbooks with qualification criteria, objection handling, handoff protocols, and clear exit/entry stages across the funnel",
  },
  {
    number: "7",
    title: "Leadership Cadence and Team Performance Tools",
    description:
      "Set up recurring reporting and performance frameworks to support weekly sales huddles, rep 1:1s, and quarterly GTM reviews. Create dashboards for real-time accountability tied to funnel performance",
  },
  {
    number: "8",
    title: "Embedded Growth Operations Support",
    description:
      "Act as an extension of the internal team, driving continued refinement of GTM strategy, sales execution, and marketing alignment. Bridge functional gaps between marketing, sales, and operations to unlock growth",
  },
];

export default function OverviewBento() {
  return (
    <section className="bg-[#fafafa] border-t border-neutral-200 px-4 md:px-[5%] py-12 md:py-16">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-gray-500 text-xs"
          >
            Grow With STOC
          </span>
          <div className="h-px bg-neutral-300 w-[30px]" />
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight md:max-w-[24ch] font-gambetta leading-tight">
          Our Growth Roadmap
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.05,
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <OverviewCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
