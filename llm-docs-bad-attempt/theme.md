# Theme System

A comprehensive theming system that provides theme context management, color mode switching, and flexible theme application across the Reshaped design system.

## Brief Description

The Theme system enables consistent design token management, dark/light mode switching, and hierarchical theme application throughout React applications.

## Keywords

Theme Management, Color Mode, Dark Mode, Light Mode, Design Tokens, Context Provider, Theme Switching, CSS Variables, Design System, Theme Configuration

## Usage Description

The Theme system in Reshaped provides a powerful and flexible way to manage visual themes and color modes across your application. It operates through React context to provide theme data to all components within its scope, enabling consistent design token application and seamless dark/light mode switching.

Use the Theme component to apply specific themes to sections of your application, create themed boundaries, or override parent themes. The system supports both global theme management through the `Reshaped` root component and localized theme application through individual `Theme` components. This hierarchical approach allows for complex theming scenarios where different parts of your application can have different themes while maintaining consistency.

The `useTheme` hook provides programmatic access to theme data and controls, enabling dynamic theme switching, theme introspection, and custom theme-aware components. This is particularly useful for creating theme toggles, conditional styling based on current theme, and building complex theme-dependent UI behaviors.

## Props Documentation

### Theme Component Props

- **name** - `string | string[] | undefined`
  - Optional
  - The theme name(s) to apply. Can be a single theme string or an array of themes for composition
  - Example values: `"reshaped"`, `"slate"`, `"figma"`, `["reshaped", "custom"]`

- **defaultName** - `string | string[] | undefined`
  - Optional
  - Default theme name(s) when no specific theme is set
  - Used as fallback theme configuration

- **colorMode** - `"light" | "dark" | "inverted" | undefined`
  - Optional
  - The color mode to apply within this theme boundary
  - `"inverted"` flips the current color mode (light becomes dark, dark becomes light)

- **className** - `string | string[] | undefined`
  - Optional
  - Additional CSS classes to apply to the theme container

- **children** - `React.ReactNode`
  - Optional
  - The content to be wrapped with the theme context

### ThemeProps Type (exported)

```typescript
type ThemeProps = {
  name?: string | string[];
  defaultName?: string | string[];
  colorMode?: "light" | "dark" | "inverted";
  className?: string | string[];
  children?: React.ReactNode;
}
```

### useTheme Hook Return Value

```typescript
{
  theme: string | string[];
  setTheme: (theme: string | string[]) => void;
  rootTheme: string | string[];
  setRootTheme: (theme: string | string[]) => void;
  colorMode: "light" | "dark";
  setColorMode: (mode: "light" | "dark") => void;
  invertColorMode: () => void;
}
```

- **theme** - Current theme name(s) in the local context
- **setTheme** - Function to update the local theme
- **rootTheme** - Root-level theme name(s) from the application root
- **setRootTheme** - Function to update the root theme
- **colorMode** - Current color mode ("light" or "dark")
- **setColorMode** - Function to set a specific color mode
- **invertColorMode** - Function to toggle between light and dark modes

## Code Examples

### Basic Theme Application

```jsx
import { Theme } from 'reshaped';

// Apply a specific theme to a section
function ThemedSection() {
  return (
    <Theme name="slate">
      <div>
        {/* All components here will use the slate theme */}
        <Card>Content with slate theme</Card>
        <Button>Themed button</Button>
      </div>
    </Theme>
  );
}
```

### Dark Mode Implementation

```jsx
import { Theme } from 'reshaped';

// Force dark mode in a specific area
function DarkModeWidget() {
  return (
    <Theme colorMode="dark">
      <Card>
        <Text>This content is always in dark mode</Text>
        <Button variant="primary">Dark mode button</Button>
      </Card>
    </Theme>
  );
}
```

### Theme Hook for Dynamic Control

```jsx
import { useTheme, Button, Text } from 'reshaped';

function ThemeControls() {
  const { 
    theme, 
    setTheme, 
    colorMode, 
    setColorMode, 
    invertColorMode 
  } = useTheme();

  return (
    <div>
      <Text>Current theme: {Array.isArray(theme) ? theme.join(', ') : theme}</Text>
      <Text>Current mode: {colorMode}</Text>
      
      <Button onClick={() => setTheme('slate')}>
        Switch to Slate Theme
      </Button>
      
      <Button onClick={() => setColorMode('dark')}>
        Set Dark Mode
      </Button>
      
      <Button onClick={invertColorMode}>
        Toggle Color Mode
      </Button>
    </div>
  );
}
```

### Inverted Color Mode

```jsx
import { Theme, Card, Text } from 'reshaped';

// Create an inverted section that flips the current color mode
function InvertedSection() {
  return (
    <div>
      <Card>
        <Text>Normal color mode content</Text>
      </Card>
      
      <Theme colorMode="inverted">
        <Card>
          <Text>This content has inverted color mode</Text>
          <Text variant="caption">
            Light mode app shows this in dark, dark mode app shows this in light
          </Text>
        </Card>
      </Theme>
    </div>
  );
}
```

