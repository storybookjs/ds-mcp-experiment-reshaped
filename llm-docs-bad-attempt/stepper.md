# Stepper Component

## Overview
The Stepper component is a compound component for creating step-by-step navigation interfaces with visual progress indicators, perfect for multi-step forms and workflows.

## Key Features
- Multi-step navigation
- Progress visualization
- Step validation states
- Custom step content
- Navigation controls
- Accessibility support

## Props Interface
```typescript
type StepperProps = {
  children: React.ReactNode;
  currentStep: number;
  onStepChange?: (step: number) => void;
  orientation?: 'horizontal' | 'vertical';
  allowStepNavigation?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};

type StepProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  status?: 'pending' | 'current' | 'completed' | 'error';
  icon?: React.ReactElement;
};
```

## Usage Examples

### Basic Stepper
```typescript
import { Stepper, Step, Button, View, Text } from 'reshaped';
import { useState } from 'react';

function BasicStepper() {
  const [currentStep, setCurrentStep] = useState(0);
  
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 2));
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };
  
  return (
    <View gap={6}>
      <Stepper
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        allowStepNavigation
      >
        <Step title="Account Info" description="Basic account details">
          <View gap={4}>
            <Text variant="title-5">Create Your Account</Text>
            <Text>Please provide your basic information to get started.</Text>
          </View>
        </Step>
        
        <Step title="Profile Setup" description="Personal preferences">
          <View gap={4}>
            <Text variant="title-5">Setup Your Profile</Text>
            <Text>Customize your profile and preferences.</Text>
          </View>
        </Step>
        
        <Step title="Complete" description="Finish setup">
          <View gap={4}>
            <Text variant="title-5">Setup Complete!</Text>
            <Text>Your account has been successfully created.</Text>
          </View>
        </Step>
      </Stepper>
      
      <View direction="row" gap={3} justify="space-between">
        <Button 
          onClick={prevStep} 
          disabled={currentStep === 0}
          variant="outline"
        >
          Previous
        </Button>
        <Button 
          onClick={nextStep} 
          disabled={currentStep === 2}
        >
          {currentStep === 2 ? 'Finish' : 'Next'}
        </Button>
      </View>
    </View>
  );
}
```

### Vertical Stepper
```typescript
import { Stepper, Step } from 'reshaped';

function VerticalStepper() {
  return (
    <Stepper
      currentStep={1}
      orientation="vertical"
    >
      <Step 
        title="Order Placed" 
        description="Your order has been placed"
        status="completed"
      />
      <Step 
        title="Processing" 
        description="We're preparing your order"
        status="current"
      />
      <Step 
        title="Shipped" 
        description="Your order is on the way"
        status="pending"
      />
      <Step 
        title="Delivered" 
        description="Order delivered to your address"
        status="pending"
      />
    </Stepper>
  );
}
```

## Step States
- **pending**: Not yet reached
- **current**: Currently active step
- **completed**: Successfully finished
- **error**: Step with validation issues

## Accessibility
- Keyboard navigation between steps
- ARIA labels and step announcements
- Screen reader progress updates
- Focus management

## Related Components
- **ProgressIndicator**: Alternative step visualization
- **Button**: Navigation controls