import React from "react";

const AboutPage = () => {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-900 overflow-hidden flex items-center">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-4">
              ABOUT US
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
              Where Strategic Transactions Meet Exceptional Advising
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-12 font-light">
              Partner with experienced advisors who guide you through every
              phase of the acquisition lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
                  WHO WE ARE
                </p>
                <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
                  Transaction expertise from accounting to investment banking
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  STOC Advisory is a business advisory firm specializing in
                  transaction advisory services, corporate development, and CFO
                  advisory. We leverage our experience in accounting, finance,
                  and investment banking to become an unparalleled partner to
                  our clients.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Our work lifecycle starts at the pre-LOI phase. We then align
                  with management to prepare a quality of earnings analysis and
                  other items needed to complete diligence. Finally, our global
                  team provides guidance for the post-close integration period.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <p className="text-4xl font-light text-blue-700">400+</p>
                    <p className="text-sm text-gray-600">
                      Quality of Earnings Reports
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-light text-blue-700">30+</p>
                    <p className="text-sm text-gray-600">
                      Professionals across the US
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-light text-blue-700">150+</p>
                    <p className="text-sm text-gray-600">
                      Combined years of expertise
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-4">
                      Our Core Services
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Transaction Advisory
                          </h4>
                          <p className="text-sm text-gray-600">
                            Quality of earnings, due diligence, and transaction
                            support
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Corporate Development
                          </h4>
                          <p className="text-sm text-gray-600">
                            Lead identification, outreach, and pipeline
                            management
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            CFO Advisory
                          </h4>
                          <p className="text-sm text-gray-600">
                            Revenue recognition, month-end close, and balance
                            sheet analysis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
              OUR APPROACH
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
              We understand that exceptional transactions require integrated
              expertise
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Who We Are */}
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <svg
                      className="w-full h-full text-blue-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Who We Are
                  </h3>
                  <p className="text-sm text-gray-600">
                    Experienced advisors with backgrounds in accounting,
                    finance, and investment banking who become an unparalleled
                    partner to clients.
                  </p>
                </div>

                {/* What We Do */}
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <svg
                      className="w-full h-full text-blue-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.27 6.96L12 12.01L20.73 6.96"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 22.08V12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    What We Do
                  </h3>
                  <p className="text-sm text-gray-600">
                    Guide clients through the acquisition lifecycle with
                    transaction advisory, corporate development, and CFO
                    advisory services.
                  </p>
                </div>

                {/* How We Operate */}
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <svg
                      className="w-full h-full text-blue-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 8C14 10.2091 12.2091 12 10 12C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 14C5.58172 14 2 17.5817 2 22H18C18 17.5817 14.4183 14 10 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 2L22 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 6L22 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    How We Operate
                  </h3>
                  <p className="text-sm text-gray-600">
                    Apply a 360-degree approach to diligence, ensuring alignment
                    with clients&#39; core purpose, values, and strategic
                    vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Lifecycle Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
              THE ACQUISITION LIFECYCLE
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
              Comprehensive support from pre-LOI through post-close integration
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      Pre-LOI Phase
                    </h3>
                    <p className="text-gray-700">
                      Target identification, lead outreach, preliminary
                      financial assessment, and Letter of Intent preparation.
                    </p>
                  </div>

                  <div className="md:mx-auto bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>

                  <div className="md:w-1/2 md:pl-12 md:mt-0 mt-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                          <span>Corporate development support</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                          <span>Initial quality of earnings analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-8 md:mb-0">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start justify-end">
                          <span>Facility lease agreements</span>
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full ml-2 mt-1.5"></div>
                        </li>
                        <li className="flex items-start justify-end">
                          <span>Employment agreements</span>
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full ml-2 mt-1.5"></div>
                        </li>
                        <li className="flex items-start justify-end">
                          <span>Complete quality of earnings</span>
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full ml-2 mt-1.5"></div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="md:mx-auto bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center relative z-10 order-2">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-1 md:order-3 mb-8 md:mb-0">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      Due Diligence Phase
                    </h3>
                    <p className="text-gray-700">
                      Management alignment, quality of earnings analysis, and
                      diligence completion including contract reviews.
                    </p>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      Post-Close Integration
                    </h3>
                    <p className="text-gray-700">
                      Revenue recognition, month-end close processes, and
                      opening balance sheet analysis.
                    </p>
                  </div>

                  <div className="md:mx-auto bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center relative z-10">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>

                  <div className="md:w-1/2 md:pl-12 md:mt-0 mt-8">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                          <span>Revenue recognition implementation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                          <span>Integration support</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                          <span>Financial reporting establishment</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
                  WHERE WE WORK
                </p>
                <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight">
                  Global team with strategic locations
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Our team of 30+ professionals is located throughout the
                  country with primary offices in Baltimore, MD and Edina, MN.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                      Primary Offices
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                        <span>Baltimore, MD</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                        <span>Edina, MN</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                      Team Locations
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                        <span>New York</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                        <span>Texas</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                        <span>Florida</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                        <span>Virginia</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Content - Map */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">US Map with office locations</p>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Primary offices and team locations throughout the US
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8 max-w-3xl mx-auto leading-tight">
            Ready to start improving your post-transaction performance?
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Connect with our team to discuss your specific needs and objectives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded hover:bg-blue-100 transition duration-300 font-medium">
              Request a Consultation
            </button>
            <button className="px-8 py-4 border border-white text-white rounded hover:bg-blue-800 transition duration-300 font-medium">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
