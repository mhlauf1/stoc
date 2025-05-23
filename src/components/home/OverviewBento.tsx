// app/OverviewBento.tsx
"use client";
import React from "react";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import globeData from "../../../public/globe.json";
import layersData from "../../../public/layers.json";
import teamData from "../../../public/team-icon.json";
import letterData from "../../../public/letter.json";

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
      "Driving sector-specific growth and resilience through expert advisory.",
    href: "/industries",
    cta: "Explore Industries",
  },
  {
    animatedData: teamData,
    title: "Meet the team",
    description: "Explore the team members across the US that make power STOC.",
    href: "/industries",
    cta: "View team",
  },
  {
    animatedData: letterData,
    title: "Newsletter",
    description: "Sign up for the STOC newsletter, monthly reports for you.",
    href: "/industries",
    cta: "Sign Up",
  },
];

export default function OverviewBento() {
  return (
    <section className="bg-[#fafafa] border-t border-neutral-200 px-4 md:px-[5%] py-12 md:py-16">
      <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
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
        <h2 className="text-3xl tracking-tighter md:max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
          Explore our Core Network
        </h2>

        <div className="grid mt-2 grid-cols-1  md:grid-cols-2 w-full  gap-4">
          {cards.map((card, i) => (
            <OverviewCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
