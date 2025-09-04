# Theme / useTheme

**Theme Provider and Hook for Design System Theming**

## Brief Description

Theme component provides theming context and color mode management for the reshaped design system, while useTheme hook provides access to theme state and controls.

## Keywords

Theme Provider, Color Mode, Dark Mode, Light Mode, Design System, Context, Theming, CSS Variables, Theme Switching, Color Scheme

## Usage Description

The Theme component serves as the primary theming provider for the reshaped design system, enabling applications to define and switch between different visual themes and color modes. It works by setting CSS custom properties and data attributes on DOM elements, which the design system components use for styling.

The component supports both controlled and uncontrolled usage patterns. In controlled mode, you specify the exact theme name, while in uncontrolled mode, you provide a default theme that can be dynamically changed. The Theme provider can be nested, allowing for scoped theming where different parts of the application can use different themes simultaneously.

Color mode management is integrated into the theming system, supporting light and dark modes as well as an "inverted" mode that automatically switches to the opposite of the parent's color mode. This is particularly useful for creating contrast sections or modal overlays that need to stand out from the main content.

The useTheme hook provides components with access to the current theme state and functions to modify it. This enables dynamic theme switching, building theme selection UIs, and creating responsive designs that adapt to different themes programmatically.

## Props Documentation

### Theme Component Props

**name** (optional)

- Type: `string | string[]`
- Required: No
- Default: undefined
- Description: The theme name(s) to apply. Can be a single theme string or array of themes for multi-theme support. When provided, the Theme operates in controlled mode.
- Example: `"reshaped"` or `["reshaped", "custom"]`

**defaultName** (optional)

- Type: `string | string[]`
- Required: No
- Default: undefined
- Description: The default theme name(s) when operating in uncontrolled mode. This allows the theme to be changed dynamically via useTheme hook.
- Example: `"reshaped"`

**colorMode** (optional)

- Type: `"light" | "dark" | "inverted"`
- Required: No
- Default: undefined (inherits from parent or global)
- Description: The color mode to apply. "inverted" automatically uses the opposite of the parent's color mode.
- Example: `"dark"`

**className** (optional)

- Type: `string | string[] | (string | null | undefined | false)[]`
- Required: No
- Default: undefined
- Description: Additional CSS class names to apply to the theme root element.
- Example: `"custom-theme-wrapper"`

**children** (optional)

- Type: `React.ReactNode`
- Required: No
- Default: undefined
- Description: Child components that will receive the theme context.

### PrivateTheme Additional Props (Internal)

**scoped** (optional)

- Type: `boolean`
- Required: No
- Default: undefined
- Description: Internal prop for creating scoped theme boundaries.

**scopeRef** (optional)

- Type: `React.RefObject<HTMLDivElement | null>`
- Required: No
- Default: undefined
- Description: Internal prop for referencing the scope element.

### useTheme Hook Return Value

The useTheme hook returns an object with the following properties:

**theme**

- Type: `string | string[]`
- Description: The current active theme name(s).

**setTheme**

- Type: `(theme: string | string[]) => void`
- Description: Function to change the current theme. Only works when Theme is in uncontrolled mode.

**rootTheme**

- Type: `string | string[]`
- Description: The root theme name(s) of the theme tree.

**setRootTheme**

- Type: `(theme: string | string[]) => void`
- Description: Function to change the root theme.

**colorMode**

- Type: `"light" | "dark"`
- Description: The current active color mode.

**setColorMode**

- Type: `(mode: "light" | "dark") => void`
- Description: Function to change the global color mode.

**invertColorMode**

- Type: `() => void`
- Description: Function to toggle between light and dark color modes.

## Code Examples

### Basic Theme Setup

```jsx
import { Theme } from "reshaped";

function App() {
  return (
    <Theme name="reshaped" colorMode="dark">
      <div>
        {/* All components here will use the reshaped theme in dark mode */}
        <Button color="primary">Primary Button</Button>
      </div>
    </Theme>
  );
}
```

This example shows the basic setup of a Theme provider with a specific theme and color mode applied to the entire application.

### Multiple Themes

```jsx
import { Theme } from "reshaped";

function MultiThemeApp() {
  return (
    <Theme name={["reshaped", "custom"]} colorMode="light">
      <div>
        {/* Components will have access to both theme's CSS variables */}
        <Card>Content with multi-theme support</Card>
      </div>
    </Theme>
  );
}
```

This demonstrates how to apply multiple themes simultaneously, useful when combining a base theme with customizations.

### Dynamic Theme Switching

```jsx
import { Theme, useTheme, Button, View } from "reshaped";

function ThemeController() {
  const { theme, setTheme, colorMode, invertColorMode } = useTheme();

  return (
    <View direction="row" gap={3}>
      <Button
        onClick={() => setTheme("slate")}
        variant={theme === "slate" ? "solid" : "ghost"}
      >
        Slate Theme
      </Button>
      <Button
        onClick={() => setTheme("reshaped")}
        variant={theme === "reshaped" ? "solid" : "ghost"}
      >
        Reshaped Theme
      </Button>
      <Button onClick={invertColorMode}>
        Switch to {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </View>
  );
}

function App() {
  return (
    <Theme defaultName="reshaped">
      <ThemeController />
      {/* Other app content */}
    </Theme>
  );
}
```

This example shows how to create theme switching controls using the useTheme hook in an uncontrolled Theme component.

### Nested Themes with Color Mode Inversion

```jsx
import { Theme, Card, Button } from "reshaped";

function NestedThemeExample() {
  return (
    <Theme name="reshaped" colorMode="light">
      <Card>
        <h2>Main Content (Light Mode)</h2>

        <Theme colorMode="inverted">
          <Card>
            <h3>Modal Content (Dark Mode)</h3>
            <Button color="primary">Action Button</Button>
          </Card>
        </Theme>
      </Card>
    </Theme>
  );
}
```

This demonstrates nested themes where the inner theme uses inverted color mode to create contrast.

### Theme-Aware Component

```jsx
import { useTheme, Button, View } from "reshaped";

function ThemeAwareComponent() {
  const { theme, colorMode, setColorMode } = useTheme();

  const isCustomTheme = Array.isArray(theme)
    ? theme.includes("custom")
    : theme === "custom";

  return (
    <View gap={3}>
      <p>Current theme: {Array.isArray(theme) ? theme.join(", ") : theme}</p>
      <p>Color mode: {colorMode}</p>

      {isCustomTheme && (
        <Button
          color="secondary"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          Toggle Color Mode
        </Button>
      )}
    </View>
  );
}
```

This example shows how components can react to theme changes and provide theme-specific functionality.

## Related Components

**GlobalColorMode** - Provides global color mode context for the entire application, used internally by Theme components to manage color mode inheritance and transitions.

**View** - Layout component that inherits and responds to theme styling through CSS custom properties set by Theme provider.

**Card** - Surface component that demonstrates theme application through background colors and borders defined by the active theme.

**Button** - Interactive component that uses theme-aware color schemes and adapts its appearance based on the current theme and color mode.

**All reshaped components** - Every component in the reshaped design system is theme-aware and responds to the Theme provider's CSS custom properties and data attributes.

The Theme system integrates with the entire component library through CSS custom properties (CSS variables) that are dynamically updated based on the active theme and color mode. Components reference these variables in their stylesheets, enabling automatic adaptation without requiring prop drilling or component-specific theme logic.
