import React from "react";

const clientTrustInfo = [
  {
    id: 0,
    title: "Industry Expertise",
    description:
      "Decades of experience across healthcare, business services, manufacturing, and more.",
  },
  {
    id: 1,
    title: "Tailored Advisory",
    description:
      "Custom strategies built to align with your business goals, at every stage of the transaction.",
  },
  {
    id: 2,
    title: "Proven Process",
    description:
      "A comprehensive diligence approach that ensures clarity, mitigates risk, and drives results.",
  },
];

const WhyUs = () => {
  return (
    <section className="flex bg-[#232C2D] p-16 md:p-28 w-full">
      <div className="mx-auto flex items-center flex-col gap-8 md:gap-16 px-4 md:px-12 lg:px-36">
        <h2 className="text-3xl tracking-tighter md:text-4xl font-gambetta lg:text-5xl leading-tight text-white text-center md:text-left">
          Why Clients Trust STOC
        </h2>
        <div className="h-[1px] w-full md:w-[100px] bg-neutral-600"></div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
          {clientTrustInfo.map((item) => (
            <div
              key={item.id}
              className="flex flex-col text-white items-center md:items-start gap-4 max-w-sm"
            >
              <h3 className="font-gambetta text-xl md:text-3xl tracking-tight">
                {item.title}
              </h3>
              <p className="text-neutral-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
