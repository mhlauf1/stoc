import React from "react";
import Link from "next/link";
import { ServiceProps } from "@/utils/types";
import { servicesData } from "@/utils/data";
import { PrimaryButtonBlue } from "@/components/Button";

const ServiceCard: React.FC<ServiceProps> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-8
      bg-[#16203a] text-white
      rounded-2xl border border-[#16203a]
      transition-colors duration-300 ease-out
      hover:bg-[#36415d]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#16203a]" />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl max-w-[15ch] tracking-tighter font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-lg leading-8 mb-8">{description}</p>
    <a href="#" className="underline">
      Learn More
    </a>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {servicesData.map((svc) => (
      <ServiceCard key={svc.id} {...svc} />
    ))}

    {/* Plain-text slot */}
    <div className="p-8 flex flex-col gap-8 justify-center items-start">
      <p className="text-gray-600 text-lg leading-8">
        Our seasoned advisors deliver data-driven insights and hands-on
        support—guiding decisions, optimizing performance, and turning strategic
        vision into measurable outcomes.
      </p>
      <Link href="/services">
        <PrimaryButtonBlue>Explore Services</PrimaryButtonBlue>
      </Link>
    </div>
  </div>
);

const Services: React.FC = () => (
  <section className="flex flex-col px-4 sm:px-12 md:px-20 pb-16 md:pb-28">
    <div className="flex items-center mb-12 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[60px]" />
      <span
        style={{ letterSpacing: "3px" }}
        className="uppercase text-gray-600 text-xs font-mono"
      >
        What we do
      </span>
      <div className="h-[1px] bg-neutral-300 w-[60px]" />
    </div>
    <ServicesGrid />
  </section>
);

export default Services;
