# Contact Section

## Overview

A clean, focused contact form that allows visitors to reach out for a quote. The section features a professional tone with a simple three-field form (name, email, message) that resets after submission with a brief confirmation notification.

## User Flows

- User fills out name, email, and message fields
- User clicks submit button
- Form validates required fields
- On success: brief notification appears, form clears for potential additional submissions

## Design Decisions

- **Single-Column Form**: Clean, focused layout that doesn't overwhelm
- **Inline Validation**: Error messages appear directly below each field
- **Success Notification**: Prominent but temporary (4 seconds) feedback
- **Loading State**: Spinner on button during submission
- **Gradient Button**: Consistent with Hero CTA styling
- **Geometric Background**: Consistent with other sections

## Data Used

**From Props:**
- `contact` — Configuration object with headline, subtext, field labels/placeholders, button text, and success message

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `Contact` — Main contact form component with validation and states

## Callback Props

| Callback | Description |
|----------|-------------|
| `onSubmit` | Called when user submits valid form data. Receives `ContactFormData` object with name, email, and message. |

## Form Validation

Built-in validation includes:
- **Name**: Required (must not be empty)
- **Email**: Required, must match email format
- **Message**: Required (must not be empty)

Validation runs on submit. Errors clear when user starts typing in the field.
