# Theme Utility Functions - Reshaped Design System

## Overview and Key Features

The Reshaped design system provides a comprehensive theming system with powerful utility functions for runtime theme manipulation, color generation, and programmatic theme operations. The system supports both light and dark modes, automatic color generation from primary colors, accessibility-compliant contrast calculations, and seamless theme composition.

**Key Features:**
- Runtime theme creation and manipulation
- Automatic color palette generation from primary colors
- WCAG and APCA accessibility compliance
- Theme composition and inheritance
- CSS custom property generation
- Color mode switching and inversion
- Responsive design token management
- TypeScript-first architecture with complete type safety

## Function Interface with TypeScript Definitions

### Core Hook: useTheme

```typescript
declare const useTheme: () => {
    theme: Theme;                              // Current active theme name(s)
    setTheme: (theme: Theme) => void;          // Set current theme
    rootTheme: Theme;                          // Root theme in theme hierarchy
    setRootTheme: (theme: Theme) => void;      // Set root theme
    colorMode: ColorMode;                      // Current color mode ("light" | "dark")
    setColorMode: (mode: ColorMode) => void;   // Set color mode
    invertColorMode: () => void;               // Toggle between light/dark modes
};

// Theme type definition
type Theme = string | string[];               // Single theme or array of themes
type ColorMode = "light" | "dark";           // Color mode options
```

### Theme Generation Functions

```typescript
// Generate complete CSS for a theme
declare const getThemeCSS: (
    name: string, 
    definition: PassedThemeDefinition, 
    options?: ReshapedConfig["themeOptions"]
) => string;

// Generate color palette from primary colors
declare const generateThemeColors: (
    args?: Partial<Record<Hue, ColorValue>>
) => NonNullable<PassedThemeDefinition["color"]>;

// Base theme definition for extension
declare const baseThemeDefinition: ThemeDefinition;

// Utility to get root theme element
declare const getRootThemeEl: (scopeEl?: HTMLElement | null) => HTMLElement;
```

### Theme Type Definitions

```typescript
type PassedThemeDefinition = Omit<PartialDeep<ThemeDefinition>, "color"> & {
    color?: Partial<TokenSet<ColorName | GeneratedOnColorName, PassedToken>>;
};

type ThemeOptions = {
    colorOutputFormat?: "oklch" | "hex";           // Color format for CSS output
    colorContrastAlgorithm?: "wcag" | "apca";     // Accessibility algorithm
    generateOnColorsFor?: string[];               // Generate "on" colors for tokens
    onColorValues?: Record<Hue, ColorToken>;      // Custom "on" color values
};

// Color hue types for theme generation
type Hue = "primary" | "positive" | "critical" | "warning" | "neutral" | "brand";

// Color value types
type ColorValue = string | HexToken | OklchToken;
type HexToken = { hex: string; hexDark?: string; };
type OklchToken = { oklch: OklchColor; oklchDark?: OklchColor; };
```

## Multiple Practical Usage Examples

### Basic Theme Setup and Color Mode Management

```typescript
import React, { useState } from 'react';
import { useTheme, Theme, Button, View } from 'reshaped';

function ThemeControls() {
    const { 
        colorMode, 
        setColorMode, 
        invertColorMode, 
        theme, 
        setTheme 
    } = useTheme();

    return (
        <View gap={3} direction="row" align="center">
            <Button 
                variant={colorMode === 'light' ? 'filled' : 'faded'}
                onClick={() => setColorMode('light')}
            >
                Light Mode
            </Button>
            <Button 
                variant={colorMode === 'dark' ? 'filled' : 'faded'}
                onClick={() => setColorMode('dark')}
            >
                Dark Mode
            </Button>
            <Button onClick={invertColorMode}>
                Toggle Mode
            </Button>
        </View>
    );
}
```

### Dynamic Theme Generation and Application

