# ProgressIndicator

## Component Name

ProgressIndicator

## Brief Description

A visual indicator that shows the user's progress through a multi-step process or sequence with animated transitions and smart pagination.

## Keywords

Progress, Stepper, Navigation, Multi-step, Indicator, Steps, Pagination, Workflow

## Usage Description

The ProgressIndicator component is designed to guide users through multi-step processes such as forms, onboarding flows, or any sequential workflow. It displays a series of dots representing each step, with the active step highlighted and inactive steps shown in varying opacity levels to indicate their relationship to the current position.

The component intelligently handles large numbers of steps by implementing a smart pagination system. When there are more than 7 steps, it shows only the most relevant steps around the current position, using smooth animations to transition between different views. This ensures the component remains visually clean and usable regardless of the total number of steps.

The ProgressIndicator is particularly useful in scenarios where users need clear visual feedback about their current position in a process and how many steps remain. It supports both standard interface contexts with a primary color scheme and media contexts with a specialized color variant optimized for overlays on images or videos.

## Props Documentation

### total

- **Type**: `number`
- **Required**: Yes
- **Description**: The total number of steps in the progress sequence. This determines how many dots will be rendered and affects the pagination behavior for sequences longer than 7 steps.
- **Example**: `total={10}`

### activeIndex

- **Type**: `number`
- **Required**: No
- **Default**: `0`
- **Description**: The zero-based index of the currently active step. Controls which step is highlighted and affects the pagination view for long sequences.
- **Example**: `activeIndex={3}`

### color

- **Type**: `"primary" | "media"`
- **Required**: No
- **Default**: `"primary"`
- **Description**: The color scheme variant. "primary" uses the standard theme colors, while "media" uses white with optimized opacity levels for overlays on images or video content.
- **Example**: `color="media"`

### ariaLabel

- **Type**: `string`
- **Required**: No
- **Description**: Accessibility label for screen readers. When provided, adds ARIA attributes to make the component accessible as a progress indicator with proper role, value, min, and max attributes.
- **Example**: `ariaLabel="Onboarding progress"`

### className

- **Type**: `ClassName`
- **Required**: No
- **Description**: Additional CSS classes to apply to the root element. Accepts string, array of strings, or nested arrays of strings.
- **Example**: `className="custom-progress"`

### attributes

- **Type**: `Attributes<"div">`
- **Required**: No
- **Description**: Additional HTML attributes to apply to the root div element, including data attributes and standard div props.
- **Example**: `attributes={{ id: "progress-1", "data-testid": "progress" }}`

## Code Examples

### Basic Usage

```tsx
import { ProgressIndicator } from "reshaped";

// Simple progress indicator with 5 steps
function BasicProgress() {
  const [currentStep, setCurrentStep] = useState(0);

  return <ProgressIndicator total={5} activeIndex={currentStep} />;
}
```

### Interactive Progress with Controls

```tsx
import { ProgressIndicator, Button, View } from "reshaped";

// Progress indicator with navigation controls
function InteractiveProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = 10;

  return (
    <View gap={4}>
      <View direction="row" gap={2} align="center">
        <Button
          onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeIndex === 0}
        >
          Previous
        </Button>
        <Button
          onClick={() =>
            setActiveIndex((prev) => Math.min(total - 1, prev + 1))
          }
          disabled={activeIndex === total - 1}
        >
          Next
        </Button>
      </View>
      <ProgressIndicator
        total={total}
        activeIndex={activeIndex}
        ariaLabel="Multi-step form progress"
      />
    </View>
  );
}
```

### Media Overlay Usage

```tsx
import { ProgressIndicator, View, Scrim } from "reshaped";

// Progress indicator for media content with overlay
function MediaProgress() {
  const [slideIndex, setSlideIndex] = useState(2);

  return (
    <View borderRadius="medium" overflow="hidden" width="400px">
      <Scrim
        position="bottom"
        backgroundSlot={
          <View aspectRatio={16 / 9} backgroundColor="neutral-faded" />
        }
      >
        <View align="center">
          <ProgressIndicator
            total={8}
            activeIndex={slideIndex}
            color="media"
            ariaLabel="Image gallery progress"
          />
        </View>
      </Scrim>
    </View>
  );
}
```

### Long Sequence with Pagination

```tsx
import { ProgressIndicator } from "reshaped";

// Progress indicator with many steps (demonstrates smart pagination)
function LongSequenceProgress() {
  const [currentStep, setCurrentStep] = useState(15);

  return (
    <ProgressIndicator
      total={25}
      activeIndex={currentStep}
      ariaLabel="Extended onboarding process"
      className="long-progress"
    />
  );
}
```

### Accessible Implementation

```tsx
import { ProgressIndicator, Text, View } from "reshaped";

// Fully accessible progress indicator with additional context
function AccessibleProgress() {
  const currentStep = 3;
  const totalSteps = 6;

  return (
    <View gap={2} align="center">
      <Text size="small" color="neutral-faded">
        Step {currentStep + 1} of {totalSteps}
      </Text>
      <ProgressIndicator
        total={totalSteps}
        activeIndex={currentStep}
        ariaLabel={`Setup progress: step ${currentStep + 1} of ${totalSteps}`}
        attributes={{
          "data-testid": "setup-progress",
          role: "region",
          "aria-labelledby": "progress-heading",
        }}
      />
    </View>
  );
}
```

## Accessibility Considerations

The ProgressIndicator component includes comprehensive accessibility support:

- **ARIA Support**: When `ariaLabel` is provided, the component automatically adds appropriate ARIA attributes including `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`.

- **Screen Reader Compatibility**: The progress state is clearly communicated to screen readers with the current step, minimum value (0), and maximum value (total - 1).

- **Keyboard Navigation**: While the component itself doesn't handle keyboard navigation, it's designed to work seamlessly with keyboard-navigable controls that update the `activeIndex`.

- **Visual Accessibility**: The component uses sufficient contrast ratios and clear visual indicators. The active step is both highlighted with color and scaled larger for better visibility.

- **Focus Management**: The component supports custom attributes that allow developers to integrate it into their focus management strategies.

## Related Components

- **View**: Used as a container and layout component in examples and often paired with ProgressIndicator for proper spacing and alignment.

- **Button**: Commonly used alongside ProgressIndicator to provide navigation controls for moving between steps.

- **Text**: Often paired to provide additional context about the current step or progress status.

- **Scrim**: Used together when displaying progress indicators over media content, providing proper contrast and positioning.

- **Form Components**: ProgressIndicator is frequently used in multi-step forms alongside components like TextField, Checkbox, and Select to guide users through complex data entry processes.

The component integrates seamlessly with the broader Reshaped design system, following consistent spacing, color, and animation patterns that work harmoniously with other components in the library.
