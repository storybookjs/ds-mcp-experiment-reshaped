# DropdownMenu

A contextual menu component that displays a list of actions or options in an overlay, triggered by user interaction with a button or other control.

**Keywords**: Menu, Dropdown, Context Menu, Actions, Popover, Navigation, Options, Selection

## Usage Description

The DropdownMenu component provides a flexible way to present users with a list of actions or options in a space-efficient overlay. It's commonly used for action menus, navigation options, settings, or any scenario where you need to present multiple choices without cluttering the main interface.

Use DropdownMenu when you have multiple related actions that don't warrant dedicated space in the primary UI, such as "more actions" menus, user profile menus, or context-specific options. The component supports complex menu structures including sections for grouping related items and submenus for hierarchical organization.

The component is built on top of the Popover component and inherits its positioning and interaction capabilities, making it suitable for both simple action lists and complex nested menu systems with keyboard navigation support.

## Props Documentation

### DropdownMenu (Main Component)

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | No | - | The content of the dropdown menu, typically includes Trigger and Content components |
| `position` | `Position` | No | `"bottom-start"` | Controls where the menu appears relative to the trigger. Options include combinations of top/bottom with start/end |
| `forcePosition` | `boolean` | No | - | Forces the menu to stay in the specified position even if it would be clipped |
| `fallbackPositions` | `Position[]` | No | - | Array of alternative positions to try if the primary position doesn't fit |
| `triggerType` | `"click" \| "hover" \| "focus"` | No | `"click"` | How the menu is activated - click, hover, or focus |
| `trapFocusMode` | `"action-menu" \| "selection-menu" \| false` | No | `"action-menu"` | Controls focus trapping behavior within the menu |
| `contentGap` | `number` | No | - | Gap between the trigger and menu content in spacing units |
| `contentShift` | `number` | No | - | Horizontal offset for the menu content |
| `onOpen` | `() => void` | No | - | Callback fired when the menu opens |
| `onClose` | `(args: { reason?: CloseReason }) => void` | No | - | Callback fired when the menu closes |
| `active` | `boolean` | No | - | Controls the open/closed state (controlled component) |
| `defaultActive` | `boolean` | No | - | Initial open state for uncontrolled usage |
| `width` | `"trigger" \| string` | No | - | Menu width - "trigger" matches trigger width, string values set custom width |
| `disableHideAnimation` | `boolean` | No | - | Disables the closing animation |
| `disableCloseOnOutsideClick` | `boolean` | No | - | Prevents the menu from closing when clicking outside |
| `instanceRef` | `React.Ref<Instance>` | No | - | Ref to access menu instance methods (open, close, updatePosition) |
| `containerRef` | `React.RefObject<HTMLElement>` | No | - | Ref to the container element for portal rendering |
| `originCoordinates` | `{ x: number, y: number }` | No | - | Custom coordinates for menu positioning |

### DropdownMenu.Content

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | No | - | Menu items, sections, or other content |
| `className` | `string \| string[]` | No | - | Custom CSS classes for styling |
| `attributes` | `React.HTMLAttributes<HTMLDivElement>` | No | - | HTML attributes to pass to the content container |

### DropdownMenu.Section

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | Menu items or other content within the section |

### DropdownMenu.Item

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | The item content/label |
| `onClick` | `(e: MouseEvent \| KeyboardEvent) => void` | No | - | Click handler for the menu item |
| `href` | `string` | No | - | URL for link behavior (renders as anchor) |
| `as` | `keyof JSX.IntrinsicElements` | No | - | Custom element type to render |
| `disabled` | `boolean` | No | - | Disables the item interaction |
| `color` | `"neutral" \| "critical" \| "primary"` | No | - | Visual color theme for the item |
| `icon` | `React.ComponentType` | No | - | Icon component to display |
| `startSlot` | `React.ReactNode` | No | - | Content to display at the start of the item |
| `endSlot` | `React.ReactNode` | No | - | Content to display at the end of the item |
| `highlighted` | `boolean` | No | - | Visual highlighted state |
| `selected` | `boolean` | No | - | Visual selected state |
| `size` | `"small" \| "medium" \| "large"` | No | - | Size variant (responsive) |
| `stopPropagation` | `boolean` | No | - | Prevents event bubbling |
| `className` | `string \| string[]` | No | - | Custom CSS classes |
| `attributes` | `React.HTMLAttributes` | No | - | HTML attributes for the item element |

### DropdownMenu.SubMenu

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | SubTrigger and Content components for the submenu |

