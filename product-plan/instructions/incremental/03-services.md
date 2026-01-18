# Milestone 3: Services

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) and Milestone 2 (Hero) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Integration of the provided UI components

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate

---

## Goal

Implement the Services section — a showcase of Dominitec's two main service offerings with polished service cards.

## Overview

The Services section presents Dominitec's core offerings: Custom Software Development and Web & Mobile Apps. Each service is displayed in an elegant card with an icon, title, and description.

**Key Functionality:**
- Display two service cards side-by-side (stacked on mobile)
- Each card shows icon, title, and description
- Cards have hover effects for visual polish
- "Get in touch" link hint at bottom

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/services/tests.md` for detailed test-writing instructions including:
- Key user flows to test
- Specific UI elements to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the Services component from `product-plan/sections/services/components/`:

- `Services.tsx` — Main services section with cards

### Data

The component expects this data shape (from `types.ts`):

```typescript
interface ServicesProps {
  services: Service[]
}

interface Service {
  id: string
  icon: string
  title: string
  description: string
}
```

## Files to Reference

- `product-plan/sections/services/README.md` — Feature overview and design intent
- `product-plan/sections/services/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/services/components/` — React components
- `product-plan/sections/services/types.ts` — TypeScript interfaces
- `product-plan/sections/services/sample-data.json` — Test data
- `product-plan/sections/services/screenshot.png` — Visual reference (if exists)

## Expected User Flows

### Flow 1: View Services

1. User scrolls to Services section
2. User sees "Our Services" heading
3. User sees two service cards displayed
4. **Outcome:** User understands Dominitec's offerings

### Flow 2: Explore Service Details

1. User reads service card titles
2. User reads service descriptions
3. User hovers over cards (sees visual feedback)
4. **Outcome:** User has detailed understanding of each service

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Services component renders with data from sample-data.json
- [ ] Two service cards display correctly
- [ ] Cards show icons, titles, and descriptions
- [ ] Hover effects work
- [ ] Matches the visual design
- [ ] Responsive on mobile (cards stack)
- [ ] Works in light and dark mode
