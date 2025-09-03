# Tabs Component

## Overview
The Tabs component is a fully accessible tabbed interface that allows users to switch between different panels of content using keyboard navigation and mouse interaction.

## Key Features
- Accessible tab navigation
- Keyboard navigation support
- Customizable tab triggers
- Content panel management
- Flexible styling options
- Compound component architecture

## Props Interface
```typescript
type TabsProps = {
  children: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Tabs
```typescript
import { Tabs, Tab, TabPanel, Text, View } from 'reshaped';

function BasicTabs() {
  return (
    <Tabs defaultValue="profile">
      <Tabs.List>
        <Tab value="profile">Profile</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="billing">Billing</Tab>
      </Tabs.List>
      
      <TabPanel value="profile">
        <View padding={4} gap={3}>
          <Text variant="title-5">Profile Information</Text>
          <Text>Manage your personal information and preferences.</Text>
        </View>
      </TabPanel>
      
      <TabPanel value="settings">
        <View padding={4} gap={3}>
          <Text variant="title-5">Account Settings</Text>
          <Text>Configure your account settings and privacy options.</Text>
        </View>
      </TabPanel>
      
      <TabPanel value="billing">
        <View padding={4} gap={3}>
          <Text variant="title-5">Billing & Subscription</Text>
          <Text>Manage your subscription and payment methods.</Text>
        </View>
      </TabPanel>
    </Tabs>
  );
}
```

### Controlled Tabs
```typescript
import { Tabs, Tab, TabPanel, Text, View } from 'reshaped';
import { useState } from 'react';

function ControlledTabs() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  return (
    <View gap={4}>
      <Text>Current tab: {activeTab}</Text>
      
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tab value="dashboard">Dashboard</Tab>
          <Tab value="analytics">Analytics</Tab>
          <Tab value="reports">Reports</Tab>
        </Tabs.List>
        
        <TabPanel value="dashboard">
          <View padding={4}>
            <Text variant="title-5">Dashboard</Text>
            <Text>Your main dashboard with key metrics.</Text>
          </View>
        </TabPanel>
        
        <TabPanel value="analytics">
          <View padding={4}>
            <Text variant="title-5">Analytics</Text>
            <Text>Detailed analytics and insights.</Text>
          </View>
        </TabPanel>
        
        <TabPanel value="reports">
          <View padding={4}>
            <Text variant="title-5">Reports</Text>
            <Text>Generate and view reports.</Text>
          </View>
        </TabPanel>
      </Tabs>
    </View>
  );
}
```

### Vertical Tabs
```typescript
import { Tabs, Tab, TabPanel } from 'reshaped';

function VerticalTabs() {
  return (
    <Tabs orientation="vertical" defaultValue="general">
      <Tabs.List>
        <Tab value="general">General</Tab>
        <Tab value="security">Security</Tab>
        <Tab value="notifications">Notifications</Tab>
        <Tab value="advanced">Advanced</Tab>
      </Tabs.List>
      
      <View>
        <TabPanel value="general">General settings content</TabPanel>
        <TabPanel value="security">Security settings content</TabPanel>
        <TabPanel value="notifications">Notification settings content</TabPanel>
        <TabPanel value="advanced">Advanced settings content</TabPanel>
      </View>
    </Tabs>
  );
}
```

## Compound Components
- **Tabs.List**: Container for tab triggers
- **Tab**: Individual tab trigger button
- **TabPanel**: Content panel for each tab

## Accessibility
- Full keyboard navigation (Arrow keys, Home, End)
- ARIA tablist, tab, and tabpanel roles
- Screen reader announcements
- Focus management between tabs and panels
- Proper labeling and associations

## Keyboard Navigation
- **Arrow keys**: Navigate between tabs
- **Home/End**: Go to first/last tab
- **Tab**: Move focus to active panel
- **Enter/Space**: Activate focused tab

## Related Components
- **Button**: Tab trigger styling basis
- **View**: Panel content containers