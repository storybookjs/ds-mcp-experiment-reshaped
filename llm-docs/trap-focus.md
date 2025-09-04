# TrapFocus

## Brief Description

A utility class for managing keyboard focus within specific regions of the DOM, supporting multiple navigation modes including dialog, menu, and bar interactions.

## Keywords

- Focus Management
- Keyboard Navigation
- Accessibility
- Modal
- Menu Navigation
- Screen Reader
- ARIA
- Focus Trap

## Usage Description

The TrapFocus utility is designed to manage and constrain keyboard focus within specific DOM regions, making it essential for creating accessible modal dialogs, dropdown menus, navigation bars, and other interactive components. It provides sophisticated focus management that goes beyond simple focus containment by supporting multiple interaction modes tailored for different UI patterns.

The utility implements a chaining mechanism that allows multiple focus traps to be stacked, automatically managing the focus flow when traps are added or removed. This is particularly useful for complex interfaces where modals can open on top of other modals, or dropdown menus can appear within already focused regions. The class handles edge cases like dynamically changing content, screen reader compatibility, and keyboard mode detection.

TrapFocus integrates with screen reader technologies by automatically applying `aria-hidden` attributes to sibling elements outside the trapped region, ensuring assistive technologies focus only on the relevant content. It supports both real DOM focus and pseudo-focus mechanisms, making it suitable for components like autocomplete dropdowns where visual focus indicators are needed without actually moving the browser's focus point.

## Props Documentation

### Constructor

- **Parameters**: None
- **Returns**: TrapFocus instance
- **Description**: Creates a new TrapFocus instance ready to be configured and activated

### trap(root, options?)

- **root**: `HTMLElement` (required)
  - The DOM element that serves as the container for the focus trap
  - All focusable elements within this container will be included in the navigation cycle
- **options**: `TrapOptions` (optional)
  - Configuration object to customize the trap behavior

#### TrapOptions Properties

- **mode**: `TrapMode` (optional, default: "dialog")
  - **Type**: `"dialog" | "action-menu" | "action-bar" | "content-menu" | "selection-menu"`
  - **Default**: `"dialog"`
  - **Description**: Defines the interaction pattern and keyboard navigation behavior
  - **Values**:
    - `"dialog"`: Complete focus trap with tab navigation until closed (e.g., Modal)
    - `"action-menu"`: Arrow navigation trap, tab moves to next page element (e.g., Dropdown Menu)
    - `"action-bar"`: Same as action-menu but with horizontal arrow navigation
    - `"content-menu"`: Includes content in tab flow, moves to next element after navigation (e.g., Header dropdowns)
    - `"selection-menu"`: Focus stays on trigger, arrow navigation with pseudo-focus (e.g., Autocomplete)

- **onRelease**: `() => void` (optional)
  - **Description**: Callback function executed when the focus trap is released
  - **Example**: Cleanup functions, state updates, or analytics tracking

- **includeTrigger**: `boolean` (optional)
  - **Description**: Whether to include the element that triggered the trap in the navigation cycle
  - **Usage**: Useful for menus where the trigger button should be part of the focus flow

- **initialFocusEl**: `FocusableElement | null` (optional)
  - **Type**: `HTMLButtonElement | HTMLInputElement | null`
  - **Description**: Specific element to receive focus when the trap is activated
  - **Default**: First focusable element in the container

### release(releaseOptions?)

- **releaseOptions**: `ReleaseOptions` (optional)
  - Configuration for how the trap should be released

#### ReleaseOptions Properties

- **withoutFocusReturn**: `boolean` (optional, default: false)
  - **Description**: Whether to skip returning focus to the trigger element when releasing the trap
  - **Usage**: Useful when focus should move to a different element after closing

### Properties

- **trapped**: `boolean` (optional, read-only)
  - **Description**: Indicates whether the focus trap is currently active
  - **Usage**: Check trap state for conditional logic or debugging

- **static chain**: `Chain<TrapFocus>` (read-only)
  - **Description**: Static property managing the chain of active focus traps
  - **Usage**: Internal mechanism for handling nested traps

## Code Examples

### Basic Modal Dialog

```typescript
import { TrapFocus } from "reshaped/utilities/a11y";

const trapFocus = new TrapFocus();
const modalElement = document.getElementById("modal");

// Trap focus when modal opens
trapFocus.trap(modalElement, {
  mode: "dialog",
  onRelease: () => {
    console.log("Modal focus trap released");
  },
});

// Release when modal closes
function closeModal() {
  trapFocus.release();
  modalElement.style.display = "none";
}
```

