import type { Metadata } from "next";
import { Microscope, Lightbulb, LineChart, Beaker } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { rnd } from "@/data/site";

export const metadata: Metadata = {
  title: "Research & Development",
  description: rnd.intro,
};

const pillars = [
  { icon: Beaker, title: "Formulation Science", text: "Developing and refining formulations grounded in rigorous science." },
  { icon: Microscope, title: "Expert Scientists", text: "A highly qualified team of scientists, pharmacists and chemists." },
  { icon: LineChart, title: "Post-Market Monitoring", text: "Ongoing surveillance that drives continuous improvement." },
  { icon: Lightbulb, title: "Affordable Innovation", text: "Accessible, international-quality medicine for every patient." },
];

export default function RnDPage() {
  return (
    <>
      <PageHero
        title="Research & Development"
        subtitle="Science-led innovation at the heart of Panacea Pharma — exploring new formulations and improving existing ones."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "R&D" }]}
      />

      <section className="section">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Innovation</span>
            <h2 className="heading">Advancing Healthcare Through Science</h2>
            <p className="mt-5 text-lg text-slate-600">{rnd.intro}</p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="card h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <p.icon size={24} />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
              {rnd.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5 text-slate-700"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  {pt}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
