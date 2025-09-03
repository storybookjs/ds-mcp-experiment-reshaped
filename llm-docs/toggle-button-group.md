# ToggleButtonGroup

A component that groups multiple toggle buttons together with coordinated selection state management.

## Keywords

Button Group, Toggle Selection, Form Control, Multi-select, Single Select, Button Collection, Input Group, State Management

## Usage Description

The ToggleButtonGroup component is used to create a set of related toggle buttons that work together as a cohesive selection interface. It manages the selection state of multiple ToggleButton children and provides both single and multiple selection modes.

Use this component when you need users to select one or more options from a predefined set of choices, such as filter options, view modes, or configuration settings. The component is ideal for scenarios where the options are mutually exclusive (single mode) or where multiple options can be selected simultaneously (multiple mode).

The component supports both controlled and uncontrolled usage patterns, making it flexible for different state management approaches. It includes comprehensive keyboard navigation support with arrow keys, Home, and End keys for accessibility compliance.

## Props Documentation

### Core Props

**selectionMode** (optional)
- Type: `"single" | "multiple"`
- Default: `"single"`
- Description: Determines whether users can select one option or multiple options simultaneously. In single mode, selecting a new button deselects the previously selected button. In multiple mode, each button can be toggled independently.

**onChange** (optional)
- Type: `(args: { value: string[]; event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> }) => void`
- Description: Callback function called when the selection state changes. The `value` parameter contains an array of selected button values, and `event` contains the triggering event.

### Controlled Mode Props

**value** (required for controlled mode)
- Type: `string[]`
- Description: Array of currently selected button values. When provided, the component operates in controlled mode where the parent component manages the selection state.

**defaultValue** (not allowed in controlled mode)
- Type: `never`
- Description: Cannot be used when `value` is provided.

### Uncontrolled Mode Props

**value** (not allowed in uncontrolled mode)
- Type: `never`
- Description: Cannot be used when `defaultValue` is provided or when operating in uncontrolled mode.

**defaultValue** (optional for uncontrolled mode)
- Type: `string[]`
- Description: Array of initially selected button values. When provided without `value`, the component operates in uncontrolled mode and manages its own selection state.

### Inherited Props from ButtonGroup

**className** (optional)
- Type: `string | string[] | (string | null | undefined | false)[]`
- Description: CSS class name(s) to apply to the button group container.

**attributes** (optional)
- Type: `React.HTMLAttributes<HTMLDivElement> & Record<\`data-${string}\`, string | boolean>`
- Description: Additional HTML attributes and data attributes to apply to the button group container.

**children** (required)
- Type: `React.ReactNode`
- Description: ToggleButton components to be grouped together. Only ToggleButton components are processed; other children are rendered as-is.

## Code Examples

### Basic Usage - Single Selection (Uncontrolled)

```tsx
import { ToggleButtonGroup, ToggleButton } from 'reshaped';

function ViewModeSelector() {
  const handleChange = ({ value }) => {
    console.log('Selected view:', value[0]); // In single mode, only one value
  };

  return (
    <ToggleButtonGroup onChange={handleChange}>
      <ToggleButton value="grid">Grid View</ToggleButton>
      <ToggleButton value="list">List View</ToggleButton>
      <ToggleButton value="card">Card View</ToggleButton>
    </ToggleButtonGroup>
  );
}
```

This example demonstrates basic single-selection functionality in uncontrolled mode. The component manages its own state and calls the onChange handler when selection changes.

### Multiple Selection with Default Values

```tsx
import { ToggleButtonGroup, ToggleButton } from 'reshaped';

function FilterSelector() {
  const handleChange = ({ value }) => {
    console.log('Active filters:', value);
  };

  return (
    <ToggleButtonGroup 
      selectionMode="multiple" 
      defaultValue={['new', 'featured']}
      onChange={handleChange}
    >
      <ToggleButton value="new">New</ToggleButton>
      <ToggleButton value="featured">Featured</ToggleButton>
      <ToggleButton value="sale">On Sale</ToggleButton>
      <ToggleButton value="popular">Popular</ToggleButton>
    </ToggleButtonGroup>
  );
}
```

