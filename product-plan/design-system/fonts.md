# Typography Configuration

## Google Fonts Import

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or in your CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
```

## Font Usage

### Headings — Inter
Used for all headings and prominent text.

```html
<h1 class="font-sans font-bold">Main Headline</h1>
<h2 class="font-sans font-semibold">Section Title</h2>
```

Weight variations:
- `font-bold` (700) — Main headlines
- `font-semibold` (600) — Section titles, button text
- `font-medium` (500) — Labels, emphasized text

### Body — Inter
Used for all body text and UI elements.

```html
<p class="font-sans">Body text paragraph</p>
<span class="font-sans font-medium">Label text</span>
```

Weight variations:
- `font-normal` (400) — Body text, descriptions
- `font-medium` (500) — Labels, navigation

### Monospace — JetBrains Mono
Used for code snippets and technical content.

```html
<code class="font-mono">const code = 'example'</code>
<span class="font-mono text-sm">technical-term</span>
```

## Tailwind Configuration

If using Tailwind, extend your font family configuration:

```javascript
// tailwind.config.js (if needed for customization)
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
}
```

Note: With Tailwind CSS v4, you may configure this differently using CSS variables.
