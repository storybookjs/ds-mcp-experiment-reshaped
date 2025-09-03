# Alert

**Brief Description**: A versatile notification component for displaying important information, warnings, status updates, or calls to action in both inline and block layouts.

**Keywords**: Notification, Status Message, Banner, Warning, Information Display, Call to Action, Feedback, Message

**Usage Description**: The Alert component is used to communicate important information to users, ranging from general notifications to critical warnings. It supports multiple color themes to convey different types of messages - neutral for general information, critical for errors, warning for cautions, positive for success states, and primary for highlighting important actions.

The component excels in scenarios where you need to draw user attention to specific information, whether it's a system status update, form validation feedback, or promotional content. It can function as both a standalone block element for prominent messaging or as an inline element that flows naturally within content.

## Props Documentation

**icon** (optional)
- Type: `IconProps["svg"]` (React.ReactElement | React.ComponentType)
- Default: undefined
- Description: Icon component to display alongside the alert content. Accepts any React element or component type that can be rendered as an icon.

**title** (optional)
- Type: `React.ReactNode`
- Default: undefined
- Description: Primary heading text for the alert. Rendered with medium font weight to provide visual hierarchy.

**children** (optional)
- Type: `React.ReactNode`
- Default: undefined
- Description: Main content of the alert. Can contain any React nodes including text, links, or other components.

**actionsSlot** (optional)
- Type: `React.ReactNode`
- Default: undefined
- Description: Container for action elements like links or buttons. Positioned below content in block layout or to the right in inline layout.

**color** (optional)
- Type: `"neutral" | "critical" | "warning" | "positive" | "primary"`
- Default: "neutral"
- Description: Visual theme that determines background color, border color, and icon color. Maps to semantic meaning (critical for errors, positive for success, etc.).

**inline** (optional)
- Type: `boolean`
- Default: false
- Description: Controls layout mode. When true, renders as inline content with horizontal action placement. When false, renders as block with vertical stacking.

## Code Examples

#### Basic Alert
```tsx
import { Alert } from 'reshaped';

// Simple informational alert
<Alert title="System Update" color="neutral">
  The system will undergo maintenance tonight from 2:00 AM to 4:00 AM EST.
</Alert>
```

#### Alert with Icon and Actions
```tsx
import { Alert, Link } from 'reshaped';
import IconWarning from 'reshaped/icons/Warning';

// Warning alert with icon and actions
<Alert 
  title="Storage Space Low" 
  color="warning"
  icon={IconWarning}
  actionsSlot={
    <>
      <Link variant="plain" color="warning" onClick={handleViewStorage}>
        View Storage
      </Link>
      <Link variant="plain" color="warning" onClick={handleDismiss}>
        Dismiss
      </Link>
    </>
  }
>
  You're running low on storage space. Consider removing unused files.
</Alert>
```

## Related Components

**Icon** - Used internally to render the optional icon prop. The Alert component automatically handles icon sizing and color coordination based on the alert's color theme.

**View** - Core layout component used internally for structuring the alert's content, managing gaps, directions, and responsive behavior.

**Text** - Used for rendering title and content text with appropriate typography variants (body-3) and font weights.

**Link** - Commonly used within the actionsSlot for providing actionable elements. Links automatically inherit appropriate colors when used in alerts.