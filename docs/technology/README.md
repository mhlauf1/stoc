# STOC Technology pages: drop-in package

Three views in one page: the overview, Strata and Sourcing OS. The site header and footer have been removed, so the page uses the site's own.

| URL | View |
|---|---|
| `/technology` | Technology overview |
| `/technology/strata` | Strata |
| `/technology/sourcing-os` | Sourcing OS |

Clicking between views updates the URL with `history.pushState`, so there's no page reload. Back and forward buttons work, direct links work, and the page title updates on each view.

## Files

```
technology.html                  page fragment (no <html>, <head>, <header> or <footer>)
technology-assets/
  technology.css                 all styles, scoped under .stoc-tech so nothing leaks into the site
  technology.js                  all behaviour, including the US map data
  shots/*.webp                   product screenshots (25 files)
```

## Install

1. Copy `technology-assets/` to the site's public/static folder so it is served at `/technology-assets/`.
2. Place the contents of `technology.html` inside the page's main content area, between the site header and footer.
3. Serve that same page for all three URLs: `/technology`, `/technology/strata` and `/technology/sourcing-os`. In Next.js, use a catch-all route (example below). For a static host, add a rewrite so the two sub-paths return the `/technology` page.
4. Set the site header height so the sticky sections sit just below it:
   ```css
   .stoc-tech { --site-header-h: 72px; }  /* your fixed header height */
   ```
   If the site header isn't fixed or sticky, set it to `0px`.

### Configuration (on the root element)

```html
<div class="stoc-tech" id="stoc-tech"
     data-base="/technology"               <!-- route base -->
     data-assets="/technology-assets/">    <!-- where shots/ live -->
```

### Fonts
The page uses the site's fonts by name: **Gambetta** for headings and **Inter** for body text. It doesn't load any fonts itself, so make sure both are already loaded on this page; Gambetta comes from your local files.

### Dependencies
Leaflet 1.9.4 is loaded from cdnjs in `technology.html`. You can switch it to the npm package (`leaflet`) as long as `window.L` exists before `technology.js` runs.

## Next.js (App Router) example

`app/technology/[[...slug]]/page.tsx`

```tsx
import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ["strata"] }, { slug: ["sourcing-os"] }];
}

const titles: Record<string, string> = { strata: "Strata", "sourcing-os": "Sourcing OS" };
export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }) {
  const s = (await params).slug?.[0];
  return { title: `${s ? titles[s] : "Technology"} | STOC Advisory` };
}

export default function Page() {
  // Markup only: strip the <link> and <script> tags from the fragment; they are added below.
  const raw = fs.readFileSync(path.join(process.cwd(), "content/technology.html"), "utf8");
  const markup = raw.replace(/<link[^>]*>|<script[^>]*><\/script>/g, "");
  return (
    <>
      <link rel="stylesheet" href="/technology-assets/technology.css" />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js" strategy="afterInteractive" />
      <Script src="/technology-assets/technology.js" strategy="lazyOnload" />
    </>
  );
}
```

Put `technology.html` in `content/` and `technology-assets/` in `public/`.

Links between the three views are handled by the page's own script, not the Next router, so switching views never remounts the page.

## Notes
- **Events:** the script fires `stoc:viewchange` on `document` (`event.detail.view`) whenever the view changes. You can hook analytics to it.
- **Contact links:** "Contact our team" and "Schedule a discovery session" go to `/contact`.
- **Global styles:** the only global changes are `overflow:hidden` on `<html>` while the full-size screenshot viewer is open, and `window.scrollTo` when the view changes.
- **Tested:** in Chromium with a placeholder fixed header and footer at 1440px, 1280px and 390px. Checked: routing on load, link clicks, back/forward and direct links; no console errors; no style leakage into the site.
