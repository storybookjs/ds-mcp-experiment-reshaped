# Tabs

## Component Name
Tabs

## Brief Description
A tabbed interface component that organizes content into panels with corresponding navigable tabs.

## Keywords
Navigation, Tabs, Panels, Interface, Toggle, Selection, Content Organization, UI

## Usage Description

The Tabs component provides a standard tabbed interface for organizing content into discrete sections. It consists of a tab list for navigation and corresponding panels that display content based on the selected tab. The component is ideal for scenarios where you need to present related information in a space-efficient manner, such as settings interfaces, data dashboards, or documentation sections.

The component supports both controlled and uncontrolled usage patterns, making it flexible for various state management approaches. It automatically handles keyboard navigation, accessibility features, and provides smooth animated transitions between tabs. The component is particularly useful when you have multiple related pieces of content that users need to switch between without losing context.

The Tabs component follows WAI-ARIA standards for accessibility, ensuring proper screen reader support and keyboard navigation. It supports various visual styles through the variant prop, allowing it to fit seamlessly into different design contexts from subtle borderless tabs to prominent pill-style navigation.

## Props Documentation

### Tabs (Main Component)

#### `children` (React.ReactNode, optional)
The child components, typically Tabs.List and Tabs.Panel components.

#### `value` (string, optional) 
The currently selected tab value for controlled usage. When provided, the component operates in controlled mode and requires an onChange handler to update the selection.

#### `defaultValue` (string, optional)
The initially selected tab value for uncontrolled usage. Only used when `value` is not provided. The component will manage its own state internally.

#### `direction` ("column" | "row", optional, default: "row")
The layout direction of the tab list. "row" displays tabs horizontally, "column" displays tabs vertically.

#### `itemWidth` ("equal", optional)
When set to "equal", all tab items will have equal width regardless of their content length.

#### `variant` ("bordered" | "borderless" | "pills" | "pills-elevated", optional, default: "bordered")
The visual style of the tabs:
- "bordered": Default style with underline selection indicator
- "borderless": Clean style without borders or background
- "pills": Rounded pill-style tabs with background
- "pills-elevated": Pill-style tabs with shadow elevation

#### `size` ("medium" | "large", optional, default: "medium")
The size of the tab items, affecting padding and text size.

#### `name` (string, optional)
When provided, renders tabs as radio buttons within a form group, enabling form submission and native form handling.

#### `onChange` (function, optional)
Callback function called when tab selection changes. Receives an object with `value` (selected tab value) and `name` (if provided) properties.
```typescript
onChange?: (args: { value: string; name?: string }) => void
```

### Tabs.List

#### `children` (React.ReactNode, optional)
The tab items (Tabs.Item components) and any other content to display in the tab list.

#### `className` (string, optional)
Additional CSS class name to apply to the list container.

#### `attributes` (object, optional)
Additional HTML attributes to apply to the list container element.

### Tabs.Item

#### `value` (string, required)
Unique identifier for the tab item. This value is used to associate the tab with its corresponding panel and is passed to the onChange callback when selected.

#### `children` (React.ReactNode, optional)
The content to display in the tab button, typically text or other inline elements.

#### `icon` (IconProps["svg"], optional)
An icon component to display alongside or instead of the text content.

#### `href` (string, optional)
When provided, renders the tab as a link. The tab will not trigger onChange events when clicked if href is present and no onChange handler is provided.

#### `disabled` (boolean, optional, default: false)
Whether the tab item is disabled and cannot be selected.

#### `attributes` (object, optional)
Additional HTML attributes to apply to the tab item's container element.

### Tabs.Panel

#### `value` (string, required)
The value that associates this panel with its corresponding tab item. The panel is shown when this value matches the active tab value.

#### `children` (React.ReactNode, optional)
The content to display in the panel when it is active.

#### `className` (string, optional)
Additional CSS class name to apply to the panel container.

#### `attributes` (object, optional)
Additional HTML attributes to apply to the panel container element.

## Code Examples

### Basic Usage
```typescript
import { Tabs } from 'reshaped'

function BasicTabs() {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Item value="home">Home</Tabs.Item>
        <Tabs.Item value="about">About</Tabs.Item>
        <Tabs.Item value="contact">Contact</Tabs.Item>
      </Tabs.List>
      
      <Tabs.Panel value="home">
        <div>Welcome to our homepage!</div>
      </Tabs.Panel>
      <Tabs.Panel value="about">
        <div>Learn more about our company.</div>
      </Tabs.Panel>
      <Tabs.Panel value="contact">
        <div>Get in touch with us.</div>
      </Tabs.Panel>
    </Tabs>
  )
}
```

