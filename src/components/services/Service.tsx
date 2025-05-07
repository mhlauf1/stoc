import React from "react";
import type { ServiceProps } from "@/utils/types";

const Service = React.forwardRef<HTMLDivElement, ServiceProps>(
  ({ title, description, Icon }, ref) => (
    <div
      ref={ref}
      className="relative bg-neutral-100 px-12 py-16 rounded-2xl border border-neutral-200"
    >
      <div className="absolute top-4 right-4">
        <Icon />
      </div>

      <h3 className="text-2xl md:text-3xl font-gambetta tracking-tighter mb-6">
        {title}
      </h3>

      <div className="flex gap-4 mb-6">
        <div className="h-[400px] w-full rounded-md shadow-md bg-white" />
      </div>

      <p className="text-neutral-700">{description}</p>
    </div>
  )
);

Service.displayName = "Service";
export default Service;
