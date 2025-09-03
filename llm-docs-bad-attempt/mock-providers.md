# Reshaped Development Utilities

## Overview

Reshaped provides a set of development utilities specifically designed for Storybook integration, component development, and testing scenarios. While there isn't a specific "MockProviders" utility, the design system offers powerful development tools including the `Placeholder` component for layout testing, the `Example` component for organized story presentations, and the root `Reshaped` provider for complete system setup.

## Key Features

- **Layout Testing**: Visual placeholders for rapid prototyping and layout verification
- **Story Organization**: Structured example containers for clean Storybook presentations
- **Provider Setup**: Complete design system provider with theme, color mode, and toast configuration
- **Development Workflows**: Optimized components for component development and documentation
- **TypeScript Support**: Full TypeScript definitions for all development utilities

## Components

### Placeholder

A visual placeholder component for layout testing and prototyping.

#### TypeScript Interface

```typescript
interface PlaceholderProps {
  w?: string | number;
  h?: string | number;
  minW?: string | number;
  children?: React.ReactNode;
  inverted?: boolean;
}

declare const Placeholder: React.FC<PlaceholderProps>;
```

#### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `w` | `string \| number` | No | `"auto"` | Width of the placeholder |
| `h` | `string \| number` | No | `50` | Height of the placeholder |
| `minW` | `string \| number` | No | `h` | Minimum width of the placeholder |
| `children` | `React.ReactNode` | No | - | Content to display inside the placeholder |
| `inverted` | `boolean` | No | `false` | Whether to use inverted styling |

### Example

A compound component for organizing and presenting component examples in Storybook.

#### TypeScript Interface

```typescript
interface ExampleProps {
  children: React.ReactNode;
  title?: React.ReactNode;
}

interface ExampleItemProps {
  title?: string | string[];
  children?: React.ReactNode;
}

declare const Example: React.FC<ExampleProps> & {
  Item: React.FC<ExampleItemProps>;
};
```

#### Props

**Example (Root Component)**
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | Example items to display |
| `title` | `React.ReactNode` | No | - | Optional section title |

**Example.Item (Child Component)**
| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string \| string[]` | No | - | Title for the example item |
| `children` | `React.ReactNode` | No | - | Example content |

### Reshaped (Root Provider)

The main provider component for setting up the complete Reshaped design system context.

#### TypeScript Interface

```typescript
interface ReshapedProps {
  children?: React.ReactNode;
  theme?: string;
  defaultTheme?: string;
  defaultRTL?: boolean;
  colorMode?: 'light' | 'dark' | 'auto';
  defaultColorMode?: 'light' | 'dark' | 'auto';
  defaultViewport?: Viewport;
  toastOptions?: ToastProviderProps['options'];
  scoped?: boolean;
  className?: string;
}

declare const Reshaped: React.FC<ReshapedProps>;
```

## Usage Examples

### Basic Placeholder Usage

```tsx
import { Placeholder } from 'reshaped';

// Simple placeholder for layout testing
export const LayoutTest = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Placeholder w={200} h={100} />
    <Placeholder w={300} h={100} />
  </div>
);

// Placeholder with content
export const PlaceholderWithContent = () => (
  <Placeholder w={400} h={200}>
    <span>Custom Content</span>
  </Placeholder>
);

// Dynamic sizing
export const ResponsivePlaceholder = () => (
  <Placeholder w="100%" h={150} minW={200}>
    Responsive Placeholder
  </Placeholder>
);
```

### Example Component for Storybook Stories

```tsx
import { Example, Button, View } from 'reshaped';

// Organized story presentation
export const ButtonVariants = () => (
  <Example title="Button Variants">
    <Example.Item title="Solid Buttons">
      <View direction="row" gap={4}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="critical">Critical</Button>
      </View>
    </Example.Item>
    
    <Example.Item title="Faded Buttons">
      <View direction="row" gap={4}>
        <Button variant="faded">Default</Button>
        <Button variant="faded" color="primary">Primary</Button>
        <Button variant="faded" color="critical">Critical</Button>
      </View>
    </Example.Item>
  </Example>
);

