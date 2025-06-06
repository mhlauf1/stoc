// src/components/Intro.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const Intro: React.FC = () => {
  return (
    <section className="px-4 mb-12 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] lg:px-[5%] py-12 md:py-16">
      <div className="flex justify-between items-start gap-16 flex-col md:flex-row">
        <div className="flex flex-1 items-start py-8 md:py-16 rounded-2xl flex-col">
          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-start max-w-[20ch] md:max-w-none font-gambetta leading-normal">
            Industry Challenges
          </h2>
          <p className="mb-6 tracking-tight mt-2 text-start md:max-w-[84ch] text-lg md:text-xl text-neutral-600">
            The U.S. healthcare system is under pressure from complex and
            changing regulations, an aging population demanding ever-costlier
            therapies, cyber-security threats and shifting payor models. At the
            same time, telemedicine and digital-health innovations upend
            traditional care delivery. Organizations that can&apos;t
            adapt—whether hospitals, clinics, senior-care facilities or health
            plans—risk falling behind.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="h-[1px] bg-neutral-300 mb-4"
          />

          <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight text-start mt-6 max-w-[20ch] md:max-w-none font-gambetta leading-normal">
            Our Partnership Approach
          </h2>
          <p className="tracking-tight mt-2 text-start md:max-w-[84ch] text-lg md:text-xl text-neutral-600">
            We work hand-in-hand with stakeholders across the healthcare
            ecosystem—hospitals and health systems, delivery providers,
            senior-care operators, medical suppliers and payors—to turn
            disruption into opportunity. By combining deep sector expertise with
            rigorous financial and operational analysis, we design and implement
            solutions that optimize both clinical and non-clinical performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
