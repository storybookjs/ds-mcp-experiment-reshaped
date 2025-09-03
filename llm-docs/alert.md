# Alert Component

## Component Name
Alert

## Brief Description
A versatile notification component that displays contextual messages with optional icons, actions, and different color variants to communicate various states and information to users.

## Keywords
- Notification
- Message
- Status
- Banner
- Feedback
- Warning
- Error
- Success

## Usage Description

The Alert component is designed to display important information, notifications, or status messages to users in a visually prominent way. It serves as a communication tool that can convey different types of information through color-coded variants and optional icons.

Use the Alert component when you need to inform users about system status, validation results, important announcements, or any contextual information that requires their attention. The component supports both inline and block layouts, making it suitable for various UI contexts - from form validation messages to page-level notifications.

The Alert component automatically sets appropriate ARIA roles based on its color variant (role="alert" for critical messages, role="status" for others), ensuring proper accessibility for screen readers and assistive technologies.

## Props Documentation

### icon
- **Type:** `React.ReactElement | React.ComponentType` (optional)
- **Default:** `undefined`
- **Description:** An icon to display alongside the alert content. Accepts SVG elements or icon components. The icon color automatically matches the alert's color variant.

### title
- **Type:** `React.ReactNode` (optional)
- **Default:** `undefined`
- **Description:** The title or heading text for the alert. Rendered with medium font weight using body-3 text variant.

### children
- **Type:** `React.ReactNode` (optional)
- **Default:** `undefined`
- **Description:** The main content or message of the alert. Rendered using body-3 text variant.

### actionsSlot
- **Type:** `React.ReactNode` (optional)
- **Default:** `undefined`
- **Description:** Action elements like buttons or links to display within the alert. In inline mode, actions appear to the right; in block mode, they appear below the content.

### color
- **Type:** `"neutral" | "critical" | "warning" | "positive" | "primary"` (optional)
- **Default:** `"neutral"`
- **Description:** Determines the visual appearance and semantic meaning of the alert. Each color has its own background and border styling:
  - `neutral` - General information or status
  - `critical` - Errors, failures, or urgent issues (sets role="alert")
  - `warning` - Cautions or potential issues
  - `positive` - Success messages or confirmations
  - `primary` - Brand-related or highlighted information

### inline
- **Type:** `boolean` (optional)
- **Default:** `false`
- **Description:** When true, renders the alert in a horizontal layout with content and actions side-by-side. When false, uses a vertical stack layout.

### bleed
- **Type:** `number | ResponsiveOnly<number>` (optional)
- **Default:** `undefined`
- **Description:** Controls negative margin to extend the alert beyond its container. Accepts a number for all breakpoints or an object with viewport-specific values (s, m, l, xl).

### className
- **Type:** `string | string[] | ClassName[]` (optional)
- **Default:** `undefined`
- **Description:** Additional CSS class names to apply to the alert container.

### attributes
- **Type:** `React.HTMLAttributes<HTMLDivElement>` (optional)
- **Default:** `undefined`
- **Description:** Additional HTML attributes to apply to the alert container, including data attributes and event handlers.

## Code Examples

### Basic Alert
```tsx
import Alert from 'reshaped/Alert';

// Simple informational alert
<Alert title="System Status" color="neutral">
  All systems are operating normally.
</Alert>
```

### Alert with Icon and Actions
```tsx
import Alert from 'reshaped/Alert';
import Link from 'reshaped/Link';
import IconWarning from 'reshaped/icons/Warning';

// Warning alert with icon and action buttons
<Alert 
  color="warning"
  title="Storage Almost Full"
  icon={IconWarning}
  actionsSlot={
    <>
      <Link variant="plain" color="warning" onClick={handleUpgrade}>
        Upgrade Storage
      </Link>
      <Link variant="plain" color="warning" onClick={handleDismiss}>
        Dismiss
      </Link>
    </>
  }
>
  Your storage is 85% full. Consider upgrading your plan or cleaning up files.
</Alert>
```

### Inline Alert for Forms
```tsx
import Alert from 'reshaped/Alert';
import IconCheck from 'reshaped/icons/Check';

// Inline success message for form validation
<Alert 
  inline 
  color="positive"
  icon={IconCheck}
  title="Email verified successfully"
/>
```

### Critical Alert with Full-Width Bleed
```tsx
import Alert from 'reshaped/Alert';
import Button from 'reshaped/Button';
import IconError from 'reshaped/icons/Error';

// Critical system alert extending beyond container
<Alert 
  color="critical"
  title="Service Disruption"
  icon={IconError}
  bleed={4}
  actionsSlot={
    <Button variant="ghost" color="critical" onClick={handleRetry}>
      Retry Connection
    </Button>
  }
>
  Unable to connect to the server. Please check your internet connection and try again.
</Alert>
```

### Responsive Bleed Alert
```tsx
import Alert from 'reshaped/Alert';

// Alert with responsive bleed values
<Alert 
  color="primary"
  title="New Features Available"
  bleed={{ s: 4, m: 0 }}
>
  Check out the latest updates to improve your workflow.
</Alert>
```

## Accessibility Considerations

The Alert component includes several built-in accessibility features:

- **ARIA Roles:** Automatically sets `role="alert"` for critical color variant and `role="status"` for all others, ensuring proper screen reader announcements
- **Semantic HTML:** Uses proper heading and text structure with appropriate text variants and weights
- **Color Contrast:** Each color variant provides sufficient contrast for readability
- **Focus Management:** Action elements within the alert maintain proper focus behavior
- **Responsive Design:** Text and layout adapt appropriately across different screen sizes

## Related Components

### View
The Alert component is built using the View component as its foundation, inheriting layout, spacing, and styling capabilities. The View component provides the container structure, padding, border radius, and background styling.

### Text
Used internally for rendering both title and content text with consistent typography variants (body-3) and appropriate font weights.

### Icon
When an icon is provided, the Alert uses the Icon component to render it with proper sizing (size 5) and color matching the alert variant.

### Link/Button
Commonly used within the `actionsSlot` prop to provide interactive elements. These components integrate seamlessly with the alert's color scheme and layout.

### View.Item
Used internally for layout management, particularly in inline mode where the main content needs to grow while actions remain fixed-width.