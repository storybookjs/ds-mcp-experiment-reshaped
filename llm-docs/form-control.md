# FormControl

**Component Name**: FormControl

**Brief Description**: A wrapper component that provides accessible form field structure with label, helper text, and error message support.

**Keywords**: Form Control, Label, Helper Text, Error Message, Accessibility, Field Wrapper, Form Validation, ARIA

## Usage Description

The FormControl component serves as a comprehensive wrapper for form inputs, providing essential accessibility features and structural organization for form fields. It manages the relationship between labels, input controls, helper text, and error messages through proper ARIA attributes and semantic HTML elements.

Use FormControl when building forms that require proper labeling, descriptions, or error handling. It automatically handles accessibility requirements like `aria-describedby`, `aria-labelledby`, and proper semantic structure. The component supports both individual form controls and fieldset groups for related inputs like radio button or checkbox groups.

FormControl is particularly valuable in complex forms where consistent styling, validation feedback, and accessibility compliance are critical. It works seamlessly with other form components from the reshaped design system, ensuring a cohesive user experience across your application.

## Props Documentation

### FormControl Props

- **children** (`React.ReactNode`) - Required
  - The content to be wrapped by the form control, typically including FormControl.Label, input components, FormControl.Helper, and FormControl.Error
  - Example: Input fields, select boxes, or other form controls with their associated labels and help text

- **size** (`"medium" | "large"`) - Optional
  - Controls the overall sizing of the form control and its child components
  - Default: `"medium"`
  - Affects label typography and spacing throughout the form control

- **hasError** (`boolean`) - Optional
  - Indicates whether the form control is in an error state
  - Default: `false`
  - When true, enables the display of FormControl.Error components and applies error styling

- **required** (`boolean`) - Optional
  - Marks the form control as required
  - Default: `false`
  - Displays a red asterisk (\*) next to the label when true

- **disabled** (`boolean`) - Optional
  - Disables the entire form control and all its child components
  - Default: `false`
  - Applies disabled styling and sets appropriate ARIA attributes

- **group** (`boolean`) - Optional
  - Renders the form control as a fieldset instead of a div
  - Default: `false`
  - Use for grouping related form controls like radio buttons or checkboxes

- **id** (`string`) - Optional
  - Custom ID for the form control
  - If not provided, a unique ID will be generated automatically
  - Used for establishing relationships between labels, inputs, and descriptions

### FormControl.Label Props

- **children** (`React.ReactNode`) - Required
  - The text or content for the label
  - Example: "Email Address", "Password", "Select your preferences"

### FormControl.Helper Props

- **children** (`React.ReactNode`) - Required
  - Helper text to provide additional context or instructions
  - Example: "We'll never share your email", "Password must be at least 8 characters"

### FormControl.Error Props

- **children** (`React.ReactNode`) - Required
  - Error message to display when hasError is true
  - Only renders when the parent FormControl has hasError set to true
  - Example: "This field is required", "Please enter a valid email address"

## Code Examples

### Basic Form Control with Label and Helper Text

```tsx
import { FormControl, TextField } from "reshaped";

function BasicExample() {
  return (
    <FormControl>
      <FormControl.Label>Email Address</FormControl.Label>
      <TextField name="email" type="email" placeholder="Enter your email" />
      <FormControl.Helper>
        We'll never share your email with anyone
      </FormControl.Helper>
    </FormControl>
  );
}
```

This example demonstrates the most common usage pattern with a label, input field, and helpful guidance text.

### Form Control with Error State

```tsx
import { FormControl, TextField } from "reshaped";

function ErrorExample() {
  const [hasError, setHasError] = useState(true);

  return (
    <FormControl hasError={hasError}>
      <FormControl.Label>Password</FormControl.Label>
      <TextField
        name="password"
        type="password"
        placeholder="Enter your password"
      />
      <FormControl.Helper>
        Password must be at least 8 characters
      </FormControl.Helper>
      <FormControl.Error>Password is too short</FormControl.Error>
    </FormControl>
  );
}
```

