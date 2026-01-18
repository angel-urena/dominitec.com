# Test Instructions: Contact Section

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Contact section provides a form for visitors to request a quote. It includes name, email, and message fields with validation, a loading state during submission, and a success notification afterward.

---

## User Flow Tests

### Flow 1: Submit Valid Form

**Scenario:** User fills out all fields correctly and submits

**Setup:**
- Render Contact component with `onSubmit` callback
- Mock the callback function

**Steps:**
1. User enters "John Doe" in the name field
2. User enters "john@example.com" in the email field
3. User enters "I need a website built" in the message field
4. User clicks "Send Message" button

**Expected Results:**
- [ ] Loading spinner appears on button
- [ ] Button text changes to "Sending..."
- [ ] `onSubmit` callback is called with form data: `{ name: "John Doe", email: "john@example.com", message: "I need a website built" }`
- [ ] Success notification appears with message "Thanks for reaching out!"
- [ ] Form fields are cleared (reset to empty)
- [ ] Success notification disappears after ~4 seconds

### Flow 2: Validation Error - Empty Fields

**Scenario:** User clicks submit without filling any fields

**Setup:**
- Render Contact component
- Leave all fields empty

**Steps:**
1. User clicks "Send Message" button

**Expected Results:**
- [ ] Error message "Name is required" appears below name field
- [ ] Error message "Email is required" appears below email field
- [ ] Error message "Message is required" appears below message field
- [ ] `onSubmit` is NOT called
- [ ] Form is not submitted

### Flow 3: Validation Error - Invalid Email

**Scenario:** User enters invalid email format

**Setup:**
- Render Contact component

**Steps:**
1. User enters "John" in name field
2. User enters "not-an-email" in email field
3. User enters "Hello" in message field
4. User clicks "Send Message"

**Expected Results:**
- [ ] Error message "Please enter a valid email" appears below email field
- [ ] Name and message fields show no errors
- [ ] `onSubmit` is NOT called

### Flow 4: Error Clears on Input

**Scenario:** User fixes validation error by typing

**Setup:**
- Submit form with empty name to trigger error
- Then start typing in name field

**Steps:**
1. User clicks submit with empty name field
2. User sees "Name is required" error
3. User starts typing in name field

**Expected Results:**
- [ ] Error message disappears as soon as user types
- [ ] Field border returns to normal state

---

## Empty State Tests

This section doesn't have traditional empty states since it's a form. However, test the initial state:

### Initial Form State

**Scenario:** Form loads for the first time

**Expected Results:**
- [ ] All fields are empty
- [ ] No error messages are visible
- [ ] No success notification is visible
- [ ] Button shows "Send Message" (not loading)

---

## Component Interaction Tests

### Contact Component

**Renders correctly:**
- [ ] Displays headline "Get in Touch"
- [ ] Displays subtext about contacting
- [ ] Displays "Contact" badge
- [ ] Shows three form fields: Name, Email, Message
- [ ] Shows submit button with "Send Message" text
- [ ] Labels match: "Name", "Email", "Message"
- [ ] Placeholders match: "Your name", "you@example.com", "Tell us about your project..."

**Loading state:**
- [ ] Button shows spinner during submission
- [ ] Button text changes to "Sending..."
- [ ] Button is disabled during submission

**Success state:**
- [ ] Green success notification appears
- [ ] Shows checkmark icon
- [ ] Shows success message
- [ ] Notification animates in (fade-in)

**Error states:**
- [ ] Error messages appear in red
- [ ] Error icon appears next to message
- [ ] Field border turns red when invalid

---

## Edge Cases

- [ ] Handles rapid form submissions (button disabled during submit)
- [ ] Handles whitespace-only input (should trigger validation error)
- [ ] Works with very long messages (textarea handles overflow)
- [ ] Preserves form data if validation fails (doesn't clear on error)

---

## Accessibility Checks

- [ ] All form fields have associated labels (via htmlFor/id)
- [ ] Error messages are announced to screen readers
- [ ] Form can be submitted with keyboard (Enter in fields or button)
- [ ] Focus states are visible on all interactive elements
- [ ] Color is not the only indicator of errors (icon + text also used)

---

## Sample Test Data

```typescript
const mockContactConfig = {
  headline: "Get in Touch",
  subtext: "Have a project in mind? We'd love to hear about it.",
  submitButtonText: "Send Message",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@example.com" },
    message: { label: "Message", placeholder: "Tell us about your project..." }
  },
  successMessage: "Thanks for reaching out! We'll be in touch soon."
}

const mockOnSubmit = jest.fn() // or vi.fn() for Vitest

// Valid form data
const validFormData = {
  name: "John Doe",
  email: "john@example.com",
  message: "I need a website built for my business."
}

// Invalid email
const invalidEmailData = {
  name: "John Doe",
  email: "not-valid-email",
  message: "Hello"
}
```

---

## Notes for Test Implementation

- Mock `onSubmit` to verify it's called with correct data
- Use fake timers to test the 4-second success notification timeout
- The component uses React state internally - test behavior, not implementation
- Validation regex for email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Test both success and failure paths for comprehensive coverage
