# useKeyboardMode

**Hook Name**: useKeyboardMode

**Brief Description**: A React hook that provides programmatic control over keyboard interaction mode for improved accessibility.

**Keywords**: Keyboard Navigation, Accessibility, Focus Management, A11Y, Interaction Mode, Focus Rings, Visual Indicators

## Usage Description

The `useKeyboardMode` hook provides fine-grained control over keyboard interaction mode within your application. This hook is essential for creating accessible user interfaces that respond appropriately to different input methods (keyboard vs mouse/touch).

When keyboard mode is active, the design system displays visual focus indicators (focus rings) to help keyboard users navigate the interface. When users interact via mouse or touch, these visual indicators are typically hidden to avoid visual clutter. The hook allows you to programmatically control this behavior, temporarily disable it, or manually activate/deactivate keyboard mode as needed.

This hook is particularly useful in complex interactive components, modal dialogs, or situations where you need to ensure keyboard users have proper visual feedback regardless of the previous interaction method. It integrates seamlessly with the Reshaped design system's global keyboard mode management through the `SingletonKeyboardModeProvider`.

## API Reference

### Return Type

```typescript
{
  enable: () => void;
  disable: () => void;
  activate: () => void;
  deactivate: () => void;
}
```

### Return Properties

- **`enable`** `() => void`
  - **Description**: Re-enables automatic keyboard mode detection and management
  - **Usage**: Call this after temporarily disabling keyboard mode to restore normal behavior

- **`disable`** `() => void`
  - **Description**: Temporarily disables keyboard mode activation, preventing focus rings from appearing
  - **Usage**: Use when you want to suppress focus indicators temporarily (e.g., during animations or transitions)

- **`activate`** `() => void`
  - **Description**: Immediately activates keyboard mode, showing focus indicators
  - **Usage**: Call when you know the user is navigating via keyboard and want to ensure focus rings are visible
  - **Note**: Has no effect if keyboard mode is currently disabled

- **`deactivate`** `() => void`
  - **Description**: Immediately deactivates keyboard mode, hiding focus indicators
  - **Usage**: Call when transitioning to mouse/touch interaction or when focus indicators are not needed
  - **Note**: Has no effect if keyboard mode is currently disabled

## Implementation Details

### Internal Mechanism

The hook works by:

1. **Global State Management**: Uses a singleton context (`SingletonKeyboardModeContext`) to maintain global keyboard mode state
2. **DOM Attribute Control**: Manages the `data-rs-keyboard` attribute on `document.documentElement`
3. **Event Listening**: Automatically detects keyboard and mouse interactions through global event listeners
4. **Automatic Activation**: Keyboard interactions (excluding modifier keys and Escape) automatically activate keyboard mode
5. **Automatic Deactivation**: Mouse interactions automatically deactivate keyboard mode

### CSS Integration

When keyboard mode is active, the `data-rs-keyboard="true"` attribute is added to the document element, allowing CSS rules like:

```css
html[data-rs-keyboard] .component:focus {
  outline: 2px solid blue;
}
```

## Usage Examples

### Basic Usage

```tsx
import React from 'react';
import { useKeyboardMode } from 'reshaped';

function AccessibleComponent() {
  const keyboardMode = useKeyboardMode();
  
  const handleSpecialAction = () => {
    // Ensure focus indicators are visible for this interaction
    keyboardMode.activate();
  };
  
  return (
    <button onClick={handleSpecialAction}>
      Perform Action
    </button>
  );
}
```

### Temporary Disable During Animation

```tsx
import React from 'react';
import { useKeyboardMode } from 'reshaped';

function AnimatedModal() {
  const keyboardMode = useKeyboardMode();
  
  const handleOpenModal = () => {
    // Disable focus rings during opening animation
    keyboardMode.disable();
    
    // Re-enable after animation completes
    setTimeout(() => {
      keyboardMode.enable();
      keyboardMode.activate(); // Ensure focus is visible
    }, 300);
  };
  
  return (
    <button onClick={handleOpenModal}>
      Open Modal
    </button>
  );
}
```

### Focus Management in Complex Components

