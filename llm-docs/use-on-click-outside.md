# useOnClickOutside

**Brief Description**: A custom React hook that detects clicks outside specified elements and executes a callback handler.

**Keywords**: Click Outside, Event Handler, DOM Events, Dismissible, Overlay, Modal, Popover, Dropdown

## Usage Description

The `useOnClickOutside` hook is essential for creating dismissible UI components such as modals, dropdowns, popovers, tooltips, and context menus. It provides a reliable way to detect when users click outside of specific elements and trigger appropriate actions like closing overlays or resetting component states.

This hook is particularly valuable in modern React applications where you need to implement click-away behavior. It handles complex edge cases such as touch events, composed DOM paths, and timing issues that can occur when elements are dynamically added or removed from the DOM.

The hook uses a sophisticated approach to track mouse events, checking element positions on `mousedown` to ensure accurate detection before any potential DOM changes occur from other click handlers. This makes it robust for use with dynamic content and prevents race conditions.

## API Reference

### Parameters

- **refs**: `React.RefObject<HTMLElement | null>[]` (required)
  - Array of React refs pointing to elements that should be considered "inside"
  - Clicks on these elements or their descendants will not trigger the handler
  - Can handle multiple refs simultaneously for complex UI layouts

- **handler**: `(event: Event) => void` (required)
  - Callback function executed when a click occurs outside the specified elements
  - Receives the original click event as a parameter
  - Uses `useHandlerRef` internally to ensure the latest handler is always called

- **options**: `{ disabled?: boolean }` (optional)
  - **disabled**: `boolean` - When true, the hook stops listening for outside clicks
  - Useful for conditionally enabling/disabling the behavior
  - Defaults to `false`

### Return Value

The hook returns `void` - it only sets up event listeners and doesn't return any values.

## Implementation Details

The hook implements several sophisticated features:

1. **Dual Event Tracking**: Listens to both `mousedown`/`touchstart` and `click` events to handle timing issues
2. **Composed Path Support**: Uses `event.composedPath()` to properly handle Shadow DOM scenarios
3. **Touch Device Compatibility**: Handles both mouse and touch interactions
4. **Right Click Filtering**: Ignores right-click events (button === 2)
5. **Pointer Event Validation**: Only processes events with valid `pointerType`
6. **Dynamic Handler Updates**: Uses `useHandlerRef` to ensure the latest handler is always called without recreating event listeners

## Code Examples

### Basic Usage
```typescript
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'reshaped';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside([menuRef], () => {
    setIsOpen(false);
  });
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Menu
      </button>
      {isOpen && (
        <div ref={menuRef} className="dropdown-menu">
          <div>Menu Item 1</div>
          <div>Menu Item 2</div>
        </div>
      )}
    </div>
  );
}
```

### Multiple Elements
```typescript
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'reshaped';

function MultiPartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  
  // Both the modal and trigger are considered "inside"
  useOnClickOutside([modalRef, triggerRef], () => {
    setIsOpen(false);
  });
  
  return (
    <div>
      <button ref={triggerRef} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal-content">
            <h2>Modal Content</h2>
            <p>Click outside to close</p>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Conditional Behavior with Options
```typescript
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'reshaped';

function ConditionalPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  
  useOnClickOutside([popoverRef], () => {
    setIsOpen(false);
  }, {
    disabled: isPinned // Don't close when pinned
  });
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle Popover
      </button>
      {isOpen && (
        <div ref={popoverRef} className="popover">
          <div>
            <label>
              <input 
                type="checkbox" 
                checked={isPinned}
                onChange={(e) => setIsPinned(e.target.checked)}
              />
              Pin popover (prevent auto-close)
            </label>
          </div>
          <div>Popover content here</div>
        </div>
      )}
    </div>
  );
}
```

### Complex State Management
```typescript
import React, { useRef, useState, useCallback } from 'react';
import { useOnClickOutside } from 'reshaped';

function StatefulComponent() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handler captures the latest state values
  const handleClickOutside = useCallback((event: Event) => {
    console.log(`Closing with count: ${count}`);
    setIsOpen(false);
    // Could also perform other actions based on current state
  }, [count]);
  
  useOnClickOutside([containerRef], handleClickOutside);
  
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Counter
      </button>
      {isOpen && (
        <div ref={containerRef} className="counter-widget">
          <h3>Counter: {count}</h3>
          <button onClick={() => setCount(prev => prev + 1)}>
            Increment
          </button>
          <p>Click outside to close (check console for final count)</p>
        </div>
      )}
    </div>
  );
}
```

### Integration with Flyout Components
```typescript
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'reshaped';

function CustomFlyout({ trigger, children, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const handleClose = useCallback((reason?: string) => {
    setIsOpen(false);
    onClose?.({ reason });
  }, [onClose]);
  
  useOnClickOutside([triggerRef, contentRef], () => {
    handleClose('outside-click');
  }, {
    disabled: !isOpen
  });
  
  return (
    <div>
      {React.cloneElement(trigger, {
        ref: triggerRef,
        onClick: () => setIsOpen(!isOpen)
      })}
      {isOpen && (
        <div ref={contentRef} className="flyout-content">
          {children}
        </div>
      )}
    </div>
  );
}

// Usage
function App() {
  return (
    <CustomFlyout 
      trigger={<button>Open Flyout</button>}
      onClose={(details) => console.log('Closed:', details.reason)}
    >
      <div>Flyout content here</div>
    </CustomFlyout>
  );
}
```

## Event Handling Patterns

### Event Flow
1. **mousedown/touchstart**: Tracks which elements are initially pressed
2. **click**: Checks if the final click target is outside the specified refs
3. **Validation**: Filters out right-clicks, non-pointer events, and invalid interactions

### Best Practices
- Always provide stable refs (don't create refs inline)
- Use `useCallback` for handlers that depend on state to avoid unnecessary re-renders
- Consider using the `disabled` option for conditional behavior rather than conditionally calling the hook
- Handle cleanup properly in components that unmount while overlays are open
- Test with both mouse and touch interactions on mobile devices

### Performance Considerations
- The hook uses passive event listeners for better scroll performance
- Event listeners are attached to `document` for global click detection
- Cleanup happens automatically when the component unmounts
- The `useHandlerRef` pattern prevents unnecessary effect re-runs

## Related Components

- **Flyout**: Uses `useOnClickOutside` internally for dismissible overlays
- **Modal**: Can integrate with this hook for click-outside-to-close behavior  
- **Popover**: Built-in click outside detection using this hook
- **DropdownMenu**: Implements this hook for menu dismissal
- **ContextMenu**: Uses this pattern for context menu closing
- **Tooltip**: May use this hook for manual dismissal scenarios

The `useOnClickOutside` hook is a foundational utility that powers the dismissible behavior of many overlay components in the Reshaped design system, providing consistent and reliable click-away functionality across different UI patterns.