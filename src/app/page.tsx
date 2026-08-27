import Link from "next/link";
import {
  Factory,
  CalendarClock,
  BadgeCheck,
  Boxes,
  ArrowRight,
  ShieldCheck,
  Microscope,
  HeartPulse,
  Truck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import {
  company,
  highlights,
  stats,
  about,
  productCategories,
} from "@/data/site";

const iconMap: Record<string, any> = {
  Factory,
  CalendarClock,
  BadgeCheck,
  Boxes,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-brand-300/30 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent-200/40 blur-3xl" />

        <div className="container-page relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-600 shadow-sm">
              <ShieldCheck size={14} /> ISO 9001 &amp; Moody Certified
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {company.slogan}
              <span className="mt-2 block text-gradient animate-shimmer">
                The Remedy of Healing
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {company.short}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn-primary">
                Discover Panacea <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="btn-outline">
                Explore Products
              </Link>
            </div>

            {/* mini stats */}
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold text-brand-600">{s.value}</p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md animate-float rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-accent-600 p-1 shadow-2xl">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.3rem] bg-white p-8 text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-50">
                  <HeartPulse className="text-brand-500" size={48} />
                </div>
                <p className="text-2xl font-bold text-slate-900">Panacea</p>
                <p className="text-sm font-medium tracking-widest text-brand-500">
                  PHARMACEUTICALS
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  Improving the quality of human life — enabling people to do
                  more, feel better and live longer.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                  <span className="rounded-lg bg-brand-50 px-2 py-1 font-medium text-brand-600">Tablets</span>
                  <span className="rounded-lg bg-accent-50 px-2 py-1 font-medium text-accent-600">Injectables</span>
                  <span className="rounded-lg bg-brand-50 px-2 py-1 font-medium text-brand-600">Creams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Why Panacea</span>
            <h2 className="heading">Committed to Superior Quality</h2>
            <p className="mt-4 text-slate-600">
              For over 12 years we have delivered international-quality healthcare
              products through modern facilities and a dedicated team.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => {
              const Icon = iconMap[h.icon] ?? Boxes;
              return (
                <Reveal key={h.title} delay={i * 0.08}>
                  <div className="card h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon size={24} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {h.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {h.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section bg-slate-50">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-700 p-10 text-white shadow-xl">
              <div className="bg-grid absolute inset-0 opacity-20" />
              <div className="relative">
                <Microscope size={40} className="mb-6 text-brand-100" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="mt-3 text-brand-50/90">{about.mission}</p>
                <div className="mt-8 border-t border-white/20 pt-6">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="mt-3 text-brand-50/90">{about.vision}</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">About Our Company</span>
            <h2 className="heading">{about.heading}</h2>
            <p className="mt-4 text-slate-600">{about.intro}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {about.values.map((v) => (
                <li key={v} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <BadgeCheck size={18} className="text-brand-500" /> {v}
                </li>
              ))}
            </ul>
            <Link href="/about" className="btn-primary mt-8">
              Learn More <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow">Our Portfolio</span>
            <h2 className="heading">Dynamic Product Range</h2>
            <p className="mt-4 text-slate-600">
              A diverse range spanning multiple therapeutic areas — from tablets
              and capsules to creams, drops and injectables.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.06}>
                <div className="card h-full">
                  <div className="mb-4 inline-flex rounded-lg bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                    {cat.products.length} products
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-slate-900">
                    {cat.name}
                  </h3>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {cat.products.slice(0, 3).map((p) => (
                      <li key={p.brand} className="flex justify-between gap-2">
                        <span className="font-medium text-slate-700">{p.brand}</span>
                        <span className="text-slate-400">{p.form}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-outline">
              View Full Product List <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* DISTRIBUTION STRIP */}
      <section className="border-y border-slate-100 bg-brand-50/50">
        <div className="container-page flex flex-col items-center justify-between gap-6 py-10 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <Truck size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Nationwide Distribution Network
              </h3>
              <p className="text-sm text-slate-600">
                Timely and effective delivery of our products across Pakistan — and growing internationally.
              </p>
            </div>
          </div>
          <Link href="/export" className="btn-primary shrink-0">
            Export Enquiries <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
