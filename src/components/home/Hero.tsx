import Image from "next/image";
import { PrimaryButton, WhiteButton } from "../Button";
import NewsLetterBadge from "../NewsletterBadge";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen  flex">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image className="-z-1" fill src="/hero-stoc.png" alt="STOC hero" />
      </div>
      <div className="flex z-10 flex-col w-full px-6 md:px-12 lg:px-32 items-center justify-center">
        <NewsLetterBadge />

        <h1 className="text-5xl text-center tracking-tighter max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
          Where Strategic Transactions{" "}
          <span className="font-gambetta italic">
            Meet Exceptional Advising
          </span>
        </h1>
        <p className="mt-6 mb-12 text-lg text-center md:text-xl max-w-lg text-white">
          Guiding you through every stage of the acquisition lifecycle with
          precision, insight, and proven expertise.{" "}
        </p>
        <div className="flex flex-row items-center gap-6">
          <Link href="/services">
            <WhiteButton>Explore Services</WhiteButton>
          </Link>
          <Link href="/contact">
            <PrimaryButton>Talk to an Advisor </PrimaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
