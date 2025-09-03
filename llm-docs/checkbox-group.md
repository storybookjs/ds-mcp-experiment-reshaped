# CheckboxGroup

## Brief Description
A container component that manages multiple checkbox selections as a group, providing both controlled and uncontrolled behavior patterns.

## Keywords
- Checkbox Group
- Multi-selection
- Form Control
- Selection Group
- Input Group
- Form Field
- Controlled Component
- Uncontrolled Component

## Usage Description

The CheckboxGroup component serves as a container for managing multiple checkbox selections as a cohesive group. It handles the coordination between individual Checkbox components, providing a unified interface for managing group state and handling value changes. The component automatically switches between controlled and uncontrolled behavior based on whether a `value` prop is provided.

Use CheckboxGroup when you need users to select multiple options from a set of choices, such as selecting preferences, configuring features, or filtering content. The component is particularly useful in forms where you need to track multiple boolean selections as an array of values. It provides consistent state management and event handling across all child checkboxes while maintaining accessibility standards.

The component integrates seamlessly with form validation libraries and supports both immediate updates (controlled) and deferred updates (uncontrolled) based on your application's needs. It also provides error state management and can disable all child checkboxes simultaneously.

## Props Documentation

### Required Props

- **name**: `string`
  - The name attribute for the checkbox group, used for form submission and identification
  - Example: `"preferences"`, `"selectedOptions"`

### Optional Props

- **value**: `string[]` _(controlled mode)_
  - Array of values representing the currently selected checkboxes
  - When provided, the component operates in controlled mode
  - Cannot be used with `defaultValue`
  - Example: `["option1", "option3"]`

- **defaultValue**: `string[]` _(uncontrolled mode)_
  - Array of values representing the initially selected checkboxes in uncontrolled mode
  - When provided (and `value` is not), the component operates in uncontrolled mode
  - Cannot be used with `value`
  - Example: `["option2"]`

- **onChange**: `(args: { name: string; value: string[]; event?: React.ChangeEvent<HTMLInputElement> }) => void`
  - Callback function called when the selection changes
  - Receives an object with the group name, new value array, and the triggering event
  - Example: `({ name, value }) => console.log('Group', name, 'changed to', value)`

- **disabled**: `boolean`
  - When `true`, disables all checkboxes in the group
  - Default: `false`
  - Example: `disabled={true}`

- **hasError**: `boolean`
  - When `true`, applies error styling to all checkboxes in the group
  - Useful for form validation feedback
  - Default: `false`
  - Example: `hasError={validationErrors.length > 0}`

- **id**: `string`
  - Optional identifier for the checkbox group
  - Example: `"user-preferences"`

- **children**: `React.ReactNode`
  - The child Checkbox components to be managed by this group
  - Should contain one or more Checkbox components with unique `value` props

## Code Examples

### Basic Uncontrolled Usage
```tsx
import { CheckboxGroup, Checkbox, View } from 'reshaped';

function BasicExample() {
  return (
    <CheckboxGroup name="fruits" defaultValue={["apple"]}>
      <View gap={3}>
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
        <Checkbox value="orange">Orange</Checkbox>
      </View>
    </CheckboxGroup>
  );
}
```
This example demonstrates basic uncontrolled usage where the Apple checkbox starts selected.

### Controlled Component with State Management
```tsx
import { CheckboxGroup, Checkbox, View } from 'reshaped';
import { useState } from 'react';

function ControlledExample() {
  const [selectedFruits, setSelectedFruits] = useState<string[]>(['apple']);

  const handleChange = ({ value }: { value: string[] }) => {
    setSelectedFruits(value);
    console.log('Selected fruits:', value);
  };

  return (
    <CheckboxGroup 
      name="fruits" 
      value={selectedFruits} 
      onChange={handleChange}
    >
      <View gap={3}>
        <Checkbox value="apple">Apple</Checkbox>
        <Checkbox value="banana">Banana</Checkbox>
        <Checkbox value="orange">Orange</Checkbox>
        <Checkbox value="grape">Grape</Checkbox>
      </View>
    </CheckboxGroup>
  );
}
```
This example shows controlled usage with external state management and change handling.

