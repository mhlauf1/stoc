// app/services/transaction-advisory-services/page.tsx
import Link from "next/link";
import React from "react";

export default function TransactionAdvisoryPage1() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-white py-24 px-4 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Transaction Advisory Services
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-relaxed">
          Whether buying, building, or exiting an investment, every transaction
          possesses a certain degree of risk. STOC Advisory’s integrated due
          diligence approach helps clients mitigate risk and maximize the value
          of every deal.
        </p>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="max-w-3xl mx-auto text-neutral-700 leading-relaxed">
          <p>
            We apply deep industry expertise to a fully integrated financial &
            operational due diligence process—advising you on key deal
            considerations and ensuring every opportunity is realized to its
            fullest potential.
          </p>
          <p className="mt-4">
            Through a robust, repeatable workflow, we deliver proven results
            tailored to each transaction&apos;s unique needs, helping you
            mitigate risk and unlock maximum value.
          </p>
        </div>
      </section>

      {/* Core Approach */}
      <section className="py-16 px-4 md:px-16">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Integrated Due Diligence
        </h2>
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <h3 className="font-medium mb-2">Risk Mitigation</h3>
            <p className="text-neutral-600">
              Identify and manage deal risks before they materialize.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <h3 className="font-medium mb-2">Financial & Operational</h3>
            <p className="text-neutral-600">
              Deep-dive analyses of financial statements, contracts, and
              processes.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow text-center">
            <h3 className="font-medium mb-2">Value Maximization</h3>
            <p className="text-neutral-600">
              Actionable insights to enhance deal structure and post-close
              performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to navigate your next transaction?
        </h2>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-medium"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
