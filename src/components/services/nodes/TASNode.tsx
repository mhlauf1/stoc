// components/services/nodes/TASNode.tsx
import React from "react";

const TASNode = () => {
  return (
    <>
      {/* SVG overlay drawing the dashed right‐angle connector */}
      <svg
        className="absolute z-10 inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M15,15  V87  H78"
          fill="none"
          stroke="white"
          strokeWidth=".5"
          strokeDasharray="2 2"
          strokeLinecap="round"
        />
      </svg>

      {/* Node 1 bubble */}
      <div className="absolute top-[10%] left-[10%] z-10">
        <div className="bg-white/90 px-4 py-2 rounded-full shadow">
          <p className="text-neutral-600 text-sm">First node</p>
        </div>
      </div>

      {/* Node 2 bubble */}
      <div className="absolute bottom-[10%] right-[10%] z-10">
        <div className="bg-white/90 px-4 py-2 rounded-full shadow">
          <p className="text-neutral-600 text-sm">Second node</p>
        </div>
      </div>
    </>
  );
};

export default TASNode;
