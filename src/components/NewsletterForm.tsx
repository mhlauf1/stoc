import React from "react";
import { PrimaryButtonBlue } from "@/components/Button";
import Link from "next/link";
const NewsletterForm = () => {
  return (
    <div className="bg-[#F7F7F7] border border-neutral-200 px-12 py-6 rounded-lg md:max-w-md w-full md:mt-16 hidden md:flex flex-col items-start ">
      <p className="text-neutral-700  tracking-wide">
        Stay in touch. Sign up for the Stoc Newsletter below.
      </p>
      <input
        type="email"
        placeholder="Your business email"
        className="flex-1 px-3 w-full mt-4 py-2 border border-black/10 bg-white rounded-md text-neutral-900 focus:outline-none"
      />
      <Link className="mt-4" href="/">
        <PrimaryButtonBlue>Submit</PrimaryButtonBlue>
      </Link>
    </div>
  );
};

export default NewsletterForm;
