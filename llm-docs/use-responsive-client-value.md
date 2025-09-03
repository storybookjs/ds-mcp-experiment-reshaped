# useResponsiveClientValue

A React hook that resolves responsive values on the client side by detecting the current viewport and returning the appropriate value for that breakpoint.

## Keywords

"Responsive Design", "Viewport Detection", "Breakpoints", "Client-side Resolution", "Media Queries", "Mobile-first", "Adaptive UI", "Screen Size"

## Overview and Purpose

The `useResponsiveClientValue` hook is a client-side utility that takes responsive value objects and returns the appropriate value based on the current viewport size. It works by dynamically detecting the browser's viewport width using media queries and returning the corresponding value from the responsive object.

This hook is particularly useful when you need to conditionally apply different values, styles, or behaviors based on screen size in JavaScript logic, rather than just CSS. It provides a way to make components truly responsive by adapting their behavior and properties to different viewport sizes.

The hook uses Reshaped's standardized breakpoint system (s, m, l, xl) and follows a mobile-first approach with intelligent fallbacks. When a specific breakpoint value is not provided, it gracefully falls back to the next smaller breakpoint that has a defined value.

## API Reference

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `value` | `Responsive<T>` | Yes | Either a single value of type `T` or a responsive object with breakpoint keys (s, m, l, xl) mapping to values of type `T` |

### Return Type

`T | undefined` - Returns the resolved value for the current viewport, or undefined if no appropriate value can be determined.

### Responsive Value Type

The `Responsive<T>` type accepts either:
- A single value of type `T` (non-responsive)
- A `ResponsiveOnly<T>` object with optional breakpoint properties:
  ```typescript
  {
    s?: T;    // Small viewport (< 660px)
    m?: T;    // Medium viewport (660px - 899px)
    l?: T;    // Large viewport (900px - 1279px)
    xl?: T;   // Extra large viewport (≥ 1280px)
  }
  ```

### Breakpoint System

The hook uses these default breakpoints:
- **s (small)**: `max-width: 659px`
- **m (medium)**: `min-width: 660px` and `max-width: 899px`
- **l (large)**: `min-width: 900px` and `max-width: 1279px`
- **xl (extra large)**: `min-width: 1280px`

Custom breakpoints can be defined via CSS custom properties on the `[data-rs-theme]` element:
- `--rs-viewport-m-min`
- `--rs-viewport-l-min`
- `--rs-viewport-xl-min`

## Usage Examples

### Basic Responsive Values

```tsx
import { useResponsiveClientValue } from 'reshaped';

function ResponsiveComponent() {
  const backgroundColor = useResponsiveClientValue({
    s: 'neutral',
    m: 'critical', 
    l: 'positive',
    xl: 'primary'
  });

  return (
    <View 
      backgroundColor={backgroundColor}
      padding={4}
    >
      Background changes color based on viewport size
    </View>
  );
}
```

### Boolean Values for Conditional Rendering

```tsx
import { useResponsiveClientValue } from 'reshaped';

function ConditionalComponent() {
  const showSidebar = useResponsiveClientValue({
    s: false,  // Hide on mobile
    l: true    // Show on large screens and up
  });

  const columns = useResponsiveClientValue({
    s: 1,
    m: 2,
    l: 3,
    xl: 4
  });

  return (
    <View direction="row">
      {showSidebar && <Sidebar />}
      <Grid columns={columns}>
        {/* Content */}
      </Grid>
    </View>
  );
}
```

### Fallback Behavior

```tsx
import { useResponsiveClientValue } from 'reshaped';

function FallbackExample() {
  // Only defines s and xl - m and l will fall back to s
  const fontSize = useResponsiveClientValue({
    s: 'small',
    xl: 'large'
  });

  // Resolution logic:
  // - s viewport: returns 'small'
  // - m viewport: returns 'small' (falls back to s)
  // - l viewport: returns 'small' (falls back to s)
  // - xl viewport: returns 'large'

  return <Text size={fontSize}>Responsive text</Text>;
}
```

### Non-Responsive Values

