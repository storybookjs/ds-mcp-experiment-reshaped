# Text

## Component Name

Text

## Brief Description

A flexible typography component for displaying text content with consistent styling and semantic HTML structure.

## Keywords

Typography, Text Display, Headings, Body Text, Semantic HTML, Responsive Typography, Font Weight, Text Alignment

## Usage Description

The Text component is the fundamental typography element in the Reshaped design system, providing a consistent approach to text rendering across applications. It supports a comprehensive range of text variants from large titles to small captions, ensuring visual hierarchy and readability across different contexts.

This component is designed to handle all text display needs, from page headings and section titles to body paragraphs and form labels. It automatically maps semantic HTML elements based on the variant (titles map to heading tags h1-h6), while providing extensive customization options for visual appearance, alignment, and responsive behavior.

The component excels in scenarios requiring responsive typography, semantic accessibility, and consistent brand typography implementation. It supports advanced features like text clamping for truncation, balanced text wrapping for improved readability, and monospace rendering for code or data display.

## Props Documentation

### variant

**Type:** `Responsive<"title-1" | "title-2" | "title-3" | "title-4" | "title-5" | "title-6" | "featured-1" | "featured-2" | "featured-3" | "body-1" | "body-2" | "body-3" | "caption-1" | "caption-2">`  
**Required:** No  
**Default:** `undefined` (renders as div with no specific typography)

Defines the typography variant and its associated styling. Title variants (title-1 through title-6) automatically map to semantic heading elements (h1-h6) and provide hierarchical text sizing. Featured variants offer emphasized text styling for callouts and highlights. Body variants provide standard paragraph text in different sizes, while caption variants offer smaller text for labels and metadata.

Supports responsive values: `{ s: "body-3", m: "title-4" }` allows different variants per viewport.

**Example values:** `"title-1"`, `"body-2"`, `{ s: "caption-1", m: "body-1" }`

### weight

