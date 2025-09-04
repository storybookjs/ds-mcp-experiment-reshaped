# Tooltip

## Component Name

Tooltip

## Brief Description

A hover-triggered overlay that displays contextual information or help text relative to a trigger element.

## Keywords

Hover, Overlay, Help Text, Contextual Information, Hover Tooltip, Information Display, UI Enhancement, Accessibility

## Usage Description

The Tooltip component provides contextual information or help text that appears when users hover over trigger elements. It's designed to enhance user experience by offering additional information without cluttering the interface or requiring explicit user interaction beyond hovering.

Tooltips are ideal for providing brief explanations, definitions, or additional context for UI elements like buttons, icons, or form inputs. They should contain concise, helpful information that aids user understanding without being essential for completing tasks. The component is built on top of the Flyout component, inheriting its positioning and interaction capabilities while being specifically optimized for hover-triggered content display.

Use tooltips sparingly and ensure the content is genuinely helpful rather than redundant. They work best for explaining functionality, providing definitions, or offering helpful hints that improve the overall user experience.

## Props Documentation

### Core Props

**text** (optional)

- Type: `React.ReactNode`
- Default: `undefined`
- Description: The content to display inside the tooltip. Can be a string, number, or React element. If not provided or falsy, the tooltip will not render and only the children will be displayed.

**children** (required)

- Type: `(attributes: TriggerAttributes | {}) => React.ReactNode`
- Description: A render prop function that receives trigger attributes and returns the element that will trigger the tooltip on hover. The attributes object contains event handlers and ARIA attributes necessary for accessibility.

**position** (optional)

- Type: `"top" | "bottom" | "start" | "end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "start-top" | "start-bottom" | "end-top" | "end-bottom"`
- Default: `"bottom"`
- Description: Determines where the tooltip appears relative to the trigger element. Supports all standard positioning options including edge and corner alignments.

**color** (optional)

- Type: `"inverted" | "dark"`
- Default: `"inverted"`
- Description: Controls the tooltip's color theme. "inverted" provides high contrast with the background, while "dark" offers a darker appearance.

### Inherited Flyout Props

**id** (optional)

- Type: `string`
- Description: Unique identifier for the tooltip instance, useful for testing and accessibility purposes.

**active** (optional)

- Type: `boolean`
- Description: When provided, makes the tooltip controlled. Determines whether the tooltip is currently visible. Cannot be used with `defaultActive`.

**disabled** (optional)

- Type: `boolean`
- Default: `false`
- Description: When true, prevents the tooltip from appearing on hover and disables all trigger interactions.

**disableContentHover** (optional)

- Type: `boolean`
- Default: `false`
- Description: When true, the tooltip will hide immediately when the cursor moves away from the trigger, even if the cursor moves over the tooltip content.

**containerRef** (optional)

- Type: `React.RefObject<HTMLElement | null>`
- Description: Reference to a container element that will be used for positioning calculations and scroll handling.

**contentGap** (optional)

- Type: `number`
- Description: Spacing in pixels between the trigger element and the tooltip content.

**contentShift** (optional)

- Type: `number`
- Description: Offset in pixels for fine-tuning the tooltip's position along its alignment axis.

**originCoordinates** (optional)

- Type: `{ x: number; y: number }`
- Description: Custom coordinates to use as the positioning origin instead of the trigger element's position.

**contentAttributes** (optional)

- Type: `React.HTMLAttributes<HTMLDivElement>`
- Description: Additional HTML attributes to apply to the tooltip content container.

**contentClassName** (optional)

- Type: `string`
- Description: Additional CSS class name to apply to the tooltip content container.

### Event Handlers

**onOpen** (optional)

- Type: `() => void`
- Description: Callback fired when the tooltip opens (becomes visible).

**onClose** (optional)

- Type: `(args: { reason?: CloseReason }) => void`
- Description: Callback fired when the tooltip closes. The reason parameter indicates why the tooltip closed (e.g., "outside-click", "escape-key").

## Code Examples

### Basic Usage

```tsx
import { Tooltip, Button } from "reshaped";

function BasicTooltip() {
  return (
    <Tooltip text="This button saves your changes">
      {(attributes) => <Button attributes={attributes}>Save</Button>}
    </Tooltip>
  );
}
```