```tsx
import { useResponsiveClientValue } from 'reshaped';

function StaticValue() {
  // Passing a non-object value returns it directly
  const staticColor = useResponsiveClientValue('primary');
  
  return <View backgroundColor={staticColor}>Always primary</View>;
}
```

### Complex Object Values

```tsx
import { useResponsiveClientValue } from 'reshaped';

function ComplexResponsiveProps() {
  const modalConfig = useResponsiveClientValue({
    s: { size: 'fullscreen', position: 'bottom' },
    m: { size: 'medium', position: 'center' },
    l: { size: 'large', position: 'center' }
  });

  return (
    <Modal
      size={modalConfig?.size}
      position={modalConfig?.position}
      active={isOpen}
    >
      Modal content
    </Modal>
  );
}
```

## Responsive Design Patterns

### Mobile-First Approach

The hook follows a mobile-first philosophy where smaller breakpoint values serve as fallbacks for larger ones:

```tsx
// This pattern ensures mobile compatibility
const spacing = useResponsiveClientValue({
  s: 2,    // Base mobile spacing
  l: 4     // Larger spacing for desktop
});
// Medium (m) viewport will use s value (2)
```

### Progressive Enhancement

```tsx
function ProgressiveComponent() {
  const features = useResponsiveClientValue({
    s: { animations: false, sidebar: false },
    m: { animations: true, sidebar: false },
    l: { animations: true, sidebar: true }
  });

  return (
    <View>
      <MainContent animate={features?.animations} />
      {features?.sidebar && <Sidebar />}
    </View>
  );
}
```

### Viewport-Specific Components

```tsx
function AdaptiveLayout() {
  const layoutType = useResponsiveClientValue({
    s: 'stack',
    m: 'grid',
    xl: 'masonry'
  });

  switch (layoutType) {
    case 'stack':
      return <StackLayout />;
    case 'grid':
      return <GridLayout />;
    case 'masonry':
      return <MasonryLayout />;
    default:
      return <DefaultLayout />;
  }
}
```

## Best Practices

### 1. Define Mobile-First Values
Always define values for the `s` breakpoint as they serve as fallbacks:

```tsx
// Good - has mobile fallback
const value = useResponsiveClientValue({
  s: 'mobile-value',
  l: 'desktop-value'
});

// Potentially problematic - no mobile fallback
const value = useResponsiveClientValue({
  l: 'desktop-only-value'
});
```

### 2. Handle Undefined Values
The hook can return `undefined`, so handle this case appropriately:

```tsx
const responsiveValue = useResponsiveClientValue(config);
const finalValue = responsiveValue ?? defaultValue;
```

### 3. Use TypeScript for Type Safety
Leverage TypeScript to ensure consistent types across breakpoints:

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

const variant = useResponsiveClientValue<ButtonVariant>({
  s: 'ghost',
  l: 'primary'
});
```

### 4. Combine with Other Responsive Utilities
Use alongside other Reshaped responsive utilities for comprehensive responsive design:

```tsx
function ResponsiveCard() {
  const padding = useResponsiveClientValue({ s: 2, l: 4 });
  
  return (
    <View 
      padding={padding}
      width={{ s: '100%', m: 'auto' }}
      maxWidth={{ l: 600 }}
    >
      Card content
    </View>
  );
}
```

## Implementation Details

### Client-Side Only
This hook only works on the client side and uses browser APIs like `window.matchMedia()` and `document.querySelector()`. It will not resolve values during server-side rendering.

### Performance Considerations
- The hook sets up media query listeners only once per component instance
- Event listeners are properly cleaned up when the component unmounts
- Viewport detection is cached and shared across components through context

### Theme Integration
The hook integrates with Reshaped's theming system by reading custom breakpoint values from CSS custom properties on the theme root element.

## Related Components

- **View Component**: Often used together with responsive values for layout and styling
- **Grid/Container Components**: Frequently use responsive values for responsive grid systems
- **Modal Component**: Uses this hook internally for responsive positioning and sizing
- **Text Component**: Can accept responsive size and other properties
- **Button Components**: May use responsive variants and sizing
- **Layout Components**: Generally benefit from responsive behavior

The hook serves as a fundamental building block for creating responsive components and is used internally by many Reshaped components to provide responsive functionality.