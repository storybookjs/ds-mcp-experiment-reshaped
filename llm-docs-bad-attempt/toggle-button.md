# ToggleButton Component

## Overview
The ToggleButton component allows users to switch between checked and unchecked states, functioning as an interactive button with binary selection capability and visual state feedback.

## Key Features
- Binary toggle functionality
- Visual checked/unchecked states
- Icon and text content support
- Controlled and uncontrolled modes
- Accessibility compliance
- Custom styling options

## Props Interface
```typescript
type ToggleButtonProps = {
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'outline' | 'ghost';
  icon?: React.ReactElement;
  className?: string;
  attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};
```

## Usage Examples

### Basic Toggle Button
```typescript
import { ToggleButton, Icon } from 'reshaped';
import { useState } from 'react';
import { FavoriteIcon } from './icons';

function BasicToggleButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <ToggleButton
      checked={isFavorite}
      onChange={setIsFavorite}
      icon={<Icon svg={FavoriteIcon} />}
    >
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </ToggleButton>
  );
}
```

### Icon-Only Toggle Buttons
```typescript
import { ToggleButton, Icon, View } from 'reshaped';
import { useState } from 'react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from './icons';

function TextFormattingToggles() {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false
  });
  
  const toggleFormat = (format: keyof typeof formatting) => {
    setFormatting(prev => ({
      ...prev,
      [format]: !prev[format]
    }));
  };
  
  return (
    <View direction="row" gap={1}>
      <ToggleButton
        checked={formatting.bold}
        onChange={() => toggleFormat('bold')}
        variant="outline"
        size="small"
        icon={<Icon svg={BoldIcon} />}
        aria-label="Bold"
      />
      <ToggleButton
        checked={formatting.italic}
        onChange={() => toggleFormat('italic')}
        variant="outline"
        size="small"
        icon={<Icon svg={ItalicIcon} />}
        aria-label="Italic"
      />
      <ToggleButton
        checked={formatting.underline}
        onChange={() => toggleFormat('underline')}
        variant="outline"
        size="small"
        icon={<Icon svg={UnderlineIcon} />}
        aria-label="Underline"
      />
    </View>
  );
}
```

### View Mode Toggle
```typescript
import { ToggleButton, Icon, View, Text } from 'reshaped';
import { useState } from 'react';
import { GridIcon, ListIcon } from './icons';

function ViewModeToggle() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  return (
    <View gap={4}>
      <View direction="row" align="center" gap={3}>
        <Text>View mode:</Text>
        <View direction="row" gap={1}>
          <ToggleButton
            checked={viewMode === 'grid'}
            onChange={() => setViewMode('grid')}
            variant="outline"
            icon={<Icon svg={GridIcon} />}
          >
            Grid
          </ToggleButton>
          <ToggleButton
            checked={viewMode === 'list'}
            onChange={() => setViewMode('list')}
            variant="outline"
            icon={<Icon svg={ListIcon} />}
          >
            List
          </ToggleButton>
        </View>
      </View>
      
      <Text color="neutral-faded">
        Current view: {viewMode}
      </Text>
    </View>
  );
}
```

## Visual States
- **Unchecked**: Default/inactive appearance
- **Checked**: Active/selected appearance with highlighted styling
- **Hover**: Interactive hover feedback
- **Disabled**: Non-interactive state with reduced opacity

## Accessibility
- Proper button role and ARIA attributes
- Screen reader announcements for state changes
- Keyboard navigation support (Enter/Space)
- Focus indicators and management
- ARIA pressed attribute for toggle state

## Related Components
- **Button**: Base interactive component
- **Switch**: Alternative toggle for settings
- **ToggleButtonGroup**: Container for multiple toggle buttons