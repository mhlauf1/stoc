import React from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type Bullet = {
  id: number;
  title: string;
};

const bullets: Bullet[] = [
  {
    id: 0,
    title: "Empower Your Team",
  },
  {
    id: 1,
    title: "Future-Proof Your Tech Stack",
  },
  {
    id: 2,
    title: "Streamline & Automate",
  },
];

interface ValuePillarProps {
  title: string;
  text: string;
  Icon: LucideIcon;
}

const ValuePillar: React.FC<ValuePillarProps> = ({ title, text, Icon }) => (
  <div className="flex flex-row  gap-4  items-start justify-start">
    {/* <Icon className="size-5 text-[#16333A]" /> */}
    <div className="space-y-1 w-full">
      <h3 className="text-2xl md:text-3xl text-start font-gambetta italic">
        {title}
      </h3>
      <p className="text-neutral-600 text-start mt-2 max-w-[48ch] leading-relaxed">
        {text}
      </p>
    </div>
  </div>
);

const Intro: React.FC = () => (
  <section className="px-6 bg-linear-to-r from-[#F7F7F7] to-[#ebebeb] mb-12 md:mb-24 md:px-12 lg:px-32 py-12 md:py-16">
    <div className="flex justify-between items-center gap-16 flex-col md:flex-row ">
      <div className="flex flex-1 flex-col">
        <h2 className="text-3xl tracking-tighter  md:text-4xl font-gambetta leading-normal">
          Unlock New Revenue Streams
        </h2>
        <div className="flex flex-col mt-4">
          <p className="leading-7 md:leading-8 text-start md:max-w-[64ch] text-md md:text-lg text-neutral-600">
            Data-driven go-to-market playbooks that convert prospects into
            long-term customers.
          </p>
          <div className="flex flex-col gap-4 mt-8">
            {bullets.map((item) => (
              <div className="flex flex-row items-center gap-3">
                <div className="h-[1px] w-[15px] rounded bg-neutral-600"></div>
                <span className="leading-7 md:leading-8 text-start md:max-w-[64ch] text-lg md:text-2xl text-neutral-500">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-end flex-1">
        <Image
          src="/sean-sam.png"
          alt="Meet the STOC Team"
          width={660}
          height={420}
          className="rounded-2xl h-[750px] object-bottom object-cover"
        />
      </div>
    </div>
  </section>
);

export default Intro;
