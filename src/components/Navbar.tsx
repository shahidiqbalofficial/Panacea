"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { nav } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar — gradient */}
      <div className="hidden bg-brand-gradient text-white lg:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2 tracking-wide">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400" />
            The Remedy of Healing • Committed to Superior Quality
          </span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:panaceapharmaceutical01@gmail.com"
              className="flex items-center gap-1.5 text-brand-50/90 transition hover:text-white"
            >
              <Mail size={13} /> panaceapharmaceutical01@gmail.com
            </a>
            <a
              href="tel:+923315006681"
              className="flex items-center gap-1.5 text-brand-50/90 transition hover:text-white"
            >
              <Phone size={13} /> +92 (0)331 5006681
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`w-full transition-all ${
          scrolled
            ? "bg-white/95 shadow-soft backdrop-blur"
            : "bg-white/80 backdrop-blur"
        }`}
      >
        <nav className="container-page flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-panacea-1.png"
              alt="Panacea Pharmaceuticals"
              width={200}
              height={65}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              if (item.children) {
                const activeParent = pathname.startsWith("/quality");
                return (
                  <li key={item.label} className="group relative">
                    <button
                      className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
                        activeParent
                          ? "text-brand-600"
                          : "text-slate-700 hover:text-brand-600"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={15}
                        className="transition group-hover:rotate-180"
                      />
                    </button>
                    <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-soft transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-slate-600 transition hover:bg-brand-50 hover:text-brand-600"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "text-brand-600"
                        : "text-slate-700 hover:text-brand-600"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href="/contact" className="btn-primary hidden lg:inline-flex">
            Get in Touch
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {nav.map((item) => {
              if (item.children) {
                const isOpen = openSub === item.label;
                return (
                  <li key={item.label}>
                    <button
                      onClick={() => setOpenSub(isOpen ? null : item.label)}
                      className="flex w-full items-center justify-between px-2 py-3 text-left text-sm font-medium text-slate-700"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="ml-3 border-l-2 border-brand-100 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block py-2.5 text-sm text-slate-600 hover:text-brand-600"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-2 py-3 text-sm font-medium text-slate-700 hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link href="/contact" className="btn-primary w-full">
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
