# Overlay

**Component Name**: Overlay

**Brief Description**: A modal overlay component that creates a backdrop layer with focus management and accessibility features.

**Keywords**: Modal, Backdrop, Focus Trap, Portal, Overlay, Dialog, Accessibility, Keyboard Navigation

## Usage Description

The Overlay component is a fundamental building block for creating modal experiences in web applications. It renders a backdrop layer that typically contains other components like dialogs, modals, or popover content. The component handles complex modal behavior including focus management, scroll locking, keyboard navigation, and proper layering through portals.

This component is particularly useful when you need to temporarily interrupt the user's workflow to display important information, forms, or actions that require immediate attention. It provides a consistent foundation for building various modal experiences while ensuring accessibility standards are met through features like focus trapping, keyboard dismissal, and proper ARIA roles.

The Overlay component can be customized with different visual styles including transparency levels, blur effects, and overflow behavior. It supports both controlled and function-as-children patterns, making it flexible for various implementation approaches.

## Props Documentation

| Prop                  | Type                                                                   | Required | Default     | Description                                                                                                           |
| --------------------- | ---------------------------------------------------------------------- | -------- | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| `active`              | `boolean`                                                              | No       | `false`     | Controls whether the overlay is currently visible and active                                                          |
| `children`            | `React.ReactNode \| ((props: { active: boolean }) => React.ReactNode)` | No       | `undefined` | Content to render within the overlay. Can be a React node or a function that receives active state                    |
| `transparent`         | `boolean \| number`                                                    | No       | `false`     | Controls overlay background transparency. `true` makes it fully transparent, a number (0-1) sets partial transparency |
| `blurred`             | `boolean`                                                              | No       | `false`     | Applies a blur effect to the background content behind the overlay                                                    |
| `overflow`            | `"auto" \| "hidden"`                                                   | No       | `"hidden"`  | Controls overflow behavior of the overlay container                                                                   |
| `onClose`             | `(args: { reason: CloseReason }) => void`                              | No       | `undefined` | Callback fired when overlay should close. Receives reason: "overlay-click" or "escape-key"                            |
| `onAfterClose`        | `() => void`                                                           | No       | `undefined` | Callback fired after overlay close animation completes                                                                |
| `onOpen`              | `() => void`                                                           | No       | `undefined` | Callback fired when overlay opens (before animation)                                                                  |
| `onAfterOpen`         | `() => void`                                                           | No       | `undefined` | Callback fired after overlay open animation completes                                                                 |
| `disableCloseOnClick` | `boolean`                                                              | No       | `false`     | Prevents overlay from closing when clicking on the backdrop                                                           |
| `containerRef`        | `React.RefObject<HTMLElement \| null>`                                 | No       | `undefined` | Ref to container element to render overlay within (instead of document body)                                          |
| `className`           | `string \| string[]`                                                   | No       | `undefined` | Additional CSS classes to apply to the overlay root                                                                   |
| `attributes`          | `React.HTMLAttributes<HTMLDivElement>`                                 | No       | `undefined` | Additional HTML attributes to pass to the overlay root element                                                        |

### CloseReason Type

The `onClose` callback receives a reason parameter with one of these values:

- `"overlay-click"`: User clicked on the backdrop area
- `"escape-key"`: User pressed the Escape key

## Code Examples

### Basic Usage

```tsx
import { Overlay } from "reshaped";
import { useState } from "react";

function BasicOverlayExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Overlay</button>

      <Overlay active={isOpen} onClose={() => setIsOpen(false)}>
        <div
          style={{ background: "white", padding: "2rem", borderRadius: "8px" }}
        >
          <h2>Modal Content</h2>
          <p>This is content inside the overlay.</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      </Overlay>
    </>
  );
}
```

### Function as Children Pattern

```tsx
import { Overlay } from "reshaped";
import { useState } from "react";

function FunctionChildrenExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Dynamic Overlay</button>

      <Overlay active={isOpen} onClose={() => setIsOpen(false)}>
        {({ active }) => (
          <div className={`modal ${active ? "modal--visible" : ""}`}>
            <h2>Dynamic Content</h2>
            <p>Active state: {active ? "Open" : "Closed"}</p>
          </div>
        )}
      </Overlay>
    </>
  );
}
```

### Transparent Overlay

```tsx
import { Overlay } from "reshaped";
import { useState } from "react";

function TransparentOverlayExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Transparent Overlay</button>

      <Overlay
        active={isOpen}
        transparent={true}
        onClose={() => setIsOpen(false)}
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
        >
          <h2>Transparent Overlay</h2>
          <p>Background is fully transparent - content is still visible</p>
        </div>
      </Overlay>
    </>
  );
}
```

### Partial Transparency and Blur Effect