// Multi-line titles and descriptions
export const ComponentShowcase = () => (
  <Example>
    <Example.Item title={["Primary Usage", "Most common implementation pattern"]}>
      <Button color="primary">Click me</Button>
    </Example.Item>
    
    <Example.Item title="Advanced Configuration">
      <Button 
        color="primary" 
        size="large"
        startIcon={<Icon />}
      >
        Advanced Button
      </Button>
    </Example.Item>
  </Example>
);
```

### Complete Provider Setup for Testing

```tsx
import { Reshaped, Button, View } from 'reshaped';

// Basic setup for component testing
export const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <Reshaped theme="reshaped" colorMode="light">
    {children}
  </Reshaped>
);

// Complete setup with all options
export const FullTestProvider = ({ children }: { children: React.ReactNode }) => (
  <Reshaped
    theme="reshaped"
    defaultTheme="reshaped"
    colorMode="light"
    defaultColorMode="light"
    defaultRTL={false}
    toastOptions={{
      position: 'bottom-right',
      duration: 5000
    }}
    scoped={false}
  >
    {children}
  </Reshaped>
);

// Dark mode testing setup
export const DarkModeTestProvider = ({ children }: { children: React.ReactNode }) => (
  <Reshaped colorMode="dark" theme="reshaped">
    {children}
  </Reshaped>
);
```

### Storybook Decorator Pattern

```tsx
// .storybook/preview.tsx
import type { Decorator } from '@storybook/react';
import { Reshaped } from 'reshaped';

export const withReshapedProvider: Decorator = (Story, context) => {
  const colorMode = context.globals.colorMode || 'light';
  
  return (
    <Reshaped 
      theme="reshaped"
      colorMode={colorMode}
      defaultColorMode="light"
    >
      <Story />
    </Reshaped>
  );
};

export const decorators = [withReshapedProvider];
```

### Component Development Workflow

```tsx
// Component.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Example, Placeholder } from 'reshaped';
import { MyComponent } from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  decorators: [(Story) => (
    <Reshaped theme="reshaped">
      <Story />
    </Reshaped>
  )],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

// Development story with layout testing
export const Development: Story = {
  render: () => (
    <Example title="Component Development">
      <Example.Item title="Layout Testing">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}>
          <Placeholder h={200}>Sidebar</Placeholder>
          <MyComponent />
        </div>
      </Example.Item>
      
      <Example.Item title="Content Testing">
        <MyComponent>
          <Placeholder h={100}>Dynamic Content</Placeholder>
        </MyComponent>
      </Example.Item>
    </Example>
  )
};

// Comprehensive examples
export const AllVariants: Story = {
  render: () => (
    <Example>
      <Example.Item title="Default State">
        <MyComponent />
      </Example.Item>
      
      <Example.Item title="With Content">
        <MyComponent>
          <Placeholder h={60}>Sample Content</Placeholder>
        </MyComponent>
      </Example.Item>
      
      <Example.Item title="Loading State">
        <MyComponent loading>
          <Placeholder h={60}>Loading...</Placeholder>
        </MyComponent>
      </Example.Item>
    </Example>
  )
};
```

### Testing Utilities Integration

```tsx
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import { Reshaped, Placeholder } from 'reshaped';
import { MyComponent } from './MyComponent';

// Test wrapper with provider
const renderWithProvider = (ui: React.ReactElement) => {
  return render(
    <Reshaped theme="reshaped" colorMode="light">
      {ui}
    </Reshaped>
  );
};

