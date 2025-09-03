# Modal

**Brief Description**: A flexible dialog component that displays content in an overlay, supporting various positioning, sizing, and interaction patterns with built-in accessibility features and gesture support.

**Keywords**: Dialog, Overlay, Popup, Drawer, Sheet, Focus Trap, Accessibility, Responsive

**Usage Description**: The Modal component is designed for displaying focused content that requires user attention or action, temporarily blocking interaction with the main application. It supports multiple positioning modes including centered dialogs, bottom sheets, side drawers, and full-screen overlays.

Modal includes comprehensive accessibility features such as focus trapping, ARIA labeling, and keyboard navigation. It also supports touch gestures for closing via swipe-to-dismiss on mobile devices, making it ideal for responsive applications.

## Props Documentation

- **children** (`React.ReactNode`, optional): Content to display inside the modal
- **active** (`boolean`, optional): Controls modal visibility state
- **position** (`G.Responsive<"center" | "end" | "bottom" | "start" | "full-screen">`, optional, default: `"center"`): Modal position on screen
- **size** (`G.Responsive<string>`, optional): Modal dimensions - CSS length value or responsive object
- **padding** (`G.Responsive<number>`, optional, default: `4`): Internal padding using design system scale
- **onClose** (`(args: { reason: OverlayCloseReason | "drag" }) => void`, optional): Callback fired when modal closes
- **transparentOverlay** (`boolean`, optional): Makes overlay background transparent
- **blurredOverlay** (`boolean`, optional): Applies blur effect to overlay background
- **disableSwipeGesture** (`boolean`, optional): Disables swipe-to-close gesture on touch devices
- **autoFocus** (`boolean`, optional, default: `true`): Automatically focuses modal on open

## Code Examples

### Basic Modal with Title
```tsx
import { Modal, Button } from 'reshaped';
import { useState } from 'react';

function BasicModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal 
        active={isOpen} 
        onClose={() => setIsOpen(false)}
      >
        <Modal.Title>Confirm Action</Modal.Title>
        <Modal.Subtitle>This action cannot be undone</Modal.Subtitle>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}
```

### Bottom Sheet with Custom Size
```tsx
import { Modal, View, Button } from 'reshaped';

function BottomSheetExample() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Modal 
      active={isOpen}
      position="bottom"
      size="400px"
      onClose={() => setIsOpen(false)}
    >
      <View gap={3}>
        <Modal.Title>Select Option</Modal.Title>
        <Button onClick={() => setIsOpen(false)}>Option 1</Button>
        <Button onClick={() => setIsOpen(false)}>Option 2</Button>
      </View>
    </Modal>
  );
}
```

## Related Components

- **Overlay**: The underlying component that Modal extends, providing the backdrop and portal functionality
- **View**: Commonly used to structure Modal content with proper spacing and layout
- **Button**: Frequently used for modal triggers and action buttons within modals
- **Text**: The Modal.Title uses Text component with "featured-3" variant, Modal.Subtitle uses "body-3" variant