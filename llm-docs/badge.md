# Badge

## Component Name
Badge

## Brief Description
A compact, versatile component for displaying status, counts, and labels with support for colors, sizes, icons, and interactive functionality.

## Keywords
Status Indicator, Label, Counter, Notification, Tag, Chip, Icon Badge, Dismissible

## Usage Description

The Badge component is designed to display small pieces of information such as status indicators, notification counts, labels, or tags. It serves as a visual cue to highlight important information or provide additional context to other UI elements.

Badge is commonly used in notification systems (showing unread message counts), status displays (indicating active/inactive states), content categorization (tags and labels), and as overlay indicators on avatars, icons, or other components. The component supports both standalone usage and positioned usage through the Badge.Container subcomponent.

The Badge component can function as both a static display element and an interactive component when provided with click handlers or href props. It supports dismissible functionality for temporary notifications and can be rendered in empty state for simple dot indicators.

## Props Documentation

### Badge Props

- **children** (`React.ReactNode`, optional): The content to display inside the badge. Can be text, numbers, or other React elements.

- **color** (`"neutral" | "critical" | "warning" | "positive" | "primary"`, optional): Sets the semantic color theme of the badge. Defaults to "neutral".
  - `"neutral"`: Gray/default appearance
  - `"critical"`: Red color for errors or urgent states
  - `"warning"`: Yellow/orange for warnings
  - `"positive"`: Green for success states
  - `"primary"`: Brand color for primary actions

- **size** (`"small" | "medium" | "large"`, optional): Controls the badge size. Defaults to "medium".
  - `"small"`: Compact size for dense layouts
  - `"medium"`: Standard size for general use
  - `"large"`: Larger size for emphasis

- **variant** (`"faded" | "outline"`, optional): Visual style variant. Only available when children are provided.
  - `"faded"`: Lighter background with faded colors
  - `"outline"`: Transparent background with colored border

- **icon** (`IconProps["svg"]`, optional): Icon to display at the start of the badge content. Only available when children are provided.

- **endIcon** (`IconProps["svg"]`, optional): Icon to display at the end of the badge content.

- **rounded** (`boolean`, optional): When true, applies fully rounded corners (circular appearance). Defaults to false.

- **hidden** (`boolean`, optional): When true, hides the badge with scale and opacity animations. Defaults to false.

- **href** (`string`, optional): Makes the badge a clickable link. Inherited from Actionable component.

- **onClick** (`(e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void`, optional): Click handler function. Makes the badge interactive.

- **onDismiss** (`() => void`, required when dismissible): Function called when the dismiss button is clicked. When provided, adds a close button to the badge.

- **dismissAriaLabel** (`string`, required when onDismiss is provided): Accessible label for the dismiss button.

- **className** (`string`, optional): Additional CSS classes to apply to the badge.

- **attributes** (`G.Attributes<"div">`, optional): Additional HTML attributes to pass to the underlying element.

### Badge.Container Props

- **children** (`React.ReactNode`, required): The content to position the badge relative to (typically Avatar, Icon, or other components).

- **position** (`"top-end" | "bottom-end"`, optional): Position of the badge relative to the children. Defaults to "top-end".

- **overlap** (`boolean`, optional): When true, positions the badge to overlap the children element. Useful for circular avatars or icons.

- **className** (`string`, optional): Additional CSS classes to apply to the container.

- **attributes** (`G.Attributes<"div">`, optional): Additional HTML attributes for the container element.

## Code Examples

### Basic Usage
```tsx
import { Badge } from 'reshaped';

// Simple text badge
<Badge>New</Badge>

// Number badge with color
<Badge color="critical">5</Badge>

// Large size with primary color
<Badge size="large" color="primary">Beta</Badge>
```

### Variants and Colors
```tsx
// Different variants
<Badge variant="faded" color="positive">Success</Badge>
<Badge variant="outline" color="warning">Warning</Badge>

// All available colors
<Badge color="neutral">Neutral</Badge>
<Badge color="primary">Primary</Badge>
<Badge color="positive">Success</Badge>
<Badge color="critical">Error</Badge>
<Badge color="warning">Warning</Badge>
```

### With Icons
```tsx
import { Badge } from 'reshaped';
import CheckmarkIcon from './icons/Checkmark';
import ChevronRightIcon from './icons/ChevronRight';

// Badge with start icon
<Badge icon={CheckmarkIcon} color="positive">Verified</Badge>

// Badge with both start and end icons
<Badge 
  icon={CheckmarkIcon} 
  endIcon={ChevronRightIcon}
  color="primary"
>
  Active
</Badge>

// Icon-only badge
<Badge icon={CheckmarkIcon} color="positive" />
```

### Interactive Badges
```tsx
// Clickable badge
<Badge 
  onClick={() => console.log('Badge clicked')}
  color="primary"
>
  Clickable
</Badge>

// Link badge
<Badge href="/profile" color="neutral">Profile</Badge>

// Dismissible badge
<Badge
  onDismiss={() => console.log('Dismissed')}
  dismissAriaLabel="Remove tag"
  color="primary"
>
  Removable Tag
</Badge>
```

### Positioned Badges with Container
```tsx
import { Badge, Avatar } from 'reshaped';

// Badge positioned on avatar
<Badge.Container>
  <Badge color="critical" size="small">3</Badge>
  <Avatar initials="JD" />
</Badge.Container>

// Bottom positioned with overlap
<Badge.Container position="bottom-end" overlap>
  <Badge color="positive" rounded />
  <Avatar initials="JD" />
</Badge.Container>

// Hidden state animation
<Badge.Container>
  <Badge color="primary" hidden={isHidden}>5</Badge>
  <Avatar initials="JD" />
</Badge.Container>
```

### Empty and Rounded Badges
```tsx
// Empty badge (dot indicator)
<Badge color="critical" />

// Rounded badges
<Badge rounded color="primary">1</Badge>
<Badge rounded size="small" color="critical">99+</Badge>

// Empty rounded badge (circular dot)
<Badge rounded color="positive" />
```

## Accessibility Considerations

- The Badge component uses semantic HTML and proper ARIA attributes for screen readers
- When using the dismiss functionality, always provide a meaningful `dismissAriaLabel`
- The `hidden` prop properly handles screen reader announcements with `aria-hidden`
- Interactive badges (with onClick or href) are keyboard accessible
- Color alone should not be the only way to convey information - consider adding icons or text
- Empty badges should still be meaningful in context (e.g., positioned near descriptive content)

## Related Components

- **Avatar**: Commonly used with Badge.Container for profile indicators
- **Icon**: Can be used as badge content or positioned with badges
- **Button**: Shares interactive behavior patterns with clickable badges
- **Text**: Used internally for badge text rendering
- **Actionable**: Base component that provides interactive functionality
- **View**: Layout component often used to arrange multiple badges

The Badge component integrates seamlessly with the reshaped design system's color tokens, spacing units, and animation patterns, ensuring consistent visual behavior across applications.