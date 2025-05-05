// WhyChooseUsSection.js
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
            WHY CHOOSE STOC
          </p>
          <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
            Expertise that drives transaction success
          </h2>
          <p className="text-lg text-gray-700">
            Our specialized approach combines industry knowledge with
            data-driven analysis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Proven Expertise
              </h3>
              <p className="text-gray-700">
                Our team of 30+ professionals brings decades of experience from
                accounting, finance, and investment banking roles.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                  <span className="text-gray-600 text-sm">
                    400+ Quality of Earnings reports
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                  <span className="text-gray-600 text-sm">
                    Specialized industry knowledge
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Data-Driven Approach
              </h3>
              <p className="text-gray-700">
                Our Cloud-Based Power BI Platform enables comprehensive market
                analysis and targeted acquisition strategies.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                  <span className="text-gray-600 text-sm">
                    Custom database creation by sector
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                  <span className="text-gray-600 text-sm">
                    Advanced mapping and analytics
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-700">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Comprehensive Support
              </h3>
              <p className="text-gray-700">
                We support clients through every phase of the acquisition
                lifecycle with integrated services and tailored solutions.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                  <span className="text-gray-600 text-sm">
                    End-to-end transaction support
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                  <span className="text-gray-600 text-sm">
                    Post-close integration expertise
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
