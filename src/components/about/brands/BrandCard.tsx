"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "@/components/Button";
import { CardLayoutProps } from "./CardLayout";

const BrandCard: React.FC<CardLayoutProps> = ({
  title,
  description,
  cta,
  href,
  logo,
}) => {
  return (
    <div className="w-full bg-white items-center md:items-start px-6 py-6  md:px-8 md:py-8 flex-1 relative border border-neutral-200 rounded-md flex flex-col">
      <div className="w-full flex justify-center md:justify-start">
        <Image
          src={logo}
          height={200}
          width={350}
          alt="Brands"
          className="rounded-xl mb-4 md:mb-8"
        />
      </div>

      <h3 className="mt-6 md:mt-auto text-2xl text-center md:text-start md:text-3xl font-gambetta text-gray-900 leading-tight tracking-tight">
        {title}
      </h3>

      <p className="text-neutral-600 w-[90%] text-center md:text-start tracking-tight mt-2 text-md md:text-lg">
        {description}
      </p>

      <Link
        className="mt-4 md:mt-5 w-full md:w-auto"
        href={href}
        target="_blank"
      >
        <PrimaryButton>{cta ?? "Learn More"}</PrimaryButton>
      </Link>
    </div>
  );
};

export default BrandCard;
