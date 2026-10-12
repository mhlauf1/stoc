"use client";

import { useEffect } from "react";

const LEAFLET_SRC =
  "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js";
const TECH_SRC = "/technology-assets/technology.js";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

const isTechPath = (p: string) => /^\/technology(\/|$)/.test(p);

// Once technology.js has run, this document carries its global listeners for
// good. Next's popstate handler unmounts this page synchronously (before any
// listener we add later can run), so the Back-button guard is installed once
// per document and never removed.
let backGuardInstalled = false;
function installBackGuard() {
  if (backGuardInstalled) return;
  backGuardInstalled = true;
  window.addEventListener("popstate", () => {
    if (!isTechPath(location.pathname)) window.location.reload();
  });
}

/**
 * Boots the vendor technology.js against the freshly rendered markup.
 *
 * technology.js is a run-once script with global listeners and no teardown,
 * so it can't survive Next's client-side navigation. We run a fresh copy on
 * every mount, and force a full page load whenever the visitor leaves the
 * page (site header/footer links, browser Back) so its listeners never
 * outlive the DOM they were bound to.
 */
export default function TechnologyScripts() {
  useEffect(() => {
    const root = document.getElementById("stoc-tech");
    if (!root || root.dataset.booted) return;
    root.dataset.booted = "1";
    installBackGuard();

    const w = window as Window & { L?: unknown };
    (w.L ? Promise.resolve() : loadScript(LEAFLET_SRC))
      .catch(() => {}) // the page still works without the map
      .then(() => loadScript(TECH_SRC))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest?.("a[href]");
      if (!a || a.closest("#stoc-tech")) return;
      if ((a as HTMLAnchorElement).target === "_blank") return;
      const url = new URL((a as HTMLAnchorElement).href, location.href);
      if (url.origin !== location.origin) return;
      e.preventDefault();
      e.stopPropagation();
      window.location.assign(url.href);
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return null;
}
