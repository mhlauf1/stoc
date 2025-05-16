import React from "react";
import { ValueProps } from "@/utils/types";
import { valuesData } from "@/utils/data";

const ServiceCard: React.FC<ValueProps> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-8
      bg-[#16333A] text-white
      rounded-2xl border border-[#16333A]
      transition-colors duration-300 ease-out
      hover:bg-[#2D474D]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#16333A]" />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl max-w-[15ch] tracking-tighter font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-lg leading-8 mb-8">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {valuesData.map((svc) => (
      <ServiceCard key={svc.id} {...svc} />
    ))}
  </div>
);

const Values: React.FC = () => (
  <section className="flex flex-col px-4 sm:px-12 md:px-32 pb-16 md:pb-28">
    <div className="flex items-center mb-12 justify-center gap-4">
      <div className="h-[1px] bg-neutral-300 w-[60px]" />
      <span
        style={{ letterSpacing: "3px" }}
        className="uppercase text-gray-600 text-xs font-mono"
      >
        Our Values
      </span>
      <div className="h-[1px] bg-neutral-300 w-[60px]" />
    </div>
    <ServicesGrid />
  </section>
);

export default Values;
