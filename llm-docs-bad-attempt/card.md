# Card Component

## Overview
The Card component is a versatile container that provides a styled surface with elevation, borders, and interactive capabilities for grouping related content in a visually distinct container.

## Key Features
- Elevation and shadow effects
- Interactive states (hover, focus, active)
- Flexible content layout
- Border and padding options
- Clickable card support
- Responsive design
- Theme integration

## Props Interface
```typescript
type CardProps = {
  children: React.ReactNode;
  padding?: Responsive<number>;
  gap?: Responsive<number>;
  elevation?: 'none' | 'low' | 'medium' | 'high';
  border?: boolean;
  interactive?: boolean;
  onClick?: () => void;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Card
```typescript
import { Card, Text } from 'reshaped';

function BasicCard() {
  return (
    <Card padding={4}>
      <Text variant="title-4">Card Title</Text>
      <Text>This is the card content with some descriptive text.</Text>
    </Card>
  );
}
```

### Interactive Card
```typescript
import { Card, Text, Button } from 'reshaped';

function InteractiveCard() {
  return (
    <Card 
      padding={5} 
      elevation="medium"
      interactive
      onClick={() => console.log('Card clicked')}
    >
      <Text variant="title-5">Clickable Card</Text>
      <Text>Click anywhere on this card to trigger an action.</Text>
      <Button size="small" variant="outline">Learn More</Button>
    </Card>
  );
}
```

### Card with Custom Styling
```typescript
import { Card, Text, Avatar, View } from 'reshaped';

function ProfileCard() {
  return (
    <Card padding={6} elevation="high" border>
      <View gap={4}>
        <View direction="row" gap={3} align="center">
          <Avatar 
            src="/user-avatar.jpg" 
            alt="User Avatar" 
            size={12} 
          />
          <View gap={1}>
            <Text variant="title-6">John Doe</Text>
            <Text variant="body-3" color="neutral-faded">
              Senior Developer
            </Text>
          </View>
        </View>
        <Text>Passionate about creating exceptional user experiences.</Text>
      </View>
    </Card>
  );
}
```

## Elevation Levels
- **none**: No shadow, flat appearance
- **low**: Subtle shadow for slight elevation
- **medium**: Moderate shadow for clear separation
- **high**: Strong shadow for prominent elevation

## Interactive States
When `interactive` is true:
- Hover effects with elevation changes
- Focus indicators for keyboard navigation
- Active state feedback
- Cursor pointer indication

## Accessibility
- Proper focus management for interactive cards
- Keyboard navigation support (Enter/Space)
- ARIA attributes for interactive elements
- Screen reader friendly structure

## Design Tokens
- Elevation shadows from design system
- Border radius and color tokens
- Spacing scale for padding and gaps
- Theme-aware background colors

## Related Components
- **View**: Flexible layout container
- **Text**: Typography within cards
- **Button**: Action elements in cards
- **Avatar**: User representations

## Best Practices
- Use appropriate elevation for visual hierarchy
- Group related content logically
- Provide clear interactive feedback
- Maintain consistent padding and spacing
- Consider card density for different screen sizes
- Use semantic HTML structure within cards