"use client";
import {
  ArrowUpRight,
  Briefcase,
  Stethoscope,
  Leaf,
  Building2,
  Factory,
  ShoppingBag,
} from "lucide-react";
import React from "react";

const industriesData = [
  {
    id: 1,
    title: "Business Services",
    description:
      "Helping service firms improve margins, scalability, and operational efficiency.",
    icon: Briefcase,
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Supporting providers and practices with revenue cycle optimization and compliance.",
    icon: Stethoscope,
  },
  {
    id: 3,
    title: "Cannabis",
    description:
      "Guiding cannabis businesses through regulatory, financial, and growth challenges.",
    icon: Leaf,
  },
  {
    id: 4,
    title: "Hospitality & Entertainment",
    description:
      "Driving profitability and guest experience improvements for hospitality brands.",
    icon: Building2,
  },
  {
    id: 5,
    title: "Manufacturing & Distribution",
    description:
      "Optimizing supply chains, production efficiency, and working capital strategies.",
    icon: Factory,
  },
  {
    id: 6,
    title: "Retail & Consumer Products",
    description:
      "Boosting customer retention, channel strategy, and inventory performance.",
    icon: ShoppingBag,
  },
];

const Industries = () => {
  return (
    <section className="px-4 md:px-12 lg:px-12 py-24 md:py-48">
      {/* Header */}
      <div className="flex flex-col md:flex-row  pb-4 border-neutral-200 justify-between items-start md:items-end mb-12">
        <div>
          <div className="flex">
            <div className="flex border py-2 px-4 border-neutral-300 rounded-full items-center gap-2 text-sm text-neutral-800 mb-4">
              <div className="h-[4px] w-[4px] rounded-full bg-neutral-700"></div>
              <p className="font-gambetta">Industries We Serve</p>
            </div>
          </div>

          <h2 className="font-gambetta tracking-tighter text-3xl sm:text-4xl md:text-5xl max-w-2xl">
            Driving sector-specific growth and resilience through expert
            advisory.
          </h2>
        </div>
        <button className="mt-8 flex flex-row gap-4 items-center font-medium bg-[#232C2D] text-white px-8 py-4 rounded-xl text-md md:text-lg hover:bg-neutral-200 cursor-pointer transition">
          Industries We Serve
          <ArrowUpRight strokeWidth="2" />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:border border-neutral-300 rounded-lg overflow-hidden">
        {industriesData.map((industry, index) => {
          const IconComponent = industry.icon;
          return (
            <div
              key={industry.id}
              className="flex flex-col px-4 py-6 md:p-8 md:[&:not(:nth-child(3n))]:border-r md:[&:nth-child(n+4)]:border-t border-neutral-300"
            >
              <div className="mb-6 md:mb-8">
                <div className="size-10 md:size-12 flex items-center justify-center rounded-md bg-neutral-900 text-white">
                  <IconComponent className="size-4 md:size-6" />
                </div>
              </div>
              <h3 className="font-gambetta text-2xl md:text-4xl tracking-tighter mb-2">
                {industry.title}
              </h3>
              <p className="leading-relaxed text-lg text-neutral-700">
                {industry.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Industries;
