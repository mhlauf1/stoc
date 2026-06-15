// Creates a few PUBLISHED sample documents (insights + a job posting) so the
// Insights and Careers pages can be verified end-to-end. Safe to delete these
// later from Studio. Re-runnable (deterministic _id + createOrReplace).

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const env = {};
for (const line of readFileSync(join(ROOT, ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2];
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-01",
  token: env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const insights = [
  {
    _id: "insight-sample-healthcare-landscape",
    title: "2026 Healthcare Services Market Landscape",
    slug: "2026-healthcare-services-market-landscape",
    industry: "healthcare",
    contentType: "market-landscape-report",
    author: "STOC Research",
    publishDate: "2026-06-01",
    description:
      "An overview of consolidation trends, reimbursement pressure, and the deal environment shaping healthcare services investing in 2026.",
    sourceType: "url",
    externalUrl: "https://www.stocadvisory.com",
    featured: true,
  },
  {
    _id: "insight-sample-tas-diligence",
    title: "Operational Due Diligence: A Buyer's Playbook",
    slug: "operational-due-diligence-buyers-playbook",
    industry: "cross-industry",
    contentType: "white-paper",
    author: "STOC Research",
    publishDate: "2026-05-15",
    description:
      "How integrated financial and operational diligence surfaces value-creation levers and de-risks the transaction before close.",
    sourceType: "url",
    externalUrl: "https://www.stocadvisory.com",
    featured: false,
  },
  {
    _id: "insight-sample-cds-sourcing",
    title: "Proprietary Deal Sourcing in Manufacturing",
    slug: "proprietary-deal-sourcing-manufacturing",
    industry: "manufacturing-distribution",
    contentType: "market-landscape-report",
    author: "STOC Research",
    publishDate: "2026-04-20",
    description:
      "A look at how corporate development teams build differentiated sourcing pipelines across fragmented manufacturing verticals.",
    sourceType: "url",
    externalUrl: "https://www.stocadvisory.com",
    featured: false,
  },
];

const job = {
  _id: "job-sample-tas-associate",
  _type: "jobPosting",
  title: "Associate, Transaction Advisory Services",
  slug: { _type: "slug", current: "associate-transaction-advisory-services" },
  department: "Transaction Advisory Services",
  employmentType: "full-time",
  postedDate: "2026-06-01",
  applyEmail: "careers@stocadvisory.com",
  active: true,
  description: [
    {
      _type: "block",
      _key: "b1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "s1",
          text: "Support buy- and sell-side financial due diligence engagements across STOC's core verticals. Strong analytical skills and 1-3 years of relevant experience required.",
        },
      ],
    },
  ],
};

async function run() {
  for (const i of insights) {
    const { _id, slug, ...rest } = i;
    await client.createOrReplace({
      _id,
      _type: "insight",
      slug: { _type: "slug", current: slug },
      ...rest,
    });
    console.log("insight:", _id);
  }
  await client.createOrReplace(job);
  console.log("job:", job._id);
  console.log("Done.");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
