import React from "react";
import Image from "next/image";
import { Search, FileSearch, GitMerge } from "lucide-react";

interface Step {
  id: number;
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const stepData: Step[] = [
  {
    id: 0,
    title: "Diagnose",
    text: "market and cost-structure challenges",
    Icon: Search,
  },
  {
    id: 1,
    title: "Design",
    text: "optimized supply-chain networks and logistics strategies",
    Icon: FileSearch,
  },
  {
    id: 2,
    title: "Drive",
    text: "process automation and digital transformation",
    Icon: GitMerge,
  },
  {
    id: 3,
    title: "Deliver",
    text: "actionable, value-driven insights",
    Icon: GitMerge,
  },
  {
    id: 4,
    title: "Deploy",
    text: "rigorous financial and operational KPIs",
    Icon: GitMerge,
  },
];

interface StepItemProps {
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StepItem: React.FC<StepItemProps> = ({ title, text }) => (
  <div className="flex flex-col px-4 md:px-12 items-start  gap-1 md:gap-3">
    <div className="flex flex-col md:flex-row items-start md:items-end md:gap-1">
      <h3 className="text-lg tracking-tight text-neutral-800 md:text-2xl font-medium">
        {title}
      </h3>
      <p className="text-neutral-600 tracking-tight text-md md:text-lg">
        {text}
      </p>
    </div>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-4 bg-white  w-full md:px-[5%] py-12  md:py-20">
    <div className="flex items-center md:items-start flex-col">
      <div className="flex items-center mb-4 justify-center gap-4">
        <div className="h-px bg-neutral-300 w-[30px]" />
        <span
          style={{ letterSpacing: "2px" }}
          className="uppercase text-gray-600 text-xs"
        >
          Our Industry Expertise
        </span>
        <div className="h-px bg-neutral-300 w-[30px]" />
      </div>
      <h2 className="text-neutral-800 text-3xl md:text-4xl px-2 md:px-0 lg:text-5xl  font-gambetta text-center md:text-start leading-tight tracking-tighter">
        Global Manufacturing & Distribution Expertise
      </h2>
      <div className="flex flex-col gap-4 mt-2">
        <p className="tracking-tight  md:max-w-[84ch] text-md md:text-lg text-center md:text-start text-neutral-500">
          Combining deep sector knowledge with hands-on global experience, we
          partner with C-suite and operations teams to tackle today&apos;s
          challenges and build tomorrow&apos;s success.
        </p>
      </div>
    </div>
    <div className="flex flex-col  h-full mt-8  md:flex-row md:gap-6 gap-2 lg:gap-8">
      <div className="flex items-start md:w-[40vw] bg-white border border-neutral-200 py-10 md:py-12 rounded-xl justify-center flex-col gap-6">
        {stepData.map(({ id, title, text, Icon }) => (
          <StepItem key={id} title={title} text={text} Icon={Icon} />
        ))}
      </div>
      <div className="md:flex hidden md:w-[60vw]  items-center flex-col gap-4 justify-center bg-[#041E40] rounded-xl  relative">
        <Image
          src="/stoc-office.png"
          className="object-cover rounded-xl"
          alt="About STOC"
          fill
        />
      </div>
    </div>
  </section>
);

export default Intro;
