"use client";
import Image from "next/image";
import { PrimaryButton } from "../Button";
import Link from "next/link";

export default function IntroServices() {
  return (
    <section className="relative py-12 md:py-16 md:px-[5%] px-4  bg-white">
      <div className="flex flex-col-reverse md:gap-16 md:flex-row md:justify-between">
        <div className="flex flex-1 mt-6 md:mt-0 w-full">
          <div className="relative h-[50vh] flex-1 flex">
            <Image
              src="/home-about.png"
              alt="Right"
              fill
              className="object-cover h-[500px]  object-center  rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 items-center md:items-start">
          <div className="flex items-center mb-2 justify-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "2px" }}
              className="uppercase text-neutral-600 text-xs"
            >
              Stoc Advisory
            </span>
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
          </div>

          <h2 className="text-3xl mt-2 md:mt-0 tracking-tighter lg:max-w-[42ch] md:text-4xl lg:text-5xl font-gambetta text-neutral-900 leading-normal md:leading-relaxed">
            Unlocking Value at Every Stage
          </h2>
          <p className="md:max-w-[58ch] tracking-tight mt-4 text-center md:text-start mb-8 text-md sm:text-lg md:text-xl text-neutral-600 md:mt-2">
            STOC Advisory partners with middle-market businesses and private
            equity sponsors to accelerate growth, mitigate risk, and deliver
            lasting impact.
          </p>
          <Link href="/about" className="w-full md:w-auto">
            <PrimaryButton>Learn More About Us</PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
