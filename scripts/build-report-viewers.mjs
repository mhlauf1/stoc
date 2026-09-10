// Builds the served industry-report pages from the pristine client HTML in
// docs/report-sources/. For each report it:
//   - localizes hot-linked raw.githubusercontent.com images (fragile if the
//     source repo goes private) and the external us-states geojson
//   - adds <base> so relative assets resolve under /reports-html/<slug>/
//   - adds a viewport meta tag (the documents are print-layout A4 pages)
//   - adds schema.org Report JSON-LD (structured data for search/AI crawlers)
//   - injects the shared STOC viewer chrome (top bar, side nav, GA4)
// and writes public/reports-html/<slug>/index.html.
//
// The pages are served at /insights/reports/<slug> via next.config rewrites.
// Re-run after replacing a source file:  node scripts/build-report-viewers.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const REPORTS = [
  {
    slug: "us-veterinary-services-2026",
    datePublished: "2026-05-01",
    title: "U.S. Veterinary Services Market Report 2026",
    description:
      "Proprietary 2026 report on the U.S. veterinary services market: national acquisition universe, platform and chain activity analysis.",
    pdfUrl:
      "https://cdn.sanity.io/files/seusdtab/production/e7a2c85251dbb46a0508258053b41576f313a8e9.pdf",
    pdfName: "STOC_US_Veterinary_Services_Market_Report_2026.pdf",
    toc: [
      { label: "Cover", page: 1 },
      { label: "Executive Market Thesis", page: 5, group: "Universe & Screens" },
      { label: "Regional Opportunity Landscape", page: 6, group: "Regional Intelligence" },
      { label: "Regulatory Execution Overlay", page: 7, group: "Regional Intelligence" },
      { label: "Platform and Chain Activity", page: 8, group: "Regional Intelligence" },
      { label: "Scaled Sourcing Markets", page: 9, group: "Market Depth" },
      { label: "Focused Opportunity Markets", page: 10, group: "Market Depth" },
      { label: "Service-Area Positioning", page: 11, group: "Market Drivers" },
      { label: "Competitive Pressure and Diligence Intensity", page: 12, group: "Market Drivers" },
      { label: "Observable Operating Signals", page: 13, group: "Operating Overlay" },
      { label: "Provider Depth and Staff Scale", page: 14, group: "Operating Overlay" },
      { label: "Customer Access and Social Visibility", page: 15, group: "Operating Overlay" },
      { label: "Service Category Signals", page: 16, group: "Operating Overlay" },
      { label: "CBSA Operating Overlay", page: 17, group: "Operating Overlay" },
      { label: "Acquisition vs. New-Location Review", page: 18, group: "Expansion Framework" },
      { label: "Methodology Notes", page: 19, group: "Appendix" },
      { label: "How CDS Translates Into Deals", page: 20, group: "Appendix" },
      { label: "Key Contacts", page: 21, group: "Appendix" },
    ],
  },
  {
    slug: "us-medical-aesthetics-2026",
    datePublished: "2026-02-01",
    title: "U.S. Medical Aesthetics Market Report 2026",
    description:
      "Proprietary 2026 report on the U.S. medical aesthetics market: geographic supply intelligence and the PE consolidation landscape.",
    pdfUrl:
      "https://cdn.sanity.io/files/seusdtab/production/6078845ca37b9802a2b3da2036f1e548b215a67e.pdf",
    pdfName: "STOC_US_Medical_Aesthetics_Market_Report_2026.pdf",
    toc: [
      { label: "Cover", page: 1 },
      { label: "Dataset Architecture and Signal Methodology", page: 5, group: "Dataset and Methodology" },
      { label: "Geographic Intelligence: 640 CBSAs Mapped", page: 6, group: "Geographic Intelligence" },
      { label: "Market Typology: CBSA Classification", page: 7, group: "Geographic Intelligence" },
      { label: "Nearest Supply Analysis: Proximity and Supply Gap", page: 8, group: "Supply Analysis" },
      { label: "PE Consolidation Landscape", page: 9, group: "Consolidation Landscape" },
      { label: "CBSA Intelligence: Selected Market Profiles", page: 10, group: "Market Intelligence" },
      { label: "Digital Maturity Landscape", page: 11, group: "Digital Intelligence" },
      { label: "How CDS Translates Into Deals", page: 12, group: "Corporate Development" },
    ],
  },
  {
    slug: "us-commercial-landscaping-2026",
    datePublished: "2026-05-01",
    title: "U.S. Commercial Landscaping Market Report 2026",
    description:
      "Proprietary 2026 report on the U.S. commercial landscaping market: platform landscape, supply mapping, and acquisition-target universe.",
    pdfUrl:
      "https://cdn.sanity.io/files/seusdtab/production/4a52f018cffa5f79db35a4a783f888910864adcc.pdf",
    pdfName: "STOC_US_Commercial_Landscaping_Market_Report_2026.pdf",
    toc: [
      { label: "Cover", page: 1 },
      { label: "Executive Summary / Thesis", page: 5, group: "Part I: Market Context" },
      { label: "Market Size, Growth, and Fragmentation", page: 6, group: "Part I: Market Context" },
      { label: "Market Structure and Consolidation", page: 7, group: "Part I: Market Context" },
      { label: "Platform Acquisition Strategy and Buyer Criteria", page: 8, group: "Part II: Platform Landscape" },
      { label: "Platform Activity vs. Independent Supply", page: 9, group: "Part II: Platform Landscape" },
      { label: "Proprietary Target Universe Overview", page: 10, group: "Part III: Target Universe" },
      { label: "National Supply Map", page: 11, group: "Part III: Target Universe" },
      { label: "Regional and State Concentration", page: 12, group: "Part III: Target Universe" },
      { label: "Add-On Market Opportunity", page: 13, group: "Part III: Target Universe" },
      { label: "Route Density and Clustering", page: 14, group: "Part III: Target Universe" },
      { label: "Visible Supply-Gap Signals", page: 15, group: "Part III: Target Universe" },
      { label: "Target Prioritization and Visibility", page: 16, group: "Part IV: Prioritization" },
      { label: "Service-Line Visibility", page: 17, group: "Part IV: Prioritization" },
      { label: "Sourcing Readiness with STOC Advisory", page: 18, group: "Part IV: Prioritization" },
      { label: "Strategic Implications and Next Steps", page: 19, group: "Part V: Strategic Implications" },
      { label: "Methodology Appendix", page: 20, group: "Part V: Strategic Implications" },
    ],
  },
];

