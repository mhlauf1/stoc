"use client";
import BrandCard from "./BrandCard";
import { motion } from "framer-motion";

export interface CardLayoutProps {
  title: string;
  description: string;
  href: string;
  cta?: string;
  logo: string;
}

const cards: CardLayoutProps[] = [
  {
    title: "Commercial Exterior & Essential Services",
    description:
      "Buy-side advisory for commercial landscaping, roofing, paving, and essential service businesses. We connect owners with strategic investors through confidential, specialized guidance.",
    href: "https://brantapartners.com",
    cta: "Explore Branta Partners",
    logo: "/Branta-jpeg.jpg",
  },
  {
    title: "Healthcare Services Advisory",
    description:
      "Specialized buy-side advisory for healthcare service providers including dental practices, MedSpas, behavioral health, and physician practice management. HIPAA-compliant, owner-first approach.",
    href: "https://corviacapital.com",
    cta: "Explore Corvia Capital",
    logo: "/Corvia.jpg",
  },
];

const CardLayout = () => {
  return (
    <section className="bg-[#fafafa] border-t border-neutral-200 px-4 md:px-[5%] py-12 md:py-16">
      <div className="flex flex-col items-center md:items-start gap-4">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px bg-neutral-300 w-[30px]" />
          <span
            style={{ letterSpacing: "2px" }}
            className="uppercase text-neutral-600 text-xs"
          >
            Our Brands
          </span>
          <div className="h-px bg-neutral-300 w-[30px]" />
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-gambetta leading-tight">
          Explore our Brands
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <BrandCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardLayout;
