"use client";
import React, { useState } from "react";
import TransactionAdvisoryPanel from "./TransactionAdvisoryPanel";

const servicesData = [
  {
    id: 0,
    title: "Transaction Advisory Services",
    image: "tas.png",
    description:
      "From Quality of Earnings (QoE) to working capital analysis, we uncover insights that drive informed decisions and mitigate risk across transactions.",
  },
  {
    id: 1,
    title: "Corporate Development Services",
    image: "cds.png",
    description:
      "From Quality of Earnings (QoE) to working capital analysis, we uncover insights that drive informed decisions and mitigate risk across transactions.",
  },
  {
    id: 2,
    title: "Growth Enablement Services",
    image: "ges.png",
    description:
      "From Quality of Earnings (QoE) to working capital analysis, we uncover insights that drive informed decisions and mitigate risk across transactions.",
  },
  {
    id: 3,
    title: "CFO Advisory",
    image: "cfoa.png",
    description:
      "From Quality of Earnings (QoE) to working capital analysis, we uncover insights that drive informed decisions and mitigate risk across transactions.",
  },
  {
    id: 4,
    title: "Restructuring & Turnaround",
    image: "rt.png",
    description:
      "From Quality of Earnings (QoE) to working capital analysis, we uncover insights that drive informed decisions and mitigate risk across transactions.",
  },
];

const panelComponents = [
  TransactionAdvisoryPanel,
  /* CorporateDevelopmentPanel, GrowthEnablementPanel, CFOAdvisoryPanel, RestructuringPanel */
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActivePanel = panelComponents[activeIndex];

  return (
    <section className="px-4 md:px-12 lg:px-12 flex flex-col md:flex-row gap-2">
      {/* Left side: image + description */}
      <div className="flex flex-col flex-1 border bg-neutral-900 text-white">
        <ActivePanel />
        <p className="text-center text-sm md:text-base max-w-md mx-auto py-4">
          {servicesData[activeIndex].description}
        </p>
      </div>

      {/* Right side: service list */}
      <div className="flex flex-col gap-2 flex-1">
        {servicesData.map((item, index) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveIndex(index)}
            className={`relative py-12 px-8 ${
              activeIndex === index ? "bg-neutral-100 rounded-md" : ""
            } cursor-pointer transition`}
          >
            <h2 className="font-gambetta tracking-tighter text-2xl sm:text-3xl md:text-4xl">
              {item.title}
            </h2>
            {activeIndex === index && (
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-sm text-neutral-600">
                ↳ View service
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
