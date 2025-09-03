# Utility Functions

## Overview

The reshaped design system provides several core utility functions for handling CSS class names and responsive properties. These utilities are essential for the design system's responsive behavior and component styling architecture.

## Keywords

- "Class Names", "Responsive Design", "CSS Variables", "Viewport", "Utility", "Helper", "Props", "Style Management"

## Usage Description

These utility functions are fundamental to the reshaped design system's internal operations. They handle the complex logic of converting component props into appropriate CSS classes and CSS variables while supporting responsive breakpoints. The utilities enable components to accept both static values and responsive objects that specify different values for different screen sizes.

The functions work together to provide a consistent API for responsive styling across all components. They handle the conversion between JavaScript prop values and CSS class names, manage viewport-specific styling, and generate CSS custom properties for dynamic styling. These utilities are primarily used internally by the design system components but can also be used by consumers building custom components that need to integrate with the reshaped responsive system.

## Core Functions

### classNames

**Type**: `(...args: ClassName[]) => string`

A utility function that resolves an array of class name values into a single class name string.

**Parameters**:
- `...args` (Array): Variable number of class name arguments that can be strings, arrays, booleans, null, or undefined

**Returns**: String containing concatenated class names

**Description**: This function recursively processes class name arguments and combines them into a single space-separated string. It automatically filters out falsy values and flattens nested arrays. This is the foundational utility for all class name handling in the design system.

### responsiveClassNames

**Type**: `<V extends Responsive<Value>>(s: Record<string, string>, className: ClassNameResolver, value: V, options?: { excludeValueFromClassName?: boolean }) => string[]`

Generates responsive class names based on a value that can be either static or responsive.

**Parameters**:
- `s` (Record<string, string>): CSS modules object containing the available class names
- `className` (string | function): Base class name or resolver function
- `value` (Responsive<Value>): Static value or responsive object with viewport-specific values
- `options` (object, optional): Configuration options
  - `excludeValueFromClassName` (boolean, optional): Whether to exclude the value from the class name generation

**Returns**: Array of CSS class name strings for the given responsive value

**Description**: This function handles the generation of CSS class names for responsive properties. For static values, it generates a single class name. For responsive objects, it generates multiple class names with viewport suffixes. The function implements a mobile-first approach where the 's' (small) viewport is treated as the base.

### responsiveVariables

**Type**: `<V extends Value = Value>(variableName: CSSVariable, value?: Responsive<V>) => Record<CSSVariable, V>`

Generates CSS custom properties (variables) for responsive values.

**Parameters**:
- `variableName` (CSSVariable): The base name for the CSS variable (must start with `--`)
- `value` (Responsive<Value>, optional): Static value or responsive object with viewport-specific values

**Returns**: Object containing CSS variable names mapped to their values

**Description**: This function converts responsive prop values into CSS custom properties that can be used in stylesheets. For static values, it creates a single variable with `-s` suffix. For responsive objects, it creates variables for each viewport that has a defined value, filtering out undefined and false values.

### responsivePropDependency

**Type**: `<Result, T>(prop: Responsive<T>, resolver: (value: T, key: Viewport) => Result) => Result`

Applies a resolver function to responsive prop values, handling both static and responsive cases.

**Parameters**:
- `prop` (Responsive<T>): The responsive prop value to process
- `resolver` (function): Function that processes each value
  - `value` (T): The prop value for the current viewport
  - `key` (Viewport): The viewport key ('s', 'm', 'l', 'xl')

**Returns**: Result of applying the resolver function

**Description**: This utility enables processing of responsive props with custom logic. For static values, it calls the resolver once with the 's' viewport. For responsive objects, it iterates through each defined viewport and applies the resolver function, combining the results into a responsive object structure.

## Type Definitions

### Core Types

```typescript
type Value = string | boolean | number | undefined;
type ClassNameResolver = string | ((value: Value) => string);
type Viewport = "s" | "m" | "l" | "xl";
type Responsive<T> = T | { [key in Viewport]?: T };
type ClassName = string | null | undefined | false | ClassName[];
type CSSVariable = `--${string}`;
```

### Viewport System

The reshaped design system uses a mobile-first responsive approach with four breakpoints:
- `s` (small): Base viewport, no media query
- `m` (medium): Tablet and up
- `l` (large): Desktop and up  
- `xl` (extra large): Large desktop and up

## Code Examples

### Basic Class Names Usage

```typescript
import { classNames } from 'reshaped/utilities/props';

// Simple concatenation
const className = classNames('base', 'modifier', isActive && 'active');
// Result: "base modifier active"

// Nested arrays
const className = classNames(['base', 'modifier'], null, ['additional']);
// Result: "base modifier additional"

// Complex conditional logic
const className = classNames(
  'component',
  variant && `component--${variant}`,
  {
    'component--disabled': disabled,
    'component--loading': loading
  }
);
```

