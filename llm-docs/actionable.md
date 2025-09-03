# Actionable Component

## Component Name
Actionable

## Brief Description
A flexible utility component that provides interactive behavior for any content, automatically rendering as appropriate HTML elements (button, link, or span) based on provided props.

## Keywords
Interactive Element, Button, Link, Accessibility, Click Handler, Keyboard Navigation, Focus Management, Semantic HTML

## Usage Description
The Actionable component serves as a universal wrapper for interactive content in the Reshaped design system. It intelligently determines the most appropriate HTML element to render based on the props provided - becoming a `<button>` when given an onClick handler, an `<a>` when given an href, or a semantically correct element with proper ARIA roles and keyboard support for custom interactions.

This component is particularly useful when building complex interactive elements that need consistent behavior across different contexts, such as card components that should be clickable, custom form controls, or interface elements that need to work with both mouse and keyboard interactions. It handles all the accessibility concerns, focus management, and semantic HTML requirements automatically.

The Actionable component excels in scenarios where you need interactive behavior but want to maintain flexibility in the underlying HTML structure, ensuring proper accessibility and keyboard navigation regardless of the final rendered element.

## Props Documentation

### children
- **Type:** `React.ReactNode`
- **Required:** No
- **Default:** `undefined`
- **Description:** The content to render inside the actionable element. Can be any valid React node including text, elements, or components.

### onClick
- **Type:** `(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void`
- **Required:** No
- **Default:** `undefined`
- **Description:** Click handler function that is called when the element is clicked or activated via keyboard (Space or Enter). When provided, the component renders as a button or button-like element.

### href
- **Type:** `string`
- **Required:** No
- **Default:** `undefined`
- **Description:** URL for link functionality. When provided, the component renders as an anchor tag (`<a>`). Takes precedence over onClick behavior.

### type
- **Type:** `React.ButtonHTMLAttributes<HTMLButtonElement>["type"]`
- **Required:** No
- **Default:** `"button"`
- **Description:** The button type when rendering as a button element. Common values include "button", "submit", and "reset".

### disabled
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** Whether the element should be disabled. For buttons, sets the disabled attribute. For links, removes the href attribute and prevents navigation.

### touchHitbox
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When enabled, adds an invisible touch target overlay with minimum 24px dimensions for improved mobile accessibility and touch interaction.

### fullWidth
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When enabled, the element will take the full width of its container.

### insetFocus
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** Modifies the focus ring to appear inset rather than the default outset style. Useful for elements within containers where an inward focus indicator is more appropriate.

### disableFocusRing
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** Completely disables the focus ring visualization. Should be used carefully and only when alternative focus indicators are provided.

### borderRadius
- **Type:** `"inherit"`
- **Required:** No
- **Default:** `undefined`
- **Description:** When set to "inherit", the focus ring will inherit the border radius from child elements rather than applying its own. Useful for maintaining visual consistency with rounded content.

### stopPropagation
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When enabled, prevents the click event from bubbling up to parent elements. Useful in nested interactive scenarios.

### as
- **Type:** `keyof React.JSX.IntrinsicElements`
- **Required:** No
- **Default:** `undefined`
- **Description:** Allows overriding the default HTML element that gets rendered. For example, setting `as="label"` will render a label element instead of the automatically determined element.

### className
- **Type:** `string | string[] | (string | null | undefined | false)[]`
- **Required:** No
- **Default:** `undefined`
- **Description:** Additional CSS class names to apply to the root element. Supports arrays and conditional classes.

### attributes
- **Type:** `React.JSX.IntrinsicElements["button"] & Omit<React.JSX.IntrinsicElements["a"], keyof React.JSX.IntrinsicElements["button"]> & { ref?: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null> }`
- **Required:** No
- **Default:** `undefined`
- **Description:** Additional HTML attributes to pass through to the underlying element. Includes support for data attributes, event handlers, and accessibility properties.

## Code Examples

### Basic Button Usage
```tsx
import { Actionable } from 'reshaped';

function BasicButton() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <Actionable onClick={handleClick}>
      Click me
    </Actionable>
  );
}
```
This example shows the most basic usage of Actionable as a button element with a click handler.

### Link Usage
```tsx
import { Actionable } from 'reshaped';

function LinkExample() {
  return (
    <Actionable href="https://example.com" attributes={{ target: "_blank" }}>
      Visit Example
    </Actionable>
  );
}
```
Demonstrates how Actionable automatically becomes an anchor tag when provided with an href prop.

### Custom Interactive Element
```tsx
import { Actionable } from 'reshaped';

function CustomCard() {
  const handleCardClick = () => {
    // Handle card interaction
  };

  return (
    <Actionable 
      onClick={handleCardClick}
      as="article"
      fullWidth
      touchHitbox
      className="custom-card"
    >
      <h3>Card Title</h3>
      <p>Card content that is fully clickable</p>
    </Actionable>
  );
}
```
Shows how to create a custom interactive element with touch optimization and custom semantics.

### Form Integration
```tsx
import { Actionable } from 'reshaped';

function FormExample() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
      <Actionable type="submit" onClick={() => console.log('Submit clicked')}>
        Submit Form
      </Actionable>
    </form>
  );
}
```
Demonstrates using Actionable as a form submit button with proper type attribute.

### Advanced Focus Management
```tsx
import { Actionable, View } from 'reshaped';

function FocusExample() {
  return (
    <View padding={4} borderRadius="large" backgroundColor="elevated">
      <Actionable 
        onClick={() => console.log('Clicked')}
        borderRadius="inherit"
        insetFocus
        fullWidth
      >
        <View borderRadius="large" padding={3}>
          Element with inherited border radius focus
        </View>
      </Actionable>
    </View>
  );
}
```
Shows advanced focus ring customization with border radius inheritance and inset focus styling.

### Disabled States
```tsx
import { Actionable } from 'reshaped';

function DisabledExample() {
  return (
    <div>
      <Actionable disabled onClick={() => console.log('Won\'t fire')} >
        Disabled Button
      </Actionable>
      
      <Actionable disabled href="https://example.com">
        Disabled Link
      </Actionable>
    </div>
  );
}
```
Demonstrates how disabled state works for both button and link variants.

## Related Components

**View**: Often used as a child of Actionable to provide styling and layout structure for interactive content.

**Button**: A higher-level component that uses Actionable internally but provides additional button-specific styling and variants.

**Link**: A specialized component for navigation that may use similar patterns to Actionable's link functionality.

**Card**: Frequently uses Actionable to make entire card areas interactive while maintaining proper accessibility.

**Menu components**: DropdownMenu, ContextMenu, and MenuItem components often use Actionable for their interactive triggers and items.

**Modal and Popover triggers**: These components commonly use Actionable for their trigger elements, benefiting from its flexible element rendering and accessibility features.