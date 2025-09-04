# Grid

A flexible CSS Grid layout component that provides comprehensive grid-based layout capabilities with responsive design support and grid item positioning controls.

## Keywords

Layout, CSS Grid, Responsive, Grid Items, Grid Template, Grid Areas, Container, Positioning

## Usage Description

The Grid component is the foundation for creating sophisticated layouts using CSS Grid. It provides a declarative way to define grid structures with support for grid templates, areas, and responsive breakpoints. The component is designed to handle complex layout scenarios where precise control over item placement and grid behavior is required.

Use Grid when you need structured, two-dimensional layouts with items that span multiple columns or rows. It's particularly useful for dashboard layouts, card grids, form layouts, and any interface requiring precise alignment and spacing. The component excels in scenarios where you need different layouts across breakpoints or when using named grid areas for semantic layout definitions.

The Grid.Item sub-component provides granular control over individual grid items, allowing you to specify exact positioning, spanning, and area assignments. This makes it ideal for creating responsive layouts where items may reposition or resize based on viewport changes.

## Props Documentation

### Grid Props

- **gap** - `Responsive<number>` (optional): Sets the gap between grid items. The value is multiplied by the design system's base unit for consistent spacing.

- **align** - `Responsive<'start' | 'center' | 'end' | 'stretch' | 'baseline'>` (optional): Controls the alignment of grid items along the block (cross) axis within their grid areas.

- **justify** - `Responsive<'start' | 'center' | 'end' | 'space-between'>` (optional): Controls the alignment of grid items along the inline (main) axis within their grid areas.

- **rows** - `Responsive<number | Property.GridTemplateRows>` (optional): Defines the grid template rows. Can be a number (creates equal-width rows using `repeat(n, 1fr)`) or a CSS grid-template-rows string.

- **columns** - `Responsive<number | Property.GridTemplateColumns>` (optional): Defines the grid template columns. Can be a number (creates equal-width columns using `repeat(n, 1fr)`) or a CSS grid-template-columns string.

- **areas** - `Responsive<string[]>` (optional): Defines named grid areas using an array of strings. Each string represents a row, with space-separated area names.

- **autoFlow** - `Responsive<Property.GridAutoFlow>` (optional): Controls how auto-placed items are inserted into the grid. Values include 'row', 'column', 'dense', etc.

- **autoColumns** - `Responsive<Property.GridAutoColumns>` (optional): Specifies the size of implicitly-created column tracks.

- **autoRows** - `Responsive<Property.GridAutoRows>` (optional): Specifies the size of implicitly-created row tracks.

- **width** - `Responsive<string | number>` (optional): Sets the width of the grid container.

- **height** - `Responsive<string | number>` (optional): Sets the height of the grid container.

- **maxWidth** - `Responsive<string | number>` (optional): Sets the maximum width of the grid container.

- **children** - `ReactNode` (optional): The grid items or content to be laid out.

- **as** - `keyof React.JSX.IntrinsicElements` (optional, default: "div"): The HTML element type to render as.

- **className** - `ClassName` (optional): Additional CSS classes to apply.

- **attributes** - `Attributes<TagName>` (optional): Additional HTML attributes and data attributes.

### Grid.Item Props

- **area** - `string` (optional): Assigns the grid item to a named grid area defined in the parent Grid's `areas` prop.

- **colStart** - `Responsive<number>` (optional): Specifies the grid item's start position in the column direction.

- **colEnd** - `Responsive<number>` (optional): Specifies the grid item's end position in the column direction.

- **colSpan** - `Responsive<number>` (optional): Specifies how many columns the grid item should span.

- **rowStart** - `Responsive<number>` (optional): Specifies the grid item's start position in the row direction.

- **rowEnd** - `Responsive<number>` (optional): Specifies the grid item's end position in the row direction.

- **rowSpan** - `Responsive<number>` (optional): Specifies how many rows the grid item should span.

- **children** - `ReactNode` (optional): The content of the grid item.

- **as** - `keyof React.JSX.IntrinsicElements` (optional, default: "div"): The HTML element type to render as.

- **className** - `ClassName` (optional): Additional CSS classes to apply.

