# NumberField

**Brief Description**: A numeric input field with increment/decrement controls for precise number entry.

**Keywords**: ["Number Input", "Numeric Field", "Stepper", "Counter", "Form Control", "Input Field", "Increment", "Decrement"]

## Usage Description

The NumberField component provides a specialized input field designed specifically for numeric values. It combines a text input with increment and decrement controls, allowing users to enter numbers either by typing directly or by using the provided controls. The component automatically handles number validation, formatting, and precision calculations.

This component is ideal for scenarios where users need to input numeric values with precision, such as quantity selectors, price inputs, age fields, or any form field requiring numeric data. It provides excellent user experience on both desktop and mobile devices, with different control layouts optimized for mouse and touch interactions.

The NumberField supports both controlled and uncontrolled usage patterns, integrates seamlessly with form validation systems, and provides comprehensive accessibility features including ARIA labels, keyboard navigation, and screen reader support.

## Props Documentation

### Core Props

**increaseAriaLabel** (required)
- Type: `string`
- Description: Accessible label for the increment button, read by screen readers
- Example: `"Increase value"`, `"Add one"`

**decreaseAriaLabel** (required)
- Type: `string`
- Description: Accessible label for the decrement button, read by screen readers
- Example: `"Decrease value"`, `"Subtract one"`

**name** (required)
- Type: `string`
- Description: Form field name for form submission and identification
- Example: `"quantity"`, `"price"`

### Value Management (Controlled)

**value** (controlled)
- Type: `number | null`
- Description: Current numeric value of the field. Use for controlled components
- Example: `42`, `3.14`, `null`

**onChange** (controlled)
- Type: `(args: { name: string; value: number }) => void`
- Description: Callback fired when the value changes
- Example: `(args) => setValue(args.value)`

### Value Management (Uncontrolled)

**defaultValue** (uncontrolled)
- Type: `number`
- Description: Initial value for uncontrolled components
- Example: `0`, `100`

### Number Constraints

**min**
- Type: `number`
- Default: `undefined`
- Description: Minimum allowed value. Controls will be disabled when reached
- Example: `0`, `-100`

**max**
- Type: `number`
- Default: `undefined`
- Description: Maximum allowed value. Controls will be disabled when reached
- Example: `100`, `999`

**step**
- Type: `number`
- Default: `1`
- Description: Increment/decrement step size. Supports decimal values
- Example: `1`, `0.1`, `5`

### Inherited TextField Props

**size**
- Type: `"small" | "medium" | "large" | "xlarge"` (Responsive)
- Default: `"medium"`
- Description: Visual size of the input field and controls
- Example: `"large"`, `{ s: "small", m: "medium" }`

**disabled**
- Type: `boolean`
- Default: `false`
- Description: Disables the entire component
- Example: `true`

**hasError**
- Type: `boolean`
- Default: `false`
- Description: Indicates validation error state
- Example: `true`

**placeholder**
- Type: `string`
- Description: Placeholder text shown when field is empty
- Example: `"Enter quantity"`

**variant**
- Type: `"outline" | "faded" | "headless"`
- Default: `"outline"`
- Description: Visual style variant of the input field
- Example: `"faded"`

**focused**
- Type: `boolean`
- Description: Controls focused state programmatically
- Example: `true`

**icon**
- Type: `IconProps["svg"]`
- Description: Icon to display at the start of the field
- Example: `DollarIcon`

**endIcon**
- Type: `IconProps["svg"]`
- Description: Icon to display before the controls (limited space)
- Example: `PercentIcon`

**startSlot**
- Type: `React.ReactNode`
- Description: Custom content at the start of the field
- Example: `<Text>$</Text>`

**prefix**
- Type: `React.ReactNode`
- Description: Prefix content inside the input
- Example: `"$"`

**suffix**
- Type: `React.ReactNode`
- Description: Suffix content inside the input
- Example: `"%"`

### Event Handlers

**onFocus**
- Type: `(e: React.FocusEvent<HTMLInputElement>) => void`
- Description: Callback fired when field gains focus
- Example: `(e) => console.log('focused')`

**onBlur**
- Type: `(e: React.FocusEvent<HTMLInputElement>) => void`
- Description: Callback fired when field loses focus
- Example: `(e) => validateValue()`