### Responsive Class Names

```typescript
import { responsiveClassNames } from 'reshaped/utilities/props';
import s from './Component.module.css';

// Static value
const classes = responsiveClassNames(s, 'padding', 'large');
// Result: [s['padding-large']]

// Responsive value
const classes = responsiveClassNames(s, 'padding', {
  s: 'small',
  m: 'medium', 
  l: 'large'
});
// Result: [s['padding-small'], s['padding-medium--m'], s['padding-large--l']]

// With custom resolver
const classes = responsiveClassNames(s, (value) => `custom-${value}`, 'active');
// Result: [s['custom-active']]
```

### Responsive Variables

```typescript
import { responsiveVariables } from 'reshaped/utilities/props';

// Static value
const vars = responsiveVariables('--component-size', 'large');
// Result: { '--component-size-s': 'large' }

// Responsive value
const vars = responsiveVariables('--component-gap', {
  s: '8px',
  m: '16px',
  l: '24px'
});
// Result: {
//   '--component-gap-s': '8px',
//   '--component-gap-m': '16px', 
//   '--component-gap-l': '24px'
// }

// Usage in component
const Component = ({ gap }) => {
  const style = {
    ...responsiveVariables('--gap', gap)
  };
  
  return <div style={style} className="component" />;
};
```

### Responsive Prop Dependency

```typescript
import { responsivePropDependency } from 'reshaped/utilities/props';

// Processing responsive props
const processedValue = responsivePropDependency(
  { s: 'small', m: 'medium', l: 'large' },
  (value, viewport) => ({
    className: `size-${value}`,
    cssVar: `--size-${viewport}`,
    value
  })
);
// Result: {
//   s: { className: 'size-small', cssVar: '--size-s', value: 'small' },
//   m: { className: 'size-medium', cssVar: '--size-m', value: 'medium' },
//   l: { className: 'size-large', cssVar: '--size-l', value: 'large' }
// }

// Static value processing
const staticResult = responsivePropDependency('large', (value, viewport) => 
  `${value}-${viewport}`
);
// Result: "large-s"
```

### Integration Patterns

```typescript
// Component implementation using all utilities
const CustomComponent = ({ size, padding, className, ...props }) => {
  // Generate responsive classes
  const sizeClasses = responsiveClassNames(s, 'size', size);
  const paddingClasses = responsiveClassNames(s, 'padding', padding);
  
  // Generate CSS variables
  const sizeVars = responsiveVariables('--custom-size', size);
  const paddingVars = responsiveVariables('--custom-padding', padding);
  
  // Combine all class names
  const finalClassName = classNames(
    s.component,
    ...sizeClasses,
    ...paddingClasses,
    className
  );
  
  // Process additional responsive logic
  const customLogic = responsivePropDependency(size, (value, viewport) => {
    return value === 'large' ? 'enhanced' : 'standard';
  });
  
  return (
    <div 
      className={finalClassName}
      style={{ ...sizeVars, ...paddingVars }}
      data-mode={typeof customLogic === 'object' ? customLogic.s : customLogic}
      {...props}
    />
  );
};
```

### Advanced Usage with Custom Resolvers

```typescript
// Complex class name resolution
const generateComplexClasses = (baseClass, value, modifiers) => {
  return responsiveClassNames(
    s,
    (val) => {
      const base = `${baseClass}-${val}`;
      const mods = modifiers?.filter(Boolean).join('-') || '';
      return mods ? `${base}-${mods}` : base;
    },
    value,
    { excludeValueFromClassName: false }
  );
};

// Theme-aware responsive variables
const generateThemeVariables = (property, value, theme) => {
  const themePrefix = theme === 'dark' ? 'dark' : 'light';
  const varName = `--${themePrefix}-${property}`;
  return responsiveVariables(varName, value);
};
```

## Best Practices

1. **Use Mobile-First Approach**: Always define the base value in the 's' viewport and progressively enhance for larger viewports.

2. **Avoid Undefined Values**: Filter out undefined and null values to prevent empty CSS classes and variables.

3. **Consistent Naming**: Use consistent naming patterns for CSS variables to maintain predictability.

4. **Performance Considerations**: Cache responsive calculations when possible, especially in frequently re-rendered components.

5. **Type Safety**: Leverage TypeScript's type system to ensure responsive props are properly typed.

## Related Components

These utility functions are used extensively throughout the reshaped component library:

- **View**: Uses all utilities for layout and styling props
- **Text**: Uses responsive utilities for typography scaling
- **Button**: Uses classNames for variant and state management
- **Grid**: Leverages responsive utilities for breakpoint-specific layouts
- **Stack**: Uses gap and alignment utilities with responsive support

The utilities form the foundation of the design system's responsive architecture and are essential for maintaining consistency across all components.