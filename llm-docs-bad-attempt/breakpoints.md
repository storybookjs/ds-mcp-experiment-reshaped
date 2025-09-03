# Breakpoints

**Brief Description**: A responsive design utility system that provides predefined viewport breakpoints and enables responsive prop values across all Reshaped components.

**Keywords**: "Responsive Design", "Breakpoints", "Viewport", "Mobile First", "Media Queries", "Responsive Props", "CSS Grid", "Layout"

## Overview and Key Features

The Reshaped breakpoints system provides a foundation for responsive design by defining standard viewport breakpoints and enabling responsive prop values throughout the design system. The system uses a mobile-first approach and supports four viewport sizes: `s` (small), `m` (medium), `l` (large), and `xl` (extra large).

Key features include:
- **Predefined Breakpoints**: Standard viewport sizes optimized for modern devices
- **Responsive Props**: Object-based syntax for viewport-specific values
- **Mobile-First Cascading**: Values cascade up from smaller to larger viewports
- **CSS Custom Properties Integration**: Supports custom theme-based breakpoint overrides
- **TypeScript Support**: Fully typed responsive prop system
- **Dynamic Client-Side Resolution**: Real-time viewport detection and value switching

## Function Interface and TypeScript Definitions

### Core Breakpoint Constants

```typescript
// Default breakpoint values (in pixels)
const breakpoints = {
  m: 660,    // Medium viewport minimum width
  l: 900,    // Large viewport minimum width  
  xl: 1280,  // Extra large viewport minimum width
}
```

### Responsive Type System

```typescript
// Viewport types
type Viewport = "s" | "m" | "l" | "xl";

// Responsive value container
type ResponsiveOnly<T> = {
  [key in Viewport]?: T;
};

// Union type for responsive or static values
type Responsive<T> = T | ResponsiveOnly<T>;
```

### Media Query Definitions

The system generates the following media queries:

```typescript
const mediaQueries = {
  s: `(max-width: ${breakpoints.m - 1}px)`,                              // 0-659px
  m: `(min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px)`, // 660-899px  
  l: `(min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px)`, // 900-1279px
  xl: `(min-width: ${breakpoints.xl}px)`,                               // 1280px+
};
```

## Usage Examples

### Basic Responsive Props

```tsx
import { View, Grid, Text } from 'reshaped';

// Simple responsive sizing
function ResponsiveCard() {
  return (
    <View
      width={{ s: "100%", m: "50%", l: "33.33%" }}
      padding={{ s: 4, m: 6, l: 8 }}
      backgroundColor="neutral-faded"
    >
      <Text>Responsive card content</Text>
    </View>
  );
}
```

### Grid Layout with Responsive Columns

```tsx
import { Grid, View } from 'reshaped';

function ResponsiveGrid() {
  return (
    <Grid
      gap={{ s: 2, m: 4, l: 6 }}
      columns={{ s: 1, m: 2, l: 3, xl: 4 }}
      maxWidth={{ s: "100%", m: "800px", l: "1200px" }}
    >
      {Array.from({ length: 8 }, (_, i) => (
        <View
          key={i}
          backgroundColor="neutral-faded"
          borderRadius="medium"
          padding={{ s: 4, l: 6 }}
          height={{ s: 120, m: 150 }}
        >
          Item {i + 1}
        </View>
      ))}
    </Grid>
  );
}
```

### Typography Responsive Scaling

```tsx
import { Text, View } from 'reshaped';

function ResponsiveTypography() {
  return (
    <View padding={{ s: 4, m: 6, l: 8 }}>
      <Text
        variant={{ s: "title-4", m: "title-3", l: "title-2" }}
        weight={{ s: "medium", l: "semibold" }}
        align={{ s: "start", m: "center" }}
      >
        Responsive Heading
      </Text>
      
      <Text
        variant={{ s: "body-2", m: "body-1" }}
        color={{ s: "neutral", m: "neutral-faded" }}
        margin={{ s: [2, 0, 0], m: [4, 0, 0] }}
      >
        This text adapts its size and color based on viewport.
      </Text>
    </View>
  );
}
```

### Advanced Layout with Conditional Display

```tsx
import { View, Hidden, Grid } from 'reshaped';

function AdaptiveLayout() {
  return (
    <Grid
      columns={{ s: "1fr", m: "200px 1fr", l: "250px 1fr 200px" }}
      gap={{ s: 0, m: 4, l: 6 }}
      minHeight="100vh"
    >
      {/* Sidebar - hidden on small screens */}
      <Hidden hide={{ s: true }}>
        <View
          backgroundColor="neutral-faded"
          padding={{ m: 4, l: 6 }}
          borderRadius={{ m: "none", l: "medium" }}
        >
          Sidebar Navigation
        </View>
      </Hidden>

      {/* Main content */}
      <View
        padding={{ s: 4, m: 6, l: 8 }}
        maxWidth={{ s: "100%", xl: "800px" }}
      >
        <Text variant={{ s: "title-5", m: "title-4", l: "title-3" }}>
          Main Content Area
        </Text>
      </View>

      {/* Right sidebar - only on large screens */}
      <Hidden hide={{ s: true, m: true }}>
        <View
          backgroundColor="neutral-faded"
          padding={6}
          borderRadius="medium"
        >
          Additional Info
        </View>
      </Hidden>
    </Grid>
  );
}
```

### Using with Custom Hook

