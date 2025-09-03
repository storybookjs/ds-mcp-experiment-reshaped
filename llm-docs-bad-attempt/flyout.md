# Flyout Component

## Overview
The Flyout component is a low-level utility for creating positioned overlay content relative to trigger elements, providing the foundation for tooltips, dropdowns, and other floating interfaces.

## Key Features
- Positioned overlay rendering
- Portal-based rendering
- Collision detection and repositioning
- Custom positioning logic
- Event handling utilities
- Accessibility support

## Props Interface
```typescript
type FlyoutProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  visible: boolean;
  onVisibleChange?: (visible: boolean) => void;
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
  offset?: number;
  shift?: boolean;
  flip?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Flyout
```typescript
import { Flyout, Button, Text, View, Card } from 'reshaped';
import { useState } from 'react';

function BasicFlyout() {
  const [visible, setVisible] = useState(false);
  
  return (
    <Flyout
      trigger={
        <Button onClick={() => setVisible(!visible)}>
          {visible ? 'Hide' : 'Show'} Flyout
        </Button>
      }
      visible={visible}
      onVisibleChange={setVisible}
      placement="bottom"
    >
      <Card padding={4} elevation="high">
        <View gap={2}>
          <Text variant="title-6">Flyout Content</Text>
          <Text variant="body-3">
            This content is positioned relative to the trigger button.
          </Text>
        </View>
      </Card>
    </Flyout>
  );
}
```

### Auto-Positioning Flyout
```typescript
import { Flyout, Button, Text, View } from 'reshaped';
import { useState } from 'react';

function AutoPositioningFlyout() {
  const [visible, setVisible] = useState(false);
  
  return (
    <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
      <Flyout
        trigger={
          <Button onClick={() => setVisible(!visible)}>
            Smart Positioning
          </Button>
        }
        visible={visible}
        onVisibleChange={setVisible}
        placement="auto"
        flip={true}
        shift={true}
      >
        <View 
          padding={4} 
          style={{ 
            backgroundColor: 'var(--rs-color-background-elevation-base)',
            border: '1px solid var(--rs-color-border-neutral-faded)',
            borderRadius: '8px',
            minWidth: '200px'
          }}
        >
          <Text variant="body-3">
            This flyout automatically positions itself to stay within the viewport.
          </Text>
        </View>
      </Flyout>
    </div>
  );
}
```

### Custom Trigger Flyout
```typescript
import { Flyout, Icon, Text, View } from 'reshaped';
import { useState } from 'react';
import { InfoIcon } from './icons';

function CustomTriggerFlyout() {
  const [visible, setVisible] = useState(false);
  
  return (
    <View direction="row" align="center" gap={2}>
      <Text>Hover for more info</Text>
      <Flyout
        trigger={
          <Icon 
            svg={InfoIcon} 
            size={4} 
            color="neutral-faded"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
          />
        }
        visible={visible}
        placement="top"
        offset={8}
      >
        <View 
          padding={3}
          maxWidth={48}
          style={{ 
            backgroundColor: 'var(--rs-color-background-neutral)',
            color: 'var(--rs-color-foreground-neutral-contrast)',
            borderRadius: '6px',
            fontSize: '14px'
          }}
        >
          <Text variant="body-3">
            This is additional information that appears on hover.
          </Text>
        </View>
      </Flyout>
    </View>
  );
}
```

### Complex Flyout Content
```typescript
import { Flyout, Button, Text, View, Avatar, Divider } from 'reshaped';
import { useState } from 'react';

function ComplexFlyout() {
  const [visible, setVisible] = useState(false);
  
  const user = {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    avatar: '/alice.jpg',
    status: 'Online'
  };
  
  return (
    <Flyout
      trigger={
        <Avatar 
          src={user.avatar}
          alt={user.name}
          size={10}
          onClick={() => setVisible(!visible)}
          style={{ cursor: 'pointer' }}
        />
      }
      visible={visible}
      onVisibleChange={setVisible}
      placement="bottom-start"
      offset={8}
    >
      <View 
        padding={4}
        gap={3}
        minWidth={64}
        style={{ 
          backgroundColor: 'var(--rs-color-background-elevation-base)',
          border: '1px solid var(--rs-color-border-neutral-faded)',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}
      >
        <View direction="row" align="center" gap={3}>
          <Avatar src={user.avatar} alt={user.name} size={12} />
          <View gap={1}>
            <Text variant="body-2" weight="medium">{user.name}</Text>
            <Text variant="body-3" color="neutral-faded">{user.email}</Text>
            <Text variant="body-3" color="positive">● {user.status}</Text>
          </View>
        </View>
        
        <Divider />
        
        <View gap={2}>
          <Button size="small" width="100%">View Profile</Button>
          <Button size="small" variant="outline" width="100%">Send Message</Button>
        </View>
      </View>
    </Flyout>
  );
}
```

## Positioning Options
- **top/bottom/left/right**: Fixed positioning relative to trigger
- **auto**: Automatic positioning based on available space
- **flip**: Automatically flips to opposite side when space is limited
- **shift**: Shifts position to stay within viewport bounds

## Portal Rendering
- Renders content in document body to avoid z-index issues
- Maintains proper stacking context
- Handles multiple nested flyouts
- Preserves accessibility relationships

## Accessibility
- ARIA relationships between trigger and content
- Focus management and trapping
- Keyboard navigation support
- Screen reader announcements

## Related Components
- **Tooltip**: Specialized flyout for hints
- **Popover**: Higher-level flyout with additional features
- **DropdownMenu**: Menu-specific flyout implementation