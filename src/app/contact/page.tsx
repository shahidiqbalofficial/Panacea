import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Panacea Pharmaceuticals Pakistan. Head office in I-8 Markaz, Islamabad and production plant in Rawat.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out for product enquiries, partnerships or export opportunities."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Contact Details</span>
            <h2 className="heading">Our Offices</h2>
            <div className="mt-8 space-y-6">
              {contact.offices.map((o) => (
                <div key={o.label} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2 text-brand-600">
                    <Building2 size={20} />
                    <h3 className="font-semibold">{o.label}</h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-slate-600">
                    <li className="flex items-start gap-2.5">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-brand-500" />
                      {o.address}
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Phone size={16} className="shrink-0 text-brand-500" />
                      <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-brand-600">
                        {o.phone}
                      </a>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Mail size={16} className="shrink-0 text-brand-500" />
                      <a href={`mailto:${o.email}`} className="hover:text-brand-600 break-all">
                        {o.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
              <div className="flex items-center gap-2.5 rounded-2xl bg-brand-50 p-5 text-sm font-medium text-slate-700">
                <Clock size={18} className="text-brand-500" />
                {contact.hours}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <iframe
              title="Panacea Pharmaceuticals Location"
              src="https://www.google.com/maps?q=I-8%20Markaz%20Islamabad&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              className="w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
