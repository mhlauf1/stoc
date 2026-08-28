import { sanityFetch } from "@/sanity/lib/client";
import { OFFICE_LOCATIONS_QUERY } from "@/sanity/lib/queries";
import type { Office } from "@/sanity/lib/types";

// "Baltimore, MD 21201" -> { addressLocality, addressRegion, postalCode }
const parseCityStateZip = (cityStateZip: string) => {
  const m = cityStateZip.match(/^(.+?),\s*([A-Z]{2})\s*(\d{5}(?:-\d{4})?)?$/);
  if (!m) return null;
  return {
    addressLocality: m[1],
    addressRegion: m[2],
    ...(m[3] ? { postalCode: m[3] } : {}),
  };
};

// Site-wide schema.org ProfessionalService block (SEO structured data),
// populated from the Sanity officeLocation documents.
const OrgJsonLd = async () => {
  let offices: Office[] = [];
  try {
    offices = await sanityFetch<Office[]>({ query: OFFICE_LOCATIONS_QUERY });
  } catch {
    // Structured data is non-critical; render the org block without locations.
  }

  // First office (orderRank) is the Towson, MD headquarters.
  const mainPhone = offices[0]?.phone;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "STOC Advisory",
    url: "https://www.stocadvisory.com",
    description:
      "National M&A transaction advisory firm providing Quality of Earnings, financial due diligence, and corporate development support to middle-market businesses and private equity sponsors.",
    ...(mainPhone ? { telephone: mainPhone } : {}),
    sameAs: ["https://www.linkedin.com/company/stoc-advisory/"],
    areaServed: "US",
    location: offices.map((o) => ({
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: o.streetAddress,
        ...(parseCityStateZip(o.cityStateZip) ?? {
          addressLocality: o.cityStateZip,
        }),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default OrgJsonLd;
