// components/NodeOverlay.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function NodeOverlay() {
  const pathControls = useAnimation();
  const dotControls = useAnimation();

  // start the dot animation after the path is visible
  useEffect(() => {
    async function sequence() {
      // draw the path
      await pathControls.start({
        pathLength: 1,
        transition: { duration: 0.8 },
      });
      // animate dot along path
      dotControls.start({
        offsetDistance: ["0%", "100%"],
        transition: {
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0.5,
        },
      });
    }
    sequence();
  }, [pathControls, dotControls]);

  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
    >
      {/* Node 1 */}
      <foreignObject x={10} y={20} width={50} height={20}>
        <div className="bg-white text-gray-800 text-xs rounded-md px-2 py-1 shadow">
          Node 1
        </div>
      </foreignObject>

      {/* Node 2 */}
      <foreignObject x={130} y={140} width={50} height={20}>
        <div className="bg-white text-gray-800 text-xs rounded-md px-2 py-1 shadow">
          Node 2
        </div>
      </foreignObject>

      {/* Dashed right-angle path */}
      <motion.path
        d="M 35 30 L 35 150 L 135 150"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={pathControls}
      />

      {/* Moving dot */}
      <motion.circle
        r={4}
        fill="#fff"
        style={{ offsetPath: "path('M 35 30 L 35 150 L 135 150')" }}
        initial={{ offsetDistance: "0%" }}
        animate={dotControls}
      />
    </svg>
  );
}
