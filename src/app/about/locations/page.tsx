import Hero from "@/components/about/locations/Hero";
import { sanityFetch } from "@/sanity/lib/client";
import { OFFICE_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import type { Office } from "@/sanity/lib/types";

const page = async () => {
  const offices = await sanityFetch<Office[]>({ query: OFFICE_LOCATIONS_QUERY });

  return (
    <main>
      <Hero offices={offices} />
    </main>
  );
};

export default page;
