# Reshaped Design System Component Manifest

This document provides a comprehensive list of all components and utilities in the Reshaped design system (version 3.7.4), with their unique IDs, names, and brief descriptions.

## Components

| ID | Name | Brief Description |
|----|------|-------------------|
| `action-bar` | ActionBar | A positioned container component that displays actionable content at fixed positions on the screen or within containers |
| `alert` | Alert | A versatile notification component for displaying important information, warnings, status updates, or calls to action in both inline and block layouts |
| `autocomplete` | Autocomplete | A searchable dropdown input component that provides auto-completion functionality with keyboard navigation and selection capabilities |
| `avatar` | Avatar | A circular or square display component for user profile images, initials, or icons that provides visual identification |
| `badge` | Badge | A flexible visual indicator component used to display status, count, or contextual information with support for colors, sizes, icons, and interactive features |
| `button` | Button | A versatile interactive button component that supports multiple variants, colors, sizes, and states for triggering actions within the interface |
| `breadcrumbs` | Breadcrumbs | A navigation component that displays a hierarchical path of links, allowing users to understand their current location within a site or application structure |
| `calendar` | Calendar | A flexible and accessible date picker component that supports both single date selection and date range selection with extensive customization options |
| `card` | Card | A versatile container component that provides a styled surface with elevation, borders, and interactive capabilities for grouping related content |
| `carousel` | Carousel | A responsive, horizontally scrollable carousel component with navigation controls for displaying a collection of items in a space-efficient layout |
| `checkbox` | Checkbox | A form control component that allows users to select one or more options from a list or toggle a single option on/off |
| `checkbox-group` | CheckboxGroup | A container component that manages the state and behavior of multiple related checkboxes, providing both controlled and uncontrolled modes for group selection |
| `context-menu` | ContextMenu | A context menu component that displays a menu of actions when users right-click on a target element |
| `divider` | Divider | A visual separator component that creates horizontal or vertical dividing lines between content sections, with optional labeling support |
| `dropdown-menu` | DropdownMenu | A composable dropdown menu component that provides an accessible menu interface with trigger, content, sections, items, and nested submenu support |
| `file-upload` | FileUpload | A flexible file upload component that supports drag-and-drop functionality, file selection via click, and customizable trigger elements |
| `hotkey` | Hotkey | A visual representation of keyboard shortcuts that displays keys in a styled kbd element with optional active state styling |
| `link` | Link | A versatile clickable link component that provides navigation functionality with customizable styling, colors, and icon support |
| `loader` | Loader | A customizable spinning loader component for indicating loading states and progress in user interfaces |
| `menu-item` | MenuItem | A flexible menu item component that provides interactive list elements with icons, slots, and various visual states for navigation and selection interfaces |
| `modal` | Modal | A flexible dialog component that displays content in an overlay, supporting various positioning, sizing, and interaction patterns with built-in accessibility features and gesture support |
| `number-field` | NumberField | A specialized numeric input field component with built-in increment/decrement controls and validation |
| `pagination` | Pagination | A navigation component that allows users to navigate through multiple pages of content with page numbers and previous/next controls |
| `pin-field` | PinField | A specialized input component designed for entering PIN codes, verification codes, and other sequential character inputs with visual character separation and pattern validation |
| `popover` | Popover | A layered component that displays floating content positioned relative to a trigger element |
| `progress` | Progress | A linear progress bar component that displays completion percentage with customizable colors, sizes, and animated transitions |
| `progress-indicator` | ProgressIndicator | A visual progress indicator component that displays a series of dots representing steps in a process, with support for animation and different visual themes |
| `radio` | Radio | A form input component that allows users to select a single option from a group of mutually exclusive choices |
| `radio-group` | RadioGroup | A container component that manages a group of radio buttons, providing both controlled and uncontrolled state management with shared context for radio button selection |
| `scrim` | Scrim | A versatile overlay component that renders content over a background with gradient effects and positioning options for creating modal-like experiences and highlighting content |
| `select` | Select | A versatile form control component that provides both native HTML select functionality with predefined options and custom button-based triggers for dropdown menus and other interactive behaviors |
| `skeleton` | Skeleton | A loading placeholder component that displays an animated shimmer effect to indicate content is being loaded |
| `slider` | Slider | A customizable range input component that allows users to select single values or value ranges through an interactive draggable interface |
| `stepper` | Stepper | A compound component for creating step-by-step navigation interfaces with visual progress indicators |
| `switch` | Switch | A toggle switch component that allows users to select between two states (on/off, enabled/disabled) with visual feedback and label support |
| `table` | Table | A flexible data table component for displaying structured content in rows and columns with support for borders, alignment, and interactive features |
| `tabs` | Tabs | A fully accessible tabbed interface component that allows users to switch between different panels of content using keyboard navigation and mouse interaction |
| `text-area` | TextArea | A flexible multi-line text input component with support for various sizes, styles, auto-resize functionality, and form integration |
| `text-field` | TextField | A flexible text input component that supports various configurations including icons, affixes, slots, and integration with form controls |
| `timeline` | Timeline | A vertical timeline component that displays a sequence of events or steps in chronological order with optional visual markers |
| `toast` | Toast | A notification component that displays temporary messages to users in various positions on the screen with customizable styling, actions, and automatic dismissal |
| `toggle-button` | ToggleButton | A toggle button component that allows users to switch between checked and unchecked states, functioning as an interactive button with binary selection capability |
| `toggle-button-group` | ToggleButtonGroup | A group container for toggle buttons that manages selection state and provides keyboard navigation for single or multiple selection modes |
| `tooltip` | Tooltip | A hover-triggered overlay component that displays contextual information about interface elements |

