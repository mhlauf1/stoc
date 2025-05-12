import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07171E] px-6 md:px-12 lg:px-32 py-16">
      <div className="px-8 md:px-24 mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start justify-between gap-4">
          <Link href="/">
            <Image
              src="/stoc-logo-main.png"
              width={200}
              height={100}
              alt="STOC"
              className="filter brightness-0 invert"
            />
          </Link>
          <p className="text-neutral-300 leading-6 max-w-xs text-left">
            Strategic advisors guiding businesses through complex transactions.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-white font-medium">Services</h4>
          <ul className="space-y-2">
            {[
              "Transaction Advisory",
              "Corporate Development",
              "CFO Advisory",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white transition"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-white font-medium">Company</h4>
          <ul className="space-y-2">
            {[
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-neutral-300 hover:text-white transition"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-white font-medium">Locations</h4>
          <ul className="space-y-2 text-neutral-300">
            {["Baltimore, MD", "Edina, MN"].map((loc) => (
              <li
                key={loc}
                className="hover:text-white transition cursor-default"
              >
                {loc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
