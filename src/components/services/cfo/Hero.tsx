import React from "react";
import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";

const Hero: React.FC = () => (
  <section className="h-[85vh] md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-36 md:pt-0  bg-[#F7F7F7] items-center px-6 md:px-24">
    <div className="flex  flex-col items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-4xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[20ch] leading-tight tracking-tighter">
          Fractional CFO & Financial Strategy
        </h1>
        <p className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[52ch] leading-relaxed">
          Interim accounting and finance leadership to accelerate growth,
          optimize performance, and maximize value.
        </p>
      </div>

      <NewsletterForm />
    </div>
    <div className="relative w-full mb-8 md:mb-0 md:w-1/2 h-[45vh] md:h-[65vh]">
      <Image
        src="/cannabis-hero.png"
        alt="Transaction Advisory background"
        fill
        className="object-cover object-center rounded-lg"
        quality={100}
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
      />{" "}
    </div>
  </section>
);

export default Hero;
