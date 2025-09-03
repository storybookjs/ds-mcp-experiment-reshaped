# Breadcrumbs Component

## Overview
The Breadcrumbs component is a navigation element that displays a hierarchical path of links, allowing users to understand their current location within a site or application structure and easily navigate back to previous levels.

## Key Features
- Hierarchical navigation display
- Automatic separator insertion
- Link and text item support
- Accessible keyboard navigation
- Responsive design
- Customizable separators

## Props Interface
```typescript
type BreadcrumbsProps = {
  children: React.ReactNode;
  separator?: React.ReactNode;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLElement>;
};
```

## Usage Examples

### Basic Breadcrumbs
```typescript
import { Breadcrumbs, Link } from 'reshaped';

function BasicBreadcrumbs() {
  return (
    <Breadcrumbs>
      <Link href="/home">Home</Link>
      <Link href="/products">Products</Link>
      <span>Current Page</span>
    </Breadcrumbs>
  );
}
```

### Custom Separator
```typescript
import { Breadcrumbs, Link, Icon } from 'reshaped';
import ChevronRightIcon from './ChevronRightIcon';

function CustomSeparatorBreadcrumbs() {
  return (
    <Breadcrumbs separator={<Icon svg={ChevronRightIcon} size={4} />}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/settings">Settings</Link>
      <span>Profile</span>
    </Breadcrumbs>
  );
}
```

## Accessibility
- Uses semantic `nav` element with `aria-label="Breadcrumbs"`
- Proper link semantics for navigation
- Screen reader friendly structure
- Keyboard navigation support

## Design Tokens
- Follows design system spacing and typography scales
- Uses theme-aware colors for links and separators
- Responsive typography sizing

## Related Components
- **Link**: Individual navigation links within breadcrumbs
- **Icon**: Custom separator icons
- **Text**: Text-only breadcrumb items

## Best Practices
- Keep breadcrumb paths concise and meaningful
- Use consistent link styling throughout
- Provide clear visual hierarchy
- Consider mobile responsiveness for long paths
- Don't link the current page item