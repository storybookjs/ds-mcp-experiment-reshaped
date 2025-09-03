# Accordion Component

## Overview
The Accordion component is a collapsible content container that allows users to expand and collapse sections with accessible keyboard navigation and customizable trigger/content areas.

## Key Features
- Expandable/collapsible content sections
- Keyboard navigation support
- Single or multiple section expansion
- Custom trigger and content rendering
- Accessibility compliance
- Animation transitions

## Props Interface
```typescript
type AccordionProps = {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultExpandedItems?: string[];
  expandedItems?: string[];
  onExpandedItemsChange?: (items: string[]) => void;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};

type AccordionItemProps = {
  children: React.ReactNode;
  value: string;
  trigger: React.ReactNode;
  disabled?: boolean;
};
```

## Usage Examples

### Basic Accordion
```typescript
import { Accordion, Text, View } from 'reshaped';

function BasicAccordion() {
  return (
    <Accordion>
      <Accordion.Item 
        value="section1"
        trigger="What is your return policy?"
      >
        <View padding={4}>
          <Text>
            We offer a 30-day return policy for all items in their original condition. 
            Please contact our support team to initiate a return.
          </Text>
        </View>
      </Accordion.Item>
      
      <Accordion.Item 
        value="section2"
        trigger="How long does shipping take?"
      >
        <View padding={4}>
          <Text>
            Standard shipping typically takes 3-5 business days. 
            Express shipping options are available at checkout.
          </Text>
        </View>
      </Accordion.Item>
      
      <Accordion.Item 
        value="section3"
        trigger="Do you ship internationally?"
      >
        <View padding={4}>
          <Text>
            Yes, we ship to most countries worldwide. 
            International shipping rates and times vary by location.
          </Text>
        </View>
      </Accordion.Item>
    </Accordion>
  );
}
```

### Controlled Accordion
```typescript
import { Accordion, Text, View, Button } from 'reshaped';
import { useState } from 'react';

function ControlledAccordion() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['faq1']);
  
  const expandAll = () => {
    setExpandedItems(['faq1', 'faq2', 'faq3']);
  };
  
  const collapseAll = () => {
    setExpandedItems([]);
  };
  
  return (
    <View gap={4}>
      <View direction="row" gap={2}>
        <Button onClick={expandAll} size="small" variant="outline">
          Expand All
        </Button>
        <Button onClick={collapseAll} size="small" variant="outline">
          Collapse All
        </Button>
      </View>
      
      <Accordion
        expandedItems={expandedItems}
        onExpandedItemsChange={setExpandedItems}
        allowMultiple
      >
        <Accordion.Item 
          value="faq1"
          trigger="How do I create an account?"
        >
          <View padding={4}>
            <Text>Click the 'Sign Up' button and fill out the registration form.</Text>
          </View>
        </Accordion.Item>
        
        <Accordion.Item 
          value="faq2"
          trigger="Can I change my password?"
        >
          <View padding={4}>
            <Text>Yes, go to Account Settings and click 'Change Password'.</Text>
          </View>
        </Accordion.Item>
        
        <Accordion.Item 
          value="faq3"
          trigger="How do I delete my account?"
        >
          <View padding={4}>
            <Text>Contact our support team to request account deletion.</Text>
          </View>
        </Accordion.Item>
      </Accordion>
    </View>
  );
}
```

### Custom Trigger Accordion
```typescript
import { Accordion, Text, View, Icon } from 'reshaped';
import { ChevronDownIcon, UserIcon, SettingsIcon, HelpIcon } from './icons';

function CustomTriggerAccordion() {
  return (
    <Accordion>
      <Accordion.Item 
        value="profile"
        trigger={
          <View direction="row" align="center" gap={3} padding={3}>
            <Icon svg={UserIcon} />
            <Text weight="medium">Profile Settings</Text>
          </View>
        }
      >
        <View padding={4} gap={3}>
          <Text>Manage your profile information and preferences.</Text>
        </View>
      </Accordion.Item>
      
      <Accordion.Item 
        value="account"
        trigger={
          <View direction="row" align="center" gap={3} padding={3}>
            <Icon svg={SettingsIcon} />
            <Text weight="medium">Account Settings</Text>
          </View>
        }
      >
        <View padding={4} gap={3}>
          <Text>Configure your account settings and security options.</Text>
        </View>
      </Accordion.Item>
      
      <Accordion.Item 
        value="help"
        trigger={
          <View direction="row" align="center" gap={3} padding={3}>
            <Icon svg={HelpIcon} />
            <Text weight="medium">Help & Support</Text>
          </View>
        }
      >
        <View padding={4} gap={3}>
          <Text>Find answers to common questions and contact support.</Text>
        </View>
      </Accordion.Item>
    </Accordion>
  );
}
```

## Expansion Modes
- **Single**: Only one section can be expanded at a time
- **Multiple**: Multiple sections can be expanded simultaneously

## Keyboard Navigation
- Tab/Shift+Tab to navigate between triggers
- Enter/Space to expand/collapse sections
- Arrow keys for trigger navigation

## Accessibility
- ARIA expanded/collapsed states
- Screen reader section announcements
- Focus management between triggers
- Semantic button/region structure

## Related Components
- **View**: Content area containers
- **Text**: Content within accordion sections
- **Icon**: Expansion state indicators