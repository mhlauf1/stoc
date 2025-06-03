"use client";
import React from "react";
import Image from "next/image";
import { WhiteButton } from "../Button";
import NewsLetterBadge from "../NewsletterBadge";
import Link from "next/link";
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

export default function Hero() {
  return (
    <section className="relative h-[98vh] flex">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          className="-z-1 object-cover"
          fill
          src="/building-1.jpg"
          alt="STOC hero"
          quality={100}
          priority
        />
        <div className="bg-black/20 absolute top-0 left-0 right-0 bottom-0"></div>
      </div>

      <div className="flex z-10 flex-col gap-4 pt-[30vh] pb-16 w-full px-4 md:px-[5%] items-start justify-between">
        {/* Newsletter Badge (stagger index: 0) */}
        <div className="flex flex-col items-start">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <NewsLetterBadge />
          </motion.div>

          {/* Heading block */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-4xl sm:text-5xl text-start tracking-tight md:max-w-[23ch] md:text-6xl mt-4 font-gambetta lg:text-7xl leading-tight text-white"
          >
            Where Strategic Transactions{" "}
            <span className="font-gambetta italic">
              Meet Exceptional Advising
            </span>
          </motion.h1>
        </div>
        <div className="flex flex-col items-start">
          {/* Subheading paragraph (stagger index: 2) */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg text-start tracking-tight md:text-xl w-full md:max-w-[40ch] mb-4 text-white"
          >
            Guiding you through every stage of the acquisition lifecycle with
            precision, insight, and proven expertise.
          </motion.p>

          {/* Button container (stagger index: 3) */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col md:flex-row md:justify-center items-center md:w-auto w-full gap-4 mb-6 md:gap-6"
          >
            <Link
              className="md:w-auto hover:cursor-pointer  w-full"
              href="/services"
            >
              <WhiteButton>Explore Services</WhiteButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
