# Milestone 2: Hero

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Integration of the provided UI components
- CTA button scroll behavior

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your scroll handling
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate

---

## Goal

Implement the Hero section — the bold, eye-catching introduction with Dominitec's value proposition and a clear call-to-action.

## Overview

The Hero section immediately establishes Dominitec's value proposition: quality software at competitive rates from a Dominican Republic-based team. It features a split layout with compelling copy, a prominent CTA button, and tech stack icons.

**Key Functionality:**
- Display compelling headline and subtext
- "Get a Quote" CTA button that scrolls to Contact section
- Tech stack icons showing capabilities (React, Node.js, TypeScript, PostgreSQL, AWS)
- Code window mockup illustration
- Floating badges highlighting key differentiators

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/hero/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the Hero component from `product-plan/sections/hero/components/`:

- `Hero.tsx` — Main hero section component

### Data

The component expects this data shape (from `types.ts`):

```typescript
interface HeroProps {
  headline: string
  subtext: string
  ctaText: string
  techStack: TechStackItem[]
  onCtaClick?: () => void
}
```

### Callbacks

Wire up these user actions:

| Callback | Description |
|----------|-------------|
| `onCtaClick` | Scroll smoothly to the Contact section |

## Files to Reference

- `product-plan/sections/hero/README.md` — Feature overview and design intent
- `product-plan/sections/hero/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/hero/components/` — React components
- `product-plan/sections/hero/types.ts` — TypeScript interfaces
- `product-plan/sections/hero/sample-data.json` — Test data
- `product-plan/sections/hero/screenshot.png` — Visual reference (if exists)

## Expected User Flows

### Flow 1: View Hero Content

1. User lands on the page
2. User sees the headline "Quality Software, Smart Pricing"
3. User reads the subtext about Dominitec's value proposition
4. User sees the tech stack icons
5. **Outcome:** User understands what Dominitec offers

### Flow 2: Click CTA Button

1. User clicks "Get a Quote" button
2. Page smoothly scrolls to Contact section
3. **Outcome:** User is positioned at the contact form

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Hero component renders with data from sample-data.json
- [ ] CTA button scrolls to Contact section
- [ ] Tech stack icons display correctly
- [ ] Matches the visual design
- [ ] Responsive on mobile
- [ ] Works in light and dark mode
