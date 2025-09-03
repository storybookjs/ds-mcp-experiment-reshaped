# Dismissible Component

## Overview
The Dismissible component provides a dismissible container with an optional close button, commonly used for notifications, alerts, banners, and media overlays with flexible styling options.

## Key Features
- Optional close button
- Custom close button styling
- Flexible content layout
- Event handling for dismissal
- Accessibility support
- Multiple layout variants

## Props Interface
```typescript
type DismissibleProps = {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  onClose?: () => void;
  hideCloseButton?: boolean;
  variant?: 'default' | 'media';
  closeAriaLabel?: string;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Dismissible Alert
```typescript
import { Dismissible, Text, View } from 'reshaped';
import { useState } from 'react';

function DismissibleAlert() {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;
  
  return (
    <Dismissible
      onClose={() => setVisible(false)}
      closeAriaLabel="Close notification"
    >
      <View padding={4} gap={2}>
        <Text variant="title-6" weight="medium">
          New Feature Available!
        </Text>
        <Text variant="body-3">
          Check out our latest feature that makes your workflow even better.
        </Text>
      </View>
    </Dismissible>
  );
}
```

### Media Dismissible
```typescript
import { Dismissible, Image, View } from 'reshaped';
import { useState } from 'react';

function DismissibleMedia() {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;
  
  return (
    <Dismissible
      variant="media"
      onClose={() => setVisible(false)}
      closeAriaLabel="Close image"
    >
      <Image 
        src="/banner-image.jpg"
        aspectRatio="16/9"
        alt="Promotional banner"
      />
    </Dismissible>
  );
}
```

### Custom Dismissible Banner
```typescript
import { Dismissible, Text, View, Button } from 'reshaped';
import { useState } from 'react';

function CustomBanner() {
  const [dismissed, setDismissed] = useState(false);
  
  if (dismissed) return null;
  
  return (
    <View 
      padding={4}
      style={{ backgroundColor: 'var(--rs-color-background-primary-faded)' }}
    >
      <Dismissible
        onClose={() => setDismissed(true)}
        align="center"
        closeAriaLabel="Dismiss banner"
      >
        <View direction="row" align="center" gap={4} grow>
          <View gap={1} grow>
            <Text variant="body-2" weight="medium">
              🎉 Limited Time Offer
            </Text>
            <Text variant="body-3">
              Get 50% off your first month. Use code WELCOME50 at checkout.
            </Text>
          </View>
          <Button size="small" color="primary">
            Claim Offer
          </Button>
        </View>
      </Dismissible>
    </View>
  );
}
```

### Toast-like Dismissible
```typescript
import { Dismissible, Text, View, Icon } from 'reshaped';
import { useState, useEffect } from 'react';
import { CheckIcon } from './icons';

function DismissibleToast() {
  const [visible, setVisible] = useState(true);
  
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);
  
  if (!visible) return null;
  
  return (
    <View 
      position="fixed"
      style={{ 
        top: '20px', 
        right: '20px',
        zIndex: 1000,
        backgroundColor: 'var(--rs-color-background-positive)',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <Dismissible
        onClose={() => setVisible(false)}
        closeAriaLabel="Close success message"
      >
        <View direction="row" align="center" gap={3} padding={4}>
          <Icon svg={CheckIcon} color="positive" />
          <View gap={1}>
            <Text variant="body-2" weight="medium">
              Success!
            </Text>
            <Text variant="body-3">
              Your changes have been saved.
            </Text>
          </View>
        </View>
      </Dismissible>
    </View>
  );
}
```

### Without Close Button
```typescript
import { Dismissible, Text, View, Button } from 'reshaped';
import { useState } from 'react';

function CustomDismissible() {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;
  
  return (
    <Dismissible hideCloseButton>
      <View direction="row" justify="space-between" align="center" padding={4} gap={4}>
        <View gap={1}>
          <Text variant="body-2" weight="medium">
            Cookie Consent
          </Text>
          <Text variant="body-3">
            We use cookies to improve your experience.
          </Text>
        </View>
        <View direction="row" gap={2}>
          <Button 
            size="small" 
            variant="outline"
            onClick={() => setVisible(false)}
          >
            Decline
          </Button>
          <Button 
            size="small"
            onClick={() => setVisible(false)}
          >
            Accept
          </Button>
        </View>
      </View>
    </Dismissible>
  );
}
```

## Variants
- **default**: Standard dismissible with default close button styling
- **media**: Optimized for media content with overlay-style close button

## Alignment Options
- **start**: Close button aligned to start of container
- **center**: Close button centered
- **end**: Close button aligned to end of container

## Accessibility
- ARIA label support for close button
- Keyboard navigation (Enter/Space to close)
- Screen reader announcements
- Focus management after dismissal

## Related Components
- **Alert**: Persistent notification messages
- **Toast**: Temporary notification system
- **Button**: Close button implementation