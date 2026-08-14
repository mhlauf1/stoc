"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Mail, Link2, Check, ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import type { PressReleaseDoc } from "@/sanity/lib/types";
import { trackEvent } from "@/utils/gtag";

// Desktop right rail for press release pages: share actions, media contact,
// and source attribution. Sticky below the fixed navbar.
const PressReleaseSidebar: React.FC<{ release: PressReleaseDoc }> = ({
  release,
}) => {
  const [copied, setCopied] = useState(false);

  const pageUrl = () =>
    typeof window !== "undefined" ? window.location.href.split("?")[0] : "";

  const share = (channel: string) => {
    const params = { release_name: release.slug, channel };
    trackEvent("press_release_share", params);
    track("Press Release Share", params);
  };

  const copyLink = async () => {
    share("copy");
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — ignore.
    }
  };

  const shareBtn =
    "inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 text-neutral-600 hover:border-[#18598b] hover:text-[#18598b] transition-colors";

  return (
    <div className="flex flex-col gap-8 bg-white rounded-2xl border border-neutral-200 p-6">
      <div className="flex flex-col gap-3">
        <h2
          style={{ letterSpacing: "1.5px" }}
          className="uppercase text-[11px] font-medium text-neutral-500"
        >
          Share this release
        </h2>
        <div className="flex items-center gap-2">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              `https://www.stocadvisory.com/insights/news/${release.slug}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            onClick={() => share("linkedin")}
            className={shareBtn}
          >
            <Linkedin size={17} />
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(
              release.title
            )}&body=${encodeURIComponent(
              `https://www.stocadvisory.com/insights/news/${release.slug}`
            )}`}
            aria-label="Share by email"
            onClick={() => share("email")}
            className={shareBtn}
          >
            <Mail size={17} />
          </a>
          <button
            type="button"
            aria-label="Copy link"
            onClick={copyLink}
            className={shareBtn}
          >
            {copied ? <Check size={17} /> : <Link2 size={17} />}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-t border-neutral-200 pt-6">
        <h2
          style={{ letterSpacing: "1.5px" }}
          className="uppercase text-[11px] font-medium text-neutral-500"
        >
          Media Contact
        </h2>
        <p className="text-sm text-neutral-800">STOC Advisory</p>
        <a
          href="mailto:inquiry@stocadvisory.com"
          className="text-sm text-[#18598b] hover:text-[#16333A] transition-colors w-fit"
        >
          inquiry@stocadvisory.com
        </a>
      </div>

      <div className="flex flex-col gap-3 border-t border-neutral-200 pt-6">
        <h2
          style={{ letterSpacing: "1.5px" }}
          className="uppercase text-[11px] font-medium text-neutral-500"
        >
          About STOC Advisory
        </h2>
        <p className="text-sm text-neutral-600 leading-6">
          A national business advisory firm supporting clients across the
          investment lifecycle, from acquisition strategy and diligence through
          post-close execution and exit preparation.
        </p>
        <Link
          href="/about/company"
          className="inline-flex items-center gap-1 text-sm text-[#18598b] font-medium hover:gap-1.5 transition-all w-fit"
        >
          Learn more
          <ArrowUpRight size={15} />
        </Link>
      </div>

      {release.sourceUrl && (
        <div className="flex flex-col gap-2 border-t border-neutral-200 pt-6">
          <a
            href={release.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-[#18598b] transition-colors w-fit"
          >
            View on BusinessWire
            <ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </div>
  );
};

export default PressReleaseSidebar;
