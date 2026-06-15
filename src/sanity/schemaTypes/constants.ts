// Shared option lists reused by schema dropdowns AND front-end filtering.
// Keeping these in one place means Studio choices and the eventual Insights
// filter UI never drift apart.

// Industry verticals — `value` matches the industry page slug so Insights can
// be cross-linked/filtered by vertical without a lookup table.
export const INDUSTRY_OPTIONS = [
  { title: "Business Services", value: "business-services" },
  { title: "Healthcare", value: "healthcare" },
  { title: "Hospitality & Entertainment", value: "hospitality-entertainment" },
  { title: "Manufacturing & Distribution", value: "manufacturing-distribution" },
  { title: "Retail & Consumer Products", value: "retail-consumer-products" },
  {
    title: "Technology, Media & Telecommunications",
    value: "technology-media-telecommunications",
  },
  { title: "Cross-Industry", value: "cross-industry" },
] as const;

// Insight content types.
export const CONTENT_TYPE_OPTIONS = [
  { title: "Market Landscape Report", value: "market-landscape-report" },
  { title: "White Paper", value: "white-paper" },
  { title: "Video", value: "video" },
] as const;

// Icon keys available to service/industry documents. Maps to Lucide icons in
// src/utils/icons.ts (Sanity cannot store React components).
export const ICON_OPTIONS = [
  { title: "Trending Up", value: "trendingUp" },
  { title: "Handshake", value: "handshake" },
  { title: "Rocket", value: "rocket" },
  { title: "Bar Chart", value: "barChart3" },
  { title: "Briefcase", value: "briefcase" },
  { title: "Medical", value: "briefcaseMedical" },
  { title: "Music", value: "music" },
  { title: "Box / Package", value: "box" },
  { title: "Shopping Cart", value: "shoppingCart" },
  { title: "TV / Media", value: "tv2" },
] as const;
