# Services Section

## Overview

A simple services section showcasing Dominitec's two main offerings with visual service cards. Each card features an icon, title, and brief description to quickly communicate capabilities.

## User Flows

- Visitor scrolls to services section and sees the two main service offerings at a glance
- Visitor reads service descriptions to understand what Dominitec offers

## Design Decisions

- **Two-Column Grid**: Service cards displayed side-by-side on desktop for easy comparison
- **Card Hover Effects**: Subtle lift and glow on hover for visual polish
- **Gradient Icons**: Icons use brand colors (blue for first, red for second) with gradient backgrounds
- **"Learn more" Hint**: Appears on hover to suggest interactivity (can be wired up if needed)
- **Geometric Background**: Consistent with Hero section aesthetic

## Data Used

**From Props:**
- `services` — Array of service objects with id, icon, title, and description

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `Services` — Main services section with header and card grid

## Callback Props

This section has no callback props. Cards are display-only by default. Add callbacks if you want to make cards clickable.
