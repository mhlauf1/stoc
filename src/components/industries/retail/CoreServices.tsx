import React from "react";
import { ValueProps } from "@/utils/types";
import { Layers, Leaf, BarChart2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

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

const ServiceCard: React.FC<ValueProps> = ({ Icon, title, description }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-6 md:p-8
      bg-[#041E40] text-white
      rounded-xl
      transition-colors duration-300 ease-out
      hover:bg-[#344b5a]
    "
  >
    <div className="flex justify-end items-end w-full">
      <div className="border flex border-white/20 bg-white p-2 mb-5 rounded-lg group-hover:border-white">
        <Icon className="h-6 w-6 text-[#16333A]" />
      </div>
    </div>

    <h3 className="text-3xl md:text-4xl  tracking-tighter font-gambetta mb-4">
      {title}
    </h3>
    <p className="flex-1 text-lg leading-8 mb-8">{description}</p>
  </div>
);

const ServicesGrid: React.FC = () => (
  <div className="grid gap-6 flex-1 grid-cols-1">
    {cards.map((svc) => (
      <ServiceCard key={svc.id} {...svc} />
    ))}
  </div>
);

const CoreServices: React.FC = () => (
  <section className="flex flex-col md:flex-row  gap-8 md:gap-16 pt-12 md:pt-24 px-4 md:px-[5%] pb-16 md:pb-28">
    <div className="flex flex-1 items-start flex-col">
      <h2 className="text-3xl tracking-tighter text-start  md:text-4xl font-gambetta leading-normal">
        Why Partner with Us?
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        <p className="leading-7 md:leading-8 text-start md:max-w-[64ch] text-md md:text-lg text-neutral-600">
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
