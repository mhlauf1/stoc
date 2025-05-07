import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#07171E] px-6 md:px-12 lg:px-32 py-16">
      <div className="flex flex-col md:flex-row text-white  mx-auto justify-between">
        <div className="flex flex-1 flex-col gap-6">
          <Image
            src="/logo-white.png"
            alt="Footer Logo"
            height={48}
            width={24}
          />
          <p className="w-[28ch] text-neutral-300 leading-6">
            Strategic advisors guiding businesses through complex transactions.
          </p>
        </div>
        <div className="flex flex-1 items-end flex-col gap-6">
          <p className="font-medium">Services</p>
          <Link className="text-neutral-300 hover:text-white" href="/">
            Transaction Advisory
          </Link>
          <Link className="text-neutral-300 hover:text-white" href="/">
            Corporate Development
          </Link>
          <Link className="text-neutral-300 hover:text-white" href="/">
            CFO Advisory
          </Link>
        </div>
        <div className="flex flex-1 items-end flex-col gap-6">
          <p className="font-medium">Company</p>
          <Link className="text-neutral-300 hover:text-white" href="/about">
            About Us
          </Link>
          <Link className="text-neutral-300 hover:text-white" href="/services">
            Services
          </Link>
          <Link
            className="text-neutral-300 hover:text-white"
            href="/industries"
          >
            Industries
          </Link>
          <Link className="text-neutral-300 hover:text-white" href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex flex-1 items-end flex-col gap-6">
          <p className="font-medium">Locations</p>
          <p className="text-neutral-300 hover:text-white">Baltimore, MD</p>
          <p className="text-neutral-300 hover:text-white">Edina, MN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
