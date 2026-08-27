import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { nav, contact, company } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brand-gradient text-brand-50">
      {/* Decorative layers */}
      <div className="bg-dots absolute inset-0 opacity-40" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
      {/* Top accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-400 via-gold-400 to-accent-400" />

      <div className="container-page relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <Image
              src="/images/logo_white.png"
              alt="Panacea Pharmaceuticals"
              width={200}
              height={73}
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-brand-50/80">
            {company.short}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-300">
            <ShieldCheck size={16} /> {company.tagline}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="inline-flex items-center gap-2 text-brand-50/80 transition hover:translate-x-1 hover:text-white"
                >
                  <span className="h-1 w-1 rounded-full bg-gold-400" />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Our Offices
          </h4>
          <ul className="space-y-4 text-sm">
            {contact.offices.map((o) => (
              <li key={o.label}>
                <p className="mb-1 font-semibold text-gold-300">{o.label}</p>
                <p className="flex items-start gap-2 text-brand-50/80">
                  <MapPin size={15} className="mt-0.5 shrink-0" /> {o.address}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm text-brand-50/80">
            <li className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Phone size={14} />
              </span>
              {contact.offices[0].phone}
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Mail size={14} />
              </span>
              <span className="break-all">{contact.offices[0].email}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                <Clock size={14} />
              </span>
              {contact.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-50/70 sm:flex-row">
          <p>© {year} {company.copyright}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <ShieldCheck size={13} className="text-gold-300" />
            The Remedy of Healing • ISO 9001 Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
