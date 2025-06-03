// src/components/Deliverables.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    id: 0,
    text: "1. Proactive Deal Sourcing and Outreach",
    description:
      "Identify and initiate contact with acquisition targets through direct outreach, relationship-building, and market mapping initiatives",
  },
  {
    id: 1,
    text: "2. Target Screening and Fit Assessment",
    description:
      "Evaluate opportunities using predefined criteria including strategic alignment, financial performance, operational readiness, and integration feasibilit",
  },
  {
    id: 2,
    text: "3. CRM Management and Workflow Optimization",
    description:
      "Build, maintain, and continuously refine the deal CRM to ensure clean data, standardized stages, and timely follow-up with targets and intermediaries",
  },
  {
    id: 3,
    text: "4. Diligence Coordination and Cross-Functional Support",
    description:
      "Support early-stage diligence efforts by aligning internal stakeholders, gathering requested materials, and flagging potential deal issues for further analysis",
  },
  {
    id: 4,
    text: "5. Valuation Input and Deal Tracking",
    description:
      "Assist in compiling financials, normalizing data, and providing valuation context to support bid strategy and pipeline prioritization",
  },
  {
    id: 5,
    text: "6. Status Reporting and Leadership Updates",
    description:
      "Prepare pipeline summaries, weekly deal updates, and materials for internal leadership, executive sponsors, and investment committees",
  },
  {
    id: 6,
    text: "7. Post-Close Handoff and Light Integration Oversight",
    description:
      "Facilitate transition to integration or portfolio operations teams by documenting deal context, rationale, and ongoing commitments",
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
      flex flex-col relative items-start p-6 md:p-8
      bg-[#F7F7F7] text-[#041E40]
      rounded-xl h-full
      transition-colors duration-300 ease-out
      hover:bg-[#FCFCFC]
    "
  >
    <div className="flex flex-col gap-3 items-start">
      <h3 className="text-xl lg:text-2xl tracking-tight font-gambetta ">
        {text}
      </h3>
      <p className="text-neutral-600 tracking-tight">{description}</p>
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
        viewport={{ once: true, amount: 0.1 }}
      >
        <Deliverable description={svc.description} text={svc.text} />
      </motion.div>
    ))}
  </div>
);

const Deliverables: React.FC = () => (
  <section className="flex flex-col gap-4 md:gap-6 px-4 md:px-[5%] py-12 md:py-20">
    <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-gambetta text-start leading-tight tracking-tight">
      Core Deliverables
    </h2>

    <motion.div
      className="h-[1px] bg-neutral-200 w-full my-1"
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    />

    <DeliverableGrid />
  </section>
);

export default Deliverables;
