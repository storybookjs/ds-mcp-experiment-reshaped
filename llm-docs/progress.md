# Progress

A visual indicator component that displays the completion progress of a task or process as a horizontal bar.

## Keywords

Progress Bar, Loading Indicator, Completion Status, Visual Feedback, Percentage Display, Task Progress, Linear Progress, Status Indicator

## Usage Description

The Progress component is designed to provide users with visual feedback about the completion status of ongoing tasks, processes, or workflows. It displays a horizontal bar that fills proportionally to represent progress from a minimum to maximum value.

This component is ideal for scenarios such as file uploads, form completion tracking, multi-step wizards, loading processes, skill level indicators, rating displays, or any situation where you need to visually communicate partial completion of a task. The component supports smooth animations when progress changes, making it particularly effective for dynamic progress updates.

The Progress component follows accessibility best practices by implementing proper ARIA attributes and can be customized with different colors to convey semantic meaning (success, warning, error states) and sizes to fit various design contexts.

## Props Documentation

### value

- **Type**: `number`
- **Required**: No
- **Default**: `0`
- **Description**: The current progress value. Should be between min and max values. Values outside the range are automatically clamped to the valid range.
- **Example**: `50` (represents 50% progress when min=0 and max=100)

### min

- **Type**: `number`
- **Required**: No
- **Default**: `0`
- **Description**: The minimum value of the progress range. Used as the starting point for progress calculation.
- **Example**: `0`, `10`, `-50`

### max

- **Type**: `number`
- **Required**: No
- **Default**: `100`
- **Description**: The maximum value of the progress range. Used as the end point for progress calculation.
- **Example**: `100`, `200`, `1000`

### size

- **Type**: `"small" | "medium"`
- **Required**: No
- **Default**: `"medium"`
- **Description**: Controls the visual size/height of the progress bar.
- **Example**: `"small"` for compact layouts, `"medium"` for standard usage

### color

- **Type**: `"primary" | "critical" | "warning" | "positive" | "media"`
- **Required**: No
- **Default**: `"primary"`
- **Description**: Sets the color theme of the progress bar to convey semantic meaning or match design requirements.
- **Example**: `"positive"` for success states, `"critical"` for error conditions, `"media"` for video/media contexts

### duration

- **Type**: `number`
- **Required**: No
- **Default**: `undefined`
- **Description**: Animation duration in milliseconds for progress changes. When provided, progress updates are animated smoothly over this duration using linear timing.
- **Example**: `2000` for a 2-second animation, `500` for quick transitions

### ariaLabel

- **Type**: `string`
- **Required**: No
- **Default**: `undefined`
- **Description**: Accessible label for screen readers. Provides context about what the progress represents.
- **Example**: `"File upload progress"`, `"Form completion status"`

### className

- **Type**: `string | string[] | (string | null | undefined | false)[]`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS classes to apply to the root element for custom styling.
- **Example**: `"my-custom-progress"`, `["progress-bar", "highlighted"]`

### attributes

- **Type**: `React.HTMLAttributes<HTMLDivElement> & { [key: data-${string}]: string | boolean }`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to pass to the root div element, including data attributes and event handlers.
- **Example**: `{ "data-testid": "upload-progress", onMouseEnter: handleHover }`

## Code Examples

### Basic Usage

```jsx
import { Progress } from "reshaped";

// Simple progress bar at 50%
<Progress value={50} ariaLabel="Task completion" />;
```

### Custom Range with Animation

```jsx
import { Progress } from "reshaped";

// Progress with custom min/max and smooth animation
<Progress
  value={75}
  min={0}
  max={150}
  duration={1000}
  ariaLabel="Download progress"
/>;
```

### Different Sizes and Colors

```jsx
import { Progress } from 'reshaped';

// Small progress bar for compact layouts
<Progress value={30} size="small" color="warning" ariaLabel="Battery level" />

// Medium progress bar with success color
<Progress value={100} size="medium" color="positive" ariaLabel="Upload complete" />

// Critical state progress bar
<Progress value={90} color="critical" ariaLabel="Storage almost full" />
```

### Dynamic Progress with State Management

```jsx
import { Progress } from "reshaped";
import { useState, useEffect } from "react";

function FileUploadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : prev));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      value={progress}
      duration={400}
      color={progress === 100 ? "positive" : "primary"}
      ariaLabel={`Upload ${progress}% complete`}
    />
  );
}
```

### Media Context Usage

```jsx
import { Progress, View } from "reshaped";

// Progress bar for video/media with dark background
<View padding={4} backgroundColor="black" borderRadius="medium">
  <Progress value={60} color="media" ariaLabel="Video playback progress" />
</View>;
```

## Related Components

- **ProgressIndicator**: A step-based progress indicator that shows discrete progress through a series of steps, ideal for wizards and multi-step processes where the total number of steps is known
- **Spinner**: A loading spinner component for indeterminate progress states where completion time is unknown
- **Button**: Often used alongside Progress components to control processes (start, pause, cancel actions)
- **View**: Container component that can provide backgrounds and styling context for Progress components, especially useful with the "media" color variant

## Accessibility Considerations

The Progress component implements comprehensive accessibility features:

- Uses proper `role="progressbar"` for screen reader recognition
- Provides `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` attributes for current state communication
- Supports custom `ariaLabel` prop for contextual descriptions
- Automatically clamps values to valid ranges to prevent confusing accessibility states
- Compatible with keyboard navigation patterns when used within interactive contexts

## Technical Implementation Notes

- The component uses CSS custom properties for smooth animations and RTL support
- Progress calculation is normalized to handle any min/max range automatically
- Values outside the specified range are safely clamped to prevent visual inconsistencies
- Animation timing uses CSS transitions with configurable duration
- Supports right-to-left (RTL) text direction with automatic transform adjustments
