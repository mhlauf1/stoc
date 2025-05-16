// components/ArrowPathOverlay.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ArrowPathOverlay() {
  const controls = useAnimation();
  const nodeControls = useAnimation();

  // Sequence: draw arrow → light node1 → light node2
  useEffect(() => {
    async function sequence() {
      // 1. Animate the path drawing
      await controls.start({
        strokeDashoffset: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      // 2. Light first node
      await nodeControls.start((i) =>
        i === 0
          ? {
              r: 8,
              stroke: "#ffeb3b",
              transition: { duration: 0.4 },
            }
          : {}
      );
      // 3. Light second node
      await nodeControls.start((i) =>
        i === 1
          ? {
              r: 8,
              stroke: "#ffeb3b",
              transition: { duration: 0.4 },
            }
          : {}
      );
    }
    sequence();
  }, [controls, nodeControls]);

  // total length of path (calculate in dev tools or approximate)
  const PATH_LENGTH = 300;

  // coordinates are relative to the SVG’s viewBox
  const pathD = "M50,250 C150,50 350,50 450,250";
  const nodes = [
    { cx: 50, cy: 250 },
    { cx: 450, cy: 250 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        viewBox="0 0 500 300"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke="#ffffff"
          strokeWidth={2}
          strokeDasharray={PATH_LENGTH}
          strokeDashoffset={PATH_LENGTH}
          animate={controls}
        />

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            custom={i}
            animate={nodeControls}
            initial={{ r: 5, stroke: "#ffffff", fill: "transparent" }}
            cx={node.cx}
            cy={node.cy}
            strokeWidth={2}
          />
        ))}

        {/* optional arrowhead at end */}
        <motion.polygon
          points="445,245 455,250 445,255"
          fill="#ffffff"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.3 } }}
        />
      </svg>
    </div>
  );
}
