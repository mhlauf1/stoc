import Image from "next/image";
import Link from "next/link";
import React from "react";

const CompanyPage = () => {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[60vh] bg-gray-100 flex items-center justify-center">
        <Image
          src="/images/company-hero.jpg"
          alt="Team Collaboration"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Company
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white">
            Partnering with clients through every stage of the acquisition
            lifecycle
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#introduction"
              className="px-6 py-3 bg-blue-600 text-white rounded"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-transparent border border-white text-white rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section
        id="introduction"
        className="py-16 px-4 md:px-16 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="md:w-1/2">
          <p className="text-gray-700 leading-relaxed">
            STOC Advisory is a business advisory firm specializing in
            transaction advisory services, corporate development, and CFO
            advisory. We leverage decades of experience in accounting, finance,
            and investment banking to support clients through every phase of the
            acquisition lifecycle, from pre-LOI diligence to post-close
            integration.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/company-office.jpg"
            alt="Office Team"
            width={600}
            height={400}
            className="rounded shadow-md"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white px-4 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">🎯</div>
            <h3 className="text-2xl font-semibold">Mission</h3>
            <p className="mt-2 text-gray-600">
              To deliver tailored financial insights and strategic guidance that
              drive successful transactions and long-term growth.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-blue-100 rounded-full mb-4">🌐</div>
            <h3 className="text-2xl font-semibold">Vision</h3>
            <p className="mt-2 text-gray-600">
              To be the most trusted advisor for middle-market companies and
              private equity partners.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">At a Glance</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-semibold">30+</h3>
            <p className="text-gray-600">Finance & Advisory Professionals</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold">2</h3>
            <p className="text-gray-600">Primary Offices</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold">600+</h3>
            <p className="text-gray-600">Engagements Delivered</p>
          </div>
          <div>
            <h3 className="text-4xl font-semibold">4</h3>
            <p className="text-gray-600">Week Avg Engagement</p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Approach</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-white rounded-full shadow mb-4">📝</div>
            <h4 className="text-xl font-semibold">Pre-LOI Advisory</h4>
            <p className="mt-2 text-gray-600">
              Quality of earnings, target assessment.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-white rounded-full shadow mb-4">🔍</div>
            <h4 className="text-xl font-semibold">Due Diligence</h4>
            <p className="mt-2 text-gray-600">
              Financial modeling, contract analysis, working-capital review.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-4 bg-white rounded-full shadow mb-4">🚀</div>
            <h4 className="text-xl font-semibold">Post-Close Integration</h4>
            <p className="mt-2 text-gray-600">
              Revenue recognition, month-end close support, opening
              balance-sheet review.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-semibold mb-2">Integrity</h4>
            <p className="text-gray-600">
              Upholding the highest ethical standards.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-semibold mb-2">Collaboration</h4>
            <p className="text-gray-600">
              Partnering closely with management teams.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-semibold mb-2">Excellence</h4>
            <p className="text-gray-600">
              Delivering rigorous, data-driven analysis.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h4 className="font-semibold mb-2">Innovation</h4>
            <p className="text-gray-600">
              Adapting to evolving market dynamics.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Snapshot */}
      <section className="py-16 bg-white px-4 md:px-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Leadership Snapshot
        </h2>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
          {[
            "/images/leader1.jpg",
            "/images/leader2.jpg",
            "/images/leader3.jpg",
            "/images/leader4.jpg",
          ].map((src, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={src}
                alt={`Leader ${idx + 1}`}
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <p className="mt-4 font-semibold">Name {idx + 1}</p>
              <p className="text-gray-600 text-sm">Title</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/about/team" className="text-blue-600 underline">
            View Full Team →
          </Link>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-gray-50 px-4 md:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { href: "/about/team", label: "Team" },
            { href: "/about/locations", label: "Locations" },
            { href: "/about/case-studies", label: "Case Studies" },
            { href: "/about/careers", label: "Careers" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-6 bg-white rounded-lg shadow hover:shadow-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to start your next transaction?
        </h2>
        <Link
          href="/contact"
          className="mt-4 inline-block px-8 py-3 border border-white rounded"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
};

export default CompanyPage;
