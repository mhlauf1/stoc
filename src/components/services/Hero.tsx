// src/components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

const Hero: React.FC = () => (
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-0 bg-[#041E40] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 flex-col mb-2 md:mb-0 items-start h-full justify-center flex-1">
      <div>
        {/* Heading with subtle left animation */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#d7ebf5] text-3xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[22ch] leading-tight tracking-tight"
        >
          Empowering Portfolio Companies for Scalable Growth
        </motion.h1>

        {/* Paragraph with subtle left animation */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#d7ebf5] text-lg tracking-tight md:text-xl mt-4 md:max-w-[52ch]"
        >
          Leveraging hands-on enablement, AI-driven workflows, and real-time KPI
          tracking to accelerate post-acquisition performance.
        </motion.p>
      </div>
    </div>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      className="relative w-full mb-12 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]"
    >
      <Image
        src="/blue-home-hero.jpeg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-right rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div
        className="absolute inset-0 rounded-lg bg-blue-300 opacity-30 mix-blend-multiply"
        aria-hidden="true"
      />
    </motion.div>
  </section>
);

export default Hero;
