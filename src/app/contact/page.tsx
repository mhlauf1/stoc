import ContactClient from "@/components/contact/ContactClient";
import { sanityFetch } from "@/sanity/lib/client";
import { OFFICE_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import type { Office } from "@/sanity/lib/types";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact STOC Advisory",
  description:
    "Contact STOC Advisory to discuss transaction advisory, quality of earnings, or corporate development needs. Offices in five U.S. markets.",
};

export default async function ContactPage() {
  const offices = await sanityFetch<Office[]>({ query: OFFICE_LOCATIONS_QUERY });

  return <ContactClient offices={offices} />;
}
