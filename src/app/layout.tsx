import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "STOC Advisory",
  description:
    "Maximize shareholder value through strategic M&A, balance sheet restructuring, debt & equity evaluation, and private capital raising with STOC’s Corporate Advisory team.",
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
      <body className={`${inter.className}  ${gambetta.style}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
