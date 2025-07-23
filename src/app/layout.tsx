import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FDNSZWXM62"
        ></Script>
        <Script>
          {`
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-FDNSZWXM62');
  `}
        </Script>
      </head>
      <body className={`${inter.className}  ${gambetta.style} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