### Multiple Theme Composition

```jsx
import { Theme } from 'reshaped';

// Compose multiple themes for advanced customization
function ComposedTheme() {
  return (
    <Theme name={["reshaped", "custom-overrides"]}>
      {/* Components inherit from both themes, with custom-overrides taking precedence */}
      <Card>
        <Text>Content using composed theme</Text>
      </Card>
    </Theme>
  );
}
```

### Conditional Theming Based on Context

```jsx
import { useTheme, Theme, Card, Button } from 'reshaped';

function ConditionalTheming({ isPremium }) {
  const { colorMode } = useTheme();
  
  const premiumTheme = isPremium ? "premium" : "reshaped";
  
  return (
    <Theme name={premiumTheme}>
      <Card>
        <Text>
          Premium features with {premiumTheme} theme in {colorMode} mode
        </Text>
        
        {/* Nested theme for specific component */}
        <Theme name="slate" colorMode={colorMode === "light" ? "dark" : "light"}>
          <Button>Contrasting button</Button>
        </Theme>
      </Card>
    </Theme>
  );
}
```

### Root Application Setup

```jsx
import { Reshaped } from 'reshaped';

// Set up themes at the application root
function App() {
  return (
    <Reshaped
      theme="reshaped"
      defaultColorMode="light"
      colorMode="light"
    >
      <YourAppContent />
    </Reshaped>
  );
}
```

## API Methods and Descriptions

### useTheme Hook Methods

- **setTheme(theme: string | string[])** - Updates the current theme in the local context. Accepts either a single theme name or an array of theme names for composition.

- **setRootTheme(theme: string | string[])** - Updates the root-level theme that affects the entire application. Use sparingly as it affects global theme state.

- **setColorMode(mode: "light" | "dark")** - Sets a specific color mode. This directly controls whether components use light or dark variants.

- **invertColorMode()** - Toggles between light and dark modes. If currently light, switches to dark and vice versa.

### Context Values

The theme system provides two main contexts:

- **ThemeContext** - Provides current theme configuration, theme setters, and color mode information
- **GlobalColorModeContext** - Manages global color mode state across the entire application

## Use Cases and Best Practices

### Theme Organization

1. **Global Theme Setup**: Use the `Reshaped` component at your app root to establish baseline themes and color modes.

2. **Section-Specific Themes**: Apply `Theme` components around major sections that need different visual treatments (e.g., admin panels, marketing sections).

3. **Component-Level Theming**: Use themes for individual components that need to stand out or match specific design requirements.

### Color Mode Management

1. **User Preference**: Implement theme toggles using `useTheme` hook methods to respect user preferences.

2. **Contextual Modes**: Use `colorMode="inverted"` for elements that need to contrast with their surroundings (e.g., tooltips, overlays).

3. **Conditional Theming**: Apply different themes based on user roles, feature flags, or application state.

### Performance Considerations

1. **Theme Boundaries**: Minimize deeply nested theme changes as each boundary creates a new context.

2. **Theme Composition**: When using multiple themes, ensure they're optimized and don't conflict with each other.

3. **Dynamic Updates**: Use theme setters judiciously as they trigger re-renders throughout the theme boundary.

## Performance Considerations

The Theme system is built on React Context, which means:

- **Context Updates**: Theme changes trigger re-renders for all components within the theme boundary
- **Theme Composition**: Multiple themes are merged at runtime, with later themes overriding earlier ones
- **CSS Custom Properties**: Themes use CSS custom properties for efficient style updates without JavaScript recalculation
- **Scope Management**: Each Theme component creates a new CSS scope, allowing for isolated theme boundaries

### Optimization Tips

1. **Minimize Theme Boundaries**: Don't wrap individual components unnecessarily - prefer larger theme boundaries
2. **Stable Theme References**: Use stable theme name strings/arrays to prevent unnecessary re-renders
3. **Memoization**: When building dynamic theme configurations, use React.useMemo to prevent recalculation
4. **Root-Level Themes**: Set up primary themes at the application root rather than changing them frequently

## Related Components/Hooks

### Core Components

- **Reshaped** - Root application wrapper that provides global theme and color mode management
- **GlobalColorMode** - Lower-level component for managing global color mode state

### Related Hooks

- **useGlobalColorMode()** - Access global color mode context directly
- **useRTL()** - Access right-to-left layout configuration
- **useResponsiveClientValue()** - Work with responsive values that respect current theme breakpoints

### Integration Components

All Reshaped components automatically integrate with the theme system:

- **Button, Card, Text** - Automatically apply theme-appropriate styles
- **Modal, Tooltip** - Often use `colorMode="inverted"` for proper contrast
- **Form Components** - Inherit theme colors for consistent form styling

### Theme Configuration

- **ReshapedConfig** - TypeScript interface for defining custom themes and theme fragments
- **Built-in Themes**: `"reshaped"` (default), `"slate"`, `"figma"`, `"twitter"` (fragment)

The theme system provides comprehensive theming capabilities while maintaining simplicity for common use cases and flexibility for advanced theming scenarios.