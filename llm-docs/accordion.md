# Accordion

An interactive disclosure component that allows users to expand and collapse content sections with smooth animations.

## Keywords
- Disclosure
- Collapsible
- Expandable
- Toggle
- Content Panel
- Interactive
- Animation

## Usage Description

The Accordion component is designed for organizing content in a space-efficient way by allowing users to show and hide sections on demand. It's particularly useful for FAQ sections, navigation menus, settings panels, or any scenario where you need to present information hierarchically without overwhelming the user with too much content at once.

The component supports both controlled and uncontrolled modes, making it flexible for various state management approaches. It includes built-in accessibility features following ARIA patterns for disclosure widgets, with proper keyboard navigation and screen reader support.

The Accordion uses a compound component pattern with Accordion.Trigger and Accordion.Content subcomponents, providing a clean and intuitive API for composing expandable content sections.

## Props Documentation

### Accordion Props

**iconSize** (optional)
- Type: `IconProps["size"]`
- Default: `4`
- Description: Controls the size of the chevron icon in the trigger. Accepts standard icon size values.

**iconPosition** (optional)
- Type: `"start" | "end"`
- Default: `"end"`
- Description: Determines whether the chevron icon appears at the start or end of the trigger content.

**gap** (optional)
- Type: `G.Responsive<number>`
- Default: `undefined`
- Description: Adds padding-top spacing between the trigger and content when expanded. Supports responsive values.

**children** (optional)
- Type: `React.ReactNode`
- Description: The content of the accordion, typically containing Accordion.Trigger and Accordion.Content components.

**onToggle** (optional)
- Type: `(active: boolean) => void`
- Description: Callback function called when the accordion state changes. Receives the new active state as a parameter.

**mixin** (optional)
- Type: `Pick<S.Mixin, "margin">`
- Description: Styling mixin for margin properties.

**className** (optional)
- Type: `G.ClassName`
- Description: Additional CSS classes to apply to the accordion container.

**attributes** (optional)
- Type: `G.Attributes<"div">`
- Description: Additional HTML attributes to apply to the accordion container div.

### Controlled Mode Props

**active** (required for controlled mode)
- Type: `boolean`
- Description: Controls the expanded/collapsed state of the accordion. When provided, the component operates in controlled mode.

**defaultActive** (not allowed in controlled mode)
- Type: `never`
- Description: Cannot be used when `active` prop is provided.

### Uncontrolled Mode Props

**active** (not allowed in uncontrolled mode)
- Type: `never`
- Description: Cannot be used when `defaultActive` prop is provided.

**defaultActive** (optional)
- Type: `boolean`
- Default: `false`
- Description: Sets the initial expanded state of the accordion in uncontrolled mode.

### Accordion.Trigger Props

**children** (optional)
- Type: `React.ReactNode | ((attributes: { "aria-expanded": boolean; "aria-controls": string; id: string; onClick: () => void }, props: { active: boolean }) => React.ReactNode)`
- Description: The trigger content. Can be either standard React nodes or a render prop function that receives accessibility attributes and current state for custom implementations.

### Accordion.Content Props

**children** (optional)
- Type: `React.ReactNode`
- Description: The collapsible content that is shown/hidden when the accordion is toggled.

## Code Examples

### Basic Usage

```tsx
import { Accordion } from 'reshaped';

function BasicAccordion() {
  return (
    <Accordion defaultActive>
      <Accordion.Trigger>
        Click to toggle content
      </Accordion.Trigger>
      <Accordion.Content>
        This content can be expanded and collapsed.
      </Accordion.Content>
    </Accordion>
  );
}
```

### Controlled Accordion with Toggle Handler

```tsx
import { Accordion } from 'reshaped';
import { useState } from 'react';

function ControlledAccordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion 
      active={isOpen} 
      onToggle={setIsOpen}
    >
      <Accordion.Trigger>
        FAQ: What is React?
      </Accordion.Trigger>
      <Accordion.Content>
        React is a JavaScript library for building user interfaces.
        It helps developers create interactive UIs efficiently.
      </Accordion.Content>
    </Accordion>
  );
}
```

### Custom Icon Configuration

```tsx
import { Accordion } from 'reshaped';

function CustomIconAccordion() {
  return (
    <Accordion 
      iconSize={6} 
      iconPosition="start"
      gap={4}
    >
      <Accordion.Trigger>
        Settings
      </Accordion.Trigger>
      <Accordion.Content>
        Configure your application preferences here.
      </Accordion.Content>
    </Accordion>
  );
}
```

### Render Props Pattern for Custom Trigger

```tsx
import { Accordion, Button } from 'reshaped';

function CustomTriggerAccordion() {
  return (
    <Accordion onToggle={(active) => console.log('Toggled:', active)}>
      <Accordion.Trigger>
        {(attributes, { active }) => (
          <Button 
            {...attributes}
            variant={active ? 'primary' : 'secondary'}
          >
            {active ? 'Hide' : 'Show'} Details
          </Button>
        )}
      </Accordion.Trigger>
      <Accordion.Content>
        Custom trigger implementation using render props.
      </Accordion.Content>
    </Accordion>
  );
}
```

### Multiple Accordions with Shared State Management

```tsx
import { Accordion, View } from 'reshaped';
import { useState } from 'react';

function AccordionGroup() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleToggle = (id: string) => (active: boolean) => {
    setOpenAccordion(active ? id : null);
  };

  return (
    <View gap={2}>
      <Accordion 
        active={openAccordion === 'section1'}
        onToggle={handleToggle('section1')}
      >
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>Content for section 1</Accordion.Content>
      </Accordion>
      
      <Accordion 
        active={openAccordion === 'section2'}
        onToggle={handleToggle('section2')}
      >
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>Content for section 2</Accordion.Content>
      </Accordion>
    </View>
  );
}
```

## Accessibility Considerations

The Accordion component implements comprehensive accessibility features:

- **ARIA Attributes**: Proper `aria-expanded`, `aria-controls`, and `aria-labelledby` attributes for screen reader support
- **Keyboard Navigation**: Full keyboard accessibility with Enter and Space key support for triggering
- **Focus Management**: Maintains focus on the trigger button after state changes
- **Semantic HTML**: Uses appropriate button and region roles for proper screen reader interpretation
- **ID Association**: Automatically generates and associates unique IDs between triggers and content panels

## Animation and Styling

- **Smooth Transitions**: Built-in CSS transitions for expand/collapse animations using design system duration and easing tokens
- **Icon Rotation**: Chevron icon rotates 180 degrees when expanded with smooth transition
- **Responsive Support**: Gap and other properties support responsive values for different screen sizes

## Related Components

- **Expandable**: Internal utility component that handles the expand/collapse animation logic
- **View**: Used for layout and spacing within accordion content
- **Icon**: Provides the chevron indicator in the default trigger implementation
- **Actionable**: Handles the interactive behavior of the default trigger
- **Button**: Can be used with render props pattern for custom trigger implementations

## Technical Implementation

The Accordion uses a compound component pattern with React Context to share state between the trigger and content components. It automatically switches between controlled and uncontrolled modes based on whether the `active` prop is provided, making it flexible for different state management approaches while maintaining a consistent API.