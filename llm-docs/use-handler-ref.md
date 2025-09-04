# useHandlerRef

## Hook Name

**useHandlerRef**

## Brief Description

A React hook that wraps event handlers in a stable ref to prevent unnecessary effect re-runs while keeping the handler implementation up-to-date.

## Keywords

- Event Handler
- Ref Wrapper
- Effect Dependencies
- Performance Optimization
- Handler Stability
- React Hook
- Callback Ref
- Memory Optimization

## Usage Description

The `useHandlerRef` hook is designed to solve a common performance issue in React applications where event handlers passed as props cause unnecessary re-execution of effects. When a component receives a callback prop that changes on every render (such as inline functions or recreated handlers), any effects that depend on this callback will re-run unnecessarily.

This hook wraps the callback in a ref, keeping the ref instance stable across renders while ensuring the callback implementation stays current. This pattern is particularly useful in components that need to use event handlers in effect dependencies, such as event listeners, timers, or other side effects that should only run when explicitly needed.

The hook is commonly used in design system components where prop handlers need to be called from effects without causing the effects to re-run on every parent component render. It's essential for maintaining performance in complex component hierarchies where handlers are frequently recreated.

## Props Documentation

### Parameters

| Parameter | Type | Required | Default | Description                                                                                                                       |
| --------- | ---- | -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `cb`      | `T`  | Yes      | -       | The callback function to wrap in a ref. Can be any function type including event handlers, async functions, or utility functions. |

### Return Value

| Return | Type                 | Description                                                                                            |
| ------ | -------------------- | ------------------------------------------------------------------------------------------------------ |
| `ref`  | `React.RefObject<T>` | A stable ref object containing the current callback function. Access the function via `ref.current()`. |

## Code Examples

### Basic Event Handler Wrapping

```typescript
import React from 'react';
import useHandlerRef from 'reshaped/hooks/useHandlerRef';

const Component = ({ onEffect, count }) => {
  const onEffectRef = useHandlerRef(onEffect);

  React.useEffect(() => {
    // This effect only runs when dependencies change,
    // not when onEffect prop is recreated
    onEffectRef.current();
  }, [onEffectRef]); // onEffectRef is stable across renders

  return <div>Counter: {count}</div>;
};
```

### Modal Close Handler

```typescript
import React from 'react';
import useHandlerRef from 'reshaped/hooks/useHandlerRef';

const Modal = ({ onClose, active }) => {
  const onCloseRef = useHandlerRef(onClose);

  React.useEffect(() => {
    if (!active) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current?.();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [active, onCloseRef]); // onCloseRef doesn't cause re-subscription

  return active ? <div className="modal">Modal Content</div> : null;
};
```

### Slider Change Handlers

```typescript
import React from 'react';
import useHandlerRef from 'reshaped/hooks/useHandlerRef';

const SliderControlled = ({ onChange, onChangeCommit, value }) => {
  const onChangeRef = useHandlerRef(onChange);
  const onChangeCommitRef = useHandlerRef(onChangeCommit);

  React.useEffect(() => {
    // Complex slider logic that depends on handlers
    const handleSliderInteraction = () => {
      onChangeRef.current?.(value);
    };

    const handleSliderCommit = () => {
      onChangeCommitRef.current?.(value);
    };

    // Setup slider event listeners
    // Effects won't re-run when parent recreates handlers
  }, [value, onChangeRef, onChangeCommitRef]);

  return <div className="slider">Slider Implementation</div>;
};
```

### Drag Handler Integration

```typescript
import React from 'react';
import useHandlerRef from 'reshaped/hooks/useHandlerRef';

const DraggableComponent = ({ onDragStart, onDragEnd, onDrag }) => {
  const onDragStartRef = useHandlerRef(onDragStart);
  const onDragEndRef = useHandlerRef(onDragEnd);
  const onDragRef = useHandlerRef(onDrag);

  React.useEffect(() => {
    let isDragging = false;

    const handleMouseDown = (event) => {
      isDragging = true;
      onDragStartRef.current?.(event);
    };

    const handleMouseMove = (event) => {
      if (isDragging) {
        onDragRef.current?.(event);
      }
    };

    const handleMouseUp = (event) => {
      if (isDragging) {
        isDragging = false;
        onDragEndRef.current?.(event);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onDragStartRef, onDragEndRef, onDragRef]); // All refs are stable

  return <div className="draggable">Draggable Content</div>;
};
```