- **attributes** - `Attributes<TagName>` (optional): Additional HTML attributes and data attributes.

## Code Examples

### Basic Grid Layout

```tsx
import { Grid } from "reshaped";

// Simple 3-column grid with gap
function BasicGridExample() {
  return (
    <Grid columns={3} gap={2}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Grid>
  );
}
```

This example demonstrates a basic grid with 3 equal-width columns and consistent spacing between items.

### Responsive Grid with Custom Templates

```tsx
import { Grid } from "reshaped";

// Responsive grid that adapts column count by breakpoint
function ResponsiveGridExample() {
  return (
    <Grid
      columns={{
        s: 1,
        m: 2,
        l: 3,
        xl: 4,
      }}
      gap={{
        s: 1,
        m: 2,
        l: 3,
      }}
    >
      <div>Responsive Item 1</div>
      <div>Responsive Item 2</div>
      <div>Responsive Item 3</div>
      <div>Responsive Item 4</div>
    </Grid>
  );
}
```

This example shows how to create responsive grids that adapt their structure across different viewport sizes.

### Named Grid Areas Layout

```tsx
import { Grid } from "reshaped";

// Layout using named grid areas
function GridAreasExample() {
  return (
    <Grid
      columns="200px 1fr 200px"
      rows="auto 1fr auto"
      areas={[
        "header header header",
        "sidebar main aside",
        "footer footer footer",
      ]}
      gap={2}
    >
      <Grid.Item area="header">
        <div>Header Content</div>
      </Grid.Item>
      <Grid.Item area="sidebar">
        <div>Sidebar</div>
      </Grid.Item>
      <Grid.Item area="main">
        <div>Main Content</div>
      </Grid.Item>
      <Grid.Item area="aside">
        <div>Aside Content</div>
      </Grid.Item>
      <Grid.Item area="footer">
        <div>Footer</div>
      </Grid.Item>
    </Grid>
  );
}
```

This example demonstrates how to create semantic layouts using named grid areas for a typical web page structure.

### Grid Items with Spanning

```tsx
import { Grid } from "reshaped";

// Grid with items spanning multiple columns and rows
function SpanningGridExample() {
  return (
    <Grid columns={4} rows={3} gap={2}>
      <Grid.Item colSpan={2} rowSpan={2}>
        <div>Large Item (2x2)</div>
      </Grid.Item>
      <Grid.Item colSpan={2}>
        <div>Wide Item (2x1)</div>
      </Grid.Item>
      <Grid.Item rowSpan={2}>
        <div>Tall Item (1x2)</div>
      </Grid.Item>
      <div>Regular Item</div>
      <div>Regular Item</div>
      <div>Regular Item</div>
    </Grid>
  );
}
```

This example shows how to create grid items that span multiple columns or rows for varied layout compositions.

### Advanced Grid with Auto-Placement

```tsx
import { Grid } from "reshaped";

// Grid with auto-flow and mixed sizing
function AdvancedGridExample() {
  return (
    <Grid
      columns="repeat(auto-fit, minmax(250px, 1fr))"
      autoRows="200px"
      autoFlow="row dense"
      gap={3}
      align="stretch"
      justify="center"
    >
      <Grid.Item colSpan={2}>
        <div>Featured Item</div>
      </Grid.Item>
      <div>Auto Item 1</div>
      <div>Auto Item 2</div>
      <Grid.Item rowSpan={2}>
        <div>Tall Item</div>
      </Grid.Item>
      <div>Auto Item 3</div>
      <div>Auto Item 4</div>
    </Grid>
  );
}
```

This example demonstrates advanced grid features including auto-fit columns, dense packing, and mixed auto-placed and positioned items.

## Related Components

- **Container**: Use for basic content wrapping and max-width constraints before applying Grid layout
- **Actionable**: Can be used as grid items when creating interactive grid layouts
- **Card**: Commonly used as grid items for card-based layouts and dashboards
- **Divider**: Can be used within grid areas to separate content sections
- **Text**: Typography components that work well within grid item content

The Grid component integrates seamlessly with all other reshaped components as container or content, providing the structural foundation for complex, responsive layouts while maintaining design system consistency.
