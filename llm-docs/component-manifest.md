# Reshaped Design System Component Manifest

This document provides a comprehensive list of all components, utilities, hooks, and functions available in the reshaped design system.

## Components

### UI Components

| ID                  | Name              | Description                                                                                                                                                                             |
| ------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| action-bar          | ActionBar         | A flexible container component for positioning action elements at specific locations within the viewport or container with animation and elevation support.                             |
| alert               | Alert             | A versatile notification component that displays contextual messages with optional icons, actions, and different color variants to communicate various states and information to users. |
| autocomplete        | Autocomplete      | A searchable input field with dropdown suggestions that supports keyboard navigation and item selection.                                                                                |
| avatar              | Avatar            | A versatile component for displaying user profile images, initials, or icons with customizable sizing, colors, and variants.                                                            |
| badge               | Badge             | A compact, versatile component for displaying status, counts, and labels with support for colors, sizes, icons, and interactive functionality.                                          |
| button              | Button            | A versatile button component for user interactions with comprehensive styling options and built-in loading states.                                                                      |
| breadcrumbs         | Breadcrumbs       | A navigation component that displays the current page's location within a hierarchical site structure, allowing users to understand their position and navigate to parent pages.        |
| calendar            | Calendar          | A versatile date picker component that supports both single date and date range selection with keyboard navigation and accessibility features.                                          |
| card                | Card              | A versatile container component that provides structured content areas with consistent styling, spacing, and interaction capabilities.                                                  |
| carousel            | Carousel          | A horizontal scrolling container component that displays multiple items in a row with navigation controls and responsive item sizing.                                                   |
| checkbox            | Checkbox          | A form control that allows users to select one or multiple options from a set of choices, with support for controlled and uncontrolled states.                                          |
| checkbox-group      | CheckboxGroup     | A container component that manages multiple checkbox selections as a group, providing both controlled and uncontrolled behavior patterns.                                               |
| context-menu        | ContextMenu       | A context menu component that displays a dropdown menu when users right-click on an element.                                                                                            |
| divider             | Divider           | A visual separator component that creates horizontal or vertical dividing lines between content sections.                                                                               |
| dropdown-menu       | DropdownMenu      | A contextual menu component that displays a list of actions or options in an overlay, triggered by user interaction with a button or other control.                                     |
| file-upload         | FileUpload        | A drag-and-drop file upload component with visual feedback and customizable trigger options.                                                                                            |
| hotkey              | Hotkey            | A styled keyboard shortcut indicator component that displays keyboard combinations with visual emphasis and active states.                                                              |
| link                | Link              | A flexible link component that renders as either an anchor tag or button with consistent styling and optional icon support.                                                             |
| loader              | Loader            | A circular spinning loader component that indicates loading or processing states.                                                                                                       |
| menu-item           | MenuItem          | A flexible menu item component that provides actionable items for navigation menus, dropdown lists, and selection interfaces.                                                           |
| modal               | Modal             | A versatile overlay component that presents content in a dialog above the main interface, with support for multiple positioning modes and touch gestures.                               |
| number-field        | NumberField       | A numeric input field with increment/decrement controls for precise number entry.                                                                                                       |
| pagination          | Pagination        | A pagination component that allows users to navigate through multiple pages of content with intelligent page number display and truncation.                                             |
| pin-field           | PinField          | A specialized input component for entering PIN codes, verification codes, or other sequential character inputs with individual character slots.                                         |
| popover             | Popover           | A flexible overlay component that displays contextual content anchored to a trigger element with customizable positioning, styling, and interaction modes.                              |
| progress            | Progress          | A visual indicator component that displays the completion progress of a task or process as a horizontal bar.                                                                            |
| progress-indicator  | ProgressIndicator | A visual indicator that shows the user's progress through a multi-step process or sequence with animated transitions and smart pagination.                                              |
| radio               | Radio             | A customizable radio button component for single selection within a group of options.                                                                                                   |
| radio-group         | RadioGroup        | A form control component that manages a group of radio buttons for single-value selection from multiple options.                                                                        |
| scrim               | Scrim             | A component that overlays content on top of a background with gradient transitions and positioning options.                                                                             |
| select              | Select            | A form control component that allows users to choose from predefined options using either a native HTML select dropdown or a custom button-triggered interface.                         |
| skeleton            | Skeleton          | A loading placeholder component that displays a shimmering animation to indicate content is being loaded.                                                                               |
| slider              | Slider            | A versatile slider input component that supports both single value and range selection with customizable styling and accessibility features.                                            |
| stepper             | Stepper           | A multi-step process indicator that shows progress through sequential steps with optional content areas and navigation controls.                                                        |
| switch              | Switch            | A binary control component that allows users to toggle between on and off states.                                                                                                       |
| table               | Table             | A flexible table component for displaying structured data in rows and columns with comprehensive styling and interaction capabilities.                                                  |
| tabs                | Tabs              | A tabbed interface component that organizes content into panels with corresponding navigable tabs.                                                                                      |
| text-area           | TextArea          | A multi-line text input component with configurable variants, sizes, and automatic resize functionality.                                                                                |
| text-field          | TextField         | A versatile text input component that supports various visual styles, icons, affixes, and slot-based attachments for form data collection.                                              |
| timeline            | Timeline          | A component for displaying chronological sequences of events or content items with optional visual markers and connecting lines.                                                        |
| toast               | Toast             | A comprehensive toast notification system that provides temporary feedback to users through dismissible overlay messages positioned at screen edges.                                    |
| toggle-button       | ToggleButton      | A clickable button component that maintains toggle state, functioning like a checkbox with visual button appearance and supporting both controlled and uncontrolled modes.              |
| toggle-button-group | ToggleButtonGroup | A component that groups multiple toggle buttons together with coordinated selection state management.                                                                                   |
| tooltip             | Tooltip           | A hover-triggered overlay that displays contextual information or help text relative to a trigger element.                                                                              |

