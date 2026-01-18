# Tailwind Color Configuration

## Color Choices

- **Primary:** `blue` — Used for buttons, links, key accents
- **Secondary:** `red` — Used for tags, highlights, secondary elements
- **Neutral:** `slate` — Used for backgrounds, text, borders

## Usage Examples

### Primary (Blue)
```html
<!-- Buttons -->
<button class="bg-blue-600 hover:bg-blue-700 text-white">Primary Button</button>
<button class="bg-blue-500 dark:bg-blue-600">Dark Mode Button</button>

<!-- Links -->
<a class="text-blue-600 dark:text-blue-400 hover:underline">Link</a>

<!-- Badges -->
<span class="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">Badge</span>

<!-- Shadows -->
<div class="shadow-lg shadow-blue-500/25">Card with blue glow</div>
```

### Secondary (Red)
```html
<!-- Accent elements -->
<span class="bg-red-500 text-white">Accent Badge</span>

<!-- Decorative -->
<div class="bg-red-500/10 dark:bg-red-400/10 blur-3xl">Gradient blob</div>

<!-- Icons -->
<div class="bg-gradient-to-br from-red-500 to-red-600">Icon background</div>
```

### Neutral (Slate)
```html
<!-- Backgrounds -->
<div class="bg-slate-50 dark:bg-slate-950">Page background</div>
<div class="bg-white dark:bg-slate-800">Card background</div>

<!-- Text -->
<h1 class="text-slate-900 dark:text-white">Heading</h1>
<p class="text-slate-600 dark:text-slate-300">Body text</p>
<span class="text-slate-500 dark:text-slate-400">Muted text</span>

<!-- Borders -->
<div class="border border-slate-200 dark:border-slate-700">Card border</div>
```

## Dark Mode

All components use Tailwind's `dark:` variant for dark mode support. The design uses:

- Light mode background: `slate-50` (#f8fafc)
- Dark mode background: `slate-950` (#020617)
- Card backgrounds: `white` / `slate-800`

Dark mode can be triggered by:
1. System preference (`prefers-color-scheme: dark`)
2. Adding `class="dark"` to the `<html>` element
