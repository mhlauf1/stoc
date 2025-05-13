import React from "react";
import Image from "next/image";
import { PrimaryButton } from "../Button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="bg-[#F7F7F7]  px-4 md:px-12 lg:px-32 py-24 md:py-32">
      <div className="flex flex-col items-center md:flex-row gap-12">
        <div className="flex flex-col gap-8 flex-1 items-center md:items-start">
          <div className="flex items-center md:mb-4 justify-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-xs font-mono"
            >
              Stoc Advisory
            </span>
            <div className="h-[1px] bg-neutral-300 w-[60px]" />
          </div>
          <h2 className="text-3xl  tracking-tighter max-w-[24ch] md:text-4xl font-gambetta lg:text-5xl text-center md:text-start leading-tight">
            Unlocking Value
            <br />
            <span className="font-gambetta tracking-tight italic">
              at Every Stage
            </span>
          </h2>
          <p className="leading-7 md:leading-8 text-md md:text-lg text-neutral-600 text-center md:text-start md:mt-4">
            STOC Advisory partners with middle-market businesses and private
            equity sponsors to accelerate growth, mitigate risk, and deliver
            lasting impact.
          </p>
          <Link href="/about" className="w-full md:w-auto">
            <PrimaryButton>Learn More About Us</PrimaryButton>
          </Link>
        </div>
        <div className="flex justify-end flex-1">
          <Image
            src="/drew-mike.png"
            className="h-[620px] object-cover rounded-xl"
            alt="Meet the STOC Team"
            height={620}
            width={660}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
