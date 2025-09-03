# Select Component

## Overview
The Select component is a versatile form control that provides both native HTML select functionality with predefined options and custom button-based triggers for dropdown menus and other interactive behaviors.

## Key Features
- Native and custom select modes
- Option groups support
- Search/filter functionality
- Multiple selection
- Validation states
- Custom rendering
- Accessibility compliance

## Props Interface
```typescript
type SelectProps = {
  children?: React.ReactNode;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  native?: boolean;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  className?: string;
  attributes?: React.SelectHTMLAttributes<HTMLSelectElement>;
};
```

## Usage Examples

### Basic Select
```typescript
import { Select, Option, FormControl } from 'reshaped';
import { useState } from 'react';

function BasicSelect() {
  const [country, setCountry] = useState<string>('');
  
  return (
    <FormControl
      label="Country"
      helperText="Select your country"
    >
      <Select
        value={country}
        onChange={setCountry}
        placeholder="Choose country"
      >
        <Option value="us">United States</Option>
        <Option value="uk">United Kingdom</Option>
        <Option value="ca">Canada</Option>
        <Option value="au">Australia</Option>
      </Select>
    </FormControl>
  );
}
```

### Searchable Select
```typescript
import { Select, Option, FormControl } from 'reshaped';
import { useState } from 'react';

function SearchableSelect() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const cities = [
    'New York',
    'Los Angeles', 
    'Chicago',
    'Houston',
    'Phoenix'
  ];
  
  return (
    <FormControl label="City">
      <Select
        value={selectedCity}
        onChange={setSelectedCity}
        searchable
        placeholder="Search cities..."
      >
        {cities.map(city => (
          <Option key={city} value={city.toLowerCase()}>
            {city}
          </Option>
        ))}
      </Select>
    </FormControl>
  );
}
```

### Multi-Select
```typescript
import { Select, Option, FormControl } from 'reshaped';
import { useState } from 'react';

function MultiSelect() {
  const [skills, setSkills] = useState<string[]>([]);
  
  return (
    <FormControl
      label="Skills"
      helperText="Select multiple skills"
    >
      <Select
        value={skills}
        onChange={setSkills}
        multiple
        placeholder="Select skills"
      >
        <Option value="javascript">JavaScript</Option>
        <Option value="typescript">TypeScript</Option>
        <Option value="react">React</Option>
        <Option value="node">Node.js</Option>
        <Option value="python">Python</Option>
      </Select>
    </FormControl>
  );
}
```

## Accessibility
- Keyboard navigation with arrow keys
- Screen reader support for options
- ARIA attributes for expanded state
- Focus management

## Related Components
- **Option**: Individual select options
- **FormControl**: Form field wrapper