### Dropdown Menu with Action Navigation

```typescript
import { TrapFocus } from "reshaped/utilities/a11y";

const trapFocus = new TrapFocus();
const dropdownMenu = document.querySelector(".dropdown-menu");
const triggerButton = document.querySelector(".dropdown-trigger");

// Trap focus with arrow navigation
triggerButton.addEventListener("click", () => {
  trapFocus.trap(dropdownMenu, {
    mode: "action-menu",
    includeTrigger: true,
    onRelease: () => {
      dropdownMenu.classList.remove("open");
    },
  });
});

// Auto-release on outside click
document.addEventListener("click", (event) => {
  if (!dropdownMenu.contains(event.target) && event.target !== triggerButton) {
    trapFocus.release();
  }
});
```

### Autocomplete with Selection Menu

```typescript
import { TrapFocus } from "reshaped/utilities/a11y";

const trapFocus = new TrapFocus();
const autocompleteContainer = document.querySelector(".autocomplete");
const inputElement = document.querySelector(".autocomplete-input");

// Setup pseudo-focus trap for autocomplete
inputElement.addEventListener("focus", () => {
  trapFocus.trap(autocompleteContainer, {
    mode: "selection-menu",
    initialFocusEl: inputElement,
    onRelease: () => {
      // Clear pseudo-focus indicators
      autocompleteContainer
        .querySelectorAll("[data-rs-focus]")
        .forEach((el) => el.removeAttribute("data-rs-focus"));
    },
  });
});
```

### Horizontal Action Bar Navigation

```typescript
import { TrapFocus } from "reshaped/utilities/a11y";

const trapFocus = new TrapFocus();
const actionBar = document.querySelector(".toolbar");

// Enable horizontal arrow navigation for toolbar
function activateToolbar() {
  trapFocus.trap(actionBar, {
    mode: "action-bar",
    onRelease: () => {
      actionBar.classList.remove("focused");
    },
  });
  actionBar.classList.add("focused");
}

// Release trap on Escape key
actionBar.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    trapFocus.release();
  }
});
```

### Nested Modal Management

```typescript
import { TrapFocus } from "reshaped/utilities/a11y";

// Primary modal
const primaryTrap = new TrapFocus();
const primaryModal = document.getElementById("primary-modal");

// Secondary modal (confirmation dialog)
const secondaryTrap = new TrapFocus();
const confirmModal = document.getElementById("confirm-modal");

// Open primary modal
function openPrimaryModal() {
  primaryTrap.trap(primaryModal, {
    mode: "dialog",
    onRelease: () => {
      primaryModal.style.display = "none";
    },
  });
}

// Open confirmation dialog on top
function openConfirmDialog() {
  secondaryTrap.trap(confirmModal, {
    mode: "dialog",
    onRelease: () => {
      confirmModal.style.display = "none";
      // Focus automatically returns to primary modal
    },
  });
}

// Close confirmation - focus returns to primary modal automatically
function closeConfirm() {
  secondaryTrap.release();
}
```

## Related Components

### Focus Utilities

- **getFocusableElements**: Function used internally by TrapFocus to identify focusable elements within a container
- **focusElement**: Utility for focusing elements with optional pseudo-focus support
- **getActiveElement**: Function to determine the currently focused element, supporting shadow DOM
- **focusNextElement / focusPreviousElement**: Navigation utilities for moving focus between elements

### Screen Reader Integration

- **TrapScreenReader**: Internal class that manages `aria-hidden` attributes for elements outside the trap region
- Works automatically with TrapFocus in dialog mode to improve screen reader experience

### Chain Management

- **Chain**: Utility class that manages the stack of active focus traps
- Handles automatic cleanup and focus restoration when nested traps are released
- Prevents conflicts between multiple simultaneous traps

### Keyboard Mode Detection

- **checkKeyboardMode**: Utility that determines if the user is navigating via keyboard
- Used internally to optimize focus behavior and prevent unnecessary scroll prevention

### DOM Utilities

- **getShadowRoot**: Helper for working with Shadow DOM elements
- Ensures focus traps work correctly within web components and shadow DOM boundaries

## Accessibility Considerations

TrapFocus implements comprehensive accessibility features including automatic screen reader support through `aria-hidden` management, keyboard-only navigation detection, and support for various interaction patterns. It follows WAI-ARIA guidelines for focus management and integrates seamlessly with assistive technologies. The utility handles edge cases like dynamic content changes through MutationObserver and supports both real and pseudo-focus patterns for maximum flexibility.
