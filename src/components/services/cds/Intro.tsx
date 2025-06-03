import React from "react";
import Image from "next/image";

interface Step {
  id: number;
  title: string;
  text: string;
  number: string;
}

const stepData: Step[] = [
  {
    id: 0,
    title: "Lead Identification & Research",
    text: "Define investment criteria, conduct market research, and use proprietary tools to identify strategic targets.",
    number: "1",
  },
  {
    id: 1,
    title: "Outreach & Engagement",
    text: "Craft custom messaging, initiate email/text/call outreach, and nurture leads with CRM-integrated workflows.",
    number: "2",
  },
  {
    id: 2,
    title: "Pipeline Management & NDA",
    text: "Execution Track KPIs, coordinate preliminary deal conversations, and secure NDAs for qualified opportunities.",
    number: "3",
  },
];

interface StepItemProps {
  title: string;
  text: string;
  number: string;
}

const StepItem: React.FC<StepItemProps> = ({ title, text, number }) => (
  <div className="flex flex-col px-4 md:px-12 items-start  gap-1 md:gap-3">
    <div className="flex flex-row items-center gap-2">
      <h3 className="text-lg tracking-tight text-neutral-800 md:text-xl font-medium">
        {number}. {title}
      </h3>
    </div>
    <p className="text-neutral-600 tracking-tight">{text}</p>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-4 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] w-full md:px-[5%] py-12  md:py-20">
    <div className="flex items-start flex-col">
      <div className="flex items-center mb-4 justify-center gap-4">
        <div className="h-px bg-neutral-300 w-[30px]" />
        <span
          style={{ letterSpacing: "2px" }}
          className="uppercase text-gray-600 text-xs"
        >
          What Is CDS?
        </span>
        <div className="h-px bg-neutral-300 w-[30px]" />
      </div>
      <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl md:max-w-[20ch] font-gambetta text-start leading-tight tracking-tighter">
        Hands-On M&A Support From Start to Finish
      </h2>
      <div className="flex flex-col gap-4 mt-4">
        <p className="tracking-tight md:max-w-[84ch] text-md md:text-lg text-start text-neutral-600">
          STOC Advisory&apos;s Corporate Development Support (CDS) offering
          helps private equity-backed and founder-led companies to accelerate
          pipeline velocity through targeted lead generation, data-driven
          outreach, and CRM-integrated pipeline management. We partner alongside
          existing internal teams to build strategic pipelines that align with
          investment criteria, engage with aligned targets, and drive measurable
          deal outcomes.
        </p>
      </div>
    </div>
    <div className="flex flex-col  h-full mt-8 md:min-h-[65vh] md:flex-row md:gap-6 gap-2 lg:gap-8">
      <div className="flex items-start md:w-[40vw] bg-[#FCFCFC] py-10 md:py-6 rounded-xl justify-center flex-col gap-8">
        <h3 className="text-neutral-800 px-4 md:px-12 text-2xl lg:text-3xl  font-gambetta  leading-tight tracking-tighter">
          Our 3-Step Process
        </h3>
        {stepData.map(({ id, title, text, number }) => (
          <StepItem key={id} title={title} text={text} number={number} />
        ))}
        <p className="tracking-tight px-4 md:px-12  md:max-w-[84ch] text-md md:text-lg mt-2 text-center md:text-start text-neutral-600">
          Let&apos;s build your acquisition pipeline. Reach out to schedule a
          discovery session with our CDS team.
        </p>
      </div>
      <div className="flex md:w-[60vw]  relative">
        <Image
          src="/cds-intro.jpg"
          className="object-cover hidden md:flex  rounded-xl"
          alt="About STOC"
          fill
        />
        <div
          className="absolute inset-0 bg-blue-600 opacity-30 mix-blend-multiply rounded-lg"
          aria-hidden="true"
        />
      </div>
    </div>
  </section>
);

export default Intro;
