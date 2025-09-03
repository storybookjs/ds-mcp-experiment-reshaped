# Checkbox Component

## Overview
The Checkbox component is a form control that allows users to select one or more options from a list or toggle a single option on/off with support for indeterminate states and validation.

## Key Features
- Controlled and uncontrolled modes
- Indeterminate state support
- Validation states (error, success)
- Custom labels and descriptions
- Keyboard navigation
- Accessibility compliance
- Theme integration

## Props Interface
```typescript
type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  children?: React.ReactNode;
  className?: string;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
};
```

## Usage Examples

### Basic Checkbox
```typescript
import { Checkbox } from 'reshaped';
import { useState } from 'react';

function BasicCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox 
      checked={checked}
      onChange={setChecked}
    >
      Accept terms and conditions
    </Checkbox>
  );
}
```

### Indeterminate Checkbox
```typescript
import { Checkbox } from 'reshaped';
import { useState } from 'react';

function IndeterminateCheckbox() {
  const [parentChecked, setParentChecked] = useState(false);
  const [childStates, setChildStates] = useState([false, false, false]);
  
  const allChecked = childStates.every(Boolean);
  const someChecked = childStates.some(Boolean);
  
  return (
    <div>
      <Checkbox
        checked={allChecked}
        indeterminate={!allChecked && someChecked}
        onChange={(checked) => {
          setChildStates(childStates.map(() => checked));
        }}
      >
        Select All
      </Checkbox>
      
      {childStates.map((checked, index) => (
        <Checkbox
          key={index}
          checked={checked}
          onChange={(newChecked) => {
            const newStates = [...childStates];
            newStates[index] = newChecked;
            setChildStates(newStates);
          }}
        >
          Option {index + 1}
        </Checkbox>
      ))}
    </div>
  );
}
```

## Accessibility
- Proper ARIA attributes and roles
- Keyboard navigation support (Space to toggle)
- Focus indicators and management
- Screen reader announcements
- Label association

## Design Tokens
- Theme-aware colors for different states
- Consistent sizing and spacing
- Smooth state transitions
- Focus ring styling

## Related Components
- **CheckboxGroup**: Container for multiple checkboxes
- **FormControl**: Form field wrapper with labels and validation