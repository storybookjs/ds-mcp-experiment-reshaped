# TextField

**Brief Description**: A flexible text input component that supports various configurations including icons, affixes, slots, and integration with form controls.

**Keywords**: Text Input, Form Field, Input Field, Icon Input, Prefix/Suffix, Text Entry, Form Control, User Input

**Usage Description**: The TextField component is a versatile input field designed for collecting text-based user input in forms and interfaces. It serves as a foundational form element that can be customized with icons, prefixes, suffixes, and slots to create rich input experiences.

Use TextField when you need to collect single-line or multiline text input from users. It supports both controlled and uncontrolled patterns, making it suitable for various React state management approaches.

## Props Documentation

### Core Props
- **name** (`string`) - **Required** - The name attribute for the input field
- **id** (`string`) - Optional - Unique identifier for the input element

### Value Management
- **value** (`string`) - Optional (Controlled mode) - The controlled value of the input
- **defaultValue** (`string`) - Optional (Uncontrolled mode) - The initial value for uncontrolled inputs

### Appearance & Behavior
- **size** (`G.Responsive<"small" | "medium" | "large" | "xlarge">`) - Optional - Default: `"medium"` - Controls the input field size
- **variant** (`"outline" | "faded" | "headless"`) - Optional - Default: `"outline"` - Visual style variant
- **placeholder** (`string`) - Optional - Placeholder text displayed when input is empty
- **disabled** (`boolean`) - Optional - Disables the input field

### Visual Attachments
- **icon** (`IconProps["svg"]`) - Optional - Start position icon
- **endIcon** (`IconProps["svg"]`) - Optional - End position icon
- **prefix** (`React.ReactNode`) - Optional - Text or element displayed before the input value
- **suffix** (`React.ReactNode`) - Optional - Text or element displayed after the input value
- **startSlot** (`React.ReactNode`) - Optional - Complex content positioned at the start of the input
- **endSlot** (`React.ReactNode`) - Optional - Complex content positioned at the end of the input

## Code Examples

### Basic Usage
```tsx
import { TextField } from 'reshaped';

// Simple text input
<TextField 
  name="username" 
  placeholder="Enter your username" 
/>
```

### With Icons and Affixes
```tsx
import { TextField } from 'reshaped';
import SearchIcon from '../icons/Search';

// Search input with icons
<TextField 
  name="search"
  placeholder="Search products..."
  icon={SearchIcon}
  prefix="🔍"
/>

// Price input with currency prefix and unit suffix
<TextField 
  name="price"
  placeholder="0.00"
  prefix="$"
  suffix="USD"
/>
```

### With Slots for Complex Content
```tsx
import { TextField, Button } from 'reshaped';

// End slot with action button
<TextField 
  name="message"
  placeholder="Type your message..."
  endSlot={
    <Button 
      size="small" 
      icon={SendIcon}
      onClick={handleSend}
    />
  }
/>
```

## Related Components

- **FormControl** - Provides labels, helper text, and error messaging context for TextField
- **Icon** - Used for the `icon` and `endIcon` props to display visual indicators
- **Button** - Commonly used in `endSlot` for action buttons like submit or clear
- **Badge** - Often used in `startSlot` or `endSlot` for tags or status indicators