```typescript
import React, { useLayoutEffect, useState } from 'react';
import { 
    getThemeCSS, 
    generateThemeColors, 
    baseThemeDefinition,
    Theme 
} from 'reshaped';

function DynamicThemeDemo() {
    const [activeColor, setActiveColor] = useState('#2563eb');
    const [theme, setTheme] = useState('');
    const [algorithm, setAlgorithm] = useState<'wcag' | 'apca'>('wcag');

    // Generate theme CSS when color or algorithm changes
    useLayoutEffect(() => {
        const themeCSS = getThemeCSS('dynamic-theme', {
            ...baseThemeDefinition,
            color: generateThemeColors({
                primary: activeColor,
                // Optional: customize other hues
                positive: '#10b981',
                critical: '#ef4444'
            })
        }, {
            colorContrastAlgorithm: algorithm,
            colorOutputFormat: 'oklch'
        });
        
        setTheme(themeCSS);
    }, [activeColor, algorithm]);

    const colorOptions = [
        '#2563eb', '#7c3aed', '#059669', 
        '#dc2626', '#ea580c', '#0891b2'
    ];

    return (
        <>
            {/* Inject generated theme CSS */}
            <style>{theme}</style>
            
            <Theme name="dynamic-theme">
                <View gap={4}>
                    <View direction="row" gap={2}>
                        {colorOptions.map((color) => (
                            <button
                                key={color}
                                onClick={() => setActiveColor(color)}
                                style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: '50%',
                                    background: color,
                                    border: color === activeColor 
                                        ? `3px solid var(--rs-color-border-primary)`
                                        : '1px solid rgba(0,0,0,0.1)',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </View>
                    
                    <label>
                        <input
                            type="checkbox"
                            checked={algorithm === 'apca'}
                            onChange={(e) => setAlgorithm(e.target.checked ? 'apca' : 'wcag')}
                        />
                        Use APCA (Advanced) Contrast Algorithm
                    </label>
                    
                    <Button color="primary">
                        Themed Button
                    </Button>
                    <View 
                        padding={4} 
                        borderRadius="medium"
                        attributes={{
                            style: { 
                                background: 'var(--rs-color-background-primary-faded)' 
                            }
                        }}
                    >
                        Dynamic themed content
                    </View>
                </View>
            </Theme>
        </>
    );
}
```

### Theme Composition and Inheritance

```typescript
import React from 'react';
import { Theme, useTheme, View, Text, Card } from 'reshaped';

function ThemeCompositionExample() {
    const { setTheme } = useTheme();

    return (
        <View gap={4}>
            {/* Root theme */}
            <Theme name="base">
                <Card padding={4}>
                    <Text>Base Theme Content</Text>
                    
                    {/* Nested theme inherits from parent */}
                    <Theme name="accent">
                        <Card padding={3} borderRadius="small">
                            <Text>Nested Accent Theme</Text>
                            
                            {/* Multiple theme composition */}
                            <Theme name={["accent", "high-contrast"]}>
                                <Card padding={2}>
                                    <Text>Composed Theme (accent + high-contrast)</Text>
                                </Card>
                            </Theme>
                        </Card>
                    </Theme>
                    
                    {/* Inverted color mode within theme */}
                    <Theme colorMode="inverted">
                        <Card padding={3}>
                            <Text>Inverted Color Mode</Text>
                        </Card>
                    </Theme>
                </Card>
            </Theme>
        </View>
    );
}
```

### Advanced Color Token Manipulation

```typescript
import React, { useState } from 'react';
import { 
    generateThemeColors, 
    getThemeCSS, 
    Theme,
    View,
    Button
} from 'reshaped';

function ColorTokenManipulation() {
    const [customTheme, setCustomTheme] = useState('');

    const createBrandTheme = () => {
        // Generate comprehensive color system
        const brandColors = generateThemeColors({
            primary: '#6366f1',    // Indigo primary
            brand: '#8b5cf6',      // Purple brand accent
            positive: '#059669',   // Green for success
            critical: '#dc2626',   // Red for errors
            warning: '#d97706',    // Orange for warnings
            neutral: '#6b7280'     // Gray for neutral states
        });

        // Create theme with custom color tokens
        const themeCSS = getThemeCSS('brand-theme', {
            color: {
                ...brandColors,
                // Override specific tokens
                backgroundPage: { hex: '#fafafa', hexDark: '#0a0a0a' },
                backgroundElevationBase: { hex: '#ffffff', hexDark: '#171717' },
                // Custom brand-specific tokens
                backgroundBrand: { hex: '#8b5cf6', hexDark: '#a855f7' },
                foregroundOnBrand: { hex: '#ffffff', hexDark: '#ffffff' }
            }
        }, {
            colorOutputFormat: 'oklch',
            colorContrastAlgorithm: 'wcag',
            generateOnColorsFor: ['backgroundBrand']
        });

        setCustomTheme(themeCSS);
    };

    return (
        <>
            <style>{customTheme}</style>
            
            <View gap={4}>
                <Button onClick={createBrandTheme}>
                    Generate Brand Theme
                </Button>
                
                {customTheme && (
                    <Theme name="brand-theme">
                        <View 
                            gap={3}
                            padding={4}
                            borderRadius="medium"
                            attributes={{
                                style: {
                                    background: 'var(--rs-color-background-elevation-base)',
                                    border: '1px solid var(--rs-color-border-neutral-faded)'
                                }
                            }}
                        >
                            <Button color="primary">Primary Action</Button>
                            <Button 
                                attributes={{
                                    style: {
                                        background: 'var(--rs-color-background-brand)',
                                        color: 'var(--rs-color-foreground-on-brand)'
                                    }
                                }}
                            >
                                Brand Action
                            </Button>
                            <Button color="positive">Success Action</Button>
                            <Button color="critical">Critical Action</Button>
                        </View>
                    </Theme>
                )}
            </View>
        </>
    );
}
```

