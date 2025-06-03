// src/components/Trust.tsx
"use client";
import React from "react";
import { Briefcase, SlidersHorizontal, ListChecks } from "lucide-react";
import { motion } from "framer-motion";

const trustData = [
  {
    id: 0,
    title: "Industry Expertise",
    text: "Decades of experience across healthcare, business services, manufacturing, and more.",
    Icon: Briefcase,
  },
  {
    id: 1,
    title: "Tailored Advisory",
    text: "Custom strategies built to align with your business goals, at every stage of the transaction.",
    Icon: SlidersHorizontal,
  },
  {
    id: 2,
    title: "Proven Process",
    text: "A comprehensive diligence approach that ensures clarity, mitigates risk, and drives results.",
    Icon: ListChecks,
  },
];

interface TrustItemProps {
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const TrustItem: React.FC<TrustItemProps> = ({ title, text, Icon }) => (
  <div className="relative flex flex-col items-start rounded-md px-1">
    <div className="flex flex-row items-center gap-3 md:gap-4">
      <Icon className="h-6 w-6 text-white" />
      <h3 className="text-2xl md:text-3xl font-gambetta tracking-tight">
        {title}
      </h3>
    </div>
    <p className="text-white/90 tracking-tight mt-2 md:mt-3 text-start md:text-lg leading-relaxed">
      {text}
    </p>
  </div>
);

const Trust: React.FC = () => (
  <section className="bg-[#041E40] px-4 md:px-[5%] md:mb-16 py-20 md:py-24">
    <div className="mx-auto flex rounded-2xl flex-col items-center md:items-start text-white gap-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-start max-w-[24ch] font-gambetta leading-tight">
        Why Clients Trust STOC
      </h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full h-[1px] mt-2 bg-neutral-500"
      />

      <div className="grid mt-8 md:mt-12 w-full grid-cols-1 gap-16 md:gap-4 md:grid-cols-3">
        {trustData.map(({ id, title, text, Icon }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: id * 0.2,
            }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <TrustItem title={title} text={text} Icon={Icon} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
