# Slider Component Documentation

## Component Name

Slider

## Brief Description

A versatile slider input component that supports both single value and range selection with customizable styling and accessibility features.

## Keywords

- Range Input
- Slider Control
- Value Selection
- Form Input
- Touch Interaction
- Accessibility
- Number Input

## Usage Description

The Slider component provides an intuitive way for users to select numerical values within a specified range using a draggable interface. It supports both single-value selection and range selection modes, making it suitable for various use cases such as price filters, volume controls, time selectors, and configuration panels.

The component can operate in both controlled and uncontrolled modes, automatically switching between implementations based on the props provided. It includes comprehensive accessibility support with proper ARIA attributes and keyboard navigation. The slider supports both horizontal and vertical orientations and includes features like custom value rendering, step increments, and visual tooltips during interaction.

Built with touch and mouse interaction support, the Slider component provides smooth dragging experiences across different devices and input methods. It integrates seamlessly with form systems and provides detailed change callbacks for both intermediate value updates and final commitment events.

## Props Documentation

### Base Props

- **min**: `number` (optional, default: 0)
  - The minimum value of the slider range
  - Example: `min={0}`

- **max**: `number` (optional, default: 100)
  - The maximum value of the slider range
  - Example: `max={200}`

- **step**: `number` (optional, default: 1)
  - The increment step for value changes
  - Supports decimal values for precise control
  - Example: `step={0.1}` or `step={5}`

- **disabled**: `boolean` (optional)
  - Disables the slider and prevents user interaction
  - Example: `disabled={true}`

- **orientation**: `"horizontal" | "vertical"` (optional, default: "horizontal")
  - Controls the slider's visual orientation
  - Example: `orientation="vertical"`

- **renderValue**: `((args: { value: number }) => string) | false` (optional)
  - Custom function to format displayed values or disable value display
  - Return false to hide tooltips entirely
  - Example: `renderValue={({ value }) => `${value}%`}`

- **className**: `string | string[]` (optional)
  - Additional CSS classes for styling customization
  - Example: `className="custom-slider"`

- **attributes**: `React.HTMLAttributes<HTMLDivElement>` (optional)
  - Additional HTML attributes to apply to the root element
  - Example: `attributes={{ "data-testid": "price-slider" }}`

### Single Value Props (when range is false or undefined)

#### Controlled Single Value

- **value**: `number` (required for controlled)
  - Current value of the slider
  - Example: `value={50}`

- **name**: `string` (required)
  - Form field name for the slider input
  - Example: `name="volume"`

- **onChange**: `(args: SingleChangeArgs) => void` (optional)
  - Callback fired during value changes
  - Args: `{ value: number, name: string }`
  - Example: `onChange={({ value, name }) => setValue(value)}`

- **onChangeCommit**: `(args: SingleChangeArgs) => void` (optional)
  - Callback fired when interaction is completed (mouse up, touch end)
  - Args: `{ value: number, name: string }`
  - Example: `onChangeCommit={({ value }) => saveValue(value)}`

#### Uncontrolled Single Value

- **defaultValue**: `number` (optional)
  - Initial value for uncontrolled mode
  - Example: `defaultValue={25}`

- **name**: `string` (required)
  - Form field name for the slider input
  - Example: `name="brightness"`

- **onChange**: `(args: SingleChangeArgs) => void` (optional)
  - Callback fired during value changes
  - Example: `onChange={({ value }) => console.log(value)}`

### Range Props (when range is true)

#### Controlled Range

- **range**: `true` (required)
  - Enables range selection mode
  - Example: `range={true}`

- **minValue**: `number` (required for controlled)
  - Current minimum value of the range
  - Example: `minValue={20}`

- **maxValue**: `number` (required for controlled)
  - Current maximum value of the range
  - Example: `maxValue={80}`

- **name**: `string` (required, alternative to separate names)
  - Single form field name for both values
  - Example: `name="price-range"`

- **minName**: `string` (alternative to name)
  - Separate form field name for minimum value
  - Example: `minName="min-price"`

- **maxName**: `string` (alternative to name)
  - Separate form field name for maximum value
  - Example: `maxName="max-price"`

- **onChange**: `(args: RangeChangeArgs) => void` (optional)
  - Callback fired during range changes
  - Args: `{ minValue: number, maxValue: number, name: string }`
  - Example: `onChange={({ minValue, maxValue }) => setRange([minValue, maxValue])}`

