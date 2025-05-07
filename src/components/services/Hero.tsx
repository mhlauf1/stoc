export default function Hero() {
  return (
    <section className="relative h-[95vh] bg-[#07171E] flex">
      <div className="px-6 justify-between flex flex-col items-center w-full md:px-12 pb-24 pt-24 md:pt-64 lg:px-32">
        <div className="flex items-center flex-col">
          <h1 className="text-5xl text-center tracking-tighter max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight text-white">
            We guide businesses through complex transactions
          </h1>
          <p className="mt-8 mb-16 text-center text-lg md:text-xl max-w-lg text-white">
            From pre-LOI planning to post-close integration, our specialized
            teams deliver exceptional results at every stage.
          </p>
        </div>
        <div className="flex items-center mb-6 gap-4">
          <div className="hidden md:block h-[1px] bg-neutral-300 w-[60px]" />
          <span
            style={{ letterSpacing: "3px" }}
            className="uppercase text-neutral-200 text-xs font-mono"
          >
            Expertise that drives transaction success
          </span>
          <div className="hidden md:block h-[1px] bg-neutral-300 w-[60px]" />
        </div>
      </div>
    </section>
  );
}
