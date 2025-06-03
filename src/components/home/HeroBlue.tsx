import Image from "next/image";
import { WhiteButton } from "../Button";
import NewsLetterBadge from "../NewsletterBadge";
import Link from "next/link";

export default function HeroVideo() {
  return (
    <section className="relative h-[98vh]  flex">
      <div
        className="absolute z-10 inset-0 bg-blue-600 opacity-40 mix-blend-multiply rounded-lg"
        aria-hidden="true"
      />{" "}
      <div
        className="absolute inset-0 bg-neutral-300 opacity-80 mix-blend-multiply"
        aria-hidden="true"
      />{" "}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image
          className="-z-1 object-cover"
          fill
          src="/stoc-hero.jpg"
          alt="STOC hero"
          quality={100}
          priority
        />
      </div>
      <div className="flex z-10 flex-col gap-4 pt-[30vh] pb-10 w-full px-4 md:px-12 lg:px-20 items-start justify-between">
        <div>
          <NewsLetterBadge />

          <h1 className="text-4xl sm:text-5xl text-start tracking-tight md:max-w-[32ch] md:text-6xl mt-4 font-gambetta lg:text-7xl leading-tight text-white">
            Where Strategic Transactions{" "}
            <span className="font-gambetta italic">
              Meet Exceptional Advising
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <p className="text-lg text-start md:text-xl w-full md:max-w-[40ch] mb-4  text-white">
            Guiding you through every stage of the acquisition lifecycle with
            precision, insight, and proven expertise.{" "}
          </p>
          <div className="flex flex-col md:flex-row md:justify-center items-center md:w-auto w-full gap-4 mb-6 md:gap-6">
            <Link className="md:w-auto w-full" href="/services">
              <WhiteButton>Explore Services</WhiteButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
