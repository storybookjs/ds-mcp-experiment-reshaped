# useIsomorphicLayoutEffect Hook

## Overview

The `useIsomorphicLayoutEffect` hook is a utility hook from the reshaped design system that provides a cross-platform solution for layout effects in both server-side rendering (SSR) and client-side environments. It automatically selects the appropriate React hook based on the runtime environment: `useLayoutEffect` on the client and `useEffect` on the server.

This hook is essential for preventing hydration mismatches and SSR-related issues when dealing with effects that need to run synchronously after DOM mutations on the client, while still being compatible with server-side rendering where the DOM is not available.

## Purpose

The primary purpose of this hook is to solve the common problem of using `useLayoutEffect` in SSR environments. Since `useLayoutEffect` requires a DOM environment and will throw warnings or errors during server-side rendering, this hook provides a safe alternative that:

- Uses `useLayoutEffect` when running in the browser (client-side)
- Falls back to `useEffect` when running on the server (SSR)
- Prevents hydration mismatches between server and client renders
- Maintains synchronous DOM updates when possible

## API Reference

### Hook Signature

```typescript
const useIsomorphicLayoutEffect: typeof React.useEffect
```

### Parameters

The hook accepts the same parameters as both `useLayoutEffect` and `useEffect`:

- **effect** (`EffectCallback`): A function that contains imperative, possibly effectful code
- **deps?** (`DependencyList`): An optional array of dependencies that determine when the effect should re-run

### Return Value

This hook doesn't return any value, similar to `useLayoutEffect` and `useEffect`.

### Type Definition

```typescript
import React from "react";
declare const useIsomorphicLayoutEffect: typeof React.useEffect;
export default useIsomorphicLayoutEffect;
```

## Implementation Details

The hook implementation is a simple runtime check that determines the appropriate React hook to use:

```javascript
const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? React.useLayoutEffect 
  : React.useEffect;
```

This implementation:
- Checks for the presence of the `window` object to determine if running in a browser environment
- Uses `React.useLayoutEffect` when `window` is available (client-side)
- Falls back to `React.useEffect` when `window` is undefined (server-side)

## Usage Examples

### Basic Usage

```tsx
import React, { useState } from 'react';
import useIsomorphicLayoutEffect from 'reshaped/hooks/useIsomorphicLayoutEffect';

function MyComponent() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      const { offsetWidth, offsetHeight } = ref.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  return (
    <div ref={ref}>
      Content with dimensions: {dimensions.width} x {dimensions.height}
    </div>
  );
}
```

### Responsive Value Hook Usage

Here's how it's used in the reshaped design system's `useResponsiveClientValue` hook:

```tsx
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useResponsiveClientValue = (value) => {
  const [viewport, setViewport] = React.useState(defaultViewport);

  useIsomorphicLayoutEffect(() => {
    // Set up media query listeners
    const mediaQueries = {
      s: `(max-width: ${breakpoints.m - 1}px)`,
      m: `(min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l - 1}px)`,
      l: `(min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl - 1}px)`,
      xl: `(min-width: ${breakpoints.xl}px)`,
    };

    const matchers = Object.keys(mediaQueries).map((viewport) => {
      const mq = window.matchMedia(mediaQueries[viewport]);
      return { 
        mq, 
        handler: () => mq.matches && setViewport(viewport) 
      };
    });

    // Initialize and add listeners
    matchers.forEach(({ handler, mq }) => {
      handler();
      mq.addEventListener("change", handler);
    });

    // Cleanup function
    return () => {
      matchers.forEach(({ handler, mq }) => {
        mq.removeEventListener("change", handler);
      });
    };
  }, []);

  // Return responsive value logic...
};
```

### Portal Component Usage

The hook is also used in Portal components for mounting management:

```tsx
import useIsomorphicLayoutEffect from '../../../hooks/useIsomorphicLayoutEffect';

const Portal = (props) => {
  const mountedToggle = useToggle();

  useIsomorphicLayoutEffect(() => {
    // Activate the portal after mount
    mountedToggle.activate();
    
    // Cleanup on unmount
    return () => mountedToggle.deactivate();
  }, []);

  return [
    ReactDOM.createPortal(
      <Theme>{children}</Theme>, 
      targetEl
    ),
    !mountedToggle.active && <div ref={rootRef} className={s.root} />
  ];
};
```

