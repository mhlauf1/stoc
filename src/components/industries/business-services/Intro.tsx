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
    title: "150+",
    text: "project engagements in business services",
    Icon: Search,
  },
  {
    id: 1,
    title: "50+",
    text: "transaction diligence engagements in the last year",
    Icon: FileSearch,
  },
  {
    id: 2,
    title: "25%",
    text: "of STOC’s total work volume, across industries",
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
    <div className="flex flex-row items-end gap-1">
      <h3 className="text-xl text-neutral-800 md:text-2xl font-medium">
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
          Why Business Services?
        </span>
        <div className="h-px bg-neutral-300 w-[30px]" />
      </div>
      <h2 className="text-neutral-800 text-3xl md:text-4xl px-2 md:px-0 lg:text-5xl max-w-[20ch] md:max-w-none font-gambetta text-center md:text-start leading-tight tracking-tighter">
        Meeting the Moment in Business Services
      </h2>
      <div className="flex flex-col gap-4 mt-2">
        <p className="tracking-tight  md:max-w-[84ch] text-md md:text-lg text-center md:text-start text-neutral-600">
          The business services sector is undergoing relentless change—new
          entrants, talent wars and shifting client demands mean that
          differentiation and scale go hand-in-hand. From professional
          consultancies to home-services providers, success hinges on rigorous
          financial insight, nimble operational models and seamless deal
          execution.
        </p>
      </div>
    </div>
    <div className="flex flex-col  h-full mt-8  md:flex-row md:gap-6 gap-2 lg:gap-8">
      <div className="flex items-start md:w-[40vw] bg-[#FCFCFC] py-10 md:py-12 rounded-xl justify-center flex-col gap-6">
        <h3 className="text-neutral-800 px-4 md:px-12 text-2xl lg:text-3xl  font-gambetta  leading-tight tracking-tighter">
          At a Glance
        </h3>
        {stepData.map(({ id, title, text, Icon }) => (
          <StepItem key={id} title={title} text={text} Icon={Icon} />
        ))}
      </div>
      <div className="md:flex hidden md:w-[60vw] items-center flex-col gap-4 justify-center bg-[#041E40] rounded-xl  relative">
        <Image
          src="/stoc-logo-main.png"
          className="object-cover hidden md:flex filter mt-3 brightness-0 invert"
          alt="About STOC"
          height={100}
          width={170}
        />
        <p className="text-neutral-200 font-semibold">
          Where Strategic Transactions Meet Exceptional Advising
        </p>
      </div>
    </div>
  </section>
);

export default Intro;
