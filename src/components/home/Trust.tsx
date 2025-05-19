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
  <div className="relative flex flex-col rounded-xl border px-8 bg-white/10 py-16 border-dashed border-white/20">
    {/* Icon in top-right */}
    <div className="bg-white/90 p-2 absolute top-4 right-4 rounded-md">
      <Icon className=" size-5 text-black/70" />
    </div>
    <h3 className="text-2xl font-gambetta md:text-3xl tracking-tighter">
      {title}
    </h3>
    <p className="text-white/80 mt-2 text-start md:text-lg w-[90%] leading-relaxed">
      {text}
    </p>
  </div>
);
const Trust: React.FC = () => (
  <section className="bg-[#07171E] px-4 md:px-12 lg:px-32 py-20 md:py-32">
    <div className="mx-auto flex rounded-2xl flex-col items-center text-start text-white gap-4">
      <h2 className="text-3xl tracking-tighter max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl leading-tight">
        Why Clients Trust STOC
      </h2>
      <div className="grid mt-8 w-full grid-cols-1 gap-4 md:gap-6 md:grid-cols-3">
        {trustData.map(({ id, title, text, Icon }) => (
          <TrustItem key={id} title={title} text={text} Icon={Icon} />
        ))}
      </div>
    </div>
  </section>
);
export default Trust;
