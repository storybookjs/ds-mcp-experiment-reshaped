# Popover

## Brief Description

A flexible overlay component that displays contextual content anchored to a trigger element with customizable positioning, styling, and interaction modes.

## Keywords

- Overlay
- Contextual Menu
- Positioning
- Flyout
- Modal
- Tooltip Alternative
- Interactive Content
- Dismissible

## Usage Description

The Popover component creates floating content panels that appear relative to trigger elements. It's built on top of the Flyout component and provides enhanced styling, elevation, and dismissible content features. Use Popover when you need to display contextual information, actions, or forms without navigating away from the current view.

Common use cases include contextual menus, form overlays, information panels, and interactive tooltips. The component supports both controlled and uncontrolled modes, multiple positioning options, and various interaction triggers (click, hover, focus). It's particularly useful for displaying actions, settings panels, or detailed information that doesn't warrant a full modal dialog.

The Popover automatically handles positioning fallbacks when there's insufficient space, focus management for accessibility, and proper cleanup when dismissed. It integrates seamlessly with other components and supports nested popovers for complex interaction patterns.

## Props Documentation

### Core Props

**id** (optional): `string`
- Unique identifier for the popover instance
- Used for accessibility attributes and DOM references
- Auto-generated if not provided

**position** (optional): `"top" | "bottom" | "start" | "end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "start-top" | "start-bottom" | "end-top" | "end-bottom"`
- Controls where the popover appears relative to the trigger
- Default: `"bottom"`
- Supports automatic fallback positioning when space is limited

**triggerType** (optional): `"hover" | "click" | "focus"`
- Determines how the popover is activated
- Default: `"click"`
- "hover" enables mouse enter/leave behavior
- "focus" opens on focus events

**width** (optional): `"trigger" | string`
- Sets the popover content width
- "trigger" matches the trigger element width
- String values accept CSS width units (e.g., "400px", "100%")

**padding** (optional): `number`
- Internal padding for the popover content
- Default: `4` for elevated variant, `0` for headless variant
- Uses the design system spacing scale

**elevation** (optional): `"raised" | "overlay"`
- Controls the shadow/elevation level
- "raised" provides subtle elevation
- "overlay" provides strong elevation for modal-like content

**variant** (optional, deprecated): `"elevated" | "headless"`
- Controls the popover styling approach
- Default: `"elevated"`
- "headless" removes all default styling
- Deprecated: Use Flyout utility instead, will be removed in v4

### State Management Props

**active** (optional): `boolean`
- Controls popover visibility in controlled mode
- When provided, component operates in controlled mode
- Must be used with onOpen/onClose callbacks

**defaultActive** (optional): `boolean`
- Initial open state for uncontrolled mode
- Cannot be used with `active` prop
- Component manages its own state internally

**onOpen** (optional): `() => void`
- Callback fired when popover opens
- Useful for tracking state or triggering side effects

**onClose** (optional): `(args: { reason?: "escape-key" | "outside-click" | "item-selection" | "close-button" }) => void`
- Callback fired when popover closes
- Provides reason for closure for analytics or conditional behavior

### Positioning Props

**forcePosition** (optional, deprecated): `boolean`
- Forces the specified position without fallbacks
- Deprecated: Use `fallbackPositions={false}` instead
- Will be removed in v4

**fallbackPositions** (optional): `Position[] | false`
- Array of fallback positions when primary position doesn't fit
- `false` disables fallback positioning
- Automatic fallbacks applied by default

**contentGap** (optional): `number`
- Distance between trigger and popover content
- Measured in pixels
- Default value determined by design system

**contentShift** (optional): `number`
- Maximum pixel shift to keep popover in viewport
- Prevents popover from extending beyond screen boundaries

**originCoordinates** (optional): `{ x: number; y: number }`
- Custom positioning coordinates instead of trigger-based positioning
- Useful for context menus or programmatic positioning

### Focus and Interaction Props

**trapFocusMode** (optional): `"dialog" | "menu" | "selection-menu" | "content-menu" | false`
- Controls focus trapping behavior within the popover
- Default: `"content-menu"` for hover triggers, `undefined` for others
- `false` disables focus trapping

**autoFocus** (optional): `boolean`
- Automatically focus the popover content when opened
- Improves keyboard accessibility
- Default behavior varies by trigger type

**disableHideAnimation** (optional): `boolean`
- Disables the close animation
- Useful for performance optimization or custom animations

**disableContentHover** (optional): `boolean`
- Prevents hover events on popover content from affecting state
- Relevant for hover-triggered popovers

**disableCloseOnOutsideClick** (optional): `boolean`
- Prevents popover from closing when clicking outside
- Use cautiously as it affects expected UX patterns

### Advanced Props

**containerRef** (optional): `React.RefObject<HTMLElement | null>`
- Reference to custom container element for portal rendering
- Default: document.body

**initialFocusRef** (optional): `React.RefObject<HTMLElement | null>`
- Element to focus when popover opens
- Overrides default focus behavior

