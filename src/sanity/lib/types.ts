// Typed shapes for Sanity-fetched documents (projections defined in queries.ts).

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
  sourceType: "pdf" | "url";
  externalUrl?: string;
  pdfUrl?: string;
  coverImageUrl?: string;
  coverImageAlt?: string;
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
