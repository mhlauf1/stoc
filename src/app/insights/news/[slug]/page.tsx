import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/client";
import {
  PRESS_RELEASE_BY_SLUG_QUERY,
  PRESS_RELEASE_SLUGS_QUERY,
} from "@/sanity/lib/queries";
import type { PressReleaseDoc } from "@/sanity/lib/types";
import { formatFullDate } from "@/utils/insights";
import PressReleaseBody from "@/components/insights/PressReleaseBody";
import PressReleaseSidebar from "@/components/insights/PressReleaseSidebar";
import NewsletterSignup from "@/components/insights/NewsletterSignup";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: PRESS_RELEASE_SLUGS_QUERY,
  });
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const release = await sanityFetch<PressReleaseDoc | null>({
    query: PRESS_RELEASE_BY_SLUG_QUERY,
    params: { slug },
  });
  if (!release) return {};

  return {
    title: `${release.title} | STOC Advisory`,
    description: release.excerpt,
    alternates: { canonical: `/insights/news/${release.slug}` },
    openGraph: {
      title: release.title,
      description: release.excerpt,
      type: "article",
      publishedTime: release.publishDate,
      images: release.coverImageUrl ? [release.coverImageUrl] : undefined,
    },
  };
}

export default async function PressReleasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const release = await sanityFetch<PressReleaseDoc | null>({
    query: PRESS_RELEASE_BY_SLUG_QUERY,
    params: { slug },
  });
  if (!release?.body) notFound();

  return (
    <main className="bg-[#F7F7F7] min-h-screen">
      <div className="px-4 md:px-[5%] pt-[15vh] pb-16 md:pb-24 flex flex-col gap-10 md:gap-12">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:items-start">
          <article className="flex flex-col gap-10 md:gap-12">
            <header className="flex flex-col gap-4 max-w-3xl">
              <div className="flex items-center gap-4">
                <div className="h-[1px] bg-neutral-300 w-[30px]" />
                <span
                  style={{ letterSpacing: "2px" }}
                  className="uppercase text-neutral-600 text-xs"
                >
                  News &amp; Press
                </span>
              </div>
              <h1 className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-gambetta tracking-tight leading-tight">
                {release.title}
              </h1>
              <p className="text-sm text-neutral-500">
                {formatFullDate(release.publishDate)}
                {release.dateline && ` — ${release.dateline}`}
              </p>
            </header>

            {release.coverImageUrl && (
              <div className="relative w-full max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200">
                <Image
                  src={release.coverImageUrl}
                  alt={release.coverImageAlt || release.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <PressReleaseBody body={release.body} />

            <footer className="flex flex-col gap-6 max-w-3xl border-t border-neutral-200 pt-8">
              {release.sourceUrl && (
                <a
                  href={release.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#18598b] font-medium hover:gap-2.5 transition-all w-fit lg:hidden"
                >
                  Originally distributed via BusinessWire
                  <ArrowUpRight size={18} />
                </a>
              )}
              <Link
                href="/insights"
                className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-[#16333A] transition-colors w-fit"
              >
                <ArrowLeft size={18} />
                Back to News &amp; Press
              </Link>
            </footer>
          </article>

          <aside className="hidden lg:block sticky top-28">
            <PressReleaseSidebar release={release} />
          </aside>
        </div>

        <NewsletterSignup />
      </div>
    </main>
  );
}
