import React from "react";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";
import Link from "next/link";

const Hero: React.FC = () => (
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4  bg-white items-center px-6 md:px-24">
    <div className="flex  flex-col items-start pt-[15vh] md:pt-0 flex-1">
      <div>
        <h1 className="text-[#07273d] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Industry expertise that drives transaction success
        </h1>
        <p className="text-[#07273d] text-lg md:text-xl mt-4 md:max-w-[52ch] leading-relaxed">
          We combine deep sector expertise with a proven transformation
          playbook—helping you navigate complexity, mitigate risk, and seize new
          opportunities.
        </p>
      </div>

      <div className="mt-8 md:mt-16 flex flex-col items-start rounded-md">
        <p className="text-[#07273d]/80  tracking-wide">
          Stay updated by subscribing to our monthly finance newsletter
        </p>
        <input
          type="email"
          placeholder="Your business email"
          className="flex-1 px-3 w-full mt-4 py-2 border border-black/10 rounded-md text-black focus:outline-none"
        />
        <Link className="mt-6" href="/">
          <PrimaryButton>Submit</PrimaryButton>
        </Link>
      </div>
    </div>
    <div className="relative w-full mb-8 md:mb-0 md:w-1/2 h-[40vh] md:h-[65vh]">
      <Image
        src="/service-hero.jpeg"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </div>
  </section>
);

export default Hero;
