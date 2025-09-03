# PinField Component

## Overview
The PinField component is specialized for entering PIN codes, verification codes, and other sequential character inputs with visual character separation and pattern validation.

## Key Features
- Sequential character input
- Visual character separation
- Pattern validation
- Auto-focus advancement
- Backspace handling
- Paste support
- Accessibility compliance

## Props Interface
```typescript
type PinFieldProps = {
  length: number;
  value?: string;
  onChange?: (value: string) => void;
  pattern?: string;
  type?: 'text' | 'password' | 'number';
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic PIN Field
```typescript
import { PinField, FormControl } from 'reshaped';
import { useState } from 'react';

function BasicPinField() {
  const [pin, setPin] = useState('');
  
  return (
    <FormControl
      label="Enter PIN"
      helperText="Enter your 4-digit PIN"
    >
      <PinField
        length={4}
        value={pin}
        onChange={setPin}
        type="password"
      />
    </FormControl>
  );
}
```

### Verification Code Field
```typescript
import { PinField, FormControl } from 'reshaped';
import { useState } from 'react';

function VerificationCodeField() {
  const [code, setCode] = useState('');
  
  return (
    <FormControl
      label="Verification Code"
      helperText="Enter the 6-digit code sent to your email"
    >
      <PinField
        length={6}
        value={code}
        onChange={setCode}
        type="number"
        autoFocus
      />
    </FormControl>
  );
}
```

### Custom Pattern Field
```typescript
import { PinField, FormControl } from 'reshaped';
import { useState } from 'react';

function CustomPatternField() {
  const [value, setValue] = useState('');
  
  return (
    <FormControl
      label="Security Code"
      helperText="Letters and numbers only"
    >
      <PinField
        length={8}
        value={value}
        onChange={setValue}
        pattern="[A-Za-z0-9]"
        type="text"
      />
    </FormControl>
  );
}
```

## Behavior
- Auto-advances to next field on valid input
- Backspace moves to previous field
- Paste distributes characters across fields
- Pattern validation on each character
- Complete/incomplete state tracking

## Accessibility
- Keyboard navigation between fields
- Screen reader field announcements
- Focus management and indicators
- ARIA labels for field groups

## Related Components
- **TextField**: Individual character inputs
- **FormControl**: Form field wrapper