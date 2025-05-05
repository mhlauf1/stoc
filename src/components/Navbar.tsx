"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Services", href: "/" },
  { label: "Industries", href: "/" },
  { label: "About", href: "/" },
  { label: "Careers", href: "/" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  open: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeInOut" } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // on scroll, flip scrolled flag
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // decide styles
  const isDarkBg = scrolled;
  const linkBase = isDarkBg
    ? "text-neutral-800 hover:text-[#16333A]"
    : "text-white hover:text-white/75";
  const contactBtn = isDarkBg
    ? "border border-[#16333A] text-[#16333A] hover:bg-[#16333A] hover:text-white"
    : "border border-white/30 text-white hover:bg-white/20";
  const barColor = isDarkBg ? "bg-neutral-800" : "bg-white";

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 py-4 transition-all duration-300
        ${isDarkBg ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-16">
        {/* logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            {isDarkBg ? (
              <Image src="/black-logo.png" width={28} height={28} alt="STOC" />
            ) : (
              <Image src="/logo-stoc-2.png" width={28} height={28} alt="STOC" />
            )}
            <h3
              className={`${
                isDarkBg ? "text-neutral-800" : "text-white"
              } font-medium tracking-wide`}
            >
              Stoc Advisory
            </h3>
          </div>
        </Link>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group ${linkBase} transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#16333A] group-hover:w-full transition-all duration-200" />
            </Link>
          ))}

          <Link
            href="/contact"
            className={`px-6 py-2 rounded-full transition-colors duration-200 ${contactBtn}`}
          >
            Contact
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen((o) => !o)}
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

      {/* mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-black/80 backdrop-blur-sm p-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <div className="mt-16 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-block px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-[#16333A] transition-colors duration-200 text-center"
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
