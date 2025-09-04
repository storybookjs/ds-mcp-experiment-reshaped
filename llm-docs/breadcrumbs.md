# Breadcrumbs

A navigation component that displays the current page's location within a hierarchical site structure, allowing users to understand their position and navigate to parent pages.

## Keywords

Navigation, Location, Hierarchy, Path, Trail, Crumbs, Parent Pages

## Usage Description

The Breadcrumbs component provides users with a clear navigation path showing their current location within the site hierarchy. It serves as both a wayfinding tool and a navigational aid, helping users understand where they are and how to get back to parent pages.

Breadcrumbs are particularly useful in deep hierarchical structures like e-commerce sites, documentation sites, or complex applications with nested sections. They should be used when the site has a clear hierarchical structure and users would benefit from understanding their position within that hierarchy. The component supports collapsing of intermediate items when there are many levels, preventing the breadcrumb trail from becoming overwhelming.

The component is built with accessibility in mind, using proper semantic HTML (`nav` and `ol` elements) and providing appropriate ARIA labels. Each breadcrumb item can be interactive (clickable links) or static text, depending on whether navigation actions are provided.

## Props Documentation

### Main Component Props

| Prop                  | Type                                         | Required | Default           | Description                                                                                                                                      |
| --------------------- | -------------------------------------------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`            | `React.ReactElement \| React.ReactElement[]` | Yes      | -                 | The breadcrumb items to display. Should be `Breadcrumbs.Item` components                                                                         |
| `separator`           | `React.ReactNode`                            | No       | ChevronRight icon | Custom separator to display between breadcrumb items. Can be text, icons, or other React elements                                                |
| `color`               | `"neutral" \| "primary"`                     | No       | `"neutral"`       | Color scheme for the breadcrumbs. Affects the text color of clickable items                                                                      |
| `defaultVisibleItems` | `number`                                     | No       | -                 | Number of items to show before collapsing intermediate items. Must be >= 2 to take effect. Shows first item, collapse button, and last N-1 items |
| `expandAriaLabel`     | `string`                                     | No       | -                 | Accessible label for the expand button when breadcrumbs are collapsed. Required when using `defaultVisibleItems` without `disableExpand`         |
| `disableExpand`       | `boolean`                                    | No       | `false`           | When true, prevents expanding collapsed items and shows dots instead of an expand button                                                         |
| `ariaLabel`           | `string`                                     | No       | -                 | Accessible label for the navigation element. Helps screen readers understand the purpose of the breadcrumbs                                      |
| `className`           | `string \| string[]`                         | No       | -                 | Additional CSS classes to apply to the root navigation element                                                                                   |
| `attributes`          | `React.HTMLAttributes<HTMLElement>`          | No       | -                 | Additional HTML attributes to apply to the nav element, including data attributes                                                                |

### Breadcrumbs.Item Props

| Prop       | Type                                | Required | Default | Description                                                                          |
| ---------- | ----------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------ |
| `children` | `React.ReactNode`                   | Yes      | -       | The content of the breadcrumb item. Can be text, components, or other React elements |
| `href`     | `string`                            | No       | -       | URL for navigation when the item is clicked. Makes the item a link                   |
| `onClick`  | `(event: React.MouseEvent) => void` | No       | -       | Click handler for the item. Makes the item interactive                               |
| `icon`     | `React.ComponentType`               | No       | -       | Icon to display before the item content                                              |
| `disabled` | `boolean`                           | No       | `false` | When true, disables interaction and changes visual appearance                        |

## Code Examples

### Basic Usage

```tsx
import { Breadcrumbs } from "reshaped";

function BasicBreadcrumbs() {
  return (
    <Breadcrumbs ariaLabel="Page navigation">
      <Breadcrumbs.Item href="/home">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products">Products</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/products/electronics">
        Electronics
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Smartphones</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
```

This example shows the most common breadcrumb pattern with navigatable parent items and a non-clickable current page item.

### Interactive Breadcrumbs with Click Handlers

```tsx
import { Breadcrumbs } from "reshaped";

function InteractiveBreadcrumbs() {
  const handleNavigation = (path: string) => {
    console.log("Navigating to:", path);
    // Handle navigation logic
  };

  return (
    <Breadcrumbs color="primary" ariaLabel="Site navigation">
      <Breadcrumbs.Item onClick={() => handleNavigation("/dashboard")}>
        Dashboard
      </Breadcrumbs.Item>
      <Breadcrumbs.Item onClick={() => handleNavigation("/settings")}>
        Settings
      </Breadcrumbs.Item>
      <Breadcrumbs.Item onClick={() => handleNavigation("/settings/profile")}>
        Profile
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Edit Profile</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
```

This example demonstrates using click handlers instead of href attributes, useful for single-page applications with programmatic navigation.

### Collapsed Breadcrumbs

```tsx
import { Breadcrumbs } from "reshaped";

function CollapsedBreadcrumbs() {
  return (
    <Breadcrumbs
      defaultVisibleItems={3}
      expandAriaLabel="Show all navigation items"
      ariaLabel="Condensed navigation"
    >
      <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category1">Category 1</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category1/subcategory">
        Subcategory
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category1/subcategory/item">
        Item
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/category1/subcategory/item/detail">
        Detail
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Current Page</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
```

This example shows how to handle long breadcrumb trails by collapsing intermediate items. Users can expand to see all items by clicking the expand button.

### Custom Separators and Icons

```tsx
import { Breadcrumbs } from "reshaped";
import { Icon } from "reshaped";
import HomeIcon from "./HomeIcon";
import FolderIcon from "./FolderIcon";

function CustomBreadcrumbs() {
  return (
    <Breadcrumbs separator="/" ariaLabel="File system navigation">
      <Breadcrumbs.Item icon={HomeIcon} href="/files">
        Files
      </Breadcrumbs.Item>
      <Breadcrumbs.Item icon={FolderIcon} href="/files/documents">
        Documents
      </Breadcrumbs.Item>
      <Breadcrumbs.Item icon={FolderIcon} href="/files/documents/projects">
        Projects
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>Current File.pdf</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
```

This example demonstrates customizing the separator character and adding icons to breadcrumb items, useful for file system or folder-like navigation.

### Advanced Composition with Custom Content

```tsx
import { Breadcrumbs, Badge, Text } from "reshaped";

function AdvancedBreadcrumbs() {
  return (
    <Breadcrumbs ariaLabel="Advanced navigation example">
      <Breadcrumbs.Item onClick={() => console.log("Home clicked")}>
        <Badge variant="outline">Home</Badge>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="/admin">
        <Text weight="medium">Admin Panel</Text>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item disabled>
        <Badge color="warning">Maintenance Mode</Badge>
      </Breadcrumbs.Item>
      <Breadcrumbs.Item>User Management</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
```

This example shows how breadcrumb items can contain complex content like badges, styled text, and disabled states, useful for admin interfaces or status-aware navigation.

## Related Components

- **Link** - The underlying component used for interactive breadcrumb items. Breadcrumbs.Item inherits Link's functionality for navigation
- **Text** - Used for displaying non-interactive breadcrumb items and separator text
- **Icon** - Used for the default chevron separator and can be used in custom separators or item icons
- **Button** - Used internally for the expand/collapse functionality when breadcrumbs are collapsed
- **View** - The layout component used internally for arranging breadcrumb items and separators
- **Badge** - Can be composed within breadcrumb items for status indicators or categorization
- **Navigation** - Other navigation components that work alongside breadcrumbs for complete navigation systems
