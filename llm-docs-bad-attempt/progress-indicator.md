# ProgressIndicator Component

## Overview
The ProgressIndicator component displays a series of dots representing steps in a process, with support for animation and different visual themes for multi-step workflows.

## Key Features
- Multi-step visualization
- Current step highlighting
- Completed step indication
- Animated transitions
- Customizable appearance
- Accessibility support

## Props Interface
```typescript
type ProgressIndicatorProps = {
  steps: number;
  currentStep: number;
  completedSteps?: number[];
  variant?: 'dots' | 'numbers' | 'lines';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Step Indicator
```typescript
import { ProgressIndicator, View, Text } from 'reshaped';
import { useState } from 'react';

function StepIndicator() {
  const [currentStep, setCurrentStep] = useState(2);
  const steps = ['Account', 'Profile', 'Settings', 'Complete'];
  
  return (
    <View gap={4}>
      <ProgressIndicator
        steps={steps.length}
        currentStep={currentStep}
        completedSteps={[0, 1]}
      />
      <View direction="row" justify="space-between">
        {steps.map((step, index) => (
          <Text 
            key={step}
            variant="body-3"
            color={index <= currentStep ? 'primary' : 'neutral-faded'}
          >
            {step}
          </Text>
        ))}
      </View>
    </View>
  );
}
```

### Numbered Steps
```typescript
import { ProgressIndicator } from 'reshaped';

function NumberedSteps() {
  return (
    <ProgressIndicator
      steps={5}
      currentStep={3}
      completedSteps={[1, 2]}
      variant="numbers"
      animated
    />
  );
}
```

### Linear Progress
```typescript
import { ProgressIndicator } from 'reshaped';

function LinearProgress() {
  return (
    <ProgressIndicator
      steps={4}
      currentStep={2}
      variant="lines"
      size="large"
    />
  );
}
```

## Step States
- **Completed**: Previously finished steps
- **Current**: Active step being worked on
- **Upcoming**: Future steps not yet reached
- **Error**: Steps with validation issues (optional)

## Accessibility
- ARIA labels for step navigation
- Screen reader step announcements
- Keyboard navigation support
- Progress updates

## Related Components
- **Progress**: Linear progress bars
- **Stepper**: Interactive step navigation