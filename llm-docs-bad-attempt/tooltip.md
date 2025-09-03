# Tooltip Component

## Overview
The Tooltip component is a hover-triggered overlay that displays contextual information about interface elements, providing helpful hints and descriptions without cluttering the UI.

## Key Features
- Hover and focus triggers
- Customizable positioning
- Auto-positioning with collision detection
- Accessible design
- Portal rendering
- Delay and timing controls

## Props Interface
```typescript
type TooltipProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  delay?: number;
  disabled?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Tooltip
```typescript
import { Tooltip, Button, Text } from 'reshaped';

function BasicTooltip() {
  return (
    <Tooltip
      trigger={<Button>Hover me</Button>}
      placement="top"
    >
      <Text>This button performs an important action</Text>
    </Tooltip>
  );
}
```

### Icon with Tooltip
```typescript
import { Tooltip, Icon, Text, View } from 'reshaped';
import { HelpIcon } from './icons';

function HelpTooltip() {
  return (
    <View direction="row" align="center" gap={2}>
      <Text>Email Address</Text>
      <Tooltip
        trigger={
          <Icon 
            svg={HelpIcon} 
            size={4} 
            color="neutral-faded"
            style={{ cursor: 'help' }}
          />
        }
        placement="right"
      >
        <View padding={2} maxWidth={60}>
          <Text variant="body-3">
            We'll use this email to send you important updates about your account.
          </Text>
        </View>
      </Tooltip>
    </View>
  );
}
```

### Form Field Tooltips
```typescript
import { Tooltip, TextField, FormControl, Icon, View, Text } from 'reshaped';
import { InfoIcon } from './icons';

function FormWithTooltips() {
  return (
    <View gap={4}>
      <FormControl
        label={
          <View direction="row" align="center" gap={2}>
            <Text>Password</Text>
            <Tooltip
              trigger={<Icon svg={InfoIcon} size={4} color="neutral-faded" />}
              placement="right"
            >
              <View padding={2} maxWidth={50}>
                <Text variant="body-3">
                  Password must be at least 8 characters long and contain uppercase, lowercase, and numbers.
                </Text>
              </View>
            </Tooltip>
          </View>
        }
      >
        <TextField type="password" />
      </FormControl>
      
      <FormControl
        label={
          <View direction="row" align="center" gap={2}>
            <Text>API Key</Text>
            <Tooltip
              trigger={<Icon svg={InfoIcon} size={4} color="neutral-faded" />}
              placement="top"
              delay={200}
            >
              <View padding={2} maxWidth={45}>
                <Text variant="body-3">
                  You can find your API key in the developer settings.
                </Text>
              </View>
            </Tooltip>
          </View>
        }
      >
        <TextField placeholder="Enter your API key" />
      </FormControl>
    </View>
  );
}
```

### Rich Content Tooltip
```typescript
import { Tooltip, Avatar, Text, View, Button } from 'reshaped';

function UserProfileTooltip() {
  const userInfo = {
    name: 'Alice Johnson',
    role: 'Senior Designer',
    avatar: '/alice.jpg',
    status: 'Available'
  };
  
  return (
    <Tooltip
      trigger={
        <Avatar 
          src={userInfo.avatar}
          alt={userInfo.name}
          size={8}
        />
      }
      placement="bottom"
      delay={300}
    >
      <View padding={4} gap={3} minWidth={48}>
        <View direction="row" align="center" gap={3}>
          <Avatar 
            src={userInfo.avatar}
            alt={userInfo.name}
            size={10}
          />
          <View gap={1}>
            <Text variant="body-2" weight="medium">{userInfo.name}</Text>
            <Text variant="body-3" color="neutral-faded">{userInfo.role}</Text>
            <Text variant="body-3" color="positive">● {userInfo.status}</Text>
          </View>
        </View>
        <View direction="row" gap={2}>
          <Button size="small" variant="outline">Message</Button>
          <Button size="small" variant="outline">Profile</Button>
        </View>
      </View>
    </Tooltip>
  );
}
```

## Positioning
- **auto**: Automatically positions based on available space
- **top/bottom/left/right**: Fixed positioning
- Collision detection prevents overflow
- Smart repositioning when space is limited

## Accessibility
- ARIA describedby relationships
- Focus and hover triggers
- Keyboard accessible (focus/blur)
- Screen reader compatible
- Respects reduced motion preferences

## Performance
- Portal rendering for proper layering
- Optimized show/hide animations
- Configurable delay timing
- Memory efficient implementation

## Related Components
- **Popover**: More interactive overlays
- **Modal**: Full-screen information displays