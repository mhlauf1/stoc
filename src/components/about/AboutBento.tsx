"use client";
import React from "react";
import Link from "next/link";
import { PrimaryButton } from "../Button";

const AboutBento = () => {
  return (
    <section className="bg-white px-4 md:px-12 lg:px-32 py-24">
      <div className="flex flex-col w-full gap-4">
        {/* First row: Company & Team */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Company Teaser */}
          <div className="flex-1 bg-[#F7F7F7] px-12 py-16 rounded-md flex flex-col justify-between">
            <div>
              <h2 className="text-3xl tracking-tighter max-w-[24ch] md:text-4xl font-gambetta leading-tight">
                Company
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 mt-4 mb-10">
                Learn about our mission, values, and the story behind STOC
                Advisory.
              </p>
            </div>
            <Link href="/about/company">
              <PrimaryButton>Learn More</PrimaryButton>
            </Link>
          </div>

          {/* Team Teaser */}
          <div className="flex-1 bg-[#F7F7F7] px-12 py-16 rounded-md flex flex-col justify-between">
            <div>
              <h2 className="text-3xl tracking-tighter max-w-[24ch] md:text-4xl font-gambetta leading-tight">
                Team
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 mt-4 mb-10">
                Meet the experts driving our success and learn what makes our
                team unique.
              </p>
            </div>
            <Link href="/about/team">
              <PrimaryButton>Meet the Team</PrimaryButton>
            </Link>
          </div>
        </div>

        {/* Second row: Locations, Case Studies & Careers */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Locations Teaser */}
          <div className="flex-1 bg-[#F7F7F7] px-12 py-16 rounded-md flex flex-col justify-between">
            <div>
              <h2 className="text-3xl tracking-tighter max-w-[24ch] md:text-4xl font-gambetta leading-tight">
                Locations
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 mt-4 mb-10">
                Explore our global presence and find an office near you.
              </p>
            </div>
            <Link href="/about/locations">
              <PrimaryButton>View Locations</PrimaryButton>
            </Link>
          </div>

          {/* Case Studies Teaser */}
          <div className="flex-1 bg-[#F7F7F7] px-12 py-16 rounded-md flex flex-col justify-between">
            <div>
              <h2 className="text-3xl tracking-tighter max-w-[24ch] md:text-4xl font-gambetta leading-tight">
                Case Studies
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 mt-4 mb-10">
                Discover how we&apos;ve helped clients achieve success through
                real examples.
              </p>
            </div>
            <Link href="/about/case-studies">
              <PrimaryButton>See Case Studies</PrimaryButton>
            </Link>
          </div>

          {/* Careers Teaser */}
          <div className="flex-1 bg-[#F7F7F7] px-12 py-16 rounded-md flex flex-col justify-between">
            <div>
              <h2 className="text-3xl tracking-tighter max-w-[24ch] md:text-4xl font-gambetta leading-tight">
                Careers
              </h2>
              <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 mt-4 mb-10">
                Join our team and help shape the future of strategic advisory.
              </p>
            </div>
            <Link href="/about/careers">
              <PrimaryButton>Explore Careers</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBento;
