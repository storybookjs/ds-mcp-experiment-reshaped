# Flyout

A versatile positioning utility component that renders content relative to a trigger element, supporting multiple interaction modes and positioning strategies.

## Keywords

Positioning, Popup, Trigger, Content, Hover, Click, Focus, Portal, Overlay

## Usage Description

The Flyout component is a foundational positioning utility used to display floating content relative to a trigger element. It serves as the building block for more complex components like tooltips, popovers, dropdown menus, and context menus. The component intelligently handles positioning, interaction modes, focus management, and accessibility concerns.

Use Flyout when you need to display contextual information or actions that appear on demand near specific UI elements. It supports three interaction modes: click-based (for interactive content like menus), hover-based (for tooltips and quick previews), and focus-based (for keyboard navigation). The component automatically handles complex positioning scenarios, including fallback positioning when there's insufficient space and RTL text direction support.

The component architecture uses a compound pattern with separate Trigger and Content components, allowing for flexible composition while maintaining proper accessibility attributes and event handling. It can operate in both controlled and uncontrolled modes, making it suitable for various use cases from simple tooltips to complex nested menu systems.

## Props Documentation

### Main Flyout Props

**id** (optional): `string`

- Unique identifier for the flyout instance
- Auto-generated if not provided
- Used for ARIA attributes and accessibility

**active** (conditional): `boolean`

- Controls the open/closed state in controlled mode
- When provided, the component operates in controlled mode
- Mutually exclusive with `defaultActive`

**defaultActive** (conditional): `boolean`

- Initial open state for uncontrolled mode
- Only used when `active` is not provided
- Default: `false`

**triggerType** (optional): `"hover" | "click" | "focus"`

- Defines how the flyout is triggered
- Default: `"click"`
- `"hover"`: Opens on mouse enter, closes on mouse leave
- `"click"`: Opens/closes on click
- `"focus"`: Opens on focus, closes on blur

**position** (optional): `Position`

- Where to position the content relative to trigger
- Type: `"top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "start" | "start-top" | "start-bottom" | "end" | "end-top" | "end-bottom"`
- Default: Determined by component context

**fallbackPositions** (optional): `Position[] | false`

- Alternative positions when primary position doesn't fit
- Set to `false` to disable fallback positioning
- Default: Automatically determined based on available space

**forcePosition** (optional, deprecated): `boolean`

- Forces the specified position without fallbacks
- Use `fallbackPositions={false}` instead
- Will be removed in v4

**width** (optional): `"trigger" | string`

- Controls content width
- `"trigger"`: Matches trigger element width
- String values: Any valid CSS width value

**trapFocusMode** (optional): `TrapMode | false`

- Focus trapping behavior for accessibility
- `"dialog"`: Full focus trap with modal behavior
- `"action-menu"`: Focus trap for menu navigation
- `"selection-menu"`: Focus trap for selection interfaces
- `"action-bar"`: Focus trap for action bars
- `"content-menu"`: Focus trap for content menus
- `false`: Disables focus trapping
- Default: `"dialog"`

**disabled** (optional): `boolean`

- Disables the flyout functionality
- Default: `false`

**disableHideAnimation** (optional): `boolean`

- Disables closing animations
- Default: `false`

**disableContentHover** (optional): `boolean`

- Prevents content from receiving hover events
- Only applies to hover-triggered flyouts
- Default: `false`

**disableCloseOnOutsideClick** (optional): `boolean`

- Prevents closing when clicking outside
- Default: `false`

**autoFocus** (optional): `boolean`

- Whether to automatically focus content when opened
- Default: `true`

**groupTimeouts** (optional): `boolean`

- Enables grouped timeout behavior for hover interactions
- Reduces delays when moving between related flyouts
- Default: `false`

**originCoordinates** (optional): `G.Coordinates`

- Custom coordinates to use as positioning origin
- Overrides trigger element bounds
- Format: `{ x: number, y: number, width: number, height: number }`

**contentGap** (optional): `number`

- Gap between trigger and content in pixels
- Default: `2`

**contentShift** (optional): `number`

- Shift content position in pixels
- Applied perpendicular to the main positioning axis

**contentClassName** (optional): `string`

- Additional CSS class for content container

**contentAttributes** (optional): `G.Attributes<"div">`

- Additional HTML attributes for content container

**instanceRef** (optional): `React.Ref<Instance>`

