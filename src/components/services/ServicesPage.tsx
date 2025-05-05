"use client";
import React, { useState } from "react";
import HeroSection from "./HeroSection";
import ServiceTabs from "./ServiceTabs";
import ServiceContent from "./ServiceContent";
import CTASection from "./CTASection";
import WhyChooseUsSection from "./WhyChooseUsSection";

const ServicesPage = () => {
  // State to track which service tab is active
  const [activeService, setActiveService] = useState("transaction");

  // Service data based directly on Stoc's website
  const services = {
    transaction: {
      id: "transaction",
      title: "Transaction Advisory",
      icon: "📊",
      longDesc:
        "STOC Advisory provides buy-side financial due diligence services including quality of earnings analysis, cash flow assessment, working capital analysis, and quality of revenue analysis.",
      keyServices: [
        {
          title: "Quality of Earnings",
          desc: "Rigorous financial analysis to validate earnings quality and sustainability.",
        },
        {
          title: "Working Capital Analysis",
          desc: "Set recast adjusted net working capital targets based on historical performance.",
        },
        {
          title: "Buy-Side Diligence",
          desc: "In-depth analysis and completion of data books summarizing findings.",
        },
        {
          title: "LOI and APA Review",
          desc: "Review of transaction documents and financial reporting policies.",
        },
      ],
      approach:
        "Our engagements typically take approximately four weeks to complete. We provide real-time updates and frequent feedback throughout our analysis and reporting period.",
    },
    restructuring: {
      id: "restructuring",
      title: "Restructuring & Turnaround",
      icon: "⚠️",
      longDesc:
        "STOC Advisory provides restructuring and turnaround services to help businesses overcome financial distress and operational challenges.",
      keyServices: [
        {
          title: "Crisis Management",
          desc: "Immediate stabilization of operations and cash flow during financial distress.",
        },
        {
          title: "Operational Restructuring",
          desc: "Assessment and improvement of business processes to enhance profitability.",
        },
        {
          title: "Debt Restructuring",
          desc: "Negotiation with creditors to create sustainable debt structures.",
        },
        {
          title: "Performance Improvement",
          desc: "Implementation of strategies to improve operational and financial performance.",
        },
      ],
      approach:
        "Our restructuring approach is tailored to each client's specific situation, focusing on both immediate stability and long-term sustainability.",
    },
    cfo: {
      id: "cfo",
      title: "Strategic CFO Services",
      icon: "💼",
      longDesc:
        "STOC Advisory provides CFO advisory services to optimize financial operations and reporting to support strategic decision-making.",
      keyServices: [
        {
          title: "Revenue Recognition",
          desc: "Assessment and implementation of revenue recognition policies in accordance with GAAP.",
        },
        {
          title: "Month-End Close",
          desc: "Optimization and management of month-end close processes and financial reporting.",
        },
        {
          title: "Opening Balance Sheet",
          desc: "Preparation and analysis of opening balance sheets following transactions.",
        },
        {
          title: "Financial Reporting",
          desc: "Development and optimization of financial reporting systems and processes.",
        },
      ],
      approach:
        "Our global team provides guidance for post-close integration periods, ensuring smooth transitions and optimized financial operations.",
    },
    corporate: {
      id: "corporate",
      title: "Corporate Development",
      icon: "🔍",
      longDesc:
        "STOC Advisory facilitates acquisition success through structured lead identification, strategic outreach, and methodical relationship development.",
      keyServices: [
        {
          title: "Lead Identification",
          desc: "Define investment criteria and identify potential acquisition targets using proprietary screening tools.",
        },
        {
          title: "Lead Outreach & CRM",
          desc: "Initiate outreach campaigns and maintain an active deal pipeline with tracking metrics.",
        },
        {
          title: "Target Nurturing",
          desc: "Guide targets through the process from initial contact to NDA execution.",
        },
        {
          title: "Cloud-Based Power BI Platform",
          desc: "Custom market analysis using advanced mapping and demographic tools.",
        },
      ],
      approach:
        "The Corporate Development function requires a significant investment of time to help attract and identify potential acquisition targets to ensure alignment with a company's core purpose, values, and strategic vision.",
    },
  };

  // Get the active service data
  const activeServiceData = services[activeService];

  return (
    <div className="font-sans min-h-screen bg-white">
      <HeroSection />
      <ServiceTabs
        services={services}
        activeService={activeService}
        setActiveService={setActiveService}
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <ServiceContent activeServiceData={activeServiceData} />

              {/* Right Column - Simple placeholder */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {activeServiceData.title} Process
                </h3>
                <p className="text-gray-700">
                  Our {activeServiceData.title.toLowerCase()} process is
                  tailored to meet your specific needs and objectives.
                </p>
                <div className="h-48 bg-gray-200 mt-4 rounded flex items-center justify-center">
                  <p className="text-gray-500">Process visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
