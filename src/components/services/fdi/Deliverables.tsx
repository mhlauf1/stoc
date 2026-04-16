// src/components/services/fdi/Deliverables.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 0,
    text: "1. Deal Sourcing & Market Intelligence Analytics",
    description:
      "Target market segmentation, sizing, and fragmentation analysis, proprietary scoring models for growth, margin, and strategic fit, and CRM enrichment to prioritize outreach toward the most attractive opportunities.",
  },
  {
    id: 1,
    text: "2. Diligence & Underwriting Analytics",
    description:
      "Quality of Earnings normalization with underlying driver analysis, cohort-based revenue and margin analytics, unit economics and margin bridges, and forward-looking, driver-based financial models to pressure-test assumptions.",
  },
  {
    id: 2,
    text: "3. Operational KPI & Margin Visibility",
    description:
      "Weekly and monthly dashboards aligned to revenue, labor, pricing, and churn, KPI trees that link site-level and functional performance to P&L outcomes, and forecast vs. actual variance diagnostics.",
  },
  {
    id: 3,
    text: "4. Platform & Roll-Up Performance Management",
    description:
      "Standardized KPIs and chart of accounts across entities, post-close performance tracking versus underwriting, synergy capture and integration monitoring, and benchmarking across sites or business units.",
  },
  {
    id: 4,
    text: "5. Board, Lender & Stakeholder Reporting",
    description:
      "Automated, drillable reporting packs with consistent metrics, covenant monitoring and liquidity forecasting, and data-backed narratives for investment committees, boards, and lenders.",
  },
  {
    id: 5,
    text: "6. Exit Readiness & Value Realization Analytics",
    description:
      "Historical KPI continuity and defensible EBITDA bridges, performance attribution for operational improvements, buyer-ready dashboards demonstrating scalability and repeatability, and portfolio-wide data room analytics.",
  },
  {
    id: 6,
    text: "7. Sponsor-Level Portfolio Intelligence",
    description:
      "Cross-portfolio benchmarking, playbook effectiveness tracking, and capital allocation analytics to inform where to invest, where to intervene, and how to replicate what is working.",
  },
];

const Deliverable = ({
  description,
  text,
}: {
  description: string;
  text: string;
}) => (
  <div
    className="
      group
      flex flex-col relative items-start py-4 px-6 md:px-8
      text-[#041E40]
      rounded-xl h-full
      transition-colors duration-300 ease-out
      hover:bg-[#FCFCFC]
    "
  >
    <div className="flex flex-col gap-1 md:gap-3 items-start">
      <h3 className="text-xl lg:text-2xl tracking-tight font-gambetta ">
        {text}
      </h3>
      <p className="text-neutral-600 tracking-tight">{description}</p>
    </div>
  </div>
);

const DeliverableGrid: React.FC = () => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
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
        viewport={{ once: true, amount: 0.1 }}
      >
        <Deliverable description={svc.description} text={svc.text} />
      </motion.div>
    ))}
  </div>
);

const Deliverables: React.FC = () => (
  <section className="flex flex-col bg-[#F7F7F7] md:px-4 lg:px-8 py-12 gap-3 md:gap-4">
    <h3 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-gambetta text-start leading-tight tracking-tight">
      Core Deliverables
    </h3>

    <motion.div
      className="h-[1px] mb-4 bg-neutral-200 w-full my-1"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    />

    <DeliverableGrid />
  </section>
);

export default Deliverables;
