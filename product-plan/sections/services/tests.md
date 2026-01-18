# Test Instructions: Services Section

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Services section displays Dominitec's service offerings in a two-column card layout. Each card shows an icon, title, and description. This section is primarily display-only with hover effects for polish.

---

## User Flow Tests

### Flow 1: View Services Content

**Scenario:** User scrolls to the Services section and views offerings

**Setup:**
- Render Services component with sample data
- No user interaction required

**Expected Results:**
- [ ] Section heading "Our Services" is visible
- [ ] Subheading "Specialized development services..." is visible
- [ ] "What We Do" badge is visible
- [ ] Two service cards are displayed
- [ ] First card shows "Custom Software Development" title
- [ ] Second card shows "Web & Mobile Apps" title
- [ ] Both cards show descriptions
- [ ] "Ready to start your project?" text is visible at bottom

### Flow 2: Hover Interaction

**Scenario:** User hovers over service cards

**Setup:**
- Render Services component
- Simulate hover on card

**Steps:**
1. User hovers over first service card

**Expected Results:**
- [ ] Card shows visual lift effect (translateY)
- [ ] "Learn more" text becomes visible
- [ ] Card shadow intensifies

---

## Component Interaction Tests

### Services Component

**Renders correctly:**
- [ ] Displays section header with badge, title, and subtitle
- [ ] Displays correct number of service cards (based on data)
- [ ] Each card shows icon, title, and description
- [ ] Cards are arranged in 2-column grid on desktop

**Responsive behavior:**
- [ ] Cards stack vertically on mobile (single column)
- [ ] All content remains visible and readable

---

## Empty State Tests

### No Services

**Scenario:** Services array is empty

**Setup:**
- `services: []`

**Expected Results:**
- [ ] Section header still renders
- [ ] No cards are displayed
- [ ] No errors thrown

---

## Edge Cases

- [ ] Handles single service item (displays one card)
- [ ] Handles 3+ services (grid adapts appropriately)
- [ ] Works with very long service descriptions (text wraps)
- [ ] Unknown icon names render gracefully (doesn't break)

---

## Accessibility Checks

- [ ] All icons have appropriate accessible labels or are decorative
- [ ] Color contrast meets WCAG standards
- [ ] Heading hierarchy is correct (h2 for section title, h3 for card titles)
- [ ] Cards are not keyboard focusable (since they're not interactive)

---

## Sample Test Data

```typescript
const mockServicesData = {
  services: [
    {
      id: "custom-software",
      icon: "cog",
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up to match your exact business needs."
    },
    {
      id: "web-mobile",
      icon: "smartphone",
      title: "Web & Mobile Apps",
      description: "Modern, responsive applications that work beautifully across all devices."
    }
  ]
}

// Empty state
const mockEmptyServices = {
  services: []
}

// Single service
const mockSingleService = {
  services: [
    {
      id: "custom-software",
      icon: "cog",
      title: "Custom Software Development",
      description: "Tailored solutions built from the ground up."
    }
  ]
}
```

---

## Notes for Test Implementation

- This section has no callbacks to test (display-only)
- Focus on visual rendering and content accuracy
- Test hover states if your testing framework supports them
- The component includes inline SVG icons based on the `icon` prop