### Styling Props

**className**
- Type: `string | string[]`
- Description: Additional CSS classes for custom styling
- Example: `"custom-number-field"`, `["field", "highlighted"]`

**attributes**
- Type: `React.HTMLAttributes<HTMLDivElement>`
- Description: Additional HTML attributes for the root container
- Example: `{ "data-testid": "number-field" }`

**inputAttributes**
- Type: `React.HTMLAttributes<HTMLInputElement>`
- Description: Additional HTML attributes for the input element
- Example: `{ "data-cy": "number-input" }`

## Code Examples

### Basic Usage
```tsx
import { NumberField } from 'reshaped';

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <NumberField
      name="quantity"
      value={quantity}
      onChange={({ value }) => setQuantity(value)}
      increaseAriaLabel="Increase quantity"
      decreaseAriaLabel="Decrease quantity"
      min={1}
      max={99}
    />
  );
}
```
Basic controlled NumberField with min/max constraints for a quantity selector.

### Price Input with Decimal Step
```tsx
import { NumberField } from 'reshaped';

function PriceInput() {
  const [price, setPrice] = useState(0);
  
  return (
    <NumberField
      name="price"
      value={price}
      onChange={({ value }) => setPrice(value)}
      increaseAriaLabel="Increase price"
      decreaseAriaLabel="Decrease price"
      step={0.01}
      min={0}
      prefix="$"
      placeholder="0.00"
      size="large"
    />
  );
}
```
Price input field with decimal precision and currency prefix.

### Uncontrolled with Default Value
```tsx
import { NumberField } from 'reshaped';

function AgeField() {
  return (
    <NumberField
      name="age"
      defaultValue={18}
      onChange={({ value }) => console.log('Age:', value)}
      increaseAriaLabel="Increase age"
      decreaseAriaLabel="Decrease age"
      min={0}
      max={120}
      variant="faded"
    />
  );
}
```
Uncontrolled NumberField with default value and faded variant styling.

### Form Integration with Validation
```tsx
import { NumberField, FormControl, Text } from 'reshaped';

function WeightInput({ hasError, errorMessage }) {
  const [weight, setWeight] = useState(null);
  
  return (
    <FormControl hasError={hasError}>
      <FormControl.Label>
        <Text variant="body-2">Weight (kg)</Text>
      </FormControl.Label>
      <NumberField
        name="weight"
        value={weight}
        onChange={({ value }) => setWeight(value)}
        increaseAriaLabel="Increase weight"
        decreaseAriaLabel="Decrease weight"
        step={0.1}
        min={0}
        max={500}
        placeholder="Enter weight"
      />
      {hasError && (
        <FormControl.Hint>
          <Text variant="caption-1" color="critical">
            {errorMessage}
          </Text>
        </FormControl.Hint>
      )}
    </FormControl>
  );
}
```
NumberField integrated with FormControl for proper labeling and error handling.

### Custom Styling and Large Step
```tsx
import { NumberField } from 'reshaped';

function BulkOrderQuantity() {
  const [quantity, setQuantity] = useState(10);
  
  return (
    <NumberField
      name="bulkQuantity"
      value={quantity}
      onChange={({ value }) => setQuantity(value)}
      increaseAriaLabel="Increase by 10"
      decreaseAriaLabel="Decrease by 10"
      step={10}
      min={10}
      max={1000}
      size="xlarge"
      suffix="units"
      className="bulk-order-field"
      attributes={{ 'data-category': 'bulk-orders' }}
    />
  );
}
```
Large-stepped NumberField with custom step size for bulk ordering scenarios.

## Related Components

**TextField** - The base component that NumberField extends, providing core input functionality and styling options.

**FormControl** - Provides structured form field layout with labels, hints, and error states. Often used to wrap NumberField for proper form semantics.

**Slider** - Alternative numeric input component for selecting values within a range using a slider interface.

**Select** - Can be used instead of NumberField when numeric choices are limited to specific predefined values.

**Autocomplete** - May be combined with NumberField in complex forms where numeric values need additional context or suggestions.

**Button** - The NumberField controls are built using the Actionable component, which is related to Button for interactive elements.