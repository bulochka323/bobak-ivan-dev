# Premium Portfolio Template

A high-end, single-page portfolio built with **React**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**.

## Features

- Dark, modern aesthetic with purple accent
- Smooth scroll-reveal animations (respects `prefers-reduced-motion`)
- Fully responsive mobile-first layout
- Sticky navbar with mobile menu
- Hero, About, Skills, Projects, Experience, Contact
- All content centralized in `src/data/portfolio.ts` — easy to customize
- Optimized: no heavy libraries beyond Framer Motion + Lucide icons

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:5173

## Customize

Edit **`src/data/portfolio.ts`**:

- `personalInfo` — name, role, email, socials
- `about` — bio paragraphs & stats
- `skills` — skill categories
- `projects` — portfolio items (image URLs, tags, links)
- `experience` — work history
- `navLinks` — navigation

Colors & fonts live in `src/index.css` (`@theme` block).

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   # Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer, ScrollReveal
  data/         # portfolio.ts — all content
  hooks/        # useReducedMotion
  App.tsx
  index.css
  main.tsx
```
