# Divider

A visual separator component that creates horizontal or vertical dividing lines between content sections.

## Keywords

Visual Separator, Line, Section Divider, Content Separator, Layout, Spacer, Boundary

## Usage Description

The Divider component provides a clean visual separation between different sections of content in your user interface. It renders as a thin horizontal or vertical line that helps organize content and improve visual hierarchy. The component is particularly useful in lists, forms, navigation menus, and content layouts where you need to create clear boundaries between different sections.

The Divider supports both horizontal and vertical orientations with responsive behavior, allowing you to adapt the orientation based on screen size or layout requirements. It can also display optional text labels positioned at the start, center, or end of the divider line, making it useful for sectioning content with descriptive headings.

For accessibility, the component implements proper ARIA semantics with role="separator" and appropriate aria-orientation attributes, ensuring screen readers can properly interpret the visual separation for users with disabilities.

## Props Documentation

### `vertical`
- **Type:** `boolean | Responsive<boolean>`
- **Required:** No
- **Default:** `false` (horizontal)
- **Description:** Controls the orientation of the divider. When false or undefined, creates a horizontal line. When true, creates a vertical line. Supports responsive values to change orientation at different breakpoints.
- **Examples:** `true`, `false`, `{ s: false, m: true }` (horizontal on small screens, vertical on medium and up)

### `blank`
- **Type:** `boolean`
- **Required:** No
- **Default:** `false`
- **Description:** When true, creates an invisible divider that takes up no visual space but maintains structural spacing. Useful for creating layout spacing without visible lines.

### `children`
- **Type:** `React.ReactNode`
- **Required:** No
- **Default:** `undefined`
- **Description:** Optional text content to display within the divider line. When provided, the divider will show the content as a label with the line extending on either side.

### `contentPosition`
- **Type:** `"start" | "center" | "end"`
- **Required:** No
- **Default:** `"center"`
- **Description:** Controls the horizontal alignment of the label content when children are provided. Only applies when children prop is used.

### `className`
- **Type:** `string | string[] | ClassNameValue[]`
- **Required:** No
- **Default:** `undefined`
- **Description:** Additional CSS class names to apply to the divider for custom styling.

### `attributes`
- **Type:** `Attributes<"hr">`
- **Required:** No
- **Default:** `undefined`
- **Description:** Additional HTML attributes to apply to the divider element, extending standard hr element attributes with data attributes support.

## Code Examples

### Basic Horizontal Divider
```tsx
import { Divider } from 'reshaped';

function ContentSeparator() {
  return (
    <div>
      <div>First section content</div>
      <Divider />
      <div>Second section content</div>
    </div>
  );
}
```
Creates a simple horizontal line divider between content sections.

### Vertical Divider
```tsx
import { Divider, View } from 'reshaped';

function SideBySideLayout() {
  return (
    <View direction="row" align="stretch" gap={3}>
      <div>Left content</div>
      <Divider vertical />
      <div>Right content</div>
    </View>
  );
}
```
Creates a vertical divider between horizontally arranged content.

### Responsive Divider Orientation
```tsx
import { Divider, View } from 'reshaped';

function ResponsiveDivider() {
  return (
    <View direction={{ s: "column", m: "row" }} align="stretch" gap={3}>
      <div>Content block one</div>
      <Divider vertical={{ s: false, m: true }} />
      <div>Content block two</div>
    </View>
  );
}
```
Creates a divider that is horizontal on small screens and vertical on medium screens and above, adapting to the parent container's flex direction.

### Divider with Label Content
```tsx
import { Divider } from 'reshaped';

function LabeledSections() {
  return (
    <div>
      <div>User information section</div>
      <Divider>Account Settings</Divider>
      <div>Account settings form</div>
      <Divider contentPosition="start">Additional Options</Divider>
      <div>Advanced options</div>
    </div>
  );
}
```
Shows dividers with text labels, demonstrating both centered and start-aligned content positioning.

### Blank Divider for Spacing
```tsx
import { Divider } from 'reshaped';

function InvisibleSpacer() {
  return (
    <div>
      <div style={{ backgroundColor: 'blue', padding: '10px' }}>
        Box content
      </div>
      <Divider blank />
      <div>
        This content has spacing from the box above without a visible line
      </div>
    </div>
  );
}
```
Uses a blank divider to create structural spacing without a visible line, useful when you need consistent spacing but don't want visual separation.

## Related Components

- **View**: Layout container component often used with Divider to create structured content sections and handle responsive direction changes
- **Text**: Used internally by Divider to render label content with consistent typography styling
- **Card**: Often contains dividers to separate different sections of card content
- **List**: Commonly uses dividers between list items for visual separation
- **ActionBar**: May include dividers to separate different groups of actions
- **Breadcrumbs**: Uses dividers (typically styled differently) to separate navigation levels