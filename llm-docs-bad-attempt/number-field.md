# NumberField Component

## Overview
The NumberField component is a specialized numeric input field with built-in increment/decrement controls and validation for handling numeric data entry with precision and constraints.

## Key Features
- Numeric input validation
- Increment/decrement buttons
- Min/max value constraints
- Step value control
- Decimal precision handling
- Keyboard navigation
- Accessibility support

## Props Interface
```typescript
type NumberFieldProps = {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  precision?: number;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
};
```

## Usage Examples

### Basic Number Field
```typescript
import { NumberField } from 'reshaped';
import { useState } from 'react';

function BasicNumberField() {
  const [value, setValue] = useState<number | null>(0);
  
  return (
    <NumberField
      value={value}
      onChange={setValue}
      placeholder="Enter a number"
    />
  );
}
```

### Constrained Number Field
```typescript
import { NumberField, FormControl } from 'reshaped';
import { useState } from 'react';

function ConstrainedNumberField() {
  const [quantity, setQuantity] = useState<number | null>(1);
  
  return (
    <FormControl
      label="Quantity"
      helperText="Select between 1 and 100"
    >
      <NumberField
        value={quantity}
        onChange={setQuantity}
        min={1}
        max={100}
        step={1}
      />
    </FormControl>
  );
}
```

### Decimal Number Field
```typescript
import { NumberField, FormControl } from 'reshaped';
import { useState } from 'react';

function PriceField() {
  const [price, setPrice] = useState<number | null>(null);
  
  return (
    <FormControl
      label="Price"
      helperText="Enter price in dollars"
    >
      <NumberField
        value={price}
        onChange={setPrice}
        min={0}
        step={0.01}
        precision={2}
        placeholder="0.00"
      />
    </FormControl>
  );
}
```

## Validation
- Automatic numeric validation
- Min/max constraint enforcement
- Step value validation
- Decimal precision control
- Custom validation callbacks

## Keyboard Navigation
- Arrow up/down to increment/decrement
- Page up/down for larger steps
- Home/End for min/max values
- Standard number input behavior

## Accessibility
- Proper input labeling and associations
- Screen reader value announcements
- Keyboard navigation support
- Error state communication

## Related Components
- **TextField**: General text input
- **FormControl**: Form field wrapper with labels