```tsx
import { useResponsiveClientValue } from 'reshaped';

function ComponentWithResponsiveLogic() {
  const columns = useResponsiveClientValue({
    s: 1,
    m: 2, 
    l: 3,
    xl: 4
  });
  
  const showSidebar = useResponsiveClientValue({
    s: false,
    m: true
  });
  
  const itemsPerRow = columns || 1; // Fallback for SSR
  
  return (
    <div>
      <p>Current columns: {itemsPerRow}</p>
      {showSidebar && <aside>Sidebar content</aside>}
      
      <Grid columns={columns} gap={4}>
        {/* Grid items */}
      </Grid>
    </div>
  );
}
```

## API Methods and Hook Usage

### useResponsiveClientValue Hook

The primary hook for accessing responsive values in component logic:

```typescript
function useResponsiveClientValue<T>(value: Responsive<T>): T | undefined
```

**Parameters:**
- `value`: Either a static value of type `T` or a responsive object with viewport keys

**Returns:**
- The resolved value for the current viewport, or `undefined` during SSR

**Value Resolution Logic:**
- `xl` viewport: `value.xl ?? value.l ?? value.m ?? value.s`
- `l` viewport: `value.l ?? value.m ?? value.s`  
- `m` viewport: `value.m ?? value.s`
- `s` viewport: `value.s`

### Integration with Components

All layout and styling components support responsive props:

```tsx
// Grid component with responsive props
<Grid
  gap={Responsive<number>}
  columns={Responsive<number | string>}
  align={Responsive<"start" | "center" | "end">}
  justify={Responsive<"start" | "center" | "end" | "between" | "around">}
  // ... other responsive props
/>

// View component with responsive styling  
<View
  width={Responsive<string | number>}
  height={Responsive<string | number>}
  padding={Responsive<number | number[]>}
  margin={Responsive<number | number[]>}
  backgroundColor={Responsive<string>}
  // ... other responsive props
/>
```

## Use Cases and Best Practices

### Mobile-First Design Pattern

```tsx
// ✅ Good: Start with mobile design, enhance for larger screens
<View
  padding={4}                    // Base mobile padding
  padding={{ m: 6, l: 8 }}      // Enhanced for medium and large
  width="100%"                   // Full width on mobile
  width={{ m: "80%", l: "60%" }} // Constrained on larger screens
>
```

### Efficient Responsive Grids

```tsx
// ✅ Good: Responsive grid that adapts naturally
<Grid
  columns={{ s: 1, m: 2, xl: 3 }}  // Skip 'l' to inherit from 'm'
  gap={{ s: 3, l: 5 }}             // Skip 'm' to inherit from 's'
>
  {items.map(item => (
    <Grid.Item
      colSpan={{ s: 1, xl: item.featured ? 2 : 1 }} // Featured items span more
      key={item.id}
    >
      <CardComponent item={item} />
    </Grid.Item>
  ))}
</Grid>
```

### Conditional Layout Components

```tsx
// ✅ Good: Different layouts for different screen sizes
function ResponsiveNavigation() {
  return (
    <>
      {/* Mobile hamburger menu */}
      <Hidden hide={{ m: true }}>
        <MobileMenu />
      </Hidden>
      
      {/* Desktop horizontal navigation */}
      <Hidden hide={{ s: true }}>
        <DesktopNav />
      </Hidden>
    </>
  );
}
```

## Performance Considerations

### Client-Side Resolution

- The `useResponsiveClientValue` hook uses `matchMedia` for efficient viewport detection
- Media query listeners are automatically managed (added/removed on mount/unmount)
- Values are cached and only update when viewport boundaries are crossed

### SSR Considerations

```tsx
// ✅ Good: Handle undefined values during SSR
function SSRSafeComponent() {
  const columns = useResponsiveClientValue({ s: 1, m: 2, l: 3 });
  
  // Provide fallback for server-side rendering
  return (
    <Grid columns={columns || 1} gap={4}>
      {/* Content */}
    </Grid>
  );
}
```

### Theme Integration

The system supports custom breakpoints via CSS custom properties:

```css
:root[data-rs-theme] {
  --rs-viewport-m-min: 768px;  /* Override medium breakpoint */
  --rs-viewport-l-min: 1024px; /* Override large breakpoint */
  --rs-viewport-xl-min: 1440px; /* Override extra large breakpoint */
}
```

### Memory Optimization

- Responsive objects are shallow-compared for performance
- Only specified viewport values are stored (sparse objects are efficient)
- Media query matchers are shared across component instances

## Related Components and Hooks

### Core Layout Components
- **Grid**: Primary layout component with extensive responsive prop support
- **View**: Base styling component accepting responsive props for all visual properties  
- **Container**: Content wrapper with responsive width constraints
- **Hidden**: Conditional visibility component with viewport-based hiding

### Responsive-Aware Components
- **Text**: Typography component with responsive variant, size, and spacing props
- **Image**: Media component with responsive sizing and aspect ratio controls
- **Accordion**: Collapsible content with responsive spacing and behavior options

### Related Hooks
- **useResponsiveClientValue**: Primary hook for consuming responsive values in component logic
- **useTheme**: Theme hook that provides access to custom breakpoint overrides
- **useIsomorphicLayoutEffect**: SSR-safe effect hook used internally for viewport detection

### Utilities
- **responsivePropDependency**: Internal utility for dependency tracking in responsive contexts
- **classNames**: Utility for conditional CSS class application, often used with responsive logic

The breakpoints system forms the foundation of Reshaped's responsive design capabilities, enabling consistent and predictable behavior across all components while maintaining flexibility for custom responsive logic.