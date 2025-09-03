# Skeleton

A loading placeholder component that displays a shimmering animation to indicate content is being loaded.

## Keywords

Loading, Placeholder, Shimmer, Content Loading, UI State, Skeleton Screen, Animation

## Usage Description

The Skeleton component is used to create placeholder content that mimics the structure of the actual content while it loads. This provides users with visual feedback that content is coming and helps maintain layout stability during loading states. Skeleton components are particularly effective for improving perceived performance by giving users something to look at while waiting.

Use Skeleton components when loading data from APIs, rendering lists of content, or any scenario where content might take time to appear. They work especially well for card layouts, text content, images, and profile pictures. The component supports both text-like placeholders and custom shapes through width and height configuration.

The component includes a subtle pulsing animation that respects the user's motion preferences, automatically disabling animation when `prefers-reduced-motion` is set.

## Props Documentation

### width
- **Type**: `string | number | { s?: string | number, m?: string | number, l?: string | number, xl?: string | number }`
- **Required**: No
- **Default**: `undefined` (defaults to text-like width)
- **Description**: Sets the width of the skeleton placeholder. Can be a CSS value (string) or number (pixels). Supports responsive breakpoints using viewport keys (s, m, l, xl).
- **Example values**: `"100px"`, `200`, `{ s: "50px", m: "100px" }`

### height
- **Type**: `string | number | { s?: string | number, m?: string | number, l?: string | number, xl?: string | number }`
- **Required**: No
- **Default**: `undefined` (defaults to text-like height with min-height)
- **Description**: Sets the height of the skeleton placeholder. Can be a CSS value (string) or number (pixels). Supports responsive breakpoints using viewport keys (s, m, l, xl).
- **Example values**: `"60px"`, `100`, `{ s: "30px", m: "60px" }`

### borderRadius
- **Type**: `"small" | "medium" | "large" | "circular" | "none" | { s?: "small" | "medium" | "large" | "circular" | "none", m?: "small" | "medium" | "large" | "circular" | "none", l?: "small" | "medium" | "large" | "circular" | "none", xl?: "small" | "medium" | "large" | "circular" | "none" }`
- **Required**: No
- **Default**: `"small"`
- **Description**: Controls the border radius of the skeleton. Use "circular" for profile pictures or avatars. Supports responsive values.
- **Example values**: `"medium"`, `"circular"`, `{ s: "small", m: "large" }`

### className
- **Type**: `string | string[] | (string | null | undefined | false)[]`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS class names to apply to the skeleton component.
- **Example values**: `"custom-skeleton"`, `["skeleton", "loading"]`

### attributes
- **Type**: `React.HTMLAttributes<HTMLDivElement> & Record<'data-${string}', string | boolean> & { style?: React.CSSProperties | (React.CSSProperties & Record<'--${string}', string | number | undefined>) }`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes and data attributes to pass to the underlying div element. Includes support for CSS custom properties.
- **Example values**: `{ "data-testid": "skeleton-loader", "aria-label": "Loading content" }`

## Code Examples

### Basic Text Skeleton
```tsx
import { Skeleton } from 'reshaped';

// Simple text placeholder - uses default dimensions
function TextSkeleton() {
  return <Skeleton />;
}
```
This creates a basic text-like skeleton with default width and a minimum height suitable for single lines of text.

### Rectangle Placeholder
```tsx
import { Skeleton } from 'reshaped';

// Card or image placeholder
function CardSkeleton() {
  return (
    <Skeleton 
      width="300px" 
      height="200px" 
      borderRadius="medium"
    />
  );
}
```
Perfect for loading states of cards, images, or rectangular content areas with rounded corners.

### Circular Avatar Placeholder
```tsx
import { Skeleton } from 'reshaped';

// Profile picture placeholder
function AvatarSkeleton() {
  return (
    <Skeleton 
      width="60px" 
      height="60px" 
      borderRadius="circular"
    />
  );
}
```
Ideal for profile pictures, user avatars, or any circular content that needs a loading placeholder.

### Responsive Skeleton
```tsx
import { Skeleton } from 'reshaped';

// Responsive skeleton that adapts to screen size
function ResponsiveSkeleton() {
  return (
    <Skeleton 
      width={{ s: "100px", m: "200px", l: "300px" }}
      height={{ s: "60px", m: "120px", l: "180px" }}
      borderRadius={{ s: "small", m: "medium" }}
    />
  );
}
```
Shows how to create responsive skeletons that change size and border radius across different viewport sizes.

### Complete Loading Layout
```tsx
import { Skeleton } from 'reshaped';

// Complex loading layout combining multiple skeletons
function ArticleSkeleton() {
  return (
    <div style={{ padding: '16px', maxWidth: '400px' }}>
      {/* Header with avatar and text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <Skeleton width="40px" height="40px" borderRadius="circular" />
        <div style={{ flex: 1 }}>
          <Skeleton width="120px" style={{ marginBottom: '4px' }} />
          <Skeleton width="80px" />
        </div>
      </div>
      
      {/* Content image */}
      <Skeleton 
        width="100%" 
        height="200px" 
        borderRadius="medium"
        className="content-image"
        style={{ marginBottom: '16px' }}
      />
      
      {/* Text content */}
      <Skeleton width="100%" style={{ marginBottom: '8px' }} />
      <Skeleton width="90%" style={{ marginBottom: '8px' }} />
      <Skeleton width="75%" />
    </div>
  );
}
```
Demonstrates building a complete article loading layout using multiple skeleton components with custom styling and responsive behavior.

## Accessibility Considerations

The Skeleton component automatically respects the user's motion preferences:
- Animation is disabled when `prefers-reduced-motion: reduce` is set in the user's system preferences
- Consider adding `aria-label` or `aria-describedby` attributes via the `attributes` prop to provide context for screen readers
- Use descriptive labels like "Loading content" or "Loading user profile" to inform users about what is being loaded

## Related Components

- **View**: The underlying layout component that Skeleton is built upon. Provides the foundation for styling and positioning
- **Loader**: Alternative loading indicator for when specific loading animations are needed instead of placeholder content
- **ProgressBar**: Use for indicating progress of known loading operations rather than indeterminate loading states