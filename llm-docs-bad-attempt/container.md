# Container Component

## Overview
The Container component is a layout utility that provides centered content with configurable padding, dimensions, and flexbox alignment properties for consistent page layouts.

## Key Features
- Content centering and max-width constraints
- Responsive padding and spacing
- Flexbox alignment utilities
- Configurable dimensions
- Responsive design support
- Semantic layout structure

## Props Interface
```typescript
type ContainerProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
  padding?: Responsive<number>;
  paddingX?: Responsive<number>;
  paddingY?: Responsive<number>;
  align?: 'start' | 'center' | 'end';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Container
```typescript
import { Container, Text, View } from 'reshaped';

function BasicContainer() {
  return (
    <Container>
      <View gap={6}>
        <Text variant="title-1">Welcome to Our Platform</Text>
        <Text variant="body-1">
          This content is automatically centered and constrained to a readable width.
        </Text>
      </View>
    </Container>
  );
}
```

### Different Container Sizes
```typescript
import { Container, Text, View } from 'reshaped';

function ContainerSizes() {
  return (
    <View gap={8}>
      <Container size="small" padding={4}>
        <Text variant="title-4">Small Container</Text>
        <Text>This container has a smaller max-width for focused content.</Text>
      </Container>
      
      <Container size="medium" padding={4}>
        <Text variant="title-4">Medium Container (Default)</Text>
        <Text>This is the default container size for most content.</Text>
      </Container>
      
      <Container size="large" padding={4}>
        <Text variant="title-4">Large Container</Text>
        <Text>This container is wider and suitable for dashboard-style layouts.</Text>
      </Container>
      
      <Container size="full" padding={4}>
        <Text variant="title-4">Full Width Container</Text>
        <Text>This container takes the full width of its parent.</Text>
      </Container>
    </View>
  );
}
```

### Responsive Padding
```typescript
import { Container, Text, View, Card } from 'reshaped';

function ResponsiveContainer() {
  return (
    <Container 
      padding={{ mobile: 4, tablet: 6, desktop: 8 }}
      paddingY={{ mobile: 6, desktop: 12 }}
    >
      <View gap={6}>
        <Text variant="title-2">Responsive Layout</Text>
        <Text variant="body-1">
          This container has different padding on mobile, tablet, and desktop devices.
        </Text>
        
        <Card padding={5}>
          <Text variant="title-5">Card Content</Text>
          <Text>
            The container provides consistent spacing around this card
            regardless of screen size.
          </Text>
        </Card>
      </View>
    </Container>
  );
}
```

### Centered Layout
```typescript
import { Container, View, Text, Button, Card } from 'reshaped';

function CenteredLayout() {
  return (
    <Container size="small" padding={6} align="center">
      <Card padding={8} align="center">
        <View gap={4} align="center" maxWidth={80}>
          <Text variant="title-3">Sign Up</Text>
          <Text variant="body-2" color="neutral-faded" align="center">
            Create your account to get started with our platform.
          </Text>
          
          <View gap={3} width="100%">
            <Button width="100%">Create Account</Button>
            <Button variant="outline" width="100%">
              Sign In Instead
            </Button>
          </View>
        </View>
      </Card>
    </Container>
  );
}
```

### Page Layout Container
```typescript
import { Container, View, Text, Button } from 'reshaped';

function PageLayout() {
  return (
    <View>
      {/* Header */}
      <Container padding={4}>
        <View direction="row" justify="space-between" align="center">
          <Text variant="title-4" weight="bold">Your App</Text>
          <Button size="small">Sign Out</Button>
        </View>
      </Container>
      
      {/* Main Content */}
      <Container size="large" padding={6}>
        <View gap={8}>
          <View gap={2}>
            <Text variant="title-2">Dashboard</Text>
            <Text variant="body-2" color="neutral-faded">
              Welcome back! Here's what's happening with your account.
            </Text>
          </View>
          
          {/* Content sections would go here */}
          <View gap={6}>
            <Text>Main content area with proper spacing and width constraints.</Text>
          </View>
        </View>
      </Container>
      
      {/* Footer */}
      <Container padding={4}>
        <Text variant="body-3" color="neutral-faded" align="center">
          © 2024 Your App. All rights reserved.
        </Text>
      </Container>
    </View>
  );
}
```

## Container Sizes
- **small**: ~640px max width, good for forms and focused content
- **medium**: ~768px max width, default for most content
- **large**: ~1024px max width, suitable for dashboards and wide layouts
- **full**: 100% width, no constraints

## Responsive Behavior
- Automatic responsive padding based on screen size
- Breakpoint-specific padding values
- Mobile-first responsive design
- Maintains readability across devices

## Accessibility
- Semantic container structure
- Proper content flow and hierarchy
- Screen reader friendly layout
- Focus management within containers

## Related Components
- **View**: General layout containers
- **Card**: Content containers with styling
- **Grid**: Grid-based layouts