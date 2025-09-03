# ActionBar

**Brief Description**: A positioned container component that displays actionable content at fixed positions on the screen or within containers.

**Keywords**: Action Bar, Toolbar, Fixed Position, Floating Actions, Button Container, Overlay, Positioning, Navigation

**Usage Description**: 

The ActionBar component provides a versatile way to display actions and controls at strategic positions on the screen or within containers. It's particularly useful for creating floating action buttons, toolbars, notification bars, or any interface elements that need to maintain visibility regardless of scroll position. The component supports multiple positioning strategies including relative, absolute, and fixed positioning, with built-in elevation and responsive offset capabilities.

ActionBar is ideal for scenarios where you need persistent access to primary actions, such as save/cancel buttons in forms, navigation controls in media players, or quick actions in data tables. It automatically handles visual elevation when needed and provides smooth transitions between active and inactive states. The component's responsive design ensures optimal placement across different screen sizes.

The component integrates seamlessly with other reshaped components and supports theming through the design system's elevation and spacing tokens. It's particularly effective when combined with Button components for action-oriented interfaces.

## Props Documentation

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `active` | `boolean` | Optional | `undefined` | Controls whether the ActionBar is visible and positioned. When `false` or `undefined`, the bar translates out of view |
| `position` | `"top" \| "top-end" \| "top-start" \| "bottom" \| "bottom-start" \| "bottom-end"` | Optional | `"bottom"` | Determines where the ActionBar is positioned on the screen or container |
| `positionType` | `G.Responsive<"relative" \| "absolute" \| "fixed">` | Optional | `"relative"` | Sets the CSS positioning strategy. Supports responsive values |
| `offset` | `G.Responsive<number>` | Optional | `undefined` | Adds spacing around the ActionBar when using absolute or fixed positioning. Supports responsive values |
| `elevated` | `boolean` | Optional | `undefined` | Applies visual elevation with shadow and elevated background color |
| `padding` | `G.Responsive<number>` | Optional | `undefined` | Sets uniform padding on all sides using design system spacing scale |
| `paddingBlock` | `G.Responsive<number>` | Optional | `undefined` | Sets vertical padding (top and bottom) using design system spacing scale |
| `paddingInline` | `G.Responsive<number>` | Optional | `undefined` | Sets horizontal padding (left and right) using design system spacing scale |
| `children` | `React.ReactNode` | Optional | `undefined` | Content to render inside the ActionBar |
| `className` | `G.ClassName` | Optional | `undefined` | Additional CSS classes to apply to the component |
| `attributes` | `G.Attributes<"div">` | Optional | `undefined` | Additional HTML attributes to apply to the root div element |

## Code Examples

### Basic ActionBar
```tsx
import { ActionBar, Button } from 'reshaped';

// Simple bottom-positioned action bar
<ActionBar>
  <Button>Save</Button>
  <Button variant="outline">Cancel</Button>
</ActionBar>
```

### Fixed Position with Toggle
```tsx
import { ActionBar, Button } from 'reshaped';
import { useState } from 'react';

function App() {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>
        Toggle Actions
      </Button>
      
      <ActionBar 
        active={isActive} 
        positionType="fixed" 
        position="top-end"
        padding={2}
      >
        <Button>Action 1</Button>
        <Button variant="outline">Action 2</Button>
      </ActionBar>
    </>
  );
}
```

## Related Components

- **Button**: Primary component for actions within ActionBar. ActionBar is commonly used as a container for Button components
- **View**: Base layout component that ActionBar inherits padding props from. Often used as a wrapper for ActionBar content
- **Modal/Dialog**: ActionBar is frequently used within modals for form actions and confirmations
- **Drawer**: Similar positioning concepts, often used together for navigation and action patterns
- **Alert**: Shares similar positioning and elevation behaviors for notification scenarios

The ActionBar component is fundamental to creating consistent action interfaces and works seamlessly with the reshaped design system's spacing, elevation, and responsive design patterns.