### Responsive Theme Management

```typescript
import React, { useEffect, useState } from 'react';
import { useTheme, useResponsiveClientValue, View, Text } from 'reshaped';

function ResponsiveThemeManager() {
    const { setTheme, colorMode, setColorMode } = useTheme();
    const viewport = useResponsiveClientValue();
    
    // Automatically adapt theme based on viewport
    useEffect(() => {
        const themesByViewport = {
            s: 'mobile-optimized',
            m: 'tablet-optimized', 
            l: 'desktop-standard',
            xl: 'desktop-wide'
        };
        
        if (viewport) {
            setTheme(themesByViewport[viewport]);
        }
    }, [viewport, setTheme]);
    
    // Automatically switch to dark mode based on system preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setColorMode(e.matches ? 'dark' : 'light');
        };
        
        // Set initial mode
        setColorMode(mediaQuery.matches ? 'dark' : 'light');
        
        // Listen for changes
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [setColorMode]);

    return (
        <View gap={2}>
            <Text variant="body-2" color="neutral-faded">
                Current viewport: {viewport || 'unknown'}
            </Text>
            <Text variant="body-2" color="neutral-faded">
                Color mode: {colorMode}
            </Text>
            <Text>
                Theme automatically adapts to screen size and system preferences
            </Text>
        </View>
    );
}
```

### Theme Testing and Development Utilities

```typescript
import React, { useState } from 'react';
import { 
    getThemeCSS, 
    generateThemeColors, 
    baseThemeDefinition,
    Theme,
    View,
    Button,
    Text
} from 'reshaped';

function ThemeTestingUtilities() {
    const [debugMode, setDebugMode] = useState(false);
    const [contrastTest, setContrastTest] = useState(false);

    const debugTheme = getThemeCSS('debug-theme', {
        ...baseThemeDefinition,
        color: generateThemeColors({
            primary: '#3b82f6'
        })
    }, {
        // Enable debugging features
        colorOutputFormat: 'oklch',
        colorContrastAlgorithm: 'wcag'
    });

    const highContrastTheme = getThemeCSS('high-contrast', {
        color: generateThemeColors({
            primary: '#000000',
            neutral: '#ffffff'
        })
    }, {
        colorContrastAlgorithm: 'wcag'
    });

    return (
        <>
            <style>{debugMode ? debugTheme : ''}</style>
            <style>{contrastTest ? highContrastTheme : ''}</style>
            
            <Theme name={debugMode ? 'debug-theme' : contrastTest ? 'high-contrast' : undefined}>
                <View gap={4} padding={4}>
                    <View direction="row" gap={2}>
                        <Button 
                            variant={debugMode ? 'filled' : 'faded'}
                            onClick={() => setDebugMode(!debugMode)}
                        >
                            Debug Mode
                        </Button>
                        <Button 
                            variant={contrastTest ? 'filled' : 'faded'}
                            onClick={() => setContrastTest(!contrastTest)}
                        >
                            High Contrast Test
                        </Button>
                    </View>
                    
                    {debugMode && (
                        <View 
                            padding={3}
                            attributes={{
                                style: {
                                    fontFamily: 'monospace',
                                    fontSize: '0.875rem',
                                    background: 'var(--rs-color-background-neutral-faded)',
                                    borderRadius: 'var(--rs-radius-medium)'
                                }
                            }}
                        >
                            <Text>Theme Debug Information:</Text>
                            <Text>Primary: var(--rs-color-background-primary)</Text>
                            <Text>Contrast: var(--rs-color-foreground-primary)</Text>
                            <Text>Border: var(--rs-color-border-primary)</Text>
                        </View>
                    )}
                    
                    <View gap={2}>
                        <Button color="primary">Primary Button</Button>
                        <Button color="positive">Success Button</Button>
                        <Button color="critical">Error Button</Button>
                        <Button variant="ghost">Ghost Button</Button>
                    </View>
                </View>
            </Theme>
        </>
    );
}
```

## API Methods and Their Descriptions

### Theme Context Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `useTheme()` | Access theme context and methods | None | `ThemeContextData` |
| `setTheme(theme)` | Update current active theme | `theme: Theme` | `void` |
| `setRootTheme(theme)` | Set root theme for inheritance | `theme: Theme` | `void` |
| `setColorMode(mode)` | Set color mode explicitly | `mode: ColorMode` | `void` |
| `invertColorMode()` | Toggle between light/dark modes | None | `void` |

