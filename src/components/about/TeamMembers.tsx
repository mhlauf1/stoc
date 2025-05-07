import React from "react";
import { teamMeberData } from "@/utils/data";
import type { TeamMemberProps } from "@/utils/types";
import Image from "next/image";

const TeamMember = ({ id, name, image, location }: TeamMemberProps) => (
  <div key={id} className="flex flex-col items-start">
    <div className="relative w-full max-h-[700px] h-[700px] flex-1 aspect-square">
      <Image fill src={image} alt={name} className="rounded-lg object-cover" />
      <div className="absolute top-4 right-4 bg-white py-2 px-5 rounded-full">
        <p className="text-sm text-neutral-500">{location}</p>
      </div>
    </div>
    <h3 className="mt-4 text-xl md:text-2xl lg:text-3xl font-gambetta tracking-tighter ">
      {name}
    </h3>
  </div>
);

const TeamMembers = () => {
  return (
    <section className="px-6 flex flex-col gap-8 items-start md:px-12 lg:px-32 pb-24 md:pb-32">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-gambetta tracking-tighter leading-tight max-w-[24ch]">
        Meet the team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
        {teamMeberData.map((item) => (
          <div key={item.id}>
            <TeamMember
              id={item.id}
              name={item.name}
              location={item.location}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
