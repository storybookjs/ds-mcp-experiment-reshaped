# Reshaped Component

## Overview
The Reshaped component is the root wrapper that provides theme configuration, color mode management, RTL support, and global context providers for the Reshaped design system.

## Key Features
- Theme configuration and management
- Color mode switching (light/dark)
- RTL (right-to-left) language support
- Global context providers
- CSS custom properties management
- Accessibility settings

## Props Interface
```typescript
type ReshapedProps = {
  children: React.ReactNode;
  theme?: Theme;
  colorMode?: 'light' | 'dark' | 'auto';
  direction?: 'ltr' | 'rtl';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Setup
```typescript
import { Reshaped } from 'reshaped';
import App from './App';

function Root() {
  return (
    <Reshaped>
      <App />
    </Reshaped>
  );
}

export default Root;
```

### Custom Theme Configuration
```typescript
import { Reshaped, createTheme } from 'reshaped';
import App from './App';

const customTheme = createTheme({
  tokens: {
    color: {
      primary: '#007bff',
      secondary: '#6c757d'
    },
    radius: {
      medium: '8px',
      large: '12px'
    }
  }
});

function Root() {
  return (
    <Reshaped theme={customTheme}>
      <App />
    </Reshaped>
  );
}
```

### Color Mode Management
```typescript
import { Reshaped } from 'reshaped';
import { useState } from 'react';
import App from './App';

function Root() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
  
  return (
    <Reshaped colorMode={colorMode}>
      <App onToggleTheme={() => setColorMode(prev => prev === 'light' ? 'dark' : 'light')} />
    </Reshaped>
  );
}
```

### RTL Support
```typescript
import { Reshaped } from 'reshaped';
import App from './App';

function Root() {
  return (
    <Reshaped direction="rtl">
      <App />
    </Reshaped>
  );
}
```

## Theme Configuration
- Design tokens for colors, spacing, typography
- Component-specific styling overrides
- Custom CSS properties injection
- Breakpoint definitions

## Color Mode Features
- Light and dark theme variants
- Automatic system preference detection
- Smooth transitions between modes
- Per-component color mode overrides

## RTL Support
- Automatic layout mirroring
- Text direction handling
- Icon and component orientation
- Localization-ready architecture

## Global Context
- Theme access throughout component tree
- Color mode state management
- Direction and locale settings
- Accessibility preferences

## Related Components
- **useTheme**: Hook for accessing theme context
- **useRTL**: Hook for RTL direction detection