## Utility Components

| ID | Name | Brief Description |
|----|------|-------------------|
| `reshaped` | Reshaped | The root wrapper component that provides theme configuration, color mode management, RTL support, and global context providers for the Reshaped design system |
| `accordion` | Accordion | A collapsible content component that allows users to expand and collapse sections with accessible keyboard navigation and customizable trigger/content areas |
| `actionable` | Actionable | A universal utility component that renders interactive elements as buttons, links, or custom elements while maintaining consistent accessibility and behavior patterns |
| `container` | Container | A layout utility component that provides centered content with configurable padding, dimensions, and flexbox alignment properties |
| `dismissible` | Dismissible | A utility component that provides a dismissible container with an optional close button, commonly used for notifications, alerts, banners, and media overlays |
| `flyout` | Flyout | A low-level utility component for creating positioned overlay content relative to trigger elements |
| `form-control` | FormControl | A comprehensive form field wrapper that provides labels, helper text, error messages, and validation states for form inputs |
| `grid` | Grid | A CSS Grid layout component for creating responsive grid-based layouts with configurable columns, gaps, and alignment |
| `hidden` | Hidden | A utility component for conditionally hiding content based on responsive breakpoints or visibility states |
| `hidden-visually` | HiddenVisually | A utility component for hiding content visually while keeping it accessible to screen readers |
| `icon` | Icon | A component for displaying SVG icons with consistent sizing, coloring, and alignment throughout the design system |
| `image` | Image | An enhanced image component with built-in loading states, aspect ratio controls, and responsive behavior |
| `overlay` | Overlay | A low-level utility component for creating modal overlays, backdrops, and layered content with portal rendering |
| `resizable` | Resizable | A utility component that enables resizable panels and containers with drag handles and size constraints |
| `scroll-area` | ScrollArea | A styled scrollable container component with custom scrollbars and overflow management |
| `text` | Text | A typography component that provides consistent text styling, variants, and responsive typography throughout the design system |
| `view` | View | A fundamental layout component that provides flexible container functionality with responsive design capabilities, spacing controls, and flexbox layout options |

## Hooks

| ID | Name | Brief Description |
|----|------|-------------------|
| `use-form-control` | useFormControl | Hook for accessing form control context from child components |
| `use-theme` | useTheme | Hook for accessing and manipulating theme configuration |
| `use-handler-ref` | useHandlerRef | Utility hook for creating stable event handler references |
| `use-hotkeys` | useHotkeys | Hook for managing keyboard shortcuts and hotkey detection |
| `use-isomorphic-layout-effect` | useIsomorphicLayoutEffect | Cross-platform hook that uses useLayoutEffect on the client and useEffect on the server |
| `use-keyboard-mode` | useKeyboardMode | Hook for detecting keyboard navigation mode |
| `use-on-click-outside` | useOnClickOutside | Hook for detecting clicks outside of a specified element |
| `use-responsive-client-value` | useResponsiveClientValue | Hook for accessing responsive values on the client side |
| `use-rtl` | useRTL | Hook for accessing right-to-left text direction context |
| `use-scroll-lock` | useScrollLock | Hook for locking body scroll, typically used with modals and overlays |
| `use-toggle` | useToggle | Hook for managing boolean toggle state with convenience methods |
| `use-toast` | useToast | Hook for showing and managing toast notifications |
| `theme` | Theme | Theme context provider for managing design system themes |

## Utility Functions

| ID | Name | Brief Description |
|----|------|-------------------|
| `class-names` | classNames | Utility function for conditionally joining CSS class names |
| `responsive-prop-dependency` | responsivePropDependency | Utility function for managing responsive prop dependencies |
| `trap-focus` | TrapFocus | Accessibility utility for trapping focus within a container |

## Development Utilities

| ID | Name | Brief Description |
|----|------|-------------------|
| `placeholder` | Placeholder | Development utility component for prototyping and layout testing |

## Summary

- **Total Components**: 44
- **Utility Components**: 17
- **Hooks**: 13
- **Utility Functions**: 3
- **Development Utilities**: 1

**Grand Total**: 78 documented entities

This comprehensive manifest covers all major components, utilities, hooks, and functions exported by the Reshaped design system v3.7.4. Each component has been analyzed for its props, usage patterns, code examples, and relationships with other components to provide thorough documentation for developers.