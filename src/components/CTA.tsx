import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-accent-700 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="bg-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Partner with the Remedy of Healing
            </h2>
            <p className="mt-4 text-brand-50/90">
              Whether you are a distributor, healthcare professional or export
              partner, our team is ready to support you with international-quality
              medicines.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
