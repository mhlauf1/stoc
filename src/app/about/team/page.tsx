import React from "react";
import CTA from "@/components/CTA";
import TeamMembers from "@/components/about/TeamMembers";

const TeamPage = () => {
  return (
    <main className="pt-[12vh]">
      <TeamMembers />
      <CTA />
    </main>
  );
};

export default TeamPage;
