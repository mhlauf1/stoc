import React from "react";
import TeamMembers from "@/components/about/TeamMembers";
import { sanityFetch } from "@/sanity/lib/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { TeamMemberDoc, TeamMemberRaw } from "@/sanity/lib/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | STOC Advisory",
  description:
    "Meet the STOC Advisory team: experienced transaction advisory, corporate development, and finance professionals serving clients nationwide.",
};

const TeamPage = async () => {
  const raw = await sanityFetch<TeamMemberRaw[]>({
    query: TEAM_MEMBERS_QUERY,
  });

  // Headshots are displayed as squares in a 3-column grid. Ask Sanity for a
  // hotspot-aware 1:1 crop capped at 1200px so the image optimizer never has
  // to pull the full 2400px originals (some are >1MB).
  const members: TeamMemberDoc[] = raw.map(({ image, ...rest }) => ({
    ...rest,
    imageUrl: urlFor(image)
      .width(1200)
      .height(1200)
      .fit("crop")
      .auto("format")
      .quality(80)
      .url(),
  }));

  return (
    <main className="pt-[12vh]">
      <TeamMembers members={members} />
    </main>
  );
};

export default TeamPage;
