# Hidden

## Component Name
Hidden

## Brief Description
A utility component for controlling element visibility across different viewport sizes with responsive breakpoints.

## Keywords
Visibility, Responsive Design, Layout Control, Breakpoints, Display Control, Media Queries, Utility Component, Mobile First

## Usage Description

The Hidden component provides a declarative way to control element visibility across different viewport sizes in responsive designs. It's particularly useful for creating adaptive user interfaces where certain content should only appear on specific screen sizes.

This component leverages a mobile-first approach with responsive breakpoints (s, m, l, xl) to show or hide content based on viewport size. You can use it to hide navigation elements on mobile, show different content layouts for desktop versus mobile, or create responsive design patterns where elements appear or disappear at specific breakpoints.

The Hidden component supports both complete element removal from the DOM (using `display: none`) and visual hiding while maintaining layout space (using `visibility: hidden`). This flexibility makes it suitable for various use cases, from performance optimization by removing unused elements to maintaining layout consistency while hiding content.

## Props Documentation

### `hide`
- **Type**: `boolean | { s?: boolean; m?: boolean; l?: boolean; xl?: boolean }`
- **Required**: No
- **Default**: `undefined`
- **Description**: Controls whether the element should be hidden. Can be a boolean for all viewports or a responsive object specifying visibility per breakpoint. When `true`, the element is completely removed from the layout using `display: none`. The responsive object allows fine-grained control where `s` represents small screens (mobile), `m` for medium (tablet), `l` for large (desktop), and `xl` for extra large screens.
- **Example values**: 
  - `true` - Hide on all viewports
  - `{ s: true, m: false }` - Hide on small screens, show on medium and up
  - `{ s: false, m: true, l: false }` - Show on small and large+, hide on medium

### `visibility`
- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When `true` and used with `hide`, changes the hiding behavior from `display: none` to `visibility: hidden`. This maintains the element's layout space while making it invisible. The element still occupies its original space in the document flow but is not visible or interactive.
- **Example values**: `true`, `false`

### `as`
- **Type**: `keyof React.JSX.IntrinsicElements`
- **Required**: No
- **Default**: `"div"`
- **Description**: Specifies the HTML element type to render as the root element. This allows semantic flexibility while maintaining the hiding functionality.
- **Example values**: `"div"`, `"span"`, `"section"`, `"article"`, `"header"`, `"footer"`

### `children`
- **Type**: `React.ReactNode`
- **Required**: Yes
- **Default**: N/A
- **Description**: The content to be conditionally hidden. Can be any valid React node including text, elements, or other components.

## Code Examples

### Basic Usage - Hide on All Viewports
```tsx
import { Hidden } from 'reshaped';

function MyComponent() {
  return (
    <div>
      <p>This is always visible</p>
      <Hidden hide={true}>
        <p>This content is completely hidden</p>
      </Hidden>
    </div>
  );
}
```
This example demonstrates the simplest usage where content is hidden across all viewport sizes.

### Responsive Visibility Control
```tsx
import { Hidden } from 'reshaped';

function ResponsiveLayout() {
  return (
    <div>
      {/* Show only on mobile */}
      <Hidden hide={{ s: false, m: true }}>
        <nav>Mobile Navigation</nav>
      </Hidden>
      
      {/* Show only on tablet and desktop */}
      <Hidden hide={{ s: true, m: false }}>
        <nav>Desktop Navigation</nav>
      </Hidden>
      
      {/* Hide only on medium screens */}
      <Hidden hide={{ s: false, m: true, l: false }}>
        <aside>Sidebar Content</aside>
      </Hidden>
    </div>
  );
}
```
This example shows how to create different content layouts for different screen sizes using responsive breakpoints.

### Using Visibility Mode
```tsx
import { Hidden } from 'reshaped';

function LayoutWithSpacing() {
  return (
    <div className="grid">
      <div>Column 1</div>
      <Hidden hide={true} visibility={true}>
        <div>Column 2 - Hidden but maintains space</div>
      </Hidden>
      <div>Column 3</div>
    </div>
  );
}
```
This example demonstrates using the `visibility` prop to hide content while preserving layout spacing, useful for maintaining grid alignment.

### Custom HTML Element
```tsx
import { Hidden } from 'reshaped';

function SemanticHiding() {
  return (
    <article>
      <h1>Article Title</h1>
      <Hidden as="section" hide={{ s: true, l: false }}>
        <h2>Desktop-only Section</h2>
        <p>This section appears only on large screens and up.</p>
      </Hidden>
    </article>
  );
}
```
This example shows using the `as` prop to render the Hidden component as a semantic HTML element while maintaining responsive behavior.

### Complex Responsive Pattern
```tsx
import { Hidden } from 'reshaped';

function AdaptiveInterface() {
  return (
    <div>
      {/* Mobile-first approach: show on small, hide on medium, show again on xl */}
      <Hidden hide={{ s: false, m: true, xl: false }}>
        <button>Compact Action Button</button>
      </Hidden>
      
      {/* Show only on medium and large screens */}
      <Hidden hide={{ s: true, m: false, l: false, xl: true }}>
        <div>
          <button>Full Action Button</button>
          <span>with description text</span>
        </div>
      </Hidden>
    </div>
  );
}
```
This example demonstrates a complex responsive pattern where content visibility changes multiple times across different breakpoints.

## Related Components

### HiddenVisually
A related component specifically designed for screen reader accessibility. While `Hidden` controls visual and layout visibility, `HiddenVisually` hides content visually while keeping it accessible to assistive technologies.

### Container
Often used together with Hidden to create responsive container layouts where different container configurations appear at different breakpoints.

### Flyout and Modal
These overlay components often use Hidden internally or in conjunction to control when certain trigger elements or fallback content should be visible based on screen size.

### Responsive Layout Components
Components like Grid, Stack, and other layout utilities work well with Hidden to create comprehensive responsive designs where both layout and content visibility adapt to screen size.