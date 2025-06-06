// src/components/Intro.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Deliverables from "./Deliverables";
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
  <div className="flex flex-col items-start gap-1 py-4 px-6 md:px-8 md:gap-3">
    <div className="flex flex-row items-center gap-2">
      <h3 className="text-xl tracking-tight text-neutral-800 md:text-2xl font-gambetta">
        {number}. {title}
      </h3>
    </div>
    <p className="text-neutral-600 tracking-tight">{text}</p>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-4 bg-[#F7F7F7]  w-full md:px-[5%] pb-8 md:pb-12 pt-12 md:pt-20">
    <div className="flex items-center md:items-start flex-col">
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
      <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl max-w-[20ch] font-gambetta text-center md:text-start  tracking-tight">
        Hands-On M&A Support From Start to Finish
      </h2>
      <div className="flex flex-col gap-4 mt-6">
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

    <div className="flex flex-col h-full mt-6 md:mt-10 md:flex-row">
      <div className="flex bg-[#F7F7F7] md:px-4 lg:px-8  py-12 items-start md:w-[35vw] rounded-xl flex-col gap-3 md:gap-4">
        <h3 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl font-gambetta leading-tight tracking-tight">
          The Process
        </h3>
        <motion.div
          className="h-[1px] bg-neutral-200 w-full flex flex-col"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
        <div className="bg-[#FCFCFC] mt-4 md:mt-6 py-6 rounded-lg">
          {stepData.map(({ id, title, text, number }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: id * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <StepItem title={title} text={text} number={number} />
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: stepData.length * 0.1,
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="tracking-tight px-6 md:px-8 md:max-w-[84ch] text-md md:text-lg mt-2 md:mt-4 text-start text-neutral-600"
          >
            Let&apos;s build your acquisition pipeline. Reach out to schedule a
            discovery session with our CDS team.
          </motion.p>
        </div>
      </div>

      <div className="flex md:w-[65vw] relative">
        <Deliverables />
      </div>
    </div>
  </section>
);

export default Intro;
