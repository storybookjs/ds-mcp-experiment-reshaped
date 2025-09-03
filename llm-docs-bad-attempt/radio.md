# Radio Component

## Overview
The Radio component is a form input that allows users to select a single option from a group of mutually exclusive choices with proper state management and accessibility.

## Key Features
- Mutually exclusive selection
- Controlled and uncontrolled modes
- Validation states
- Custom styling
- Accessibility compliance
- Keyboard navigation

## Props Interface
```typescript
type RadioProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name: string;
  value: string;
  children?: React.ReactNode;
  className?: string;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
};
```

## Usage Examples

### Basic Radio Button
```typescript
import { Radio } from 'reshaped';
import { useState } from 'react';

function BasicRadio() {
  const [selected, setSelected] = useState('medium');
  
  return (
    <div>
      <Radio
        name="size"
        value="small"
        checked={selected === 'small'}
        onChange={() => setSelected('small')}
      >
        Small
      </Radio>
      <Radio
        name="size"
        value="medium"
        checked={selected === 'medium'}
        onChange={() => setSelected('medium')}
      >
        Medium
      </Radio>
      <Radio
        name="size"
        value="large"
        checked={selected === 'large'}
        onChange={() => setSelected('large')}
      >
        Large
      </Radio>
    </div>
  );
}
```

## Accessibility
- Proper radio group semantics
- Keyboard navigation with arrow keys
- Screen reader announcements
- Focus management

## Related Components
- **RadioGroup**: Container for radio groups