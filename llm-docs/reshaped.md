# Reshaped

**Component Name**: Reshaped

**Brief Description**: The root provider component that initializes the Reshaped design system with theme, color mode, internationalization, and global providers.

**Keywords**: Provider, Theme, Color Mode, RTL, Viewport, Toast, Design System Root, Context Provider, Internationalization

## Usage Description

The Reshaped component serves as the essential root provider for the Reshaped design system. It must wrap your entire React application to provide access to theming, color modes, internationalization (RTL support), responsive design utilities, and toast notifications. This component establishes the design system context that all other Reshaped components depend upon.

Use this component at the highest level of your application, typically wrapping your main App component. It handles theme initialization, color mode management (including dark/light mode switching), right-to-left language support, viewport-based responsive design, and provides the infrastructure for displaying toast notifications throughout your application.

The component supports both global and scoped theming, allowing you to apply themes to your entire document or limit their scope to specific sections of your application. It also provides automatic keyboard navigation detection and hotkey management for enhanced accessibility and user experience.

## Props Documentation

### children
- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The React elements to render within the design system context. Typically your entire application.

### theme
- **Type**: `string | string[]`
- **Required**: No
- **Default**: `undefined`
- **Description**: The name of the theme to apply. Can be a single theme name or an array of theme names for composition. When provided, overrides the defaultTheme.
- **Example**: `"reshaped"`, `"slate"`, `["base", "custom"]`

### defaultTheme
- **Type**: `string | string[]`
- **Required**: No
- **Default**: `"reshaped"`
- **Description**: The fallback theme name to use when no theme prop is provided. Sets the initial theme for the design system.
- **Example**: `"reshaped"`, `"slate"`

### colorMode
- **Type**: `"light" | "dark"`
- **Required**: No
- **Default**: `undefined`
- **Description**: Controlled color mode value. When provided, the color mode is controlled externally rather than managed internally.
- **Example**: `"dark"`, `"light"`

### defaultColorMode
- **Type**: `"light" | "dark"`
- **Required**: No
- **Default**: `"light"` (or inherits from parent if nested)
- **Description**: The initial color mode when the component mounts. Only used when colorMode is not provided for uncontrolled usage.
- **Example**: `"dark"`

### defaultRTL
- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: Whether to enable right-to-left text direction by default. Useful for Arabic, Hebrew, and other RTL languages.
- **Example**: `true`

### defaultViewport
- **Type**: `"s" | "m" | "l" | "xl"`
- **Required**: No
- **Default**: `"s"`
- **Description**: The default viewport size for responsive design calculations. Affects how responsive props are resolved.
- **Example**: `"m"`, `"xl"`

### toastOptions
- **Type**: `Partial<Record<ToastPosition, { width?: string; expanded?: boolean }>>`
- **Required**: No
- **Default**: `undefined`
- **Description**: Configuration options for toast notifications, including width and expansion behavior for different screen positions.
- **Example**: `{ "top": { width: "400px", expanded: true } }`

### scoped
- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When true, applies the theme only to the component's subtree rather than the entire document. Useful for nested theme contexts.
- **Example**: `true`

### className
- **Type**: `string | string[] | (string | null | undefined | false)[]`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS class names to apply to the root container element.
- **Example**: `"custom-wrapper"`, `["theme-wrapper", "app-root"]`

## Code Examples

### Basic Setup
```jsx
import { Reshaped } from 'reshaped';

function App() {
  return (
    <Reshaped theme="reshaped" defaultColorMode="light">
      <YourAppContent />
    </Reshaped>
  );
}
```
This example shows the most basic setup for initializing the Reshaped design system with the default theme and light mode.

### Dark Mode by Default
```jsx
import { Reshaped } from 'reshaped';

function App() {
  return (
    <Reshaped theme="reshaped" defaultColorMode="dark">
      <YourAppContent />
    </Reshaped>
  );
}
```
This example initializes the design system with dark mode as the default color scheme.

### Controlled Color Mode with State
```jsx
import { useState } from 'react';
import { Reshaped, Button } from 'reshaped';

function App() {
  const [colorMode, setColorMode] = useState('light');
  
  const toggleColorMode = () => {
    setColorMode(mode => mode === 'light' ? 'dark' : 'light');
  };
  
  return (
    <Reshaped theme="reshaped" colorMode={colorMode}>
      <Button onClick={toggleColorMode}>
        Switch to {colorMode === 'light' ? 'Dark' : 'Light'} Mode
      </Button>
      <YourAppContent />
    </Reshaped>
  );
}
```
This example demonstrates controlled color mode management, allowing users to toggle between light and dark themes.

### RTL Support for International Applications
```jsx
import { Reshaped } from 'reshaped';

function ArabicApp() {
  return (
    <Reshaped 
      theme="reshaped" 
      defaultColorMode="light" 
      defaultRTL={true}
      defaultViewport="m"
    >
      <YourArabicContent />
    </Reshaped>
  );
}
```
This example shows how to enable RTL support for right-to-left languages with a medium default viewport.

### Scoped Theming for Component Libraries
```jsx
import { Reshaped } from 'reshaped';

function AppWithNestedThemes() {
  return (
    <Reshaped theme="reshaped" defaultColorMode="light">
      <MainContent />
      
      {/* Scoped theme section */}
      <Reshaped theme="slate" scoped>
        <SpecialSection />
      </Reshaped>
    </Reshaped>
  );
}
```
This example demonstrates nested theming where a specific section uses a different theme (slate) while the rest of the app uses the main theme (reshaped).

### Advanced Configuration with Toast Options
```jsx
import { Reshaped } from 'reshaped';

function App() {
  const toastConfig = {
    'top': { width: '420px', expanded: true },
    'bottom-end': { width: '350px', expanded: false }
  };
  
  return (
    <Reshaped 
      theme="reshaped" 
      defaultColorMode="dark"
      defaultViewport="l"
      toastOptions={toastConfig}
      className="app-root"
    >
      <YourAppContent />
    </Reshaped>
  );
}
```
This example shows a comprehensive setup with custom toast positioning, large default viewport, dark mode, and custom CSS classes.

## Related Components

- **Theme**: The underlying theme provider that Reshaped wraps, handling theme context and CSS custom properties
- **GlobalColorMode**: Manages color mode state and provides color mode switching functionality
- **ToastProvider**: Provides toast notification context and rendering, automatically included in Reshaped
- **useTheme**: Hook for accessing theme context and color mode controls within components
- **useToast**: Hook for displaying toast notifications from within the design system context
- **SingletonKeyboardModeProvider**: Manages keyboard navigation detection for accessibility features
- **SingletonHotkeysProvider**: Provides global keyboard shortcut management throughout the application

## Accessibility Considerations

The Reshaped component includes several accessibility features:
- Automatic `color-scheme` CSS property management for proper browser UI theming
- Keyboard navigation detection that adds appropriate focus indicators
- Reduced motion support that respects user preferences for animations
- RTL language support for international accessibility
- Proper theme contrast handling between light and dark modes

## Architecture Notes

The component uses a layered provider architecture:
1. **GlobalColorMode** - Manages color scheme state and CSS custom properties
2. **PrivateTheme** - Handles theme loading and CSS class application  
3. **SingletonKeyboardModeProvider** - Detects and manages keyboard navigation state
4. **SingletonEnvironmentContext** - Provides RTL and viewport context
5. **SingletonHotkeysProvider** - Manages global keyboard shortcuts
6. **ToastProvider** - Provides toast notification infrastructure

The component automatically applies CSS custom properties and data attributes to enable theming and supports both global (document-level) and scoped (component-level) theme application patterns.