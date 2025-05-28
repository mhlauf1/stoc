import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#F7F7F7] w-full min-h-screen mb-12 md:mb-16 flex flex-col px-4 md:px-[5%]">
      <div className="flex flex-col py-[15vh] gap-4 items-center flex-1">
        {/* Section marker */}
        <div className="flex items-center mb-4 justify-center md:justify-start gap-4">
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-neutral-600 text-xs"
          >
            Careers
          </span>
          <div className="h-[1px] bg-neutral-300 w-[30px]" />
        </div>

        {/* Main heading */}
        <h2 className="text-neutral-800 text-3xl text-center md:text-4xl lg:text-5xl font-gambetta leading-tight tracking-tighter">
          Join Our Team
        </h2>

        {/* Intro copy */}
        <p className="mt-2 text-md md:text-lg text-center  text-neutral-600 tracking-tight max-w-4xl">
          At STOC Advisory, we help private equity and high-growth companies
          unlock value in transformative ways. Our team consists of highly
          motivated professionals who thrive in dynamic environments and are
          deeply committed to delivering exceptional outcomes for our clients.
          We foster a culture grounded in collaboration, creativity, and
          continuous growth.
        </p>
        <p className="mt-4 text-md md:text-lg text-center  text-neutral-600 tracking-tight max-w-4xl">
          We&apos;re growing fast and we&apos;re always looking for smart,
          curious, and ambitious people to grow with us.{" "}
        </p>
        <div className="pt-8 mt-8 border-t border-neutral-300 w-4xl">
          <h3 className="text-neutral-800 text-xl text-center md:text-2xl font-gambetta leading-tight tracking-tight">
            Current Openings
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
