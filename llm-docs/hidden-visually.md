# HiddenVisually

A utility component that visually hides content while keeping it accessible to screen readers and other assistive technologies.

## Keywords

Screen Reader, Accessibility, Hidden Content, Assistive Technology, Visually Hidden, SR-Only, A11y, Utility

## Usage Description

The HiddenVisually component is an essential accessibility utility that hides content from visual display while preserving its availability to screen readers and other assistive technologies. This component is crucial for implementing inclusive web experiences where certain information needs to be available to assistive technology users but would be redundant or distracting in the visual interface.

Use HiddenVisually when you need to provide additional context or instructions that are important for screen reader users but not necessary for sighted users. Common use cases include skip links, form field descriptions, status updates, or contextual information that clarifies the purpose of interactive elements. This component follows modern accessibility best practices by using CSS techniques that properly hide content from visual rendering while maintaining its presence in the accessibility tree.

The component is particularly valuable in complex UI patterns where visual cues provide context that non-visual users might miss. By wrapping descriptive text or instructions in HiddenVisually, you ensure that all users receive equivalent information regardless of how they access your application.

## Props Documentation

### children
- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The content to be visually hidden but accessible to screen readers. Can be any valid React node including text, elements, or components.

## Code Examples

### Basic Usage
```tsx
import { HiddenVisually } from 'reshaped';

function SkipLink() {
  return (
    <a href="#main-content">
      <HiddenVisually>Skip to main content</HiddenVisually>
    </a>
  );
}
```

This example creates a skip link that is only visible to screen reader users, allowing them to quickly navigate past navigation elements to the main content.

### Form Field Description
```tsx
import { HiddenVisually, TextField } from 'reshaped';

function PasswordField() {
  return (
    <div>
      <TextField
        type="password"
        placeholder="Enter password"
        aria-describedby="password-help"
      />
      <HiddenVisually id="password-help">
        Password must be at least 8 characters long and contain both letters and numbers
      </HiddenVisually>
    </div>
  );
}
```

This example provides password requirements that are accessible to screen readers while keeping the visual interface clean.

### Status Announcements
```tsx
import { HiddenVisually, Button } from 'reshaped';
import { useState } from 'react';

function SaveButton() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Save logic here
    await saveData();
    setIsSaving(false);
    setIsSaved(true);
  };

  return (
    <div>
      <Button onClick={handleSave} disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save'}
      </Button>
      {isSaving && (
        <HiddenVisually>Saving your changes, please wait</HiddenVisually>
      )}
      {isSaved && (
        <HiddenVisually>Your changes have been saved successfully</HiddenVisually>
      )}
    </div>
  );
}
```

This example announces save status updates to screen reader users without cluttering the visual interface.

### Contextual Button Labels
```tsx
import { HiddenVisually, Button } from 'reshaped';

function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Button>
        Add to Cart
        <HiddenVisually> - {product.name}</HiddenVisually>
      </Button>
    </div>
  );
}
```

This example adds product context to the button label for screen reader users, making it clear which product will be added to the cart.

### Loading States
```tsx
import { HiddenVisually, Loader } from 'reshaped';

function DataTable({ isLoading, data }) {
  return (
    <div>
      {isLoading && (
        <div>
          <Loader />
          <HiddenVisually>Loading table data, please wait</HiddenVisually>
        </div>
      )}
      {!isLoading && (
        <table>
          {/* Table content */}
        </table>
      )}
    </div>
  );
}
```

This example provides screen reader users with information about loading states that might not be immediately obvious from visual indicators alone.

## Related Components

- **Text**: Use for content that should be both visually and programmatically available
- **Loader**: Often paired with HiddenVisually to announce loading states
- **Button**: Frequently enhanced with HiddenVisually for additional context
- **TextField**: Can be paired with HiddenVisually for form field descriptions and instructions

## Technical Implementation

The HiddenVisually component uses CSS properties that effectively hide content from visual display while maintaining accessibility:

```css
.root {
  clip-path: inset(1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

This CSS approach is preferred over `display: none` or `visibility: hidden` because it keeps the content in the accessibility tree, allowing screen readers and other assistive technologies to access it. The technique uses modern CSS properties for reliable cross-browser support and follows current accessibility best practices.

## Accessibility Considerations

- The component maintains content in the accessibility tree for screen reader access
- Uses modern CSS techniques that are well-supported across assistive technologies
- Content remains focusable if it contains interactive elements
- Properly announced by all major screen readers
- Does not interfere with keyboard navigation or other assistive technology features

## Best Practices

1. Use sparingly - only hide content that truly adds value for screen reader users
2. Keep hidden content concise and meaningful
3. Test with actual screen readers to ensure proper announcement
4. Consider the context in which hidden content will be announced
5. Use semantic markup within hidden content when appropriate
6. Combine with ARIA attributes like `aria-describedby` for form fields