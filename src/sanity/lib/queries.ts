import { defineQuery } from "next-sanity";

// ---------- Insights ----------

const insightFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  industry,
  contentType,
  author,
  publishDate,
  description,
  featured,
  sourceType,
  externalUrl,
  "pdfUrl": pdfFile.asset->url,
  "coverImageUrl": coverImage.asset->url,
  "coverImageAlt": coverImage.alt
`;

// All insights, featured first, then newest. The page picks the featured item
// for the hero block and renders the rest as a grid.
export const INSIGHTS_QUERY = defineQuery(/* groq */ `
  *[_type == "insight"] | order(featured desc, publishDate desc) {
    ${insightFields}
  }
`);

// Contextual cross-link query. Pass $industry and/or $contentType (or null to
// ignore that filter). Used by RelatedInsights on service/industry pages.
export const RELATED_INSIGHTS_QUERY = defineQuery(/* groq */ `
  *[_type == "insight"
    && ($industry == null || industry == $industry)
    && ($contentType == null || contentType == $contentType)
  ] | order(publishDate desc) [0...$limit] {
    ${insightFields}
  }
`);

// ---------- Job postings ----------

export const JOB_POSTINGS_QUERY = defineQuery(/* groq */ `
  *[_type == "jobPosting" && active == true] | order(postedDate desc) {
    _id,
    title,
    "slug": slug.current,
    department,
    employmentType,
    postedDate,
    applyUrl,
    applyEmail,
    "location": location->city,
    description
  }
`);

// ---------- Office locations ----------

export const OFFICE_LOCATIONS_QUERY = defineQuery(/* groq */ `
  *[_type == "officeLocation"] | order(orderRank asc) {
    _id, city, streetAddress, cityStateZip, phone
  }
`);

// ---------- Team ----------

export const TEAM_MEMBERS_QUERY = defineQuery(/* groq */ `
  *[_type == "teamMember"] | order(orderRank asc) {
    _id, name, title, location,
    "imageUrl": image.asset->url
  }
`);

// ---------- Services ----------

export const SERVICES_QUERY = defineQuery(/* groq */ `
  *[_type == "service"] | order(orderRank asc) {
    _id, title, "slug": slug.current, iconKey, description, longDesc, href,
    "imageUrl": image.asset->url
  }
`);

// ---------- Industries ----------

export const INDUSTRIES_QUERY = defineQuery(/* groq */ `
  *[_type == "industry"] | order(orderRank asc) {
    _id, title, "slug": slug.current, iconKey, badge, supportText, tags,
    desc1, desc2, href,
    "imageUrl": image.asset->url
  }
`);
