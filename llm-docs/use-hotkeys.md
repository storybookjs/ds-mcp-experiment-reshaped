# useHotkeys

## Overview

The `useHotkeys` hook provides a declarative way to handle keyboard shortcuts in React applications. It supports complex key combinations, modifier keys, and scoped hotkey handling within specific DOM elements. The hook utilizes a singleton pattern to efficiently manage global keyboard event handling across multiple components.

## Purpose

This hook enables developers to:

- Register keyboard shortcuts with callback functions
- Handle complex key combinations and modifier keys
- Scope hotkeys to specific DOM elements
- Check the current state of pressed keys
- Support cross-platform modifier key handling (mod key)

## API Reference

### Hook Signature

```typescript
function useHotkeys<Element extends HTMLElement>(
  hotkeys: Hotkeys,
  deps?: unknown[],
  options?: {
    ref?: React.RefObject<Element | null>;
    disabled?: boolean;
    preventDefault?: boolean;
  },
): {
  ref: React.RefObject<Element | null>;
  checkHotkeyState: (key: string) => boolean;
};
```

### Parameters

#### `hotkeys: Hotkeys`

**Type:** `Record<string, ((e?: KeyboardEvent) => void) | null>`
**Required:** Yes

An object mapping hotkey combinations to callback functions. Keys can be:

- Single keys: `"a"`, `"Enter"`, `"Escape"`
- Key combinations: `"ctrl+a"`, `"shift+b+n"`, `"meta+k"`
- Multiple hotkeys: `"a,b"` (comma-separated for alternative triggers)
- Cross-platform modifier: `"mod+v"` (represents Cmd on Mac, Ctrl on Windows/Linux)

#### `deps?: unknown[]`

**Type:** `unknown[]`
**Required:** No
**Default:** `[]`

Additional dependencies for the effect that registers hotkeys. Similar to `useEffect` dependencies.

#### `options?: object`

**Type:** Object with optional properties
**Required:** No

##### `options.ref?: React.RefObject<Element | null>`

**Type:** `React.RefObject<Element | null>`
**Required:** No

Custom ref to scope hotkeys to a specific DOM element. If not provided, a ref is automatically created.

##### `options.disabled?: boolean`

**Type:** `boolean`
**Required:** No
**Default:** `false`

When `true`, disables all registered hotkeys.

##### `options.preventDefault?: boolean`

**Type:** `boolean`
**Required:** No
**Default:** `false`

When `true`, prevents the default browser behavior for the registered hotkeys.

### Return Value

#### `ref: React.RefObject<Element | null>`

A React ref that should be attached to the DOM element where hotkeys should be active. If a custom ref was provided in options, returns that ref.

#### `checkHotkeyState: (key: string) => boolean`

A function to check if a specific key or key combination is currently pressed.

## Usage Examples

### Basic Single Key Hotkeys

```typescript
import { useHotkeys } from 'reshaped';

function MyComponent() {
  const { ref } = useHotkeys({
    'a': () => console.log('A key pressed'),
    'Enter': () => console.log('Enter pressed'),
    'Escape': () => console.log('Escape pressed'),
  });

  return <div ref={ref}>Press A, Enter, or Escape</div>;
}
```

### Key Combinations with Modifiers

```typescript
import { useHotkeys } from 'reshaped';

function Editor() {
  const { ref } = useHotkeys({
    'ctrl+s': () => saveDocument(),
    'ctrl+shift+s': () => saveAsDocument(),
    'meta+k': () => openCommandPalette(),
    'shift+b+n': () => createNewBlock(),
  });

  return <div ref={ref}>Editor with keyboard shortcuts</div>;
}
```

### Cross-Platform Modifier Keys

```typescript
import { useHotkeys } from 'reshaped';

function CrossPlatformComponent() {
  const { ref } = useHotkeys({
    // Uses Cmd on Mac, Ctrl on Windows/Linux
    'mod+v': () => paste(),
    'mod+c': () => copy(),
    'mod+x': () => cut(),
    'mod+z': () => undo(),
    'mod+shift+z': () => redo(),
  });

  return <div ref={ref}>Cross-platform shortcuts</div>;
}
```

### Multiple Hotkey Alternatives

```typescript
import { useHotkeys } from 'reshaped';

function NavigationComponent() {
  const { ref } = useHotkeys({
    // Either 'h' or 'ArrowLeft' triggers the same action
    'h,ArrowLeft': () => navigateLeft(),
    'l,ArrowRight': () => navigateRight(),
    'j,ArrowDown': () => navigateDown(),
    'k,ArrowUp': () => navigateUp(),
  });

  return <div ref={ref}>Navigation with vim-like keys</div>;
}
```

### Checking Key State

```typescript
import { useHotkeys } from 'reshaped';

function KeyStateComponent() {
  const { ref, checkHotkeyState } = useHotkeys({
    'shift+b+n': () => console.log('Combination pressed'),
  });

  const isShiftPressed = checkHotkeyState('shift');
  const isBPressed = checkHotkeyState('b');
  const isNPressed = checkHotkeyState('n');
  const isCombinationPressed = checkHotkeyState('shift+b+n');

  return (
    <div ref={ref}>
      <div>Shift: {isShiftPressed ? 'pressed' : 'not pressed'}</div>
      <div>B: {isBPressed ? 'pressed' : 'not pressed'}</div>
      <div>N: {isNPressed ? 'pressed' : 'not pressed'}</div>
      <div>Combination: {isCombinationPressed ? 'active' : 'inactive'}</div>
    </div>
  );
}
```

