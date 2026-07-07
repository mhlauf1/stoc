"use client";
import React from "react";
import { motion } from "framer-motion";
import { BellRing } from "lucide-react";

// Teaser card shown at the end of the Industry Reports grid.
const ComingSoonCard: React.FC<{ index?: number }> = ({ index = 0 }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut", delay: (index % 3) * 0.08 }}
    viewport={{ once: true, amount: 0.1 }}
    className="flex flex-col items-center justify-center text-center gap-3 rounded-2xl border-2 border-dashed border-neutral-300 bg-transparent p-8 min-h-[280px]"
  >
    <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[#18598b]/10 text-[#18598b]">
      <BellRing size={20} />
    </span>
    <h3 className="text-xl font-gambetta tracking-tight text-neutral-700">
      More reports coming soon
    </h3>
    <p className="text-neutral-500 text-sm leading-6 max-w-[36ch]">
      New market landscape reports are in production. Subscribe to the
      newsletter below to be notified when the next one is published.
    </p>
  </motion.article>
);

export default ComingSoonCard;