- Ref to access imperative methods
- Provides: `open()`, `close()`, `updatePosition()`

**containerRef** (optional): `React.RefObject<HTMLElement | null>`

- Custom container for portal rendering
- Default: Closest positioned ancestor

**initialFocusRef** (optional): `React.RefObject<HTMLElement | null>`

- Element to focus when flyout opens
- Used when `autoFocus` is enabled

**onOpen** (optional): `() => void`

- Callback when flyout opens

**onClose** (optional): `(args: { reason?: CloseReason }) => void`

- Callback when flyout closes
- Provides reason: `"escape-key" | "outside-click" | "item-selection" | "close-button"`

**children**: `React.ReactNode`

- Should contain Flyout.Trigger and Flyout.Content components

### Flyout.Trigger Props

**children**: `(attributes: TriggerAttributes) => React.ReactNode`

- Render function receiving trigger attributes
- Must apply attributes to the trigger element for proper functionality

### TriggerAttributes Object

**ref**: `React.RefObject<HTMLButtonElement | null>`

- Required ref for positioning calculations

**onClick** (conditional): `() => void`

- Click handler (when triggerType is "click")

**onMouseDown** (conditional): `() => void`

- Mouse down handler for bounds calculation

**onMouseEnter** (conditional): `() => void`

- Mouse enter handler (when triggerType is "hover")

**onMouseLeave** (conditional): `() => void`

- Mouse leave handler (when triggerType is "hover")

**onTouchStart** (conditional): `() => void`

- Touch start handler for touch devices

**onFocus** (conditional): `() => void`

- Focus handler (when triggerType is "focus" or "hover")

**onBlur** (conditional): `(e: React.FocusEvent) => void`

- Blur handler for closing flyout

**aria-describedby** (conditional): `string`

- ARIA attribute for tooltip relationships

**aria-haspopup** (conditional): `"dialog" | "menu" | "listbox"`

- ARIA attribute indicating popup type

**aria-autocomplete** (conditional): `"list"`

- ARIA attribute for selection interfaces

**aria-expanded** (conditional): `boolean`

- ARIA attribute indicating expanded state

**aria-controls** (conditional): `string`

- ARIA attribute referencing controlled content

### Flyout.Content Props

**children** (optional): `React.ReactNode`

- Content to display in the flyout

**className** (optional): `string`

- Additional CSS class for content styling

**attributes** (optional): `G.Attributes<"div">`

- Additional HTML attributes for content element

## Code Examples

### Basic Click Flyout

```tsx
import { Flyout, Button } from "reshaped";

function BasicFlyout() {
  return (
    <Flyout position="bottom-start">
      <Flyout.Trigger>
        {(attributes) => <Button {...attributes}>Open Menu</Button>}
      </Flyout.Trigger>
      <Flyout.Content>
        <div style={{ padding: 16, background: "white", borderRadius: 8 }}>
          <p>Flyout content goes here</p>
          <Button size="small">Action</Button>
        </div>
      </Flyout.Content>
    </Flyout>
  );
}
```

### Controlled Flyout with State Management

```tsx
import { useState } from "react";
import { Flyout, Button } from "reshaped";

function ControlledFlyout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flyout
      active={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      position="top"
    >
      <Flyout.Trigger>
        {(attributes) => (
          <Button {...attributes}>{isOpen ? "Close" : "Open"} Flyout</Button>
        )}
      </Flyout.Trigger>
      <Flyout.Content>
        <div style={{ padding: 16, background: "white" }}>
          <p>Controlled content</p>
          <Button onClick={() => setIsOpen(false)}>Close from inside</Button>
        </div>
      </Flyout.Content>
    </Flyout>
  );
}
```

### Hover Tooltip

```tsx
import { Flyout, Button } from "reshaped";

function HoverTooltip() {
  return (
    <Flyout
      triggerType="hover"
      position="top"
      trapFocusMode={false}
      contentGap={8}
    >
      <Flyout.Trigger>
        {(attributes) => <Button {...attributes}>Hover me</Button>}
      </Flyout.Trigger>
      <Flyout.Content>
        <div
          style={{
            padding: "8px 12px",
            background: "black",
            color: "white",
            borderRadius: 4,
            fontSize: 14,
          }}
        >
          This is a helpful tooltip
        </div>
      </Flyout.Content>
    </Flyout>
  );
}
```

### Focus-based Flyout for Keyboard Navigation