describe('MyComponent', () => {
  it('renders with placeholder content', () => {
    renderWithProvider(
      <MyComponent>
        <Placeholder data-testid="placeholder">Test Content</Placeholder>
      </MyComponent>
    );
    
    expect(screen.getByTestId('placeholder')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('handles different placeholder sizes', () => {
    renderWithProvider(
      <MyComponent>
        <Placeholder w={300} h={200} data-testid="sized-placeholder">
          Sized Content
        </Placeholder>
      </MyComponent>
    );
    
    const placeholder = screen.getByTestId('sized-placeholder');
    expect(placeholder).toHaveStyle({
      width: '300px',
      height: '200px'
    });
  });
});
```

## API Methods and Properties

### Placeholder Methods

- **Default Styling**: Automatically applies Reshaped design tokens for consistent appearance
- **Responsive Support**: Accepts both string and number values for dimensions
- **Content Support**: Can contain any React nodes for custom placeholder content
- **Theme Integration**: Uses CSS custom properties from Reshaped theme system

### Example Methods

- **Compound Pattern**: Uses `Example.Item` for structured content organization
- **Title Formatting**: Supports both string and string array for multi-line titles
- **Sticky Headers**: Example titles are sticky positioned for better navigation
- **Theme Styling**: Integrates with Reshaped color system and spacing

### Reshaped Provider Methods

- **Theme Management**: Dynamic theme switching and default theme configuration
- **Color Mode Control**: Light/dark mode support with auto-detection
- **RTL Support**: Right-to-left layout configuration
- **Toast Integration**: Built-in toast notification provider setup
- **Scoped Styling**: Option to scope styles to prevent conflicts

## Use Cases and Best Practices

### Development Workflows

1. **Component Prototyping**: Use Placeholder components to quickly mock up layouts and test component behavior with various content sizes
2. **Story Organization**: Structure Storybook stories with Example components for clear, organized presentations
3. **Layout Testing**: Validate responsive behavior and spacing with different placeholder dimensions
4. **Content Testing**: Test components with various content types using placeholder content

### Testing Scenarios

1. **Unit Testing**: Wrap components with Reshaped provider for consistent test environments
2. **Visual Testing**: Use Placeholder for consistent content in visual regression tests
3. **Integration Testing**: Test component interactions within complete provider context
4. **Accessibility Testing**: Ensure proper theme and color mode support across all scenarios

### Storybook Integration

1. **Story Decorators**: Set up global Reshaped provider for all stories
2. **Development Stories**: Create dedicated development stories for component iteration
3. **Documentation**: Use Example components to create clear, organized documentation
4. **Interactive Examples**: Combine with Storybook controls for dynamic configuration

## Performance Considerations

### Rendering Optimization

- **Lightweight Components**: Both Placeholder and Example are minimal components with optimized rendering
- **CSS Custom Properties**: Leverages CSS custom properties for efficient theme switching
- **Minimal Re-renders**: Provider setup minimizes unnecessary re-renders through careful context design
- **Tree Shaking**: Components are optimized for tree shaking when bundled

### Memory Management

- **Provider Scope**: Use scoped providers when needed to prevent memory leaks
- **Theme Caching**: Theme configurations are cached for performance
- **Event Cleanup**: Built-in cleanup for event listeners and subscriptions

## Related Components and Hooks

### Core Components

- **View**: Layout component that works seamlessly with development utilities
- **Text**: Typography component for placeholder and example content
- **Theme**: Theme provider for advanced theme configuration
- **ToastProvider**: Toast notification system integration

### Development Hooks

- **useTheme**: Access current theme configuration in development
- **useResponsiveClientValue**: Test responsive behavior during development
- **useKeyboardMode**: Test keyboard navigation and accessibility

### Integration Components

- **Container**: Layout container that works with placeholder sizing
- **Grid**: Grid system that integrates with placeholder components
- **Hidden**: Conditional rendering utilities for development testing
- **ScrollArea**: Scrollable content areas for testing overflow scenarios

## Migration and Compatibility

### From Previous Versions

When upgrading Reshaped versions, ensure compatibility by:
1. Checking TypeScript interface changes
2. Updating provider configuration options
3. Testing placeholder sizing behavior
4. Verifying example component styling

### Framework Integration

The development utilities work with:
- **React 18+**: Full support with concurrent features
- **Next.js**: Server-side rendering compatible
- **Remix**: Hydration-safe implementations
- **Vite**: Optimized for Vite build systems
- **Webpack**: Compatible with all Webpack configurations

This comprehensive set of development utilities provides everything needed for effective component development, testing, and documentation within the Reshaped design system ecosystem.