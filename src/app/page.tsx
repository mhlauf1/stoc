// app/page.tsx
import { headers } from "next/headers";
import Hero from "@/components/home/Hero";
import Trust from "@/components/home/Trust";
import IntroServices from "@/components/home/IntroServices";
import OverviewBento from "@/components/home/OverviewBento";
import CTA from "@/components/CTA";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export default async function Home() {
  // 1) Read headers() on the server
  const requestHeaders = await headers();

  const rawForwarded = requestHeaders.get("x-forwarded-for") ?? "";
  const ip = rawForwarded.split(",")[0] || "Unknown";
  const userAgent = requestHeaders.get("user-agent") ?? "Unknown";
  const referrer = requestHeaders.get("referer") ?? "";
  const language = requestHeaders.get("accept-language") ?? "";

  return (
    <main>
      {/* 2) Pass those values into the client component */}
      <AnalyticsTracker
        ip={ip}
        userAgent={userAgent}
        referrer={referrer}
        language={language}
      />

      <Hero />
      <IntroServices />
      <OverviewBento />
      <Trust />
      <CTA />
    </main>
  );
}
