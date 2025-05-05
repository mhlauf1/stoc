import React from "react";

const ServiceContent = ({ activeServiceData }) => {
  return (
    <div>
      <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
        {activeServiceData.title}
      </h2>
      <p className="text-lg text-gray-700 mb-8">{activeServiceData.longDesc}</p>

      <div className="mb-8">
        <h3 className="text-xl font-medium text-gray-900 mb-6">
          Key Offerings
        </h3>
        <div className="grid gap-6">
          {activeServiceData.keyServices.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">
                  {service.title}
                </h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-medium text-gray-900 mb-3">Our Approach</h3>
        <p className="text-gray-700">{activeServiceData.approach}</p>
      </div>
    </div>
  );
};

export default ServiceContent;
