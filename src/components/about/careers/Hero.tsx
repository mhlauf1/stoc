// src/components/Hero.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { JobPostingDoc } from "@/sanity/lib/types";

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

const EMPLOYMENT_TYPE_LABELS: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  internship: "Internship",
};

const applyHref = (job: JobPostingDoc): string | undefined =>
  job.applyUrl || (job.applyEmail ? `mailto:${job.applyEmail}` : undefined);

const Hero: React.FC<{ jobPostings: JobPostingDoc[] }> = ({ jobPostings }) => {
  return (
    <section className="bg-[#F7F7F7] w-full min-h-screen flex flex-col px-4 md:px-[5%]">
      <div className="flex flex-col py-[15vh] gap-2 items-start flex-1">
        {/* Section marker */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={0}
          viewport={{ once: true, amount: 0.1 }}
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
          viewport={{ once: true, amount: 0.1 }}
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
          viewport={{ once: true, amount: 0.1 }}
          className="mt-2 text-md md:text-lg text-start text-neutral-600 tracking-tight max-w-4xl"
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
          viewport={{ once: true, amount: 0.1 }}
          className="mt-4 text-md md:text-lg text-start text-neutral-600 tracking-tight max-w-4xl"
        >
          We&apos;re growing fast and we&apos;re always looking for smart,
          curious, and ambitious people to grow with us.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          custom={4}
          viewport={{ once: true, amount: 0.1 }}
          className="pt-6 mt-6 border-t border-neutral-300 w-full max-w-4xl"
        >
          <h3 className="text-neutral-800 text-xl text-start md:text-2xl font-gambetta leading-tight tracking-tight">
            Current Openings
          </h3>
        </motion.div>
        {jobPostings.length === 0 ? (
          <div>
            <p className="mt-2 text-md md:text-lg text-start text-neutral-600 tracking-tight max-w-4xl">
              There are no active job openings right now.
            </p>
          </div>
        ) : (
          <div className="mt-4 w-full max-w-4xl flex flex-col gap-4">
            {jobPostings.map((job, idx) => {
              const href = applyHref(job);
              const meta = [
                job.department,
                job.employmentType
                  ? EMPLOYMENT_TYPE_LABELS[job.employmentType] ||
                    job.employmentType
                  : null,
                job.location,
              ].filter(Boolean);

              return (
                <motion.div
                  key={job._id}
                  initial="hidden"
                  whileInView="visible"
                  variants={textVariants}
                  custom={idx}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-xl border border-neutral-200 bg-white p-5 md:p-6"
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="text-neutral-800 text-lg md:text-xl font-gambetta tracking-tight">
                      {job.title}
                    </h4>
                    {meta.length > 0 && (
                      <p className="text-neutral-600 text-sm tracking-tight">
                        {meta.join(" · ")}
                      </p>
                    )}
                  </div>
                  {href && (
                    <a
                      href={href}
                      target={job.applyUrl ? "_blank" : undefined}
                      rel={job.applyUrl ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 bg-[#18598b] hover:bg-[#59809f] text-white font-medium px-6 py-2.5 rounded-full transition-colors w-fit tracking-tight"
                    >
                      Apply
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
