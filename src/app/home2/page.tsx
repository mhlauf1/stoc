// pages/index.tsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-sm uppercase tracking-wider text-gray-200 mb-2">
            Start Your Diligence Journey
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            Where Strategic Transactions{" "}
            <span className="italic">Meet Exceptional Advising</span>
          </h1>
          <Link
            className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium"
            href="/contact"
          >
            Schedule a Consultation →
          </Link>
        </div>
      </section>

      {/* Intro + CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
          Unlocking Value at Every Stage
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-6">
          STOC Advisory partners with middle-market businesses and private
          equity sponsors to accelerate growth, mitigate risk, and deliver
          lasting impact.
        </p>
        <Link className="text-blue-600 underline font-medium" href="/about">
          Learn More About Us →
        </Link>
      </section>

      {/* Key Differentiator */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
            <p className="text-gray-600">
              Decades of experience across healthcare, business services,
              manufacturing, and more.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Tailored Advisory</h3>
            <p className="text-gray-600">
              Custom strategies built to align with your business goals at every
              stage of the transaction.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Proven Process</h3>
            <p className="text-gray-600">
              A comprehensive diligence approach that ensures clarity, mitigates
              risk, and drives results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
          Our Core Services
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our specialized services designed to guide your business
          through complex transactions.
        </p>
        <Link
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium"
          href="/services"
        >
          Explore Services →
        </Link>
      </section>

      {/* Industries Teaser */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
          Industries We Serve
        </h2>
        <p className="text-gray-600 mb-6">
          Driving sector specific growth and resilience through expert advisory.
        </p>
        <Link
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium"
          href="/industries"
        >
          Explore Industries →
        </Link>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/services">All Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/contact">Get in Touch</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Locations</h4>
            <ul className="space-y-1">
              <li>Baltimore, MD</li>
              <li>Edina, MN</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">
          © STOC Advisory 2025. All rights reserved.
        </p>
      </footer>

      {/* Floating Contact Button */}
      <Link
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg"
        href="/contact"
      >
        Contact
      </Link>
    </main>
  );
}
