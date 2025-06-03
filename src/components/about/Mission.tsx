import React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { Target, Handshake, TrendingUp } from "lucide-react";

type Value = {
  id: number;
  title: string;
  text: string;
  Icon: LucideIcon;
};

const values: Value[] = [
  {
    id: 0,
    title: "Precision",
    text: "We uncover the details that drive decisions, ensuring no opportunity or risk goes unseen.",
    Icon: Target,
  },
  {
    id: 1,
    title: "Partnership",
    text: "Your goals become our goals — we tailor every engagement to your unique business needs.",
    Icon: Handshake,
  },
  {
    id: 2,
    title: "Performance",
    text: "We deliver actionable insights and measurable results that help you grow and thrive.",
    Icon: TrendingUp,
  },
];

interface ValuePillarProps {
  title: string;
  text: string;
  Icon: LucideIcon;
}

const ValuePillar: React.FC<ValuePillarProps> = ({ title, text, Icon }) => (
  <div className="flex flex-row gap-4  items-center ">
    <div className="flex items-center justify-center border border-white/20 bg-[#16333A] p-6 rounded-lg">
      <Icon className="size-6 text-white" />
    </div>
    <div className="space-y-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const Mission: React.FC = () => (
  <section className="px-6 md:px-12 lg:px-[5vw] py-24 md:py-32">
    <div className="flex flex-col pb-32 items-center md:flex-row gap-[5vw]">
      {/* Left Column */}
      <div className="flex-1 flex flex-col items-start">
        <div className="flex items-center mb-6 gap-4">
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-gray-600 text-xs font-mono"
          >
            Our Company
          </span>
          <div className="h-[1px] bg-neutral-300 w-[60px]" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-gambetta tracking-tight leading-tight max-w-[24ch]">
          Partnering with clients through every stage of the acquisition
          lifecycle
        </h1>
        <p className="mt-4 text-lg text-neutral-600 md:w-[80%] leading-8">
          At STOC, we empower businesses to navigate change and unlock growth
          through expert guidance in accounting, finance, and operations.
        </p>

        <div className="mt-24 w-full">
          <p className="mb-4 text-lg font-medium text-neutral-700">
            Value Pillars
          </p>
          <div className="flex flex-col gap-10">
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
        </div>
      </div>

      {/* Right Column */}
      <div className=" flex justify-end">
        <Image
          src="/about-2.png"
          alt="Meet the STOC Team"
          width={660}
          height={420}
          className="rounded-2xl w-[35vw] min-w-[450px] object-cover"
        />
      </div>
    </div>
    <div className="flex justify-between flex-col md:flex-row ">
      <div className="flex flex-1 flex-col">
        <span>Stoc Advisory</span>
        <h2></h2>
      </div>
      <div className="flex flex-1">side 2</div>
    </div>
  </section>
);

export default Mission;
