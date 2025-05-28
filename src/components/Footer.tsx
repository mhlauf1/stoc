import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#041E40] px-6 md:px-[5%] py-16">
      <div className="flex flex-col-reverse md:flex-row w-full gap-8 md:gap-0 justify-between items-start md:items-center">
        <div className="flex flex-col flex-1 gap-4">
          <Link href="/">
            <Image
              src="/stoc-main-logo-cropped.png"
              width={250}
              height={200}
              alt="STOC Advisory"
              className="filter w-[175px] brightness-0 invert"
            />
          </Link>
        </div>
        <div className="flex flex-col text-sm flex-1 justify-center text-neutral-200  duration-300 md:flex-row gap-4 md:gap-8 items-start md:items-center">
          <Link className="hover:text-white duration-300 " href="/">
            Home
          </Link>
          <Link className="hover:text-white duration-300 " href="/services">
            Services
          </Link>
          <Link className="hover:text-white duration-300 " href="/industries">
            Industries
          </Link>
          <Link className="hover:text-white duration-300 " href="/about">
            About
          </Link>
          <Link className="hover:text-white duration-300 " href="/about/team">
            Team
          </Link>
          <Link
            className="hover:text-white duration-300 "
            href="/about/locations"
          >
            Locations
          </Link>
          <Link className="hover:text-white duration-300 " href="/contact">
            Contact
          </Link>
        </div>
        <div className="flex flex-1 items-end flex-col ">
          <FaLinkedin
            size={28}
            className="hover:text-white text-white cursor-pointer transition-colors duration-200"
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-neutral-500 my-6"></div>
      <div className="text justify-center items-center flex-col">
        <p className="text-neutral-300 text-start md:text-center text-sm leading-6">
          STOC Advisory is not a CPA firm
        </p>
        <p className="text-neutral-300 ext-start md:text-center text-sm leading-6">
          ©2025 STOC Advisory, LLC.{" "}
          <span className="text-neutral-300  text-xs md:text-sm  text-center md:text-left">
            Designed and developed by{" "}
            <a
              href="https://www.lauf.co"
              target="_blank"
              className="font-semibold"
            >
              Lauf.
            </a>
          </span>
        </p>
      </div>
      {/* <div
        className="grid grid-cols-1 md:grid-cols-4 gap-y-10 
                      md:gap-x-12"
      >
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
            ©2025 STOC Advisory, LLC <br /> | STOC Advisory is not a CPA firm{" "}
            <br /> |<a> Privacy Policy</a>
          </p>
        </div>
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
        <div className="flex flex-col justify-between h-full gap-4">
          <div>
            <h4 className="text-neutral-400 uppercase text-xs tracking-wide">
              Follow Us
            </h4>
            <div className="flex space-x-4 mt-3 text-neutral-300">
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
          <div>
            <p className="text-neutral-300  text-xs md:text-sm  text-center md:text-left">
              Designed and developed by{" "}
              <a
                href="https://www.lauf.co"
                target="_blank"
                className="font-semibold"
              >
                Lauf.
              </a>
            </p>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
