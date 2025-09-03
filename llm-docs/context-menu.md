# ContextMenu

## Component Name
ContextMenu

## Brief Description
A context menu component that displays a dropdown menu when users right-click on an element.

## Keywords
Right-click menu, Context menu, Dropdown, Menu, Actions, Flyout, Contextual actions, User interaction

## Usage Description

The ContextMenu component provides a standard right-click context menu functionality that displays a dropdown menu at the cursor position when users right-click on its child content. It's built on top of the DropdownMenu component and automatically handles the positioning, scroll locking, and event management for context menu interactions.

Use ContextMenu when you need to provide contextual actions or options that are relevant to a specific piece of content or interface element. This is particularly useful for data tables, file browsers, text editors, or any interface where users might expect right-click functionality. The component follows standard OS conventions for context menus, making it intuitive for users.

The component automatically prevents the default browser context menu behavior and shows the custom menu at the exact cursor position. It also handles scroll locking to prevent background scrolling while the menu is open, and provides proper cleanup when the menu is closed.

## Props Documentation

### ContextMenu Props

The ContextMenu component accepts all DropdownMenu props except for `active` and `defaultActive`, which are managed internally:

#### `children` (ReactNode)
- **Required**: Yes
- **Description**: The content that will trigger the context menu on right-click. This serves as the target area for the right-click interaction.
- **Example**: `<View>Right-click me</View>`

#### `position` (Position)
- **Required**: No
- **Default**: `"end-top"`
- **Type**: `"top" | "bottom" | "start" | "end" | "start-top" | "start-bottom" | "end-top" | "end-bottom" | "top-start" | "top-end" | "bottom-start" | "bottom-end"`
- **Description**: Defines the preferred position of the context menu relative to the cursor position. The component will automatically adjust if there isn't enough space.

#### `onOpen` (Function)
- **Required**: No
- **Type**: `() => void`
- **Description**: Callback function triggered when the context menu opens (on right-click).

#### `onClose` (Function) 
- **Required**: No
- **Type**: `(args: { reason?: CloseReason }) => void`
- **Description**: Callback function triggered when the context menu closes. The reason parameter indicates how the menu was closed (e.g., "escape-key", "outside-click", "item-selection").

#### `forcePosition` (Boolean)
- **Required**: No
- **Type**: `boolean`
- **Description**: When true, prevents automatic position adjustment and forces the menu to appear at the specified position.

#### `fallbackPositions` (Array | false)
- **Required**: No
- **Type**: `Position[] | false`
- **Description**: Array of alternative positions to try if the primary position doesn't fit. Set to false to disable fallback positioning.

#### `width` (String)
- **Required**: No
- **Type**: `"trigger" | string`
- **Description**: Controls the width of the context menu. Use "trigger" to match the trigger width, or provide a specific CSS width value.

#### `contentGap` (Number)
- **Required**: No
- **Type**: `number`
- **Description**: Space in pixels between the cursor position and the context menu content.

#### `contentShift` (Number)
- **Required**: No
- **Type**: `number`
- **Description**: Horizontal offset in pixels to shift the menu position.

#### `trapFocusMode` (TrapMode | false)
- **Required**: No
- **Type**: `"action-menu" | "selection-menu" | false`
- **Description**: Controls focus trapping behavior within the menu. Use "action-menu" for menus with actions, "selection-menu" for selection lists, or false to disable focus trapping.

#### `disableHideAnimation` (Boolean)
- **Required**: No
- **Type**: `boolean`
- **Description**: When true, disables the closing animation for faster menu dismissal.

#### `disableCloseOnOutsideClick` (Boolean)
- **Required**: No
- **Type**: `boolean`
- **Description**: When true, prevents the menu from closing when clicking outside of it.

#### `instanceRef` (Ref)
- **Required**: No
- **Type**: `React.Ref<Instance>`
- **Description**: Reference to the context menu instance, providing access to imperative methods like open() and close().

