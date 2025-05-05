"use client";
import React, { useState } from "react";

const IndustriesPage = () => {
  // State to track which industry section is active
  const [activeIndustry, setActiveIndustry] = useState("healthcare");

  // Industry data based directly on Stoc's website
  const industries = [
    {
      id: "healthcare",
      title: "Healthcare",
      icon: "🏥",
      description:
        "STOC Advisory is a business advisory firm specializing in transaction advisory services, corporate development, and CFO advisory. We leverage our experience in accounting, finance, and investment banking to become an unparalleled partner to our clients to support them through the acquisition lifecycle.",
      insights: [
        "Revenue Recognition",
        "Volume-Trend of Transaction Billings Data",
        "Provider Employment Agreements",
        "Real Estate (Facility) Lease Agreement",
        "Forecasting and Post-Close Performance",
        "Net Working Capital",
      ],
    },
    {
      id: "business",
      title: "Business & Professional Services",
      icon: "💼",
      description:
        "Consolidators face several challenges, particularly as they attempt to scale, integrate, and maintain operational efficiency across acquired entities. STOC's robust financial due diligence process harmonizes expertise and acumen attained in advisory roles for reputable PE firms in the middle-market.",
      insights: [
        "Revenue and Profitability Trends (KPIs) in Point-of-Sale System Data",
        "Revenue Recognition and Billing Practices",
        "Agreement and Contract Analysis",
        "Forecasting and Post-Close Performance",
        "Net Working Capital",
      ],
    },
    {
      id: "cannabis",
      title: "Cannabis",
      icon: "🌿",
      description:
        "STOC provides specialized advisory services to cannabis businesses navigating complex transactions and regulatory environments.",
      insights: [
        "Regulatory Compliance Review",
        "Cannabis-Specific Financial Diligence",
        "Working Capital Analysis",
        "State-Specific Operations Assessment",
        "Financial Reporting Requirements",
      ],
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Distribution",
      icon: "🏭",
      description:
        "STOC delivers comprehensive transaction advisory services to manufacturing and distribution companies seeking strategic growth.",
      insights: [
        "Supply Chain Analysis",
        "Inventory Management Assessment",
        "Operational Efficiency Review",
        "Distribution Network Evaluation",
        "Working Capital Requirements",
      ],
    },
    {
      id: "retail",
      title: "Retail",
      icon: "🛍️",
      description:
        "STOC provides transaction advisory services to retail businesses navigating acquisition opportunities and operational challenges.",
      insights: [
        "Customer Metrics Analysis",
        "Retail Location Assessment",
        "Inventory Turnover Analysis",
        "Point-of-Sale System Review",
        "E-commerce Integration Evaluation",
      ],
    },
    {
      id: "travel",
      title: "Travel & Entertainment",
      icon: "✈️",
      description:
        "STOC offers specialized transaction advisory services to travel and entertainment businesses seeking strategic growth and optimization.",
      insights: [
        "Seasonal Revenue Analysis",
        "Customer Experience Metrics",
        "Booking Platform Assessment",
        "Market Penetration Review",
        "Operational Efficiency Analysis",
      ],
    },
  ];

  // Filter for the active industry
  const activeIndustryData = industries.find(
    (ind) => ind.id === activeIndustry
  );

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
              INDUSTRIES
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-8">
              Industry expertise that drives transaction success
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-12 font-light">
              We leverage our experience in accounting, finance, and investment
              banking to support clients through the acquisition lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Selector */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                className={`p-6 rounded-lg text-center transition duration-300 ${
                  activeIndustry === industry.id
                    ? "bg-blue-700 text-white shadow-md"
                    : "bg-white text-gray-700 hover:shadow-sm"
                }`}
                onClick={() => setActiveIndustry(industry.id)}
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="text-sm font-medium">{industry.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Industry Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left Content */}
              <div>
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
                  {activeIndustryData!.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  {activeIndustryData!.description}
                </p>

                <div className="mb-10">
                  <h3 className="text-xl font-medium mb-4 text-gray-900">
                    Key Insights
                  </h3>
                  <div className="space-y-4">
                    {activeIndustryData!.insights.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">
                    Global Team
                  </p>
                  <p className="text-4xl font-light text-blue-700 mt-1">30+</p>
                  <p className="text-gray-700">
                    Professionals throughout the country
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div>
                {activeIndustry === "healthcare" && (
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="p-8">
                      <p className="text-sm uppercase tracking-widest text-blue-700 mb-2">
                        HEALTHCARE SERVICES
                      </p>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">
                        Our Process
                      </h3>

                      <div className="space-y-6 mb-6">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Revenue Recognition
                            </h4>
                            <p className="text-sm text-gray-600">
                              Develop an understanding of historical revenue
                              recognition policies to assess the quality of
                              revenue (QoR) upon converting from cash- to
                              accrual-basis accounting (GAAP).
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Volume-Trend Analysis
                            </h4>
                            <p className="text-sm text-gray-600">
                              Analyze billings data within legacy systems to
                              evaluate volume-trend metrics that will drive
                              growth across new patients and case conversion.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Provider Agreements
                            </h4>
                            <p className="text-sm text-gray-600">
                              Evaluate the accuracy of Provider mix based on
                              historical compensation to assist with the
                              development of Provider employment agreements.
                            </p>
                          </div>
                        </div>
                      </div>

                      <button className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                )}

                {activeIndustry === "business" && (
                  <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="p-8">
                      <p className="text-sm uppercase tracking-widest text-blue-700 mb-2">
                        BUSINESS & PROFESSIONAL SERVICES
                      </p>
                      <h3 className="text-xl font-medium text-gray-900 mb-3">
                        Our Focus
                      </h3>

                      <p className="text-gray-700 mb-6">
                        Our tailored approach aids consolidators to synthesize
                        informed business decisions and mitigate risk to
                        maximize the return on their investments.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-900 mb-1">
                            Revenue Analysis
                          </h4>
                          <p className="text-sm text-gray-600">
                            POS system data analysis to identify trends and
                            growth opportunities
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-900 mb-1">
                            Contract Review
                          </h4>
                          <p className="text-sm text-gray-600">
                            Comprehensive analysis of customer contracts and
                            SLAs
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-900 mb-1">
                            Working Capital
                          </h4>
                          <p className="text-sm text-gray-600">
                            Analysis of capital requirements for sustainable
                            growth
                          </p>
                        </div>

                        <div className="p-4 bg-white rounded-lg shadow-sm">
                          <h4 className="font-medium text-gray-900 mb-1">
                            Post-Close Support
                          </h4>
                          <p className="text-sm text-gray-600">
                            Guidance for integration and synergy realization
                          </p>
                        </div>
                      </div>

                      <button className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300 text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                )}

                {activeIndustry !== "healthcare" &&
                  activeIndustry !== "business" && (
                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm h-full flex items-center justify-center">
                      <div className="p-8 text-center">
                        <div className="text-5xl mb-4">
                          {activeIndustryData!.icon}
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-3">
                          {activeIndustryData!.title}
                        </h3>
                        <p className="text-gray-700 mb-6">
                          Specialized transaction advisory services tailored to
                          the unique needs of this industry.
                        </p>
                        <button className="px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300 text-sm">
                          Learn More
                        </button>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Development Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
              CORPORATE DEVELOPMENT SUPPORT
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
              Phased Approach to Bolster Continuous Pipeline
            </h2>
            <p className="text-lg text-gray-700">
              The Corporate Development function requires a significant
              investment of time to help attract and identify potential
              acquisition targets.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Phase 1 */}
                <div className="p-6 border-r border-gray-200 last:border-r-0">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Lead Identification
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Define broad investment criteria of platforms / add-ons,
                        de novo market research or recruiting needs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Proprietary screening and data scraping tools to gather
                        privately-held data
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Review strategic, financial, operational, competitive,
                        and risk management considerations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Review company-directed market research to customize
                        outreach materials
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Phase 2 */}
                <div className="p-6 border-r border-gray-200 last:border-r-0">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Lead Outreach & CRM
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Initiate outreach campaign, phone calls, and other
                        targeted content to engage targets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Maintain an active deal pipeline to ensure consistent
                        flow of acquisition targets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Monitor and track acceptance rates, conversion rates,
                        and success rates within CRM system
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Phase 3 */}
                <div className="p-6 border-r border-gray-200 last:border-r-0">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    Nurture Lead to Execute NDA
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Assist in preliminary negotiation stages, including
                        discussions of potential deal structure
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Request additional information and secure non-disclosure
                        agreements once mutual interest is established
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2 mt-1.5"></div>
                      <span>
                        Introduce Target and Business Development / Management
                        team(s)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Analytics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
                  DATA ANALYTICS
                </p>
                <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
                  Cloud-Based Power BI Platform by Sector
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  We create a custom database for each client, including all
                  targets within the corresponding sector. We then analyze
                  demographics and refine specific market focus using mapping
                  tools from ArcGIS and Esri.
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Custom Database Creation
                      </h3>
                      <p className="text-sm text-gray-600">
                        Develop sector-specific databases of potential
                        acquisition targets
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Demographic Analysis
                      </h3>
                      <p className="text-sm text-gray-600">
                        Analyze population, income, and other demographic
                        factors
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-blue-700">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        Market Focus Refinement
                      </h3>
                      <p className="text-sm text-gray-600">
                        Use mapping tools to visualize and target specific
                        markets
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Image */}
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">
                    Power BI mapping visualization
                  </p>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Example visualization from our Cloud-Based Power BI Platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-blue-700 mb-4">
              OUR TEAM
            </p>
            <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
              Global team with nationwide expertise
            </h2>
            <p className="text-lg text-gray-700">
              Our team of 30+ professionals is strategically located throughout
              the country with primary offices in Baltimore, MD and Edina, MN.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-64 bg-gray-200 rounded mb-6 flex items-center justify-center">
                <p className="text-gray-500">US Map with office locations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Primary Offices
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                      <span>Baltimore, MD</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                      <span>Edina, MN</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Team Locations
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                      <span>New York</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                      <span>Texas</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                      <span>Florida</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"></div>
                      <span>Additional personnel throughout the country</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-8 max-w-3xl mx-auto leading-tight">
            Ready to leverage our industry expertise for your next transaction?
          </h2>
          <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
            Contact our team to discuss how we can support you through the
            acquisition lifecycle.
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
    </div>
  );
};

export default IndustriesPage;