- **onChangeCommit**: `(args: RangeChangeArgs) => void` (optional)
  - Callback fired when range interaction is completed
  - Example: `onChangeCommit={({ minValue, maxValue }) => saveRange(minValue, maxValue)}`

#### Uncontrolled Range

- **range**: `true` (required)
  - Enables range selection mode

- **defaultMinValue**: `number` (optional)
  - Initial minimum value for uncontrolled mode
  - Example: `defaultMinValue={10}`

- **defaultMaxValue**: `number` (optional)
  - Initial maximum value for uncontrolled mode
  - Example: `defaultMaxValue={90}`

- **name**: `string` (required, alternative to separate names)
  - Single form field name for both values

- **minName**: `string` (alternative to name)
  - Separate form field name for minimum value

- **maxName**: `string` (alternative to name)
  - Separate form field name for maximum value

## Code Examples

### Basic Single Value Slider

```tsx
import { Slider } from "reshaped";
import { useState } from "react";

function BasicSlider() {
  const [volume, setVolume] = useState(50);

  return (
    <Slider
      value={volume}
      name="volume"
      min={0}
      max={100}
      onChange={({ value }) => setVolume(value)}
      onChangeCommit={({ value }) => console.log("Final volume:", value)}
    />
  );
}
```

### Price Range Slider

```tsx
import { Slider } from "reshaped";
import { useState } from "react";

function PriceRangeSlider() {
  const [priceRange, setPriceRange] = useState({ min: 100, max: 500 });

  return (
    <Slider
      range={true}
      minValue={priceRange.min}
      maxValue={priceRange.max}
      min={0}
      max={1000}
      step={25}
      name="price"
      renderValue={({ value }) => `$${value}`}
      onChange={({ minValue, maxValue }) =>
        setPriceRange({ min: minValue, max: maxValue })
      }
      onChangeCommit={({ minValue, maxValue }) =>
        console.log("Search price range:", minValue, "-", maxValue)
      }
    />
  );
}
```

### Vertical Temperature Slider

```tsx
import { Slider } from "reshaped";

function TemperatureSlider() {
  const [temperature, setTemperature] = useState(22);

  return (
    <div style={{ height: "200px" }}>
      <Slider
        value={temperature}
        name="temperature"
        min={-10}
        max={40}
        step={0.5}
        orientation="vertical"
        renderValue={({ value }) => `${value}°C`}
        onChange={({ value }) => setTemperature(value)}
        className="temperature-slider"
      />
    </div>
  );
}
```

### Uncontrolled Slider with Custom Formatting

```tsx
import { Slider } from "reshaped";

function UncontrolledSlider() {
  const handleChange = ({ value, name }) => {
    console.log(`${name} changed to ${value}`);
  };

  return (
    <Slider
      defaultValue={75}
      name="progress"
      min={0}
      max={100}
      step={5}
      renderValue={({ value }) => `${value}% Complete`}
      onChange={handleChange}
    />
  );
}
```

### Disabled State and Form Integration

```tsx
import { Slider } from "reshaped";
import { FormControl } from "reshaped";

function FormSlider() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [brightness, setBrightness] = useState(50);

  return (
    <FormControl>
      <FormControl.Label>Screen Brightness</FormControl.Label>
      <Slider
        value={brightness}
        name="brightness"
        min={10}
        max={100}
        disabled={!isEnabled}
        onChange={({ value }) => setBrightness(value)}
        renderValue={({ value }) => `${value}%`}
        attributes={{
          "data-testid": "brightness-slider",
          "aria-label": "Adjust screen brightness",
        }}
      />
    </FormControl>
  );
}
```

## Accessibility Considerations

The Slider component includes comprehensive accessibility support:

- **ARIA Attributes**: Proper `aria-orientation`, `aria-labelledby`, and `aria-hidden` attributes
- **Keyboard Navigation**: Full keyboard support through native HTML range input
- **Screen Reader Support**: Semantic markup and proper labeling
- **Focus Management**: Clear focus indicators and logical tab order
- **Touch Support**: Optimized for touch devices with appropriate touch targets
- **High Contrast**: Supports system color preferences and theme modes

## Related Components

- **FormControl**: Provides labeling, validation, and form structure around the Slider
- **Text**: Used internally for value display and can be used for additional labeling
- **Theme**: Supports color mode inversion for tooltips and theming integration
- **Input Components**: Can be combined with other form inputs for complex forms

The Slider component integrates seamlessly with the reshaped design system's form handling patterns and accessibility features, making it suitable for both simple value selection and complex multi-step forms.