**instanceRef** (optional): `React.Ref<{ open: () => void; close: () => void; updatePosition: () => void } | null>`
- Provides access to popover control methods
- Useful for programmatic control

**contentClassName** (optional): `string`
- Additional CSS class for the popover content container
- Applied alongside default styling

**contentAttributes** (optional): `React.HTMLAttributes<HTMLDivElement>`
- Additional HTML attributes for the content container
- Useful for accessibility or testing attributes

### Composition Props

**children** (optional): `React.ReactNode`
- Popover content and trigger components
- Typically contains Popover.Trigger and Popover.Content

## Code Examples

### Basic Usage

```tsx
import { Popover, Button, View } from 'reshaped';

function BasicPopover() {
  return (
    <Popover>
      <Popover.Trigger>
        {(attributes) => (
          <Button attributes={attributes}>
            Open Popover
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <View padding={4}>
          <p>This is popover content</p>
        </View>
      </Popover.Content>
    </Popover>
  );
}
```

This example shows the most basic popover implementation with a button trigger and simple content.

### Controlled Popover with Custom Width

```tsx
import { Popover, Button, View } from 'reshaped';
import { useState } from 'react';

function ControlledPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover 
      active={isOpen}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      width="400px"
      position="bottom-start"
    >
      <Popover.Trigger>
        {(attributes) => (
          <Button attributes={attributes}>
            {isOpen ? 'Close' : 'Open'} Popover
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <View padding={6} gap={3}>
          <h3>Custom Width Popover</h3>
          <p>This popover has a fixed width of 400px and opens to the bottom-start.</p>
          <Button onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </View>
      </Popover.Content>
    </Popover>
  );
}
```

This demonstrates controlled state management with custom positioning and width.

### Dismissible Popover

```tsx
import { Popover, Button, View } from 'reshaped';

function DismissiblePopover() {
  return (
    <Popover defaultActive>
      <Popover.Trigger>
        {(attributes) => (
          <Button attributes={attributes}>
            Open Dismissible Popover
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Dismissible 
          closeAriaLabel="Close popover"
        >
          <View gap={3}>
            <h4>Dismissible Content</h4>
            <p>This popover includes a close button in the top-right corner.</p>
            <View direction="row" gap={2}>
              <Button>Action 1</Button>
              <Button>Action 2</Button>
            </View>
          </View>
        </Popover.Dismissible>
      </Popover.Content>
    </Popover>
  );
}
```

Shows how to add a dismissible wrapper with a close button for enhanced UX.

### Hover-Triggered Popover

```tsx
import { Popover, Button, View } from 'reshaped';

function HoverPopover() {
  return (
    <Popover 
      triggerType="hover"
      position="top"
      padding={3}
    >
      <Popover.Trigger>
        {(attributes) => (
          <Button attributes={attributes}>
            Hover me
          </Button>
        )}
      </Popover.Trigger>
      <Popover.Content>
        <View>
          <p>This appears on hover</p>
          <small>Great for contextual information</small>
        </View>
      </Popover.Content>
    </Popover>
  );
}
```

Demonstrates hover-triggered popovers, useful for tooltips or contextual help.

### Advanced Configuration with Custom Positioning

```tsx
import { Popover, Button, View, MenuItem } from 'reshaped';
import { useState } from 'react';

function AdvancedPopover() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleRightClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <div 
        onContextMenu={handleRightClick}
        style={{ height: '200px', background: '#f0f0f0', padding: '20px' }}
      >
        Right-click anywhere in this area
      </div>
      
      <Popover
        active={coordinates.x > 0}
        onClose={() => setCoordinates({ x: 0, y: 0 })}
        originCoordinates={coordinates}
        trapFocusMode="selection-menu"
        disableCloseOnOutsideClick={false}
      >
        <Popover.Content>
          <View gap={1}>
            <MenuItem onClick={() => console.log('Option 1')}>
              Option 1
            </MenuItem>
            <MenuItem onClick={() => console.log('Option 2')}>
              Option 2
            </MenuItem>
            <MenuItem onClick={() => setCoordinates({ x: 0, y: 0 })}>
              Close Menu
            </MenuItem>
          </View>
        </Popover.Content>
      </Popover>
    </div>
  );
}
```

Shows advanced usage with custom coordinates, context menus, and focus management.

## Related Components

**Flyout**: The base component that Popover extends. Use Flyout directly when you need more control over styling and behavior without Popover's opinionated defaults.

**Tooltip**: For simple text-based contextual information. Lighter weight than Popover but less interactive.

**DropdownMenu**: Specialized popover for menu interactions with built-in keyboard navigation and selection handling.

**Modal**: For content that requires full user attention and blocks interaction with the rest of the page.

**Dismissible**: Used within Popover.Content to add close button functionality. Can be used standalone in other overlay components.

**Button**: Commonly used as trigger elements within Popover.Trigger render props.

**MenuItem**: Often used within Popover.Content for menu-like interactions.

**View**: Frequently used to structure and layout content within popovers.