# View

## Component Name
View

## Brief Description
A versatile layout component that provides flexbox-based container functionality with comprehensive styling, spacing, and positioning capabilities.

## Keywords
Layout, Container, Flexbox, Spacing, Positioning, Grid System, Responsive Design, Composition

## Usage Description

The View component serves as the primary layout building block in the Reshaped design system, offering a comprehensive flexbox-based container solution. It functions as both a standalone container and a composition framework for building complex layouts. The component excels in scenarios where you need precise control over element arrangement, spacing, and responsive behavior.

View is particularly powerful for creating dashboard layouts, form structures, card arrangements, and any scenario requiring systematic spacing and alignment. It supports responsive design through breakpoint-specific property values and includes a robust grid system through its companion View.Item component. The component can adapt to various HTML elements through the `as` prop, making it suitable for semantic HTML structure while maintaining design consistency.

The component's strength lies in its ability to replace multiple CSS classes and complex layout logic with a single, declarative API that handles responsive behavior, spacing calculations, and accessibility considerations automatically.

## Props Documentation

### Layout Props

**align** - `Responsive<"start" | "center" | "end" | "stretch" | "baseline">`  
Optional. Controls flexbox align-items behavior. Determines how flex items are aligned along the cross-axis.  
Example values: `"center"`, `{ s: "start", m: "center" }`

**justify** - `Responsive<"start" | "center" | "end" | "space-between">`  
Optional. Controls flexbox justify-content behavior. Determines how flex items are distributed along the main axis.  
Example values: `"space-between"`, `{ s: "start", l: "center" }`

**direction** - `Responsive<"row" | "column" | "row-reverse" | "column-reverse">`  
Optional. Sets the primary axis of the flex container. Automatically enables flex display when provided.  
Default: `"column"` when flex is enabled

**wrap** - `Responsive<boolean>`  
Optional. Controls whether flex items should wrap to new lines.  
Example values: `true`, `{ s: false, m: true }`

**gap** - `Responsive<number>`  
Optional. Sets spacing between child elements using the design system's spacing scale.  
Example values: `4`, `{ s: 2, m: 4, l: 6 }`

**divided** - `boolean`  
Optional. When true, automatically inserts divider elements between child components.  
Default: `false`

### Sizing Props

**height** - `Responsive<string | number>`  
Optional. Sets the height of the container.  
Example values: `"100vh"`, `400`, `{ s: 200, l: 400 }`

**width** - `Responsive<string | number>`  
Optional. Sets the width of the container.  
Example values: `"100%"`, `320`, `{ s: "100%", m: 600 }`

**aspectRatio** - `Responsive<number>`  
Optional. Maintains a specific aspect ratio for the container.  
Example values: `1.5`, `{ s: 1, m: 16/9 }`

**maxHeight** - `Responsive<string | number>`  
Optional. Sets the maximum height constraint.

**maxWidth** - `Responsive<string | number>`  
Optional. Sets the maximum width constraint.

**minHeight** - `Responsive<string | number>`  
Optional. Sets the minimum height constraint.

**minWidth** - `Responsive<string | number>`  
Optional. Sets the minimum width constraint.

### Spacing Props

**padding** - `Responsive<number>`  
Optional. Sets uniform padding using the design system's spacing scale.  
Example values: `4`, `{ s: 2, m: 4 }`

**paddingTop** - `Responsive<number>`  
Optional. Sets top padding specifically.

**paddingBottom** - `Responsive<number>`  
Optional. Sets bottom padding specifically.

**paddingStart** - `Responsive<number>`  
Optional. Sets logical start padding (left in LTR, right in RTL).

**paddingEnd** - `Responsive<number>`  
Optional. Sets logical end padding (right in LTR, left in RTL).

**paddingInline** - `Responsive<number>`  
Optional. Sets horizontal padding (start and end).

**paddingBlock** - `Responsive<number>`  
Optional. Sets vertical padding (top and bottom).

