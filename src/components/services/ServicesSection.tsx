"use client";
import React, { useRef, useState, useEffect } from "react";
import ServiceList from "./ServiceList";
import { servicesData } from "@/utils/data";

const ServicesSection: React.FC = () => {
  // one ref per card
  const cardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    servicesData.map(() => React.createRef<HTMLDivElement>())
  );
  // progress 0→1 for each bar
  const [progress, setProgress] = useState<number[]>(servicesData.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const threshold = 0.4; // 40% down the screen

      // first compute each raw progress independently
      const raws = cardRefs.current.map((r) => {
        const el = r.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();

        // raw = 0 at bottom-of-viewport, 1 at top-of-viewport
        const raw = (vh - rect.top) / vh;

        // remap so that nothing happens until raw hits threshold
        const adjusted = (raw - threshold) / (1 - threshold);
        return Math.min(Math.max(adjusted, 0), 1);
      });

      // now gate each on its predecessor hitting 1
      const next = raws.map((clamped, i) => {
        if (i === 0) return clamped;
        return raws[i - 1] >= 1 ? clamped : 0;
      });

      setProgress(next);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-20 md:pt-36 pb-12 md:pb-28 px-4 sm:px-12 md:px-20">
      {/* Header */}
      <div className="flex mb-16">
        <div className="w-1/3" />
        <div className="w-2/3 pl-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-gambetta leading-tight tracking-tighter">
            Clarity and Confidence
            <br />
            <span className="italic font-gambetta">
              Through Every Stage of the Deal
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-row gap-24">
        <div className="hidden md:flex md:w-1/3">
          <aside className="sticky top-48 mt-24 self-start w-[90%] flex flex-col gap-8">
            {servicesData.map((svc, i) => {
              // Only the one whose line is between 0% and 100% is “active”
              const isActive = progress[i] > 0 && progress[i] < 1;

              return (
                <div key={svc.id}>
                  <span
                    className={`text-xl font-gambetta tracking-tighter font-medium transition-colors duration-150 ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {svc.title}
                  </span>

                  <div className="h-[2px] bg-gray-100 mt-4 overflow-hidden">
                    <div
                      className="h-full bg-gray-400 origin-left transition-all duration-150 ease-out"
                      style={{ width: `${progress[i] * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </aside>
        </div>
        <div className="flex md:w-2/3">
          <div className="flex w-full flex-col gap-8 md:gap-16">
            <ServiceList cardRefs={cardRefs.current} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
