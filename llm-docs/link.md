# Link

**Brief Description**: A flexible link component that renders as either an anchor tag or button with consistent styling and optional icon support.

**Keywords**: Link, Navigation, Anchor, Button, Icon, Clickable, URL, Hyperlink

## Usage Description

The Link component is designed to provide consistent navigation elements throughout your application. It intelligently renders as either an HTML anchor tag when an `href` is provided or as a button element for JavaScript-based interactions. This makes it ideal for both traditional navigation links and interactive elements that trigger actions.

Use Link for navigating between pages, linking to external resources, or creating interactive elements that need to look and behave like links. The component supports multiple visual variants and color schemes to match your design system's requirements. It's particularly useful when you need consistent link styling with optional icons and accessibility features built-in.

The component is built on top of the Actionable component, inheriting its interaction patterns and accessibility features while providing link-specific styling and behavior.

## Props Documentation

### `children`

- **Type**: `React.ReactNode`
- **Required**: No
- **Description**: The content to be displayed within the link
- **Example**: `"Click here"` or `<span>Custom content</span>`

### `href`

- **Type**: `string`
- **Required**: No
- **Description**: URL destination for the link. When provided, renders as an anchor tag; otherwise renders as a button
- **Example**: `"/dashboard"`, `"https://example.com"`, `"#section"`

### `color`

- **Type**: `"inherit" | "critical" | "primary" | "positive" | "warning"`
- **Required**: No
- **Default**: `"primary"`
- **Description**: Sets the color scheme of the link
- **Example**: `"critical"` for error-related links, `"positive"` for success actions

### `variant`

- **Type**: `"plain" | "underline"`
- **Required**: No
- **Default**: `"underline"`
- **Description**: Visual style variant of the link
- **Example**: `"plain"` for subtle links, `"underline"` for traditional underlined links

### `icon`

- **Type**: `React.ReactElement | React.ComponentType`
- **Required**: No
- **Description**: Optional icon to display alongside the link text. Accepts SVG elements or icon components
- **Example**: `<ChevronRightIcon />` or imported icon component

### `disabled`

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: Disables the link, preventing interaction and applying disabled styling
- **Example**: `true` to disable the link

### `onClick`

- **Type**: `(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void`
- **Required**: No
- **Description**: Click event handler for the link
- **Example**: `() => console.log('Link clicked')`

### `type`

- **Type**: `React.ButtonHTMLAttributes<HTMLButtonElement>["type"]`
- **Required**: No
- **Description**: Button type when rendering as button (no href provided)
- **Example**: `"submit"`, `"button"`, `"reset"`

### `className`

- **Type**: `string`
- **Required**: No
- **Description**: Additional CSS classes to apply to the link
- **Example**: `"custom-link-style"`

### `attributes`

- **Type**: `G.Attributes<"button"> & Omit<React.JSX.IntrinsicElements["a"], keyof G.Attributes<"button">>`
- **Required**: No
- **Description**: Additional HTML attributes to pass to the underlying element
- **Example**: `{ "aria-label": "Navigate to dashboard" }`

### `stopPropagation`

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: Prevents event bubbling when the link is clicked
- **Example**: `true` to stop event propagation

## Code Examples

### Basic Link Usage

```tsx
import { Link } from 'reshaped';

// Simple navigation link
<Link href="/dashboard">
  Go to Dashboard
</Link>

// External link
<Link href="https://example.com" color="primary">
  Visit External Site
</Link>
```

### Button-Style Link

```tsx
// Link that acts as a button (no href)
<Link onClick={() => handleAction()} variant="plain">
  Trigger Action
</Link>

// Form submit button
<Link type="submit" color="positive">
  Submit Form
</Link>
```

### Links with Icons

```tsx
import { ChevronRightIcon, ExternalLinkIcon } from './icons';

// Link with trailing icon
<Link href="/next-page" icon={<ChevronRightIcon />}>
  Next Page
</Link>

// External link with icon
<Link
  href="https://docs.example.com"
  icon={<ExternalLinkIcon />}
  color="primary"
>
  View Documentation
</Link>
```

### Different Color Variants

```tsx
// Critical action link
<Link href="/delete-account" color="critical">
  Delete Account
</Link>

// Success action
<Link onClick={handleSuccess} color="positive" variant="plain">
  Mark as Complete
</Link>

// Warning link
<Link href="/billing" color="warning">
  Payment Required
</Link>

// Inherit parent color
<Link href="/profile" color="inherit">
  Edit Profile
</Link>
```

### Advanced Configuration

```tsx
// Disabled link with custom styling
<Link
  href="/premium-feature"
  disabled={!isPremiumUser}
  color="primary"
  className="premium-link"
  attributes={{
    'aria-label': 'Premium feature - upgrade required',
    'data-testid': 'premium-link'
  }}
>
  Premium Feature
</Link>

// Link with event handling and propagation control
<Link
  onClick={handleCardClick}
  stopPropagation={true}
  variant="plain"
  className="card-action"
>
  View Details
</Link>
```

## Accessibility Considerations

The Link component provides built-in accessibility features:

- Proper semantic HTML rendering (anchor vs button based on href presence)
- Keyboard navigation support inherited from Actionable component
- Focus management and visual focus indicators
- Screen reader compatibility with proper role attributes
- Support for ARIA attributes through the `attributes` prop

When using icons, consider providing descriptive text or aria-labels for screen readers. The component automatically handles color contrast for different variants and disabled states.

## Related Components

- **Actionable**: Base component that provides interaction behavior and accessibility features
- **Icon**: Used for rendering optional icons alongside link text
- **Button**: Similar interactive element for non-navigation actions
- **Text**: Can be used within Link children for advanced text styling
- **Navigation**: Higher-level navigation components that may use Link internally
