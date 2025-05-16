import React from "react";
import type { LucideIcon } from "lucide-react";
import { Handshake } from "lucide-react";

interface NumberDataProps {
  id?: number;
  heading: string;
  sub: string;
  Icon: LucideIcon;
}

const numbersData: NumberDataProps[] = [
  {
    id: 0,
    heading: "30+",
    sub: "Finance & Advisory Professionals",
    Icon: Handshake,
  },
  {
    id: 1,
    heading: "2",
    sub: "Primary Offices",
    Icon: Handshake,
  },
  {
    id: 0,
    heading: "600+",
    sub: "Engagements Delivered",
    Icon: Handshake,
  },
];

const Numbers = ({ heading, sub, Icon }: NumberDataProps) => (
  <div className="flex rounded-xl flex-row gap-4 items-center">
    <div className="flex items-start justify-start border border-white/20 bg-[#16333A] p-4 rounded-lg">
      <Icon className="size-6 text-white" />
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl md:text-3xl font-gambetta tracking-tighter">
        {heading}
      </h3>
      <p className="text-neutral-600 text-start  font-medium max-w-[48ch] leading-relaxed">
        {sub}
      </p>
    </div>
  </div>
);

const ByTheNumbers = () => {
  return (
    <section className="px-6 bg-white md:px-12 lg:px-[5vw] py-16">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl tracking-tighter  md:text-4xl lg:text-5xl font-gambetta leading-normal">
          At a Glance
        </h2>
        <div className="flex items-start  w-full rounded-xl gap-4 flex-col">
          {numbersData.map((item) => (
            <div key={item.id}>
              <Numbers sub={item.sub} Icon={item.Icon} heading={item.heading} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
