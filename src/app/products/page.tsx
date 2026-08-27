import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ProductExplorer from "@/components/ProductExplorer";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Panacea Pharmaceuticals' diverse product portfolio across anti-infectives, pain management, CNS, dermatology, nutrition and more.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="A dynamic and diverse portfolio across many therapeutic areas — tablets, capsules, suspensions, creams, drops and injectables."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="section">
        <div className="container-page">
          <Reveal>
            <ProductExplorer />
          </Reveal>
          <p className="mt-10 rounded-2xl bg-brand-50 p-5 text-sm text-slate-600">
            <strong className="text-slate-800">Note:</strong> The products shown
            are representative of our portfolio. For the complete registered
            product list, pricing and availability, please{" "}
            <a href="/contact" className="font-semibold text-brand-600 underline">
              contact our team
            </a>
            .
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
