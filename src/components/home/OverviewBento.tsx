// app/OverviewBento.tsx
"use client";
import React from "react";
import { Settings, Globe, User2, MailCheck } from "lucide-react";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";

const cards: OverviewCardProps[] = [
  {
    Icon: Settings,
    title: "Our Services",
    description:
      "Specialized services that guide your business through complex transactions.",
    href: "/services",
    cta: "Explore Services",
  },
  {
    Icon: Globe,
    title: "Industries We Serve",
    description:
      "Driving sector-specific growth and resilience through expert advisory.",
    href: "/industries",
    cta: "Explore Industries",
  },
  {
    Icon: User2,
    title: "Meet the team",
    description: "Explore the team members across the US that make power STOC.",
    href: "/industries",
    cta: "View team",
  },
  {
    Icon: MailCheck,
    title: "Newsletter",
    description: "Sign up for the STOC newsletter, monthly reports for you.",
    href: "/industries",
    cta: "Sign Up",
  },
];

export default function OverviewBento() {
  return (
    <section className="bg-[#fafafa] border-t border-neutral-200 px-4 md:px-12 lg:px-28 py-12 md:py-16">
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-neutral-300 w-8" />
          <span className="uppercase text-gray-500 text-sm  tracking-widest">
            How we can help
          </span>
          <div className="h-px bg-neutral-300 w-8" />
        </div>
        <h2 className="text-3xl tracking-tighter md:max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
          Explore our Core Network
        </h2>

        <div className="grid my-8 grid-cols-1  md:grid-cols-2 w-full  gap-4">
          {cards.map((card, i) => (
            <OverviewCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
