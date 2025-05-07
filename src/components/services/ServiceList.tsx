import React from "react";
import Service from "./Service";
import { servicesData } from "@/utils/data";

interface ServiceListProps {
  // allow the `.current` to be null
  cardRefs: React.RefObject<HTMLDivElement | null>[];
}

const ServiceList: React.FC<ServiceListProps> = ({ cardRefs }) => {
  return (
    <>
      {servicesData.map((svc, i) => (
        <Service
          key={svc.id}
          ref={cardRefs[i]}
          id={svc.id}
          title={svc.title}
          description={svc.description}
          Icon={svc.Icon}
        />
      ))}
    </>
  );
};

export default ServiceList;