### Scoped Hotkeys with Custom Ref

```typescript
import { useHotkeys } from 'reshaped';

function ScopedComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  useHotkeys({
    'ctrl+enter': () => submitForm(),
    'escape': () => clearInput(),
  }, [], {
    ref: inputRef,
    preventDefault: true,
  });

  return (
    <input
      ref={inputRef}
      placeholder="Press Ctrl+Enter to submit, Escape to clear"
    />
  );
}
```

### Conditional Hotkeys

```typescript
import { useHotkeys } from 'reshaped';

function ConditionalHotkeys({ editMode }: { editMode: boolean }) {
  const { ref } = useHotkeys({
    'e': editMode ? null : () => enterEditMode(),
    'ctrl+s': editMode ? () => save() : null,
    'escape': editMode ? () => exitEditMode() : null,
  }, [editMode]);

  return <div ref={ref}>Conditional hotkey handling</div>;
}
```

### Hotkeys with Dependencies

```typescript
import { useHotkeys } from 'reshaped';

function ComponentWithDeps({ selectedId }: { selectedId: string }) {
  const { ref } = useHotkeys({
    'Delete': () => deleteItem(selectedId),
    'Enter': () => editItem(selectedId),
  }, [selectedId]); // Re-register when selectedId changes

  return <div ref={ref}>Item actions</div>;
}
```

## Key Features

### Key Combination Support

The hook supports various key combination formats:

- **Single keys**: `"a"`, `"Enter"`, `" "` (space)
- **Combinations**: `"ctrl+a"`, `"shift+b+n"`
- **Alternative keys**: `"a,b"` (either key triggers)
- **Case insensitive**: `"A + b"` is normalized to `"a+b"`
- **Order independent**: `"b+a"` matches `"a+b"`

### Modifier Key Handling

- **Cross-platform `mod` key**: Automatically maps to `Cmd` on Mac, `Ctrl` on Windows/Linux
- **Standard modifiers**: `ctrl`, `shift`, `alt`, `meta`
- **Special handling**: Alt key combinations properly handle modified key values

### Event Scoping

Hotkeys are scoped to the element referenced by the returned `ref`. Events only trigger when:

- The target element or its descendants have focus
- The event target is within the scoped element

### Performance Optimizations

- **Singleton pattern**: Global keyboard event listeners are shared across all hook instances
- **Efficient key mapping**: Keys are normalized and sorted for consistent matching
- **Conditional registration**: Hotkeys are only active when components are mounted and not disabled

## Best Practices

### Key Combination Design

```typescript
// Good: Use standard modifier conventions
("ctrl+s", "meta+k", "shift+enter");

// Good: Use mod for cross-platform shortcuts
("mod+c", "mod+v", "mod+z");

// Avoid: Complex combinations that conflict with browser shortcuts
("ctrl+shift+alt+t"); // Too complex
```

### Performance Considerations

```typescript
// Good: Include relevant dependencies
useHotkeys(
  {
    delete: () => deleteItem(selectedId),
  },
  [selectedId],
);

// Good: Disable when not needed
useHotkeys(hotkeys, deps, {
  disabled: !isActive,
});

// Good: Use null for conditional hotkeys
useHotkeys({
  space: isPlaying ? () => pause() : () => play(),
  r: canRecord ? () => record() : null,
});
```

### Accessibility

```typescript
// Good: Provide visual feedback
function HotkeyButton() {
  const { ref, checkHotkeyState } = useHotkeys({
    'space': () => onClick(),
  });

  return (
    <button
      ref={ref}
      className={checkHotkeyState('space') ? 'pressed' : ''}
    >
      Click me (or press Space)
    </button>
  );
}
```

### Event Handling

```typescript
// Good: Prevent default for custom shortcuts
useHotkeys(
  {
    "ctrl+k": () => openSearch(),
  },
  [],
  {
    preventDefault: true, // Prevents browser's address bar focus
  },
);

// Good: Scope to specific areas
useHotkeys(
  {
    "arrow keys": () => navigate(),
  },
  [],
  {
    ref: gameAreaRef, // Only active in game area
  },
);
```

## Integration with Reshaped Components

The `useHotkeys` hook integrates seamlessly with other Reshaped components:

### With Hotkey Component

```typescript
import { useHotkeys, Hotkey } from 'reshaped';

function CommandPalette() {
  const { checkHotkeyState } = useHotkeys({
    'meta+k': () => openPalette(),
  });

  return (
    <Hotkey active={checkHotkeyState('meta+k')}>
      ⌘K
    </Hotkey>
  );
}
```

### With Form Components

```typescript
import { useHotkeys, TextField, Button } from 'reshaped';

function SearchForm() {
  const searchRef = useRef<HTMLInputElement>(null);

  useHotkeys({
    'ctrl+f': () => searchRef.current?.focus(),
    'escape': () => searchRef.current?.blur(),
  });

  return (
    <TextField
      ref={searchRef}
      placeholder="Search (Ctrl+F to focus)"
    />
  );
}
```

## Related Components and Hooks

- **Hotkey Component**: Visual component for displaying keyboard shortcuts
- **SingletonHotkeysProvider**: Context provider that manages global hotkey state
- **useSingletonHotkeys**: Lower-level hook for direct access to hotkey store
