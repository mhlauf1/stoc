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
  <section className="bg-[#07171E] px-6 md:px-12 lg:px-32 py-24">
    <div className="mx-auto flex px-28  border-dashed border border-white/10 py-32  rounded-2xl flex-col items-center text-center text-white gap-8">
      <div className="flex items-center justify-center gap-4">
        <div className="h-[1px] bg-neutral-300 w-[60px]" />
        <span
          style={{ letterSpacing: "3px" }}
          className="uppercase text-gray-200 text-xs font-mono"
        >
          Built on trust, every engagement.
        </span>
        <div className="h-[1px] bg-neutral-300 w-[60px]" />
      </div>
      <h2 className=" text-3xl md:text-4xl max-w-4xl lg:text-6xl tracking-tighter leading-tight">
        <span className=" italic font-gambetta">
          Deep expertise, tailored guidance, <br />
        </span>
        <span className="text-white/70 font-gambetta">
          and a proven process— delivering results you can rely on.
        </span>
      </h2>

      <div className="grid mt-8 w-full grid-cols-1 gap-24 md:grid-cols-3">
        {trustData.map(({ id, title, text }) => (
          <TrustItem key={id} title={title} text={text} />
        ))}
      </div>
    </div>
  </section>
);

export default Trust;
