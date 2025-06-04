// app/AnalyticsTracker.tsx
"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

interface TrackerProps {
  ip: string;
  userAgent: string;
  referrer: string;
  language: string;
}

export default function AnalyticsTracker({
  ip,
  userAgent,
  referrer,
  language,
}: TrackerProps) {
  useEffect(() => {
    // Fire a custom event named "visit_with_headers" with your payload
    track("User info", {
      ip,
      userAgent,
      referrer,
      language,
      // timestamp is optional, but you can add it if you like:
      timestamp: Date.now(),
    });
  }, [ip, userAgent, referrer, language]);

  return null;
}
