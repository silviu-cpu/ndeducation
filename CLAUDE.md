# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ⚠️ This is NOT the Next.js you know

This project uses **Next.js 16.2.9** (with **React 19**), which has breaking changes from older versions — APIs, conventions, and file structure may differ from your training data. **Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js code**, and heed deprecation notices. The docs are organized as `01-app/`, `02-pages/`, `03-architecture/`, `04-community/`.

## Commands

This project uses **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`).

- `pnpm dev` — start the dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint (flat config, `eslint.config.mjs`)

There is **no test framework configured** in this project.

## Architecture

This is a fresh `create-next-app` scaffold using the **App Router**. The entire application lives in `app/`:

- `app/layout.tsx` — root layout; loads the Geist / Geist Mono fonts via `next/font/google` (exposed as the `--font-geist-sans` / `--font-geist-mono` CSS variables) and sets the `<html>`/`<body>` shell.
- `app/page.tsx` — the `/` route (Server Component by default).
- `app/globals.css` — global styles and Tailwind setup.

Key stack details:

- **Tailwind CSS v4** via the `@tailwindcss/postcss` PostCSS plugin (`postcss.config.mjs`). There is **no `tailwind.config.js`** — v4 is CSS-first, so theme/config lives inside `app/globals.css` (`@import "tailwindcss"`, `@theme`, etc.), not a JS config file.
- **TypeScript** is `strict`. The `@/*` path alias maps to the repo root (e.g. `@/app/...`).
- Static assets are served from `public/`.

When adding routes, create folders under `app/` with `page.tsx` (and optional `layout.tsx`, `loading.tsx`, `route.ts` for API handlers) — confirm the conventions against the bundled docs first, since this Next.js version may differ from what you expect.
