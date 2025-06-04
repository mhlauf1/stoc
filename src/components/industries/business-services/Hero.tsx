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
      ease: "easeIn",
      delay: 0.5,
    },
  },
};

const Hero: React.FC = () => (
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-12  bg-[#F7F7F7] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 mb-2 md:mb-0 flex-col items-start md:pt-0 flex-1">
      <div>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#041E40] text-3xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[21ch] leading-tight tracking-tight"
        >
          Empowering Business Services to Drive Profitable Growth
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[52ch] tight-tracking"
        >
          In a rapidly evolving services landscape, STOC Advisory delivers deep
          financial, operational and M&A expertise so you can outpace
          competitors, optimize performance and unlock lasting value.
        </motion.p>
      </div>
    </div>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      className="relative w-full mb-12 md:mb-0 md:w-[40vw] h-[45vh] md:h-[65vh]"
    >
      <Image
        src="/building-bg.jpg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />{" "}
    </motion.div>
  </section>
);

export default Hero;
