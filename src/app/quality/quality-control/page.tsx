import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QualitySection from "@/components/QualitySection";
import CTA from "@/components/CTA";
import { quality } from "@/data/site";

export const metadata: Metadata = {
  title: "Quality Control",
  description: quality.control.intro,
};

export default function QualityControlPage() {
  return (
    <>
      <PageHero
        title={quality.control.title}
        subtitle="Verifying the purity, potency and stability of every product using advanced analytical technologies."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Quality", href: "/quality" },
          { label: quality.control.title },
        ]}
      />
      <QualitySection intro={quality.control.intro} points={quality.control.points} accent="brand" />
      <CTA />
    </>
  );
}
