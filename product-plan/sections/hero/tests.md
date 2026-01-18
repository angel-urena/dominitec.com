# Test Instructions: Hero Section

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Hero section displays Dominitec's value proposition with a headline, subtext, CTA button, and tech stack icons. The main interaction is clicking the CTA button to scroll to the Contact section.

---

## User Flow Tests

### Flow 1: View Hero Content

**Scenario:** User lands on the page and sees the hero content

**Setup:**
- Render Hero component with sample data
- No user interaction required

**Expected Results:**
- [ ] Headline "Quality Software" is visible
- [ ] Headline second part "Smart Pricing" is visible (blue colored)
- [ ] Subtext about Dominitec is visible
- [ ] "Get a Quote" button is visible
- [ ] "Technologies we work with" label is visible
- [ ] Tech stack icons are displayed (React, Node.js, TypeScript, PostgreSQL, AWS)

### Flow 2: Click CTA Button

**Scenario:** User clicks the "Get a Quote" button

**Setup:**
- Render Hero component with `onCtaClick` callback
- Mock the callback function

**Steps:**
1. User sees "Get a Quote" button
2. User clicks the button

**Expected Results:**
- [ ] `onCtaClick` callback is called exactly once
- [ ] No arguments are passed to the callback

---

## Component Interaction Tests

### Hero Component

**Renders correctly:**
- [ ] Displays headline text split into two lines (before and after comma)
- [ ] Displays subtext paragraph
- [ ] Displays CTA button with correct text
- [ ] Displays all tech stack items with names

**User interactions:**
- [ ] CTA button triggers `onCtaClick` when clicked
- [ ] CTA button has hover state (visual polish)

**Responsive behavior:**
- [ ] Layout switches from side-by-side to stacked on mobile
- [ ] All content remains visible on small screens

---

## Edge Cases

- [ ] Handles headline without comma (displays entire text in first line)
- [ ] Handles empty tech stack array (no tech icons displayed)
- [ ] Works with very long subtext (text wraps properly)

---

## Accessibility Checks

- [ ] CTA button is keyboard accessible
- [ ] All images have appropriate alt text (SVG icons have role="img" or are decorative)
- [ ] Color contrast meets WCAG standards
- [ ] Heading hierarchy is correct (h1 for main headline)

---

## Sample Test Data

```typescript
const mockHeroData = {
  headline: "Quality Software, Smart Pricing",
  subtext: "Dominitec delivers custom software and web applications with the quality you expect, at rates that make sense.",
  ctaText: "Get a Quote",
  techStack: [
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "AWS", icon: "aws" }
  ]
}

const mockOnCtaClick = jest.fn() // or vi.fn() for Vitest
```

---

## Notes for Test Implementation

- Mock the `onCtaClick` callback to verify it's called
- Test both light and dark mode if your setup supports it
- The component includes inline SVG icons that should render without external dependencies
