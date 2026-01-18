# Milestone 1: Foundation

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Project setup and configuration
- Routing structure
- Contact form backend integration
- Integration of the provided UI components

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and form handling
- **DO** implement proper error handling and loading states
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on setup and integration

---

## Goal

Set up the foundational elements: project structure, design tokens, routing, and base layout for the landing page.

## What to Implement

### 1. Project Setup

Create a new React project with your preferred setup (Next.js, Vite, etc.) with:
- TypeScript configuration
- Tailwind CSS v4
- Testing framework (Jest, Vitest, or Playwright)

### 2. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

### 3. Page Structure

Create a single-page landing page structure with:
- Smooth scroll navigation between sections
- Anchor links for each section (hero, services, contact)
- Mobile-responsive layout
- Light and dark mode support

### 4. Base Layout

Set up the page layout:
- Full-width sections that stack vertically
- No navigation header (this is a simple landing page)
- Sections flow: Hero → Services → Contact

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/product-overview.md` — Product context

## Done When

- [ ] Project is set up with TypeScript and Tailwind CSS v4
- [ ] Design tokens are configured (colors, typography)
- [ ] Google Fonts are loaded (Inter, JetBrains Mono)
- [ ] Base page structure exists
- [ ] Dark mode toggle works (or respects system preference)
- [ ] Responsive on mobile
