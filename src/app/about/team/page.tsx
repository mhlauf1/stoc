import React from "react";
import TeamMembers from "@/components/about/TeamMembers";
import { sanityFetch } from "@/sanity/lib/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import type { TeamMemberDoc } from "@/sanity/lib/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | STOC Advisory",
  description:
    "Meet the STOC Advisory team: experienced transaction advisory, corporate development, and finance professionals serving clients nationwide.",
};

const TeamPage = async () => {
  const members = await sanityFetch<TeamMemberDoc[]>({
    query: TEAM_MEMBERS_QUERY,
  });

  return (
    <main className="pt-[12vh]">
      <TeamMembers members={members} />
    </main>
  );
};

export default TeamPage;
