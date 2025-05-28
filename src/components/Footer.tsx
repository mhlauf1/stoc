import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#041E40] px-6 md:px-[5%] py-16">
      <div
        className="grid grid-cols-1 md:grid-cols-5 gap-y-10 
                      md:gap-x-12"
      >
        {/* Logo & Tagline */}
        <div className="flex flex-col justify-between gap-6">
          <Link href="/">
            <Image
              src="/stoc-main-logo-cropped.png"
              width={250}
              height={200}
              alt="STOC Advisory"
              className="filter w-[175px] md:w-[250px] brightness-0 invert"
            />
          </Link>
          <p className="text-neutral-300 text-sm leading-6">
            ©2025 STOC Advisory, LLC | STOC Advisory is not a CPA firm | Privacy
            Policy
          </p>
        </div>
        {/* Company */}
        <div className="flex md:ml-10 flex-col gap-4">
          <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
            Company
          </h4>
          <ul className="space-y-3">
            {[
              { label: "About Us", href: "/about" },
              { label: "Industries", href: "/industries" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-neutral-300 hover:text-white transition-colors duration-200 pb-1 border-b border-transparent hover:border-neutral-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
            Services
          </h4>
          <ul className="space-y-3">
            {[
              "Corporate Development Support",
              "Growth Enablement Services",
              "Transaction Advisory Services",
              "CFO Advisory",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-neutral-300 hover:text-white transition-colors duration-200 pb-1 border-b border-transparent hover:border-neutral-600"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
            Locations
          </h4>
          <ul className="space-y-3 text-neutral-300">
            {["Baltimore, MD", "Minneapolis, MN"].map((loc) => (
              <li
                key={loc}
                className="hover:text-white transition-colors duration-200"
              >
                {loc}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
            Follow Us
          </h4>
          <div className="flex space-x-4 text-neutral-300">
            <Link
              href="https://www.linkedin.com/company/stoc-advisory/"
              target="_blank"
            >
              <FaLinkedin
                size={28}
                className="hover:text-white cursor-pointer transition-colors duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
