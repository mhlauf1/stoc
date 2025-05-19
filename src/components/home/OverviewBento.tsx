"use client";
import React, { useState, FormEvent } from "react";
import { PrimaryButton } from "../Button";
import Link from "next/link";

const OverviewBento = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate with your newsletter provider
    console.log("Subscribe with:", email);
    setEmail(email);
  };
  return (
    <section className="bg-white  px-4 md:px-12 lg:px-28 py-12 md:py-24">
      <div className="flex flex-1 w-full flex-col gap-4">
        <div className="flex md:flex-row flex-col gap-4">
          <div className="flex flex-col flex-1 bg-[#F7F7F7] px-6 md:px-12 py-8 md:py-12 rounded-md justify-center items-start">
            <div>
              <h2 className="text-3xl  tracking-tighter md:max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl text-start leading-tight">
                Our Core Services
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 text-start mt-4 mb-8 md:mb-10">
                Explore our specialized services designed to guide your business
                through complex transactions.
              </p>
            </div>

            <Link href="/services">
              <PrimaryButton>Explore Services</PrimaryButton>
            </Link>
          </div>
          <div className="flex flex-col justify-center flex-1 bg-[#F7F7F7] px-6 md:px-12 py-8 md:py-8 rounded-md items-start">
            <div>
              <h2 className="text-3xl  tracking-tighter max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl text-start leading-tight">
                Industries We Serve
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 text-start mt-4 mb-10">
                Driving sector‑specific growth and resilience through expert
                advisory.
              </p>
            </div>

            <Link href="/industries">
              <PrimaryButton>Explore Industries</PrimaryButton>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-[#232323] rounded-2xl px-4 sm:px-12 md:px-20 py-12 md:py-24  items-center text-center gap-8">
          {/* Tagline */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-neutral-600 w-16" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-200 text-xs font-mono"
            >
              Grow With STOC
            </span>
            <div className="h-px bg-neutral-600 w-16" />
          </div>

          {/* Headline */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-gambetta tracking-tighter max-w-[16ch] leading-tight">
            Stay Ahead with <br />
            <span className="italic font-gambetta">STOC Insights</span>
          </h2>

          {/* Subtext */}
          <p className="text-neutral-200 text-md md:text-lg">
            Monthly strategies, market intelligence, and deal best
            practices—delivered straight to your inbox.{" "}
          </p>

          {/* Email form */}
          <form className="w-full flex flex-col md:flex-row gap-4 mt-4 justify-center">
            <div className="inline-flex w-full bg-white max-w-lg rounded-full overflow-hidden border-2 p-1 border-white">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-6 py-3 focus:outline-none"
              />
              <Link className="md:block hidden" href="/contact">
                <PrimaryButton>Subscribe</PrimaryButton>
              </Link>
            </div>
            <Link className="block md:hidden" href="/contact">
              <PrimaryButton onClick={handleSubmit}>Subscribe</PrimaryButton>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OverviewBento;
