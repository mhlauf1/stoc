import React from "react";

const Intro: React.FC = () => (
  <section className="px-4 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] w-full  md:px-[5%] py-12  md:py-20">
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
      <div className="flex flex-col items-center md:tems-start flex-1 gap-2 md:gap-4">
        <div className="flex items-center mb-3 justify-center gap-4">
          <div className="h-px bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-gray-600 text-xs"
          >
            The GES Edge
          </span>
          <div className="h-px bg-neutral-300 w-[30px]" />
        </div>
        <h2 className="text-neutral-800 capitalize text-2xl md:text-3xl lg:text-4xl max-w-[28ch] md:max-w-[32ch] font-gambetta text-center md:text-start md:leading-[1.3] tracking-tight">
          When processes are missing, data is scattered, and responsibilities
          aren&apos;t clear, early-stage growth stalls.
        </h2>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div>
          <div className="bg-white  rounded-xl px-6 md:px-8 py-8 md:py-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-gambetta tracking-tight text-gray-900 mb-6">
              Our approach
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-2 items-start md:items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tight text-neutral-600 font-gambetta">
                  1. Embed with your management team for hands-on execution.
                </h3>
              </li>
              <li className="flex gap-2 items-start md:items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tight text-neutral-600 font-gambetta">
                  2. Leverage AI driven workflows to eliminate manual tasks.
                </h3>
              </li>
              <li className="flex gap-2 items-start md:items-center">
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tight text-neutral-600 font-gambetta">
                  3. Visualize performance with real-time, interactive
                  dashboards.
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
