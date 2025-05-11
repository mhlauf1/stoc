import React from "react";
import Contact from "@/components/contact/Contact";
import { ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col justify-between space-y-12">
          {/* Hero */}
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-gambetta tracking-tighter leading-tight">
              <span className="italic font-gambetta block">
                Let&apos;s talk strategy,
              </span>
              <span className="text-[#07171E] font-gambetta block">
                and make your next deal your best deal.
              </span>
            </h1>
            <p className="text-lg text-[#16333A]/80">
              Fill out the form on the right, or reach us directly at:
            </p>
          </header>

          {/* Contact info */}
          <aside className="space-y-8">
            <div>
              <h2 className="text-2xl font-gambetta mb-2">Office</h2>
              <p className="text-[#07171E]">
                123 Market Street
                <br />
                Suite 400
                <br />
                Chicago, IL 60601
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-gambetta mb-2">Email</h2>
              <a
                href="mailto:hello@stocadvisory.com"
                className="text-[#16333A] hover:underline"
              >
                hello@stocadvisory.com
              </a>
            </div>

            <div>
              <h2 className="text-2xl font-gambetta mb-2">Phone</h2>
              <a
                href="tel:+1234567890"
                className="text-[#16333A] hover:underline"
              >
                +1 (234) 567-890
              </a>
            </div>
          </aside>

          {/* Footer CTA */}
          <footer>
            <a
              href="/newsletter"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-[#07171E] text-white
                rounded-full font-gambetta
                hover:bg-neutral-800 transition
              "
            >
              Subscribe to insights
              <ArrowUpRight size={18} strokeWidth={2} />
            </a>
          </footer>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div>
          <Contact />
        </div>
      </div>
    </main>
  );
}
