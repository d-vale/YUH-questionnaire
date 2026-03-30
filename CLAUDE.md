# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test runner is configured.

## Architecture

This is a Next.js 16 project using the **App Router** (not Pages Router). All routes live under `app/`. React Server Components are the default — only add `"use client"` when necessary.

**Key conventions:**
- Path alias `@/` maps to the project root
- Tailwind CSS 4 is used via `@import "tailwindcss"` in `globals.css` (not the v3 `@tailwind` directives)
- Theming uses CSS custom properties (`--background`, `--foreground`) with dark mode via `prefers-color-scheme`
- Metadata is exported from layout/page files using the Next.js Metadata API

**Before writing any Next.js code**, read the relevant guide in `node_modules/next/dist/docs/` — this version has breaking changes from what you may know.
