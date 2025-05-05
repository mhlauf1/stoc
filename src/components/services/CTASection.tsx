import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-light mb-8 max-w-3xl mx-auto leading-tight">
          Ready to improve your post-transaction performance?
        </h2>
        <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
          Connect with our team to discuss how we can support your strategic
          objectives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-900 rounded hover:bg-blue-100 transition duration-300 font-medium">
            Schedule Consultation
          </button>
          <button className="px-8 py-4 border border-white text-white rounded hover:bg-blue-800 transition duration-300 font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
