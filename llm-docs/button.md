# Button

A versatile button component for user interactions with comprehensive styling options and built-in loading states.

## Keywords

Button, Action, Click, Interactive, Form Control, Navigation, Loading, Icon

## Usage Description

The Button component is a fundamental interactive element used throughout applications for triggering actions, submitting forms, and navigating between pages or views. It provides extensive customization options through variants, colors, and sizes to fit different design contexts and interaction patterns.

Use Button for primary actions like form submissions, confirmation dialogs, and call-to-action elements. The component supports both button and link behaviors through the `href` prop, making it suitable for navigation actions as well. With built-in loading states and accessibility features, it handles common interaction patterns out of the box.

The component is particularly useful in design systems where consistent styling and behavior across different button types is essential. It supports responsive sizing, elevation effects, and can be composed with other components through its Group and Aligner sub-components.

## Props Documentation

### Core Props

- **variant** (`"solid" | "outline" | "ghost" | "faded"`) - Optional, default: `"solid"`
  - Controls the visual style of the button
  - `solid`: Filled background with strong contrast
  - `outline`: Transparent background with border
  - `ghost`: Transparent background, no border
  - `faded`: Semi-transparent background

- **color** (`"primary" | "critical" | "positive" | "neutral" | "media" | "inherit"`) - Optional, default: `"neutral"`
  - Defines the color theme of the button
  - `primary`: Brand primary color
  - `critical`: Error/danger state color
  - `positive`: Success/confirmation color
  - `neutral`: Default neutral color
  - `media`: White on colored backgrounds
  - `inherit`: Inherits color from parent context

- **size** (`Responsive<"xlarge" | "large" | "medium" | "small">`) - Optional, default: `"medium"`
  - Controls button dimensions and typography
  - Supports responsive values: `{ s: "large", m: "medium" }`

### Icon Props

- **icon** (`React.ReactElement | React.ComponentType`) - Optional
  - Icon displayed at the start of the button
  - Automatically sized based on button size

- **endIcon** (`React.ReactElement | React.ComponentType`) - Optional
  - Icon displayed at the end of the button
  - Can be used alone or with start icon

### Layout Props

- **fullWidth** (`Responsive<boolean>`) - Optional, default: `false`
  - Makes button span full width of container
  - Supports responsive values

- **rounded** (`boolean`) - Optional, default: `false`
  - Applies circular border radius
  - Ideal for icon-only buttons

- **elevated** (`boolean`) - Optional, default: `false`
  - Adds drop shadow for elevated appearance
  - Not applicable with ghost variant

### State Props

- **loading** (`boolean`) - Optional, default: `false`
  - Shows loading spinner and hides content
  - Automatically disables interaction

- **loadingAriaLabel** (`string`) - Optional
  - Accessible label for loading state
  - Required when loading is true

- **disabled** (`boolean`) - Optional, default: `false`
  - Disables button interaction and applies disabled styling

- **highlighted** (`boolean`) - Optional, default: `false`
  - Forces active/pressed visual state

### Interaction Props

- **onClick** (`(e: MouseEvent | KeyboardEvent) => void`) - Optional
  - Click handler function

- **href** (`string`) - Optional
  - URL for link behavior (renders as anchor)

- **type** (`"button" | "submit" | "reset"`) - Optional
  - HTML button type attribute

- **stopPropagation** (`boolean`) - Optional, default: `false`
  - Prevents event bubbling

### Advanced Props

- **as** (`keyof React.JSX.IntrinsicElements`) - Optional
  - Custom HTML element to render as

- **className** (`ClassName`) - Optional
  - Additional CSS classes

- **attributes** (`Attributes<"button">`) - Optional
  - Additional HTML attributes including data attributes

- **children** (`React.ReactNode`) - Optional
  - Button content (text, components, etc.)

## Code Examples

### Basic Usage

