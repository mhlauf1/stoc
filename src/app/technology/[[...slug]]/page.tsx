import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import TechnologyScripts from "@/components/technology/TechnologyScripts";
import "../technology-site.css";

// The Technology section is a client-supplied drop-in package: a markup
// fragment (../technology.html) plus CSS/JS/screenshots in
// public/technology-assets/. Keep both unmodified so revisions are a file swap.
// One page serves all three URLs; technology.js picks the view from the path.

const PAGES: Record<string, { title: string; description: string }> = {
  "": {
    title: "Technology | STOC Advisory",
    description:
      "STOC builds proprietary intelligence into every stage of the deal. Strata powers quality of earnings and financial diligence; Sourcing OS powers target sourcing and owner outreach.",
  },
  strata: {
    title: "Strata: Quality of Earnings Platform | STOC Advisory",
    description:
      "Strata is STOC's proprietary diligence platform: one Quality of Earnings database from kickoff through close, built for buy-and-build targets.",
  },
  "sourcing-os": {
    title: "Sourcing OS: Target Sourcing & Owner Outreach | STOC Advisory",
    description:
      "Sourcing OS finds every company in a target market, identifies the owners and runs email outreach for private equity sponsors.",
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ["strata"] }, { slug: ["sourcing-os"] }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const slug = (await params).slug?.[0] ?? "";
  return {
    ...PAGES[slug],
    alternates: { canonical: slug ? `/technology/${slug}` : "/technology" },
  };
}

export default function TechnologyPage() {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "src/app/technology/technology.html"),
    "utf8"
  );
  // Markup only; the stylesheet and scripts are added below.
  const markup = raw.replace(/<link[^>]*>|<script[^>]*><\/script>/g, "");

  return (
    <main>
      {/* Vendor stylesheet served from public/ (scoped to .stoc-tech) */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        rel="stylesheet"
        href="/technology-assets/technology.css"
        precedence="default"
      />
      {/* --site-header-h: the fixed Navbar's height, for the sticky scenes */}
      <div
        className="[--site-header-h:80px] md:[--site-header-h:89px]"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <TechnologyScripts />
    </main>
  );
}
