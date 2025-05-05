import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-96 bg-gray-900 overflow-hidden flex items-center">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-blue-300 mb-4">
            SERVICES
          </p>
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
            We guide businesses through complex transactions
          </h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-12 font-light">
            From pre-LOI planning to post-close integration, our specialized
            teams deliver exceptional results at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
