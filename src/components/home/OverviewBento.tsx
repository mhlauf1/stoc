// src/app/OverviewBento.tsx
"use client";
import React from "react";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import { motion } from "framer-motion";

// adjust these relative paths if your JSON lives elsewhere:
import globeData from "../../../public/globe-bold.json";
import layersData from "../../../public/layers-bold.json";
import teamData from "../../../public/photo-bold.json";
import letterData from "../../../public/letter-bold.json";

const cards: OverviewCardProps[] = [
  {
    animatedData: layersData,
    title: "Our Services",
    description:
      "Specialized services that guide your business through complex transactions.",
    href: "/services",
    cta: "Explore Services",
  },
  {
    animatedData: globeData,
    title: "Industries We Serve",
    description:
      "Driving sector specific growth and resilience through expert advisory.",
    href: "/industries",
    cta: "Explore Industries",
  },
  {
    animatedData: teamData,
    title: "Meet the Team",
    description: "Explore the experts across the US driving STOC success.",
    href: "/about/team",
    cta: "Meet the Team",
  },
  {
    animatedData: letterData,
    title: "Newsletter",
    description: "Get monthly insights straight to your inbox.",
    href: "#newsletter",
    cta: "Sign Up",
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
            className="uppercase text-neutral-600 text-xs"
          >
            How we can help
          </span>
          <div className="h-px bg-neutral-300 w-[30px]" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-gambetta leading-tight">
          Explore our Core Network
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
