// Thin wrapper for firing GA4 events from client components (gtag is loaded
// globally in app/layout.tsx).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  name: string,
  params: Record<string, string | number | undefined> = {}
) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
};
