import React from "react";
import { Briefcase, SlidersHorizontal, ListChecks } from "lucide-react";

const trustData = [
  {
    id: 0,
    title: "Industry Expertise",
    text: "Decades of experience across healthcare, business services, manufacturing, and more.",
    Icon: Briefcase,
  },
  {
    id: 1,
    title: "Tailored Advisory",
    text: "Custom strategies built to align with your business goals, at every stage of the transaction.",
    Icon: SlidersHorizontal,
  },
  {
    id: 2,
    title: "Proven Process",
    text: "A comprehensive diligence approach that ensures clarity, mitigates risk, and drives results.",
    Icon: ListChecks,
  },
];

interface TrustItemProps {
  title: string;
  text: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const TrustItem: React.FC<TrustItemProps> = ({ title, text, Icon }) => (
  <div className="relative flex flex-col items-start rounded-md px-1 md:px-8 ">
    {/* Icon in top-right */}
    <div className="bg-[#F7F7F7] p-4 mb-4 md:mb-6 rounded-lg">
      <Icon className=" size-5 text-[#18598b]" />
    </div>
    <h3 className="text-3xl font-gambetta md:text-4xl tracking-tighter">
      {title}
    </h3>
    <p className="text-white/90 tracking-tight mt-2 md:mt-3 text-start md:text-lg leading-relaxed">
      {text}
    </p>
  </div>
);
const Trust: React.FC = () => (
  <section className="bg-[#041E40] px-4 md:px-[5%] md:mb-16 py-20 md:py-24">
    <div className="mx-auto flex rounded-2xl flex-col items-center md:items-start  text-white gap-4">
      <h2 className="text-3xl tracking-tighter text-start max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
        Why Clients Trust STOC
      </h2>
      <div className="w-full h-[1px] mt-2 bg-neutral-500"></div>
      <div className="grid mt-8 md:mt-12 w-full  grid-cols-1 gap-16 md:gap-6 md:grid-cols-3">
        {trustData.map(({ id, title, text, Icon }) => (
          <TrustItem key={id} title={title} text={text} Icon={Icon} />
        ))}
      </div>
    </div>
  </section>
);
export default Trust;