```tsx
import { Overlay } from "reshaped";
import { useState } from "react";

function BlurredOverlayExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Blurred Overlay</button>

      <Overlay
        active={isOpen}
        transparent={0.3} // 30% transparency
        blurred={true}
        onClose={() => setIsOpen(false)}
      >
        <div
          style={{
            background: "white",
            padding: "3rem",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <h2>Blurred Background</h2>
          <p>The background content is blurred and partially visible</p>
        </div>
      </Overlay>
    </>
  );
}
```

### Container-Scoped Overlay

```tsx
import { Overlay } from "reshaped";
import { useState, useRef } from "react";

function ContainerScopedExample() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "400px",
        border: "2px solid #ccc",
        overflow: "hidden",
      }}
    >
      <h3>Container Content</h3>
      <button onClick={() => setIsOpen(true)}>Open Scoped Overlay</button>

      <Overlay
        active={isOpen}
        containerRef={containerRef}
        onClose={() => setIsOpen(false)}
      >
        <div style={{ background: "white", padding: "2rem" }}>
          <h4>Scoped Modal</h4>
          <p>This overlay is contained within its parent element</p>
        </div>
      </Overlay>
    </div>
  );
}
```

### Advanced Usage with Lifecycle Callbacks

```tsx
import { Overlay } from "reshaped";
import { useState } from "react";

function AdvancedOverlayExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("closed");

  const handleClose = ({
    reason,
  }: {
    reason: "overlay-click" | "escape-key";
  }) => {
    console.log("Overlay closed via:", reason);
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <p>Status: {status}</p>
        <button onClick={() => setIsOpen(true)}>Open Advanced Overlay</button>
      </div>

      <Overlay
        active={isOpen}
        overflow="auto"
        disableCloseOnClick={false}
        onOpen={() => setStatus("opening")}
        onAfterOpen={() => setStatus("open")}
        onClose={handleClose}
        onAfterClose={() => setStatus("closed")}
      >
        <div
          style={{
            background: "white",
            padding: "2rem",
            margin: "2rem",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <h2>Advanced Modal</h2>
          <p>This modal has lifecycle callbacks and custom overflow behavior</p>
          {/* Long content for scrolling demo */}
          {Array.from({ length: 20 }, (_, i) => (
            <p key={i}>Content paragraph {i + 1}</p>
          ))}
        </div>
      </Overlay>
    </>
  );
}
```

## Accessibility Considerations

The Overlay component includes several built-in accessibility features:

### Focus Management

- **Focus Trapping**: When active, focus is trapped within the overlay content using the `TrapFocus` utility
- **Initial Focus**: Automatically focuses the first focusable element or elements with `role="dialog"` and `tabindex="-1"`
- **Focus Return**: Returns focus to the triggering element when overlay closes

### Keyboard Navigation

- **Escape Key**: Built-in Escape key handler to close the overlay (can be disabled via `disableCloseOnClick`)
- **Tab Navigation**: Focus moves cyclically through focusable elements within the overlay

### Screen Reader Support

- **ARIA Roles**: Root element has `role="button"` and `tabindex="-1"` for proper screen reader interaction
- **Semantic Structure**: Uses semantic HTML structure with proper nesting

### Scroll Management

- **Scroll Locking**: Prevents background scrolling when overlay is active (unless `transparent={true}`)
- **Container Isolation**: Properly handles scroll locking within containerized overlays

### Implementation Recommendations

1. **Dialog Content**: Wrap dialog content in elements with `role="dialog"` and `aria-labelledby`
2. **Close Buttons**: Provide visible close buttons with proper labels
3. **Descriptive Content**: Use `aria-describedby` to associate descriptive content
4. **Color Contrast**: Ensure sufficient contrast between overlay content and background

```tsx
// Recommended accessible implementation
<Overlay active={isOpen} onClose={() => setIsOpen(false)}>
  <div
    role="dialog"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    tabIndex={-1}
  >
    <h2 id="modal-title">Modal Title</h2>
    <p id="modal-description">Modal description content</p>
    <button aria-label="Close modal" onClick={() => setIsOpen(false)}>
      ×
    </button>
  </div>
</Overlay>
```

## Related Components

### Portal

The Overlay component internally uses a `Portal` component to render content outside the normal DOM hierarchy, ensuring proper layering and preventing z-index conflicts.

### TrapFocus Utility

Focus management is handled by the `TrapFocus` utility, which provides keyboard-accessible focus trapping within modal content.

### useToggle Hook

The internal state management leverages the `useToggle` hook pattern for managing rendered and visible states with proper animation timing.

### useScrollLock Hook

Scroll behavior is managed through the `useScrollLock` hook, which handles both document-level and container-scoped scroll prevention.

### Modal Components

The Overlay component serves as a foundation for higher-level modal components like Dialog, Drawer, or Popover components in the design system.

### Button Component

Commonly used together with Button components as trigger elements to open overlay content.