### Controlled Usage with State Management
```typescript
import { Tabs } from 'reshaped'
import { useState } from 'react'

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('dashboard')
  
  const handleTabChange = ({ value }) => {
    setActiveTab(value)
    // Additional logic like analytics tracking
    console.log('Tab changed to:', value)
  }
  
  return (
    <Tabs value={activeTab} onChange={handleTabChange}>
      <Tabs.List>
        <Tabs.Item value="dashboard">Dashboard</Tabs.Item>
        <Tabs.Item value="analytics">Analytics</Tabs.Item>
        <Tabs.Item value="settings">Settings</Tabs.Item>
      </Tabs.List>
      
      <Tabs.Panel value="dashboard">
        <div>Dashboard content with data visualizations</div>
      </Tabs.Panel>
      <Tabs.Panel value="analytics">
        <div>Analytics and reporting tools</div>
      </Tabs.Panel>
      <Tabs.Panel value="settings">
        <div>Application settings and preferences</div>
      </Tabs.Panel>
    </Tabs>
  )
}
```

### Tabs with Icons and Different Variants
```typescript
import { Tabs } from 'reshaped'
import { HomeIcon, SettingsIcon, UserIcon } from './icons'

function StyledTabs() {
  return (
    <Tabs variant="pills-elevated" size="large">
      <Tabs.List>
        <Tabs.Item value="profile" icon={UserIcon}>
          Profile
        </Tabs.Item>
        <Tabs.Item value="dashboard" icon={HomeIcon}>
          Dashboard
        </Tabs.Item>
        <Tabs.Item value="settings" icon={SettingsIcon} disabled>
          Settings
        </Tabs.Item>
      </Tabs.List>
      
      <Tabs.Panel value="profile">
        <div>User profile information and editing</div>
      </Tabs.Panel>
      <Tabs.Panel value="dashboard">
        <div>Main dashboard with overview widgets</div>
      </Tabs.Panel>
      <Tabs.Panel value="settings">
        <div>Settings panel (currently disabled)</div>
      </Tabs.Panel>
    </Tabs>
  )
}
```

### Vertical Tabs Layout
```typescript
import { Tabs } from 'reshaped'

function VerticalTabs() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs direction="column" variant="borderless">
        <Tabs.List>
          <Tabs.Item value="general">General</Tabs.Item>
          <Tabs.Item value="privacy">Privacy</Tabs.Item>
          <Tabs.Item value="notifications">Notifications</Tabs.Item>
          <Tabs.Item value="billing">Billing</Tabs.Item>
        </Tabs.List>
      </Tabs>
      
      <div>
        <Tabs.Panel value="general">
          <div>General settings and preferences</div>
        </Tabs.Panel>
        <Tabs.Panel value="privacy">
          <div>Privacy controls and data settings</div>
        </Tabs.Panel>
        <Tabs.Panel value="notifications">
          <div>Notification preferences and settings</div>
        </Tabs.Panel>
        <Tabs.Panel value="billing">
          <div>Billing information and subscription details</div>
        </Tabs.Panel>
      </div>
    </div>
  )
}
```

### Form Integration with Radio Button Behavior
```typescript
import { Tabs } from 'reshaped'

function FormTabs() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      const formData = new FormData(e.target)
      console.log('Selected tab:', formData.get('view-mode'))
    }}>
      <Tabs name="view-mode" defaultValue="grid">
        <Tabs.List>
          <Tabs.Item value="grid">Grid View</Tabs.Item>
          <Tabs.Item value="list">List View</Tabs.Item>
          <Tabs.Item value="card">Card View</Tabs.Item>
        </Tabs.List>
        
        <Tabs.Panel value="grid">
          <div>Grid layout for items</div>
        </Tabs.Panel>
        <Tabs.Panel value="list">
          <div>List layout for items</div>
        </Tabs.Panel>
        <Tabs.Panel value="card">
          <div>Card layout for items</div>
        </Tabs.Panel>
      </Tabs>
      
      <button type="submit">Save View Preference</button>
    </form>
  )
}
```

## Related Components

- **View**: Often used as containers within Tabs.Panel for proper spacing and layout
- **Text**: Used for tab labels and panel content
- **Icon**: Used with the icon prop on Tabs.Item for visual enhancement
- **Button**: Can be used within tab panels for interactive content
- **ScrollArea**: Can wrap tab panels when content exceeds available space
- **Actionable**: Used internally by Tabs.Item for button and link functionality

The Tabs component integrates seamlessly with the broader reshaped design system, following consistent styling patterns and accessibility standards. It works particularly well in conjunction with layout components like View for content organization and spacing.