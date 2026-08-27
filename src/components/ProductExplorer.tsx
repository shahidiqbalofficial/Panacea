"use client";

import { useMemo, useState } from "react";
import { Search, Pill } from "lucide-react";
import { productCategories } from "@/data/site";

type Item = { brand: string; ingredient: string; form: string; category: string };

const allItems: Item[] = productCategories.flatMap((c) =>
  c.products.map((p) => ({ ...p, category: c.name }))
);

const categories = ["All", ...productCategories.map((c) => c.name)];

export default function ProductExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    return allItems.filter((it) => {
      const matchCat = active === "All" || it.category === active;
      const q = query.toLowerCase().trim();
      const matchQuery =
        !q ||
        it.brand.toLowerCase().includes(q) ||
        it.ingredient.toLowerCase().includes(q) ||
        it.form.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, active]);

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by brand, ingredient or form…"
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                active === c
                  ? "bg-brand-500 text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="mb-4 text-sm text-slate-500">
        Showing <span className="font-semibold text-slate-700">{filtered.length}</span>{" "}
        product{filtered.length !== 1 && "s"}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 py-16 text-center text-slate-500">
          No products match your search.
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((it) => (
            <div key={`${it.brand}-${it.form}`} className="card h-full">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Pill size={18} />
                </div>
                <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-semibold text-accent-600">
                  {it.form}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{it.brand}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.ingredient}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-400">
                {it.category}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
