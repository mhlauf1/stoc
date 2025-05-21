"use client";
import Image from "next/image";
import { PrimaryButton } from "../Button";
import Link from "next/link";

export default function IntroServices() {
  return (
    <section className="relative py-16 md:pr-20 sm:px-8 px-4 md:px-0 md:py-16 bg-white">
      <div className="flex flex-col-reverse md:gap-16 md:flex-row md:justify-between">
        {" "}
        <div className="relative w-full h-[50vh] flex flex-1">
          <Image
            src="/tas-hero.jpg"
            alt="Right"
            fill
            className="object-cover h-[500px] w-full  object-center rounded-r-lg"
          />
        </div>
        <div className="flex flex-col justify-center flex-1 items-center md:items-start">
          <div className="flex items-center mb-2 justify-center gap-4">
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "3px" }}
              className="uppercase text-gray-600 text-sm font-mono"
            >
              Stoc Advisory
            </span>
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
          </div>

          <h2 className="text-2xl  sm:text-3xl tracking-tighter lg:max-w-[42ch] md:text-4xl lg:text-5xl font-gambetta text-neutral-900 leading-normal md:leading-relaxed">
            Unlocking Value at Every Stage
          </h2>
          <p className="leading-7 md:max-w-[58ch] md:leading-8 mt-4 text-center md:text-start mb-8 text-lg md:text-xl text-neutral-600 md:mt-2">
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
