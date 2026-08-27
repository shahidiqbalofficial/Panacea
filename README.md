# Panacea Pharmaceuticals — Next.js Website

A modern rebuild of **panaceapharmagroup.com** (originally WordPress) using the latest
technology stack. Same platform, same brand — upgraded to a fast, responsive,
component-based Next.js application.

## 🚀 Tech Stack

| Layer      | Technology                        |
| ---------- | --------------------------------- |
| Framework  | **Next.js 14** (App Router)       |
| Language   | **TypeScript**                    |
| Styling    | **Tailwind CSS**                  |
| Animation  | **Framer Motion**                 |
| Icons      | **lucide-react**                  |

## 📄 Pages (mirrors the original site)

- `/` — Home (hero, highlights, mission/vision, product preview, distribution)
- `/about` — About Us + Top Management
- `/production` — Production capabilities & dosage forms
- `/products` — Searchable / filterable product explorer
- `/quality` — Quality overview
  - `/quality/quality-control`
  - `/quality/quality-assurance`
  - `/quality/ehs` — Environment, Health & Safety
- `/rnd` — Research & Development
- `/export` — Export & international markets
- `/contact` — Contact info + form + map

## 🛠️ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

## 🎨 Content & Assets

- All copy is centralized in `src/data/site.ts` — edit once, updates everywhere.
- The logo lives at `public/logo.svg` (replace with the official brand logo file
  when available — keep the same filename to swap instantly).
- Brand colors are defined in `tailwind.config.ts` (`brand` teal-green + `accent` blue).

## 🔌 Next Steps (production)

- Wire the contact form (`src/components/ContactForm.tsx`) to an API route or email service.
- Replace the representative product list with the full registered product database.
- Add real facility / product photography in `public/images/`.

---
© Panacea Pharmaceuticals Pakistan — *The Remedy of Healing*.
