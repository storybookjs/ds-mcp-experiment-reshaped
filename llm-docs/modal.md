# Modal

A versatile overlay component that presents content in a dialog above the main interface, with support for multiple positioning modes and touch gestures.

## Keywords

- Dialog
- Overlay
- Popup
- Drawer
- Touch Gestures
- Accessibility
- Focus Management
- Backdrop

## Usage Description

The Modal component is designed to temporarily interrupt the user's workflow to present important information, collect input, or display additional content. It provides a flexible solution for various modal patterns including centered dialogs, slide-out drawers from any edge, bottom sheets, and full-screen overlays.

The component is particularly well-suited for mobile experiences with built-in touch gesture support, allowing users to swipe-to-dismiss modals from edge positions. It includes comprehensive accessibility features with proper ARIA attributes, focus management, and keyboard navigation support.

Use Modal for confirmations, forms, detailed views, settings panels, or any content that requires the user's immediate attention while maintaining the context of the underlying interface.

## Props Documentation

### Core Props

- **children** (`React.ReactNode`, optional): The content to display inside the modal
- **active** (`boolean`, optional): Controls the visibility state of the modal. When true, the modal is shown; when false, it's hidden
- **position** (`Responsive<"center" | "end" | "bottom" | "start" | "full-screen">`, optional, default: `"center"`): Determines where the modal appears on screen:
  - `"center"`: Traditional centered modal dialog
  - `"start"`: Slide-in drawer from the left edge (right edge in RTL)
  - `"end"`: Slide-in drawer from the right edge (left edge in RTL)
  - `"bottom"`: Bottom sheet sliding up from the bottom edge
  - `"full-screen"`: Full viewport overlay
- **size** (`Responsive<string>`, optional): Controls the modal's dimensions. Accepts CSS size values or design system size tokens
- **padding** (`Responsive<number>`, optional, default: `4`): Internal padding using design system spacing units
- **overflow** (`"visible"`, optional): When set to `"visible"`, allows content to overflow the modal boundaries

### Event Handlers

- **onClose** (`(args: { reason: OverlayCloseReason | "drag" }) => void`, optional): Callback fired when the modal should close. The reason parameter indicates how the close was triggered:
  - `"overlay-click"`: User clicked the backdrop
  - `"escape-key"`: User pressed the Escape key
  - `"drag"`: User performed a swipe gesture
- **onOpen** (`() => void`, optional): Callback fired when the modal begins opening
- **onAfterOpen** (`() => void`, optional): Callback fired after the modal's opening animation completes
- **onAfterClose** (`() => void`, optional): Callback fired after the modal's closing animation completes

### Overlay Configuration

- **transparentOverlay** (`boolean`, optional): When true, makes the backdrop transparent
- **blurredOverlay** (`boolean`, optional): When true, applies a blur effect to the backdrop
- **overlayClassName** (`ClassName`, optional): Additional CSS classes for the overlay backdrop

### Interaction Controls

- **disableSwipeGesture** (`boolean`, optional): When true, disables touch-based swipe-to-close functionality
- **disableCloseOnOutsideClick** (`boolean`, optional): When true, prevents closing when clicking the backdrop
- **autoFocus** (`boolean`, optional, default: `true`): When true, automatically focuses the modal when opened

### Accessibility

- **ariaLabel** (`string`, optional): Accessible label for the modal when no title is provided
- **attributes** (`Attributes<"div"> & { ref?: React.RefObject<HTMLDivElement | null> }`, optional): Additional HTML attributes and ref for the modal container

### Advanced Props

- **containerRef** (`React.RefObject<HTMLElement | null>`, optional): Reference to a container element that will constrain the modal's positioning
- **className** (`ClassName`, optional): Additional CSS classes for the modal content container

## Code Examples

### Basic Centered Modal

```tsx
import { Modal, Button } from "reshaped";
import { useState } from "react";

function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal active={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Title>Confirm Action</Modal.Title>
        <Modal.Subtitle>Are you sure you want to proceed?</Modal.Subtitle>
        <p>This action cannot be undone.</p>
      </Modal>
    </>
  );
}
```

### Side Drawer with Custom Size

```tsx
import { Modal, Button } from "reshaped";
import { useState } from "react";

function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Settings</Button>

      <Modal
        active={isOpen}
        position="end"
        size="400px"
        padding={6}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Title>Settings</Modal.Title>
        <div>{/* Settings content */}</div>
      </Modal>
    </>
  );
}
```

### Bottom Sheet with Responsive Behavior

```tsx
import { Modal, Button } from "reshaped";
import { useState } from "react";

function ResponsiveBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Menu</Button>

      <Modal
        active={isOpen}
        position={{ s: "bottom", m: "center" }}
        size={{ s: "80vh", m: "500px" }}
        onClose={() => setIsOpen(false)}
      >
        <Modal.Title>Menu Options</Modal.Title>
        <div>
          {/* Menu content that appears as bottom sheet on mobile, 
              centered modal on tablet+ */}
        </div>
      </Modal>
    </>
  );
}
```

### Modal with Custom Backdrop

```tsx
import { Modal, Button } from "reshaped";
import { useState } from "react";

function CustomBackdropModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        active={isOpen}
        blurredOverlay
        disableCloseOnOutsideClick
        onClose={() => setIsOpen(false)}
        overlayClassName="custom-overlay"
      >
        <Modal.Title>Important Notice</Modal.Title>
        <p>This modal requires explicit confirmation to close.</p>
        <Button onClick={() => setIsOpen(false)}>Acknowledge</Button>
      </Modal>
    </>
  );
}
```

### Full-Screen Modal with Gesture Controls

```tsx
import { Modal, Button } from "reshaped";
import { useState } from "react";

function FullScreenModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = ({ reason }) => {
    console.log("Modal closed via:", reason);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Full Screen</Button>

      <Modal
        active={isOpen}
        position="full-screen"
        padding={0}
        overflow="visible"
        onClose={handleClose}
        onAfterOpen={() => console.log("Modal opened")}
        onAfterClose={() => console.log("Modal closed")}
      >
        <div style={{ height: "100vh", padding: "20px" }}>
          <Modal.Title>Full Screen Experience</Modal.Title>
          <p>Swipe or press escape to close this modal.</p>
        </div>
      </Modal>
    </>
  );
}
```

## Related Components

- **Overlay**: The underlying component that Modal extends, providing backdrop and lifecycle management
- **Text**: Used internally for Modal.Title and Modal.Subtitle components
- **Modal.Title**: Sub-component for modal headers with proper semantic markup and ARIA labeling
- **Modal.Subtitle**: Sub-component for modal subheaders with appropriate styling and accessibility attributes

The Modal component is part of the overlay family and works well with other interactive components like Button, Form fields, and navigation elements when building complex modal experiences.
