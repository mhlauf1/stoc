import ContactClient from "@/components/contact/ContactClient";
import { sanityFetch } from "@/sanity/lib/client";
import { OFFICE_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import type { Office } from "@/sanity/lib/types";

export default async function ContactPage() {
  const offices = await sanityFetch<Office[]>({ query: OFFICE_LOCATIONS_QUERY });

  return <ContactClient offices={offices} />;
}
