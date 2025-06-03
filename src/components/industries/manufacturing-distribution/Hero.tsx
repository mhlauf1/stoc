import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
  <section className="md:h-[95vh] relative flex flex-col md:flex-row gap-4 pt-[10vh] md:pt-12  bg-[#F7F7F7] items-center px-4 md:px-[5%]">
    <div className="flex mt-8 mb-2 md:md-0 flex-col items-start md:pt-0 flex-1">
      <div>
        <h1 className="text-[#041E40] text-3xl md:text-5xl lg:text-6xl font-gambetta md:max-w-[21ch] leading-tight tracking-tighter">
          Turn Market Complexity into Competitive Advantage
        </h1>
        <p className="text-[#041E40] text-lg md:text-xl mt-4 md:max-w-[68ch] tracking-tight">
          The dynamic global marketplace presents both challenges and
          opportunities for today&apos;s manufacturers and distributors. From
          globalization and supply-chain transformation to rising production
          costs and shifting customer demand, these forces drive every strategic
          and operational decision. Savvy corporations are investing in
          innovation now to secure sustainable growth tomorrow.
        </p>
      </div>
    </div>
    <div className="relative w-full mb-12 md:mb-0 md:w-[40vw] h-[45vh] md:h-[65vh]">
      <Image
        src="/cfo-services.jpeg"
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
