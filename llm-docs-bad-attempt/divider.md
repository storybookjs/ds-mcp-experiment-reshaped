# Divider Component

## Overview
The Divider component creates horizontal or vertical dividing lines between content sections, with optional labeling support for clear content separation and visual hierarchy.

## Key Features
- Horizontal and vertical orientations
- Optional text labels
- Customizable thickness and color
- Responsive behavior
- Semantic markup

## Props Interface
```typescript
type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: 'neutral' | 'neutral-faded';
  children?: React.ReactNode;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Horizontal Divider
```typescript
import { Divider, Text, View } from 'reshaped';

function HorizontalDividerExample() {
  return (
    <View gap={4}>
      <Text>Content above divider</Text>
      <Divider />
      <Text>Content below divider</Text>
    </View>
  );
}
```

### Labeled Divider
```typescript
import { Divider, Text, View } from 'reshaped';

function LabeledDividerExample() {
  return (
    <View gap={4}>
      <Text>Section 1 content</Text>
      <Divider>
        <Text variant="body-3" color="neutral-faded">
          OR
        </Text>
      </Divider>
      <Text>Section 2 content</Text>
    </View>
  );
}
```

### Vertical Divider
```typescript
import { Divider, Text, View } from 'reshaped';

function VerticalDividerExample() {
  return (
    <View direction="row" align="center" gap={3}>
      <Text>Left content</Text>
      <Divider orientation="vertical" />
      <Text>Right content</Text>
    </View>
  );
}
```

## Accessibility
- Semantic separation using HR element
- Proper ARIA roles for decorative dividers
- Screen reader friendly text labels
- Color contrast compliance

## Design Tokens
- Theme-aware border colors
- Consistent thickness scaling
- Responsive spacing integration

## Related Components
- **Text**: Labels within dividers
- **View**: Layout containers around dividers