### Complex Effect with Multiple Handlers

```typescript
import React from 'react';
import useHandlerRef from 'reshaped/hooks/useHandlerRef';

const AutocompleteComponent = ({ onSearch, onSelect, onFocus, onBlur }) => {
  const onSearchRef = useHandlerRef(onSearch);
  const onSelectRef = useHandlerRef(onSelect);
  const onFocusRef = useHandlerRef(onFocus);
  const onBlurRef = useHandlerRef(onBlur);

  React.useEffect(() => {
    let timeoutId;

    const handleSearchDebounced = (query) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onSearchRef.current?.(query);
      }, 300);
    };

    const handleKeyboardNavigation = (event) => {
      if (event.key === 'Enter') {
        onSelectRef.current?.(selectedItem);
      }
    };

    const handleFocusManagement = () => {
      onFocusRef.current?.();
      return () => onBlurRef.current?.();
    };

    // Complex autocomplete logic
    // All handlers remain stable across parent re-renders

    return () => clearTimeout(timeoutId);
  }, [onSearchRef, onSelectRef, onFocusRef, onBlurRef]);

  return <input className="autocomplete" />;
};
```

## Performance Considerations

### Memory Optimization

- The hook uses `useIsomorphicLayoutEffect` internally for optimal timing
- Ref instances are stable and don't cause memory churn
- Callbacks are updated synchronously to prevent stale closures

### Effect Dependency Stability

- Primary benefit is preventing unnecessary effect re-runs
- Reduces the number of event listener subscriptions/unsubscriptions
- Minimizes DOM manipulation and side effect overhead

### Render Performance

- Minimal overhead per hook usage
- No additional re-renders caused by ref updates
- Optimal for components with frequent prop handler changes

## Best Practices

### When to Use

- Always use when passing callback props to effect dependencies
- Essential for event listeners that depend on prop handlers
- Required for complex interactions like drag operations or keyboard navigation
- Beneficial in any scenario where handler stability matters for performance

### When Not to Use

- Don't use for simple callbacks that don't participate in effect dependencies
- Avoid for one-time event handlers that don't need stability
- Not necessary for handlers that are already stable (useCallback with stable dependencies)

### Integration Patterns

- Combine with other optimization hooks like `useCallback` and `useMemo`
- Use consistently across all prop handlers in performance-critical components
- Consider using in custom hooks that accept callback parameters

### Error Handling

- Always use optional chaining when calling the ref: `handlerRef.current?.()`
- Handle cases where the callback might be undefined
- Ensure proper cleanup in effects that use handler refs

## Related Components

The `useHandlerRef` hook is used throughout the Reshaped design system in components that need stable handler references:

- **Modal** - Uses handler refs for close callbacks and escape key handling
- **Slider** - Wraps onChange and onChangeCommit handlers for drag interactions
- **ScrollArea** - Manages scroll event handlers without causing re-subscriptions
- **Overlay** - Handles click-outside and escape key events with stable references
- **NumberField** - Manages input change handlers for numeric validation
- **Flyout** - Controls positioning and interaction handlers
- **ContextMenu** - Manages menu interaction and selection handlers
- **Autocomplete** - Handles search, select, and navigation callbacks

The hook is also used internally by:

- **useDrag** - Custom drag interaction hook that requires stable handler references
- **useIsomorphicLayoutEffect** - Used internally for optimal timing across client/server environments

This hook is fundamental to the performance architecture of the Reshaped design system, ensuring that complex interactive components remain performant even with frequently changing prop handlers.
