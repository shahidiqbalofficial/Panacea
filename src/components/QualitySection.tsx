import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function QualitySection({
  intro,
  points,
  accent = "brand",
}: {
  intro: string;
  points: string[];
  accent?: "brand" | "accent";
}) {
  return (
    <section className="section">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-600">{intro}</p>
          <div
            className={`mt-8 rounded-2xl p-6 ${
              accent === "brand" ? "bg-brand-50" : "bg-accent-50"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Our Commitment
            </p>
            <p className="mt-2 text-slate-700">
              Every batch we produce meets or exceeds regulatory and industry
              standards — because quality is never an afterthought at Panacea.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-4">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className={
                    accent === "brand" ? "text-brand-500" : "text-accent-500"
                  }
                  size={22}
                />
                <span className="text-slate-700">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
