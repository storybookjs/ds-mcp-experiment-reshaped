# Autocomplete

**Brief Description**: A searchable input field with dropdown suggestions that supports keyboard navigation and item selection.

**Keywords**: Input Field, Dropdown, Selection, Search, Typeahead, Combobox, Filtering, Suggestions

## Usage Description

The Autocomplete component provides a powerful search interface that combines a text input with a dropdown list of selectable options. It's designed for scenarios where users need to search through and select from a list of items, such as location pickers, user selectors, or product searches.

This component is ideal when you have a large dataset that users need to filter through, or when you want to provide suggestions based on user input. It supports both controlled and uncontrolled usage patterns, keyboard navigation for accessibility, and can be customized with various styling options inherited from TextField.

The Autocomplete automatically handles focus management, keyboard interactions (Arrow keys, Enter, Escape), and provides hooks for responding to user selections, input changes, and other interactions. It can be used in forms alongside other form controls and integrates seamlessly with the Reshaped design system.

## Props Documentation

### Autocomplete Props

**Extends all TextField props plus:**

#### Core Props

- **children** (`React.ReactNode`) - **Required** - The Autocomplete.Item components to display in the dropdown
- **name** (`string`) - **Required** - Form field name for the input
- **onChange** (`ChangeHandler<string>`) - Handler for input value changes
- **onInput** (`ChangeHandler<string>`) - Handler for input events (similar to onChange but for every keystroke)
- **onItemSelect** (`(args: { value: string; data?: unknown }) => void`) - Handler called when an item is selected
- **onBackspace** (`() => void`) - Handler called when backspace key is pressed
- **onEnter** (`() => void`) - Handler called when enter key is pressed
- **active** (`boolean`) - Controls whether the dropdown is open (for controlled usage)
- **onOpen** (`() => void`) - Handler called when dropdown opens
- **onClose** (`(args?: unknown) => void`) - Handler called when dropdown closes

#### Advanced Props

- **containerRef** (`React.RefObject<HTMLElement>`) - Reference to container element for positioning
- **instanceRef** (`React.RefObject<DropdownMenuInstance>`) - Reference to internal dropdown instance

#### TextField Inherited Props

- **value** (`string`) - Current input value (for controlled usage)
- **defaultValue** (`string`) - Default input value (for uncontrolled usage)
- **placeholder** (`string`) - Input placeholder text
- **disabled** (`boolean`) - Whether the input is disabled
- **size** (`Responsive<"small" | "medium" | "large" | "xlarge">`) - Input size
- **variant** (`"outline" | "faded" | "headless"`) - Visual variant style
- **rounded** (`boolean`) - Whether input has rounded corners
- **multiline** (`boolean`) - Whether input supports multiple lines
- **icon** (`IconProps["svg"]`) - Icon to display at start of input
- **endIcon** (`IconProps["svg"]`) - Icon to display at end of input
- **startSlot** (`React.ReactNode`) - Content to display at start of input
- **endSlot** (`React.ReactNode`) - Content to display at end of input
- **prefix** (`React.ReactNode`) - Prefix content inside input
- **suffix** (`React.ReactNode`) - Suffix content inside input
- **hasError** (`boolean`) - Whether input has validation error
- **className** (`ClassName`) - CSS class names
- **attributes** (`Attributes<"div">`) - Additional HTML attributes for container
- **inputAttributes** (`Attributes<"input">`) - Additional HTML attributes for input element
- **onFocus** (`(e: React.FocusEvent<HTMLInputElement>) => void`) - Focus event handler
- **onBlur** (`(e: React.FocusEvent<HTMLInputElement>) => void`) - Blur event handler

### Autocomplete.Item Props

**Extends all MenuItem props plus:**

#### Core Props

- **value** (`string`) - **Required** - The value associated with this item
- **data** (`unknown`) - Optional data object passed to onItemSelect handler
- **children** (`React.ReactNode`) - **Required** - Content to display in the item

#### MenuItem Inherited Props

- **disabled** (`boolean`) - Whether the item is disabled and non-selectable
- **highlighted** (`boolean`) - Whether the item is visually highlighted (managed internally)
- **selected** (`boolean`) - Whether the item appears selected
- **color** (`"neutral" | "critical" | "primary"`) - Color theme for the item
- **size** (`Responsive<"small" | "medium" | "large">`) - Item size
- **icon** (`IconProps["svg"]`) - Icon to display in the item
- **startSlot** (`React.ReactNode`) - Content at the start of the item
- **endSlot** (`React.ReactNode`) - Content at the end of the item
- **onClick** (`(e: React.MouseEvent) => void`) - Additional click handler
- **className** (`ClassName`) - CSS class names
- **attributes** (`Attributes<"div">`) - Additional HTML attributes
- **href** (`string`) - URL to navigate to when item is selected
- **as** (`React.ElementType`) - Component or element type to render as
- **stopPropagation** (`boolean`) - Whether to stop click event propagation

## Code Examples

### Basic Usage

