import Studio from "./Studio";

export const dynamic = "force-static";

import { metadata as studioMetadata, viewport } from "next-sanity/studio";
import type { Metadata } from "next";

// Keep the CMS admin out of search indexes.
export const metadata: Metadata = {
  ...studioMetadata,
  robots: { index: false, follow: false },
};
export { viewport };

export default function StudioPage() {
  return <Studio />;
}
