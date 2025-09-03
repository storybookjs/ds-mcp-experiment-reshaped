# View

**Brief Description**: A fundamental layout component that provides flexible container functionality with responsive design capabilities, spacing controls, and flexbox layout options.

**Keywords**: Layout, Container, Flexbox, Responsive, Spacing, Alignment, Grid, Utility Component

**Usage Description**: The View component serves as the foundational layout building block in the reshaped design system. It provides a flexible container with powerful layout capabilities including flexbox properties, responsive design support, spacing controls, and alignment options.

Use View when you need to create layouts, group content with consistent spacing, or apply responsive design patterns. It's particularly useful for creating complex layouts, organizing content with gaps and alignment, and building responsive interfaces that adapt to different screen sizes.

## Key Features

- **Flexbox Layout**: Built-in support for flex direction, alignment, and justification
- **Responsive Design**: All props support responsive values across breakpoints (s, m, l, xl)
- **Spacing System**: Integrated with the design system's spacing scale for consistent gaps and padding
- **Alignment Control**: Comprehensive alignment and justification options
- **Composable**: Works seamlessly with View.Item for complex layouts

## Props Documentation

### Layout Props
- **direction** (`G.Responsive<"row" | "column">`) - Optional - Sets flex direction
- **align** (`G.Responsive<"start" | "center" | "end" | "stretch" | "baseline">`) - Optional - Cross-axis alignment
- **justify** (`G.Responsive<"start" | "center" | "end" | "space-between" | "space-around">`) - Optional - Main-axis alignment
- **gap** (`G.Responsive<number>`) - Optional - Spacing between child elements
- **wrap** (`boolean`) - Optional - Whether flex items should wrap

### Sizing Props
- **width** (`G.Responsive<string | number>`) - Optional - Component width
- **height** (`G.Responsive<string | number>`) - Optional - Component height
- **maxWidth** (`G.Responsive<string | number>`) - Optional - Maximum width constraint
- **maxHeight** (`G.Responsive<string | number>`) - Optional - Maximum height constraint

### Spacing Props
- **padding** (`G.Responsive<number>`) - Optional - Uniform padding on all sides
- **paddingInline** (`G.Responsive<number>`) - Optional - Horizontal padding (left and right)
- **paddingBlock** (`G.Responsive<number>`) - Optional - Vertical padding (top and bottom)

## Code Examples

### Basic Flexbox Layout
```tsx
import { View } from 'reshaped';

// Horizontal layout with gap
<View direction="row" gap={3} align="center">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</View>

// Vertical layout with responsive gap
<View direction="column" gap={{ s: 2, m: 4 }}>
  <div>First item</div>
  <div>Second item</div>
</View>
```

### Responsive Layout
```tsx
// Changes from column on small screens to row on larger screens
<View 
  direction={{ s: "column", m: "row" }}
  gap={{ s: 2, m: 4 }}
  align={{ s: "stretch", m: "center" }}
>
  <div>Content adapts to screen size</div>
  <div>Flexible responsive behavior</div>
</View>
```

### Complex Layout with View.Item
```tsx
<View direction="row" gap={3}>
  <View.Item grow>
    <div>This item grows to fill available space</div>
  </View.Item>
  <View.Item>
    <Button>Fixed width button</Button>
  </View.Item>
</View>
```

## Related Components

- **View.Item**: Sub-component for advanced layout control within View containers
- **Container**: Higher-level layout component that provides centering and max-width constraints
- **Grid**: Alternative layout system for grid-based designs
- **Stack**: Specialized View variant optimized for vertical stacking