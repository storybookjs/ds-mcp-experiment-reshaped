# Toast

A comprehensive toast notification system that provides temporary feedback to users through dismissible overlay messages positioned at screen edges.

## Keywords

Notification, Alert, Feedback, Overlay, Dismissible, Temporary Message, Status Update, Action Confirmation

## Usage Description

The Toast system is designed for displaying temporary notifications that communicate the results of user actions, system status updates, or important information that requires user awareness. Use toasts to provide feedback for actions like form submissions, data saves, network requests, or to alert users about system changes without interrupting their workflow.

Toasts appear as overlay messages positioned at various screen edges and automatically dismiss after a configured timeout. They support rich content including icons, titles, descriptive text, and action buttons, making them suitable for both simple status messages and more complex notifications that require user interaction.

The system is particularly effective for confirming successful operations, displaying error messages, showing progress updates, or presenting promotional content that doesn't require immediate user attention but should be visible.

## Props Documentation

### ToastProvider Props

**children** (React.ReactNode, optional)
- The child components that will have access to the toast context
- Typically your entire application or a section that needs toast functionality

**options** (Partial<Record<Position, RegionOptions>>, optional)
- Configuration options for toast positioning and behavior
- Keys are position values ("top", "top-end", "top-start", "bottom", "bottom-start", "bottom-end")
- Each position can specify:
  - `width`: Custom width as a CSS string value
  - `expanded`: Boolean to keep toasts always expanded (not collapsed when stacked)

### Toast Show Props (useToast().show() parameters)

**size** ("small" | "medium" | "large", optional, default: "small")
- Controls the overall size and layout of the toast
- "small": Compact horizontal layout
- "medium": Medium horizontal layout with more spacing
- "large": Vertical layout with title above content

**icon** (IconProps["svg"], optional)
- Icon component to display at the start of the toast
- Should be a valid Reshaped icon component
- Automatically sized and positioned based on toast size

**startSlot** (React.ReactNode, optional)
- Custom content to display at the start of the toast
- Used when you need more than just an icon in the start position
- Only used if icon is not provided

**title** (React.ReactNode, optional)
- Bold title text displayed at the top or start of the toast
- Rendered with body-3 text variant and bold weight
- In large size, appears above the text content

**text** (React.ReactNode, optional)
- Main descriptive text content of the toast
- Rendered with body-3 text variant
- In large size, appears below the title

**children** (React.ReactNode, optional)
- Custom content area within the toast
- Displayed below title/text content
- Useful for complex layouts or custom components

**actionsSlot** (React.ReactNode | React.ReactNode[], optional)
- Action buttons or interactive elements
- Can be a single element or array of elements
- Button components are automatically styled with appropriate variants
- First action in large toasts gets primary styling

**color** ("neutral" | "primary" | "critical" | "positive" | "warning" | "inverted", optional, default: "inverted")
- Visual theme/color scheme of the toast
- "neutral": Light background with border
- "primary": Brand color background
- "critical": Red/error color background
- "positive": Green/success color background
- "warning": Yellow/warning color background
- "inverted": Dark background with light text

**timeout** ("short" | "long" | number, optional, default: "short")
- Auto-dismiss timing for the toast
- "short": 4000ms (4 seconds)
- "long": 8000ms (8 seconds)
- number: Custom timeout in milliseconds
- 0: Never auto-dismiss (requires manual dismissal)

**position** ("top" | "top-end" | "top-start" | "bottom" | "bottom-start" | "bottom-end", optional, default: "bottom-end")
- Screen position where the toast appears
- Controls both vertical (top/bottom) and horizontal (start/center/end) positioning

**className** (string, optional)
- Additional CSS classes to apply to the toast

**attributes** (HTML attributes, optional)
- Additional HTML attributes to apply to the toast container

### useToast Hook Return Value

**show** ((props: ToastShowProps) => string)
- Function to display a new toast notification
- Returns a unique string ID for the toast
- Use the returned ID with hide() to programmatically dismiss

**hide** ((id: string) => void)
- Function to programmatically hide a specific toast
- Takes the ID returned from show()
- Initiates the exit animation

**id** (string)
- Unique identifier for the current toast context
- Used internally for nested provider detection

## Code Examples

### Basic Toast Setup

```tsx
import { ToastProvider, useToast } from 'reshaped';

function App() {
  return (
    <ToastProvider>
      <YourAppContent />
    </ToastProvider>
  );
}

function NotificationButton() {
  const toast = useToast();
  
  return (
    <Button
      onClick={() => {
        toast.show({
          text: "Operation completed successfully!"
        });
      }}
    >
      Save Changes
    </Button>
  );
}
```

