# PinField

## Brief Description
A specialized input component for entering PIN codes, verification codes, or other sequential character inputs with individual character slots.

## Keywords
PIN Input, Verification Code, OTP, Sequential Input, Character Fields, Authentication, Form Control, Input Validation

## Usage Description

The PinField component is designed for scenarios where users need to enter a sequence of characters into individual, visually distinct slots. This pattern is commonly used for PIN codes, one-time passwords (OTP), verification codes, and multi-factor authentication workflows.

The component provides an intuitive user experience by automatically managing focus transitions between character slots, supporting keyboard navigation, and validating input patterns. It handles both controlled and uncontrolled usage patterns, making it flexible for different form management strategies.

Use PinField when you need users to enter a fixed-length sequence of characters where each character is visually represented in its own slot, providing clear feedback about input progress and remaining slots.

## Props Documentation

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Form field name for form submission and identification |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled value - when provided, component operates in controlled mode |
| `defaultValue` | `string` | `""` | Initial value for uncontrolled mode (ignored when `value` is provided) |
| `valueLength` | `number` | `4` | Number of character slots to display |
| `pattern` | `"alphabetic" \| "numeric" \| "alphanumeric"` | `"numeric"` | Input validation pattern constraint |
| `size` | `Responsive<"small" \| "medium" \| "large" \| "xlarge">` | `"medium"` | Visual size of character slots |
| `variant` | `"outline" \| "faded"` | `"outline"` | Visual style variant |
| `onChange` | `ChangeHandler<string>` | `undefined` | Callback fired when value changes |
| `className` | `ClassName` | `undefined` | Additional CSS class names |
| `attributes` | `Attributes<"div">` | `undefined` | Additional HTML attributes for container |
| `inputAttributes` | `Attributes<"input">` | `undefined` | Additional HTML attributes for hidden input |

### Size Specifications

The `size` prop controls the dimensions of each character slot:

- `small`: 28px (7 * 4px base unit)
- `medium`: 36px (9 * 4px base unit) 
- `large`: 48px (12 * 4px base unit)
- `xlarge`: 56px (14 * 4px base unit)

### Pattern Validation

- `numeric`: Accepts only digits (0-9)
- `alphabetic`: Accepts only letters (a-z, A-Z)
- `alphanumeric`: Accepts both letters and numbers

### Responsive Support

The `size` prop supports responsive values using the viewport-based system:

```typescript
size={{
  s: "small",    // Mobile
  m: "medium",   // Tablet
  l: "large",    // Desktop
  xl: "xlarge"   // Large desktop
}}
```

## Code Examples

### Basic Usage (Uncontrolled)

```tsx
import { PinField } from "reshaped";

function BasicPinField() {
  const handleChange = ({ name, value }) => {
    console.log(`${name}: ${value}`);
  };

  return (
    <PinField 
      name="pin"
      defaultValue=""
      onChange={handleChange}
    />
  );
}
```

This example shows the simplest usage with uncontrolled state management, suitable for basic forms where you don't need to manage the PIN value in parent component state.

### Controlled Usage with Validation

```tsx
import { PinField } from "reshaped";
import { useState } from "react";

function ControlledPinField() {
  const [pin, setPin] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = ({ value }) => {
    setPin(value);
    setIsValid(value.length === 6);
  };

  return (
    <div>
      <PinField 
        name="verification-code"
        value={pin}
        valueLength={6}
        pattern="numeric"
        onChange={handleChange}
      />
      {isValid && <p>PIN is complete!</p>}
    </div>
  );
}
```

This example demonstrates controlled usage with validation logic, perfect for multi-step forms where you need to track completion status.

### Customized Appearance

```tsx
import { PinField } from "reshaped";

function CustomPinField() {
  return (
    <PinField 
      name="custom-pin"
      valueLength={8}
      pattern="alphanumeric"
      size="large"
      variant="faded"
      className="custom-pin-field"
      inputAttributes={{
        autoComplete: "one-time-code",
        "data-testid": "pin-input"
      }}
    />
  );
}
```

This example shows customization options including longer length, alphanumeric pattern, larger size, faded variant, and additional attributes.

### Responsive Design

```tsx
import { PinField } from "reshaped";

function ResponsivePinField() {
  return (
    <PinField 
      name="responsive-pin"
      size={{
        s: "small",
        m: "medium", 
        l: "large",
        xl: "xlarge"
      }}
      pattern="numeric"
      valueLength={4}
    />
  );
}
```

This example demonstrates responsive sizing that adapts to different screen sizes automatically.

### Form Integration

```tsx
import { PinField, FormControl } from "reshaped";

function FormIntegratedPinField() {
  const [formData, setFormData] = useState({ pin: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.pin.length === 6) {
      console.log("Submitting PIN:", formData.pin);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl 
        label="Enter Verification Code"
        caption="Check your phone for the 6-digit code"
      >
        <PinField 
          name="pin"
          value={formData.pin}
          valueLength={6}
          pattern="numeric"
          onChange={({ value }) => setFormData(prev => ({ ...prev, pin: value }))}
        />
      </FormControl>
      <button type="submit" disabled={formData.pin.length !== 6}>
        Verify
      </button>
    </form>
  );
}
```

This example shows integration with FormControl for proper labeling and form structure, essential for accessibility and user experience.

## Accessibility Considerations

The PinField component implements several accessibility features:

- **Screen Reader Support**: Uses a hidden input with proper `autoComplete="one-time-code"` for password manager integration
- **Keyboard Navigation**: Full arrow key support for moving between character slots
- **Focus Management**: Clear visual focus indicators and logical focus flow
- **Input Mode**: Sets appropriate `inputMode="numeric"` for numeric patterns to show optimal mobile keyboards
- **Pattern Validation**: Uses HTML5 pattern attribute for native validation support
- **Form Integration**: Works seamlessly with FormControl for proper labeling and error states

### Best Practices

1. Always use with proper labeling through FormControl or aria-label
2. Provide clear instructions about expected input format
3. Consider error states and validation feedback
4. Test with screen readers and keyboard-only navigation
5. Ensure sufficient color contrast for focus indicators

## Related Components

- **FormControl**: Provides labeling, error states, and form structure for PinField
- **TextField**: Alternative for single-field text input scenarios
- **View**: Used internally for layout and styling of character slots
- **Text**: Used internally for displaying entered characters

The PinField component is typically used within FormControl containers and may be combined with other form components in authentication or verification workflows.