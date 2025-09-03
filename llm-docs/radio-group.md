# RadioGroup

## Component Name
RadioGroup

## Brief Description
A form control component that manages a group of radio buttons for single-value selection from multiple options.

## Keywords
- Radio Buttons
- Form Control
- Single Selection
- Input Group
- Form Field
- Option Selection
- User Input

## Usage Description

The RadioGroup component provides a wrapper for managing radio button interactions and state. It handles both controlled and uncontrolled modes automatically based on whether a `value` prop is provided. The component uses React Context to coordinate state and behavior between the group and individual radio buttons.

Use RadioGroup when you need users to select exactly one option from a set of mutually exclusive choices. It's ideal for settings, preferences, survey questions, or any scenario where only one selection is allowed. The component automatically manages the selection state and ensures proper form behavior.

The component integrates seamlessly with individual Radio components through a context provider pattern, automatically handling name attributes, selection state, error states, and disabled states across all child radio buttons.

## Props Documentation

### Required Props

- **name** (`string`): The name attribute for the radio group, used to group radio buttons together for form submission and accessibility.

### Optional Props

- **id** (`string`): Unique identifier for the radio group container.
- **children** (`React.ReactNode`): Radio components or other React elements to render within the group.
- **disabled** (`boolean`): When true, disables all radio buttons in the group.
- **hasError** (`boolean`): When true, applies error styling to all radio buttons in the group.
- **onChange** (`G.ChangeHandler<string>`): Callback function called when the selection changes. Receives an object with `name`, `value`, and `event` properties.

### Controlled Mode Props

- **value** (`string | null`): The currently selected value. When provided, the component operates in controlled mode.

### Uncontrolled Mode Props

- **defaultValue** (`string`): The initial selected value for uncontrolled mode. Cannot be used with `value`.

## Code Examples

### Basic Usage (Uncontrolled)

```tsx
import { RadioGroup, Radio } from 'reshaped';

function BasicRadioGroup() {
  return (
    <RadioGroup name="size" defaultValue="medium">
      <Radio value="small">Small</Radio>
      <Radio value="medium">Medium</Radio>
      <Radio value="large">Large</Radio>
    </RadioGroup>
  );
}
```

### Controlled Usage with Change Handler

```tsx
import { useState } from 'react';
import { RadioGroup, Radio } from 'reshaped';

function ControlledRadioGroup() {
  const [selectedSize, setSelectedSize] = useState('medium');

  const handleSizeChange = ({ value }) => {
    setSelectedSize(value);
    console.log('Selected size:', value);
  };

  return (
    <RadioGroup 
      name="size" 
      value={selectedSize} 
      onChange={handleSizeChange}
    >
      <Radio value="small">Small</Radio>
      <Radio value="medium">Medium</Radio>
      <Radio value="large">Large</Radio>
    </RadioGroup>
  );
}
```

### Disabled Radio Group

```tsx
import { RadioGroup, Radio } from 'reshaped';

function DisabledRadioGroup() {
  return (
    <RadioGroup name="priority" defaultValue="low" disabled>
      <Radio value="low">Low Priority</Radio>
      <Radio value="medium">Medium Priority</Radio>
      <Radio value="high">High Priority</Radio>
    </RadioGroup>
  );
}
```

### Radio Group with Error State

```tsx
import { RadioGroup, Radio } from 'reshaped';

function ErrorRadioGroup() {
  const [selection, setSelection] = useState(null);
  const hasError = !selection;

  return (
    <div>
      <RadioGroup 
        name="subscription" 
        value={selection} 
        onChange={({ value }) => setSelection(value)}
        hasError={hasError}
      >
        <Radio value="basic">Basic Plan</Radio>
        <Radio value="premium">Premium Plan</Radio>
        <Radio value="enterprise">Enterprise Plan</Radio>
      </RadioGroup>
      {hasError && <Text color="critical">Please select a subscription plan</Text>}
    </div>
  );
}
```

### Using with Custom Hook

```tsx
import { useRadioGroup, RadioGroup, Radio } from 'reshaped';

function CustomRadio({ value, children }) {
  const context = useRadioGroup();
  
  if (!context) {
    throw new Error('CustomRadio must be used within RadioGroup');
  }

  const isSelected = context.value === value;
  
  return (
    <label>
      <input
        type="radio"
        name={context.name}
        value={value}
        checked={isSelected}
        disabled={context.disabled}
        onChange={(event) => context.onChange({ event, value })}
      />
      {children}
    </label>
  );
}

function CustomRadioGroupExample() {
  return (
    <RadioGroup name="theme" defaultValue="light">
      <CustomRadio value="light">Light Theme</CustomRadio>
      <CustomRadio value="dark">Dark Theme</CustomRadio>
      <CustomRadio value="auto">Auto Theme</CustomRadio>
    </RadioGroup>
  );
}
```

## API Reference

### RadioGroup Props

```typescript
type BaseProps = {
  id?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  name: string;
  hasError?: boolean;
  onChange?: ChangeHandler<string>;
};

type ControlledProps = BaseProps & {
  value: string | null;
  defaultValue?: never;
};

type UncontrolledProps = BaseProps & {
  value?: never;
  defaultValue?: string;
};

type Props = ControlledProps | UncontrolledProps;
```

### useRadioGroup Hook

The `useRadioGroup` hook provides access to the radio group context:

```typescript
type Context = {
  onChange: RadioProps["onChange"];
  hasError?: boolean;
  disabled?: boolean;
  name: string;
  value?: string | null;
};
```

Returns `null` if used outside of a RadioGroup context.

### ChangeHandler Type

```typescript
type ChangeHandler<Value> = (args: {
  name: string;
  value: Value;
  event?: React.ChangeEvent<HTMLInputElement>;
}) => void;
```

## Accessibility Considerations

- The RadioGroup component ensures proper form semantics by coordinating the `name` attribute across all radio buttons
- Individual Radio components should include proper labels for screen reader accessibility
- The component supports keyboard navigation through radio buttons using arrow keys (handled by browser)
- Error states are communicated through the `hasError` prop, which should be paired with appropriate error messaging
- Disabled state is properly communicated to assistive technologies

## Related Components

- **Radio**: Individual radio button component that works within RadioGroup context
- **Checkbox**: For multiple selection scenarios where RadioGroup's single selection doesn't apply
- **CheckboxGroup**: Similar group component but for multiple selections
- **Select**: Alternative single-selection component for larger option lists
- **Form**: Higher-level form component that can contain RadioGroup
- **FormField**: Wrapper component that can provide labels and validation for RadioGroup

## Implementation Notes

- The component automatically switches between controlled and uncontrolled modes based on the presence of the `value` prop
- Uses React Context to share state and configuration between the group and individual radio components  
- The controlled version delegates to RadioGroupControlled, while uncontrolled uses RadioGroupUncontrolled with internal state
- All radio buttons in the group share the same `name`, `disabled`, `hasError`, and change handler through context
- The component follows React's controlled/uncontrolled component patterns consistently