// src/components/Hero.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F7F7F7] w-full min-h-screen mb-12 md:mb-16 flex flex-col px-4 md:px-[5%]">
      <div className="flex flex-col py-[15vh] gap-4 items-center flex-1">
        {/* Section marker */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={0}
          viewport={{ once: true, amount: 0.15 }}
          className="flex items-center mb-4 justify-center md:justify-start gap-4"
        >
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-neutral-600 text-xs"
          >
            Careers
          </span>
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={1}
          viewport={{ once: true, amount: 0.15 }}
          className="text-neutral-800 text-3xl text-center md:text-4xl lg:text-5xl font-gambetta leading-tight tracking-tight"
        >
          Join Our Team
        </motion.h2>

        {/* Intro copy */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={2}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-2 text-md md:text-lg text-center text-neutral-600 tracking-tight max-w-4xl"
        >
          At STOC Advisory, we help private equity and high-growth companies
          unlock value in transformative ways. Our team consists of highly
          motivated professionals who thrive in dynamic environments and are
          deeply committed to delivering exceptional outcomes for our clients.
          We foster a culture grounded in collaboration, creativity, and
          continuous growth.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={3}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-4 text-md md:text-lg text-center text-neutral-600 tracking-tight max-w-4xl"
        >
          We&apos;re growing fast and we&apos;re always looking for smart,
          curious, and ambitious people to grow with us.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={4}
          viewport={{ once: true, amount: 0.15 }}
          className="pt-8 mt-8 border-t border-neutral-300 w-full max-w-4xl"
        >
          <h3 className="text-neutral-800 text-xl text-center md:text-2xl font-gambetta leading-tight tracking-tight">
            Current Openings
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
