// src/components/TeamMembers.tsx
"use client";
import React from "react";
import type { TeamMemberDoc } from "@/sanity/lib/types";
import Image from "next/image";

const TeamMember = ({ name, imageUrl, location, title }: TeamMemberDoc) => (
  <div className="flex flex-col items-start">
    <div className="relative w-full max-h-[700px] h-[700px] flex-1 aspect-square">
      <Image
        fill
        src={imageUrl}
        alt={name}
        className="rounded-lg object-cover"
      />
    </div>
    <div className="py-4 w-full bg-white">
      <p className="text-sm tracking-tight text-neutral-600">{location}</p>
      <h3 className="text-xl mt-1 md:text-2xl lg:text-3xl font-gambetta tracking-tight">
        {name}
      </h3>
      <p className="text-md md:text-lg font-gambetta tracking-tight text-neutral-700">
        {title}
      </p>
    </div>
  </div>
);

const TeamMembers: React.FC<{ members: TeamMemberDoc[] }> = ({ members }) => {
  return (
    <section className="px-6 flex flex-col gap-8 items-start md:px-12 lg:px-32 pb-24 md:pb-32">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-gambetta tracking-tight leading-tight max-w-[24ch]">
        Meet the team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12 md:grid-cols-3">
        {members.map((item) => (
          <div key={item._id}>
            <TeamMember {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