This demonstrates the basic setup with ToastProvider wrapping your app and a simple text-only toast notification.

### Rich Toast with Actions

```tsx
import { useToast } from 'reshaped';
import { CheckIcon } from 'your-icons';

function SaveButton() {
  const toast = useToast();
  
  const handleSave = () => {
    const toastId = toast.show({
      icon: CheckIcon,
      title: "Changes Saved",
      text: "Your document has been saved to the cloud",
      color: "positive",
      actionsSlot: [
        <Button onClick={() => window.open('/documents')}>
          View Document
        </Button>,
        <Button onClick={() => toast.hide(toastId)}>
          Dismiss
        </Button>
      ]
    });
  };

  return <Button onClick={handleSave}>Save Document</Button>;
}
```

This shows a success toast with an icon, title, description, and interactive action buttons.

### Error Toast with Manual Dismiss

```tsx
function ErrorHandler() {
  const toast = useToast();
  
  const showError = () => {
    const toastId = toast.show({
      title: "Upload Failed",
      text: "The file could not be uploaded. Please check your connection and try again.",
      color: "critical",
      timeout: 0, // Never auto-dismiss
      position: "top",
      actionsSlot: [
        <Button onClick={() => retryUpload()}>
          Retry
        </Button>,
        <Button 
          variant="ghost" 
          onClick={() => toast.hide(toastId)}
        >
          Close
        </Button>
      ]
    });
  };

  return <Button onClick={showError}>Simulate Error</Button>;
}
```

This demonstrates an error toast that doesn't auto-dismiss and requires user interaction.

### Custom Positioning and Sizing

```tsx
function CustomToasts() {
  const toast = useToast();

  return (
    <div>
      <Button
        onClick={() => {
          toast.show({
            text: "Quick notification",
            size: "small",
            position: "bottom-start",
            timeout: "short"
          });
        }}
      >
        Bottom-left Toast
      </Button>
      
      <Button
        onClick={() => {
          toast.show({
            title: "Important Update",
            text: "This is a larger notification with more details and space for content.",
            size: "large",
            position: "top",
            timeout: "long",
            color: "primary"
          });
        }}
      >
        Large Top Toast
      </Button>
    </div>
  );
}
```

This example shows different sizes and positioning options for various use cases.

### Provider with Custom Options

```tsx
function App() {
  return (
    <ToastProvider
      options={{
        'bottom-start': {
          width: '400px',
          expanded: true
        },
        'top-end': {
          width: '320px'
        }
      }}
    >
      <AppContent />
    </ToastProvider>
  );
}

function PromotionalToast() {
  const toast = useToast();

  return (
    <Button
      onClick={() => {
        toast.show({
          children: (
            <View gap={3} direction="row">
              <Image 
                src="/promo-image.jpg" 
                width="60px" 
                height="60px"
                borderRadius="medium"
              />
              <View.Item grow>
                <View gap={1}>
                  <Text variant="body-2" weight="bold">
                    New Feature Available!
                  </Text>
                  <Text variant="body-3">
                    Try our new collaboration tools and boost your productivity.
                  </Text>
                </View>
              </View.Item>
            </View>
          ),
          position: "bottom-start",
          color: "neutral",
          timeout: 0
        });
      }}
    >
      Show Promotion
    </Button>
  );
}
```

This advanced example shows custom provider configuration and a complex toast with rich content layout.

## Accessibility Considerations

The Toast system includes comprehensive accessibility features:

- **ARIA Live Region**: Toasts use `aria-live="polite"` to announce content to screen readers
- **Focus Management**: Interactive toasts trap focus when displayed and restore it appropriately
- **Keyboard Navigation**: All interactive elements within toasts are keyboard accessible
- **Touch Support**: Optimized touch interactions with proper event handling
- **Hover Behavior**: Hover pauses auto-dismiss timers, preventing accidental dismissal
- **Screen Reader Announcements**: Toast content is automatically announced when displayed

## Related Components

**Button**: Used within action slots for interactive toast functionality. Automatically styled based on toast configuration.

**Dismissible**: Can be used within toast children for custom close functionality and accessibility.

**View**: Used internally for layout and can be used in custom toast content for advanced layouts.

**Text**: Used internally for title and text content, follows the same text variants and styling.

**Icon**: Used for the icon prop, automatically sized and positioned based on toast size.

**Theme**: Inverted color toasts automatically wrap content in inverted theme context for proper contrast.