```tsx
import Button from 'reshaped/Button';

// Simple button
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>

// Primary button with icon
<Button
  variant="solid"
  color="primary"
  icon={<PlusIcon />}
  onClick={handleSubmit}
>
  Add Item
</Button>
```

### Variants and Colors

```tsx
// Different button variants
<Button variant="solid" color="primary">Solid Primary</Button>
<Button variant="outline" color="critical">Outline Critical</Button>
<Button variant="ghost" color="positive">Ghost Positive</Button>
<Button variant="faded" color="neutral">Faded Neutral</Button>

// Media color for overlays
<div style={{ backgroundColor: 'blue', padding: '1rem' }}>
  <Button color="media">Media Button</Button>
</div>
```

### Size and Responsive Behavior

```tsx
// Different sizes
<Button size="small">Small</Button>
<Button size="medium">Medium (default)</Button>
<Button size="large">Large</Button>
<Button size="xlarge">Extra Large</Button>

// Responsive sizing
<Button size={{ s: "large", m: "medium", l: "small" }}>
  Responsive Button
</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
<Button fullWidth={{ s: true, m: false }}>Responsive Width</Button>
```

### Loading States

```tsx
// Loading button
<Button
  loading
  loadingAriaLabel="Submitting form"
  disabled={isSubmitting}
  onClick={handleSubmit}
>
  Submit Form
</Button>

// Icon-only loading button
<Button
  icon={<SaveIcon />}
  loading
  loadingAriaLabel="Saving"
  rounded
  attributes={{ "aria-label": "Save document" }}
/>
```

### Icon Configurations

```tsx
// Start icon
<Button icon={<SearchIcon />}>Search</Button>

// End icon
<Button endIcon={<ExternalLinkIcon />}>Open Link</Button>

// Both icons
<Button
  icon={<DownloadIcon />}
  endIcon={<ChevronDownIcon />}
>
  Download
</Button>

// Icon-only button
<Button
  icon={<MenuIcon />}
  rounded
  attributes={{ "aria-label": "Open menu" }}
/>
```

### Button Groups

```tsx
// Grouped buttons
<Button.Group>
  <Button variant="outline">Cancel</Button>
  <Button color="primary">Submit</Button>
  <Button icon={<MoreIcon />} />
</Button.Group>

// Color variants in groups
<Button.Group>
  <Button color="primary">One</Button>
  <Button color="primary">Two</Button>
  <Button color="primary">Three</Button>
</Button.Group>
```

### Button Alignment

```tsx
// Align button within layout
<div style={{ display: 'flex', padding: '1rem' }}>
  <div style={{ flex: 1 }}>Content</div>
  <Button.Aligner side="top">
    <Button icon={<CloseIcon />} variant="ghost" />
  </Button.Aligner>
</div>

// Multiple alignment sides
<Button.Aligner side={["top", "end"]}>
  <Button icon={<EditIcon />} variant="ghost" />
</Button.Aligner>
```

## Accessibility Considerations

- **Keyboard Navigation**: Supports standard keyboard interaction (Enter/Space for activation)
- **Focus Management**: Proper focus ring styling and management
- **ARIA Labels**: Use `loadingAriaLabel` for loading states and `aria-label` attribute for icon-only buttons
- **Semantic HTML**: Renders as `<button>` by default or `<a>` when `href` is provided
- **Disabled States**: Properly communicates disabled state to screen readers
- **Loading States**: Accessible loading indication with proper ARIA labeling

## Related Components

- **Button.Group**: Groups multiple buttons with connected styling and proper spacing
- **Button.Aligner**: Utility component for positioning buttons within layouts using alignment sides
- **Actionable**: Base interactive component that Button extends, providing core interaction patterns
- **Icon**: Used internally for rendering button icons with proper sizing
- **Loader**: Used internally for loading state indication
- **ToggleButton**: Alternative for state-based button interactions
- **ToggleButtonGroup**: For grouped toggle button behaviors
