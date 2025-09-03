# Hotkey Component

## Overview
The Hotkey component is a visual representation of keyboard shortcuts that displays keys in a styled kbd element with optional active state styling for clear keyboard shortcut indication.

## Key Features
- Visual keyboard shortcut representation
- Multiple key combinations
- Active state styling
- Cross-platform key display
- Customizable appearance
- Semantic markup

## Props Interface
```typescript
type HotkeyProps = {
  keys: string | string[];
  active?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outline';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLElement>;
};
```

## Usage Examples

### Basic Hotkey Display
```typescript
import { Hotkey, Text, View } from 'reshaped';

function BasicHotkeyExample() {
  return (
    <View direction="row" align="center" gap={2}>
      <Text>Save file:</Text>
      <Hotkey keys={['Cmd', 'S']} />
    </View>
  );
}
```

### Multiple Key Combinations
```typescript
import { Hotkey, View, Text } from 'reshaped';

function MultipleHotkeys() {
  const shortcuts = [
    { action: 'Copy', keys: ['Cmd', 'C'] },
    { action: 'Paste', keys: ['Cmd', 'V'] },
    { action: 'Undo', keys: ['Cmd', 'Z'] },
    { action: 'Find', keys: ['Cmd', 'F'] }
  ];

  return (
    <View gap={3}>
      {shortcuts.map(({ action, keys }) => (
        <View key={action} direction="row" justify="space-between">
          <Text>{action}</Text>
          <Hotkey keys={keys} />
        </View>
      ))}
    </View>
  );
}
```

### Active State
```typescript
import { Hotkey } from 'reshaped';
import { useState, useEffect } from 'react';

function ActiveHotkeyExample() {
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key === 's') {
        event.preventDefault();
        setIsActive(true);
        setTimeout(() => setIsActive(false), 200);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Hotkey keys={['Cmd', 'S']} active={isActive} />
  );
}
```

## Platform Considerations
- Automatically displays appropriate modifier keys (Cmd on Mac, Ctrl on Windows)
- Handles platform-specific key representations
- Responsive to system preferences

## Accessibility
- Semantic `kbd` element usage
- Screen reader friendly key descriptions
- Proper contrast ratios
- Focus indicators when applicable

## Design Tokens
- Consistent key styling and spacing
- Theme-aware colors and borders
- Typography scale integration
- Active state animations

## Related Components
- **Text**: Labels and descriptions alongside hotkeys
- **Tooltip**: Hotkey hints in tooltips