#### `containerRef` (Ref)
- **Required**: No
- **Type**: `React.RefObject<HTMLElement>`
- **Description**: Reference to the container element that should contain the context menu positioning calculations.

### Sub-Components

#### `ContextMenu.Content`
Container for all context menu items. Equivalent to DropdownMenu.Content.

**Props:**
- `children` (ReactNode): Menu items and sections
- `className` (string): Additional CSS classes
- `attributes` (object): HTML attributes for the content container

#### `ContextMenu.Item`
Individual menu item that can be clicked or navigated to.

**Props:**
- `children` (ReactNode, required): Item content/label
- `color` ("neutral" | "critical" | "primary"): Visual color theme
- `icon` (SVG component): Leading icon
- `startSlot` (ReactNode): Content before the main label
- `endSlot` (ReactNode): Content after the main label  
- `disabled` (boolean): Whether the item is disabled
- `highlighted` (boolean): Whether the item is visually highlighted
- `selected` (boolean): Whether the item appears selected
- `onClick` (function): Click handler
- `href` (string): URL for link items
- `as` (string): HTML element or React component to render as

#### `ContextMenu.Section`
Groups related menu items with optional visual separation.

**Props:**
- `children` (ReactNode, required): Section content (typically ContextMenu.Item components)

#### `ContextMenu.SubMenu`
Container for nested submenu content.

**Props:**
- `children` (ReactNode, required): Submenu items

#### `ContextMenu.SubTrigger` 
Trigger item that opens a submenu on hover or click.

**Props:**
- Similar to ContextMenu.Item but without `endSlot` (reserved for submenu indicator)

## Code Examples

### Basic Context Menu
```tsx
import { ContextMenu, View } from 'reshaped';

function BasicContextMenu() {
  return (
    <ContextMenu>
      <View 
        height="200px" 
        backgroundColor="neutral-faded" 
        borderRadius="medium"
        padding={4}
      >
        Right-click anywhere in this area
      </View>
      
      <ContextMenu.Content>
        <ContextMenu.Item onClick={() => console.log('Copy')}>
          Copy
        </ContextMenu.Item>
        <ContextMenu.Item onClick={() => console.log('Paste')}>
          Paste
        </ContextMenu.Item>
        <ContextMenu.Item 
          color="critical" 
          onClick={() => console.log('Delete')}
        >
          Delete
        </ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
}
```
This example demonstrates a basic context menu with simple action items, including styling one item as critical (typically red).

### Context Menu with Icons and Sections
```tsx
import { ContextMenu, View, Icon } from 'reshaped';
import { 
  CopyIcon, 
  PasteIcon, 
  EditIcon, 
  TrashIcon,
  ShareIcon 
} from 'your-icon-library';

function RichContextMenu() {
  return (
    <ContextMenu 
      position="bottom-start"
      onOpen={() => console.log('Context menu opened')}
      onClose={(args) => console.log('Menu closed:', args.reason)}
    >
      <View padding={4} backgroundColor="neutral-faded">
        Document Content
      </View>
      
      <ContextMenu.Content>
        <ContextMenu.Section>
          <ContextMenu.Item icon={EditIcon}>
            Edit
          </ContextMenu.Item>
          <ContextMenu.Item icon={CopyIcon}>
            Copy
          </ContextMenu.Item>
          <ContextMenu.Item icon={PasteIcon}>
            Paste
          </ContextMenu.Item>
        </ContextMenu.Section>
        
        <ContextMenu.Section>
          <ContextMenu.Item icon={ShareIcon}>
            Share
          </ContextMenu.Item>
        </ContextMenu.Section>
        
        <ContextMenu.Section>
          <ContextMenu.Item icon={TrashIcon} color="critical">
            Delete
          </ContextMenu.Item>
        </ContextMenu.Section>
      </ContextMenu.Content>
    </ContextMenu>
  );
}
```
This example shows a more complex context menu with icons, sections for grouping related actions, and custom event handlers.

