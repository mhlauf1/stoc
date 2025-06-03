import React from "react";
import type { ServiceProps } from "@/utils/types";
import Image from "next/image";

const Service = React.forwardRef<HTMLDivElement, ServiceProps>(
  ({ title, description, Icon, image }, ref) => (
    <div
      ref={ref}
      className="relative bg-neutral-100 px-12 py-12 rounded-2xl border border-neutral-200"
    >
      <div className="absolute top-4 right-4">
        <Icon />
      </div>

      <h3 className="text-2xl md:text-3xl font-gambetta tracking-tight mb-4">
        {title}
      </h3>
      <p className="text-neutral-600 leading-8 text-lg">{description}</p>

      <div className="flex gap-4 mt-6">
        <Image
          src={image!}
          alt={title}
          height={400}
          width={600}
          className="h-[400px] w-full rounded-md shadow-md object-cover object-center"
        />
        <div />
      </div>
    </div>
  )
);

Service.displayName = "Service";
export default Service;
