// src/components/Values.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ValueProps } from "@/utils/types";
import { valuesData } from "@/utils/data";

const ServiceCard: React.FC<ValueProps> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-8
      bg-[#041E40] text-white
      rounded-2xl border border-[#16333A]
    "
  >
    <div className="flex flex-row mb-3 items-center gap-2 md:gap-2">
      <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-[15ch] tracking-tight font-gambetta">
        {title}
      </h3>
    </div>
    <p className="flex-1 text-md md:text-lg tracking-tight">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {valuesData.map((svc, idx) => (
      <motion.div
        key={svc.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <ServiceCard {...svc} />
      </motion.div>
    ))}
  </div>
);

const Values: React.FC = () => (
  <section className="flex flex-col bg-[#F7F7F7] pt-16 px-4 sm:px-[5%] pb-16 md:pb-24">
    <div className="flex items-center mb-12 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[30px]" />
      <span
        style={{ letterSpacing: "2px" }}
        className="uppercase text-neutral-600 text-xs"
      >
        Our Values
      </span>
      <div className="h-[1px] bg-neutral-300 w-[30px]" />
    </div>
    <ServicesGrid />
  </section>
);

export default Values;
