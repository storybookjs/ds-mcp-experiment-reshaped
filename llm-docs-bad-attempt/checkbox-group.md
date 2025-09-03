# CheckboxGroup Component

## Overview
The CheckboxGroup component is a container that manages the state and behavior of multiple related checkboxes, providing both controlled and uncontrolled modes for group selection with shared context.

## Key Features
- Group state management
- Controlled and uncontrolled modes
- Validation and error states
- Flexible layout options
- Accessibility enhancements
- Value collection utilities

## Props Interface
```typescript
type CheckboxGroupProps = {
  children: React.ReactNode;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  direction?: 'row' | 'column';
  gap?: Responsive<number>;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLFieldSetElement>;
};
```

## Usage Examples

### Basic Checkbox Group
```typescript
import { CheckboxGroup, Checkbox } from 'reshaped';
import { useState } from 'react';

function BasicCheckboxGroup() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  
  return (
    <CheckboxGroup 
      value={selectedValues}
      onChange={setSelectedValues}
      direction="column"
      gap={3}
    >
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
      <Checkbox value="option3">Option 3</Checkbox>
    </CheckboxGroup>
  );
}
```

### Horizontal Layout
```typescript
import { CheckboxGroup, Checkbox } from 'reshaped';

function HorizontalCheckboxGroup() {
  return (
    <CheckboxGroup 
      direction="row"
      gap={4}
      onChange={(values) => console.log('Selected:', values)}
    >
      <Checkbox value="small">Small</Checkbox>
      <Checkbox value="medium">Medium</Checkbox>
      <Checkbox value="large">Large</Checkbox>
    </CheckboxGroup>
  );
}
```

## Accessibility
- Fieldset and legend semantics
- Group labeling and description
- Keyboard navigation between items
- Screen reader group announcements
- Focus management within group

## Related Components
- **Checkbox**: Individual checkbox components
- **FormControl**: Form field wrapper with labels