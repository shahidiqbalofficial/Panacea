import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import QualitySection from "@/components/QualitySection";
import CTA from "@/components/CTA";
import { quality } from "@/data/site";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description: quality.assurance.intro,
};

export default function QualityAssurancePage() {
  return (
    <>
      <PageHero
        title={quality.assurance.title}
        subtitle="The backbone of our operations — from raw material sourcing to final product distribution."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Quality", href: "/quality" },
          { label: quality.assurance.title },
        ]}
      />
      <QualitySection intro={quality.assurance.intro} points={quality.assurance.points} accent="accent" />
      <CTA />
    </>
  );
}
