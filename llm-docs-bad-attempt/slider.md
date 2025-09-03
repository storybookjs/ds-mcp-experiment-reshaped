# Slider Component

## Overview
The Slider component is a customizable range input that allows users to select single values or value ranges through an interactive draggable interface with precision control.

## Key Features
- Single value and range selection
- Customizable min/max values
- Step value control
- Multiple thumb support
- Keyboard navigation
- Accessibility compliance
- Custom styling options

## Props Interface
```typescript
type SliderProps = {
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  onChange?: (value: number | [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  marks?: boolean | Array<{ value: number; label?: string }>;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Slider
```typescript
import { Slider, FormControl, Text, View } from 'reshaped';
import { useState } from 'react';

function BasicSlider() {
  const [value, setValue] = useState(50);
  
  return (
    <FormControl
      label="Volume"
      helperText={`Current value: ${value}`}
    >
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
      />
    </FormControl>
  );
}
```

### Range Slider
```typescript
import { Slider, FormControl, Text, View } from 'reshaped';
import { useState } from 'react';

function RangeSlider() {
  const [range, setRange] = useState<[number, number]>([20, 80]);
  
  return (
    <FormControl
      label="Price Range"
      helperText={`$${range[0]} - $${range[1]}`}
    >
      <Slider
        value={range}
        onChange={setRange}
        min={0}
        max={1000}
        step={10}
      />
    </FormControl>
  );
}
```

### Slider with Marks
```typescript
import { Slider, FormControl } from 'reshaped';
import { useState } from 'react';

function MarkedSlider() {
  const [difficulty, setDifficulty] = useState(2);
  
  const marks = [
    { value: 1, label: 'Easy' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'Hard' },
    { value: 4, label: 'Expert' }
  ];
  
  return (
    <FormControl
      label="Difficulty Level"
      helperText="Select your preferred difficulty"
    >
      <Slider
        value={difficulty}
        onChange={setDifficulty}
        min={1}
        max={4}
        step={1}
        marks={marks}
      />
    </FormControl>
  );
}
```

## Keyboard Navigation
- Arrow keys to adjust values
- Page Up/Down for larger steps
- Home/End for min/max values
- Tab to move between thumbs (range mode)

## Accessibility
- ARIA slider role and attributes
- Screen reader value announcements
- Keyboard navigation support
- Focus indicators

## Related Components
- **NumberField**: Numeric input alternative
- **FormControl**: Form field wrapper