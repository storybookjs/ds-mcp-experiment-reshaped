# DropdownMenu Component

## Overview
The DropdownMenu component is a composable dropdown menu that provides an accessible menu interface with trigger, content, sections, items, and nested submenu support for complex navigation patterns.

## Key Features
- Composable API with multiple subcomponents
- Keyboard navigation and shortcuts
- Nested submenu support
- Custom triggers and content
- Accessibility compliance
- Portal rendering for proper layering

## Props Interface
```typescript
type DropdownMenuProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  disabled?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Dropdown Menu
```typescript
import { DropdownMenu, MenuItem, MenuSection, Divider, Button } from 'reshaped';
import { UserIcon, SettingsIcon, LogoutIcon } from './icons';

function BasicDropdownMenu() {
  return (
    <DropdownMenu 
      trigger={<Button>Open Menu</Button>}
    >
      <MenuSection title="Profile">
        <MenuItem icon={UserIcon}>
          My Profile
        </MenuItem>
        <MenuItem icon={SettingsIcon}>
          Settings
        </MenuItem>
      </MenuSection>
      <Divider />
      <MenuItem icon={LogoutIcon} color="critical">
        Sign Out
      </MenuItem>
    </DropdownMenu>
  );
}
```

### Menu with Actions
```typescript
import { DropdownMenu, MenuItem, Button } from 'reshaped';

function ActionDropdownMenu() {
  return (
    <DropdownMenu 
      trigger={<Button variant="ghost">Actions</Button>}
      placement="bottom-end"
    >
      <MenuItem onClick={() => console.log('View')}>
        View Details
      </MenuItem>
      <MenuItem onClick={() => console.log('Edit')}>
        Edit Item
      </MenuItem>
      <MenuItem onClick={() => console.log('Duplicate')}>
        Duplicate
      </MenuItem>
      <MenuItem color="critical" onClick={() => console.log('Delete')}>
        Delete Item
      </MenuItem>
    </DropdownMenu>
  );
}
```

## Accessibility
- Full keyboard navigation with arrow keys
- Escape key closes menu
- Focus management and trapping
- ARIA menu semantics and roles
- Screen reader announcements

## Related Components
- **MenuItem**: Individual menu items
- **MenuSection**: Grouped menu sections
- **Button**: Trigger elements