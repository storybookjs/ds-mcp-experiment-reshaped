# Link Component

## Overview
The Link component is a versatile clickable link that provides navigation functionality with customizable styling, colors, and icon support for both internal and external navigation.

## Key Features
- Internal and external link support
- Multiple color variants
- Icon integration
- Underline control
- Focus and hover states
- Accessibility enhancements

## Props Interface
```typescript
type LinkProps = {
  children: React.ReactNode;
  href?: string;
  color?: 'primary' | 'neutral' | 'critical';
  underline?: 'auto' | 'always' | 'never';
  icon?: React.ReactElement;
  iconPosition?: 'start' | 'end';
  external?: boolean;
  className?: string;
  attributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
};
```

## Usage Examples

### Basic Link
```typescript
import { Link } from 'reshaped';

function BasicLink() {
  return (
    <Link href="/dashboard">
      Go to Dashboard
    </Link>
  );
}
```

### External Link with Icon
```typescript
import { Link, Icon } from 'reshaped';
import { ExternalLinkIcon } from './icons';

function ExternalLink() {
  return (
    <Link 
      href="https://example.com" 
      external
      icon={<Icon svg={ExternalLinkIcon} />}
      iconPosition="end"
    >
      Visit External Site
    </Link>
  );
}
```

### Custom Styled Link
```typescript
import { Link } from 'reshaped';

function StyledLink() {
  return (
    <Link 
      href="/settings"
      color="critical"
      underline="always"
    >
      Delete Account
    </Link>
  );
}
```

## Accessibility
- Proper focus indicators
- External link announcements
- Keyboard navigation support
- Screen reader friendly

## Related Components
- **Icon**: Link decorations
- **Button**: Alternative interactive elements