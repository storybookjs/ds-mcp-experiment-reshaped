# ToggleButtonGroup Component

## Overview
The ToggleButtonGroup component is a container for toggle buttons that manages selection state and provides keyboard navigation for single or multiple selection modes.

## Key Features
- Single and multiple selection modes
- Keyboard navigation between buttons
- Group state management
- Flexible layout options
- Accessibility enhancements
- Selection validation

## Props Interface
```typescript
type ToggleButtonGroupProps = {
  children: React.ReactNode;
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  mode?: 'single' | 'multiple';
  required?: boolean;
  direction?: 'row' | 'column';
  gap?: Responsive<number>;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Single Selection Group
```typescript
import { ToggleButtonGroup, ToggleButton, FormControl, Icon } from 'reshaped';
import { useState } from 'react';
import { SmallIcon, MediumIcon, LargeIcon } from './icons';

function SizeSelectionGroup() {
  const [selectedSize, setSelectedSize] = useState<string>('medium');
  
  return (
    <FormControl
      label="Size"
      helperText="Select your preferred size"
    >
      <ToggleButtonGroup
        value={selectedSize}
        onChange={setSelectedSize}
        mode="single"
        direction="row"
        gap={1}
      >
        <ToggleButton 
          value="small"
          icon={<Icon svg={SmallIcon} />}
        >
          Small
        </ToggleButton>
        <ToggleButton 
          value="medium"
          icon={<Icon svg={MediumIcon} />}
        >
          Medium
        </ToggleButton>
        <ToggleButton 
          value="large"
          icon={<Icon svg={LargeIcon} />}
        >
          Large
        </ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  );
}
```

### Multiple Selection Group
```typescript
import { ToggleButtonGroup, ToggleButton, FormControl, Text, View } from 'reshaped';
import { useState } from 'react';

function SkillsSelectionGroup() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['react']);
  
  return (
    <View gap={4}>
      <FormControl
        label="Skills"
        helperText="Select all applicable skills"
      >
        <ToggleButtonGroup
          value={selectedSkills}
          onChange={setSelectedSkills}
          mode="multiple"
          direction="row"
          gap={2}
        >
          <ToggleButton value="react">React</ToggleButton>
          <ToggleButton value="typescript">TypeScript</ToggleButton>
          <ToggleButton value="nodejs">Node.js</ToggleButton>
          <ToggleButton value="python">Python</ToggleButton>
          <ToggleButton value="design">Design</ToggleButton>
        </ToggleButtonGroup>
      </FormControl>
      
      <Text variant="body-3" color="neutral-faded">
        Selected: {selectedSkills.join(', ') || 'None'}
      </Text>
    </View>
  );
}
```

### Filter Options Group
```typescript
import { ToggleButtonGroup, ToggleButton, Icon, View, Text } from 'reshaped';
import { useState } from 'react';
import { FilterIcon, SortIcon, SearchIcon } from './icons';

function FilterOptionsGroup() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  return (
    <View gap={4}>
      <View direction="row" align="center" gap={3}>
        <Text variant="body-2" weight="medium">Filters:</Text>
        <ToggleButtonGroup
          value={activeFilters}
          onChange={setActiveFilters}
          mode="multiple"
          direction="row"
          gap={1}
        >
          <ToggleButton 
            value="recent"
            variant="outline"
            size="small"
          >
            Recent
          </ToggleButton>
          <ToggleButton 
            value="popular"
            variant="outline"
            size="small"
          >
            Popular
          </ToggleButton>
          <ToggleButton 
            value="trending"
            variant="outline"
            size="small"
          >
            Trending
          </ToggleButton>
          <ToggleButton 
            value="bookmarked"
            variant="outline"
            size="small"
          >
            Bookmarked
          </ToggleButton>
        </ToggleButtonGroup>
      </View>
      
      {activeFilters.length > 0 && (
        <Text variant="body-3" color="neutral-faded">
          Active filters: {activeFilters.join(', ')}
        </Text>
      )}
    </View>
  );
}
```

## Selection Modes
- **single**: Only one button can be selected at a time (radio-like behavior)
- **multiple**: Multiple buttons can be selected simultaneously (checkbox-like behavior)

## Keyboard Navigation
- Arrow keys navigate between buttons within the group
- Space/Enter toggles the focused button
- Tab moves focus to/from the group
- Home/End navigate to first/last button

## Accessibility
- ARIA roles for button groups
- Keyboard navigation support
- Screen reader announcements for selection changes
- Focus management within the group
- Proper labeling and descriptions

## Related Components
- **ToggleButton**: Individual toggle button components
- **RadioGroup**: Alternative for single selection
- **CheckboxGroup**: Alternative for multiple selection