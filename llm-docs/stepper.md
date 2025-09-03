# Stepper

A multi-step process indicator that shows progress through sequential steps with optional content areas and navigation controls.

## Keywords

Step Progress, Multi-step Form, Wizard, Process Flow, Sequential Navigation, Progress Indicator, Workflow, Timeline

## Usage Description

The Stepper component is designed for displaying multi-step processes, wizards, or sequential workflows where users need to complete tasks in a specific order. It provides clear visual feedback about the current step, completed steps, and remaining steps in a process. The component is particularly useful for onboarding flows, form wizards, checkout processes, or any sequential user journey.

The component supports both horizontal and vertical layouts, making it adaptable to different screen sizes and design requirements. In vertical mode, each step can contain expandable content that shows only when the step is active, making it ideal for step-by-step forms or detailed instructions. The horizontal mode is more compact and suitable for showing progress across the top of a process.

The Stepper automatically handles step numbering, visual states (active, completed, pending), and provides responsive label display options that can hide labels on smaller screens while maintaining the visual progression indicators.

## Props Documentation

### Stepper Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `activeId` | `string \| number` | No | `undefined` | The ID of the currently active step. Steps with IDs less than this value will be marked as completed |
| `direction` | `"row" \| "column"` | No | `"row"` | Layout direction of the stepper. Row creates horizontal layout, column creates vertical layout |
| `labelDisplay` | `Responsive<"inline" \| "hidden">` | No | `"inline"` | Controls visibility of step labels. Can be responsive object like `{ s: "hidden", m: "inline" }` |
| `children` | `React.ReactNode` | No | `undefined` | Collection of `Stepper.Item` components representing individual steps |
| `className` | `ClassName` | No | `undefined` | Additional CSS class names to apply to the stepper container |
| `attributes` | `Attributes<"div">` | No | `undefined` | Additional HTML attributes and data attributes to apply to the container div |

### Stepper.Item Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `string` | No | Auto-generated index | Unique identifier for the step. Used with `activeId` to determine step state |
| `title` | `React.ReactNode` | No | `undefined` | Primary label for the step, displayed prominently |
| `subtitle` | `React.ReactNode` | No | `undefined` | Secondary descriptive text shown below the title in muted color |
| `completed` | `boolean` | No | `false` | Manually override completion status. When true, shows checkmark icon regardless of activeId |
| `children` | `React.ReactNode` | No | `undefined` | Content displayed within the step (only visible in column direction when step is active) |
| `className` | `ClassName` | No | `undefined` | Additional CSS class names for the step item |
| `attributes` | `Attributes<"div">` | No | `undefined` | Additional HTML attributes for the step item container |

## Code Examples

### Basic Horizontal Stepper

```tsx
import { Stepper } from 'reshaped';

function BasicStepper() {
  return (
    <Stepper activeId="2">
      <Stepper.Item id="1" completed title="Personal Info" />
      <Stepper.Item id="2" title="Payment Details" />
      <Stepper.Item id="3" title="Confirmation" />
    </Stepper>
  );
}
```

This example shows a simple horizontal stepper with three steps, where step 1 is completed and step 2 is currently active.

### Vertical Stepper with Content

```tsx
import { Stepper, Button, View } from 'reshaped';
import { useState } from 'react';

function VerticalStepperWithContent() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Stepper activeId={activeStep} direction="column">
      <Stepper.Item 
        id={1} 
        title="Account Setup" 
        subtitle="Create your account and verify email"
        completed={activeStep > 1}
      >
        <View gap={3}>
          <p>Enter your account details and verify your email address.</p>
          <Button onClick={() => setActiveStep(2)}>
            Complete Setup
          </Button>
        </View>
      </Stepper.Item>
      
      <Stepper.Item 
        id={2} 
        title="Profile Information" 
        subtitle="Add your personal details"
        completed={activeStep > 2}
      >
        <View gap={3}>
          <p>Fill in your profile information and preferences.</p>
          <View direction="row" gap={2}>
            <Button variant="ghost" onClick={() => setActiveStep(1)}>
              Back
            </Button>
            <Button onClick={() => setActiveStep(3)}>
              Continue
            </Button>
          </View>
        </View>
      </Stepper.Item>
      
      <Stepper.Item 
        id={3} 
        title="Final Review" 
        subtitle="Review and submit your information"
        completed={activeStep > 3}
      >
        <View gap={3}>
          <p>Review all information before submitting.</p>
          <View direction="row" gap={2}>
            <Button variant="ghost" onClick={() => setActiveStep(2)}>
              Back
            </Button>
            <Button onClick={() => setActiveStep(4)}>
              Submit
            </Button>
          </View>
        </View>
      </Stepper.Item>
    </Stepper>
  );
}
```

