# ContextMenu Component

## Overview
The ContextMenu component displays a menu of actions when users right-click on a target element, providing contextual interactions and shortcuts for enhanced user experience.

## Key Features
- Right-click activation
- Keyboard navigation
- Nested submenus support
- Custom positioning
- Accessibility compliance
- Touch device support

## Props Interface
```typescript
type ContextMenuProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  disabled?: boolean;
  placement?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Context Menu
```typescript
import { ContextMenu, MenuItem, Divider } from 'reshaped';
import { CopyIcon, DeleteIcon, EditIcon } from './icons';

function BasicContextMenu() {
  return (
    <ContextMenu
      trigger={<div>Right-click me</div>}
    >
      <MenuItem icon={EditIcon} onClick={() => console.log('Edit')}>
        Edit
      </MenuItem>
      <MenuItem icon={CopyIcon} onClick={() => console.log('Copy')}>
        Copy
      </MenuItem>
      <Divider />
      <MenuItem 
        icon={DeleteIcon} 
        color="critical"
        onClick={() => console.log('Delete')}
      >
        Delete
      </MenuItem>
    </ContextMenu>
  );
}
```

## Accessibility
- Keyboard navigation with arrow keys
- Escape key to close
- Focus management and trapping
- ARIA menu semantics
- Screen reader announcements

## Related Components
- **MenuItem**: Individual menu items
- **DropdownMenu**: Alternative menu component