### Theme Generation Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `getThemeCSS(name, definition, options?)` | Generate CSS for theme | `name: string`, `definition: PassedThemeDefinition`, `options?: ThemeOptions` | `string` |
| `generateThemeColors(args?)` | Generate color palette from hues | `args?: Partial<Record<Hue, ColorValue>>` | `ColorTokenSet` |
| `getRootThemeEl(scopeEl?)` | Get root theme DOM element | `scopeEl?: HTMLElement` | `HTMLElement` |

### Component Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `<Theme>` | Theme provider component | `name?: Theme`, `colorMode?: ColorMode`, `className?: string`, `children: ReactNode` | `JSX.Element` |
| `<GlobalColorMode>` | Global color mode provider | `mode?: ColorMode`, `defaultMode: ColorMode`, `children: ReactNode` | `JSX.Element` |

## Use Cases and Best Practices

### Runtime Theme Switching
Perfect for applications requiring user-selectable themes, brand customization, or dynamic theme generation based on user preferences or content.

```typescript
// Good: Efficient theme switching
const { setTheme } = useTheme();
const switchToBrand = () => setTheme('brand-theme');

// Better: Multiple theme composition
const switchToHighContrast = () => setTheme(['base', 'high-contrast']);
```

### Color System Generation
Ideal for applications needing systematic color palette generation from brand colors while maintaining accessibility compliance.

```typescript
// Generate complete color system from single primary color
const brandColors = generateThemeColors({
    primary: '#6366f1', // System generates all semantic colors
    // Optionally override specific hues
    positive: '#10b981'
});
```

### Accessibility-First Theming
Built-in support for WCAG and APCA contrast algorithms ensures themes meet accessibility standards automatically.

```typescript
const accessibleTheme = getThemeCSS('accessible', definition, {
    colorContrastAlgorithm: 'wcag', // or 'apca'
    generateOnColorsFor: ['backgroundPrimary'] // Auto-generate contrasting text colors
});
```

### Theme Composition Patterns
Layer themes for complex design requirements while maintaining inheritance and performance.

```typescript
// Theme inheritance pattern
<Theme name="base">
    <Theme name="feature-specific">
        <Theme colorMode="inverted">
            {/* Inherits base + feature + inverted colors */}
        </Theme>
    </Theme>
</Theme>
```

## Performance Considerations

### CSS Generation Optimization
- **Cache generated themes**: Store `getThemeCSS()` results to avoid regeneration
- **Lazy theme loading**: Generate themes only when needed
- **CSS injection**: Use `<style>` tags for dynamic themes rather than inline styles

```typescript
// Good: Cached theme generation
const [themeCache, setThemeCache] = useState(new Map());
const getOrCreateTheme = (name, definition) => {
    const key = JSON.stringify({ name, definition });
    if (!themeCache.has(key)) {
        themeCache.set(key, getThemeCSS(name, definition));
    }
    return themeCache.get(key);
};
```

### Color Mode Transitions
- **Smooth transitions**: CSS transitions apply automatically between color modes
- **Reduced motion**: Respects user preference for reduced motion
- **Flash prevention**: Themes apply synchronously to prevent color flashing

### Memory Management
- **Theme cleanup**: Remove unused theme CSS when themes change
- **Event listener cleanup**: Properly clean up media query listeners for system theme detection

```typescript
// Proper cleanup pattern
useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setColorMode(e.matches ? 'dark' : 'light');
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

## Related Components and Hooks

### Core Theme Components
- **`Theme`**: Primary theme provider component for scoped theme application
- **`GlobalColorMode`**: Global color mode management across the entire application
- **`Reshaped`**: Root configuration component for global theme settings

### Utility Hooks
- **`useResponsiveClientValue`**: React to viewport changes for responsive theming
- **`useRTL`**: Right-to-left layout support integration with themes
- **`useKeyboardMode`**: Keyboard navigation integration with theme focus states

### Integration Components
- **`View`**: Layout component with full theme token support via CSS custom properties
- **`Text`**: Typography component respecting theme font tokens and color modes  
- **`Button`**: Action component with complete theme color integration
- **`Card`**: Container component utilizing theme elevation and border tokens

### Development Tools
- **`classNames`**: Utility for conditional CSS class application in themed components
- **`responsivePropDependency`**: Helper for responsive prop handling with theme breakpoints
- **Theme debugging utilities**: Built-in development aids for theme inspection and validation

The Reshaped theme utility system provides a comprehensive, performant, and accessible solution for sophisticated theming requirements in modern React applications. Its TypeScript-first approach ensures type safety while its runtime capabilities enable dynamic theme generation and real-time customization.