This example demonstrates a vertical stepper with interactive content areas that expand when each step becomes active. Each step includes navigation buttons and detailed content.

### Responsive Label Display

```tsx
import { Stepper } from 'reshaped';

function ResponsiveStepper() {
  return (
    <Stepper 
      activeId="2" 
      labelDisplay={{ s: "hidden", m: "inline" }}
    >
      <Stepper.Item 
        id="1" 
        completed 
        title="Step 1" 
        subtitle="First step description" 
      />
      <Stepper.Item 
        id="2" 
        title="Step 2" 
        subtitle="Second step description" 
      />
      <Stepper.Item 
        id="3" 
        title="Step 3" 
        subtitle="Third step description" 
      />
    </Stepper>
  );
}
```

This example shows how to hide step labels on small screens while keeping them visible on medium and larger screens for better mobile experience.

### Manual Completion Control

```tsx
import { Stepper } from 'reshaped';

function ManualCompletionStepper() {
  const [completedSteps, setCompletedSteps] = useState(new Set());
  
  const toggleCompletion = (stepId) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  return (
    <Stepper activeId="2">
      <Stepper.Item 
        id="1" 
        title="Review Documents"
        completed={completedSteps.has("1")}
        subtitle="Check all required documents"
      />
      <Stepper.Item 
        id="2" 
        title="Get Approval"
        completed={completedSteps.has("2")}
        subtitle="Wait for manager approval"
      />
      <Stepper.Item 
        id="3" 
        title="Final Submission"
        completed={completedSteps.has("3")}
        subtitle="Submit the completed form"
      />
    </Stepper>
  );
}
```

This example shows how to manually control step completion status independent of the activeId, useful for non-linear processes.

### Complex Step Content

```tsx
import { Stepper, Card, Text, Button, View } from 'reshaped';

function ComplexContentStepper() {
  return (
    <Stepper activeId="1" direction="column">
      <Stepper.Item 
        id="1" 
        title="Project Setup" 
        subtitle="Initialize your new project with required configurations"
      >
        <Card padding={4}>
          <View gap={4}>
            <Text variant="body-2" weight="medium">
              Configuration Steps:
            </Text>
            <View gap={2}>
              <Text>• Choose project template</Text>
              <Text>• Configure build settings</Text>
              <Text>• Set up development environment</Text>
              <Text>• Install dependencies</Text>
            </View>
            <Button>Start Project Setup</Button>
          </View>
        </Card>
      </Stepper.Item>
      
      <Stepper.Item 
        id="2" 
        title="Team Collaboration" 
        subtitle="Add team members and set permissions"
      >
        <Card padding={4}>
          <Text>Team management content would go here...</Text>
        </Card>
      </Stepper.Item>
    </Stepper>
  );
}
```

This example demonstrates using rich content within step items, including cards, formatted text, and interactive elements.

## Accessibility Considerations

The Stepper component is built with accessibility in mind:

- **Semantic Structure**: Uses proper ARIA attributes and semantic HTML elements for screen reader compatibility
- **Keyboard Navigation**: Supports keyboard navigation for interactive content within steps
- **Screen Reader Support**: Step numbers, titles, and subtitles are properly announced to screen readers
- **Visual Indicators**: Uses both color and icons (checkmarks) to indicate completion status, avoiding color-only communication
- **Focus Management**: Proper focus management for interactive elements within expandable step content
- **Responsive Design**: Label hiding feature ensures good mobile accessibility by reducing clutter while maintaining visual progress

## Related Components

- **View**: Used as the foundational layout component for stepper structure and spacing
- **Text**: Provides consistent typography for step titles and subtitles
- **Icon**: Displays checkmark icons for completed steps and other visual indicators
- **Divider**: Creates visual separation between steps in horizontal layout
- **Hidden**: Manages responsive visibility of step labels based on screen size
- **Expandable**: Handles show/hide animation for step content in vertical layout
- **Button**: Commonly used within step content for navigation between steps
- **Card**: Often used to structure complex content within step areas