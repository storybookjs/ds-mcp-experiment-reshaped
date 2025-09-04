# Switch

A binary control component that allows users to toggle between on and off states.

## Keywords

Toggle, Binary Control, Checkbox, Form Control, Input Field, Selection, State Control, UI Control

## Usage Description

The Switch component is used when you need to provide users with a binary choice or toggle functionality. It's particularly effective for settings panels, preferences, and configuration interfaces where users need to enable or disable features, options, or functionalities.

Switches are ideal when the action takes immediate effect, unlike checkboxes which typically require form submission. They provide clear visual feedback about the current state and are commonly used in mobile-inspired interfaces. The component integrates seamlessly with form controls and supports both controlled and uncontrolled usage patterns.

Use switches for settings that can be instantly toggled on or off, such as notification preferences, feature flags, or mode toggles (like dark/light theme). The component supports responsive sizing and can include descriptive labels to provide additional context for the toggle action.

## Props Documentation

### Core Props

- **name** (`string`, required): The name attribute for the underlying input element, used for form submission and identification.

- **checked** (`boolean`, optional): Controls the switch state in controlled mode. When provided, the component operates as a controlled component.

- **defaultChecked** (`boolean`, optional): Sets the initial checked state for uncontrolled usage. Cannot be used with `checked` prop.

- **onChange** (`ChangeHandler<boolean>`, optional): Callback function triggered when the switch state changes. Receives an object with `{ name, checked, event }` properties.

- **disabled** (`boolean`, optional): Disables the switch, preventing user interaction and applying disabled styling.

### Visual Props

- **size** (`Responsive<"small" | "medium" | "large">`, optional, default: "medium"): Controls the switch size. Supports responsive values using viewport breakpoints (`{ s: "small", m: "large" }`).

- **reversed** (`boolean`, optional): When true, displays the label on the left side of the switch instead of the right.

- **children** (`React.ReactNode`, optional): Label text or content to display alongside the switch. Text size automatically adjusts based on the switch size.

### Interaction Props

- **onFocus** (`(e: React.FocusEvent) => void`, optional): Callback fired when the switch receives focus.

- **onBlur** (`(e: React.FocusEvent) => void`, optional): Callback fired when the switch loses focus.

### Styling Props

- **className** (`ClassName`, optional): Additional CSS classes to apply to the root element.

- **attributes** (`Attributes<"label">`, optional): HTML attributes to apply to the label element, including data attributes and aria properties.

- **inputAttributes** (`Attributes<"input">`, optional): HTML attributes to apply to the underlying input element.

### Form Integration Props

- **id** (`string`, optional): Unique identifier for the switch. If not provided, an ID will be generated automatically.

## Code Examples

### Basic Usage

```tsx
import { Switch } from "reshaped";

// Uncontrolled switch with default state
<Switch
  name="notifications"
  defaultChecked={true}
  inputAttributes={{ "aria-label": "Enable notifications" }}
>
  Enable notifications
</Switch>;
```

Basic uncontrolled switch with a label and default checked state.

### Controlled Switch with State Management

```tsx
import { Switch } from "reshaped";
import { useState } from "react";

const [isEnabled, setIsEnabled] = useState(false);

<Switch
  name="darkMode"
  checked={isEnabled}
  onChange={({ checked }) => setIsEnabled(checked)}
>
  Dark mode
</Switch>;
```

Demonstrates controlled usage with external state management for immediate response to state changes.

### Size Variations and Responsive Design

```tsx
import { Switch } from 'reshaped';

// Different sizes
<Switch name="small" size="small">Small switch</Switch>
<Switch name="medium" size="medium">Medium switch</Switch>
<Switch name="large" size="large">Large switch</Switch>

// Responsive sizing
<Switch
  name="responsive"
  size={{ s: "small", m: "medium", l: "large" }}
>
  Responsive switch
</Switch>
```

Shows various size options and responsive behavior across different viewport breakpoints.

### Advanced Form Integration

```tsx
import { Switch, FormControl } from "reshaped";

<FormControl>
  <FormControl.Label>Privacy Settings</FormControl.Label>
  <Switch name="privacy" reversed>
    Make profile private
  </Switch>
  <FormControl.Helper>
    When enabled, your profile will only be visible to connections
  </FormControl.Helper>
</FormControl>;
```

Demonstrates integration with FormControl for comprehensive form layouts with labels and helper text.

### Disabled States and Accessibility

```tsx
import { Switch } from 'reshaped';

// Disabled switch
<Switch
  name="premium"
  disabled
  inputAttributes={{
    "aria-label": "Premium features (requires subscription)",
    "aria-describedby": "premium-description"
  }}
>
  Premium features
</Switch>

// With additional accessibility
<div>
  <Switch
    name="analytics"
    inputAttributes={{
      "aria-describedby": "analytics-help",
      "aria-required": "true"
    }}
  >
    Share analytics data
  </Switch>
  <div id="analytics-help">
    Help us improve by sharing anonymous usage data
  </div>
</div>
```

Shows disabled state handling and comprehensive accessibility implementation with ARIA attributes.

## Related Components

- **FormControl**: Provides form layout structure, labels, validation states, and helper text for comprehensive form integration.
- **Checkbox**: Similar binary input but designed for form submission contexts rather than immediate state changes.
- **Text**: Used internally for label rendering and can be used alongside switches for additional context.
- **View**: Layout component often used to arrange multiple switches or combine switches with other form elements.
- **Button**: Alternative control component for actions that don't represent binary state but trigger immediate responses.

The Switch component is part of the broader form control ecosystem and works seamlessly with FormControl for validation, labeling, and error handling. It follows the same interaction patterns as other input components while providing the specific visual and behavioral characteristics needed for toggle controls.