### Form Integration with Validation
```tsx
import { CheckboxGroup, Checkbox, View, Text } from 'reshaped';
import { useState } from 'react';

function FormExample() {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = ({ value }: { value: string[] }) => {
    setPreferences(value);
    // Validation: at least one preference must be selected
    if (value.length === 0) {
      setErrors(['Please select at least one preference']);
    } else {
      setErrors([]);
    }
  };

  const hasError = errors.length > 0;

  return (
    <form>
      <Text>Select your preferences:</Text>
      <CheckboxGroup 
        name="preferences" 
        value={preferences} 
        onChange={handleChange}
        hasError={hasError}
      >
        <View gap={3}>
          <Checkbox value="email">Email notifications</Checkbox>
          <Checkbox value="sms">SMS notifications</Checkbox>
          <Checkbox value="newsletter">Newsletter subscription</Checkbox>
        </View>
      </CheckboxGroup>
      {hasError && (
        <Text color="critical">{errors[0]}</Text>
      )}
    </form>
  );
}
```
This example demonstrates form integration with validation and error handling.

### Disabled State
```tsx
import { CheckboxGroup, Checkbox, View } from 'reshaped';

function DisabledExample() {
  return (
    <CheckboxGroup name="options" disabled defaultValue={["option1"]}>
      <View gap={3}>
        <Checkbox value="option1">Option 1 (pre-selected)</Checkbox>
        <Checkbox value="option2">Option 2</Checkbox>
        <Checkbox value="option3">Option 3</Checkbox>
      </View>
    </CheckboxGroup>
  );
}
```
This example shows how to disable an entire checkbox group.

### Using the useCheckboxGroup Hook
```tsx
import { CheckboxGroup, useCheckboxGroup } from 'reshaped';

function CustomCheckboxItem({ value, children }: { value: string; children: React.ReactNode }) {
  const context = useCheckboxGroup();
  
  if (!context) return null;
  
  const isChecked = context.value?.includes(value) || false;
  
  return (
    <label>
      <input
        type="checkbox"
        name={context.name}
        value={value}
        checked={isChecked}
        disabled={context.disabled}
        onChange={(event) => {
          context.onChange?.({
            name: context.name,
            value,
            checked: event.target.checked,
            event
          });
        }}
      />
      {children}
    </label>
  );
}

function HookExample() {
  return (
    <CheckboxGroup name="custom" defaultValue={["item1"]}>
      <div>
        <CustomCheckboxItem value="item1">Custom Item 1</CustomCheckboxItem>
        <CustomCheckboxItem value="item2">Custom Item 2</CustomCheckboxItem>
      </div>
    </CheckboxGroup>
  );
}
```
This example demonstrates how to create custom checkbox components using the useCheckboxGroup hook.

## Related Components

- **Checkbox**: Individual checkbox component that should be used as children within CheckboxGroup. The CheckboxGroup manages the checked state of child Checkbox components.

- **View**: Layout component commonly used to provide spacing and arrangement for the checkbox items within the group, as seen in the examples.

- **RadioGroup**: Similar component for single-selection scenarios where only one option can be selected at a time, as opposed to CheckboxGroup's multi-selection capability.

- **Form**: Higher-level form component that can contain CheckboxGroup for complete form solutions with validation and submission handling.

- **FormField**: Wrapper component that can provide labels, descriptions, and error messages for the CheckboxGroup.

## Accessibility Considerations

The CheckboxGroup component maintains accessibility through:

- Proper form field naming via the required `name` prop
- Context-based state management that ensures all child checkboxes receive consistent accessibility attributes
- Support for disabled state that properly disables all child checkboxes
- Error state management that can be used with ARIA attributes for screen reader feedback
- Integration with native HTML form behavior for keyboard navigation and form submission

The component leverages React Context to provide a consistent interface between the group container and individual checkbox children, ensuring that accessibility properties are properly propagated throughout the component hierarchy.