**Type:** `Responsive<"regular" | "medium" | "bold">`  
**Required:** No  
**Default:** `undefined` (uses variant's default weight)

Controls the font weight of the text, overriding the variant's default weight. This allows fine-tuning of text emphasis while maintaining the variant's size and spacing characteristics.

Supports responsive values for different weights across viewports.

**Example values:** `"bold"`, `{ s: "regular", m: "bold" }`

### color

**Type:** `"neutral" | "neutral-faded" | "critical" | "warning" | "positive" | "primary" | "disabled"`  
**Required:** No  
**Default:** `undefined` (inherits parent color)

Sets the text color using the design system's semantic color palette. Colors are theme-aware and automatically adapt to light/dark modes.

**Example values:** `"primary"`, `"critical"`, `"neutral-faded"`

### align

**Type:** `Responsive<"start" | "center" | "end">`  
**Required:** No  
**Default:** `undefined` (inherits text alignment)

Controls text alignment within its container. Uses logical values (start/end) that adapt to text direction (RTL/LTR).

Supports responsive alignment for different viewport sizes.

**Example values:** `"center"`, `{ s: "center", m: "start" }`

### decoration

**Type:** `"line-through"`  
**Required:** No  
**Default:** `undefined`

Applies text decoration styling. Currently supports line-through for indicating deleted or outdated content.

**Example values:** `"line-through"`

### maxLines

**Type:** `number`  
**Required:** No  
**Default:** `undefined`

Limits text to a specified number of lines using CSS line clamping. Text exceeding the limit is truncated with an ellipsis. Useful for creating consistent card layouts or preventing layout overflow.

**Example values:** `1`, `2`, `3`

### wrap

**Type:** `"balance"`  
**Required:** No  
**Default:** `undefined`

Controls text wrapping behavior. The "balance" value uses CSS text-wrap: balance for improved line length distribution, particularly useful for headlines and short paragraphs.

**Example values:** `"balance"`

### monospace

**Type:** `boolean`  
**Required:** No  
**Default:** `undefined`

Renders text using the system's monospace font family. Ideal for code snippets, data tables, or any content requiring fixed-width character spacing.

**Example values:** `true`, `false`

### as

**Type:** `keyof React.JSX.IntrinsicElements`  
**Required:** No  
**Default:** Auto-determined based on variant or "div"

Overrides the rendered HTML element. By default, title variants render as their corresponding heading elements (title-1 → h1, title-2 → h2, etc.), while other variants render as div elements.

**Example values:** `"p"`, `"span"`, `"h1"`, `"section"`

### children

**Type:** `React.ReactNode`  
**Required:** No  
**Default:** `undefined`

The text content or child elements to be rendered within the component.

### className

**Type:** `ClassName` (string | array of strings)  
**Required:** No  
**Default:** `undefined`

Additional CSS classes to apply to the component for custom styling.

### attributes

**Type:** `Attributes<TagName>` (HTML attributes + data attributes)  
**Required:** No  
**Default:** `undefined`

HTML attributes to apply to the rendered element, including data attributes, ARIA attributes, and standard HTML properties. The type adapts based on the `as` prop value.

## Code Examples

### Basic Typography Variants

```tsx
// Page title with semantic h1
<Text variant="title-1">Main Page Heading</Text>

// Section heading
<Text variant="title-3">Section Title</Text>

// Body paragraph
<Text variant="body-1">
  This is the main body text content that provides detailed information
  to the user about the current section or topic.
</Text>

// Caption or metadata
<Text variant="caption-1" color="neutral-faded">
  Last updated: March 2024
</Text>
```

### Responsive Typography

```tsx
// Mobile-first responsive variant
<Text variant={{ s: "body-3", m: "body-2", l: "body-1" }}>
  This text gets larger on bigger screens
</Text>

// Responsive weight and alignment
<Text
  variant="title-2"
  weight={{ s: "medium", m: "bold" }}
  align={{ s: "center", m: "start" }}
>
  Responsive Heading
</Text>
```

### Text Truncation and Wrapping

```tsx
// Truncate to 2 lines for card layouts
<Text variant="body-2" maxLines={2}>
  Long content that should be truncated after two lines to maintain
  consistent card heights and prevent layout issues in grid systems.
</Text>

// Balanced text wrapping for headlines
<Text variant="title-2" wrap="balance">
  The design system you want to build
</Text>

// Single line truncation with word breaking
<Text variant="body-1" maxLines={1}>
  Very long URL or content that should break: https://example.com/very/long/path
</Text>
```

### Semantic Colors and States

```tsx
// Status messages with semantic colors
<Text color="positive">Operation completed successfully</Text>
<Text color="warning">Please review your settings</Text>
<Text color="critical">Error: Unable to save changes</Text>

// Primary brand color for important content
<Text variant="featured-1" color="primary">
  Featured Content
</Text>

// Disabled state with appropriate accessibility
<Text color="disabled" attributes={{ "aria-disabled": true }}>
  Unavailable Option
</Text>
```

### Monospace and Code Display

```tsx
// Inline code snippet
<Text monospace variant="body-2">
  const message = "Hello, World!";
</Text>

// Monospace with custom styling
<Text
  monospace
  variant="caption-1"
  as="code"
  attributes={{
    style: { backgroundColor: "var(--rs-color-background-neutral-faded)" }
  }}
>
  npm install reshaped
</Text>
```

### Custom Element Rendering

```tsx
// Override default heading mapping
<Text variant="title-2" as="h1">
  Page Title (renders as h1 despite title-2 variant)
</Text>

// Render as paragraph with title styling
<Text variant="title-4" as="p">
  Large paragraph text
</Text>

// Span for inline text with custom attributes
<Text
  as="span"
  variant="body-2"
  weight="medium"
  attributes={{
    id: "username",
    "data-testid": "user-display-name"
  }}
>
  John Doe
</Text>
```

## Related Components

- **Reshaped**: The main provider component that establishes theming context for Text color and typography tokens
- **Link**: Often used together with Text for creating text with interactive elements
- **Badge**: Frequently combines with Text for labeling and status indication
- **Card**: Text serves as the primary content component within Card layouts
- **Modal**: Text components are used extensively for modal titles and content
- **Toast**: Uses Text for displaying notification messages with appropriate semantic colors
- **Button**: May contain Text elements for button labels with consistent typography
- **TextField/TextArea**: Form components that work alongside Text for labels and helper text
- **Tooltip**: Contains Text elements for displaying contextual information

## Accessibility Considerations

- Automatically maps title variants to semantic heading elements (h1-h6) for proper document structure
- Supports ARIA attributes through the `attributes` prop for enhanced accessibility
- Color variants maintain sufficient contrast ratios across light and dark themes
- The `disabled` color variant should be paired with `aria-disabled` attribute
- Responsive typography ensures readability across different screen sizes and zoom levels
- Line clamping (`maxLines`) maintains focus management by preventing content overflow
- Monospace option supports accessible code presentation with proper character spacing
