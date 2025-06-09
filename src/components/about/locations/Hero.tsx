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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
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

const locations = [
  {
    city: "Baltimore, MD",
    address: "600 Baltimore Ave. Suite 205 Towson, MD 21204",
    phone: "(410) 812-6927",
  },
  {
    city: "Minneapolis, MN",
    address: "7400 Metro Blvd. Suite 450 Edina, MN 55439",
    phone: "(218) 244-8082",
  },
  {
    city: "Nashville, TN",
    address: "6200 Tennessee 100 Suite 302, Nashville, TN 37205",
  },
  {
    city: "Dallas",
    address: "Coming Soon",
  },
];

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F7F7F7] w-full min-h-screen flex flex-col px-4 md:px-[5%]">
      <div className="flex flex-col md:flex-row pt-[15vh] pb-[5vh] md:py-[15vh] gap-8 flex-1">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col">
          {/* Section marker */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={0}
            viewport={{ once: true, amount: 0.1 }}
            className="flex items-center mb-4 justify-start gap-4"
          >
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "2px" }}
              className="uppercase text-neutral-600 text-xs"
            >
              Find Us
            </span>
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={1}
            viewport={{ once: true, amount: 0.1 }}
            className="text-neutral-800 text-3xl text-start md:text-4xl font-gambetta leading-tight tracking-tight"
          >
            Our Locations
          </motion.h2>

          {/* Intro copy */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={2}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-4 md:text-lg text-start text-neutral-600 tracking-tight md:max-w-[90%]"
          >
            STOC Advisory maintains a strong presence in both Baltimore and
            Minneapolis to serve our East Coast and Midwest clients efficiently.
            Each office houses a dedicated team of financial experts ready to
            partner with you on your next big move.
          </motion.p>

          <motion.span
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            custom={3}
            viewport={{ once: true, amount: 0.1 }}
            className="mt-4 md:mt-8 text-neutral-900 text-lg md:text-xl tracking-tight font-gambetta"
          >
            We are located at:
          </motion.span>
          <div className="h-[1px] w-full bg-neutral-200  mt-4"></div>
          {/* Info grid */}
          <div className="mt-4  grid grid-cols-1 gap-7">
            {locations.map(({ city, address, phone }, idx) => (
              <motion.div
                key={city}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                custom={idx}
                viewport={{ once: true, amount: 0.1 }}
                className=""
              >
                <h4 className="text-neutral-800 text-lg md:text-xl tracking-tight font-gambetta">
                  {city}
                </h4>
                <p className=" text-neutral-600 ">{address}</p>
                {phone && (
                  <p className=" text-neutral-600">
                    Phone:{" "}
                    <a href={`tel:${phone}`} className="hover:text-black">
                      {phone}
                    </a>
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          viewport={{ once: true, amount: 0.05 }}
          className="flex-1 flex items-center justify-center rounded-md bg-[#041E40] p-4"
        >
          <div className="relative w-full h-64 sm:h-80 md:w-[85%] md:h-[75%]">
            <Image
              src="/full-map.png"
              fill
              alt="STOC map"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
