# MenuItem Component

## Overview
The MenuItem component is a flexible menu item that provides interactive list elements with icons, slots, and various visual states for navigation and selection interfaces.

## Key Features
- Icon and text content
- Multiple color variants
- Active and disabled states
- Keyboard navigation
- Accessibility compliance
- Flexible content slots

## Props Interface
```typescript
type MenuItemProps = {
  children: React.ReactNode;
  icon?: React.ReactElement;
  color?: 'neutral' | 'primary' | 'critical';
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
```

## Usage Examples

### Basic Menu Item
```typescript
import { MenuItem } from 'reshaped';
import { HomeIcon } from './icons';

function BasicMenuItem() {
  return (
    <MenuItem 
      icon={<HomeIcon />}
      onClick={() => console.log('Home clicked')}
    >
      Home
    </MenuItem>
  );
}
```

### Menu with Different States
```typescript
import { MenuItem, View } from 'reshaped';
import { UserIcon, SettingsIcon, HelpIcon } from './icons';

function MenuWithStates() {
  return (
    <View>
      <MenuItem icon={<UserIcon />} active>
        Profile (Active)
      </MenuItem>
      <MenuItem icon={<SettingsIcon />}>
        Settings
      </MenuItem>
      <MenuItem icon={<HelpIcon />} disabled>
        Help (Disabled)
      </MenuItem>
    </View>
  );
}
```

### Destructive Menu Item
```typescript
import { MenuItem } from 'reshaped';
import { DeleteIcon } from './icons';

function DestructiveMenuItem() {
  return (
    <MenuItem 
      icon={<DeleteIcon />}
      color="critical"
      onClick={() => {
        if (confirm('Are you sure?')) {
          console.log('Delete confirmed');
        }
      }}
    >
      Delete Item
    </MenuItem>
  );
}
```

## Accessibility
- Proper button semantics and ARIA attributes
- Keyboard navigation support (Enter/Space)
- Focus indicators and management
- Screen reader announcements for state changes

## Design Tokens
- Theme-aware colors for different states
- Consistent spacing and typography
- Hover and focus state animations
- Icon alignment and sizing

## Related Components
- **DropdownMenu**: Container for menu items
- **ContextMenu**: Alternative menu container
- **Icon**: Menu item decorations