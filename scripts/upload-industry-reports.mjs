// Upload: the 2026 industry report PDFs (from docs/) as Sanity
// file assets, plus their insight documents (sourceType "report") so they
// appear in the Industry Reports section on /insights.
//
// Run with:  node scripts/upload-industry-reports.mjs
// Requires SANITY_API_WRITE_TOKEN in .env.local (loaded below).
//
// Idempotent: documents use deterministic _id values (createOrReplace) and
// Sanity deduplicates assets by content hash, so re-running is safe.

import { createClient } from "@sanity/client";
import { readFileSync, createReadStream } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function loadEnv() {
  const env = {};
  try {
    const raw = readFileSync(join(ROOT, ".env.local"), "utf8");
    for (const line of raw.split("\n")) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
      if (m) env[m[1]] = m[2];
    }
  } catch {}
  return env;
}

const env = loadEnv();
const token = process.env.SANITY_API_WRITE_TOKEN || env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID || "seusdtab",
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-06-01",
  token,
  useCdn: false,
});

const REPORTS = [
  {
    slug: "us-veterinary-services-2026",
    pdf: "Veterinary Services.pdf",
    pdfName: "STOC_US_Veterinary_Services_Market_Report_2026.pdf",
    title: "U.S. Veterinary Services Market Report 2026",
    industry: "healthcare",
    publishDate: "2026-05-01",
    description:
      "A national acquisition-universe view of U.S. veterinary services: regional opportunity landscape, platform and chain activity, provider depth, and operating signals across scaled and focused sourcing markets.",
  },
  {
    slug: "us-medical-aesthetics-2026",
    pdf: "Medical Aesthetics.pdf",
    pdfName: "STOC_US_Medical_Aesthetics_Market_Report_2026.pdf",
    title: "U.S. Medical Aesthetics Market Report 2026",
    industry: "healthcare",
    publishDate: "2026-02-01",
    description:
      "Geographic and supply intelligence for the U.S. medical aesthetics market: 640 CBSAs mapped, market typology by density and structure, PE consolidation landscape, and digital maturity signals.",
  },
  {
    slug: "us-commercial-landscaping-2026",
    pdf: "Commercial Landscaping.pdf",
    pdfName: "STOC_US_Commercial_Landscaping_Market_Report_2026.pdf",
    title: "U.S. Commercial Landscaping Market Report 2026",
    industry: "business-services",
    publishDate: "2026-05-01",
    description:
      "Market context, platform landscape, and a proprietary target universe for U.S. commercial landscaping: national supply map, regional concentration, route density, and sourcing readiness.",
  },
  {
    slug: "us-pest-control-2026",
    pdf: null,
    title: "U.S. Pest Control Market Report 2026",
    industry: "business-services",
    publishDate: "2026-10-01",
    description:
      "Independent supply and consolidation runway in U.S. pest control: priority consolidation markets, the platform and sponsor landscape, a national supply map, and service-line ownership signals.",
  },
  {
    slug: "us-funeral-homes-2026",
    pdf: null,
    title: "U.S. Funeral Homes Market Report 2026",
    industry: "business-services",
    publishDate: "2026-10-01",
    description:
      "Independent supply and succession-driven sourcing in U.S. funeral homes: priority markets, the consolidator landscape, cremation economics, and a state-by-state opportunity table.",
  },
];

const COVER_IMAGE = join(ROOT, "public/reports-html/us-veterinary-services-2026/cover-photo.jpg");

async function main() {
  const coverAsset = await client.assets.upload(
    "image",
    createReadStream(COVER_IMAGE),
    { filename: "industry-report-cover.jpg" }
  );
  console.log("cover image asset:", coverAsset._id);

  for (const r of REPORTS) {
    // Reports without a PDF get a card with Read Report only.
    let asset = null;
    if (r.pdf) {
      const pdfPath = join(ROOT, "docs", r.pdf);
      asset = await client.assets.upload("file", createReadStream(pdfPath), {
        filename: r.pdfName,
        contentType: "application/pdf",
      });
      console.log(`${r.slug}: pdf asset ${asset._id}`);
      console.log(`  url: ${asset.url}`);
    }

    const doc = {
      _id: `report-${r.slug}`,
      _type: "insight",
      title: r.title,
      slug: { _type: "slug", current: r.slug },
      industry: r.industry,
      contentType: "market-landscape-report",
      author: "STOC Advisory",
      publishDate: r.publishDate,
      description: r.description,
      sourceType: "report",
      reportSlug: r.slug,
      ...(asset && {
        pdfFile: {
          _type: "file",
          asset: { _type: "reference", _ref: asset._id },
        },
      }),
      coverImage: {
        _type: "image",
        asset: { _type: "reference", _ref: coverAsset._id },
        alt: `${r.title} cover`,
      },
      featured: false,
    };
    await client.createOrReplace(doc);
    console.log(`  doc report-${r.slug} created/replaced`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
