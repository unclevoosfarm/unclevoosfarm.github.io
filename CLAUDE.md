# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Uncle Voo Farm Landing Page — a single-page React landing site for a Malaysian farm tourism business. Originally generated from a Figma design via Figma Make, then customized with animations and i18n.

## Commands

- `npm i` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — production build

No test runner or linter is configured.

## Architecture

**Stack:** React 18, Vite 6, Tailwind CSS v4 (via `@tailwindcss/vite` plugin), Motion (framer-motion successor), shadcn/ui components (Radix primitives + CVA), Lucide icons.

**Path alias:** `@` maps to `./src` (configured in `vite.config.ts`).

**Asset imports:** Figma-exported images use a special `figma:asset/<hash>.png` import syntax that resolves to files in `src/assets/`.

### Key Directories

- `src/app/App.tsx` — Root component. Renders all page sections in order: Header, Hero, StayCards, HarvestProducts, Testimonials, ContactSection, Footer.
- `src/app/components/` — Page section components (Header, Hero, StayCards, etc.).
- `src/app/components/ui/` — shadcn/ui primitive components. The `cn()` utility is in `ui/utils.ts`.
- `src/app/components/figma/` — Figma Make helper components (e.g., `ImageWithFallback`).
- `src/imports/` — Figma Make auto-generated code (`Body.tsx`, `Body-2-990.tsx`, SVG data files). These are the original Figma exports; the hand-written components in `src/app/components/` are the active page sections.
- `src/styles/` — CSS entry points: `index.css` imports `fonts.css`, `tailwind.css`, and `theme.css`.

### i18n / Translations

Internationalization is handled via `src/app/components/LanguageContext.tsx`:
- A `LanguageProvider` wraps the app with React Context.
- `useLanguage()` hook returns `{ language, setLanguage, t }`.
- `t('keyName')` looks up a translation string. All translations (English, Malay, Chinese) are co-located in the same file as a `translations` object.
- Supported languages: `'en' | 'my' | 'zh'` (defined as the `Language` type).

### Styling Conventions

- **Tailwind v4** with CSS-variable-based theming in `src/styles/theme.css`. Primary color: `#F97316` (orange), secondary: `#3B82F6` (blue), background: `#FFFCF5` (warm white).
- **Fonts:** Fredoka (headings) and Quicksand (body), loaded from Google Fonts in `src/styles/fonts.css`.
- A noise texture overlay is applied globally via `body::before` in `theme.css`.
- Dark mode variant is defined (`@custom-variant dark`) but the site runs in light mode.

### Animations

Motion library (`motion/react`) is used throughout for hover/tap micro-interactions and scroll-linked animations (e.g., the tractor scroll progress indicator in the Header).