**bleed** - `Responsive<number>`  
Optional. Creates negative margin effect, extending content beyond container bounds.

### Visual Style Props

**backgroundColor** - `"neutral" | "neutral-faded" | "critical" | "critical-faded" | "positive" | "warning" | "warning-faded" | "positive-faded" | "primary" | "primary-faded" | "elevation-base" | "elevation-raised" | "elevation-overlay" | "page" | "page-faded" | "disabled" | "disabled-faded" | "brand" | "white" | "black"`  
Optional. Sets the background color using design system tokens.

**borderColor** - `Responsive<"neutral" | "neutral-faded" | "critical" | "critical-faded" | "warning" | "warning-faded" | "positive" | "positive-faded" | "primary" | "primary-faded" | "disabled" | "brand" | "transparent">`  
Optional. Sets border color using design system tokens.

**border** - `Responsive<boolean>`  
Optional. Adds border on all sides when true.

**borderTop** - `Responsive<boolean>`  
Optional. Adds border on top edge when true.

**borderBottom** - `Responsive<boolean>`  
Optional. Adds border on bottom edge when true.

**borderStart** - `Responsive<boolean>`  
Optional. Adds border on logical start edge when true.

**borderEnd** - `Responsive<boolean>`  
Optional. Adds border on logical end edge when true.

**borderInline** - `Responsive<boolean>`  
Optional. Adds borders on horizontal edges when true.

**borderBlock** - `Responsive<boolean>`  
Optional. Adds borders on vertical edges when true.

**borderRadius** - `Responsive<"small" | "medium" | "large" | "circular" | "none">`  
Optional. Sets border radius using design system tokens.

**shadow** - `"raised" | "overlay"`  
Optional. Applies elevation shadow effect.

**textAlign** - `Responsive<"start" | "center" | "end">`  
Optional. Sets text alignment for content.

**overflow** - `"hidden" | "auto"`  
Optional. Controls overflow behavior.

**animated** - `boolean`  
Optional. Enables smooth transitions for background, color, border, and shadow changes.  
Default: `false`

### Positioning Props

**position** - `Responsive<"relative" | "absolute" | "fixed" | "sticky" | "static">`  
Optional. Sets CSS position property.

**inset** - `Responsive<number | "auto">`  
Optional. Sets all inset values (top, right, bottom, left) uniformly.

**insetTop** - `Responsive<number | "auto">`  
Optional. Sets top inset value.

**insetBottom** - `Responsive<number | "auto">`  
Optional. Sets bottom inset value.

**insetStart** - `Responsive<number | "auto">`  
Optional. Sets logical start inset value.

**insetEnd** - `Responsive<number | "auto">`  
Optional. Sets logical end inset value.

**zIndex** - `number`  
Optional. Sets the z-index stacking order.

### Item-Specific Props (for parent container)

**grow** - `Responsive<boolean>`  
Optional. When used on View, makes it behave as a flex item that can grow.

**shrink** - `boolean`  
Optional. When used on View, controls whether it can shrink as a flex item.

### Standard Props

**as** - `keyof React.JSX.IntrinsicElements`  
Optional. The HTML element or component to render.  
Default: `"div"`

**children** - `React.ReactNode`  
Optional. Child elements to render within the View.

**className** - `string`  
Optional. Additional CSS classes to apply.

**attributes** - `React.JSX.IntrinsicElements[TagName]`  
Optional. Additional HTML attributes specific to the chosen element type.

## View.Item Props Documentation

The View.Item component provides granular control over individual items within a View container.

**order** - `Responsive<number>`  
Optional. Sets flexbox order property for the item.

**columns** - `Responsive<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto">`  
Optional. Sets item width based on a 12-column grid system.

**grow** - `Responsive<boolean>`  
Optional. Controls whether the item should grow to fill available space.

**shrink** - `boolean`  
Optional. Controls whether the item can shrink when space is limited.

**gapBefore** - `Responsive<number> | "auto"`  
Optional. Adds spacing before this item specifically. `"auto"` pushes item to opposite end.