### DOM Measurement Hook

```tsx
import React, { useState, useRef } from 'react';
import useIsomorphicLayoutEffect from 'reshaped/hooks/useIsomorphicLayoutEffect';

function useElementSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const elementRef = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!elementRef.current) return;

    const updateSize = () => {
      if (elementRef.current) {
        setSize({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight,
        });
      }
    };

    // Initial measurement
    updateSize();

    // Set up ResizeObserver for dynamic updates
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(elementRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [elementRef, size] as const;
}
```

### Event Listener Setup

```tsx
import React, { useState } from 'react';
import useIsomorphicLayoutEffect from 'reshaped/hooks/useIsomorphicLayoutEffect';

function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial position
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}
```

## SSR/Hydration Considerations

### Server-Side Rendering Safety

When using this hook, consider the following SSR implications:

1. **Effect Timing**: On the server, the hook behaves like `useEffect`, meaning it won't run during the initial render. This is intentional to prevent SSR issues.

2. **Initial State**: Always provide sensible default states that work on both server and client:

```tsx
// Good: Provides safe defaults
const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

// Avoid: Assuming browser APIs are available
const [dimensions, setDimensions] = useState({ 
  width: window.innerWidth, // This will break SSR
  height: window.innerHeight 
});
```

3. **Hydration Mismatch Prevention**: The hook helps prevent hydration mismatches by ensuring effects run at the appropriate time in each environment.

### Client-Side Hydration

On the client side, after hydration:

1. The hook will use `useLayoutEffect` for synchronous DOM updates
2. Effects will run before the browser paints, preventing visual flickers
3. DOM measurements and manipulations will be accurate and immediate

## Best Practices

### When to Use

Use `useIsomorphicLayoutEffect` when you need to:

- Measure DOM elements after render but before paint
- Set up event listeners that depend on DOM state
- Perform synchronous DOM manipulations
- Ensure consistent behavior between SSR and client-side rendering
- Avoid hydration mismatches with layout-sensitive code

### When NOT to Use

Don't use this hook when:

- You're only performing data fetching or async operations (use `useEffect`)
- The effect doesn't need to be synchronous with DOM updates
- You're in a purely client-side application without SSR concerns
- The effect doesn't interact with the DOM or layout

### Performance Considerations

1. **Synchronous Execution**: Remember that on the client, this hook uses `useLayoutEffect`, which blocks painting. Use sparingly for critical layout operations only.

2. **Dependency Arrays**: Always provide appropriate dependency arrays to prevent unnecessary re-runs:

```tsx
// Good: Specific dependencies
useIsomorphicLayoutEffect(() => {
  // effect code
}, [specificDependency]);

// Avoid: Missing dependencies that could change
useIsomorphicLayoutEffect(() => {
  // effect uses external values without listing them
}, []);
```

3. **Cleanup Functions**: Always provide cleanup functions when setting up subscriptions or listeners:

```tsx
useIsomorphicLayoutEffect(() => {
  const handleResize = () => {
    // handle resize
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

## Common Patterns

### Conditional Client-Only Effects

```tsx
useIsomorphicLayoutEffect(() => {
  // This check is often redundant since the hook handles it,
  // but can be useful for additional safety
  if (typeof window === 'undefined') return;
  
  // Client-only code here
}, []);
```

### Portal and Modal Management

```tsx
useIsomorphicLayoutEffect(() => {
  // Enable portal/modal after mount
  setMounted(true);
  
  return () => {
    // Cleanup on unmount
    setMounted(false);
  };
}, []);
```

### Theme and Style Calculations

```tsx
useIsomorphicLayoutEffect(() => {
  const computedStyle = window.getComputedStyle(element);
  const customProperties = {
    primaryColor: computedStyle.getPropertyValue('--primary-color'),
    spacing: computedStyle.getPropertyValue('--spacing-unit'),
  };
  
  setThemeValues(customProperties);
}, [element]);
```

## Related Hooks and Components

This hook is commonly used alongside:

- **useToggle**: For managing boolean state in portal and modal components
- **useResponsiveClientValue**: For responsive design implementations
- **useHandlerRef**: For managing event handler references
- **Portal**: For rendering content outside the normal component tree
- **Theme**: For theme-aware component development

The hook serves as a foundational utility within the reshaped design system, enabling SSR-safe layout effects across many components and custom hooks.