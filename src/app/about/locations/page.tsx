import Hero from "@/components/about/locations/Hero";
import { sanityFetch } from "@/sanity/lib/client";
import { OFFICE_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import type { Office } from "@/sanity/lib/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offices: Baltimore, Dallas, Minneapolis & More | STOC Advisory",
  description:
    "STOC Advisory office locations: Baltimore, MD; Dallas, TX; Minneapolis, MN; Nashville, TN; and Ponte Vedra Beach, FL. National client coverage.",
};

const page = async () => {
  const offices = await sanityFetch<Office[]>({ query: OFFICE_LOCATIONS_QUERY });

  return (
    <main>
      <Hero offices={offices} />
    </main>
  );
};

export default page;
