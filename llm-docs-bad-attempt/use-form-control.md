# useFormControl Hook

## Overview
The useFormControl hook provides access to form control context from child components, enabling form elements to inherit validation states, labels, and accessibility properties from their parent FormControl wrapper.

## Key Features
- Access to parent FormControl context
- Validation state inheritance
- Accessibility property inheritance
- Error state management
- Label and description association

## Hook Interface
```typescript
type FormControlContextValue = {
  id: string;
  labelId: string;
  helperTextId: string;
  errorTextId: string;
  required: boolean;
  disabled: boolean;
  hasError: boolean;
  size: 'small' | 'medium' | 'large';
};

function useFormControl(): FormControlContextValue | null;
```

## Usage Examples

### Basic Form Input Integration
```typescript
import { useFormControl } from 'reshaped';
import { forwardRef } from 'react';

const CustomInput = forwardRef<HTMLInputElement, {
  placeholder?: string;
  type?: string;
}>(({ placeholder, type = 'text' }, ref) => {
  const formControl = useFormControl();
  
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      id={formControl?.id}
      aria-labelledby={formControl?.labelId}
      aria-describedby={[
        formControl?.helperTextId,
        formControl?.hasError ? formControl?.errorTextId : undefined
      ].filter(Boolean).join(' ') || undefined}
      aria-required={formControl?.required}
      aria-invalid={formControl?.hasError}
      disabled={formControl?.disabled}
      style={{
        borderColor: formControl?.hasError ? 'var(--rs-color-border-critical)' : undefined,
        opacity: formControl?.disabled ? 0.6 : undefined
      }}
    />
  );
});
```

### Custom Form Component with Validation
```typescript
import { useFormControl, FormControl, Button, View } from 'reshaped';
import { useState, useId } from 'react';

function CustomTextArea({ 
  value, 
  onChange, 
  placeholder,
  rows = 4 
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  const formControl = useFormControl();
  const fallbackId = useId();
  
  // Use FormControl context if available, otherwise generate own ID
  const inputId = formControl?.id || fallbackId;
  
  return (
    <textarea
      id={inputId}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      aria-labelledby={formControl?.labelId}
      aria-describedby={[
        formControl?.helperTextId,
        formControl?.hasError ? formControl?.errorTextId : undefined
      ].filter(Boolean).join(' ') || undefined}
      aria-required={formControl?.required}
      aria-invalid={formControl?.hasError}
      disabled={formControl?.disabled}
      style={{
        width: '100%',
        padding: '8px 12px',
        border: `1px solid ${
          formControl?.hasError 
            ? 'var(--rs-color-border-critical)' 
            : 'var(--rs-color-border-neutral-faded)'
        }`,
        borderRadius: '6px',
        fontSize: formControl?.size === 'small' ? '14px' : 
                   formControl?.size === 'large' ? '18px' : '16px',
        opacity: formControl?.disabled ? 0.6 : 1,
        resize: 'vertical'
      }}
    />
  );
}

function TextAreaExample() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const validateMessage = (value: string) => {
    if (value.length < 10) {
      setError('Message must be at least 10 characters long');
    } else if (value.length > 500) {
      setError('Message must not exceed 500 characters');
    } else {
      setError('');
    }
  };
  
  return (
    <View gap={4}>
      <FormControl
        label=\"Your Message\"
        helperText=\"Tell us what you think (10-500 characters)\"
        errorText={error}
        required
      >
        <CustomTextArea
          value={message}
          onChange={(value) => {
            setMessage(value);
            validateMessage(value);
          }}
          placeholder=\"Type your message here...\"
          rows={6}
        />
      </FormControl>
      
      <Button disabled={!!error || message.length < 10}>
        Submit Message
      </Button>
    </View>
  );
}
```

