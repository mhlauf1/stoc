// src/components/services/cds/TargetSourcing.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const TargetSourcing: React.FC = () => (
  <section className="px-4 bg-[#F7F7F7] w-full md:px-[5%] pb-16 md:pb-24 pt-4 md:pt-8">
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center mb-4 justify-center gap-4">
        <div className="h-px bg-neutral-300 w-[30px]" />
        <span
          style={{ letterSpacing: "2px" }}
          className="uppercase text-gray-600 text-xs"
        >
          Our Approach
        </span>
        <div className="h-px bg-neutral-300 w-[30px]" />
      </div>

      <h2 className="text-neutral-800 text-2xl md:text-3xl lg:text-4xl max-w-[24ch] font-gambetta tracking-tight">
        Our Approach to Target Sourcing
      </h2>

      <p className="tracking-tight max-w-[84ch] text-md md:text-lg mt-6 text-neutral-600">
        STOC maintains a proprietary sourcing infrastructure that supports
        systematic identification, tracking, and prioritization of acquisition
        targets. The following walkthrough illustrates how that process operates
        in practice.
      </p>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="mt-8 md:mt-12 w-full max-w-5xl mx-auto"
    >
      <video
        controls
        playsInline
        preload="metadata"
        poster="/stoc-sourcing-os-poster.jpg"
        className="w-full rounded-xl shadow-sm bg-[#041E40]"
      >
        <source src="/stoc-sourcing-os.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  </section>
);

export default TargetSourcing;
