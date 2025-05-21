// app/OverviewBento.tsx
"use client";
import React from "react";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import Image from "next/image";

const cards: OverviewCardProps[] = [
  {
    number: "1",
    title: "Blueprint & Prioritize",
    description:
      "Define lead-gen, segmentation and recruiting strategies that align to your post-acquisition goals.",
  },
  {
    number: "2",
    title: "Systems & Automations",
    description:
      "Stand up or optimize your CRM, tooling and AI integrations to streamline every handoff.",
  },
  {
    number: "3",
    title: "Go-to-Market Launch",
    description:
      "Execute targeted outbound/inbound campaigns and build enablement collateral.",
  },
  {
    number: "4",
    title: "Measure & Iterate",
    description: "Track KPIs in real time—then refine for ever-faster results.",
  },
];

export default function OverviewBento() {
  return (
    <section className="bg-[#fafafa] border-t border-neutral-200 px-4 md:px-12 lg:px-28 py-12 md:py-16">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-neutral-300 w-8" />
          <span className="uppercase text-gray-500 text-sm  tracking-widest">
            Grow With STOC
          </span>
          <div className="h-px bg-neutral-300 w-8" />
        </div>
        <h2 className="text-3xl tracking-tighter md:max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
          Our Growth Roadmap
        </h2>

        <div className="flex flex-col md:flex-row  w-full  gap-4">
          <div className="flex flex-col flex-1 gap-4">
            {cards.map((card, i) => (
              <OverviewCard key={i} {...card} />
            ))}
          </div>
          <div className="flex flex-1 relative">
            <Image
              className="rounded-xl object-cover"
              src="/ges-2.jpg"
              alt="GES"
              fill
            />
            <div
              className="absolute inset-0 bg-blue-600 opacity-30 mix-blend-multiply rounded-lg"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