### Utility Components

| ID              | Name           | Description                                                                                                                                                                            |
| --------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| reshaped        | Reshaped       | The root provider component that initializes the Reshaped design system with theme, color mode, internationalization, and global providers.                                            |
| accordion       | Accordion      | An interactive disclosure component that allows users to expand and collapse content sections with smooth animations.                                                                  |
| actionable      | Actionable     | A flexible utility component that provides interactive behavior for any content, automatically rendering as appropriate HTML elements (button, link, or span) based on provided props. |
| container       | Container      | A responsive layout component that provides consistent horizontal padding and centering behavior for content sections.                                                                 |
| dismissible     | Dismissible    | A utility component that adds a dismissible overlay with an optional close button to any content.                                                                                      |
| flyout          | Flyout         | A versatile positioning utility component that renders content relative to a trigger element, supporting multiple interaction modes and positioning strategies.                        |
| form-control    | FormControl    | A wrapper component that provides accessible form field structure with label, helper text, and error message support.                                                                  |
| grid            | Grid           | A flexible CSS Grid layout component that provides comprehensive grid-based layout capabilities with responsive design support and grid item positioning controls.                     |
| hidden          | Hidden         | A utility component for controlling element visibility across different viewport sizes with responsive breakpoints.                                                                    |
| hidden-visually | HiddenVisually | A utility component that visually hides content while keeping it accessible to screen readers and other assistive technologies.                                                        |
| icon            | Icon           | A utility component for rendering SVG icons with consistent sizing, colors, and accessibility attributes.                                                                              |
| image           | Image          | A responsive image component with smart loading states, fallback support, and flexible display modes.                                                                                  |
| overlay         | Overlay        | A modal overlay component that creates a backdrop layer with focus management and accessibility features.                                                                              |
| resizable       | Resizable      | A flexible layout component that enables users to dynamically adjust the size of panels or sections through interactive dragging handles.                                              |
| scroll-area     | ScrollArea     | A customizable scrollable container component with optional custom scrollbars for both horizontal and vertical overflow content.                                                       |
| text            | Text           | A flexible typography component for displaying text content with consistent styling and semantic HTML structure.                                                                       |
| view            | View           | A versatile layout component that provides flexbox-based container functionality with comprehensive styling, spacing, and positioning capabilities.                                    |

## Hooks

| ID                           | Name                      | Description                                                                                                                                                         |
| ---------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| use-form-control             | useFormControl            | A React hook that provides form control context data including attributes, required status, error state, and disabled state for form input components.              |
| theme-use-theme              | Theme/useTheme            | Theme component provides theming context and color mode management for the reshaped design system, while useTheme hook provides access to theme state and controls. |
| use-handler-ref              | useHandlerRef             | A React hook that wraps event handlers in a stable ref to prevent unnecessary effect re-runs while keeping the handler implementation up-to-date.                   |
| use-hotkeys                  | useHotkeys                | A React hook for handling keyboard shortcuts with support for key combinations, modifier keys, and scoped event handling within specific DOM elements.              |
| use-isomorphic-layout-effect | useIsomorphicLayoutEffect | A cross-platform hook that uses useLayoutEffect on the client and useEffect on the server to prevent SSR hydration issues.                                          |
| use-keyboard-mode            | useKeyboardMode           | A React hook that provides programmatic control over keyboard interaction mode for improved accessibility.                                                          |
| use-on-click-outside         | useOnClickOutside         | A custom React hook that detects clicks outside specified elements and executes a callback handler.                                                                 |
| use-responsive-client-value  | useResponsiveClientValue  | A React hook that resolves responsive values on the client side by detecting the current viewport and returning the appropriate value for that breakpoint.          |
| use-rtl                      | useRTL                    | A React hook that provides access to the current RTL state and a function to toggle reading direction for internationalization support.                             |
| use-scroll-lock              | useScrollLock             | React hook for managing scroll behavior on containers or document body with platform-specific locking strategies.                                                   |
| use-toggle                   | useToggle                 | A React hook that manages boolean state with convenient toggle, activate, and deactivate functions for on/off UI interactions.                                      |

## Utilities

| ID                | Name              | Description                                                                                                                                                        |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| utility-functions | Utility Functions | Core utilities for handling CSS class names and responsive properties in the reshaped design system                                                                |
| trap-focus        | TrapFocus         | A utility class for managing keyboard focus within specific regions of the DOM, supporting multiple navigation modes including dialog, menu, and bar interactions. |

## Development Utilities

| ID          | Name        | Description                                                                                                               |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| placeholder | Placeholder | A development utility component that creates a styled placeholder box for Storybook demonstrations and component testing. |

---

**Total Components**: 44 UI Components + 17 Utility Components = 61 Components  
**Total Hooks**: 11 React Hooks  
**Total Utilities**: 2 Utility Functions + 1 Development Utility = 3 Utilities

**Grand Total**: 75 documented entities

All documentation files are available in the `llm-docs2/` directory with comprehensive details for each entity including props, usage examples, accessibility considerations, and integration guidance.
