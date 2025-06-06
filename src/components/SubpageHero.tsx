import React from "react";
import Image from "next/image";

const SubpageHero = ({
  title,
  sub1,
  src,
  bullets,
  sub2,
}: {
  title: string;
  sub1: string;
  src: string;
  bullets?: string[];
  sub2?: string;
}) => {
  return (
    <main>
      <section className="relative h-[95vh] bg-white flex">
        <div className="px-6  flex flex-col md:flex-row  items-center w-full md:px-12 h-full lg:px-32">
          <div className="flex items-start gap-6 flex-1 flex-col">
            <h1 className="text-5xl text-start tracking-tight md:max-w-[20ch] md:text-6xl font-gambetta lg:text-7xl leading-tight ">
              {title}
            </h1>
            <div className="flex-col gap-4 w-full h-auto flex flex-1">
              <p className="text-start text-md md:text-lg leading-8 md:max-w-[74ch] text-neutral-600">
                {sub1}
              </p>
              {bullets && (
                <ul className="text-start list-disc text-md  leading-8 md:max-w-[64ch] text-neutral-600">
                  {bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              {sub2 ? (
                <p className="text-start text-md md:text-lg leading-8 md:max-w-[74ch] text-neutral-600">
                  {sub2}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex justify-end flex-1">
            <Image
              src={src}
              className="h-[620px] object-cover rounded-xl"
              alt="Meet the STOC Team"
              height={620}
              width={660}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SubpageHero;
