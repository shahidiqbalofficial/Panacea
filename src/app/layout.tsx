import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Panacea Pharmaceuticals Pakistan — The Remedy of Healing",
    template: "%s | Panacea Pharmaceuticals",
  },
  description:
    "Panacea Pharmaceuticals Pakistan — over 12 years of producing international-quality medicines. ISO 9001 certified. The Remedy of Healing.",
  keywords: [
    "Panacea Pharmaceuticals",
    "Pakistan pharma",
    "ISO 9001",
    "tablets",
    "injectables",
    "healthcare",
    "Islamabad pharmaceutical company",
  ],
  openGraph: {
    title: "Panacea Pharmaceuticals Pakistan — The Remedy of Healing",
    description:
      "Committed to superior quality. Over 12 years of international-quality medicine production in Pakistan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
