import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "STOC Advisory",
  description:
    "Maximize shareholder value through strategic mergers and acquisitions, balance sheet restructuring, debt and equity evaluation, and private capital raising with STOC’s Corporate Advisory team.",
};

const gambetta = localFont({
  src: [
    {
      path: "../fonts/Gambetta-Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gambetta-VariableItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-FDNSZWXM62"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FDNSZWXM62');
          `}
        </Script>

        {/* Customers.ai - stays right after <head> */}
        <Script
          id="customers-ai"
          async
          strategy="afterInteractive"
          src="https://mm-uxrv.com/js/mm_914401e1-b4be-4e4f-8795-3341aaa9df8b-00433719.js"
        />
      </head>
      <body className={`${inter.className} ${gambetta.style} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
