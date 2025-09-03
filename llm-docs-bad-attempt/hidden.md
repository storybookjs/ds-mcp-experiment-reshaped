# Hidden Component

## Overview
The Hidden component is a utility for conditionally hiding content based on responsive breakpoints or visibility states, providing fine-grained control over content display across different screen sizes.

## Key Features
- Responsive visibility control
- Breakpoint-based hiding
- Boolean visibility toggle
- Performance optimized
- Accessibility considerations
- CSS-based implementation

## Props Interface
```typescript
type HiddenProps = {
  children: React.ReactNode;
  above?: 'mobile' | 'tablet' | 'desktop';
  below?: 'tablet' | 'desktop' | 'wide';
  only?: 'mobile' | 'tablet' | 'desktop' | 'wide';
  when?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Hide Above Breakpoint
```typescript
import { Hidden, Text, View, Button } from 'reshaped';

function HideAboveExample() {
  return (
    <View gap={4}>
      <Text variant="title-4">Responsive Navigation</Text>
      
      {/* Show only on mobile and tablet */}
      <Hidden above="tablet">
        <Button variant="outline" size="small">
          ☰ Menu
        </Button>
      </Hidden>
      
      {/* Show only on desktop and larger */}
      <Hidden below="desktop">
        <View direction="row" gap={4}>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Contact</Button>
        </View>
      </Hidden>
    </View>
  );
}
```

### Hide Below Breakpoint
```typescript
import { Hidden, Text, View, Card } from 'reshaped';

function HideBelowExample() {
  return (
    <View direction="row" gap={4}>
      <View grow>
        <Text variant="title-4">Main Content</Text>
        <Text>This content is always visible.</Text>
      </View>
      
      {/* Sidebar only visible on tablet and larger */}
      <Hidden below="tablet">
        <Card padding={4} minWidth={64}>
          <Text variant="title-6">Sidebar</Text>
          <Text variant="body-3">
            This sidebar is hidden on mobile devices to save space.
          </Text>
        </Card>
      </Hidden>
    </View>
  );
}
```

### Hide on Specific Breakpoint
```typescript
import { Hidden, Text, View, Image } from 'reshaped';

function HideOnlyExample() {
  return (
    <View gap={4}>
      <Text variant="title-4">Responsive Images</Text>
      
      {/* Different image for mobile only */}
      <Hidden only="mobile">
        <Image 
          src="/hero-mobile.jpg" 
          aspectRatio="1/1"
          alt="Mobile optimized hero image"
        />
      </Hidden>
      
      {/* Different image for tablet only */}
      <Hidden only="tablet">
        <Image 
          src="/hero-tablet.jpg" 
          aspectRatio="4/3"
          alt="Tablet optimized hero image"
        />
      </Hidden>
      
      {/* Different image for desktop and larger */}
      <Hidden only="desktop">
        <Image 
          src="/hero-desktop.jpg" 
          aspectRatio="16/9"
          alt="Desktop optimized hero image"
        />
      </Hidden>
    </View>
  );
}
```

### Conditional Visibility
```typescript
import { Hidden, Text, View, Button, Alert } from 'reshaped';
import { useState } from 'react';

function ConditionalVisibility() {
  const [showAlert, setShowAlert] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <View gap={4}>
      <View direction="row" gap={2}>
        <Button onClick={() => setShowAlert(!showAlert)}>
          Toggle Alert
        </Button>
        <Button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
      </View>
      
      {/* Conditionally hidden alert */}
      <Hidden when={!showAlert}>
        <Alert color="warning">
          This alert is conditionally visible based on state.
        </Alert>
      </Hidden>
      
      {/* User-specific content */}
      <Hidden when={!isLoggedIn}>
        <Text>Welcome back! You are now logged in.</Text>
      </Hidden>
      
      <Hidden when={isLoggedIn}>
        <Text>Please log in to access your account.</Text>
      </Hidden>
    </View>
  );
}
```

### Progressive Disclosure
```typescript
import { Hidden, Text, View, Card, Button } from 'reshaped';
import { useState } from 'react';

function ProgressiveDisclosure() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const cards = [
    { id: 1, title: 'Basic Plan', description: 'Perfect for individuals' },
    { id: 2, title: 'Pro Plan', description: 'Great for small teams' },
    { id: 3, title: 'Enterprise', description: 'For large organizations' }
  ];
  
  return (
    <View gap={4}>
      {cards.map(card => (
        <Card key={card.id} padding={5}>
          <View gap={3}>
            <View direction="row" justify="space-between" align="center">
              <View gap={1}>
                <Text variant="title-6">{card.title}</Text>
                <Text variant="body-3" color="neutral-faded">
                  {card.description}
                </Text>
              </View>
              <Button 
                size="small" 
                variant="outline"
                onClick={() => setExpandedCard(
                  expandedCard === card.id ? null : card.id
                )}\n              >\n                {expandedCard === card.id ? 'Less' : 'More'}\n              </Button>\n            </View>\n            \n            <Hidden when={expandedCard !== card.id}>\n              <View gap={2}>\n                <Text variant="body-3\">\n                  Here are the detailed features and pricing information for {card.title}.\n                </Text>\n                <View direction=\"row\" gap={2}>\n                  <Button size=\"small\">Choose Plan</Button>\n                  <Button size=\"small\" variant=\"outline\">Learn More</Button>\n                </View>\n              </View>\n            </Hidden>\n          </View>\n        </Card>\n      ))}\n    </View>\n  );\n}\n```\n\n## Breakpoint Options\n- **mobile**: Smallest screen size\n- **tablet**: Medium screen size\n- **desktop**: Large screen size\n- **wide**: Extra large screen size\n\n## Visibility Logic\n- **above**: Hide on breakpoints larger than specified\n- **below**: Hide on breakpoints smaller than specified\n- **only**: Hide on all breakpoints except the specified one\n- **when**: Hide when boolean condition is true\n\n## Performance\n- CSS-based hiding for optimal performance\n- Content remains in DOM but is visually hidden\n- No JavaScript-based show/hide logic\n- Efficient responsive behavior\n\n## Accessibility\n- Hidden content remains accessible to screen readers\n- Proper ARIA handling for dynamic visibility\n- Focus management considerations\n- Semantic structure preservation\n\n## Related Components\n- **HiddenVisually**: Hides content visually while keeping it accessible\n- **View**: General layout component with responsive props"