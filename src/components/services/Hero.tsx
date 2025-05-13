import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative md:h-[95vh] h-auto bg-[#07171E] flex">
      <div className="px-6 justify-center gap-8 md:pb-0 pb-8 pt-[15vh] md:pt-0 flex flex-col md:flex-row items-center w-full md:px-12 h-full lg:px-32">
        <div className="flex items-start gap-6 flex-1 flex-col">
          <h1 className="text-5xl text-start tracking-tighter md:max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
            Turning complexity transactions into{" "}
            <span className="italic font-gambetta">opportunity.</span>
          </h1>
          <p className="text-start text-lg md:text-xl md:max-w-[42ch] text-white">
            From deep-dive due diligence to seamless integration, we ensure
            every deal captures maximum value.
          </p>
        </div>
        <div className="flex md:justify-end items-start flex-1">
          <Image
            src="/service-hero.jpeg"
            height={500}
            className="rounded-xl"
            width={600}
            alt="STOC Industries"
          />
        </div>

        <div className="md:flex hidden absolute bottom-8 items-center mb-6 gap-4">
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            Transaction Advisory Services
          </p>
          <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            Corporate Development Support
          </p>
          <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            Growth Enablement Services
          </p>
          <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
          <p className="text-sm md:text-base text-neutral-300 tracking-wide">
            CFO Advisory
          </p>
        </div>
      </div>
    </section>
  );
}
