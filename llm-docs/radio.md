# Radio

A customizable radio button component for single selection within a group of options.

## Keywords

Selection, Form Input, Radio Button, Single Choice, Form Control, Input Field, User Interface, Binary Choice

## Usage Description

The Radio component provides a standard radio button input that allows users to select a single option from a group of choices. It can be used independently with controlled or uncontrolled state management, or as part of a RadioGroup for easier group management.

Radio buttons are ideal for scenarios where users need to make a single selection from multiple mutually exclusive options. They work best when there are 2-7 options visible at once, providing immediate visual feedback about the available choices and current selection.

The component integrates seamlessly with form management systems and supports various accessibility features including keyboard navigation, screen reader compatibility, and proper focus management. It can be used within FormControl components for consistent form styling and error handling.

## Props Documentation

### Required Props

- **value** (`string`): The unique value associated with this radio button option. Used to identify which option is selected when used in a group.

### Optional Props

- **children** (`React.ReactNode`): The label content displayed next to the radio button. Can be text, JSX elements, or other React components.

- **name** (`string`): The form field name for the radio input. When used within a RadioGroup, this is automatically provided by the group context.

- **checked** (`boolean`): Controls the checked state for controlled components. Cannot be used with `defaultChecked`. When used within a RadioGroup, the group manages this value.

- **defaultChecked** (`boolean`): Sets the initial checked state for uncontrolled components. Cannot be used with `checked`. Not applicable when used within a RadioGroup.

- **disabled** (`boolean`): Disables the radio button, preventing user interaction. When used within a RadioGroup or FormControl, those components can also control the disabled state.

- **hasError** (`boolean`): Applies error styling to indicate validation issues. Can be overridden by FormControl or RadioGroup error states.

- **size** (`"small" | "medium" | "large" | Responsive<"small" | "medium" | "large">`): Controls the visual size of the radio button and its label text. Defaults to `"medium"`. Supports responsive values for different viewport sizes.

- **onChange** (`G.ChangeHandler<boolean>`): Callback function triggered when the radio button state changes. Receives an object with `{ name, value, checked, event }` properties.

- **onFocus** (`(e: React.FocusEvent) => void`): Callback function triggered when the radio button receives focus.

- **onBlur** (`(e: React.FocusEvent) => void`): Callback function triggered when the radio button loses focus.

- **className** (`G.ClassName`): Additional CSS class names to apply to the root element.

- **attributes** (`G.Attributes<"label">`): Additional HTML attributes to apply to the label element, including data attributes and ARIA properties.

- **inputAttributes** (`G.Attributes<"input">`): Additional HTML attributes to apply to the hidden input element.

## Code Examples

### Basic Usage

```tsx
import { Radio } from 'reshaped';

// Uncontrolled radio button
function BasicExample() {
  return (
    <Radio name="pet" value="dog" defaultChecked>
      Dog
    </Radio>
  );
}
```

### Controlled Radio Button

```tsx
import { Radio } from 'reshaped';
import { useState } from 'react';

function ControlledExample() {
  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = ({ value, checked }) => {
    if (checked) {
      setSelectedValue(value);
    }
  };
  
  return (
    <div>
      <Radio 
        name="animal" 
        value="cat" 
        checked={selectedValue === 'cat'}
        onChange={handleChange}
      >
        Cat
      </Radio>
      <Radio 
        name="animal" 
        value="dog" 
        checked={selectedValue === 'dog'}
        onChange={handleChange}
      >
        Dog
      </Radio>
    </div>
  );
}
```

### Size Variations

```tsx
import { Radio } from 'reshaped';

function SizeExample() {
  return (
    <div>
      <Radio name="size" value="small" size="small">
        Small Radio
      </Radio>
      <Radio name="size" value="medium" size="medium">
        Medium Radio
      </Radio>
      <Radio name="size" value="large" size="large">
        Large Radio
      </Radio>
    </div>
  );
}
```

### Responsive Size

```tsx
import { Radio } from 'reshaped';

function ResponsiveExample() {
  return (
    <Radio 
      name="responsive" 
      value="option" 
      size={{ s: "small", m: "medium", l: "large" }}
    >
      Responsive Radio
    </Radio>
  );
}
```

### Error and Disabled States

```tsx
import { Radio } from 'reshaped';

function StateExample() {
  return (
    <div>
      <Radio name="error" value="option1" hasError>
        Radio with Error
      </Radio>
      
      <Radio name="disabled" value="option2" disabled>
        Disabled Radio
      </Radio>
      
      <Radio name="disabled-checked" value="option3" disabled checked>
        Disabled Checked Radio
      </Radio>
    </div>
  );
}
```

### With Custom Styling

```tsx
import { Radio } from 'reshaped';

function CustomExample() {
  return (
    <Radio 
      name="custom" 
      value="option"
      className="my-custom-radio"
      attributes={{ 'data-testid': 'custom-radio' }}
      inputAttributes={{ 'aria-describedby': 'helper-text' }}
    >
      Custom Styled Radio
    </Radio>
  );
}
```

## Related Components

- **RadioGroup**: Container component that manages a group of Radio components, providing shared state management, name assignment, and group-level properties like error states and disabled status.

- **FormControl**: Wrapper component that provides consistent styling, error handling, labels, and helper text for form inputs including Radio components.

- **Text**: Used internally to render the radio button label with appropriate typography based on the size prop.

- **HiddenInput**: Internal component that renders the actual HTML input element with proper accessibility attributes while keeping it visually hidden.

- **Checkbox**: Alternative input component for scenarios requiring multiple selections instead of single selection.

- **ToggleGroup**: Alternative component for single selection scenarios with a different visual presentation using button-style toggles.