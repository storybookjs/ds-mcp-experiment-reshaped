# Badge

**Brief Description**: A flexible visual indicator component used to display status, count, or contextual information with support for colors, sizes, icons, and interactive features.

**Keywords**: Status Indicator, Count Display, Notification Badge, Visual Label, Color Variants, Interactive Element, Dismissible Badge, Container Position

**Usage Description**: The Badge component is a versatile UI element designed to display small pieces of contextual information such as status indicators, notification counts, or labels. It's commonly used to draw attention to specific content or to provide quick visual feedback about the state of an element.

Use badges when you need to highlight important information, show notification counts, display status indicators, or create interactive labels. The component supports multiple visual variants (default, faded, outline), various colors for semantic meaning (primary, positive, critical, warning, neutral), and can include icons for enhanced visual communication.

## Props Documentation

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | No | - | Content to display inside the badge. Can be text, numbers, or other React elements. When not provided, renders as an empty badge (dot). |
| `color` | `"neutral" \| "critical" \| "warning" \| "positive" \| "primary"` | No | `"neutral"` | Sets the semantic color theme of the badge affecting background and text colors. |
| `size` | `"small" \| "medium" \| "large"` | No | `"medium"` | Controls the overall size of the badge including padding, font size, and icon dimensions. |
| `variant` | `"faded" \| "outline"` | No | - | Visual style variant. Only available when badge has children. Default renders with solid background. |
| `icon` | `React.ReactElement \| React.ComponentType` | No | - | Icon to display at the start of the badge content. Only available when badge has children. |
| `rounded` | `boolean` | No | `false` | When true, applies circular border radius. Particularly useful for count badges. |
| `hidden` | `boolean` | No | `false` | Controls visibility with smooth scale animation. Useful for conditional display. |
| `onDismiss` | `() => void` | No | - | When provided, adds a dismiss button with close icon. Makes the badge dismissible. |

## Code Examples

### Basic Usage
```tsx
import { Badge } from 'reshaped';

// Simple text badge
<Badge>New</Badge>

// Count badge with color
<Badge color="critical" rounded>5</Badge>

// Empty badge (dot indicator)
<Badge color="positive" rounded />
```

### Badge Container with Positioning
```tsx
import { Badge } from 'reshaped';
import { Avatar } from 'reshaped';

// Basic container usage
<Badge.Container>
  <Badge color="critical" rounded>5</Badge>
  <Avatar initials="JD" />
</Badge.Container>
```

## Related Components

- **Avatar**: Commonly used with Badge.Container for profile notifications and status indicators
- **Icon**: Used within badges via the `icon` and `endIcon` props to enhance visual communication
- **Text**: Used internally for badge content rendering with appropriate typography
- **Button**: Semantically related for interactive elements, though Badge serves as a lighter-weight indicator