# MenuItem

## Component Name
MenuItem

## Brief Description
A flexible menu item component that provides actionable items for navigation menus, dropdown lists, and selection interfaces.

## Keywords
Menu Item, Navigation, Selection, Actionable, Dropdown, Icon, Interactive List, User Interface

## Usage Description

The MenuItem component is designed to create interactive menu items within navigation systems, dropdown menus, context menus, and selection lists. It combines the functionality of an actionable element with visual feedback for different states including selection, highlighting, and disabled states.

Use MenuItem when building navigation menus, dropdown selectors, context menus, or any list of selectable/actionable options. The component supports both button and link behaviors through the underlying Actionable component, making it suitable for both navigation and selection scenarios. It provides consistent styling and interaction patterns across different menu contexts.

The component is particularly useful in complex interfaces where you need standardized menu items with proper accessibility support, state management, and flexible content arrangement including icons, text, and custom content slots.

## Props Documentation

### Core Props

#### `children` (required)
- **Type**: `React.ReactNode`
- **Required**: Yes
- **Description**: The main content of the menu item, typically text or other React elements
- **Example**: `"Settings"`, `<span>Profile Settings</span>`

#### `color`
- **Type**: `"neutral" | "critical" | "primary"`
- **Required**: No
- **Default**: `"primary"`
- **Description**: Sets the color theme of the menu item, affecting text and background colors in different states
- **Example**: `"critical"` for destructive actions, `"neutral"` for secondary actions

#### `size`
- **Type**: `Responsive<"small" | "medium" | "large">`
- **Required**: No
- **Default**: `"medium"`
- **Description**: Controls the size of the menu item including padding, typography, and icon sizing. Supports responsive values.
- **Example**: `"large"`, `{ s: "small", m: "medium" }`

#### `selected`
- **Type**: `boolean`
- **Required**: No
- **Description**: Indicates if the menu item is currently selected, applying selected styling and preventing hover effects
- **Example**: `true` for the currently active navigation item

#### `highlighted`
- **Type**: `boolean`
- **Required**: No
- **Description**: Applies highlighted styling to the menu item, typically used for keyboard navigation or temporary emphasis
- **Example**: `true` when navigating with arrow keys

#### `disabled`
- **Type**: `boolean`
- **Required**: No
- **Description**: Disables the menu item, preventing interaction and applying disabled styling
- **Example**: `true` for unavailable features

#### `roundedCorners`
- **Type**: `Responsive<boolean>`
- **Required**: No
- **Description**: Controls whether the menu item has rounded corners. Supports responsive values.
- **Example**: `true`, `{ s: false, m: true }`

### Icon and Content Props

#### `icon`
- **Type**: `React.ReactElement | React.ComponentType`
- **Required**: No
- **Description**: An icon to display at the start of the menu item. Should be an SVG element or icon component.
- **Example**: `<ChevronIcon />`, `iconSvg`

#### `startSlot`
- **Type**: `React.ReactNode`
- **Required**: No
- **Description**: Custom content to display at the start of the menu item when not using the icon prop
- **Example**: `<Avatar size="small" />`, `<Badge>New</Badge>`

#### `endSlot`
- **Type**: `React.ReactNode`
- **Required**: No
- **Description**: Content to display at the end of the menu item, such as keyboard shortcuts or secondary actions
- **Example**: `<Text size="small">⌘K</Text>`, `<Icon svg={externalLinkIcon} />`

### Action Props (inherited from Actionable)

#### `onClick`
- **Type**: `(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void`
- **Required**: No
- **Description**: Handler function called when the menu item is clicked or activated via keyboard
- **Example**: `() => navigate('/settings')`

#### `href`
- **Type**: `string`
- **Required**: No
- **Description**: URL for navigation. When provided, renders the menu item as a link element
- **Example**: `"/profile"`, `"https://example.com"`

#### `as`
- **Type**: `keyof React.JSX.IntrinsicElements`
- **Required**: No
- **Description**: The HTML element type to render as. Overrides the default button/anchor behavior.
- **Example**: `"div"`, `"span"`

#### `stopPropagation`
- **Type**: `boolean`
- **Required**: No
- **Description**: Prevents event bubbling when the menu item is clicked
- **Example**: `true` to prevent menu closing on item click

### Styling Props

