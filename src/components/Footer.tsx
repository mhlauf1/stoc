import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#041E40] px-6 md:px-[5%] pt-12 pb-6">
      <div className="flex flex-col md:flex-row flex-wrap  justify-between gap-y-10">
        {/* Logo & Tagline */}
        <div className="flex flex-col justify-between gap-6">
          <Link href="/">
            <Image
              src="/stoc-main-logo-cropped.png"
              width={250}
              height={200}
              alt="STOC Advisory"
              className="filter w-[125px] md:w-[175px] brightness-0 invert"
            />
          </Link>
        </div>
        {/* Company */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
            Company
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Services", href: "/services" },
              { label: "Industries", href: "/industries" },
              { label: "About", href: "/about" },
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
              {
                label: "Corporate Development Support (CDS)",
                href: "/services/corporate-development-support",
              },
              {
                label: "Growth Enablement Services (GES)",
                href: "/services/growth-enablement-services",
              },
              {
                label: "Transaction Advisory Services (TAS)",
                href: "/services/transaction-advisory-services",
              },
              { label: "CFO Advisory", href: "/services/cfo-advisory" },
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

        {/* Locations */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
            Locations
          </h4>
          <ul className="space-y-3 text-neutral-300">
            {[
              "Baltimore, MD",
              "Minneapolis, MN",
              "Nashville, TN",
              "Dallas, TX",
            ].map((loc) => (
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
      <div className="w-full mt-10 h-[1px] bg-neutral-500 my-6"></div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <p className="text-neutral-300 text-start  uppercase text-xs tracking-wide">
            STOC Advisory is not a CPA firm
          </p>
          <p className="text-neutral-300 mt-2 text-start  text-xs md:text-sm leading-6">
            ©2025 STOC Advisory, LLC.{" "}
            <span className="text-neutral-300  text-xs md:text-sm  text-center md:text-left">
              Designed and developed by{" "}
              <a
                href="https://www.lauf.co/"
                target="_blank"
                className="font-semibold"
              >
                Lauf.
              </a>
            </span>
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <a href="/privacy" className="text-neutral-300 text-start text-xs ">
            Privacy Policy
          </a>
          <a href="/terms" className="text-neutral-300 text-start text-xs">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
