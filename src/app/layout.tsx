import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
      <body className={`${inter.className}  ${gambetta.style} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
