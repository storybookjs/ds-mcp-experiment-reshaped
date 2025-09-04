# useRTL

A React hook that provides access to the current RTL (Right-to-Left) reading direction state and a function to toggle it. This hook is essential for building internationalized applications that need to support both LTR (Left-to-Right) and RTL languages like Arabic, Hebrew, and Persian.

**Keywords**: RTL, Internationalization, i18n, Reading Direction, Layout, Text Direction, Localization

## Usage Description

The `useRTL` hook is designed for applications that need to support multiple reading directions. It provides both the current RTL state and a setter function to programmatically change the reading direction. The hook automatically synchronizes with the document's `dir` attribute and persists changes to the DOM, making it ideal for dynamic language switching scenarios.

This hook is commonly used in components that need to adjust their layout, positioning, or visual behavior based on the reading direction. For example, carousel navigation buttons, dropdown positioning, fade effects on scrollable content, and slider controls all benefit from RTL awareness.

The hook must be used within the context of a `Reshaped` provider component, which manages the global RTL state through the `SingletonEnvironmentContext`. This ensures consistent RTL behavior across all components in your application.

## API Reference

### Return Type

```typescript
[boolean, (state: boolean) => void]
```

### Returns

- **`[0]` (boolean)**: Current RTL state. `true` when the application is in RTL mode, `false` for LTR mode.
- **`[1]` (function)**: Setter function to update the RTL state. Takes a boolean parameter where `true` enables RTL mode and `false` enables LTR mode.

### Parameters

This hook accepts no parameters.

### Context Dependency

The hook requires the `SingletonEnvironmentContext` to be available, which is provided by the `Reshaped` component. The context contains the RTL state tuple that this hook accesses.

## Code Examples

### Basic RTL State Access

```typescript
import React from 'react';
import { useRTL } from 'reshaped';

function LayoutComponent() {
  const [isRTL] = useRTL();

  return (
    <div style={{
      textAlign: isRTL ? 'right' : 'left',
      direction: isRTL ? 'rtl' : 'ltr'
    }}>
      <p>This text will be aligned based on the current reading direction.</p>
    </div>
  );
}
```

### Dynamic RTL Toggle

```typescript
import React from 'react';
import { useRTL } from 'reshaped';

function LanguageSwitcher() {
  const [isRTL, setRTL] = useRTL();

  const handleLanguageChange = (language: string) => {
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    setRTL(rtlLanguages.includes(language));
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>
        English (LTR)
      </button>
      <button onClick={() => handleLanguageChange('ar')}>
        العربية (RTL)
      </button>
      <p>Current direction: {isRTL ? 'RTL' : 'LTR'}</p>
    </div>
  );
}
```

### Conditional Component Positioning

```typescript
import React from 'react';
import { useRTL } from 'reshaped';

function NavigationButtons() {
  const [isRTL] = useRTL();

  return (
    <div className="navigation-container">
      <button
        className={`nav-button ${isRTL ? 'nav-button--rtl-prev' : 'nav-button--ltr-prev'}`}
        aria-label={isRTL ? 'Next' : 'Previous'}
      >
        {isRTL ? '→' : '←'}
      </button>
      <button
        className={`nav-button ${isRTL ? 'nav-button--rtl-next' : 'nav-button--ltr-next'}`}
        aria-label={isRTL ? 'Previous' : 'Next'}
      >
        {isRTL ? '←' : '→'}
      </button>
    </div>
  );
}
```

### Scroll Position Calculations

```typescript
import React from 'react';
import { useRTL } from 'reshaped';

function ScrollableList({ items }: { items: string[] }) {
  const [isRTL] = useRTL();
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    // Adjust scroll calculations for RTL
    const scrollLeft = scrollRef.current.scrollLeft * (isRTL ? -1 : 1);
    const isAtStart = scrollLeft <= 1;
    const isAtEnd = scrollLeft + scrollRef.current.clientWidth >=
                   scrollRef.current.scrollWidth - 1;

    console.log({ isAtStart, isAtEnd });
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={{
        overflowX: 'auto',
        direction: isRTL ? 'rtl' : 'ltr'
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="list-item">
          {item}
        </div>
      ))}
    </div>
  );
}
```

### Setup with Reshaped Provider

```typescript
import React from 'react';
import { Reshaped } from 'reshaped';
import { MyApp } from './MyApp';

function AppRoot() {
  return (
    <Reshaped defaultRTL={false}>
      <MyApp />
    </Reshaped>
  );
}

// Now useRTL can be used anywhere within MyApp
function MyApp() {
  const [isRTL, setRTL] = useRTL();

  return (
    <div>
      <button onClick={() => setRTL(!isRTL)}>
        Toggle Direction
      </button>
      <p>Current: {isRTL ? 'RTL' : 'LTR'}</p>
    </div>
  );
}
```

## Implementation Details

The `useRTL` hook is implemented as a simple context consumer that accesses the RTL state from `SingletonEnvironmentContext`. The underlying state management is handled by the `useSingletonEnvironment` hook, which:

1. Maintains RTL state using React's `useState`
2. Automatically observes changes to the document's `dir` attribute using `MutationObserver`
3. Updates the document's `dir` attribute when the state changes programmatically
4. Provides bidirectional synchronization between the React state and DOM attribute

The hook follows the React tuple pattern `[value, setter]` similar to `useState`, making it intuitive for developers familiar with React's state management patterns.

## RTL Considerations

When working with RTL layouts, consider these important aspects:

- **Text Direction**: Use the `direction` CSS property to control text flow
- **Layout Mirroring**: Icons, navigation elements, and UI components should mirror horizontally
- **Scroll Behavior**: Scroll positions behave differently in RTL contexts
- **Positioning**: Absolute positioning (left/right) needs adjustment in RTL
- **Animation Direction**: Sliding animations should respect reading direction

## Best Practices

1. **Consistent Usage**: Always use the hook's RTL state instead of manually checking the `dir` attribute
2. **Performance**: Destructure only the values you need (`const [isRTL] = useRTL()` if you don't need the setter)
3. **Accessibility**: Ensure your RTL implementations maintain proper accessibility semantics
4. **Testing**: Test your components in both RTL and LTR modes to ensure proper behavior
5. **CSS Integration**: Consider using CSS logical properties (`inline-start`, `inline-end`) for better RTL support

## Related Components

- **`Reshaped`**: The root provider component that must wrap your application to enable RTL functionality
- **`Carousel`**: Uses `useRTL` for proper navigation button behavior and scroll calculations
- **`Slider`**: Adjusts handle positioning and value calculations based on reading direction
- **`DropdownMenu`**: Positions dropdown content appropriately for RTL layouts
- **`Tabs`**: Handles tab navigation and indicator positioning in RTL contexts
- **`Flyout`**: Adjusts popup positioning logic for RTL layouts

The hook integrates seamlessly with all reshaped components that need directional awareness, ensuring consistent behavior across your entire application.
