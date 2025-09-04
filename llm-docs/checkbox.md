# Checkbox

A form control that allows users to select one or multiple options from a set of choices, with support for controlled and uncontrolled states.

## Keywords

Input Field, Form Control, Selection, Toggle, Validation, Multi-select, Boolean Input

## Usage Description

The Checkbox component is used when users need to make binary choices or select multiple options from a list. It's commonly used in forms, settings panels, filter interfaces, and anywhere users need to toggle options on or off. The component supports both controlled and uncontrolled modes, making it suitable for various form management patterns.

Checkboxes are ideal for situations where users can select zero, one, or multiple options independently of each other. Unlike radio buttons, checkboxes allow multiple selections within the same group. The component integrates seamlessly with CheckboxGroup for managing collections of related checkboxes with shared state and validation.

The component includes visual states for checked, unchecked, and indeterminate states, along with proper accessibility support including focus management and screen reader compatibility. It also supports responsive sizing and integrates with the reshaped design system's theming and validation patterns.

## Props Documentation

### Core Props

**children** - `React.ReactNode` (optional)
The label content displayed next to the checkbox. Can be text, elements, or any valid React content.

**name** - `string` (optional)
The name attribute for the checkbox input. Required for form submission and when using with CheckboxGroup.

**value** - `string` (optional)
The value associated with the checkbox, used in form submission and CheckboxGroup selection.

### State Management Props

**checked** - `boolean` (controlled mode only)
Controls the checked state of the checkbox. When provided, the component operates in controlled mode and requires an onChange handler.

**defaultChecked** - `boolean` (uncontrolled mode only)
Sets the initial checked state for uncontrolled checkboxes. Cannot be used with the checked prop.

**indeterminate** - `boolean` (optional)
Sets the checkbox to an indeterminate state, typically used to represent partial selection in hierarchical lists.

### Event Handlers

**onChange** - `G.ChangeHandler<boolean>` (optional)
Callback function called when the checkbox state changes. Receives an object with name, value, checked state, and the original event.

**onFocus** - `(e: React.FocusEvent) => void` (optional)
Callback function called when the checkbox receives focus.

**onBlur** - `(e: React.FocusEvent) => void` (optional)
Callback function called when the checkbox loses focus.

### Appearance Props

**size** - `G.Responsive<"small" | "medium" | "large">` (optional, default: "medium")
Controls the visual size of the checkbox and associated text. Supports responsive values for different viewport sizes.

### State Props

**disabled** - `boolean` (optional)
Disables the checkbox, preventing user interaction and applying disabled styling.

**hasError** - `boolean` (optional)
Applies error styling to indicate validation issues. Can be inherited from FormControl or CheckboxGroup context.

### Styling Props

**className** - `G.ClassName` (optional)
Additional CSS classes to apply to the checkbox container.

**attributes** - `G.Attributes<"label">` (optional)
Additional HTML attributes to apply to the label element that wraps the checkbox.

**inputAttributes** - `G.Attributes<"input">` (optional)
Additional HTML attributes to apply directly to the input element.

## Code Examples

### Basic Usage

```tsx
import { Checkbox } from "reshaped";

function BasicCheckbox() {
  return (
    <Checkbox name="terms" value="accepted">
      I agree to the terms and conditions
    </Checkbox>
  );
}
```

This example demonstrates a simple uncontrolled checkbox with a text label.

### Controlled Checkbox with State Management

```tsx
import { useState } from "react";
import { Checkbox } from "reshaped";

function ControlledCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = ({ checked }) => {
    setIsChecked(checked);
  };

  return (
    <Checkbox
      name="newsletter"
      value="subscribe"
      checked={isChecked}
      onChange={handleChange}
    >
      Subscribe to newsletter
    </Checkbox>
  );
}
```

This example shows how to use the checkbox in controlled mode with React state.

### Different Sizes and States

```tsx
import { Checkbox, View } from "reshaped";

function CheckboxVariants() {
  return (
    <View gap={4}>
      <Checkbox name="small" value="1" size="small" defaultChecked>
        Small checkbox
      </Checkbox>

      <Checkbox name="medium" value="2" size="medium" defaultChecked>
        Medium checkbox (default)
      </Checkbox>

      <Checkbox name="large" value="3" size="large" defaultChecked>
        Large checkbox
      </Checkbox>

      <Checkbox name="indeterminate" value="4" indeterminate>
        Indeterminate state
      </Checkbox>

      <Checkbox name="error" value="5" hasError>
        Checkbox with error
      </Checkbox>

      <Checkbox name="disabled" value="6" disabled>
        Disabled checkbox
      </Checkbox>
    </View>
  );
}
```

This example demonstrates various sizes and visual states available for the checkbox.

### Responsive Sizing

```tsx
import { Checkbox } from "reshaped";

function ResponsiveCheckbox() {
  return (
    <Checkbox
      name="responsive"
      value="option"
      size={{ s: "small", m: "medium", l: "large" }}
      defaultChecked
    >
      Responsive checkbox sizing
    </Checkbox>
  );
}
```

This example shows how to use responsive sizing that adapts to different viewport sizes.

### Form Integration with Validation

```tsx
import { useState } from "react";
import { Checkbox, FormControl, View } from "reshaped";

function FormCheckbox() {
  const [accepted, setAccepted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = () => {
    if (!accepted) {
      setHasError(true);
    } else {
      setHasError(false);
      // Process form submission
    }
  };

  return (
    <View gap={4}>
      <FormControl hasError={hasError}>
        <Checkbox
          name="terms"
          value="accepted"
          checked={accepted}
          onChange={({ checked }) => {
            setAccepted(checked);
            if (hasError && checked) {
              setHasError(false);
            }
          }}
        >
          I agree to the terms and conditions
        </Checkbox>
        {hasError && (
          <FormControl.Feedback>
            You must accept the terms to continue
          </FormControl.Feedback>
        )}
      </FormControl>

      <button onClick={handleSubmit}>Submit</button>
    </View>
  );
}
```

This example shows integration with form validation and error handling.

## Related Components

**CheckboxGroup** - A container component for managing multiple related checkboxes with shared state, validation, and name attributes. Checkboxes automatically integrate with CheckboxGroup context when nested within it.

**FormControl** - Provides form validation context, error states, and accessibility features that Checkbox components inherit when nested within FormControl.

**RadioButton** - An alternative input component for exclusive selection scenarios where only one option can be selected at a time.

**Switch** - A toggle component for binary on/off states, visually different from checkboxes but serving similar functional purposes in some contexts.

**Text** - Used internally for rendering checkbox labels with appropriate typography based on the checkbox size.

**Icon** - Used internally for rendering the checkmark icon within the checkbox decorator.
