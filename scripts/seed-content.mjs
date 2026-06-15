// One-time seed: migrates the hardcoded STOC content (services, industries,
// team, office locations) from src/utils into Sanity, uploading the existing
// /public images as Sanity assets.
//
// Run with:  node scripts/seed-content.mjs
// Requires SANITY_API_WRITE_TOKEN in .env.local (loaded below).
//
// Idempotent: documents use deterministic _id values (createOrReplace) and
// Sanity deduplicates image assets by content hash, so re-running is safe.

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

// Minimal .env.local loader (avoids adding a dotenv dependency).
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
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-06-01",
  token,
  useCdn: false,
});

// Cache asset uploads within a run so the same file isn't uploaded twice.
const assetCache = new Map();
async function uploadImage(fileName) {
  if (assetCache.has(fileName)) return assetCache.get(fileName);
  const filePath = join(PUBLIC, fileName);
  const asset = await client.assets.upload("image", readFileSync(filePath), {
    filename: basename(fileName),
  });
  const ref = { _type: "image", asset: { _type: "reference", _ref: asset._id } };
  assetCache.set(fileName, ref);
  console.log(`  uploaded ${fileName} -> ${asset._id}`);
  return ref;
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// ---------- Source data (mirrors src/utils/data.ts & locations.ts) ----------

const services = [
  {
    title: "Transaction Advisory Services",
    slug: "transaction-advisory-services",
    iconKey: "trendingUp",
    description:
      "Conduct comprehensive financial and operational due diligence to maximize deal value and mitigate risks.",
    longDesc:
      "Whether buying, building, or exiting an investment, every transaction possesses a certain degree of risk. STOC Advisory's integrated due diligence approach helps clients mitigate risk and maximize the value of a transaction. We apply deep industry expertise to an integrated financial and operational due diligence approach, effectively advising clients of key deal considerations to achieve each opportunity's full potential. Through a robust process, we provide proven results unanimous to each transaction to maximize value.",
    image: "tas-1.jpeg",
    href: "/services/transaction-advisory-services",
  },
  {
    title: "Corporate Development Support",
    slug: "corporate-development-support",
    iconKey: "handshake",
    description:
      "Identify and execute strategic acquisitions, divestitures, and integrations for sustained growth.",
    longDesc:
      "With extensive industry experience and expertise, the Corporate Advisory team assists clients in the identification of opportunities resulting in maximum shareholder value through comprehensive research and financial analysis. STOC's Corporate Advisors offer timely and accurate advice through robust analysis to enable its clients to make critical business decision that position the company for future success.",
    image: "cds-1.jpeg",
    href: "/services/corporate-development-support",
  },
  {
    title: "Growth Enablement Services",
    slug: "growth-enablement-services",
    iconKey: "rocket",
    description:
      "Design and implement targeted initiatives that optimize operations and accelerate market expansion.",
    longDesc:
      "Design and implement targeted initiatives that optimize operations and accelerate market expansion.",
    image: "ges-1.jpeg",
    href: "/services/growth-enablement-services",
  },
  {
    title: "Finance & Data Intelligence",
    slug: "finance-data-intelligence",
    iconKey: "barChart3",
    description:
      "Connecting underwriting, operational performance, and exit readiness through decision-grade analytics.",
    longDesc:
      "STOC Advisory's Finance & Data Intelligence (FDI) offering helps private equity-backed and founder-led companies build a single, reliable view of performance across the deal and portfolio lifecycle. We partner alongside sponsors, CFOs, and operating leaders to centralize financial and operating data, link KPIs to EBITDA, and support better decisions from sourcing through exit.",
    image: "cds-main.jpg",
    href: "/services/finance-data-intelligence",
  },
];

const industries = [
  {
    title: "Business Services",
    slug: "business-services",
    iconKey: "briefcase",
    image: "about-close.jpg",
    tags: ["Performance improvement", "Value creation", "Financial analysis", "Revenue optimization"],
    badge: "Business & Professional Services",
    desc1:
      "The business services industry is experiencing rapid growth and disruption, and the fight for talent and differentiation is highly competitive. To truly stand out, businesses must embrace change and embark on frequent initiatives to best serve their clients' evolving needs.",
    desc2:
      "STOC has the understanding and expertise to analyze the revenue streams, costs, and the critical key performance indicators of what makes a services business profitable. We use this familiarity to assist transportation and logistics companies, advertising and marketing specialists, professional services firms, and other business service organizations with a broad range of financial and operational projects to optimize performance and value creation.",
    supportText: "Driving profitability and performance across diverse service-based businesses",
    href: "/industries/business-services",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    iconKey: "briefcaseMedical",
    image: "building-bg.jpg",
    tags: ["Operational optimization", "Regulatory compliance", "Revenue management"],
    badge: "Healthcare Industry Expertise",
    supportText: "600+ completed healthcare engagements with proven transaction outcomes",
    desc1:
      "The healthcare industry is changing fast, as complex and uncertain regulatory requirements, an aging population requiring increasingly expensive clinical and drug therapies, looming cybersecurity threats, ever-evolving payor models, and the rise of telemedicine and other technologies continue to disrupt the US healthcare system. As medical providers, insurers, and patients each adjust to the shifting marketplace; the industry must adapt to the current pace of change or risk getting left behind. Many stakeholders are staying relevant by facing these forces head-on through new clinical and operating models, aggressive revenue management and cost control, mergers and acquisitions, horizontal and vertical integration, and partnership strategies.",
    desc2:
      "We partner with companies across the healthcare industry—hospitals and healthcare systems, delivery providers, senior care facilities, medical suppliers, payors and health plans, and more—to identify opportunities and implement solutions to optimize both clinical and non-clinical operations. We understand healthcare organizations' evolving challenges and drive positive transformation to enable businesses to continue delivering the best care possible while growing the bottom line. Our focus on healthcare's operational complexities, regulatory requirements, reimbursement methodologies, and transaction services allows us to bring proven and practical capabilities to each engagement.",
    href: "/industries/healthcare",
  },
  {
    title: "Hospitality & Entertainment",
    slug: "hospitality-entertainment",
    iconKey: "music",
    image: "hospitality.png",
    tags: ["Mergers & acquisitions", "Debt restructuring", "Customer acquisition & retention"],
    supportText: "Guiding hospitality and entertainment brands through growth, financing, and digital evolution",
    badge: "Hospitality & Entertainment Industry Expertise",
    desc1:
      "Shifting global dynamics and a post-COVID environment define a shifting landscape for tourism and business travel. As a result, the hospitality and entertainment industry is forced to adapt and evolve for future growth. Marked by increased mergers and acquisitions activity and a high rate of new property development, industry players must meet these growing headwinds with innovative financing, debt restructuring, and partnership agreements. Meanwhile, competition among properties, brands, and service offerings and today's economic volatility present a constant challenge for hospitality organizations, resulting in the rapid evolution of marketing efforts, digital strategies, and operational initiatives aimed at increasing customer acquisition and retention.",
    href: "/industries/hospitality-entertainment",
  },
  {
    title: "Manufacturing & Distribution",
    slug: "manufacturing-distribution",
    iconKey: "box",
    image: "stoc-notebook.png",
    supportText: "Driving operational success across global manufacturing and distribution networks",
    tags: ["Supply chain optimization", "Operational strategy", "Global market insights"],
    badge: "Manufacturing & Distribution Industry Expertise",
    desc1:
      "The manufacturing and distribution sectors face rising production costs, supply chain transformations, and global market pressures. To remain competitive and build long-term success, companies must continuously adapt their strategies and operations.",
    desc2:
      "STOC partners with manufacturing and distribution firms worldwide, bringing financial and operational insights to support decision-making today and prepare for tomorrow. With a focus on collaboration and value creation, we help businesses navigate complexity and drive innovation.",
    href: "/industries/manufacturing-distribution",
  },
  {
    title: "Retail & Consumer Products",
    slug: "retail-consumer-products",
    iconKey: "shoppingCart",
    image: "cds-1.jpeg",
    tags: ["Consumer behavior insights", "Operational efficiency", "E-commerce strategy"],
    supportText: "Empowering retailers to thrive through digital transformation and operational excellence",
    badge: "Retail Industry Expertise",
    desc1:
      "Retail is evolving at an unprecedented pace, driven by technology adoption, shifts in consumer behavior, and the acceleration of e-commerce. Success today requires embracing innovation while prioritizing sustainability and customer experience.",
    desc2:
      "STOC helps retailers — from department stores to e-commerce platforms — adapt to these changes, optimize operations, and unlock growth opportunities. With experience across all segments, we bring insights that drive performance and future-proof strategies.",
    href: "/industries/retail-consumer-products",
  },
  {
    title: "Technology, Media, & Telecommunications",
    slug: "technology-media-telecommunications",
    iconKey: "tv2",
    image: "tas-1.jpeg",
    tags: ["Consumer behavior insights", "Operational efficiency", "E-commerce strategy"],
    supportText: "Empowering retailers to thrive through digital transformation and operational excellence",
    badge: "Retail Industry Expertise",
    desc1:
      "Retail is evolving at an unprecedented pace, driven by technology adoption, shifts in consumer behavior, and the acceleration of e-commerce. Success today requires embracing innovation while prioritizing sustainability and customer experience.",
    desc2:
      "STOC helps retailers — from department stores to e-commerce platforms — adapt to these changes, optimize operations, and unlock growth opportunities. With experience across all segments, we bring insights that drive performance and future-proof strategies.",
    href: "/industries/technology-media-telecommunications",
  },
];

const team = [
  { name: "Andrew Swihart", image: "Andrew_Swihart.jpg", location: "Dallas, TX", title: "Co-Founder | Managing Partner" },
  { name: "Michael O'Heir", image: "Michael_OHeir1.jpg", location: "Baltimore, MD", title: "Co-Founder | Managing Partner" },
  { name: "Sam Luetgers", image: "Sam_Luetgers.jpg", location: "Tampa, FL", title: "Senior Manager | TAS" },
  { name: "Anne Gill", image: "Anne_Federico.jpg", location: "Baltimore, MD", title: "Senior Manager | TAS" },
  { name: "Sean Egan", image: "Sean_Egan.jpg", location: "Minneapolis, MN", title: "Senior Manager | TAS" },
  { name: "Matt Hottman", image: "Matt_Hottman.jpg", location: "Baltimore, MD", title: "Manager | TAS" },
  { name: "Leah Hudson", image: "leah-hudson.jpg", location: "Dallas, TX", title: "Manager | TAS" },
  { name: "Thomson Thamsir", image: "Thomson_Thamsir.JPG", location: "Minneapolis, MN", title: "Senior Associate | TAS" },
  { name: "Saqib Saddiqui", image: "Saqib_Saddiqui.jpg", location: "New York, NY", title: "Senior Associate | TAS" },
  { name: "Brandon McFadden", image: "Brandon_McFadden.jpg", location: "Baltimore, MD", title: "Senior Associate | TAS" },
  { name: "Hung Nguyen", image: "HungNguyen.jpg", location: "Minneapolis, MN", title: "Associate | TAS" },
  { name: "Aidan Sheehy", image: "Aidan-Sheehy.jpg", location: "Minneapolis, MN", title: "Associate | TAS" },
  { name: "Lucius Burch", image: "Lucius_Burch.jpg", location: "Nashville, TN", title: "VP, Business Development" },
  { name: "Peyton Evans", image: "Peyton_Evans.jpeg", location: "Philadelphia, PA", title: "Associate, Business Development" },
  { name: "Srushti Kulkarni", image: "Srushti_Kulkarni.jpg", location: "Baltimore, MD", title: "Market Research Analyst" },
];

// Street + city/state/zip split out (satisfies the locations formatting request).
const offices = [
  { city: "Baltimore, MD", streetAddress: "600 Baltimore Ave., Suite 205", cityStateZip: "Towson, MD 21204", phone: "(410) 812-6927" },
  { city: "Dallas, TX", streetAddress: "3626 N Hall Street, Suite 803", cityStateZip: "Dallas, TX 75219", phone: "(218) 244-8082" },
  { city: "Minneapolis, MN", streetAddress: "7400 Metro Blvd., Suite 450", cityStateZip: "Edina, MN 55439", phone: "(218) 244-8082" },
  { city: "Nashville, TN", streetAddress: "6200 Tennessee 100, Suite 302", cityStateZip: "Nashville, TN 37205", phone: "(615) 516-2362" },
  { city: "Ponte Vedra Beach, FL", streetAddress: "90 Fort Wade Rd., Suite 100", cityStateZip: "Ponte Vedra Beach, FL 32081", phone: "(410) 812-6927" },
];

// ---------- Seed ----------

async function run() {
  console.log("Seeding services...");
  for (let i = 0; i < services.length; i++) {
    const s = services[i];
    const image = await uploadImage(s.image);
    await client.createOrReplace({
      _id: `service-${s.slug}`,
      _type: "service",
      title: s.title,
      slug: { _type: "slug", current: s.slug },
      iconKey: s.iconKey,
      description: s.description,
      longDesc: s.longDesc,
      href: s.href,
      image,
      orderRank: i,
    });
  }

  console.log("Seeding industries...");
  for (let i = 0; i < industries.length; i++) {
    const ind = industries[i];
    const image = await uploadImage(ind.image);
    await client.createOrReplace({
      _id: `industry-${ind.slug}`,
      _type: "industry",
      title: ind.title,
      slug: { _type: "slug", current: ind.slug },
      iconKey: ind.iconKey,
      image,
      badge: ind.badge,
      supportText: ind.supportText,
      tags: ind.tags,
      desc1: ind.desc1,
      desc2: ind.desc2 || undefined,
      href: ind.href,
      orderRank: i,
    });
  }

  console.log("Seeding team members...");
  for (let i = 0; i < team.length; i++) {
    const t = team[i];
    const image = await uploadImage(t.image);
    await client.createOrReplace({
      _id: `team-${slugify(t.name)}`,
      _type: "teamMember",
      name: t.name,
      image,
      location: t.location,
      title: t.title,
      orderRank: i,
    });
  }

  console.log("Seeding office locations...");
  for (let i = 0; i < offices.length; i++) {
    const o = offices[i];
    await client.createOrReplace({
      _id: `office-${slugify(o.city)}`,
      _type: "officeLocation",
      city: o.city,
      streetAddress: o.streetAddress,
      cityStateZip: o.cityStateZip,
      phone: o.phone,
      orderRank: i,
    });
  }

  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
