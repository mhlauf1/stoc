import React from "react";
import type { LucideIcon } from "lucide-react";

type Bullet = {
  id: number;
  title: string;
};

const bullets: Bullet[] = [
  {
    id: 0,
    title: "Strategic Guidance",
  },
  {
    id: 1,
    title: "Flexible Engagement",
  },
  {
    id: 2,
    title: "Operational Excellence",
  },
  {
    id: 2,
    title: "Investor Confidence",
  },
];

interface ValuePillarProps {
  title: string;
  text: string;
  Icon: LucideIcon;
}

const ValuePillar: React.FC<ValuePillarProps> = ({ title, text, Icon }) => (
  <div className="flex flex-row  gap-4  items-start justify-start">
    {/* <Icon className="size-5 text-[#16333A]" /> */}
    <div className="space-y-1 w-full">
      <h3 className="text-2xl md:text-3xl text-start font-gambetta italic">
        {title}
      </h3>
      <p className="text-neutral-600 text-start mt-2 max-w-[48ch] leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-6 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] md:px-12 lg:px-32 py-12 mb-12 md:mb-24 md:py-20">
    <div className="flex justify-between items-center gap-16 flex-col md:flex-row ">
      <div className="flex flex-1 items-center flex-col">
        <div className="flex items-center mb-4 justify-center gap-4">
          <div className="h-px bg-neutral-300 w-8" />
          <span className="uppercase text-gray-600 text-xs font-mono tracking-widest">
            Stoc Advisory Corporate Support
          </span>
          <div className="h-px bg-neutral-300 w-8" />
        </div>
        <div className="flex flex-col gap-4 mt-2">
          <p className="leading-7 md:leading-8 text-center md:max-w-[76ch] text-md md:text-lg text-neutral-600">
            STOC&apos;s Corporate Advisors deliver timely, accurate guidance
            through robust analysis—empowering you to make critical decisions
            that position your company for long-term success.
          </p>
          <p className="leading-7 md:leading-8 text-center md:max-w-[76ch] text-md md:text-lg text-neutral-600">
            Our hands-on approach combines deep sector knowledge with
            disciplined financial modeling to uncover value-creation pathways
            tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
