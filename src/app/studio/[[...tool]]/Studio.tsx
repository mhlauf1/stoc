"use client";

import dynamic from "next/dynamic";

// The Sanity Studio (and its @sanity/ui dependency) calls createContext at
// module evaluation, which fails if evaluated on the server. Loading it with
// ssr:false ensures sanity.config — and the whole Studio — only runs in the
// browser.
const StudioInner = dynamic(() => import("./StudioInner"), { ssr: false });

export default function Studio() {
  return <StudioInner />;
}
