# Autocomplete

**Brief Description**: A searchable dropdown input component that provides auto-completion functionality with keyboard navigation and selection capabilities.

**Keywords**: Input Field, Dropdown, Autocomplete, Search, Selection, Combobox, Menu, Filtering

**Usage Description**: The Autocomplete component combines a text input field with a dropdown menu to provide users with searchable, selectable options. It's built on top of the TextField and DropdownMenu components, offering a complete auto-completion experience with keyboard navigation, mouse interaction, and accessibility support.

Use this component when you need to help users quickly find and select from a large set of options, such as searching through a list of countries, users, or products. The component supports both controlled and uncontrolled modes, custom filtering logic, and can be extended to support multi-selection scenarios.

## Props Documentation

**Main Autocomplete Component Props:**

- **name** (string, required): Form field name used for form submission and change handlers
- **children** (React.ReactNode, required): Autocomplete.Item components or other dropdown content
- **value** (string, optional): Controlled input value
- **defaultValue** (string, optional): Initial uncontrolled input value
- **placeholder** (string, optional): Input placeholder text
- **disabled** (boolean, optional): Disables the entire component
- **active** (boolean, optional): Controls dropdown visibility (overrides internal state)
- **multiline** (boolean, optional): Allows input to expand vertically
- **size** (G.Responsive<"small" | "medium" | "large" | "xlarge">, optional): Input field size
- **variant** ("outline" | "faded" | "headless", optional): Visual style variant
- **hasError** (boolean, optional): Shows error state styling
- **focused** (boolean, optional): Controls focus state appearance
- **rounded** (boolean, optional): Applies rounded corners to input
- **icon** (IconProps["svg"], optional): Icon displayed at the start of input
- **endIcon** (IconProps["svg"], optional): Icon displayed at the end of input
- **startSlot** (React.ReactNode, optional): Custom content before input (useful for tags/badges)
- **endSlot** (React.ReactNode, optional): Custom content after input
- **prefix** (React.ReactNode, optional): Text/content prefix inside input
- **suffix** (React.ReactNode, optional): Text/content suffix inside input

## Code Examples

### Basic Usage
```tsx
import { Autocomplete } from 'reshaped';

function BasicAutocomplete() {
  const [value, setValue] = useState('');
  
  return (
    <Autocomplete
      name="fruit"
      placeholder="Search fruits..."
      value={value}
      onChange={(args) => setValue(args.value)}
      onItemSelect={(args) => console.log('Selected:', args.value)}
    >
      <Autocomplete.Item value="apple">Apple</Autocomplete.Item>
      <Autocomplete.Item value="banana">Banana</Autocomplete.Item>
      <Autocomplete.Item value="cherry">Cherry</Autocomplete.Item>
    </Autocomplete>
  );
}
```

### Multi-Select with Tags Implementation
```tsx
import { Autocomplete, Badge } from 'reshaped';

function MultiselectAutocomplete() {
  const [selectedValues, setSelectedValues] = useState(['pizza', 'ice-cream']);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const options = ['pizza', 'pie', 'ice-cream', 'fries', 'salad'];

  const handleRemoveTag = (valueToRemove) => {
    setSelectedValues(prev => prev.filter(val => val !== valueToRemove));
    inputRef.current?.focus();
  };

  const tagElements = selectedValues.map(value => (
    <Badge 
      key={value}
      onDismiss={() => handleRemoveTag(value)}
      dismissAriaLabel={`Remove ${value}`}
    >
      {value}
    </Badge>
  ));

  return (
    <Autocomplete
      name="foods"
      value={query}
      placeholder="Add foods..."
      multiline
      startSlot={tagElements}
      inputAttributes={{ ref: inputRef }}
      onChange={(args) => setQuery(args.value)}
      onBackspace={() => {
        if (query.length === 0) {
          setSelectedValues(prev => prev.slice(0, -1));
        }
      }}
      onItemSelect={(args) => {
        setQuery('');
        setSelectedValues(prev => [...prev, args.value]);
      }}
    >
      {options.map(option => {
        if (!option.toLowerCase().includes(query.toLowerCase())) return null;
        if (selectedValues.includes(option)) return null;
        
        return (
          <Autocomplete.Item key={option} value={option}>
            {option}
          </Autocomplete.Item>
        );
      })}
    </Autocomplete>
  );
}
```

## Related Components

- **TextField**: The underlying input component that Autocomplete extends. All TextField props are available on Autocomplete.
- **DropdownMenu**: Provides the dropdown functionality and positioning logic. Autocomplete uses DropdownMenu.Trigger and DropdownMenu.Content internally.
- **MenuItem**: The base component for Autocomplete.Item. Shares similar props and styling options.
- **FormControl**: Commonly used wrapper for form field labeling and validation states.
- **Badge**: Often used in multi-select implementations to display selected values as dismissible tags.