This example shows multiple selection mode with initial default values. Users can select and deselect multiple filters independently.

### Controlled Mode with State Management

```tsx
import { ToggleButtonGroup, ToggleButton } from 'reshaped';
import { useState } from 'react';

function ControlledToggleGroup() {
  const [selectedValues, setSelectedValues] = useState(['option1']);

  const handleChange = ({ value }) => {
    setSelectedValues(value);
  };

  return (
    <div>
      <ToggleButtonGroup 
        value={selectedValues}
        onChange={handleChange}
        selectionMode="single"
      >
        <ToggleButton value="option1">Option 1</ToggleButton>
        <ToggleButton value="option2">Option 2</ToggleButton>
        <ToggleButton value="option3">Option 3</ToggleButton>
      </ToggleButtonGroup>
      
      <p>Selected: {selectedValues.join(', ')}</p>
    </div>
  );
}
```

This example demonstrates controlled mode where the parent component manages the selection state, allowing for external state manipulation and synchronization.

### Advanced Usage with Custom Styling

```tsx
import { ToggleButtonGroup, ToggleButton } from 'reshaped';

function StyledToggleGroup() {
  return (
    <ToggleButtonGroup 
      className="my-custom-group"
      attributes={{ 
        id: "priority-selector",
        'data-testid': "priority-buttons"
      }}
      selectionMode="single"
    >
      <ToggleButton value="low" color="neutral">
        Low Priority
      </ToggleButton>
      <ToggleButton value="medium" color="primary">
        Medium Priority
      </ToggleButton>
      <ToggleButton value="high" color="critical">
        High Priority
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
```

This example shows how to apply custom styling and attributes to the button group, while using different button colors to indicate priority levels.

### Integration with Form State

```tsx
import { ToggleButtonGroup, ToggleButton } from 'reshaped';

function FormWithToggleGroup({ formState, setFormState }) {
  const handleNotificationChange = ({ value }) => {
    setFormState(prev => ({
      ...prev,
      notifications: value
    }));
  };

  return (
    <form>
      <label>Notification Preferences:</label>
      <ToggleButtonGroup 
        value={formState.notifications}
        onChange={handleNotificationChange}
        selectionMode="multiple"
      >
        <ToggleButton value="email">Email</ToggleButton>
        <ToggleButton value="push">Push Notifications</ToggleButton>
        <ToggleButton value="sms">SMS</ToggleButton>
        <ToggleButton value="in-app">In-App</ToggleButton>
      </ToggleButtonGroup>
    </form>
  );
}
```

This example demonstrates integration with form state management, showing how the toggle group can be part of a larger form structure.

## Accessibility Considerations

The ToggleButtonGroup component includes comprehensive accessibility features:

- **Keyboard Navigation**: Arrow keys (Left/Right, Up/Down) navigate between buttons within the group
- **Focus Management**: Home key focuses the first button, End key focuses the last button
- **ARIA Support**: Proper focus management with tabIndex handling ensures only one button in the group is focusable at a time
- **Screen Reader Support**: Each toggle button maintains its own accessibility state while participating in the group context

The component follows roving tabindex pattern for optimal screen reader experience, where only the currently focused button is in the tab sequence.

## Related Components

**ToggleButton**: Individual toggle button components that are used as children within ToggleButtonGroup. Each ToggleButton must have a unique `value` prop for proper selection tracking.

**Button.Group**: The underlying component that provides the visual grouping and layout. ToggleButtonGroup extends Button.Group with selection state management.

**useToggleButtonGroup**: React context hook that allows ToggleButton children to communicate with their parent ToggleButtonGroup. This hook provides access to the group's onChange handler and current selection state.

**Button**: Related component for non-toggle button functionality. ToggleButton extends Button with toggle-specific props and behavior.

The component architecture uses React Context to coordinate state between the group and its children, ensuring that individual ToggleButton components can access the group's selection state and change handlers without prop drilling.