```tsx
import { Flyout, Button } from "reshaped";

function FocusFlyout() {
  return (
    <Flyout
      triggerType="focus"
      position="bottom-start"
      trapFocusMode="action-menu"
    >
      <Flyout.Trigger>
        {(attributes) => <Button {...attributes}>Focus to open</Button>}
      </Flyout.Trigger>
      <Flyout.Content>
        <div style={{ padding: 16, background: "white" }}>
          <Button>First focusable</Button>
          <Button>Second focusable</Button>
          <Button>Third focusable</Button>
        </div>
      </Flyout.Content>
    </Flyout>
  );
}
```

### Advanced Configuration with Imperative Control

```tsx
import { useRef } from "react";
import { Flyout, Button } from "reshaped";

function AdvancedFlyout() {
  const flyoutRef = useRef(null);

  return (
    <div>
      <Flyout
        instanceRef={flyoutRef}
        position="end"
        fallbackPositions={["end-top", "end-bottom", "start"]}
        width="trigger"
        contentGap={12}
        groupTimeouts
        onOpen={() => console.log("Opened")}
        onClose={({ reason }) => console.log("Closed:", reason)}
      >
        <Flyout.Trigger>
          {(attributes) => <Button {...attributes}>Advanced Flyout</Button>}
        </Flyout.Trigger>
        <Flyout.Content
          className="custom-flyout"
          attributes={{ "data-testid": "flyout-content" }}
        >
          <div style={{ padding: 20, width: 200 }}>
            <h4>Advanced Flyout</h4>
            <p>With multiple fallback positions and custom width.</p>
            <Button size="small">Action</Button>
          </div>
        </Flyout.Content>
      </Flyout>

      <Button onClick={() => flyoutRef.current?.open()}>
        Open programmatically
      </Button>
    </div>
  );
}
```

### Nested Flyout (Submenu)

```tsx
import { Flyout, Button } from "reshaped";

function NestedFlyout() {
  return (
    <Flyout position="bottom-start" trapFocusMode="action-menu">
      <Flyout.Trigger>
        {(attributes) => <Button {...attributes}>Main Menu</Button>}
      </Flyout.Trigger>
      <Flyout.Content>
        <div style={{ padding: 8, background: "white" }}>
          <Button>Menu Item 1</Button>

          <Flyout position="end-top" trapFocusMode="action-menu">
            <Flyout.Trigger>
              {(attributes) => <Button {...attributes}>Submenu →</Button>}
            </Flyout.Trigger>
            <Flyout.Content>
              <div style={{ padding: 8, background: "white" }}>
                <Button>Submenu Item 1</Button>
                <Button>Submenu Item 2</Button>
              </div>
            </Flyout.Content>
          </Flyout>

          <Button>Menu Item 3</Button>
        </div>
      </Flyout.Content>
    </Flyout>
  );
}
```

## Accessibility Considerations

The Flyout component includes comprehensive accessibility features:

- **ARIA Attributes**: Automatically applies appropriate `aria-haspopup`, `aria-expanded`, `aria-controls`, and `aria-describedby` attributes based on trigger type and content
- **Focus Management**: Intelligent focus trapping with multiple modes for different use cases (dialog, menu, action-bar)
- **Keyboard Navigation**: Full keyboard support with Escape key handling and proper focus return
- **Screen Reader Support**: Proper role assignment based on content type (tooltip, dialog, menu, listbox)
- **Touch Device Support**: Handles touch interactions appropriately for hover-based flyouts

Focus trap modes provide different behaviors:

- `"dialog"`: Full modal behavior with focus containment
- `"action-menu"`: Menu-style navigation with arrow key support
- `"selection-menu"`: Listbox behavior for selection interfaces
- `"action-bar"`: Toolbar-style navigation
- `"content-menu"`: Content-focused menu behavior

## Related Components

- **Popover**: Higher-level component built on Flyout for interactive content
- **Tooltip**: Specialized flyout for hover-based informational content
- **DropdownMenu**: Menu system using Flyout for positioning
- **ContextMenu**: Right-click menu implementation
- **Select**: Form control using Flyout for options display
- **Autocomplete**: Search input with Flyout-based suggestions
- **Modal**: Alternative for larger, more prominent overlays
- **Portal**: Lower-level component for rendering outside normal DOM hierarchy

The Flyout component serves as the foundation for most overlay-based components in the design system, providing consistent positioning, interaction patterns, and accessibility features.
