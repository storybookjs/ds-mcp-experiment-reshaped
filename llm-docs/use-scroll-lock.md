# useScrollLock

## Overview

The `useScrollLock` hook provides a React-based interface for managing scroll behavior on specific containers or the document body. This hook enables you to temporarily prevent scrolling within a target element, which is particularly useful for modal dialogs, overlays, and other UI components that require scroll containment to prevent background content from scrolling while the component is active.

## Purpose

The primary purpose of `useScrollLock` is to:

- Control scroll behavior programmatically in React components
- Prevent unwanted background scrolling when modals or overlays are active
- Provide platform-specific scroll locking (iOS Safari receives special handling)
- Manage scroll lock state with proper cleanup
- Support both global body scroll locking and scoped container locking

## API Reference

### Hook Signature

```typescript
const useScrollLock = (options?: {
    containerRef?: React.RefObject<HTMLElement | null>;
    originRef?: React.RefObject<HTMLElement | null>;
}) => {
    scrollLocked: boolean;
    lockScroll: () => void;
    unlockScroll: () => void;
};
```

### Parameters

#### `options` (optional)
An object containing optional configuration for the scroll lock behavior.

- **Type**: `{ containerRef?: React.RefObject<HTMLElement | null>; originRef?: React.RefObject<HTMLElement | null>; }`
- **Required**: No
- **Default**: `undefined`

##### `options.containerRef`
- **Type**: `React.RefObject<HTMLElement | null>`
- **Required**: No
- **Description**: Reference to a specific container element to lock scrolling on. When provided, only this container's scrolling will be locked instead of the document body.

##### `options.originRef`
- **Type**: `React.RefObject<HTMLElement | null>`
- **Required**: No
- **Description**: Reference to an origin element used to find the closest scrollable container. The hook will search for the nearest scrollable ancestor of this element and lock scrolling on that container.

### Return Value

The hook returns an object with three properties:

#### `scrollLocked`
- **Type**: `boolean`
- **Description**: Indicates whether scroll is currently locked. `true` when scroll is locked, `false` when unlocked.

#### `lockScroll`
- **Type**: `() => void`
- **Description**: Function to lock scrolling. When called, it will prevent scrolling on the target container (either the specified container, the closest scrollable ancestor of the origin element, or the document body).

#### `unlockScroll`
- **Type**: `() => void`
- **Description**: Function to unlock scrolling. When called, it will restore normal scrolling behavior to the previously locked container.

## Usage Examples

### Basic Usage (Global Body Lock)

```tsx
import React from 'react';
import useScrollLock from 'reshaped/dist/hooks/useScrollLock';
import Button from 'reshaped/dist/components/Button';

function ModalExample() {
  const { scrollLocked, lockScroll, unlockScroll } = useScrollLock();
  
  return (
    <>
      <Button onClick={scrollLocked ? unlockScroll : lockScroll}>
        {scrollLocked ? 'Unlock Scroll' : 'Lock Scroll'}
      </Button>
      {/* Your modal content */}
    </>
  );
}
```

### Container-Specific Scroll Lock

```tsx
import React from 'react';
import useScrollLock from 'reshaped/dist/hooks/useScrollLock';
import Button from 'reshaped/dist/components/Button';
import View from 'reshaped/dist/components/View';

function ScrollableContainerExample() {
  const containerRef = React.useRef(null);
  const { scrollLocked, lockScroll, unlockScroll } = useScrollLock({ 
    containerRef 
  });
  
  return (
    <View 
      height={25} 
      overflow="auto"
      attributes={{ ref: containerRef }}
    >
      <View height={50} padding={4}>
        <Button onClick={scrollLocked ? unlockScroll : lockScroll}>
          {scrollLocked ? 'Unlock Container' : 'Lock Container'}
        </Button>
        {/* Scrollable content */}
      </View>
    </View>
  );
}
```

### Origin-Based Scroll Lock

```tsx
import React from 'react';
import useScrollLock from 'reshaped/dist/hooks/useScrollLock';
import Button from 'reshaped/dist/components/Button';
import View from 'reshaped/dist/components/View';

function OriginBasedExample() {
  const originRef = React.useRef(null);
  const { scrollLocked, lockScroll, unlockScroll } = useScrollLock({ 
    originRef 
  });
  
  return (
    <View overflow="auto" height={25}>
      <View 
        height={50} 
        padding={4}
        attributes={{ ref: originRef }}
      >
        <Button onClick={scrollLocked ? unlockScroll : lockScroll}>
          Toggle Scroll Lock
        </Button>
        {/* Content within scrollable ancestor */}
      </View>
    </View>
  );
}
```

### Modal Dialog with Scroll Lock

```tsx
import React from 'react';
import useScrollLock from 'reshaped/dist/hooks/useScrollLock';
import Button from 'reshaped/dist/components/Button';
import View from 'reshaped/dist/components/View';

function ModalDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  
  const openModal = () => {
    setIsOpen(true);
    lockScroll();
  };
  
  const closeModal = () => {
    setIsOpen(false);
    unlockScroll();
  };
  
  React.useEffect(() => {
    // Cleanup scroll lock when component unmounts
    return () => {
      if (isOpen) {
        unlockScroll();
      }
    };
  }, [isOpen, unlockScroll]);
  
  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      
      {isOpen && (
        <View 
          position="fixed"
          inset={0}
          backgroundColor="neutral-faded"
          attributes={{ 'data-testid': 'modal-backdrop' }}
        >
          <View padding={8} backgroundColor="neutral">
            <Button onClick={closeModal}>Close Modal</Button>
            {/* Modal content */}
          </View>
        </View>
      )}
    </>
  );
}
```