```tsx
import { Autocomplete, FormControl } from "reshaped";

function BasicExample() {
  const [value, setValue] = useState("");

  return (
    <FormControl>
      <FormControl.Label>Choose a fruit</FormControl.Label>
      <Autocomplete
        name="fruit"
        value={value}
        placeholder="Type to search..."
        onChange={(args) => setValue(args.value)}
        onItemSelect={(args) => console.log("Selected:", args.value)}
      >
        <Autocomplete.Item value="apple">Apple</Autocomplete.Item>
        <Autocomplete.Item value="banana">Banana</Autocomplete.Item>
        <Autocomplete.Item value="orange">Orange</Autocomplete.Item>
      </Autocomplete>
    </FormControl>
  );
}
```

### Filtered Search with Dynamic Options

```tsx
function FilteredExample() {
  const [query, setQuery] = useState("");
  const fruits = ["Apple", "Banana", "Orange", "Grape", "Pineapple"];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Autocomplete
      name="fruit"
      value={query}
      placeholder="Search fruits..."
      onChange={(args) => setQuery(args.value)}
      onItemSelect={(args) => setQuery(args.value)}
    >
      {filteredFruits.map((fruit) => (
        <Autocomplete.Item key={fruit} value={fruit}>
          {fruit}
        </Autocomplete.Item>
      ))}
    </Autocomplete>
  );
}
```

### Multiselect with Tags

```tsx
function MultiselectExample() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const options = ["Pizza", "Burger", "Salad", "Pasta", "Sushi"];

  const handleSelect = (args) => {
    setSelected((prev) => [...prev, args.value]);
    setQuery("");
  };

  const handleRemove = (value) => {
    setSelected((prev) => prev.filter((item) => item !== value));
  };

  const selectedTags = selected.map((value) => (
    <Badge key={value} onDismiss={() => handleRemove(value)}>
      {value}
    </Badge>
  ));

  return (
    <Autocomplete
      name="foods"
      value={query}
      multiline
      startSlot={selectedTags}
      placeholder="Add foods..."
      onChange={(args) => setQuery(args.value)}
      onItemSelect={handleSelect}
      onBackspace={() => {
        if (query.length === 0) {
          setSelected((prev) => prev.slice(0, -1));
        }
      }}
    >
      {options
        .filter((option) => !selected.includes(option))
        .filter((option) => option.toLowerCase().includes(query.toLowerCase()))
        .map((option) => (
          <Autocomplete.Item key={option} value={option}>
            {option}
          </Autocomplete.Item>
        ))}
    </Autocomplete>
  );
}
```

### With Custom Item Data and Advanced Features

```tsx
function AdvancedExample() {
  const [value, setValue] = useState("");
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];

  return (
    <Autocomplete
      name="user"
      size="large"
      icon={SearchIcon}
      placeholder="Search users..."
      onChange={(args) => setValue(args.value)}
      onItemSelect={(args) => {
        console.log("Selected user:", args.data);
        setValue(args.value);
      }}
    >
      {users
        .filter((user) => user.name.toLowerCase().includes(value.toLowerCase()))
        .map((user) => (
          <Autocomplete.Item
            key={user.id}
            value={user.name}
            data={user}
            startSlot={<Avatar src={user.avatar} />}
          >
            <div>
              <div>{user.name}</div>
              <div style={{ fontSize: "0.875rem", opacity: 0.7 }}>
                {user.email}
              </div>
            </div>
          </Autocomplete.Item>
        ))}
    </Autocomplete>
  );
}
```

### Controlled Dropdown State

```tsx
function ControlledExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Autocomplete
      name="controlled"
      value={value}
      active={isOpen}
      placeholder="Controlled dropdown..."
      onChange={(args) => setValue(args.value)}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      onItemSelect={(args) => {
        setValue(args.value);
        setIsOpen(false);
      }}
    >
      <Autocomplete.Item value="option1">Option 1</Autocomplete.Item>
      <Autocomplete.Item value="option2" disabled>
        Option 2 (Disabled)
      </Autocomplete.Item>
      <Autocomplete.Item value="option3">Option 3</Autocomplete.Item>
    </Autocomplete>
  );
}
```

## Accessibility Considerations

The Autocomplete component is built with comprehensive accessibility support:

- **ARIA Roles**: Input has `role="combobox"` and dropdown has `role="listbox"` with items having `role="option"`
- **ARIA Attributes**: Includes `aria-activedescendant`, `aria-haspopup`, and `aria-autocomplete` for screen reader support
- **Keyboard Navigation**:
  - Arrow Up/Down to navigate options
  - Enter to select highlighted option
  - Escape to close dropdown
  - Tab to move focus away
- **Focus Management**: Focus remains on input during keyboard navigation, with proper visual highlighting
- **Screen Reader Support**: Announces current selection and provides context about available options

## Related Components

- **TextField** - The base input component that Autocomplete extends
- **DropdownMenu** - Provides the dropdown positioning and interaction behavior
- **MenuItem** - Individual selectable items within the dropdown
- **FormControl** - Used to wrap Autocomplete with labels and validation messaging
- **Badge** - Often used with multiselect patterns for displaying selected items
- **Combobox** - Alternative component for similar use cases with different interaction patterns
