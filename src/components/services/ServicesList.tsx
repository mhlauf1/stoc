// src/components/IndustryList.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { servicesPageData } from "@/utils/data";
import ServicesItem from "./ServicesItem";
import Image from "next/image";

export default function IndustryList() {
  return (
    <section className="bg-[#F7F7F7] md:mb-12 py-16 md:py-20 px-4 md:px-[5%]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col flex-1 items-center md:items-start">
          <div className="flex items-center mb-2 justify-center gap-4">
            <div className="h-px bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "2px" }}
              className="uppercase text-neutral-600 text-xs"
            >
              What We Do
            </span>
            <div className="h-px bg-neutral-300 w-[30px]" />
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-start max-w-[20ch] mt-2 font-gambetta tracking-tight leading-snug">
            Transforming Strategic Vision into Tangible Results
          </h3>
          <p className="text-neutral-600 text-center md:text-start tracking-tight max-w-[48ch] md:max-w-[58ch] mt-2 md:mt-6 mb-5 text-md sm:text-lg md:text-xl">
            Our experienced advisors deliver data-driven insights and practical
            support to inform decision-making and enhance performance.
          </p>
          <p className="text-neutral-600 font-gambetta tracking-tight text-start  font-medium md:max-w-[58ch] mt-2 text-md md:text-lg">
            Key Services:
          </p>
          <div className="grid pt-4 w-full grid-cols-1 gap-4">
            {servicesPageData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.1,
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <ServicesItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="md:flex hidden relative flex-1">
          <Image
            src="/services-list.jpeg"
            className="object-cover rounded-lg"
            fill
            alt="Services"
          />
          <div
            className="absolute inset-0 rounded-lg bg-blue-300 opacity-30 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
