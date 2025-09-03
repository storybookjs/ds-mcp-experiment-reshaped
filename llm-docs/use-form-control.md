# useFormControl

## Component Name
useFormControl

## Brief Description
A React hook that provides form control context data including attributes, required status, error state, and disabled state for form input components.

## Keywords
Form Control, Context Hook, Form State, Input Attributes, Error Handling, Accessibility, Form Validation, React Hook

## Usage Description

The `useFormControl` hook is designed to be used within form input components that are nested inside a `FormControl` component. It provides a standardized way to access form control state and attributes that ensure proper accessibility and form behavior.

This hook is essential for building consistent form experiences across the Reshaped design system. It automatically handles ARIA attributes, form validation states, and accessibility requirements by pulling context data from the nearest `FormControl` provider. Form input components like `TextField`, `Checkbox`, `Switch`, `Select`, and others use this hook to inherit shared form control properties.

The hook simplifies form component development by centralizing form state management and ensuring that all form inputs within a `FormControl` share consistent behavior, styling, and accessibility attributes. It's particularly useful when building custom form components that need to integrate seamlessly with the existing form control system.

## Props Documentation

This hook takes no parameters.

### Return Value

The hook returns an object with the following properties:

- **attributes**: `React.HTMLAttributes<HTMLElement> & { id: string }`
  - Required: Always present
  - Description: HTML attributes object that should be spread onto form input elements, includes the generated ID and ARIA attributes like `aria-describedby` for accessibility
  - Contains all standard HTML attributes plus a guaranteed `id` field

- **required**: `boolean | undefined`
  - Required: No (can be undefined)
  - Description: Indicates whether the form field is required for form submission
  - Used to display required indicators and handle validation

- **hasError**: `boolean | undefined`
  - Required: No (can be undefined)
  - Description: Indicates whether the form field has validation errors
  - Used to apply error styling and show error messages

- **disabled**: `boolean | undefined`
  - Required: No (can be undefined)
  - Description: Indicates whether the form field should be disabled
  - Used to prevent user interaction and apply disabled styling

## Code Examples

### Basic Usage in a Custom Input Component

```tsx
import React from 'react';
import { useFormControl } from 'reshaped';

const CustomInput = ({ name, value, onChange, ...props }) => {
  const formControl = useFormControl();
  
  return (
    <input
      {...formControl?.attributes}
      name={name}
      value={value}
      onChange={onChange}
      disabled={formControl?.disabled}
      required={formControl?.required}
      className={formControl?.hasError ? 'error' : ''}
      {...props}
    />
  );
};
```

### Using with FormControl Provider

```tsx
import React from 'react';
import { FormControl } from 'reshaped';

const ContactForm = () => {
  return (
    <FormControl required hasError={false} disabled={false}>
      <FormControl.Label>Email Address</FormControl.Label>
      <CustomInput name="email" type="email" />
      <FormControl.Helper>Enter a valid email address</FormControl.Helper>
    </FormControl>
  );
};
```

### Conditional Logic Based on Form State

```tsx
import React from 'react';
import { useFormControl } from 'reshaped';

const SmartInput = ({ name, value, onChange }) => {
  const formControl = useFormControl();
  
  // Apply different styling based on form control state
  const inputClassName = React.useMemo(() => {
    const classes = ['input'];
    
    if (formControl?.hasError) classes.push('input--error');
    if (formControl?.disabled) classes.push('input--disabled');
    if (formControl?.required) classes.push('input--required');
    
    return classes.join(' ');
  }, [formControl]);
  
  return (
    <input
      {...formControl?.attributes}
      name={name}
      value={value}
      onChange={onChange}
      disabled={formControl?.disabled}
      className={inputClassName}
      aria-invalid={formControl?.hasError}
    />
  );
};
```

### Integration with Existing Form Components

```tsx
import React from 'react';
import { useFormControl, TextField } from 'reshaped';

const EnhancedTextField = (props) => {
  const formControl = useFormControl();
  
  // Override props with form control values
  return (
    <TextField
      {...props}
      disabled={formControl?.disabled || props.disabled}
      hasError={formControl?.hasError || props.hasError}
      inputAttributes={{
        ...props.inputAttributes,
        ...formControl?.attributes,
      }}
    />
  );
};
```

### Advanced Usage with Multiple Form Controls

```tsx
import React from 'react';
import { FormControl } from 'reshaped';

const AddressForm = () => {
  const [errors, setErrors] = React.useState({});
  
  return (
    <form>
      <FormControl required hasError={!!errors.street}>
        <FormControl.Label>Street Address</FormControl.Label>
        <CustomInput name="street" />
        {errors.street && (
          <FormControl.Error>{errors.street}</FormControl.Error>
        )}
      </FormControl>
      
      <FormControl required hasError={!!errors.city}>
        <FormControl.Label>City</FormControl.Label>
        <CustomInput name="city" />
        {errors.city && (
          <FormControl.Error>{errors.city}</FormControl.Error>
        )}
      </FormControl>
    </form>
  );
};
```

## Related Components

- **FormControl**: The provider component that supplies context data to this hook
- **FormControl.Label**: Label component that uses form control context for proper association
- **FormControl.Helper**: Helper text component that registers with form control for ARIA attributes
- **FormControl.Error**: Error message component that integrates with form control error state
- **TextField**: Text input component that uses this hook internally
- **TextArea**: Textarea component that uses this hook internally
- **Switch**: Toggle switch component that uses this hook internally
- **Checkbox**: Checkbox input component that uses this hook internally
- **Radio**: Radio button component that uses this hook internally
- **Select**: Select dropdown component that uses this hook internally
- **NumberField**: Number input component that uses this hook internally
- **PinField**: PIN entry component that uses this hook internally
- **Slider**: Range slider component that uses this hook internally

The hook works in conjunction with the FormControl provider to create a cohesive form system where all input components share consistent behavior, accessibility attributes, and visual states.