import React from "react";

const ServiceTabs = ({ services, activeService, setActiveService }) => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mb-px">
          {Object.values(services).map((service) => (
            <button
              key={service.id}
              className={`inline-flex items-center py-4 px-6 text-sm font-medium border-b-2 ${
                activeService === service.id
                  ? "text-blue-700 border-blue-700"
                  : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <span
                className={`mr-2 ${
                  activeService === service.id
                    ? "text-blue-700"
                    : "text-gray-400"
                }`}
              >
                {service.icon}
              </span>
              {service.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTabs;
