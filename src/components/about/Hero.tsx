"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-0 bg-[#041E40] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 mb-2 md:mb-0 flex-col items-start h-full justify-center flex-1">
      <div>
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Link href="/about/team" className="mb-6">
            <button className="bg-white/10  flex items-center gap-2 text-sm border border-white/20 text-neutral-200 px-4 py-1.5 rounded-full hover:border-white/60 hover:text-white transition">
              Trusted Advising.{" "}
              <span className="flex items-center gap-1 font-semibold text-white">
                Meet the Team <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </button>
          </Link>
        </motion.div>
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#d7ebf5] mt-6 text-3xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tight"
        >
          Built on Expertise. <br /> Defined by Trust.
        </motion.h1>
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-[#d7ebf5] text-lg md:text-xl mt-4 md:max-w-[52ch] tracking-tight"
        >
          At STOC Advisory, we turn complexity into clarity—offering hands-on
          support in due diligence, negotiation, and integration to ensure your
          transactions deliver measurable value.
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
        src="/blue-intro-1.jpeg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-right rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </motion.div>
  </section>
);

export default Hero;
