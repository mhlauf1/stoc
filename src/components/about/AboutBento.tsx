"use client";
import React, { FC } from "react";
import Link from "next/link";
import { PrimaryButton } from "../Button";

interface TeaserCardProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

const TeaserCard: FC<TeaserCardProps> = ({
  title,
  description,
  href,
  buttonText,
}) => (
  <div className="flex-1 border bg-[#F7F7F7] items-start border-neutral-200 rounded-md flex flex-col justify-between px-5 md:px-12 py-6 md:py-8">
    <div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl  font-gambetta tracking-tight leading-tight max-w-[24ch]">
        {title}
      </h2>
      <p className="mt-2 mb-6 text-neutral-600 tracking-tight text-md md:text-lg">
        {description}
      </p>
    </div>
    <Link className="w-full md:w-auto" href={href}>
      <PrimaryButton>{buttonText}</PrimaryButton>
    </Link>
  </div>
);

const AboutBento: FC = () => {
  const cards: TeaserCardProps[] = [
    {
      title: "Company",
      description:
        "Learn about our mission, values, and the story behind STOC Advisory.",
      href: "/about/company",
      buttonText: "Learn More",
    },
    {
      title: "Team",
      description:
        "Meet the experts driving our success and learn what makes our team unique.",
      href: "/about/team",
      buttonText: "Meet the Team",
    },
    {
      title: "Locations",
      description: "Explore our global presence and find an office near you.",
      href: "/about/locations",
      buttonText: "View Locations",
    },
    {
      title: "Careers",
      description:
        "Join our team and help shape the future of strategic advisory.",
      href: "/about/careers",
      buttonText: "Explore Careers",
    },
  ];

  return (
    <section className="bg-white px-4 md:px-12 lg:px-28 py-12 md:py-24">
      <div className="flex flex-col  w-full gap-4">
        {/* First row */}
        <div className="flex flex-col  md:flex-row gap-4">
          {cards.slice(0, 2).map((c) => (
            <TeaserCard key={c.title} {...c} />
          ))}
        </div>
        {/* Second row */}
        <div className="flex flex-col  md:flex-row gap-4">
          {cards.slice(2).map((c) => (
            <TeaserCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBento;
