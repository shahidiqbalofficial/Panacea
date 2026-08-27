import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ClipboardCheck, Leaf, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { quality } from "@/data/site";

export const metadata: Metadata = {
  title: "Quality",
  description:
    "Quality is the backbone of Panacea Pharmaceuticals — Quality Control, Quality Assurance and Environment, Health & Safety.",
};

const cards = [
  {
    icon: ClipboardCheck,
    title: quality.control.title,
    text: quality.control.intro,
    href: "/quality/quality-control",
    accent: "brand",
  },
  {
    icon: ShieldCheck,
    title: quality.assurance.title,
    text: quality.assurance.intro,
    href: "/quality/quality-assurance",
    accent: "accent",
  },
  {
    icon: Leaf,
    title: quality.ehs.title,
    text: quality.ehs.intro,
    href: "/quality/ehs",
    accent: "brand",
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        title="Quality at Our Core"
        subtitle="Quality assurance is the backbone of our operations — ensuring every medicine we produce is safe, effective and reliable."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Quality" }]}
      />

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <Link href={c.href} className="card group flex h-full flex-col">
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${
                    c.accent === "brand"
                      ? "bg-brand-50 text-brand-600"
                      : "bg-accent-50 text-accent-600"
                  }`}
                >
                  <c.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {c.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">
                  {c.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Learn more{" "}
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