**as** - `keyof React.JSX.IntrinsicElements`  
Optional. The HTML element to render.  
Default: `"div"`

**children** - `React.ReactNode`  
Optional. Child elements to render within the item.

**className** - `string`  
Optional. Additional CSS classes to apply.

**attributes** - `React.JSX.IntrinsicElements[TagName]`  
Optional. Additional HTML attributes.

## Code Examples

### Basic Container Layout
```tsx
// Simple vertical stack with spacing
<View gap={4} padding={6}>
  <Text variant="heading">Dashboard</Text>
  <Card>Content here</Card>
  <Button>Action</Button>
</View>
```
This example demonstrates the most common View usage as a vertical container with consistent spacing between elements and padding around the container.

### Responsive Horizontal Layout
```tsx
// Responsive direction and gap
<View
  direction={{ s: "column", m: "row" }}
  gap={{ s: 3, m: 6 }}
  align="center"
  justify="space-between"
>
  <Text>Brand Logo</Text>
  <View direction="row" gap={2}>
    <Button variant="outline">Login</Button>
    <Button>Sign Up</Button>
  </View>
</View>
```
This example shows a responsive header layout that stacks vertically on small screens and becomes a horizontal navigation bar on medium screens and up.

### Grid System with View.Item
```tsx
// 12-column responsive grid
<View direction="row" gap={4} wrap>
  <View.Item columns={{ s: 12, m: 6, l: 4 }}>
    <Card>Column 1</Card>
  </View.Item>
  <View.Item columns={{ s: 12, m: 6, l: 4 }}>
    <Card>Column 2</Card>
  </View.Item>
  <View.Item columns={{ s: 12, m: 12, l: 4 }}>
    <Card>Column 3</Card>
  </View.Item>
</View>
```
This example demonstrates a responsive grid where items take full width on small screens, half-width on medium screens, and one-third width on large screens.

### Advanced Layout with Divided Content
```tsx
// Complex dashboard layout with dividers
<View
  padding={6}
  backgroundColor="elevation-base"
  borderRadius="medium"
  divided
  gap={4}
>
  <View direction="row" justify="space-between" align="center">
    <Text variant="heading">Statistics</Text>
    <Button variant="ghost" endIcon={<Icon name="more" />} />
  </View>
  
  <View direction="row" gap={6} wrap>
    <View.Item grow>
      <Text variant="caption" color="neutral">Revenue</Text>
      <Text variant="title">$12,345</Text>
    </View.Item>
    <View.Item grow>
      <Text variant="caption" color="neutral">Users</Text>
      <Text variant="title">1,234</Text>
    </View.Item>
  </View>

  <Button>View Details</Button>
</View>
```
This example shows a card-like statistics component with automatic dividers between sections, mixed flex and grid behaviors, and semantic visual hierarchy.

### Positioning and Overlay
```tsx
// Floating action button positioned absolutely
<View position="relative" height="400px">
  <View padding={4}>
    <Text>Main content area</Text>
  </View>
  
  <View
    position="absolute"
    insetEnd={4}
    insetBottom={4}
    zIndex={10}
  >
    <Button shape="circular" size="large">
      <Icon name="plus" />
    </Button>
  </View>
</View>
```
This example demonstrates absolute positioning for floating elements, useful for overlay buttons, tooltips, or modal positioning.

## Related Components

**View.Item** - Companion component for granular control over individual items within a View container. Provides column-based sizing and flex item properties.

**Container** - Higher-level layout component that provides max-width constraints and centering. Often used as a parent to View for page-level layouts.

**Grid** - Specialized grid layout component for more traditional CSS Grid-based layouts. Use when you need explicit row/column definitions.

**Card** - Content container that often wraps View components to provide elevation and contained layouts.

**Hidden** - Utility component for responsive visibility that integrates seamlessly with View's responsive prop system.

**Divider** - Automatically inserted by View when `divided={true}`, but can be used standalone for manual separator placement.