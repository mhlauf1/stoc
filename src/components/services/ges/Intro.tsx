import React from "react";
import {
  CheckCircleIcon,
  BoltIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const Intro: React.FC = () => (
  <section className="px-6 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] w-full md:px-12 lg:px-24 py-12  md:py-20">
    <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
      <div className="flex flex-col items-start flex-1 gap-2 md:gap-4">
        <div className="flex items-center mb-3 justify-center gap-4">
          <div className="h-px bg-neutral-300 w-8" />
          <span className="uppercase text-gray-600 text-xs font-mono tracking-widest">
            The GES Edge
          </span>
          <div className="h-px bg-neutral-300 w-8" />
        </div>
        <h2 className="text-neutral-800 capitalize text-3xl md:text-4xl lg:text-5xl md:max-w-[28ch] font-gambetta text-start leading-tight tracking-tighter">
          When processes are missing, data is scattered, and responsibilities
          aren&apos;t clear, early-stage growth stalls.
        </h2>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div>
          <div className="bg-white  rounded-xl px-6 md:px-8 py-8 md:py-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-gambetta tracking-tighter text-gray-900 mb-6">
              Our approach
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-2 items-start md:items-center">
                <div className="mt-1 md:mt-0">
                  <CheckCircleIcon className="h-6 w-6 text-neutral-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tighter text-neutral-600 font-gambetta">
                  Embed with your management team for hands-on execution.
                </h3>
              </li>
              <li className="flex gap-2 items-start md:items-center">
                <div className="mt-1 md:mt-0">
                  <BoltIcon className="h-6 w-6 text-neutral-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tighter text-neutral-600 font-gambetta">
                  Leverage AI-driven workflows to eliminate manual tasks.
                </h3>
              </li>
              <li className="flex gap-2 items-start md:items-center">
                <div className="mt-1 md:mt-0">
                  <ChartBarIcon className="h-6 w-6 text-neutral-600" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl tracking-tighter text-neutral-600 font-gambetta">
                  Visualize performance with real-time, interactive dashboards.
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
