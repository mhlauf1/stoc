import React from "react";

const trustData = [
  {
    id: 0,
    title: "Industry Expertise",
    text: "Decades of experience across healthcare, business services, manufacturing, and more.",
  },
  {
    id: 1,
    title: "Tailored Advisory",
    text: "Custom strategies built to align with your business goals, at every stage of the transaction.",
  },
  {
    id: 2,
    title: "Proven Process",
    text: "A comprehensive diligence approach that ensures clarity, mitigates risk, and drives results.",
  },
];

interface TrustItemProps {
  title: string;
  text: string;
}

const TrustItem: React.FC<TrustItemProps> = ({ title, text }) => (
  <div className="flex flex-col items-start">
    <h3 className="text-xl font-gambetta md:text-3xl tracking-tighter">
      {title}
    </h3>
    <div className="mt-2 mb-4 w-full border-b border-dashed border-white/50" />
    <p className="text-white/70 text-start leading-relaxed">{text}</p>
  </div>
);

const Trust: React.FC = () => (
  <section className="bg-[#07171E] px-0 md:px-12 lg:px-32 py-12">
    <div className="mx-auto flex  py-20 md:py-16 rounded-2xl flex-col items-center text-center text-white gap-8">
      <h2 className="text-3xl  tracking-tighter max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl text-center md:text-start leading-tight">
        Why Clients Trust STOC
      </h2>
      <div className="grid mt-8 w-full grid-cols-1 gap-16 md:gap-24 md:grid-cols-3">
        {trustData.map(({ id, title, text }) => (
          <TrustItem key={id} title={title} text={text} />
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
