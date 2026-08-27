import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QualitySection from "@/components/QualitySection";
import CTA from "@/components/CTA";
import { quality } from "@/data/site";

export const metadata: Metadata = {
  title: "Environment, Health & Safety",
  description: quality.ehs.intro,
};

export default function EHSPage() {
  return (
    <>
      <PageHero
        title={quality.ehs.title}
        subtitle="Green, clean processes that protect our people, our community and our planet."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Quality", href: "/quality" },
          { label: "EHS" },
        ]}
      />
      <QualitySection intro={quality.ehs.intro} points={quality.ehs.points} accent="brand" />
      <CTA />
    </>
  );
}
