"use client";
import React, { useRef, useState, useEffect } from "react";
import ServiceList from "./ServiceList";
import { servicesData } from "@/utils/data";

const ServicesSection: React.FC = () => {
  // one ref per card
  const cardRefs = useRef<React.RefObject<HTMLDivElement | null>[]>(
    servicesData.map(() => React.createRef<HTMLDivElement>())
  );
  const [progress, setProgress] = useState<number[]>(servicesData.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const threshold = 0.4;

      const raws = cardRefs.current.map((r) => {
        const el = r.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const raw = (vh - rect.top) / vh;
        const adjusted = (raw - threshold) / (1 - threshold);
        return Math.min(Math.max(adjusted, 0), 1);
      });

      const next = raws.map((clamped, i) => {
        if (i === 0) return clamped;
        return raws[i - 1] >= 1 ? clamped : 0;
      });
      setProgress(next);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="pt-20 md:pt-36 pb-12 md:pb-16 px-4 sm:px-12 md:px-20">
      <div className="flex flex-row">
        {/* Left (aside) */}
        <div className="hidden md:flex md:w-1/2">
          <aside className="sticky top-48 mt-24 self-start w-[90%] flex flex-col gap-8">
            <div className="flex mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-gambetta leading-tight tracking-tighter">
                Clarity and Confidence
                <br />
                <span className="italic font-gambetta">
                  Through Every Stage of the Deal
                </span>
              </h2>
            </div>
            {servicesData.map((svc, i) => {
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
        {/* Right (content) */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-8 md:gap-16 px-0">
            <ServiceList cardRefs={cardRefs.current} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
