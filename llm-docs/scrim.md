# Scrim

A component that overlays content on top of a background with gradient transitions and positioning options.

## Keywords

Overlay, Background, Gradient, Modal, Dialog, Backdrop, Content Layer, Positioning

## Usage Description

The Scrim component creates an overlay effect that places content on top of a background element with customizable positioning and gradient transitions. It's commonly used in modal dialogs, image overlays, card overlays, and any scenario where you need to display content over a background with visual hierarchy.

The component provides flexible positioning options including center coverage, edge alignment (top, bottom, start, end), and gradient transitions that enhance readability and visual appeal. The scrim automatically handles pointer events, ensuring that background elements are not interactive while allowing interaction with the overlay content.

Scrim is particularly useful for creating hero sections with text overlays, modal dialogs with backdrop effects, and any interface pattern that requires layered content presentation with proper visual separation.

## Props Documentation

### children

- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The content to be displayed inside the scrim overlay. This content will be positioned according to the position prop and will have pointer events enabled.

### backgroundSlot

- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The background element that the scrim will overlay. When provided, the scrim will position itself absolutely over this background. If not provided, the scrim will size itself based on its parent container.

### position

- **Type**: `"full" | "top" | "bottom" | "start" | "end"`
- **Required**: No
- **Default**: `"cover"` (based on CSS implementation)
- **Description**: Controls the positioning and gradient direction of the scrim overlay. "full"/"cover" centers the content with a solid backdrop, "top" positions content at the top with a downward gradient, "bottom" positions at bottom with upward gradient, "start" positions at the beginning edge with gradient toward end, "end" positions at the ending edge with gradient toward start.

### fill

- **Type**: `boolean`
- **Required**: No
- **Default**: `undefined`
- **Description**: Controls whether the scrim should fill its container (note: this prop is defined in types but not implemented in the current JavaScript code).

### scrimClassName

- **Type**: `G.ClassName` (string | null | undefined | false | array of these)
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS classes to apply specifically to the inner scrim overlay element. This allows for custom styling of the scrim layer itself.

### className

- **Type**: `G.ClassName` (string | null | undefined | false | array of these)
- **Required**: No
- **Default**: `undefined`
- **Description**: CSS classes to apply to the root container element. Useful for additional styling or layout modifications.

### attributes

- **Type**: `G.Attributes<"div">` (extends React div element attributes)
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to pass to the root div element, including data attributes, ARIA attributes, and standard HTML div properties for accessibility and functionality.

## Code Examples

### Basic Scrim with Background

```tsx
import { Scrim } from "reshaped";

// Simple scrim overlay with background image
<Scrim backgroundSlot={<img src="hero-image.jpg" alt="Hero" />}>
  <h1>Welcome to Our Site</h1>
  <p>Discover amazing content</p>
</Scrim>;
```

This example demonstrates the most basic usage with a background image and centered content overlay.

### Positioned Scrim Overlays

```tsx
import { Scrim } from 'reshaped';

// Bottom-positioned scrim for image captions
<Scrim
  position="bottom"
  backgroundSlot={<img src="gallery-image.jpg" alt="Gallery item" />}
>
  <h3>Image Title</h3>
  <p>Image description text</p>
</Scrim>

// Top-positioned scrim for headers
<Scrim
  position="top"
  backgroundSlot={<div style={{ height: 300, background: 'linear-gradient(45deg, blue, purple)' }} />}
>
  <nav>
    <a href="/home">Home</a>
    <a href="/about">About</a>
  </nav>
</Scrim>
```

These examples show how different position values create various overlay effects with appropriate gradient transitions.

### Scrim Without Background Slot

```tsx
import { Scrim } from "reshaped";

// Scrim that sizes to its parent container
<div
  style={{ height: 400, position: "relative", backgroundImage: "url(bg.jpg)" }}
>
  <Scrim>
    <h2>Content Over Background</h2>
    <button>Call to Action</button>
  </Scrim>
</div>;
```

This demonstrates using Scrim without a backgroundSlot, where it adapts to its parent container's size and positioning.

### Custom Styled Scrim

```tsx
import { Scrim } from "reshaped";

// Scrim with custom styling and accessibility attributes
<Scrim
  className="custom-scrim-root"
  scrimClassName="custom-scrim-overlay"
  attributes={{
    role: "dialog",
    "aria-labelledby": "modal-title",
    "data-testid": "modal-scrim",
  }}
  backgroundSlot={<div className="modal-backdrop" />}
>
  <div id="modal-title">
    <h2>Modal Dialog</h2>
    <p>This is modal content with custom styling</p>
    <button>Close</button>
  </div>
</Scrim>;
```

This example shows advanced usage with custom CSS classes, accessibility attributes, and modal dialog implementation.

### Side-positioned Scrims

```tsx
import { Scrim } from 'reshaped';

// Start-positioned scrim for side panels
<Scrim
  position="start"
  backgroundSlot={<img src="wide-image.jpg" alt="Wide content" />}
>
  <div className="side-panel">
    <h3>Side Information</h3>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
      <li>Feature 3</li>
    </ul>
  </div>
</Scrim>

// End-positioned scrim
<Scrim
  position="end"
  backgroundSlot={<video src="background-video.mp4" autoPlay muted />}
>
  <aside>
    <h4>Related Content</h4>
    <p>Additional information appears here</p>
  </aside>
</Scrim>
```

These examples demonstrate side-positioned scrims useful for panels and secondary content areas.

## Accessibility Considerations

- The scrim automatically handles pointer events, making background content non-interactive while preserving interactivity for overlay content
- When using as a modal backdrop, include appropriate ARIA attributes via the `attributes` prop (role="dialog", aria-labelledby, aria-describedby)
- Ensure sufficient color contrast between scrim content and the background, especially with gradient overlays
- The component supports keyboard navigation through its content since pointer events are enabled on the content area
- Consider focus management when using Scrim for modal dialogs or overlays
- The gradient overlays help ensure text readability over various background images

## Related Components

- **Modal**: Scrim is often used as the backdrop component for modal dialogs and overlays
- **Card**: Can be combined with Card components for rich content overlays
- **Button**: Frequently contains interactive buttons and controls within the content area
- **Typography components**: Commonly used with Text, Heading, and other typography components for content presentation
- **Image**: Often used with Image components as the backgroundSlot for photo overlays and galleries
