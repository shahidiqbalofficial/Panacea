import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
  
      <div className="bg-dots absolute inset-0 opacity-40" />
     
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
     
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
    
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-gold-400 to-accent-400" />   <div className="container-page relative py-16 sm:py-20">
        {breadcrumb && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-brand-100/80">
            {breadcrumb.map((b, i) => (
              <span key={b.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} className="opacity-60" />}
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100/85 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
