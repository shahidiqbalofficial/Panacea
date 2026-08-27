import type { Metadata } from "next";
import { Globe2, ShieldCheck, Package, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { exportInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Export",
  description: exportInfo.intro,
};

const points = [
  { icon: ShieldCheck, text: exportInfo.points[0] },
  { icon: Package, text: exportInfo.points[1] },
  { icon: Globe2, text: exportInfo.points[2] },
  { icon: Handshake, text: exportInfo.points[3] },
];

export default function ExportPage() {
  return (
    <>
      <PageHero
        title="Global Reach, Local Care"
        subtitle="Delivering international-quality medicines to markets around the world through a reliable, compliant supply chain."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Export" }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">International Markets</span>
            <h2 className="heading">Expanding Beyond Pakistan</h2>
            <p className="mt-5 text-lg text-slate-600">{exportInfo.intro}</p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-brand-50 p-6">
              <Globe2 className="text-brand-500" size={40} />
              <p className="text-sm text-slate-700">
                Interested in becoming an international distribution partner?
                Our dedicated export team is ready to support you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.text} className="card h-full">
                  <p.icon className="mb-3 text-accent-500" size={26} />
                  <p className="text-sm text-slate-700">{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
