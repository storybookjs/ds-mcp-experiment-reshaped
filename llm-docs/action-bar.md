# ActionBar

A flexible container component for positioning action elements (buttons, controls, etc.) at specific locations within the viewport or a container, with support for animations and elevation effects.

## Keywords

Action Container, Floating Actions, Position Layout, Button Container, Overlay Panel, Fixed Position, Absolute Position, Toolbar

## Usage Description

ActionBar is designed to display action elements like buttons, controls, or other interactive components in a strategically positioned container. It's commonly used for floating action buttons, toolbars, or notification bars that need to remain visible and accessible to users.

The component supports multiple positioning strategies including fixed viewport positioning for persistent toolbars, absolute positioning within containers, and relative positioning for inline layouts. It includes built-in animations for smooth show/hide transitions and elevation effects for visual hierarchy.

ActionBar automatically handles responsive behavior, spacing, and visual styling including shadows and borders based on the positioning context. It's particularly useful for mobile interfaces where screen real estate is limited and actions need to be prominently displayed.

## Props Documentation

### Core Props

**children** - `React.ReactNode` (optional)

- Content to render inside the ActionBar
- Typically contains buttons, controls, or other interactive elements
- Default: `undefined`

**active** - `boolean` (optional)

- Controls visibility and animation state of the ActionBar
- When `false`, applies transform that moves the bar out of view
- When `true`, positions the bar in its final location
- Default: `true`

### Positioning Props

**position** - `"top" | "top-end" | "top-start" | "bottom" | "bottom-start" | "bottom-end"` (optional)

- Determines where the ActionBar is positioned
- `"top"` and `"bottom"` center the bar horizontally
- `"top-start"`, `"bottom-start"` align to the start edge
- `"top-end"`, `"bottom-end"` align to the end edge
- Default: `"bottom"`

**positionType** - `Responsive<"relative" | "absolute" | "fixed">` (optional)

- CSS position type for the ActionBar
- `"relative"` - positioned in document flow
- `"absolute"` - positioned relative to nearest positioned ancestor
- `"fixed"` - positioned relative to viewport
- Auto-determined based on position and offset if not specified
- Default: Calculated automatically

**offset** - `Responsive<number>` (optional)

- Distance from container edges in spacing units
- Adds margin and rounded corners when specified
- Supports responsive values: `{ s: 2, m: 4 }` for different breakpoints
- Auto-calculated as `4` for absolute positioning if not specified
- Default: `undefined` (relative), `4` (absolute)

### Styling Props

**elevated** - `boolean` (optional)

- Adds elevation shadow and raised background
- Automatically enabled for positioned ActionBars with offset
- Creates visual separation from background content
- Default: `false`

**padding** - `Responsive<number>` (optional, inherited from View)

- Inner spacing for all sides
- Overrides paddingBlock and paddingInline when specified
- Supports responsive values
- Default: `undefined`

**paddingBlock** - `Responsive<number>` (optional, inherited from View)

- Vertical (top and bottom) inner spacing
- Measured in design system spacing units
- Default: `3`

**paddingInline** - `Responsive<number>` (optional, inherited from View)

- Horizontal (start and end) inner spacing
- Measured in design system spacing units
- Default: `4`

### System Props

**className** - `string` (optional)

- Additional CSS class names to apply
- Merged with component's default classes
- Default: `undefined`

**attributes** - `Attributes<"div">` (optional)

- Additional HTML attributes for the root element
- Includes support for data attributes and standard div props
- Style attributes are merged with component styles
- Default: `undefined`

## Code Examples

### Basic Usage

```tsx
import { ActionBar, Button } from "reshaped";

// Simple bottom action bar
<ActionBar>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</ActionBar>;
```

### Fixed Position Toolbar

```tsx
import { ActionBar, Button } from "reshaped";

// Fixed top toolbar that stays visible during scroll
<ActionBar position="top" positionType="fixed" elevated>
  <Button size="small">New</Button>
  <Button size="small" variant="outline">
    Edit
  </Button>
  <Button size="small" variant="outline">
    Delete
  </Button>
</ActionBar>;
```

### Floating Action Container

```tsx
import { ActionBar, Button } from "reshaped";

// Floating bottom-right actions with custom spacing
<ActionBar position="bottom-end" positionType="absolute" offset={3} padding={2}>
  <Button>Primary Action</Button>
  <Button variant="ghost">Secondary</Button>
</ActionBar>;
```

### Responsive Positioning

```tsx
import { ActionBar, Button, View } from "reshaped";

// Different positioning on mobile vs desktop
<ActionBar
  position="bottom"
  positionType={{ s: "fixed", m: "absolute" }}
  offset={{ s: 0, m: 4 }}
  padding={{ s: 4, m: 2 }}
>
  <View direction="row" gap={2}>
    <Button>Confirm</Button>
    <Button variant="outline">Cancel</Button>
  </View>
</ActionBar>;
```

### Animated Visibility Toggle

```tsx
import { ActionBar, Button, useToggle } from "reshaped";

function AnimatedActionBar() {
  const { active, toggle } = useToggle();

  return (
    <>
      <Button onClick={toggle}>{active ? "Hide" : "Show"} Actions</Button>

      <ActionBar active={active} position="top-start" positionType="fixed">
        <Button size="small">Action 1</Button>
        <Button size="small">Action 2</Button>
      </ActionBar>
    </>
  );
}
```

### Container-Relative Positioning

```tsx
import { ActionBar, Button, View } from "reshaped";

// ActionBar positioned within a specific container
<View
  backgroundColor="neutral-faded"
  height="300px"
  position="relative"
  borderRadius="medium"
>
  <View padding={4}>Content area...</View>

  <ActionBar position="bottom-end" positionType="absolute" offset={2}>
    <Button size="small">Quick Action</Button>
  </ActionBar>
</View>;
```

## Related Components

**View** - Base layout component that ActionBar extends, providing spacing, positioning, and styling props

**Button** - Primary action component typically used within ActionBar containers for user interactions

**Tooltip** - Can be combined with ActionBar buttons to provide additional context for actions

**Portal** - Used internally for fixed positioning scenarios to render ActionBar outside normal document flow

**Container** - Layout component that can serve as a positioning context for absolutely positioned ActionBars

**Grid** - Alternative layout system for organizing multiple action elements in structured arrangements
