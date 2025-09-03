# Popover Component

## Overview
The Popover component is a layered element that displays floating content positioned relative to a trigger element, perfect for tooltips, help text, and contextual information.

## Key Features
- Flexible positioning
- Auto-positioning with collision detection
- Portal rendering
- Trigger interaction modes
- Accessible design
- Custom styling support

## Props Interface
```typescript
type PopoverProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  triggerMode?: 'hover' | 'click' | 'focus';
  disabled?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Popover
```typescript
import { Popover, Button, Text, View } from 'reshaped';

function BasicPopover() {
  return (
    <Popover
      trigger={<Button>Show Info</Button>}
      placement="top"
    >
      <View padding={3}>
        <Text>This is helpful information!</Text>
      </View>
    </Popover>
  );
}
```

### Hover Popover
```typescript
import { Popover, Icon, Text, View } from 'reshaped';
import { HelpIcon } from './icons';

function HoverPopover() {
  return (
    <Popover
      trigger={<Icon svg={HelpIcon} />}
      triggerMode="hover"
      placement="right"
    >
      <View padding={3} maxWidth={60}>
        <Text variant="body-3">
          This feature helps you manage your account settings more effectively.
        </Text>
      </View>
    </Popover>
  );
}
```

## Positioning
- Automatic collision detection
- Smart placement adjustments
- Responsive positioning
- Custom offset support

## Accessibility
- Focus management
- Escape key to close
- ARIA relationships
- Screen reader support

## Related Components
- **Tooltip**: Simplified popover for hints
- **Modal**: Full-screen overlays