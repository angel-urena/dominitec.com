# Milestone 4: Contact

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-3 complete

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Backend form submission handling
- Email notification or data storage
- Integration of the provided UI components

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your form submission logic
- **DO** implement proper error handling and loading states
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate

---

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

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/contact/tests.md` for detailed test-writing instructions including:
- Key user flows to test (success and failure paths)
- Specific UI elements, button labels, and interactions to verify
- Expected behaviors and assertions

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### Components

Copy the Contact component from `product-plan/sections/contact/components/`:

- `Contact.tsx` — Main contact form component

### Data

The component expects this data shape (from `types.ts`):

```typescript
interface ContactProps {
  contact: ContactConfig
  onSubmit?: (data: ContactFormData) => void
}

interface ContactConfig {
  headline: string
  subtext: string
  submitButtonText: string
  fields: {
    name: ContactField
    email: ContactField
    message: ContactField
  }
  successMessage: string
}

interface ContactFormData {
  name: string
  email: string
  message: string
}
```

### Callbacks

Wire up these user actions:

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

## Files to Reference

- `product-plan/sections/contact/README.md` — Feature overview and design intent
- `product-plan/sections/contact/tests.md` — Test-writing instructions (use for TDD)
- `product-plan/sections/contact/components/` — React components
- `product-plan/sections/contact/types.ts` — TypeScript interfaces
- `product-plan/sections/contact/sample-data.json` — Test data
- `product-plan/sections/contact/screenshot.png` — Visual reference (if exists)

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

## Done When

- [ ] Tests written for key user flows (success and failure paths)
- [ ] All tests pass
- [ ] Contact component renders with data from sample-data.json
- [ ] Form validates required fields
- [ ] Form validates email format
- [ ] Loading state shows during submission
- [ ] Success notification appears after submission
- [ ] Form clears after successful submission
- [ ] Form submission is handled (email/database/CRM)
- [ ] Matches the visual design
- [ ] Responsive on mobile
- [ ] Works in light and dark mode
