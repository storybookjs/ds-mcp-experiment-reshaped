# Hotkey

## Component Name
Hotkey

## Brief Description
A styled keyboard shortcut indicator component that displays keyboard combinations with visual emphasis and active states.

## Keywords
Keyboard Shortcut, Hotkey, Keystroke, Command, Key Combination, Accessibility, Text Element, User Interface

## Usage Description

The Hotkey component is designed to visually represent keyboard shortcuts and key combinations in user interfaces. It provides a consistent way to display keyboard shortcuts with proper styling that matches the design system's aesthetic. The component is particularly useful in command palettes, tooltips, menus, and help documentation where users need to understand keyboard navigation options.

This component is built on top of the Text component and renders as a semantic `<kbd>` HTML element, ensuring proper accessibility and meaning for screen readers. The component supports an active state that provides visual feedback when the associated hotkey is currently pressed or activated, making it ideal for interactive applications that respond to keyboard input.

The Hotkey component integrates seamlessly with the reshaped design system's useHotkeys hook, allowing developers to create dynamic hotkey displays that reflect the current state of keyboard interactions. It's commonly used in text fields as end slots, navigation interfaces, and anywhere keyboard shortcuts need to be communicated to users.

## Props Documentation

### children
- **Type**: `React.ReactNode`
- **Required**: Yes
- **Description**: The content to display inside the hotkey indicator, typically the key combination text (e.g., "⌘K", "Ctrl+S", "Esc")
- **Example values**: "⌘K", "Ctrl+C", "F1", "Alt+Tab"

### active
- **Type**: `boolean`
- **Required**: No
- **Default**: `undefined`
- **Description**: Controls the active state styling of the hotkey. When true, applies active styling with enhanced background and text color to indicate the hotkey is currently pressed or activated
- **Example values**: `true`, `false`

### className
- **Type**: `ClassName` (string | string[] | ClassNameValue[])
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS classes to apply to the component for custom styling
- **Example values**: `"custom-hotkey"`, `["hotkey", "primary"]`

### attributes
- **Type**: `Attributes<"span">` (extends HTML span attributes with data attributes)
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to apply to the underlying element, including data attributes and standard HTML props
- **Example values**: `{ "data-testid": "search-hotkey", "aria-label": "Command K shortcut" }`

## Code Examples

### Basic Usage
```tsx
import { Hotkey } from 'reshaped';

// Simple keyboard shortcut display
function SearchInput() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." />
      <Hotkey>⌘K</Hotkey>
    </div>
  );
}
```

### Active State with useHotkeys Integration
```tsx
import { Hotkey, useHotkeys } from 'reshaped';

function DynamicHotkeyDisplay() {
  const { checkHotkeyState } = useHotkeys({
    "Meta+k": () => {
      // Handle search action
      openSearch();
    }
  });

  return (
    <Hotkey active={checkHotkeyState("Meta+k")}>
      ⌘K
    </Hotkey>
  );
}
```

### TextField Integration
```tsx
import { TextField, Hotkey, View } from 'reshaped';

function SearchField() {
  return (
    <View width="400px">
      <TextField
        name="search"
        placeholder="Search documents..."
        endSlot={<Hotkey>⌘K</Hotkey>}
        inputAttributes={{ "aria-label": "Search with Command+K" }}
      />
    </View>
  );
}
```

### Multiple Hotkeys in Menu
```tsx
import { Hotkey } from 'reshaped';

function CommandMenu() {
  const menuItems = [
    { label: "New File", hotkey: "⌘N" },
    { label: "Open", hotkey: "⌘O" },
    { label: "Save", hotkey: "⌘S" },
    { label: "Copy", hotkey: "⌘C" }
  ];

  return (
    <div className="menu">
      {menuItems.map(item => (
        <div key={item.label} className="menu-item">
          <span>{item.label}</span>
          <Hotkey className="menu-hotkey">{item.hotkey}</Hotkey>
        </div>
      ))}
    </div>
  );
}
```

### Custom Styled Hotkey with Data Attributes
```tsx
import { Hotkey } from 'reshaped';

function CustomHotkey() {
  return (
    <Hotkey
      active={false}
      className="custom-hotkey-style"
      attributes={{
        "data-testid": "escape-key",
        "aria-describedby": "help-text",
        "data-key": "escape"
      }}
    >
      Esc
    </Hotkey>
  );
}
```

## Accessibility Considerations

The Hotkey component is built with accessibility in mind:

- **Semantic HTML**: Uses the `<kbd>` element which is specifically designed for keyboard input representation
- **Screen Reader Support**: The `<kbd>` element is properly recognized by assistive technologies
- **Text Component Foundation**: Inherits accessibility features from the underlying Text component
- **ARIA Attributes**: Supports custom ARIA attributes through the `attributes` prop
- **Color Contrast**: Uses design system color tokens that meet accessibility contrast requirements
- **Focus Management**: Integrates well with keyboard navigation patterns when used with interactive components

## Related Components

- **Text**: The foundational component that Hotkey extends, providing typography and text styling capabilities
- **TextField**: Commonly used together with Hotkey as an end slot to show keyboard shortcuts for input fields
- **useHotkeys Hook**: Essential hook for creating dynamic hotkey displays that respond to actual keyboard state
- **View**: Layout component often used to contain and position Hotkey components
- **Button**: Frequently paired with Hotkey components to show keyboard shortcuts for button actions
- **Menu/MenuItem**: Often used together to display keyboard shortcuts in dropdown menus and command palettes

The Hotkey component works as part of a larger keyboard interaction system within the reshaped design system, providing visual consistency for all keyboard shortcut representations across an application.