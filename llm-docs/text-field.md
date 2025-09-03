# TextField

## Component Name
TextField

## Brief Description
A versatile text input component that supports various visual styles, icons, affixes, and slot-based attachments for form data collection.

## Keywords
Input Field, Form Control, Text Entry, Validation, Prefix, Suffix, Icon, Attachment, Responsive

## Usage Description

The TextField component is the primary input component for collecting text-based user data in forms and interfaces. It provides a consistent, accessible foundation for text entry with extensive customization options through visual variants, sizing, and attachment systems.

Use TextField when you need to collect single-line text input from users, such as names, email addresses, search queries, or any other textual data. The component integrates seamlessly with the FormControl component for comprehensive form validation and labeling. For multi-line text input, enable the multiline prop to allow content wrapping.

The component excels in scenarios requiring enhanced visual context through icons, prefixes, suffixes, or interactive slots. Common use cases include search fields with magnifying glass icons, currency inputs with prefix symbols, measurement fields with unit suffixes, and action-enhanced inputs with embedded buttons or badges.

## Props Documentation

### Core Props

- **name** (string, required): The form field name used for form submission and identification
- **value** (string, optional): Controlled component value - use with onChange for controlled state
- **defaultValue** (string, optional): Initial value for uncontrolled usage - cannot be used with value prop
- **placeholder** (string, optional): Placeholder text displayed when the field is empty
- **onChange** (ChangeHandler<string>, optional): Callback fired when input value changes, receives object with name, value, and event properties
- **onFocus** (React.FocusEvent<HTMLInputElement>, optional): Callback fired when input receives focus
- **onBlur** (React.FocusEvent<HTMLInputElement>, optional): Callback fired when input loses focus

### Visual Configuration

- **size** (Responsive<"small" | "medium" | "large" | "xlarge">, optional): Controls input dimensions and typography, defaults to "medium". Supports responsive objects like { s: "xlarge", m: "medium" }
- **variant** ("outline" | "faded" | "headless", optional): Visual styling variant, defaults to "outline"
  - outline: Standard border with elevation background
  - faded: Subtle background with transparent border
  - headless: Transparent styling for seamless integration
- **rounded** (boolean, optional): Applies circular border radius when true
- **focused** (boolean, optional): Forces focused visual state when true
- **multiline** (boolean, optional): Enables content wrapping for longer text inputs

### State Management

- **disabled** (boolean, optional): Disables interaction and applies disabled styling
- **hasError** (boolean, optional): Applies error styling, typically used with FormControl validation
- **id** (string, optional): Custom element ID, auto-generated if not provided

### Icon Attachments

- **icon** (IconProps["svg"], optional): Icon displayed at the start position
- **endIcon** (IconProps["svg"], optional): Icon displayed at the end position

### Affix Attachments

- **prefix** (React.ReactNode, optional): Text or element displayed before the input with separator
- **suffix** (React.ReactNode, optional): Text or element displayed after the input with separator

### Slot Attachments

- **startSlot** (React.ReactNode, optional): Flexible content area at the start position
- **endSlot** (React.ReactNode, optional): Flexible content area at the end position, typically for actions

### Advanced Configuration

- **className** (ClassName, optional): Additional CSS classes for the root element
- **attributes** (Attributes<"div">, optional): Additional HTML attributes for the root container
- **inputAttributes** (Attributes<"input">, optional): Additional HTML attributes for the input element

## Code Examples

### Basic Usage
```tsx
import { TextField } from 'reshaped';

// Simple controlled input
function ContactForm() {
  const [name, setName] = useState('');
  
  return (
    <TextField
      name="name"
      value={name}
      onChange={({ value }) => setName(value)}
      placeholder="Enter your name"
    />
  );
}
```

### Visual Variants and Sizing
```tsx
// Different visual styles
<TextField name="outlined" variant="outline" placeholder="Outlined input" />
<TextField name="faded" variant="faded" placeholder="Faded background" />
<TextField name="headless" variant="headless" placeholder="Seamless integration" />

// Responsive sizing
<TextField 
  name="responsive"
  size={{ s: "large", m: "medium", l: "small" }}
  placeholder="Responsive sizing"
/>

// Rounded styling
<TextField name="rounded" rounded placeholder="Circular borders" />
```

### Icons and Affixes
```tsx
import { IconSearch, IconUser } from 'reshaped/icons';

// With icons
<TextField
  name="search"
  icon={IconSearch}
  placeholder="Search..."
/>

<TextField
  name="profile"
  endIcon={IconUser}
  placeholder="Username"
/>

// With prefix/suffix
<TextField
  name="phone"
  prefix="+31"
  placeholder="Phone number"
/>

<TextField
  name="area"
  suffix="m²"
  placeholder="Room area"
  value="25"
/>
```

### Advanced Slot Usage
```tsx
import { Button, Badge } from 'reshaped';

// Action button in end slot
<TextField
  name="email"
  placeholder="Enter email address"
  endSlot={
    <Button size="small" variant="ghost">
      Subscribe
    </Button>
  }
/>

// Tag-based input with multiline
<TextField
  name="tags"
  multiline
  placeholder="Add tags"
  startSlot={
    <>
      <Badge size="small">Design</Badge>
      <Badge size="small">React</Badge>
      <Badge size="small">TypeScript</Badge>
    </>
  }
/>
```

### FormControl Integration
```tsx
import { FormControl, TextField } from 'reshaped';

// Complete form field with validation
<FormControl hasError>
  <FormControl.Label>Email Address</FormControl.Label>
  <TextField
    name="email"
    type="email"
    placeholder="user@example.com"
    hasError
  />
  <FormControl.Helper>
    We'll never share your email with anyone else.
  </FormControl.Helper>
  <FormControl.Error>
    Please enter a valid email address.
  </FormControl.Error>
</FormControl>
```

### Layout Alignment
```tsx
// Using TextField.Aligner for consistent alignment
<TextField.Aligner>
  <TextField
    name="description"
    variant="headless"
    placeholder="Try something like 'I have a job'"
  />
</TextField.Aligner>
```

## Accessibility Considerations

The TextField component is built with comprehensive accessibility support:

- **Semantic HTML**: Uses proper `<input type="text">` element for screen reader compatibility
- **Focus Management**: Supports keyboard navigation with visible focus indicators
- **Label Association**: Automatically links with FormControl labels through proper ID associations
- **ARIA Attributes**: Inherits ARIA attributes through the FormControl integration for validation states
- **Error Indication**: Visual and semantic error states for assistive technologies
- **Icon Labels**: Icon attachments are properly labeled and linked to the input via htmlFor attributes

### Best Practices
- Always provide descriptive placeholder text or use with FormControl.Label
- Use hasError prop consistently with FormControl for validation feedback
- Ensure sufficient color contrast for all visual variants
- Test keyboard navigation and screen reader compatibility
- Provide meaningful error messages through FormControl.Error

## Related Components

- **FormControl**: Essential companion for labels, validation, and error handling
- **Icon**: Used for icon prop values throughout the attachment system  
- **Button**: Commonly used in endSlot for action-enhanced inputs
- **Badge**: Frequently used in slots for tag-based or categorized inputs
- **View**: Layout component that works well with TextField alignment
- **Text**: Typography component for form instructions and labels
- **TextField.Aligner**: Specialized layout component for consistent TextField positioning

The TextField serves as the foundation for most text-based form interactions and integrates deeply with the reshaped form ecosystem for comprehensive user input experiences.