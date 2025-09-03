# Actionable Component

## Overview
The Actionable component is a universal utility that renders interactive elements as buttons, links, or custom elements while maintaining consistent accessibility and behavior patterns across different interaction types.

## Key Features
- Universal interactive element wrapper
- Button, link, and custom element rendering
- Consistent accessibility patterns
- Event handling normalization
- Focus management
- Custom element support

## Props Interface
```typescript
type ActionableProps = {
  children: React.ReactNode;
  as?: 'button' | 'a' | 'div' | React.ComponentType;
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  target?: string;
  rel?: string;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLElement>;
};
```

## Usage Examples

### As Button
```typescript
import { Actionable, Text, Icon } from 'reshaped';
import { SaveIcon } from './icons';

function ActionableButton() {
  return (
    <Actionable
      as="button"
      onClick={() => console.log('Button clicked')}
    >
      <Icon svg={SaveIcon} />
      <Text>Save Changes</Text>
    </Actionable>
  );
}
```

### As Link
```typescript
import { Actionable, Text, Icon } from 'reshaped';
import { ExternalLinkIcon } from './icons';

function ActionableLink() {
  return (
    <Actionable
      as="a"
      href="https://example.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Text>Visit External Site</Text>
      <Icon svg={ExternalLinkIcon} />
    </Actionable>
  );
}
```

### Custom Element
```typescript
import { Actionable, Text, View } from 'reshaped';

function CustomActionable() {
  return (
    <Actionable
      as="div"
      onClick={(e) => {
        console.log('Custom div clicked');
      }}
      role="button"
      tabIndex={0}
    >
      <View padding={4} gap={2} align="center">
        <Text weight="medium">Custom Interactive Element</Text>
        <Text variant="body-3" color="neutral-faded">
          Click me for custom behavior
        </Text>
      </View>
    </Actionable>
  );
}
```

### Card-like Actionable
```typescript
import { Actionable, View, Text, Avatar } from 'reshaped';

function ActionableCard({ user, onClick }: { 
  user: { name: string; avatar: string; role: string }; 
  onClick: () => void;
}) {
  return (
    <Actionable
      as="button"
      onClick={onClick}
      className="actionable-card"
    >
      <View direction="row" gap={4} padding={5} align="center">
        <Avatar src={user.avatar} alt={user.name} size={12} />
        <View gap={1} align="start">
          <Text weight="medium">{user.name}</Text>
          <Text variant="body-3" color="neutral-faded">
            {user.role}
          </Text>
        </View>
      </View>
    </Actionable>
  );
}
```

### Disabled State
```typescript
import { Actionable, Text, Icon } from 'reshaped';
import { TrashIcon } from './icons';

function DisabledActionable() {
  return (
    <Actionable
      as="button"
      disabled
      onClick={() => console.log('This won\\'t execute')}
    >
      <Icon svg={TrashIcon} />
      <Text>Delete (Unavailable)</Text>
    </Actionable>
  );
}
```

## Element Types
- **button**: Standard button element with button semantics
- **a**: Anchor element for navigation
- **div**: Generic container with custom interaction
- **Custom Component**: Any React component with actionable behavior

## Accessibility Features
- Proper ARIA attributes based on element type
- Keyboard navigation support (Enter/Space)
- Focus management and indicators
- Screen reader compatibility
- Disabled state handling

## Event Handling
- Normalized click event handling
- Keyboard event support (Enter/Space)
- Event propagation control
- Custom event handlers

## Use Cases
- Creating consistent interactive elements
- Wrapping complex content in clickable containers
- Building custom buttons and links
- Implementing card-based navigation
- Unified interaction patterns

## Related Components
- **Button**: Styled button components
- **Link**: Navigation-specific links
- **Card**: Container components that may need interaction