### Multiple Scroll Locks

```tsx
import React from 'react';
import useScrollLock from 'reshaped/dist/hooks/useScrollLock';
import Button from 'reshaped/dist/components/Button';

function MultipleLocksExample() {
  const containerRef = React.useRef(null);
  const globalLock = useScrollLock();
  const scopedLock = useScrollLock({ containerRef });
  
  return (
    <div>
      <Button 
        onClick={globalLock.scrollLocked ? globalLock.unlockScroll : globalLock.lockScroll}
      >
        Global Lock: {globalLock.scrollLocked ? 'Locked' : 'Unlocked'}
      </Button>
      
      <div ref={containerRef} style={{ height: '200px', overflow: 'auto' }}>
        <Button 
          onClick={scopedLock.scrollLocked ? scopedLock.unlockScroll : scopedLock.lockScroll}
        >
          Scoped Lock: {scopedLock.scrollLocked ? 'Locked' : 'Unlocked'}
        </Button>
        {/* Scrollable content */}
      </div>
    </div>
  );
}
```

## Scroll Behavior Management

### Platform-Specific Handling

The hook automatically detects the platform and applies appropriate scroll locking strategies:

- **iOS Safari**: Uses a fixed positioning approach with visual viewport compensation to handle Safari's unique scrolling behavior
- **Standard browsers**: Applies `overflow: hidden` with scrollbar width compensation to prevent layout shifts

### Lock Counting

The hook implements a reference counting system for body scroll locks:
- Multiple components can request body scroll locks simultaneously
- The body scroll is only unlocked when all requesting components have unlocked
- Container-specific locks operate independently of the global lock count

### Cleanup and Memory Management

- The hook automatically manages scroll lock state and cleanup
- Uses `React.useCallback` to memoize lock/unlock functions
- Returns a memoized object to prevent unnecessary re-renders
- Provides reset functions to restore original scroll behavior

### Scrollbar Compensation

For standard browsers, the hook:
- Detects if the container is overflowing
- Calculates the scrollbar width
- Adds padding to prevent layout shifts when scrolling is disabled

## Best Practices

### 1. Always Pair Lock with Unlock

```tsx
// Good: Always ensure unlocking happens
React.useEffect(() => {
  if (modalOpen) {
    lockScroll();
  } else {
    unlockScroll();
  }
}, [modalOpen, lockScroll, unlockScroll]);

// Good: Cleanup on unmount
React.useEffect(() => {
  return () => {
    if (scrollLocked) {
      unlockScroll();
    }
  };
}, [scrollLocked, unlockScroll]);
```

### 2. Use Container Refs for Scoped Locking

```tsx
// Good: Lock specific scrollable containers
const containerRef = React.useRef(null);
const { lockScroll, unlockScroll } = useScrollLock({ containerRef });

// Avoid: Don't lock body when you only need container locking
const { lockScroll, unlockScroll } = useScrollLock(); // This locks the entire page
```

### 3. Handle Component Unmounting

```tsx
// Good: Always cleanup scroll locks
React.useEffect(() => {
  return () => {
    // Ensure scroll is unlocked when component unmounts
    unlockScroll();
  };
}, [unlockScroll]);
```

### 4. Use State-Driven Locking

```tsx
// Good: Tie scroll lock to component state
const [isModalOpen, setIsModalOpen] = React.useState(false);
const { lockScroll, unlockScroll } = useScrollLock();

React.useEffect(() => {
  if (isModalOpen) {
    lockScroll();
  } else {
    unlockScroll();
  }
}, [isModalOpen, lockScroll, unlockScroll]);
```

### 5. Optimize Re-renders

```tsx
// Good: Destructure only what you need
const { scrollLocked, lockScroll } = useScrollLock();

// Good: Use scrollLocked state for conditional rendering
{scrollLocked && <div>Scroll is currently locked</div>}
```

### 6. Consider Origin Refs for Complex Layouts

```tsx
// Good: Use originRef when you need to find the closest scrollable ancestor
const triggerRef = React.useRef(null);
const { lockScroll, unlockScroll } = useScrollLock({ originRef: triggerRef });

return (
  <div className="complex-layout">
    <div className="scrollable-section">
      <button ref={triggerRef} onClick={lockScroll}>
        Lock closest scrollable container
      </button>
    </div>
  </div>
);
```

## Related Components

This hook is commonly used with:

- **Modal/Dialog components**: For preventing background scrolling
- **Overlay components**: For scroll containment
- **Drawer/Sidebar components**: For scroll management during slide animations
- **Dropdown/Select components**: For preventing page scroll while interacting with options
- **Popup/Tooltip components**: When they need to manage scroll behavior

The hook integrates well with Reshaped's View component and other layout components that support ref forwarding.