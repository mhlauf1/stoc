import React from "react";
const Intro: React.FC = () => (
  <section className="px-4 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] w-full  md:px-[5%] py-12  md:py-20">
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
      <div className="flex flex-col items-start md:items-center flex-1 gap-2 md:gap-4">
        <h2 className="text-neutral-800 capitalize text-center text-2xl md:text-3xl lg:text-4xl md:max-w-[28ch] font-gambetta  leading-tight tracking-tight">
          Our Retail Practice
        </h2>
        <p className="text-neutral-600 md:text-lg  md:max-w-[64ch] text-start md:text-center tracking-tight">
          With deep sector expertise and a track record across department
          stores, specialty retailers, convenience chains, food & beverage
          outlets, hypermarkets, warehouse clubs, and pure-play e-tailers, we
          help clients:
        </p>
      </div>
    </div>
  </section>
);

export default Intro;
