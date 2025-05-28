import React from "react";
import Image from "next/image";

const locations = [
  {
    city: "Baltimore, MD",
    address: "600 Baltimore Ave. Suite 209 Towson, MD 21204",
    phone: "(410) 812-6927",
    hours: "Mon–Fri: 9 AM – 5 PM",
  },
  {
    city: "Minneapolis, MN",
    address: "7400 Metro Blvd. Suite 450 Minneapolis, MN 55439",
    phone: "(218) 244-8082",
    hours: "Mon–Fri: 8 AM – 4 PM",
  },
];

const Hero = () => {
  return (
    <section className="bg-[#F7F7F7] w-full min-h-screen mb-12 md:mb-16 flex flex-col px-4 md:px-[5%]">
      <div className="flex flex-col md:flex-row py-[15vh] gap-8 flex-1">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col">
          {/* Section marker */}
          <div className="flex items-center mb-4 justify-center md:justify-start gap-4">
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
            <span
              style={{ letterSpacing: "2px" }}
              className="uppercase text-neutral-600 text-xs"
            >
              Find Us
            </span>
            <div className="h-[1px] bg-neutral-300 w-[30px]" />
          </div>

          {/* Main heading */}
          <h2 className="text-neutral-800 text-3xl text-center md:text-start md:text-4xl lg:text-5xl font-gambetta leading-tight tracking-tighter">
            Our Locations
          </h2>

          {/* Intro copy */}
          <p className="mt-2 text-lg md:text-x text-center md:text-start text-neutral-600 tracking-tight max-w-prose">
            STOC Advisory maintains a strong presence in both Baltimore and
            Minneapolis to serve our East Coast and Midwest clients efficiently.
            Each office houses a dedicated team of financial experts ready to
            partner with you on your next big move.
          </p>
          <span className="mt-6 text-neutral-700  text-xl md:text-2xl tracking-tighter font-gambetta">
            We are located at:
          </span>
          {/* Info grid */}
          <div className="mt-4 grid grid-cols-1 gap-6">
            {locations.map(({ city, address, phone, hours }) => (
              <div
                key={city}
                className="bg-white tracking-tight p-6 md:p-8 rounded-md shadow-sm"
              >
                <h4 className="text-neutral-800 text-3xl md:text-4xl tracking-tighter font-gambetta">
                  {city}
                </h4>
                <p className="text-lg leading-7 text-neutral-600 mt-2">
                  {address}
                </p>
                <p className="text-lg leading-7 text-neutral-600 mt-2">
                  Phone:{" "}
                  <a href={`tel:${phone}`} className="hover:text-black">
                    {phone}
                  </a>
                </p>
                <p className="text-lg leading-7 text-neutral-600 mt-2">
                  Hours: {hours}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex items-center justify-center rounded-md bg-[#041E40] p-4">
          <div className="relative w-full h-64 sm:h-80 md:w-[85%] md:h-[75%]">
            <Image
              src="/stoc-map.png"
              fill
              alt="STOC map"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
