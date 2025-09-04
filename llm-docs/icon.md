# Icon Component Documentation

## Component Name

Icon

## Brief Description

A utility component for rendering SVG icons with consistent sizing, colors, and accessibility attributes.

## Keywords

- Icon
- SVG
- Graphics
- Utility
- Decorative
- Symbol
- Visual

## Usage Description

The Icon component is a foundational utility component in the Reshaped design system that provides a consistent way to render SVG icons throughout your application. It wraps SVG elements or components with proper accessibility attributes, standardized sizing, and theme-aware color options.

This component is particularly useful when you need to display icons alongside text, in buttons, or as decorative elements. It automatically handles responsive sizing, applies consistent styling, and ensures proper accessibility by marking icons as decorative with `aria-hidden="true"`. The component supports both inline SVG elements and icon component references, making it flexible for different icon implementation approaches.

The Icon component integrates seamlessly with the Reshaped theming system, providing color options that automatically adapt to light and dark themes. It also supports responsive sizing, allowing icons to scale appropriately across different viewport sizes.

## Props Documentation

### svg

- **Type**: `React.ReactElement | React.ComponentType`
- **Required**: Yes
- **Description**: The SVG element or component to render as an icon. Can be either a JSX element or a component reference.
- **Example**: `<Icon svg={<svg>...</svg>} />` or `<Icon svg={CheckmarkIcon} />`

### size

- **Type**: `G.Responsive<number | string>`
- **Required**: No
- **Default**: `"1em"`
- **Description**: Sets the height of the icon. Can be a number (pixels), string (CSS units), or responsive object for different viewport sizes.
- **Example**: `size={24}`, `size="100%"`, `size={{ s: 16, m: 24 }}`

### color

- **Type**: `"neutral" | "neutral-faded" | "positive" | "critical" | "warning" | "primary" | "disabled"`
- **Required**: No
- **Default**: Inherits from parent element
- **Description**: Sets the icon color using predefined theme colors. When not specified, the icon inherits the current text color.
- **Example**: `color="primary"`, `color="critical"`

### autoWidth

- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When true, removes the square aspect ratio constraint and allows the icon to use its natural width. Useful for icons with non-square dimensions.
- **Example**: `autoWidth={true}`

### className

- **Type**: `G.ClassName`
- **Required**: No
- **Description**: Additional CSS class names to apply to the icon container. Can be a string, array of strings, or nested arrays.
- **Example**: `className="my-icon-class"`

### attributes

- **Type**: `G.Attributes<"span">`
- **Required**: No
- **Description**: Additional HTML attributes to apply to the icon's span container, including data attributes and event handlers.
- **Example**: `attributes={{ "data-testid": "icon", onClick: handleClick }}`

## Code Examples

### Basic Icon Usage

```tsx
import { Icon } from 'reshaped';
import CheckmarkIcon from './icons/Checkmark';

// Using an icon component
<Icon svg={CheckmarkIcon} />

// Using inline SVG
<Icon svg={
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 16.17l-3.5-3.5L4 14.17l5 5 10-10L17.5 7.67z"/>
  </svg>
} />
```

### Sized Icons

```tsx
// Fixed pixel size
<Icon svg={CheckmarkIcon} size={24} />

// Percentage size (relative to parent)
<Icon svg={CheckmarkIcon} size="100%" />

// Responsive sizing
<Icon
  svg={CheckmarkIcon}
  size={{
    s: 16,  // Small screens: 16px
    m: 20,  // Medium screens: 20px
    l: 24   // Large screens: 24px
  }}
/>

// Inherits font size (default behavior)
<Text variant="title-3">
  <Icon svg={CheckmarkIcon} /> Large Icon
</Text>
```

### Colored Icons

```tsx
// Themed colors
<Icon svg={CheckmarkIcon} color="positive" />
<Icon svg={WarningIcon} color="warning" />
<Icon svg={ErrorIcon} color="critical" />
<Icon svg={InfoIcon} color="primary" />

// Neutral colors
<Icon svg={CheckmarkIcon} color="neutral" />
<Icon svg={CheckmarkIcon} color="neutral-faded" />

// Disabled state
<Icon svg={CheckmarkIcon} color="disabled" />

// Inherit parent color (default)
<div style={{ color: 'red' }}>
  <Icon svg={CheckmarkIcon} />
</div>
```

### Auto-Width Icons

```tsx
// Default: Square aspect ratio
<Icon svg={MicrophoneIcon} size={32} />

// Auto-width: Natural icon proportions
<Icon svg={MicrophoneIcon} size={32} autoWidth />
```

### Icons with Custom Attributes

```tsx
// With additional HTML attributes
<Icon
  svg={CheckmarkIcon}
  size={20}
  className="success-icon"
  attributes={{
    "data-testid": "success-indicator",
    "data-status": "complete",
    id: "completion-icon",
  }}
/>
```

### Icons in Button Context

```tsx
import { Button, Icon } from 'reshaped';

// Icon with button (accessibility handled by button)
<Button>
  <Icon svg={PlusIcon} size={16} />
  Add Item
</Button>

// Icon-only button
<Button attributes={{ 'aria-label': 'Close dialog' }}>
  <Icon svg={CloseIcon} size={16} />
</Button>
```

## Accessibility Considerations

The Icon component is designed with accessibility in mind:

- **Decorative by Default**: All icons are marked with `aria-hidden="true"` as they are considered decorative elements
- **Focusable Prevention**: SVG elements are set to `focusable={false}` to prevent keyboard focus
- **Semantic Context**: When icons convey meaning, ensure the parent element or adjacent text provides appropriate context
- **Button Integration**: When used in buttons, the button should provide `aria-label` or descriptive text
- **Color Independence**: Never rely solely on color to convey information; always provide additional context

## Related Components

- **Button**: Often contains icons for actions and should provide appropriate accessibility labels
- **Text**: Can contain icons inline with text content, with icons automatically inheriting text size
- **View**: Can be used as a container for icons with specific layout requirements
- **Badge**: May contain small icons as status indicators
- **Alert**: Uses icons to reinforce the alert type (success, warning, error)
- **Breadcrumbs**: Uses icons for navigation indicators
- **Avatar**: May contain icon fallbacks when no image is available

The Icon component serves as a foundational element that integrates with most interactive and display components throughout the Reshaped design system.
