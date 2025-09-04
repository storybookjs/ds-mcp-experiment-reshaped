# Dismissible

A utility component that adds a dismissible overlay with an optional close button to any content.

## Keywords

- Overlay
- Dismissible
- Close Button
- Utility
- Media
- Banner
- Notification

## Usage Description

The Dismissible component is used to create content that can be dismissed by the user, typically for banners, notifications, overlays, or temporary content displays. It wraps any child content and provides a standardized close button functionality with accessibility support.

This component is particularly useful for creating dismissible banners, image overlays, notification panels, or any content that users should be able to close. It supports both standard content dismissal and media-specific styling for image or video overlays.

The component provides consistent styling and behavior across different use cases, with built-in accessibility features including proper ARIA labels and keyboard navigation support through the underlying Button component.

## Props Documentation

### `variant?: "media"`

- **Type**: `"media" | undefined`
- **Required**: No
- **Default**: `undefined`
- **Description**: Changes the styling for media content overlays. When set to "media", the close button uses media-appropriate styling (faded background, media color scheme) and positioning.

### `align?: "top" | "center"`

- **Type**: `"top" | "center" | undefined`
- **Required**: No
- **Default**: `"top"`
- **Description**: Controls the vertical alignment of the close button. "top" positions it at the top-right corner, "center" centers it vertically on the right side.

### `children?: React.ReactNode`

- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The content to be rendered inside the dismissible container. This can be any valid React content including text, components, or complex layouts.

### `onClose?: () => void`

- **Type**: `() => void`
- **Required**: No (but required if close button is shown)
- **Default**: `undefined`
- **Description**: Callback function executed when the close button is clicked. If not provided, the close button will be rendered but disabled.

### `hideCloseButton?: boolean | true`

- **Type**: `boolean | true`
- **Required**: No
- **Default**: `false`
- **Description**: When `true`, hides the close button entirely. This creates a union type where `closeAriaLabel` becomes optional when hiding the button.

### `closeAriaLabel: string` (when hideCloseButton is false)

### `closeAriaLabel?: string` (when hideCloseButton is true)

- **Type**: `string`
- **Required**: Yes (when close button is shown), No (when close button is hidden)
- **Default**: None
- **Description**: Accessibility label for the close button, used by screen readers. Required for proper accessibility when the close button is visible.

### `className?: ClassName`

- **Type**: `ClassName` (string | null | undefined | false | array of these)
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS class names to apply to the root container element.

### `attributes?: Attributes<"div">`

- **Type**: `Attributes<"div">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to spread onto the root div element, including data attributes and standard div properties.

## Code Examples

### Basic Dismissible Content

```tsx
import { Dismissible } from "reshaped";

function BasicExample() {
  const handleClose = () => {
    console.log("Content dismissed");
  };

  return (
    <Dismissible closeAriaLabel="Close banner" onClose={handleClose}>
      <div>This is dismissible content with a close button.</div>
    </Dismissible>
  );
}
```

### Media Overlay with Center Alignment

```tsx
import { Dismissible, View, Image } from "reshaped";

function MediaOverlayExample() {
  const handleClose = () => {
    // Handle media dismissal
  };

  return (
    <View width="400px">
      <Dismissible
        variant="media"
        align="center"
        closeAriaLabel="Close image overlay"
        onClose={handleClose}
      >
        <View aspectRatio={16 / 9}>
          <Image height="100%" src="https://example.com/image.jpg" />
        </View>
      </Dismissible>
    </View>
  );
}
```

### Hidden Close Button

```tsx
import { Dismissible } from "reshaped";

function HiddenCloseExample() {
  return (
    <Dismissible hideCloseButton>
      <div>
        This content cannot be dismissed by the user. The close functionality
        might be handled elsewhere.
      </div>
    </Dismissible>
  );
}
```

### Notification Banner

```tsx
import { Dismissible, View, Text } from "reshaped";
import { useState } from "react";

function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Dismissible
      closeAriaLabel="Dismiss notification"
      onClose={() => setIsVisible(false)}
      className="notification-banner"
    >
      <View padding={4}>
        <Text>Your changes have been saved successfully!</Text>
      </View>
    </Dismissible>
  );
}
```

### Custom Styled Dismissible

```tsx
import { Dismissible } from "reshaped";

function CustomStyledExample() {
  return (
    <Dismissible
      closeAriaLabel="Close custom content"
      onClose={() => {}}
      className="custom-dismissible"
      attributes={{
        "data-testid": "custom-dismissible",
        style: {
          backgroundColor: "var(--rs-color-background-neutral-faded)",
          borderRadius: "var(--rs-border-radius-medium)",
        },
      }}
    >
      <div style={{ padding: "16px" }}>
        Custom styled dismissible content with data attributes.
      </div>
    </Dismissible>
  );
}
```

## Related Components

- **Button**: The Dismissible component uses Button internally for the close functionality, inheriting its accessibility features and interaction patterns.
- **Button.Aligner**: Used for positioning the close button in non-media variants, providing consistent button alignment.
- **View**: Commonly used together with Dismissible for layout and spacing of the dismissible content.
- **Image**: Often wrapped by Dismissible when creating dismissible media overlays or image viewers.
- **IconClose**: The close icon used within the dismiss button, providing visual indication of the close action.

The component integrates well with notification systems, modal overlays, banner components, and any content that requires user-controlled dismissal functionality.
