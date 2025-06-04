// app/AnalyticsTracker.tsx
"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import moment from "moment";

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
    const formattedTimestamp = moment().format("YYYY-MM-DD HH:mm:ss");

    track("visit_with_headers", {
      ip,
      userAgent,
      referrer,
      language,
      timestamp: formattedTimestamp,
    });
  }, [ip, userAgent, referrer, language]);

  return null;
}
