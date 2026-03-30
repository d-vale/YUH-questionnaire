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

## Quiz standalone (`public/quiz.html`)

The quiz is a **single self-contained HTML file** — all CSS, JS, and HTML templates are inlined. There is no build step for this file; changes are live immediately.

**Structure:**
- `<style>` — all CSS, including responsive layout, animations, and theming via CSS custom properties
- `<div id="app">` — single mount point; views are rendered by JS
- `<script>` — vanilla JS: quiz state, `renderWelcome()`, `renderQuestion()`, `renderResult()`

**Screens / JS flow:**
1. `renderWelcome()` — adds `.welcome-active` to `#app`, shows intro card
2. `renderQuestion(index)` — removes `.welcome-active`, shows question card
3. `renderResult()` — shows result card with score and profile

**Fonts:** ProximaSoft (Medium + MediumIt) loaded via `@font-face` from `/fonts/`. Files live in `public/fonts/`.

**Design tokens (CSS custom properties):**
- `--purple: #FA5B35` — primary CTA color (Yuh orange-red)
- `--bg: #FFFFFF`, `--card: #F7F7F8`, `--border: #E2E2E5`
- `--text: #1A1A1A`, `--grey: #6B6B6B`

**Welcome screen gradient orbs (Yuh brandbook colors):**
- Scoped to `#app.welcome-active` via `::before` (Sky, top-left) and `::after` (Pearl, bottom-right)
- Sky orb: center `#94C2DF` (RGB 148,194,223) → `#E6DEF0` (RGB 230,222,240)
- Pearl orb: center `#CCB1DA` (more saturated lavender for visibility) → `#E6DEF0` → white → transparent
- Background on welcome: `#F3EFF9` (light lavender tint so Pearl orb is perceptible)
- `rgba()` **must** have 4 arguments (r, g, b, alpha) — 3-arg form is invalid
- Gradient stops must start at `0%` — starting at 45%+ leaves an empty center
- `filter: blur()` softens the orbs; lower values (60–90px) show more saturation
- Orb sizes use `clamp()` with vw-based middle value so they extend past viewport edges on mobile
