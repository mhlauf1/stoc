import React from "react";
import {
  Search,
  FileSearch,
  BarChart2,
  Puzzle,
  ChartSplineIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const data = [
  {
    id: 0,
    text: "Target sourcing, qualification, and CRM development",
    Icon: Search,
  },
  {
    id: 1,
    text: "Diligence coordination and financial analysis",
    Icon: FileSearch,
  },
  {
    id: 2,
    text: "Pipeline tracking and internal reporting frameworks",
    Icon: BarChart2,
  },
  {
    id: 3,
    text: "Integration planning and execution support",
    Icon: Puzzle,
  },
  {
    id: 4,
    text: "Board and investor-facing summaries and updates",
    Icon: ChartSplineIcon,
  },
];

const Deliverable = ({ Icon, text }: { Icon: LucideIcon; text: string }) => (
  <div
    className="
      group
      flex flex-col relative items-start p-8
      bg-[#F7F7F7] text-[#041E40]
      rounded-2xl 
      transition-colors duration-300 ease-out
      hover:bg-[#0d3c5fe6]
    "
  >
    <div className="flex justify-start items-end w-full">
      {/* <div className="border flex border-white/20 bg-[#bacaec] p-3 md:p-4 mb-5 rounded-lg group-hover:border-white"> */}
      <Icon className="size-4 mb-4 md:size-6 text-[#041E40]" />
      {/* </div> */}
    </div>

    <h3 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-gambetta mb-4">
      {text}
    </h3>
  </div>
);

const DeliverableGrid: React.FC = () => (
  <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {data.map((svc) => (
      <Deliverable key={svc.id} {...svc} />
    ))}
  </div>
);

const Deliverables: React.FC = () => (
  <section className="flex flex-col gap-6 px-4 sm:px-12 md:px-24 py-12 md:py-20">
    <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-5xl  font-gambetta  leading-tight tracking-tight">
      Core Deliverables
    </h2>
    <DeliverableGrid />
  </section>
);

export default Deliverables;
