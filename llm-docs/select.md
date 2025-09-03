# Select

A form control component that allows users to choose from predefined options using either a native HTML select dropdown or a custom button-triggered interface.

## Keywords
Form Control, Dropdown, Options, Input Field, Selection, Native Select, Button Trigger, Form

## Usage Description

The Select component provides a flexible interface for option selection with two distinct operational modes: native select with options list and custom button trigger for external dropdown integration. Use this component when users need to choose from a predefined list of options in forms or data entry interfaces.

The component integrates seamlessly with the FormControl system for consistent form handling, validation states, and accessibility features. It supports both controlled and uncontrolled patterns, making it suitable for various form management approaches from simple HTML forms to complex React state management systems.

The dual-mode design allows for standard dropdown functionality with the options prop, or integration with external dropdown components like DropdownMenu when used without options. This flexibility makes it ideal for both simple form selects and complex custom dropdown interfaces.

## Props Documentation

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Form field name for form submission and identification |

### Optional Props

#### Value Management
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `undefined` | Controlled value (use with `onChange`) |
| `defaultValue` | `string` | `undefined` | Uncontrolled default value (cannot be used with `value`) |
| `onChange` | `(args: { name: string; value: string; event?: React.ChangeEvent<HTMLSelectElement> }) => void` | `undefined` | Change handler for value updates |

#### Display and Behavior
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `undefined` | Placeholder text shown when no option is selected |
| `disabled` | `boolean` | `false` | Disables the select component |
| `size` | `"small" \| "medium" \| "large" \| "xlarge" \| Responsive<Size>` | `"medium"` | Visual size variant with responsive support |
| `variant` | `"outline" \| "faded" \| "headless"` | `"outline"` | Visual style variant |

#### Options Mode (Native Select)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Option[]` | `undefined` | Array of option objects for native select dropdown |
| `onFocus` | `(e: React.FocusEvent<HTMLSelectElement>) => void` | `undefined` | Focus event handler for select element |
| `onBlur` | `(e: React.FocusEvent<HTMLSelectElement>) => void` | `undefined` | Blur event handler for select element |
| `inputAttributes` | `React.SelectHTMLAttributes<HTMLSelectElement>` | `undefined` | Additional attributes for select element |

#### Button Trigger Mode (Custom Dropdown)
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | `undefined` | Content displayed in button trigger (cannot be used with `options`) |
| `onClick` | `() => void` | `undefined` | Click handler for button trigger |
| `onFocus` | `(e: React.FocusEvent<HTMLButtonElement>) => void` | `undefined` | Focus event handler for button trigger |
| `onBlur` | `(e: React.FocusEvent<HTMLButtonElement>) => void` | `undefined` | Blur event handler for button trigger |
| `inputAttributes` | `ActionableProps["attributes"]` | `undefined` | Additional attributes for button trigger |

#### Visual Enhancement
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `React.ComponentType<any>` | `undefined` | Icon component displayed at the start of the select |
| `startSlot` | `React.ReactNode` | `undefined` | Custom content displayed at the start of the select |

#### Form Integration
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hasError` | `boolean` | `false` | Shows error state styling (can be inherited from FormControl) |
| `id` | `string` | `undefined` | Component ID (auto-generated if not provided) |

#### Styling
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string \| string[] \| ClassName[]` | `undefined` | Additional CSS classes |
| `attributes` | `React.HTMLAttributes<HTMLDivElement>` | `undefined` | Additional HTML attributes for root element |

### Option Type Definition

```typescript
type Option = {
    label: string;      // Display text for the option
    value: string;      // Value submitted with form
    disabled?: boolean; // Whether the option is disabled
};
```

## Code Examples

### Basic Select with Options
```tsx
<Select
    name="animal"
    placeholder="Select an animal"
    options={[
        { label: "Dog", value: "dog" },
        { label: "Cat", value: "cat" },
        { label: "Turtle", value: "turtle" }
    ]}
    inputAttributes={{ "aria-label": "Animal selection" }}
/>
```

### Controlled Select with Change Handler
```tsx
const [selectedAnimal, setSelectedAnimal] = useState("");

<Select
    name="animal"
    value={selectedAnimal}
    onChange={({ value }) => setSelectedAnimal(value)}
    options={[
        { label: "Dog", value: "dog" },
        { label: "Cat", value: "cat" },
        { label: "Turtle", value: "turtle" }
    ]}
/>
```

### Select with Icon and Custom Styling
```tsx
import IconZap from "reshaped/icons/Zap";

<Select
    name="power"
    size="large"
    variant="faded"
    icon={IconZap}
    placeholder="Select power level"
    options={[
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" }
    ]}
/>
```

### Button Trigger Mode with External Dropdown
```tsx
<DropdownMenu width="trigger">
    <DropdownMenu.Trigger>
        {(attributes) => (
            <Select
                name="custom"
                placeholder="Custom dropdown"
                inputAttributes={attributes}
                startSlot={<CustomIcon />}
            >
                Selected Item
            </Select>
        )}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.Item>Option 1</DropdownMenu.Item>
        <DropdownMenu.Item>Option 2</DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu>
```

### Responsive Size Configuration
```tsx
<Select
    name="responsive"
    size={{ s: "xlarge", m: "medium" }}
    placeholder="Responsive select"
    options={[
        { label: "Mobile: xlarge, Desktop: medium", value: "responsive" }
    ]}
/>
```

### Form Integration with Error State
```tsx
<FormControl hasError>
    <FormControl.Label>Required Field</FormControl.Label>
    <Select
        name="required"
        placeholder="This field is required"
        options={[
            { label: "Option 1", value: "opt1" },
            { label: "Option 2", value: "opt2" }
        ]}
    />
    <FormControl.Error>This field is required</FormControl.Error>
</FormControl>
```

## Related Components

- **FormControl**: Provides form context, validation states, and accessibility features. Select automatically inherits disabled, error state, and ID attributes when wrapped in FormControl.
- **DropdownMenu**: External dropdown component that can be used with Select in button trigger mode for custom dropdown interfaces.
- **Icon**: Used internally for the chevron arrow and can be passed as the icon prop for start decoration.
- **Text**: Used internally to render children content and placeholder text in button trigger mode.
- **Actionable**: Used internally to create the clickable button interface in trigger mode.
- **View**: Commonly used as startSlot content for custom visual elements or spacing.

## Accessibility Considerations

The Select component follows accessibility best practices:

- Native HTML select element is used when options are provided for full keyboard navigation support
- Proper ARIA labeling through inputAttributes when aria-label or aria-labelledby are needed
- Error states are communicated through visual styling and form control context
- Disabled states prevent interaction and are announced by screen readers
- Focus management is handled automatically for both native and button trigger modes
- FormControl integration provides proper label association and error announcements