```tsx
import React, { useRef, useEffect } from 'react';
import { useKeyboardMode } from 'reshaped';

function CustomDropdown({ isOpen, onClose }) {
  const keyboardMode = useKeyboardMode();
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      // Activate keyboard mode when dropdown opens
      keyboardMode.activate();
    }
  }, [isOpen, keyboardMode]);
  
  const handleMouseEnter = () => {
    // Deactivate when user starts using mouse
    keyboardMode.deactivate();
  };
  
  return (
    <div 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
    >
      {/* Dropdown content */}
    </div>
  );
}
```

### Integration with Focus Trapping

```tsx
import React from 'react';
import { useKeyboardMode } from 'reshaped';

function Modal({ children, onClose }) {
  const keyboardMode = useKeyboardMode();
  
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
      // Don't activate keyboard mode for Escape key
      return;
    }
    
    // Activate keyboard mode for other key interactions
    keyboardMode.activate();
  };
  
  return (
    <div 
      role="dialog"
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}
```

### Conditional Focus Indicators

```tsx
import React, { useState } from 'react';
import { useKeyboardMode } from 'reshaped';

function ConditionalFocusComponent() {
  const keyboardMode = useKeyboardMode();
  const [isEditMode, setIsEditMode] = useState(false);
  
  const enterEditMode = () => {
    setIsEditMode(true);
    // Ensure focus indicators are visible in edit mode
    keyboardMode.activate();
  };
  
  const exitEditMode = () => {
    setIsEditMode(false);
    // Remove focus indicators when exiting edit mode
    keyboardMode.deactivate();
  };
  
  return (
    <div>
      {isEditMode ? (
        <input 
          autoFocus
          onBlur={exitEditMode}
          placeholder="Enter text..."
        />
      ) : (
        <button onClick={enterEditMode}>
          Click to edit
        </button>
      )}
    </div>
  );
}
```

## Accessibility Considerations

### Focus Indicators

- **Visual Feedback**: Always ensure focus indicators are visible when users navigate via keyboard
- **Contrast Requirements**: Focus indicators should meet WCAG contrast requirements
- **Timing**: Avoid disabling keyboard mode for extended periods

### Best Practices

1. **Activate on Focus**: Call `activate()` when programmatically focusing elements
2. **Respect User Intent**: Don't override automatic detection unless necessary
3. **Temporary Disabling**: Keep `disable()` periods as short as possible
4. **Modal Dialogs**: Always activate keyboard mode when opening modal dialogs
5. **Error States**: Ensure focus indicators are visible when showing validation errors

### WCAG Compliance

- **2.4.7 Focus Visible**: This hook helps satisfy the requirement for visible focus indicators
- **2.1.1 Keyboard**: Supports keyboard-only navigation by ensuring proper visual feedback
- **2.4.3 Focus Order**: Works in conjunction with proper tab order management

## Integration Requirements

### Provider Setup

The hook requires the `SingletonKeyboardModeProvider` to be present in your component tree. This is automatically included when using the `Reshaped` root component:

```tsx
import React from 'react';
import { Reshaped } from 'reshaped';

function App() {
  return (
    <Reshaped>
      {/* Your app components */}
    </Reshaped>
  );
}
```

### CSS Integration

Ensure your CSS responds to the `data-rs-keyboard` attribute:

```css
/* Hide focus rings by default */
.interactive-element:focus {
  outline: none;
}

/* Show focus rings in keyboard mode */
html[data-rs-keyboard] .interactive-element:focus {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
}
```

## Related Components

- **Reshaped**: Root component that provides the keyboard mode context
- **Button**: Automatically responds to keyboard mode for focus indicators  
- **Modal**: Benefits from keyboard mode activation when opened
- **Dropdown**: Uses keyboard mode for proper focus management
- **Form Controls**: All form elements work with keyboard mode detection
- **TrapFocus**: Utility component that often works alongside keyboard mode management

## Performance Considerations

- **Memoization**: The hook uses `React.useMemo` to prevent unnecessary re-renders
- **Global Listeners**: Event listeners are managed at the provider level, not per hook instance
- **Lightweight Operations**: All operations (enable/disable/activate/deactivate) are lightweight function calls
- **No Side Effects**: The hook itself has no side effects; all DOM manipulation happens in the provider