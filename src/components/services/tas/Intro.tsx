import React from "react";
const Intro: React.FC = () => (
  <section className="px-4 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] w-full  md:px-[5%] py-12  md:py-20">
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
      <div className="flex flex-col items-start md:items-center flex-1 gap-2 md:gap-4">
        <h2 className="text-neutral-800 capitalize text-center text-2xl md:text-3xl lg:text-4xl md:max-w-[28ch] font-gambetta  leading-tight tracking-tight">
          Overview
        </h2>
        <p className="text-neutral-600 text-lg md:text-xl  md:max-w-[78ch] items-start md:text-center tracking-tight">
          STOC Advisory delivers buy-side and sell-side financial due diligence
          services that combine rigorous financial analysis with deep
          operational insight. Our Transaction Advisory team supports private
          equity firms, lenders, and founders through every phase of the deal
          lifecycle - from LOI review to closing and integration. We specialize
          in customized Quality of Earnings (QoE) reports, net working capital
          analysis, cash-to-accrual conversions, and post-transaction support.
        </p>
      </div>
    </div>
  </section>
);

export default Intro;
