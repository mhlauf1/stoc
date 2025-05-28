import React from "react";
import Image from "next/image";
import { Search, FileSearch, GitMerge, BarChart } from "lucide-react";

interface Step {
  id: number;
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const stepData: Step[] = [
  {
    id: 0,
    title: "Target Sourcing & Qualification",
    text: "Build and manage your CRM pipeline with prioritized acquisition targets.",
    Icon: Search,
  },
  {
    id: 1,
    title: "Diligence Coordination & Analysis",
    text: "Run data requests, model financials and keep your team on schedule.",
    Icon: FileSearch,
  },
  {
    id: 2,
    title: "Integration Planning & Execution",
    text: "Map out operational roadmaps and drive post-close milestones.",
    Icon: GitMerge,
  },
  {
    id: 3,
    title: "Reporting & Investor Updates",
    text: "Deliver clear board decks, investor summaries and ongoing performance tracking.",
    Icon: BarChart,
  },
];

interface StepItemProps {
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StepItem: React.FC<StepItemProps> = ({ title, text, Icon }) => (
  <div className="flex flex-col px-4 md:px-12 items-start  gap-1 md:gap-3">
    <div className="flex flex-row items-center gap-2">
      <Icon className="size-5" />
      <h3 className="text-lg tracking-tight text-neutral-800 md:text-xl font-medium">
        {title}
      </h3>
    </div>
    <p className="text-neutral-500 tracking-tight">{text}</p>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-4 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] w-full md:px-[5%] py-12  md:py-20">
    <div className="flex items-center md:items-start flex-col">
      <div className="flex items-center mb-4 justify-center gap-4">
        <div className="h-px bg-neutral-300 w-[30px]" />
        <span
          style={{ letterSpacing: "2px" }}
          className="uppercase text-gray-600 text-xs"
        >
          What Is CDS?
        </span>
        <div className="h-px bg-neutral-300 w-[30px]" />
      </div>
      <h2 className="text-neutral-800 text-3xl md:text-4xl px-2 md:px-0 lg:text-5xl md:max-w-[20ch] font-gambetta text-center md:text-start leading-tight tracking-tighter">
        Hands-On M&A Support From Start to Finish
      </h2>
      <div className="flex flex-col gap-4 mt-2">
        <p className="tracking-tight md:max-w-[60ch] text-md md:text-lg text-center md:text-start text-neutral-500">
          Our CDS team extends your internal capacity across the entire deal
          lifecycle. You get the structure, speed and accountability you need,
          without hiring extra staff.
        </p>
      </div>
    </div>
    <div className="flex flex-col  h-full mt-8 md:min-h-[65vh] md:flex-row md:gap-6 gap-2 lg:gap-8">
      <div className="flex items-start md:w-[40vw] bg-[#FCFCFC] py-10 md:py-6 rounded-xl justify-center flex-col gap-8">
        <h3 className="text-neutral-800 px-4 md:px-12 text-2xl lg:text-3xl  font-gambetta  leading-tight tracking-tighter">
          Our 4-Step Process
        </h3>
        {stepData.map(({ id, title, text, Icon }) => (
          <StepItem key={id} title={title} text={text} Icon={Icon} />
        ))}
      </div>
      <div className="flex md:w-[60vw]  relative">
        <Image
          src="/cds-intro.jpg"
          className="object-cover hidden md:flex  rounded-xl"
          alt="About STOC"
          fill
        />
        <div
          className="absolute inset-0 bg-blue-600 opacity-30 mix-blend-multiply rounded-lg"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
);

export default Intro;
