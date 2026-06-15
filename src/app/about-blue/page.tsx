import Hero from "@/components/about/HeroBlue";
import Mission from "@/components/about/Mission";
import TeamMembers from "@/components/about/TeamMembers";
import { sanityFetch } from "@/sanity/lib/client";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/queries";
import type { TeamMemberDoc } from "@/sanity/lib/types";

export default async function About2() {
  const members = await sanityFetch<TeamMemberDoc[]>({
    query: TEAM_MEMBERS_QUERY,
  });

  return (
    <main>
      <Hero />
      <Mission />
      <TeamMembers members={members} />
    </main>
  );
}
