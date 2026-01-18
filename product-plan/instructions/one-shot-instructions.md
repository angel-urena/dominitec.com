# Dominitec — Complete Implementation Instructions

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

## Test-Driven Development

Each section includes a `tests.md` file with detailed test-writing instructions. These are **framework-agnostic** — adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, etc.).

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write failing tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

The test instructions include:
- Specific UI elements, button labels, and interactions to verify
- Expected success and failure behaviors
- Data assertions and state validations

---

# Product Overview

A polished, professional landing page for Dominitec, a software development company based in the Dominican Republic. The site promotes custom software and web/mobile app development services to startups and small businesses, emphasizing cost-effective quality, bilingual capabilities, and fast delivery.

**Sections:**
1. **Hero** — Eye-catching introduction with value proposition and CTA
2. **Services** — Service cards showcasing offerings
3. **Contact** — Quote request form with validation

**Design System:**
- Colors: Primary (blue), Secondary (red), Neutral (slate)
- Typography: Inter for headings/body, JetBrains Mono for mono

---

# Milestone 1: Foundation

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

## Done When

- [ ] Project is set up with TypeScript and Tailwind CSS v4
- [ ] Design tokens are configured (colors, typography)
- [ ] Google Fonts are loaded (Inter, JetBrains Mono)
- [ ] Base page structure exists
- [ ] Dark mode toggle works (or respects system preference)
- [ ] Responsive on mobile

---

# Milestone 2: Hero

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

## What to Implement

### Components

Copy the Hero component from `product-plan/sections/hero/components/`:
- `Hero.tsx` — Main hero section component

### Callbacks

| Callback | Description |
|----------|-------------|
| `onCtaClick` | Scroll smoothly to the Contact section |

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

## Files to Reference

- `product-plan/sections/hero/tests.md` — Test-writing instructions
- `product-plan/sections/hero/components/` — React components
- `product-plan/sections/hero/types.ts` — TypeScript interfaces
- `product-plan/sections/hero/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Hero component renders with data
- [ ] CTA button scrolls to Contact section
- [ ] Tech stack icons display correctly
- [ ] Responsive on mobile
- [ ] Works in light and dark mode

---

# Milestone 3: Services

## Goal

Implement the Services section — a showcase of Dominitec's two main service offerings with polished service cards.

## Overview

The Services section presents Dominitec's core offerings: Custom Software Development and Web & Mobile Apps. Each service is displayed in an elegant card with an icon, title, and description.

**Key Functionality:**
- Display two service cards side-by-side (stacked on mobile)
- Each card shows icon, title, and description
- Cards have hover effects for visual polish
- "Get in touch" link hint at bottom

## What to Implement

### Components

Copy the Services component from `product-plan/sections/services/components/`:
- `Services.tsx` — Main services section with cards

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

## Files to Reference

- `product-plan/sections/services/tests.md` — Test-writing instructions
- `product-plan/sections/services/components/` — React components
- `product-plan/sections/services/types.ts` — TypeScript interfaces
- `product-plan/sections/services/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows
- [ ] All tests pass
- [ ] Services component renders with data
- [ ] Two service cards display correctly
- [ ] Cards show icons, titles, and descriptions
- [ ] Hover effects work
- [ ] Responsive on mobile (cards stack)
- [ ] Works in light and dark mode

---

# Milestone 4: Contact

## Goal

Implement the Contact section — a clean, focused form that converts visitors into leads by making it easy to request a quote.

## Overview

The Contact section provides a simple three-field form (name, email, message) that allows visitors to reach out for a quote. The form includes validation, loading states, and success feedback.

**Key Functionality:**
- Display form with name, email, and message fields
- Validate required fields with inline error messages
- Show loading state while submitting
- Display success notification after submission
- Reset form for potential additional submissions

## What to Implement

### Components

Copy the Contact component from `product-plan/sections/contact/components/`:
- `Contact.tsx` — Main contact form component

### Callbacks

| Callback | Description |
|----------|-------------|
| `onSubmit` | Handle form submission — send email, store in database, or integrate with CRM |

### Backend Integration

You'll need to implement form submission handling:

**Options:**
1. **Email Service** — Send form data via SendGrid, Mailgun, Resend, etc.
2. **Database Storage** — Store submissions in a database
3. **CRM Integration** — Send leads to HubSpot, Pipedrive, etc.
4. **Serverless Function** — Use a simple serverless function to handle submissions

## Expected User Flows

### Flow 1: Submit Valid Form
1. User fills in name field
2. User fills in email field with valid email
3. User writes a message
4. User clicks "Send Message" button
5. Form shows loading state
6. **Outcome:** Success notification appears, form clears

### Flow 2: Validation Error
1. User clicks "Send Message" without filling fields
2. **Outcome:** Inline error messages appear for each empty field

### Flow 3: Invalid Email
1. User fills name and message
2. User enters invalid email format
3. User clicks "Send Message"
4. **Outcome:** Email field shows "Please enter a valid email" error

## Files to Reference

- `product-plan/sections/contact/tests.md` — Test-writing instructions
- `product-plan/sections/contact/components/` — React components
- `product-plan/sections/contact/types.ts` — TypeScript interfaces
- `product-plan/sections/contact/sample-data.json` — Test data

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Contact component renders with data
- [ ] Form validates required fields
- [ ] Form validates email format
- [ ] Loading state shows during submission
- [ ] Success notification appears after submission
- [ ] Form clears after successful submission
- [ ] Form submission is handled (email/database/CRM)
- [ ] Responsive on mobile
- [ ] Works in light and dark mode