### Context Menu with Submenus
```tsx
import { ContextMenu, View } from 'reshaped';

function ContextMenuWithSubmenus() {
  return (
    <ContextMenu>
      <View padding={4} backgroundColor="neutral-faded">
        File Item
      </View>
      
      <ContextMenu.Content>
        <ContextMenu.Item>Open</ContextMenu.Item>
        
        <ContextMenu.SubMenu>
          <ContextMenu.SubTrigger>Open with...</ContextMenu.SubTrigger>
          <ContextMenu.Content>
            <ContextMenu.Item>Text Editor</ContextMenu.Item>
            <ContextMenu.Item>Image Viewer</ContextMenu.Item>
            <ContextMenu.Item>Browser</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.SubMenu>
        
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Item color="critical">Delete</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
}
```
This example demonstrates nested submenus, useful for organizing many related actions without cluttering the main menu.

### Context Menu with Custom Positioning
```tsx
import { ContextMenu, View } from 'reshaped';

function CustomPositionedContextMenu() {
  const [menuInstance, setMenuInstance] = useState<any>(null);
  
  return (
    <ContextMenu
      instanceRef={setMenuInstance}
      position="top-end"
      fallbackPositions={["bottom-end", "top-start", "bottom-start"]}
      contentGap={8}
      width="200px"
      trapFocusMode="action-menu"
    >
      <View 
        padding={6} 
        backgroundColor="primary-faded"
        borderRadius="medium"
      >
        Right-click for custom positioned menu
      </View>
      
      <ContextMenu.Content>
        <ContextMenu.Item onClick={() => menuInstance?.close()}>
          Close Menu Programmatically
        </ContextMenu.Item>
        <ContextMenu.Item>Action 1</ContextMenu.Item>
        <ContextMenu.Item>Action 2</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu>
  );
}
```
This example shows advanced positioning options, programmatic menu control, and custom width settings.

### Context Menu in Data Table
```tsx
import { ContextMenu, View, Text } from 'reshaped';

function DataTableWithContextMenu() {
  const handleRowAction = (action: string, rowId: string) => {
    console.log(`${action} on row ${rowId}`);
  };
  
  return (
    <View>
      {['Row 1', 'Row 2', 'Row 3'].map((row, index) => (
        <ContextMenu key={index}>
          <View 
            padding={3}
            borderColor="neutral-faded"
            borderWidth={1}
            backgroundColor="neutral-faded"
            style={{ cursor: 'default' }}
          >
            <Text>{row}</Text>
          </View>
          
          <ContextMenu.Content>
            <ContextMenu.Item 
              onClick={() => handleRowAction('edit', row)}
            >
              Edit Row
            </ContextMenu.Item>
            <ContextMenu.Item 
              onClick={() => handleRowAction('duplicate', row)}
            >
              Duplicate Row
            </ContextMenu.Item>
            <ContextMenu.Item 
              color="critical"
              onClick={() => handleRowAction('delete', row)}
            >
              Delete Row
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu>
      ))}
    </View>
  );
}
```
This practical example shows how to implement context menus in a data table scenario, where each row has its own context menu with relevant actions.

## Accessibility Considerations

The ContextMenu component implements several accessibility features:

- **Keyboard Navigation**: Supports arrow key navigation within menu items and Escape key to close
- **Focus Management**: Automatically manages focus when opening/closing the menu and supports focus trapping
- **Screen Reader Support**: Provides appropriate ARIA attributes for menu structure and states
- **High Contrast Support**: Respects system high contrast settings and color preferences

## Related Components

- **DropdownMenu**: The underlying component that ContextMenu extends, providing the core menu functionality
- **Popover**: The base positioning component used by DropdownMenu for floating content
- **MenuItem**: Individual menu item component used within context menus
- **Flyout**: Low-level utility for creating floating UI elements
- **ActionBar**: Alternative for displaying actions in a horizontal layout
- **Button**: Can be used with DropdownMenu for traditional dropdown menus triggered by clicks rather than right-clicks