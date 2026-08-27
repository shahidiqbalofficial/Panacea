import type { Metadata } from "next";
import { Pill, FlaskConical, Cog, Leaf, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { production } from "@/data/site";

export const metadata: Metadata = {
  title: "Production",
  description:
    "State-of-the-art production facility manufacturing tablets, capsules, injectables, ointments and more with green, clean processes.",
};

const features = [
  {
    icon: Cog,
    title: "State-of-the-Art Technology",
    text: "High-tech plant with the most consistent operating procedures and modern equipment.",
  },
  {
    icon: FlaskConical,
    title: "Expert Team",
    text: "Qualified scientists, pharmacists, chemists, engineers and technicians.",
  },
  {
    icon: Leaf,
    title: "Green & Clean Processes",
    text: "Environmentally responsible manufacturing that protects people and planet.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Improvement",
    text: "An environment that celebrates quality, safety and constant refinement.",
  },
];

export default function ProductionPage() {
  return (
    <>
      <PageHero
        title="Production Excellence"
        subtitle="Specialty products manufactured at a high-tech plant using admirable standards of quality, safety and clean processes."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Production" }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">How We Manufacture</span>
            <h2 className="heading">Advanced Facilities, Consistent Quality</h2>
            <p className="mt-5 text-slate-600">{production.intro}</p>
            <p className="mt-4 text-slate-600">{production.detail}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f.title} className="card h-full">
                  <f.icon className="mb-3 text-brand-500" size={26} />
                  <h3 className="mb-1.5 font-semibold text-slate-900">{f.title}</h3>
                  <p className="text-sm text-slate-600">{f.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dosage forms */}
      <section className="section bg-slate-50">
        <div className="container-page">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow">Capabilities</span>
            <h2 className="heading">Dosage Forms We Produce</h2>
            <p className="mt-4 text-slate-600">
              A versatile manufacturing capability across multiple dosage forms.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {production.dosageForms.map((d, i) => (
              <Reveal key={d} delay={i * 0.05}>
                <div className="card flex h-full flex-col items-center gap-3 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Pill size={22} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{d}</span>
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
