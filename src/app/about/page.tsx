import type { Metadata } from "next";
import { Target, Eye, BadgeCheck, User } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { about, management } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Over 12 years of experience producing international-quality medicines in Pakistan. Meet the leadership behind Panacea Pharmaceuticals.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Leading Pharmaceutical Company"
        subtitle="Over 12 years of producing international-quality medicines in Pakistan — dedicated to the good health and well-being of our valued customers."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      {/* Intro */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Who We Are</span>
            <h2 className="heading">{about.heading}</h2>
            <p className="mt-5 text-slate-600">{about.intro}</p>
            {about.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 text-slate-600">
                {p}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
              <h3 className="mb-5 text-lg font-semibold text-slate-900">
                Core Values
              </h3>
              <ul className="space-y-4">
                {about.values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 shrink-0 text-brand-500" size={20} />
                    <span className="text-sm font-medium text-slate-700">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section bg-slate-50">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-3 text-slate-600">{about.mission}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-3 text-slate-600">{about.vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Leadership</span>
            <h2 className="heading">Top Management</h2>
            <p className="mt-4 text-slate-600">
              Experienced leaders driving Panacea&apos;s vision of superior quality
              and healing.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {management.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="card h-full text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-600 text-white">
                    <User size={34} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                  <p className="text-sm font-medium text-brand-500">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
