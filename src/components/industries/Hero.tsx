export default function Hero() {
  return (
    <section className="relative h-[95vh] bg-white flex">
      <div className="px-6 justify-between flex flex-col items-center w-full md:px-12 pb-24 pt-24 md:pt-64 lg:px-32">
        <div className="flex items-center flex-col">
          <h1 className="text-5xl text-center tracking-tighter max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight ">
            Industry expertise that <br />{" "}
            <span className="font-gambetta italic">
              drives transaction success
            </span>
          </h1>
          <p className="mt-8 mb-16 text-center text-lg md:text-xl max-w-lg ">
            We combine deep sector expertise with a proven transformation
            playbook—helping you navigate complexity, mitigate risk, and seize
            new opportunities.
          </p>
        </div>
        <div className="flex items-center mb-6 gap-4">
          <div className="hidden md:block h-[1px] bg-neutral-500 w-[60px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-neutral-600 text-xs font-mono"
          >
            Expertise that drives transaction success
          </span>
          <div className="hidden md:block h-[1px] bg-neutral-500 w-[60px]" />
        </div>
      </div>
    </section>
  );
}
