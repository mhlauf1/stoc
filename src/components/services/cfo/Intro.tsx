import React from "react";
import Image from "next/image";
import {
  DocumentChartBarIcon,
  ScaleIcon,
  BanknotesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

const bullets = [
  { id: 0, title: "Accounting & audit readiness", Icon: DocumentChartBarIcon },
  { id: 1, title: "Acquisition disputes", Icon: ScaleIcon },
  {
    id: 2,
    title: "Banking restrictions & payment rail integration",
    Icon: BanknotesIcon,
  },
  { id: 3, title: "Cybersecurity & data privacy", Icon: ShieldCheckIcon },
];

export default function Intro() {
  return (
    <section className="bg-white px-4 md:px-[5%] py-16 md:py-24">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* image column */}
        <div className="relative hidden md:flex w-full h-64 md:h-[50vh]">
          <Image
            src="/cfo-3.jpeg"
            alt="CFO Advisory"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>

        {/* text column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-gambetta tracking-tight leading-[1.3] text-gray-900 max-w-prose">
            We advise our clients through an array of services to elevate
            financial strategy, accelerate sustainable growth, optimize
            financial performance, and maximize value.
          </h2>
        </div>
        <div className="relative md:hidden flex w-full h-64 md:h-[50vh]">
          <Image
            src="/cfo-3.jpeg"
            alt="CFO Advisory"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
