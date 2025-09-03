# useToggle

## Overview

The `useToggle` hook is a custom React hook that provides a simple and efficient way to manage boolean state with convenient toggle functionality. It encapsulates the common pattern of toggling between true/false states while providing explicit activation and deactivation methods for more controlled state management.

## Purpose

This hook is designed to simplify boolean state management in React components, particularly useful for:
- Modal and dialog open/close states  
- Sidebar or menu visibility toggling
- Feature flags and settings toggles
- Form field show/hide functionality
- Accordion expand/collapse states
- Any UI element that needs on/off state management

## API Reference

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `defaultValue` | `boolean` | No | `false` | The initial boolean state value |

### Return Value

The hook returns an object with the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `active` | `boolean` | The current boolean state value |
| `activate` | `() => void` | Function to set state to `true` |
| `deactivate` | `() => void` | Function to set state to `false` |
| `toggle` | `(targetValue?: any) => void` | Function to toggle state or set to specific boolean value |

### Toggle Function Behavior

The `toggle` function has special behavior for backwards compatibility:
- When called without arguments: `toggle()` - toggles the current state
- When called with a boolean: `toggle(true)` or `toggle(false)` - sets state to the specified value
- When called with non-boolean values (like event objects): treats as toggle operation

This design allows the toggle function to work seamlessly as an event handler (e.g., `onClick={toggle}`) while also supporting explicit value setting.

## Usage Examples

### Basic Toggle

```typescript
import { useToggle } from 'reshaped';

function ToggleButton() {
  const { active, toggle } = useToggle();
  
  return (
    <button onClick={toggle}>
      {active ? 'On' : 'Off'}
    </button>
  );
}
```

### With Default Value

```typescript
import { useToggle } from 'reshaped';

function ModalComponent() {
  const { active: isOpen, activate: openModal, deactivate: closeModal } = useToggle(false);
  
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <button onClick={closeModal}>Close</button>
          <p>Modal content</p>
        </div>
      )}
    </>
  );
}
```

### Explicit State Control

```typescript
import { useToggle } from 'reshaped';

function FeatureToggle() {
  const { active: featureEnabled, activate, deactivate, toggle } = useToggle(true);
  
  return (
    <div>
      <p>Feature is {featureEnabled ? 'enabled' : 'disabled'}</p>
      <button onClick={activate}>Enable</button>
      <button onClick={deactivate}>Disable</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```

### With Controlled Value Setting

```typescript
import { useToggle } from 'reshaped';

function ConditionalToggle() {
  const { active, toggle } = useToggle();
  
  const handleToggle = (condition: boolean) => {
    // Set specific value based on condition
    toggle(condition);
  };
  
  return (
    <div>
      <p>State: {active ? 'Active' : 'Inactive'}</p>
      <button onClick={() => handleToggle(true)}>Force Active</button>
      <button onClick={() => handleToggle(false)}>Force Inactive</button>
      <button onClick={() => toggle()}>Regular Toggle</button>
    </div>
  );
}
```

### Integration with Forms

```typescript
import { useToggle } from 'reshaped';

function FormWithToggle() {
  const { active: showAdvanced, toggle: toggleAdvanced } = useToggle();
  const { active: isSubscribed, activate: subscribe, deactivate: unsubscribe } = useToggle(true);
  
  return (
    <form>
      <input type="text" placeholder="Name" />
      
      <label>
        <input 
          type="checkbox" 
          checked={isSubscribed}
          onChange={(e) => e.target.checked ? subscribe() : unsubscribe()}
        />
        Subscribe to newsletter
      </label>
      
      <button type="button" onClick={toggleAdvanced}>
        {showAdvanced ? 'Hide' : 'Show'} Advanced Options
      </button>
      
      {showAdvanced && (
        <div>
          <input type="text" placeholder="Advanced setting" />
        </div>
      )}
    </form>
  );
}
```

## State Management Patterns

### Descriptive Destructuring

Use descriptive names when destructuring to improve code readability:

```typescript
// Good: Descriptive names
const { active: isModalOpen, activate: openModal, deactivate: closeModal } = useToggle();

// Less clear: Generic names  
const { active, activate, deactivate } = useToggle();
```

### Multiple Toggles in One Component

```typescript
function MultiToggleComponent() {
  const sidebar = useToggle();
  const modal = useToggle();
  const notifications = useToggle(true); // Default enabled
  
  return (
    <div>
      <button onClick={sidebar.toggle}>
        {sidebar.active ? 'Hide' : 'Show'} Sidebar
      </button>
      
      <button onClick={modal.activate}>Open Modal</button>
      
      <button onClick={notifications.toggle}>
        Notifications {notifications.active ? 'On' : 'Off'}
      </button>
      
      {/* Render UI based on state */}
      {sidebar.active && <aside>Sidebar content</aside>}
      {modal.active && <div>Modal content</div>}
    </div>
  );
}
```

## Best Practices

### 1. Use Descriptive Variable Names
Always destructure with meaningful names that describe what the boolean represents:

```typescript
// Preferred
const { active: isVisible, toggle: toggleVisibility } = useToggle();
const { active: isExpanded, activate: expand, deactivate: collapse } = useToggle();
```

### 2. Initialize with Appropriate Defaults
Consider the expected initial state of your component:

```typescript
// Modal should start closed
const { active: isModalOpen } = useToggle(false);

// Settings might start enabled
const { active: isDarkMode } = useToggle(true);
```

### 3. Use Specific Methods for Clarity
When you need to explicitly set a state, prefer `activate`/`deactivate` over `toggle` with parameters:

```typescript
// Clear intent
const handleSuccess = () => activate();
const handleError = () => deactivate();

// Less clear
const handleSuccess = () => toggle(true);
const handleError = () => toggle(false);
```

### 4. Event Handler Compatibility
The toggle function works seamlessly as an event handler:

```typescript
// Works with any event handler
<button onClick={toggle}>Toggle</button>
<input type="checkbox" onChange={toggle} />
```

### 5. Memoization Benefits
The hook uses React's `useMemo` and `useCallback` internally for optimal performance, preventing unnecessary re-renders in child components.

## Performance Considerations

- All returned functions are memoized with `useCallback` to prevent unnecessary re-renders
- The returned object is memoized with `useMemo` for reference stability
- No additional dependencies or complex state logic - keeps bundle size minimal
- Works efficiently with React's concurrent features and Strict Mode

## Related Components

- **Switch**: UI component for boolean input that often uses similar toggle logic
- **ToggleButton**: Button component that uses `useToggle` internally for uncontrolled state
- **ToggleButtonGroup**: Group of toggle buttons that may use toggle state management
- **Modal**: Components that need open/close state management
- **Accordion**: Components that need expand/collapse state management
- **Checkbox**: Form inputs that manage boolean state

## TypeScript Support

The hook is fully typed with TypeScript:

```typescript
declare const useToggle: (defaultValue?: boolean) => {
    active: boolean;
    activate: () => void;
    deactivate: () => void;
    toggle: (targetValue?: any) => void;
};
```

Note that the `toggle` function accepts `any` type for the `targetValue` parameter to maintain backwards compatibility with event handlers and other non-boolean values, but boolean values are the intended use case for explicit state setting.