### DropdownMenu.SubTrigger

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | Yes | - | The trigger item content/label |
| `disabled` | `boolean` | No | - | Disables the submenu trigger |
| `color` | `"neutral" \| "critical" \| "primary"` | No | - | Visual color theme |
| `icon` | `React.ComponentType` | No | - | Icon component to display |
| `startSlot` | `React.ReactNode` | No | - | Content at the start of the trigger |
| `highlighted` | `boolean` | No | - | Visual highlighted state |
| `selected` | `boolean` | No | - | Visual selected state |
| `size` | `"small" \| "medium" \| "large"` | No | - | Size variant (responsive) |
| `className` | `string \| string[]` | No | - | Custom CSS classes |
| `attributes` | `React.HTMLAttributes` | No | - | HTML attributes |

### Additional Components

- **DropdownMenu.Trigger**: Inherited from Popover.Trigger - renders function with trigger attributes
- **DropdownMenu.Dismissible**: Inherited from Popover.Dismissible - provides click-outside-to-close functionality

## Code Examples

### Basic Usage

Simple dropdown menu with click trigger:

```tsx
import { DropdownMenu, Button } from 'reshaped';
import IconCheckmark from 'reshaped/icons/Checkmark';

function BasicMenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        {(attributes) => <Button attributes={attributes}>Options</Button>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item icon={IconCheckmark} onClick={() => console.log('Edit')}>
          Edit
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={IconCheckmark} onClick={() => console.log('Delete')}>
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

### Menu with Sections

Organize items into logical groups with visual separation:

```tsx
import { DropdownMenu, Button } from 'reshaped';

function SectionedMenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        {(attributes) => <Button attributes={attributes}>File Menu</Button>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Section>
          <DropdownMenu.Item onClick={() => console.log('New')}>
            New File
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => console.log('Open')}>
            Open File
          </DropdownMenu.Item>
        </DropdownMenu.Section>

        <DropdownMenu.Section>
          <DropdownMenu.Item onClick={() => console.log('Save')}>
            Save
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => console.log('Save As')}>
            Save As...
          </DropdownMenu.Item>
        </DropdownMenu.Section>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

### Submenu Implementation

Create hierarchical menus with nested options:

```tsx
import { DropdownMenu, Button } from 'reshaped';

function MenuWithSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        {(attributes) => <Button attributes={attributes}>Actions</Button>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onClick={() => console.log('Action 1')}>
          Simple Action
        </DropdownMenu.Item>
        
        <DropdownMenu.SubMenu>
          <DropdownMenu.SubTrigger>Export Options</DropdownMenu.SubTrigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onClick={() => console.log('Export PDF')}>
              Export as PDF
            </DropdownMenu.Item>
            <DropdownMenu.Item onClick={() => console.log('Export CSV')}>
              Export as CSV
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.SubMenu>

        <DropdownMenu.SubMenu>
          <DropdownMenu.SubTrigger disabled>
            Disabled Submenu
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Hidden Option</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.SubMenu>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

### Controlled State with Positioning

Control menu state and customize positioning:

```tsx
import { DropdownMenu, Button } from 'reshaped';
import { useState } from 'react';

function ControlledMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu
      active={isOpen}
      position="top-end"
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <DropdownMenu.Trigger>
        {(attributes) => <Button attributes={attributes}>Controlled Menu</Button>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item 
          color="critical" 
          onClick={() => {
            console.log('Delete action');
            setIsOpen(false);
          }}
        >
          Delete Item
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setIsOpen(false)}>
          Close Menu
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

### Advanced Menu with Custom Styling

Demonstrate item variants, colors, and custom attributes:

```tsx
import { DropdownMenu, Button } from 'reshaped';
import IconUser from 'reshaped/icons/User';
import IconSettings from 'reshaped/icons/Settings';

function AdvancedMenu() {
  return (
    <DropdownMenu
      width="200px"
      position="bottom-end"
      contentGap={1}
    >
      <DropdownMenu.Trigger>
        {(attributes) => <Button attributes={attributes}>User Menu</Button>}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="custom-menu">
        <DropdownMenu.Item
          icon={IconUser}
          size="large"
          selected
          onClick={() => console.log('Profile')}
        >
          Profile
        </DropdownMenu.Item>
        <DropdownMenu.Item
          icon={IconSettings}
          highlighted
          onClick={() => console.log('Settings')}
        >
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item
          color="critical"
          disabled
          attributes={{ 'data-testid': 'logout-item' }}
        >
          Logout (Disabled)
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
```

## Related Components

- **Popover**: The underlying component that DropdownMenu is built upon, providing positioning and overlay functionality
- **MenuItem**: Individual menu item component used within DropdownMenu.Item
- **Button**: Commonly used as a trigger element within DropdownMenu.Trigger
- **Icon**: Used to enhance menu items with visual icons
- **Flyout**: Core utility component that manages focus trapping and keyboard navigation
- **Actionable**: Base interactive component that powers MenuItem functionality

The DropdownMenu component works seamlessly with these components to create comprehensive menu systems with proper accessibility, keyboard navigation, and visual consistency within the design system.