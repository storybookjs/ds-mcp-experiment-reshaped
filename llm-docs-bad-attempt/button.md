# Button

**Brief Description**: A versatile interactive button component that supports multiple variants, colors, sizes, and states for triggering actions within the interface.

**Keywords**: Button, Action, Interactive, Clickable, Form Control, UI Control, Navigation

**Usage Description**: The Button component is a foundational interactive element designed to trigger actions, submit forms, or navigate users through the application. It provides extensive customization options through multiple variants (solid, outline, ghost, faded), color schemes, and sizes to maintain visual hierarchy and design consistency.

Use the Button component when you need users to perform actions like submitting forms, confirming dialogs, navigating to other pages, or triggering any user interaction. The component supports both button and anchor element behaviors, making it suitable for both action-triggering and navigation scenarios.

## Props Documentation

### Core Props
- **`children`** (`React.ReactNode`) - Optional - The content to display inside the button (text, components, etc.)
- **`onClick`** (`(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void`) - Optional - Click event handler
- **`href`** (`string`) - Optional - URL for anchor behavior (renders as link when provided)
- **`disabled`** (`boolean`) - Optional - Default: `false` - Disables the button and prevents interactions

### Button-Specific Props
- **`color`** (`"primary" | "critical" | "positive" | "neutral" | "media" | "inherit"`) - Optional - Default: `"neutral"` - Color scheme of the button
- **`variant`** (`"solid" | "outline" | "ghost" | "faded"`) - Optional - Default: `"solid"` - Visual style variant
- **`size`** (`G.Responsive<"xlarge" | "large" | "medium" | "small">`) - Optional - Default: `"medium"` - Button size, supports responsive values
- **`icon`** (`IconProps["svg"]`) - Optional - Icon element or component to display at the start of the button
- **`endIcon`** (`IconProps["svg"]`) - Optional - Icon element or component to display at the end of the button
- **`rounded`** (`boolean`) - Optional - Default: `false` - Applies rounded corners styling
- **`loading`** (`boolean`) - Optional - Default: `false` - Shows loading state with spinner
- **`fullWidth`** (`G.Responsive<boolean>`) - Optional - Default: `false` - Makes button take full container width, supports responsive values

## Code Examples

### Basic Usage
```tsx
import Button from 'reshaped/Button';

// Simple button
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>

// Primary button with icon
<Button color="primary" icon={IconZap}>
  Save Changes
</Button>
```

### Loading and Disabled States
```tsx
// Loading button
<Button 
  loading 
  loadingAriaLabel="Submitting form"
  onClick={handleSubmit}
>
  Submit
</Button>

// Disabled button
<Button disabled>
  Unavailable Action
</Button>
```

### Button Groups and Composition
```tsx
// Button group
<Button.Group>
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</Button.Group>
```

## Related Components

- **Actionable**: Base component that Button extends, providing core interactive functionality
- **Icon**: Used for the `icon` and `endIcon` props to display visual elements
- **Loader**: Displayed during loading states to indicate progress
- **View**: Often used in conjunction with Button for layout and spacing