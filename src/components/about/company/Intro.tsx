import React from "react";
import type { LucideIcon } from "lucide-react";

import { Target, Handshake } from "lucide-react";

type Value = {
  id: number;
  title: string;
  text: string;
  Icon: LucideIcon;
};

const values: Value[] = [
  {
    id: 0,
    title: "Mission",
    text: "To deliver tailored financial insights and strategic guidance that drive successful transactions and long-term growth.",
    Icon: Target,
  },
  {
    id: 1,
    title: "Vision",
    text: "To be the most trusted advisor for middle-market companies and private equity partners.",
    Icon: Handshake,
  },
];

interface ValuePillarProps {
  title: string;
  text: string;
  Icon: LucideIcon;
}

const ValuePillar: React.FC<ValuePillarProps> = ({ title, text }) => (
  <div className="flex flex-row  gap-4  items-center justify-center">
    {/* <Icon className="size-5 text-[#16333A]" /> */}
    <div className="space-y-1 w-full">
      <h3 className="text-2xl md:text-3xl text-center font-gambetta italic">
        {title}
      </h3>
      <p className="text-neutral-600 text-center mt-2 max-w-[48ch] leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-4 bg-white md:px-[5%] py-16 md:py-16">
    <div className="flex justify-between items-center gap-16 flex-col md:flex-row ">
      <div className="flex flex-1 items-center flex-col">
        <h2 className="text-3xl tracking-tighter md:max-w-[45vw] text-center md:text-4xl font-gambetta leading-normal">
          STOC Advisory partners with middle-market businesses and private
          equity sponsors to accelerate growth, mitigate risk, and deliver
          lasting impact.
        </h2>
        <div className="flex flex-col justify-center md:flex-row mt-16 gap-10">
          {values.map((v) => (
            <div key={v.id}>
              <ValuePillar
                key={v.id}
                title={v.title}
                text={v.text}
                Icon={v.Icon}
              />
            </div>
          ))}
        </div>
        <h2></h2>
      </div>
    </div>
  </section>
);

export default Intro;
