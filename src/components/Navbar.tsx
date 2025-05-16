"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "CFO Advisory", href: "/services/cfo-advisory" },
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
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Business Services", href: "/industries/business-services" },
      { label: "Cannabis", href: "/industries/cannabis" },
      { label: "Healthcare", href: "/industries/healthcare" },
      {
        label: "Hospitality & Entertainment",
        href: "/industries/hospitality-entertainment",
      },
      {
        label: "Manufacturing & Distribution",
        href: "/industries/manufacturing-distribution",
      },
      {
        label: "Retail & Consumer Products",
        href: "/industries/retail-consumer-products",
      },
      {
        label: "Technology, Media & Telecommunications",
        href: "/industries/technology-media-telecommunications",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about/company" },
      { label: "Team", href: "/about/team" },
      { label: "Locations", href: "/about/locations" },
      { label: "Case Studies", href: "/about/case-studies" },
      { label: "Careers", href: "/about/careers" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dynamicPages = ["/", "/services", "/about"];
  const isDynamicPage = dynamicPages.includes(pathname);

  // if it’s one of those three, dark only after scroll; otherwise always dark
  const isDarkBg = isDynamicPage ? scrolled : true;

  const linkBase = isDarkBg
    ? "text-neutral-800 hover:text-[#16333A] focus:outline-none"
    : "text-white hover:text-white/75 focus:outline-none";
  const contactBtn = isDarkBg
    ? "border border-[#16333A] text-[#16333A] hover:bg-[#16333A] hover:text-white focus:outline-none"
    : "border border-white/30 text-white hover:bg-white/20 focus:outline-none";
  const barColor = isDarkBg ? "bg-neutral-800" : "bg-white";

  const dropdownBg = isDarkBg
    ? "bg-white border border-neutral-200"
    : "bg-black/80";
  const childLinkStyle = isDarkBg
    ? "text-neutral-700 hover:bg-gray-100 focus:outline-none"
    : "text-white hover:bg-white/20 focus:outline-none";

  return (
    <nav
      className={`fixed top-0 w-full z-50 py-2 transition-all duration-300 ${
        isDarkBg ? "bg-white border-b border-neutral-200" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-12 md:px-16 lg:px-28">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/stoc-logo-main.png"
            width={200}
            height={100}
            alt="STOC"
            className={`transition-all duration-300 ${
              isDarkBg ? "" : "filter brightness-0 invert"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`${linkBase} px-2 py-1 transition-colors`}
              >
                {item.label}
              </Link>
              {item.children?.length > 0 && (
                <div
                  className={`absolute top-full left-0  hidden group-hover:block rounded-md shadow-lg ${dropdownBg} min-w-[12rem]`}
                >
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={`block px-4 py-2 text-sm transition-colors ${childLinkStyle}`}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${contactBtn}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`${barColor} h-[2px] transition-transform duration-200 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`${barColor} h-[2px] transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`${barColor} h-[2px] transition-transform duration-200 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/80 backdrop-blur-sm p-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              {/* Replace with your preferred close icon */}
              <span className="text-2xl">×</span>
            </button>
            <div className="mt-16 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.href} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg hover:text-gray-300 focus:outline-none transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.children?.length > 0 && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white/75 text-base hover:text-white focus:outline-none transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-[#16333A] focus:outline-none transition-colors duration-200 text-center"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
