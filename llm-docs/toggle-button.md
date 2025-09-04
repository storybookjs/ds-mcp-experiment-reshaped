# ToggleButton

## Component Name

ToggleButton

## Brief Description

A clickable button component that maintains toggle state, functioning like a checkbox with visual button appearance and supporting both controlled and uncontrolled modes.

## Keywords

Toggle, Button, Checkbox, State, Pressed, Toggle Button, Selection, Binary Choice

## Usage Description

The ToggleButton component provides a button-style interface for binary choices, combining the visual appearance of a button with the behavioral characteristics of a checkbox. It's ideal for situations where you need users to toggle between two states (on/off, enabled/disabled, selected/unselected) with a more prominent visual presence than a traditional checkbox.

Use ToggleButton when you want to provide toggle functionality with better visual prominence, such as in toolbars, preference panels, or feature toggles. The component automatically manages its pressed state through the `aria-pressed` attribute for proper accessibility support. It can function as either a controlled component (where you manage the state) or uncontrolled component (where it manages its own state).

The component integrates seamlessly with ToggleButtonGroup for creating groups of related toggle options, supporting both single and multiple selection modes. This makes it perfect for scenarios like selecting view modes, filtering options, or configuration toggles.

## Props Documentation

### Core Props

**variant** (optional)

- Type: `"outline" | "ghost"`
- Default: `"outline"`
- Description: Visual style variant of the toggle button
- Example: `"ghost"` for a more subtle appearance

**value** (optional)

- Type: `string`
- Default: `undefined`
- Description: Unique identifier for the toggle button, required when used within ToggleButtonGroup
- Example: `"view-mode-grid"`

**onChange** (optional)

- Type: `(args: { checked: boolean; value: string; event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> }) => void`
- Default: `undefined`
- Description: Callback function called when toggle state changes
- Example: `(args) => console.log('Toggle state:', args.checked)`

### Controlled Mode Props

**checked** (required for controlled mode)

- Type: `boolean`
- Description: Controls the toggle state in controlled mode. When provided, component becomes controlled
- Example: `true` for pressed state, `false` for unpressed state

**defaultChecked** (never allowed in controlled mode)

- Type: `never`
- Description: Cannot be used when `checked` is provided

### Uncontrolled Mode Props

**defaultChecked** (optional)

- Type: `boolean`
- Default: `false`
- Description: Initial toggle state for uncontrolled mode
- Example: `true` to start in pressed state

**checked** (never allowed in uncontrolled mode)

- Type: `never`
- Description: Cannot be used when `defaultChecked` is provided or when component is uncontrolled

### Inherited Button Props

The ToggleButton inherits most props from the Button component, excluding `variant` (which is restricted) and `highlighted` (which is controlled internally):

**color** (optional)

- Type: `"primary" | "critical" | "positive" | "neutral" | "media" | "inherit"`
- Description: Color theme of the button

**icon** (optional)

- Type: `IconProps["svg"]`
- Description: Icon to display at the start of the button

**endIcon** (optional)

- Type: `IconProps["svg"]`
- Description: Icon to display at the end of the button

**size** (optional)

- Type: `"xlarge" | "large" | "medium" | "small"` (responsive)
- Description: Size of the button

**rounded** (optional)

- Type: `boolean`
- Description: Whether the button has rounded corners

**loading** (optional)

- Type: `boolean`
- Description: Whether the button shows loading state

**loadingAriaLabel** (optional)

- Type: `string`
- Description: Accessible label for loading state

**elevated** (optional)

- Type: `boolean`
- Description: Whether the button has elevated appearance

**fullWidth** (optional)

- Type: `boolean` (responsive)
- Description: Whether the button takes full width

**disabled** (optional)

- Type: `boolean`
- Description: Whether the button is disabled

**children** (optional)

- Type: `React.ReactNode`
- Description: Button content (text, elements, etc.)

**className** (optional)

- Type: `string`
- Description: Additional CSS class names

**attributes** (optional)

- Type: `React.HTMLAttributes<HTMLElement>`
- Description: Additional HTML attributes

**href** (optional)

- Type: `string`
- Description: URL to navigate to (makes button a link)

**onClick** (optional)

