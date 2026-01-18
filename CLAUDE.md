# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Local development server
npm run build    # Production build
npm run preview  # Preview built site
```

No test framework is configured.

## Architecture

This is an Astro 5 landing page for a software development agency, using React components with TypeScript and Tailwind CSS 4.

**Stack:**
- Astro 5 with Node.js adapter (server output mode)
- React 19 for interactive components
- Tailwind CSS 4 with custom color palette
- Resend for contact form email delivery

**Structure:**
- `src/pages/` - Astro pages compose React components
- `src/components/` - React components (Hero, Services, Contact) hydrated with `client:load`
- `src/layouts/Layout.astro` - Base layout with dark mode support
- `src/pages/api/contact.ts` - POST endpoint for form submissions via Resend
- `product-plan/` - Design system docs and implementation guides

**Patterns:**
- Astro pages (.astro) compose React components (.tsx) via `client:load` directive
- Component-level state with React hooks (no global state)
- Dark mode via localStorage with inline script to prevent FOUC
- Client-side form validation mirrored in API endpoint
- HTML escaping in contact API for security

## Environment Variables

Required in `.env`:
- `RESEND_API_KEY` - Resend API key (format: `re_xxxxxxxxxxxx`)
- `CONTACT_EMAIL` - Recipient for contact form submissions
