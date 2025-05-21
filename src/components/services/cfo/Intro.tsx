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
    <section className="bg-white px-6 md:px-12 lg:px-32 py-16">
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
          <h2 className="text-3xl md:text-4xl font-gambetta tracking-tight text-gray-900 max-w-prose">
            Navigating a Complex Regulatory & Financial Landscape
          </h2>
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-prose">
            From seed-to-sale, cannabis operators face a unique mix of
            pressures. Key issues include:
          </p>

          <ul className="bg-[#F7F7F7] rounded-xl p-8 space-y-4">
            {bullets.map(({ id, title, Icon }) => (
              <li key={id} className="flex items-center space-x-3">
                <Icon className="h-6 w-6 text-neutral-600 flex-shrink-0" />
                <span className="text-xl font-gambetta tracking-tighter md:text-2xl text-neutral-700">
                  {title}
                </span>
              </li>
            ))}
          </ul>
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