- Type: `(event: React.MouseEvent<HTMLElement>) => void`
- Description: Click event handler (called before onChange)

**type** (optional)

- Type: `"button" | "submit" | "reset"`
- Description: Button type for form handling

**as** (optional)

- Type: React component or HTML element type
- Description: Custom element type to render

**stopPropagation** (optional)

- Type: `boolean`
- Description: Whether to stop event propagation

## Code Examples

### Basic Usage (Uncontrolled)

```tsx
import { ToggleButton } from "reshaped";

function BasicToggle() {
  return (
    <ToggleButton
      defaultChecked
      onChange={(args) => console.log("Toggled:", args.checked)}
    >
      Toggle Me
    </ToggleButton>
  );
}
```

This demonstrates the simplest usage with default state and change handling.

### Controlled Mode with State Management

```tsx
import { useState } from "react";
import { ToggleButton } from "reshaped";

function ControlledToggle() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ToggleButton
      checked={isEnabled}
      onChange={(args) => setIsEnabled(args.checked)}
      value="feature-toggle"
    >
      {isEnabled ? "Enabled" : "Disabled"}
    </ToggleButton>
  );
}
```

Shows how to fully control the toggle state and update content based on state.

### Toggle Button with Icons and Styling

```tsx
import { ToggleButton } from "reshaped";
import { GridIcon, ListIcon } from "./icons";

function ViewToggle() {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <ToggleButton
      variant="ghost"
      size="large"
      checked={viewMode === "grid"}
      onChange={(args) => setViewMode(args.checked ? "grid" : "list")}
      icon={viewMode === "grid" ? GridIcon : ListIcon}
      value="view-mode"
    >
      {viewMode === "grid" ? "Grid View" : "List View"}
    </ToggleButton>
  );
}
```

Demonstrates advanced styling with icons, variants, and dynamic content.

### Integration with ToggleButtonGroup (Single Selection)

```tsx
import { ToggleButtonGroup, ToggleButton } from "reshaped";

function ViewModeSelector() {
  const [selectedView, setSelectedView] = useState(["grid"]);

  return (
    <ToggleButtonGroup
      value={selectedView}
      onChange={(args) => setSelectedView(args.value)}
      selectionMode="single"
    >
      <ToggleButton value="grid" icon={GridIcon}>
        Grid
      </ToggleButton>
      <ToggleButton value="list" icon={ListIcon}>
        List
      </ToggleButton>
      <ToggleButton value="card" icon={CardIcon}>
        Card
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

Shows how to use ToggleButton within a group for single selection scenarios.

### Integration with ToggleButtonGroup (Multiple Selection)

```tsx
import { ToggleButtonGroup, ToggleButton } from "reshaped";

function FeatureToggles() {
  const [enabledFeatures, setEnabledFeatures] = useState(["notifications"]);

  return (
    <ToggleButtonGroup
      value={enabledFeatures}
      onChange={(args) => setEnabledFeatures(args.value)}
      selectionMode="multiple"
    >
      <ToggleButton value="notifications">Notifications</ToggleButton>
      <ToggleButton value="dark-mode">Dark Mode</ToggleButton>
      <ToggleButton value="auto-save">Auto Save</ToggleButton>
    </ToggleButtonGroup>
  );
}
```

Demonstrates multiple selection mode for toggling multiple independent features.

## Accessibility Considerations

The ToggleButton component implements proper accessibility patterns:

- Uses `aria-pressed` attribute to indicate toggle state to screen readers
- Inherits keyboard navigation support from the underlying Button component
- Supports focus management and keyboard activation
- Provides proper role and state information for assistive technologies
- When used in groups, maintains proper group semantics and navigation

## Related Components

**Button** - The base component that ToggleButton extends, providing core button functionality and styling options

**ToggleButtonGroup** - Container component for creating groups of related toggle buttons with single or multiple selection modes

**Checkbox** - Alternative form control for binary choices with traditional checkbox appearance

**RadioGroup/Radio** - For single selection scenarios where ToggleButtonGroup might be overkill

**Switch** - For on/off toggles with a different visual metaphor, typically used for settings

**ButtonGroup** - For grouping regular buttons without toggle behavior