#### `className`
- **Type**: `string | string[] | (string | null | undefined | false)[]`
- **Required**: No
- **Description**: Additional CSS class names to apply to the menu item
- **Example**: `"custom-menu-item"`, `["item", "highlighted"]`

#### `attributes`
- **Type**: `React.HTMLAttributes & Record<string, any>`
- **Required**: No
- **Description**: Additional HTML attributes to apply to the menu item element
- **Example**: `{ "data-testid": "menu-item", "aria-label": "Settings menu" }`

## Code Examples

### Basic Usage
```jsx
import { MenuItem } from 'reshaped';
import { SettingsIcon } from './icons';

function BasicMenuItem() {
  return (
    <MenuItem
      icon={<SettingsIcon />}
      onClick={() => console.log('Settings clicked')}
    >
      Settings
    </MenuItem>
  );
}
```

### Menu with Different States
```jsx
import { MenuItem } from 'reshaped';
import { HomeIcon, ProfileIcon, SettingsIcon } from './icons';

function NavigationMenu() {
  const [selectedItem, setSelectedItem] = useState('home');

  return (
    <div>
      <MenuItem
        icon={<HomeIcon />}
        selected={selectedItem === 'home'}
        onClick={() => setSelectedItem('home')}
      >
        Home
      </MenuItem>
      <MenuItem
        icon={<ProfileIcon />}
        selected={selectedItem === 'profile'}
        onClick={() => setSelectedItem('profile')}
      >
        Profile
      </MenuItem>
      <MenuItem
        icon={<SettingsIcon />}
        disabled
      >
        Settings (Coming Soon)
      </MenuItem>
    </div>
  );
}
```

### Menu with Custom Content and Sizing
```jsx
import { MenuItem, Text, Badge } from 'reshaped';
import { NotificationIcon, KeyboardIcon } from './icons';

function AdvancedMenu() {
  return (
    <div>
      <MenuItem
        size="large"
        icon={<NotificationIcon />}
        endSlot={<Badge color="critical">3</Badge>}
        color="primary"
      >
        Notifications
      </MenuItem>
      <MenuItem
        size="medium"
        icon={<KeyboardIcon />}
        endSlot={<Text size="small" color="neutral-faded">⌘K</Text>}
        onClick={() => openKeyboardShortcuts()}
      >
        Keyboard Shortcuts
      </MenuItem>
    </div>
  );
}
```

### Responsive MenuItem with Rounded Corners
```jsx
import { MenuItem } from 'reshaped';
import { DocumentIcon } from './icons';

function ResponsiveMenuItem() {
  return (
    <MenuItem
      icon={<DocumentIcon />}
      size={{ s: 'small', m: 'medium', l: 'large' }}
      roundedCorners={{ s: false, m: true }}
      href="/documents"
    >
      Documents
    </MenuItem>
  );
}
```

### MenuItem with Aligner for Layout
```jsx
import { MenuItem } from 'reshaped';
import { EditIcon, DeleteIcon } from './icons';

function AlignedMenuItems() {
  return (
    <MenuItem.Aligner>
      <>
        <MenuItem
          icon={<EditIcon />}
          color="primary"
          onClick={() => editItem()}
        >
          Edit
        </MenuItem>
        <MenuItem
          icon={<DeleteIcon />}
          color="critical"
          onClick={() => deleteItem()}
        >
          Delete
        </MenuItem>
      </>
    </MenuItem.Aligner>
  );
}
```

## Accessibility Considerations

- **Keyboard Navigation**: MenuItem supports keyboard activation via Enter and Space keys when focused
- **Focus Management**: Provides visible focus indicators and proper focus ring styling
- **Screen Reader Support**: Properly announces the menu item content and state to assistive technologies
- **ARIA Attributes**: Can accept custom ARIA attributes via the `attributes` prop for enhanced accessibility
- **State Communication**: Selected and disabled states are properly communicated to screen readers
- **Semantic HTML**: Renders as appropriate semantic elements (button or link) based on props

## Related Components

- **Actionable**: The underlying component that provides interactive behavior and accessibility features
- **Icon**: Used within MenuItem to display icons with consistent sizing and colors
- **View**: Used internally for layout and spacing of menu item content
- **MenuItem.Aligner**: A sub-component for aligning multiple menu items with consistent spacing
- **Menu**: Often used as a container for multiple MenuItem components
- **Dropdown**: Frequently contains MenuItem components as selectable options
- **Navigation**: Uses MenuItem for navigation links and sections