Shows how to handle validation errors with both helper text and error messages. The error message only displays when hasError is true.

### Required Field with Large Size

```tsx
import { FormControl, TextField } from "reshaped";

function RequiredLargeExample() {
  return (
    <FormControl required size="large">
      <FormControl.Label>Full Name</FormControl.Label>
      <TextField
        name="fullName"
        size="large"
        placeholder="Enter your full name"
      />
      <FormControl.Helper>Enter your first and last name</FormControl.Helper>
    </FormControl>
  );
}
```

Demonstrates a required field with large sizing. Note how the TextField size should match the FormControl size for visual consistency.

### Disabled Form Control

```tsx
import { FormControl, TextField } from "reshaped";

function DisabledExample() {
  return (
    <FormControl disabled>
      <FormControl.Label>Username</FormControl.Label>
      <TextField name="username" placeholder="Cannot be changed" />
      <FormControl.Helper>
        Username cannot be modified after registration
      </FormControl.Helper>
    </FormControl>
  );
}
```

Shows how disabled state affects the entire form control, including labels, inputs, and helper text.

### Fieldset Group for Related Controls

```tsx
import { FormControl, RadioGroup, Radio } from "reshaped";

function FieldsetExample() {
  return (
    <FormControl group>
      <FormControl.Label>Preferred Contact Method</FormControl.Label>
      <RadioGroup name="contactMethod">
        <Radio value="email">Email</Radio>
        <Radio value="phone">Phone</Radio>
        <Radio value="sms">SMS</Radio>
      </RadioGroup>
      <FormControl.Helper>Choose how we should contact you</FormControl.Helper>
    </FormControl>
  );
}
```

Demonstrates using the group prop to create a fieldset for related form controls like radio buttons.

### Horizontal Layout Composition

```tsx
import { FormControl, TextField, View } from "reshaped";

function HorizontalExample() {
  return (
    <FormControl>
      <View direction="row" gap={10} align="center">
        <View width="100px">
          <FormControl.Label>Search</FormControl.Label>
        </View>
        <View.Item grow>
          <TextField name="search" placeholder="Enter search terms" />
        </View.Item>
      </View>
    </FormControl>
  );
}
```

Shows how to create horizontal layouts with labels and inputs using the View component for custom arrangements.

## Accessibility Considerations

FormControl provides comprehensive accessibility support through several mechanisms:

- **Semantic HTML**: Uses appropriate semantic elements (`div` for individual controls, `fieldset`/`legend` for groups)
- **ARIA Relationships**: Automatically manages `aria-describedby` to connect inputs with helper text and error messages
- **Required Field Indication**: Visual and semantic indication of required fields with asterisk and proper ARIA attributes
- **Error State Management**: Proper role="alert" for error messages and color-coded visual feedback
- **Disabled State Handling**: Comprehensive disabled state management with `aria-disabled` attributes
- **Screen Reader Support**: Helper text and error messages are properly announced by screen readers
- **Focus Management**: Maintains logical tab order and focus behavior

The component automatically generates unique IDs for all elements and establishes the correct relationships between labels, controls, and descriptions without requiring manual ARIA attribute management.

## Related Components

- **TextField**: Primary text input component designed to work seamlessly with FormControl
- **TextArea**: Multi-line text input that integrates with FormControl's labeling and validation
- **Select**: Dropdown selection component that follows FormControl patterns
- **RadioGroup/Radio**: Radio button components that benefit from FormControl's fieldset grouping
- **CheckboxGroup/Checkbox**: Checkbox components that use FormControl for proper grouping
- **NumberField**: Numeric input component with FormControl integration
- **PinField**: PIN/code input component that works within FormControl structure
- **View**: Layout component used for custom FormControl arrangements and compositions
- **Text**: Typography component used internally for labels and helper text rendering

The `useFormControl` hook is also available for creating custom form components that need to integrate with FormControl's context and accessibility features.
