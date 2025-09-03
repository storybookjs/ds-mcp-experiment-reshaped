# RadioGroup Component

## Overview
The RadioGroup component manages a group of radio buttons, providing both controlled and uncontrolled state management with shared context for radio button selection.

## Key Features
- Group state management
- Controlled and uncontrolled modes
- Validation and error states
- Flexible layout options
- Accessibility enhancements
- Value management utilities

## Props Interface
```typescript
type RadioGroupProps = {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name: string;
  disabled?: boolean;
  required?: boolean;
  direction?: 'row' | 'column';
  gap?: Responsive<number>;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLFieldSetElement>;
};
```

## Usage Examples

### Basic Radio Group
```typescript
import { RadioGroup, Radio, FormControl } from 'reshaped';
import { useState } from 'react';

function BasicRadioGroup() {
  const [selectedSize, setSelectedSize] = useState('medium');
  
  return (
    <FormControl
      label="Select Size"
      helperText="Choose your preferred size"
    >
      <RadioGroup
        name="size-selection"
        value={selectedSize}
        onChange={setSelectedSize}
        direction="column"
        gap={3}
      >
        <Radio value="small">Small</Radio>
        <Radio value="medium">Medium</Radio>
        <Radio value="large">Large</Radio>
        <Radio value="xl">Extra Large</Radio>
      </RadioGroup>
    </FormControl>
  );
}
```

### Horizontal Radio Group
```typescript
import { RadioGroup, Radio } from 'reshaped';

function HorizontalRadioGroup() {
  return (
    <RadioGroup
      name="payment-method"
      direction="row"
      gap={4}
      onChange={(value) => console.log('Payment method:', value)}
    >
      <Radio value="card">Credit Card</Radio>
      <Radio value="paypal">PayPal</Radio>
      <Radio value="bank">Bank Transfer</Radio>
    </RadioGroup>
  );
}
```

## Accessibility
- Fieldset and legend semantics for group labeling
- Arrow key navigation between radio buttons
- Screen reader group announcements
- Focus management within the group
- Proper ARIA attributes

## Related Components
- **Radio**: Individual radio button components
- **FormControl**: Form field wrapper with labels and validation