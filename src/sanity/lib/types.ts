// Typed shapes for Sanity-fetched documents (projections defined in queries.ts).
import type { SanityImageSource } from "@sanity/image-url";

export interface Office {
  _id: string;
  city: string;
  streetAddress: string;
  cityStateZip: string;
  phone: string;
}

export interface TeamMemberDoc {
  _id: string;
  name: string;
  title?: string;
  location?: string;
  imageUrl: string;
}

// Raw shape returned by TEAM_MEMBERS_QUERY (image object with hotspot/crop);
// the team page resolves it to a sized imageUrl before rendering.
export interface TeamMemberRaw extends Omit<TeamMemberDoc, "imageUrl"> {
  image: SanityImageSource;
}

export interface ServiceDoc {
  _id: string;
  title: string;
  slug: string;
  iconKey?: string;
  description?: string;
  longDesc?: string;
  href?: string;
  imageUrl?: string;
}

export interface IndustryDoc {
  _id: string;
  title: string;
  slug: string;
  iconKey?: string;
  badge?: string;
  supportText?: string;
  tags?: string[];
  desc1?: string;
  desc2?: string;
  href?: string;
  imageUrl?: string;
}

export type ContentType =
  | "market-landscape-report"
  | "white-paper"
  | "video";

export interface InsightDoc {
  _id: string;
  title: string;
  slug: string;
  industry: string;
  contentType: ContentType;
  author: string;
  publishDate: string;
  description: string;
  featured?: boolean;
  sourceType: "pdf" | "url" | "report";
  reportSlug?: string;
  externalUrl?: string;
  pdfUrl?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
}

export interface PressReleaseDoc {
  _id: string;
  title: string;
  seoTitle?: string;
  slug: string;
  publishDate: string;
  dateline?: string;
  excerpt: string;
  featured?: boolean;
  sourceUrl?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
  body?: unknown[]; // Portable Text blocks (detail query only)
}

export interface JobPostingDoc {
  _id: string;
  title: string;
  slug: string;
  department?: string;
  employmentType?: string;
  postedDate?: string;
  applyUrl?: string;
  applyEmail?: string;
  location?: string;
  description?: unknown[]; // Portable Text blocks
}
