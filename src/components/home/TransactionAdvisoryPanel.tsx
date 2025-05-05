"use client";
import React from "react";

const radii = [20, 35, 50, 65, 80, 95];

export default function TransactionAdvisoryPanel() {
  return (
    <div className="relative w-full h-[70vh] bg-neutral-900 overflow-hidden">
      {/* dot-grid background */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="dotGrid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.5" fill="#374151" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      {/* animated circles + center node */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <g fill="none" stroke="#fff" strokeWidth="1">
          {radii.map((r, i) => (
            <circle
              key={i}
              className={`circle circle-${i}`}
              cx="40"
              cy="100"
              r={r}
            />
          ))}
        </g>
        <circle cx="40" cy="100" r="6" fill="#fff" />
      </svg>

      {/* overlay copy */}
      <div className="absolute bottom-8 left-8 text-white max-w-xs">
        <h3 className="text-2xl font-semibold">
          Transaction Advisory Services
        </h3>
        <p className="mt-2 text-sm leading-relaxed">
          From Quality of Earnings (QoE) to working-capital analysis, we uncover
          insights that drive informed decisions and mitigate risk across
          transactions.
        </p>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        .circle {
          transform-origin: 40px 100px;
          animation: expandFade 4s ease-in-out infinite;
        }
        /* stagger by half-second */
        ${radii
          .map(
            (_, i) => `
          .circle-${i} { animation-delay: ${i * 0.5}s; }
        `
          )
          .join("\n")}
        @keyframes expandFade {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
