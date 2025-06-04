// src/components/CoreServices.tsx
"use client";
import React from "react";
import { Layers, Leaf, BarChart2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export interface OverviewCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  id: number;
}

export const cards: OverviewCardProps[] = [
  {
    id: 0,
    Icon: Layers,
    title: "End-to-End Capabilities",
    description: "From high-level strategy to hands-on implementation.",
  },
  {
    id: 1,
    Icon: Leaf,
    title: "Sustainability Focus",
    description: "We embed eco-friendly best practices into every solution.",
  },
  {
    id: 2,
    Icon: BarChart2,
    title: "Consumer-Centric Insights",
    description: "Real-time analytics to keep you ahead of trends.",
  },
];

const ServiceCard: React.FC<{
  Icon: LucideIcon;
  title: string;
  description: string;
}> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-6 md:p-8
      bg-[#041E40] text-white
      rounded-xl
      transition-colors duration-300 ease-out
      hover:bg-[#343e5a]
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
  <div className="grid gap-6 flex-1 grid-cols-1">
    {cards.map((svc, idx) => (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServiceCard
          Icon={svc.Icon}
          title={svc.title}
          description={svc.description}
        />
      </motion.div>
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col md:flex-row gap-8 md:gap-16 pt-12 md:pt-24 px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex flex-1 items-start flex-col">
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-start font-gambetta leading-normal">
        Why Partner with Us?
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        <p className="tracking-tight text-start md:max-w-[64ch] text-md md:text-lg text-neutral-600">
          E-commerce has surged, blurring the lines between digital and
          brick-and-mortar, and challenging retailers to reimagine every
          touchpoint.
        </p>
      </div>
    </div>
    <ServicesGrid />
  </section>
);

export default CoreServices;