### Custom Checkbox with Form Control
```typescript
import { useFormControl, FormControl, Text, View, Icon } from 'reshaped';
import { useState } from 'react';
import { CheckIcon } from './icons';

function CustomCheckbox({
  checked,
  onChange,
  children
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}) {
  const formControl = useFormControl();
  
  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px',
        cursor: formControl?.disabled ? 'not-allowed' : 'pointer',
        opacity: formControl?.disabled ? 0.6 : 1
      }}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          border: `2px solid ${
            formControl?.hasError 
              ? 'var(--rs-color-border-critical)' 
              : checked 
              ? 'var(--rs-color-border-primary)' 
              : 'var(--rs-color-border-neutral-faded)'
          }`,
          borderRadius: '4px',
          backgroundColor: checked ? 'var(--rs-color-background-primary)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        {checked && (
          <Icon 
            svg={CheckIcon} 
            size={3} 
            color=\"neutral-contrast\"
          />
        )}
      </div>
      
      <input
        type=\"checkbox\"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={formControl?.disabled}
        aria-required={formControl?.required}
        aria-invalid={formControl?.hasError}
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none'
        }}
      />
      
      <div style={{ flex: 1 }}>
        {children}
      </div>
    </label>
  );
}

function CustomCheckboxExample() {
  const [agreement, setAgreement] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  
  return (
    <View gap={4}>
      <FormControl
        label=\"Agreement\"
        errorText={!agreement ? 'You must agree to the terms' : ''}
        required
      >
        <CustomCheckbox
          checked={agreement}
          onChange={setAgreement}
        >
          <Text variant=\"body-3\">
            I agree to the{' '}
            <Text as=\"span\" color=\"primary\" style={{ textDecoration: 'underline' }}>
              terms and conditions
            </Text>
          </Text>
        </CustomCheckbox>
      </FormControl>
      
      <FormControl
        label=\"Newsletter\"
        helperText=\"Stay updated with our latest news\"
      >
        <CustomCheckbox
          checked={newsletter}
          onChange={setNewsletter}
        >
          <Text variant=\"body-3\">
            Subscribe to our newsletter
          </Text>
        </CustomCheckbox>
      </FormControl>
    </View>
  );
}
```

### Conditional Form Control Usage
```typescript
import { useFormControl, Text } from 'reshaped';

function ConditionalFormInput({ 
  standalone = false,
  ...props 
}: {
  standalone?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  const formControl = useFormControl();
  
  // Only use form control context if not in standalone mode
  const contextToUse = standalone ? null : formControl;
  
  return (
    <div>
      <input
        {...props}
        id={contextToUse?.id}
        aria-labelledby={contextToUse?.labelId}
        aria-describedby={contextToUse?.helperTextId}
        aria-required={contextToUse?.required}
        aria-invalid={contextToUse?.hasError}
        disabled={contextToUse?.disabled}
        style={{
          padding: '8px 12px',
          border: `1px solid ${
            contextToUse?.hasError 
              ? 'var(--rs-color-border-critical)' 
              : 'var(--rs-color-border-neutral-faded)'
          }`,
          borderRadius: '6px',
          width: '100%'
        }}
      />
      
      {contextToUse?.hasError && (
        <Text variant=\"body-3\" color=\"critical\" style={{ marginTop: '4px' }}>
          Please check this field
        </Text>
      )}
    </div>
  );
}
```

## Context Properties

### Identification
- **id**: Unique identifier for the form input
- **labelId**: ID of the associated label element  
- **helperTextId**: ID of the helper text element
- **errorTextId**: ID of the error message element

### State Properties
- **required**: Whether the field is required
- **disabled**: Whether the field is disabled
- **hasError**: Whether the field has validation errors
- **size**: Size variant of the form control

## Accessibility Integration
- Automatic ARIA attribute assignment
- Label association with form inputs
- Error state communication
- Required field indication
- Description text association

## Best Practices
- Always check if context is available before using
- Provide fallback behavior for standalone usage
- Respect disabled state in custom components
- Use error state for visual styling
- Maintain consistent size styling

## Related Components
- **FormControl**: Provides the context consumed by this hook
- **TextField**: Built-in component that uses this hook
- **TextArea**: Another component using form control context"