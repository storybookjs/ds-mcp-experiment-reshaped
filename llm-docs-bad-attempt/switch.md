# Switch Component

## Overview
The Switch component is a toggle switch that allows users to select between two states (on/off, enabled/disabled) with visual feedback and label support for binary choices.

## Key Features
- Binary state toggling
- Visual on/off indication
- Label and description support
- Controlled and uncontrolled modes
- Accessibility compliance
- Custom styling options

## Props Interface
```typescript
type SwitchProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  className?: string;
  attributes?: React.InputHTMLAttributes<HTMLInputElement>;
};
```

## Usage Examples

### Basic Switch
```typescript
import { Switch, FormControl } from 'reshaped';
import { useState } from 'react';

function BasicSwitch() {
  const [enabled, setEnabled] = useState(false);
  
  return (
    <FormControl
      label="Email Notifications"
      helperText="Receive email updates about your account"
    >
      <Switch
        checked={enabled}
        onChange={setEnabled}
      >
        {enabled ? 'Enabled' : 'Disabled'}
      </Switch>
    </FormControl>
  );
}
```

### Settings Panel
```typescript
import { Switch, View, Text, Card } from 'reshaped';
import { useState } from 'react';

function SettingsPanel() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false
  });
  
  const updateSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <Card padding={5}>
      <View gap={4}>
        <Text variant="title-5">Preferences</Text>
        
        <View gap={3}>
          <View direction="row" justify="space-between" align="center">
            <View gap={1}>
              <Text>Push Notifications</Text>
              <Text variant="body-3" color="neutral-faded">
                Get notified about important updates
              </Text>
            </View>
            <Switch
              checked={settings.notifications}
              onChange={() => updateSetting('notifications')}
            />
          </View>
          
          <View direction="row" justify="space-between" align="center">
            <View gap={1}>
              <Text>Dark Mode</Text>
              <Text variant="body-3" color="neutral-faded">
                Use dark theme throughout the app
              </Text>
            </View>
            <Switch
              checked={settings.darkMode}
              onChange={() => updateSetting('darkMode')}
            />
          </View>
          
          <View direction="row" justify="space-between" align="center">
            <View gap={1}>
              <Text>Auto-save</Text>
              <Text variant="body-3" color="neutral-faded">
                Automatically save your work
              </Text>
            </View>
            <Switch
              checked={settings.autoSave}
              onChange={() => updateSetting('autoSave')}
              size="small"
            />
          </View>
        </View>
      </View>
    </Card>
  );
}
```

## Accessibility
- Proper switch role and ARIA attributes
- Keyboard navigation support (Space/Enter to toggle)
- Screen reader state announcements
- Focus indicators and management
- Label association

## Design Tokens
- Theme-aware colors for on/off states
- Smooth toggle animations
- Consistent sizing across variants
- Focus ring styling

## Related Components
- **Checkbox**: Alternative for binary choices
- **ToggleButton**: Button-style toggles