for (const r of REPORTS) {
  const src = join(ROOT, "docs/report-sources", `${r.slug}.html`);
  let html = readFileSync(src, "utf8");

  // Localize hot-linked assets (all reports share the same asset filenames).
  html = html.replace(
    /https:\/\/raw\.githubusercontent\.com\/skulkar8-debug\/[a-z0-9-]+\/main\/([A-Za-z0-9._-]+)/g,
    "$1"
  );
  html = html.replace(
    /https:\/\/raw\.githubusercontent\.com\/PublicaMundi\/MappingAPI\/master\/data\/geojson\/us-states\.json/g,
    "/reports-html/us-states.json"
  );

  // Head additions: base for relative assets, viewport, viewer stylesheet.
  html = html.replace(
    /<head>/i,
    `<head>\n<base href="/reports-html/${r.slug}/">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<meta name="description" content="${r.description}">`
  );
  const pageUrl = `https://www.stocadvisory.com/insights/reports/${r.slug}`;
  const org = {
    "@type": "Organization",
    name: "STOC Advisory",
    url: "https://www.stocadvisory.com",
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Report",
    "@id": pageUrl,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    headline: r.title,
    name: r.title,
    description: r.description,
    datePublished: r.datePublished,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: org,
    publisher: org,
    encoding: {
      "@type": "MediaObject",
      encodingFormat: "application/pdf",
      contentUrl: r.pdfUrl,
      name: r.pdfName,
    },
  };
  html = html.replace(
    /<\/head>/i,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n` +
      `<link rel="stylesheet" href="/reports-html/viewer.css">\n</head>`
  );

  // Body additions: viewer config + script.
  const config = {
    slug: r.slug,
    title: r.title,
    pdfUrl: r.pdfUrl,
    pdfName: r.pdfName,
    logo: `/reports-html/${r.slug}/stoc-logo-white.png`,
    toc: r.toc,
  };
  html = html.replace(
    /<\/body>/i,
    `<script>window.STOC_REPORT = ${JSON.stringify(config)};</script>\n` +
      `<script src="/reports-html/viewer.js"></script>\n</body>`
  );

  const out = join(ROOT, "public/reports-html", r.slug, "index.html");
  writeFileSync(out, html);
  console.log(`built ${out}`);
}
