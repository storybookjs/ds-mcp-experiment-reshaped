# Placeholder

**Brief Description**: A development utility component that creates a styled placeholder box for Storybook demonstrations and component testing.

**Keywords**: Development Utility, Placeholder, Storybook, Testing, Layout, Box, Visual Aid, Demo Content

## Usage Description

The Placeholder component is a specialized development utility designed specifically for use within Storybook stories and component demonstrations. It provides a consistent, visually recognizable placeholder box that helps developers showcase layout behaviors, spacing, and component composition during development and testing.

This utility is particularly valuable when creating component stories where you need to represent content areas, demonstrate layout systems, or fill spaces to show how components interact with their children. The Placeholder component uses design system tokens for consistent styling, ensuring it visually integrates well with the overall design language while remaining clearly identifiable as placeholder content.

The component is most commonly used in Storybook stories for layout components like View, Container, and other structural components where visual representation of content areas is needed without the distraction of actual content.

## Props Documentation

### `w` (optional)

- **Type**: `string | number`
- **Default**: `"auto"`
- **Description**: Sets the width of the placeholder. Can be any valid CSS width value including pixels, percentages, or CSS units.
- **Example Values**: `"200px"`, `"100%"`, `300`, `"50vw"`

### `h` (optional)

- **Type**: `string | number`
- **Default**: `50`
- **Description**: Sets the height of the placeholder. Can be any valid CSS height value. When a number is provided, it's treated as pixels.
- **Example Values**: `"200px"`, `"100%"`, `150`, `"50vh"`

### `minW` (optional)

- **Type**: `string | number`
- **Default**: Value of `h` prop (50 if h is not provided)
- **Description**: Sets the minimum width of the placeholder to prevent it from becoming too narrow. Defaults to the height value to maintain reasonable proportions.
- **Example Values**: `"100px"`, `200`, `"10rem"`

### `children` (optional)

- **Type**: `React.ReactNode`
- **Default**: `undefined`
- **Description**: Optional content to display inside the placeholder box. Typically used for labels or additional visual indicators.
- **Example Values**: Text strings, icons, or other React elements

### `inverted` (optional)

- **Type**: `boolean`
- **Default**: `undefined`
- **Description**: Reserved prop defined in TypeScript interface but not implemented in current version. Likely intended for alternative styling themes.
- **Note**: This prop is present in the type definitions but not used in the current implementation.

## Code Examples

### Basic Usage

```tsx
import { Placeholder } from 'reshaped';

// Simple placeholder with default dimensions
<Placeholder />

// Placeholder with custom height
<Placeholder h={100} />
```

### Custom Dimensions

```tsx
// Fixed width and height
<Placeholder w="200px" h="150px" />

// Percentage-based sizing
<Placeholder w="100%" h="200px" />

// Responsive full height
<Placeholder h="100%" />
```

### With Content

```tsx
// Placeholder with descriptive text
<Placeholder w="300px" h="200px">
  Content Area
</Placeholder>

// Placeholder with minimum width constraint
<Placeholder h="100px" minW="200px">
  Min width: 200px
</Placeholder>
```

### In Storybook Stories

```tsx
// Demonstrating container component behavior
export const ContainerPadding = () => (
  <Example>
    <Example.Item title="padding: default">
      <Container>
        <Placeholder />
      </Container>
    </Example.Item>
    <Example.Item title="padding: 0">
      <Container padding={0}>
        <Placeholder />
      </Container>
    </Example.Item>
  </Example>
);
```

### Layout Demonstrations

```tsx
// Showing View component flexbox behavior
export const ViewAlignment = () => (
  <Example>
    <Example.Item title="centered content">
      <View align="center" justify="center" height="200px">
        <Placeholder />
      </View>
    </Example.Item>
  </Example>
);

// Demonstrating divider component with adjacent content
export const DividerVertical = () => (
  <View gap={3} direction="row" align="stretch">
    <Placeholder />
    <View.Item>
      <Divider vertical />
    </View.Item>
    <Placeholder />
  </View>
);
```

## Development/Storybook Context

The Placeholder component is part of Reshaped's storybook utilities, specifically designed for development and demonstration purposes. Key characteristics:

- **Design System Integration**: Uses Reshaped design tokens for consistent styling (`--rs-unit-x2`, `--rs-color-rgb-background-neutral`, `--rs-radius-small`)
- **Neutral Appearance**: Semi-transparent background that's visible but not distracting
- **Flexible Sizing**: Supports various width and height configurations for different use cases
- **Centered Content**: Uses flexbox to center any children content within the placeholder
- **Consistent Styling**: Applies consistent padding, border radius, and background across all instances

### CSS Token Usage

- **Padding**: `var(--rs-unit-x2)` - Consistent internal spacing
- **Background**: `rgba(var(--rs-color-rgb-background-neutral), 0.32)` - Semi-transparent neutral background
- **Border Radius**: `var(--rs-radius-small)` - Subtle rounded corners

## Best Practices

### When to Use

- Creating Storybook stories for layout components
- Demonstrating spacing and sizing behaviors
- Filling content areas during component development
- Testing component composition and hierarchy
- Showcasing responsive design patterns

### When Not to Use

- Production applications (this is a development-only utility)
- As a replacement for actual content components
- For loading states (use dedicated loading components instead)

### Recommended Patterns

- Use consistent dimensions within related stories for visual coherence
- Combine with the `Example` component for organized story layouts
- Leverage the `children` prop to add descriptive labels when helpful
- Use percentage-based heights (`h="100%"`) when demonstrating container behaviors
- Set appropriate minimum widths to maintain readability and visual balance

### Import Path

```tsx
// Import from storybook utilities
import { Placeholder } from "reshaped/utilities/storybook";

// Or from main index (also available)
import { Placeholder } from "reshaped";
```

## Related Components

- **Example**: Primary companion component for organizing Storybook demonstrations, often used together with Placeholder
- **View**: Layout component frequently demonstrated using Placeholder as content
- **Container**: Utility component that commonly uses Placeholder to show spacing and sizing behaviors
- **Divider**: Component that often appears alongside Placeholder in layout demonstrations
