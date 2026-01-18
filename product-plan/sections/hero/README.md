# Hero Section

## Overview

A bold, eye-catching hero section that introduces Dominitec with a headline emphasizing quality and affordability. Features a split layout with compelling copy on one side and an illustration on the other, against an abstract geometric background.

## User Flows

- Visitor lands on page and immediately understands Dominitec's value proposition
- Visitor clicks "Get a Quote" CTA to jump to contact form
- Visitor sees tech stack icons to understand technical capabilities

## Design Decisions

- **Split Layout**: Content and illustration side-by-side on desktop, stacked on mobile
- **Code Window Mockup**: Reinforces the technical/development nature of the business
- **Floating Badges**: "DR-Based Team" and "Bilingual" badges highlight key differentiators
- **Tech Stack Icons**: Shows specific technologies to build credibility with technical audiences
- **Geometric Background**: Abstract shapes and gradient blobs create visual interest without distraction

## Data Used

**From Props:**
- `headline` — Main headline text (split on comma for styling)
- `subtext` — Supporting description text
- `ctaText` — Call-to-action button text
- `techStack` — Array of technology icons to display

## Visual Reference

See `screenshot.png` for the target UI design (if available).

## Components Provided

- `Hero` — Main hero section component with all visual elements

## Callback Props

| Callback | Description |
|----------|-------------|
| `onCtaClick` | Called when user clicks the CTA button |