This example demonstrates the most common tooltip usage - providing helpful context for a button.

### Positioning Options

```tsx
import { Tooltip, Button, View } from "reshaped";

function PositionedTooltips() {
  return (
    <View direction="row" gap={4}>
      <Tooltip text="Appears above" position="top">
        {(attributes) => <Button attributes={attributes}>Top</Button>}
      </Tooltip>

      <Tooltip text="Appears to the right" position="end">
        {(attributes) => <Button attributes={attributes}>End</Button>}
      </Tooltip>

      <Tooltip text="Appears below-left" position="bottom-start">
        {(attributes) => <Button attributes={attributes}>Bottom Start</Button>}
      </Tooltip>
    </View>
  );
}
```

This example shows different positioning options available for tooltips.

### Color Themes

```tsx
import { Tooltip, Button, View } from "reshaped";

function ColoredTooltips() {
  return (
    <View direction="row" gap={4}>
      <Tooltip text="High contrast tooltip" color="inverted">
        {(attributes) => <Button attributes={attributes}>Inverted</Button>}
      </Tooltip>

      <Tooltip text="Dark themed tooltip" color="dark">
        {(attributes) => <Button attributes={attributes}>Dark</Button>}
      </Tooltip>
    </View>
  );
}
```

This example demonstrates the available color themes for tooltips.

### Controlled Tooltip

```tsx
import { Tooltip, Button } from "reshaped";
import { useState } from "react";

function ControlledTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tooltip
      text="This tooltip is controlled programmatically"
      active={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      {(attributes) => (
        <Button attributes={attributes} onClick={() => setIsOpen(!isOpen)}>
          Toggle Tooltip
        </Button>
      )}
    </Tooltip>
  );
}
```

This example shows how to control tooltip visibility programmatically.

### Complex Content and Integration

```tsx
import { Tooltip, Button, Popover } from "reshaped";

function ComplexTooltip() {
  return (
    <Tooltip text="This button opens a menu" position="top">
      {(tooltipAttributes) => (
        <Popover position="bottom">
          <Popover.Trigger>
            {(popoverAttributes) => (
              <Button
                attributes={{ ...tooltipAttributes, ...popoverAttributes }}
              >
                Menu Button
              </Button>
            )}
          </Popover.Trigger>
          <Popover.Content>Menu content here</Popover.Content>
        </Popover>
      )}
    </Tooltip>
  );
}
```

This example demonstrates integrating tooltips with other interactive components like Popover.

### Responsive and Conditional Tooltips

```tsx
import { Tooltip, Button } from "reshaped";
import { useResponsiveClientValue } from "reshaped";

function ResponsiveTooltip() {
  const screenSize = useResponsiveClientValue({
    s: "small",
    m: "medium",
  });

  return (
    <Tooltip
      text="This tooltip only shows on small screens"
      active={screenSize === "small"}
    >
      {(attributes) => (
        <Button attributes={attributes}>Responsive Tooltip</Button>
      )}
    </Tooltip>
  );
}
```

This example shows how to create responsive tooltip behavior based on screen size.

## Accessibility Considerations

The Tooltip component includes comprehensive accessibility features:

- **ARIA Attributes**: Automatically applies appropriate ARIA attributes including `aria-describedby` to connect the tooltip content with its trigger
- **Focus Management**: Properly handles focus states and ensures tooltips don't interfere with keyboard navigation
- **Screen Reader Support**: Tooltip content is accessible to assistive technologies through proper ARIA labeling
- **Keyboard Navigation**: Supports keyboard-triggered display when the trigger element receives focus
- **High Contrast**: The "inverted" color theme provides sufficient contrast for users with visual impairments

## Related Components

**Flyout** - The underlying component that Tooltip is built upon, providing the positioning and interaction logic.

**Popover** - For click-triggered overlays with more complex content and interactive elements.

**Text** - Used internally to render the tooltip content with appropriate typography styling.

**Theme** - Applied internally to support the color theming system for different tooltip appearances.

**Button** - Commonly used as a trigger element for tooltips, as shown in the examples.

The Tooltip component integrates seamlessly with other interactive components in the design system, allowing for complex UI patterns while maintaining consistent behavior and accessibility standards.
