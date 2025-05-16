import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative md:h-[95vh] flex flex-col bg-white">
      <div className="px-4 gap-8 md:pb-0 pb-8 pt-[15vh] md:pt-0 flex flex-col md:flex-row items-center w-full md:px-12 flex-1 lg:px-32">
        <div className="flex flex-col flex-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-gambetta tracking-tight leading-none  md:max-w-[20ch]">
            Industry expertise that <br />
            <span className="italic font-gambetta">
              drives transaction success
            </span>
          </h1>
          <p className="text-start text-lg md:text-xl md:max-w-[60ch] leading-8 mt-4 text-neutral-600">
            We combine deep sector expertise with a proven transformation
            playbook—helping you navigate complexity, mitigate risk, and seize
            new opportunities.
          </p>
        </div>
        <div className="flex justify-end flex-1">
          <Image
            src="/industry-nodes.png"
            height={500}
            className="rounded-xl"
            width={600}
            alt="STOC Industries"
          />
        </div>
      </div>
      <div className="md:flex hidden flex-wrap md:px-12 justify-center lg:px-32 px-4 items-center mb-12 gap-4">
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Business Services
        </p>
        <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Cannabis
        </p>
        <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Healthcare
        </p>
        <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Hospitality & Entertainment
        </p>
        <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Manufacturing & Distribution
        </p>
        <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Retail & Consumer Products
        </p>
        <div className="h-[4px] w-[4px] rounded-full bg-neutral-400"></div>
        <p className="text-sm md:text-base text-neutral-500 tracking-wide">
          Technology, Media, & Telecommunications
        </p>
      </div>
    </section>
  );
}
