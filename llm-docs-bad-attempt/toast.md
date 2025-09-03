# Toast Component

## Overview
The Toast component displays temporary messages to users in various positions on the screen with customizable styling, actions, and automatic dismissal for non-intrusive notifications.

## Key Features
- Temporary message display
- Multiple positioning options
- Auto-dismissal with timers
- Action buttons support
- Color variants for different message types
- Animation and transitions
- Accessibility support

## Props Interface
```typescript
type ToastProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
  duration?: number;
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: 'neutral' | 'positive' | 'critical' | 'warning';
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Toast
```typescript
import { Toast, Button, Text, View } from 'reshaped';
import { useState } from 'react';

function BasicToast() {
  const [showToast, setShowToast] = useState(false);
  
  return (
    <View gap={4}>
      <Button onClick={() => setShowToast(true)}>
        Show Toast
      </Button>
      
      <Toast
        visible={showToast}
        onClose={() => setShowToast(false)}
        duration={3000}
        position="top-right"
      >
        <Text>Your changes have been saved successfully!</Text>
      </Toast>
    </View>
  );
}
```

### Toast with Actions
```typescript
import { Toast, Button, Text, View } from 'reshaped';
import { useState } from 'react';

function ActionToast() {
  const [showToast, setShowToast] = useState(false);
  
  const handleUndo = () => {
    console.log('Undo action triggered');
    setShowToast(false);
  };
  
  return (
    <View gap={4}>
      <Button onClick={() => setShowToast(true)}>
        Delete Item
      </Button>
      
      <Toast
        visible={showToast}
        onClose={() => setShowToast(false)}
        duration={5000}
        color="critical"
        position="bottom"
        action={{
          label: 'Undo',
          onClick: handleUndo
        }}
      >
        <Text>Item deleted successfully</Text>
      </Toast>
    </View>
  );
}
```

### Toast Notifications System
```typescript
import { Toast, Button, View } from 'reshaped';
import { useState } from 'react';

function ToastSystem() {
  const [toasts, setToasts] = useState<Array<{
    id: string;
    message: string;
    color: 'positive' | 'critical' | 'warning';
    visible: boolean;
  }>>([]);
  
  const showToast = (message: string, color: 'positive' | 'critical' | 'warning') => {
    const id = Math.random().toString(36);
    const newToast = { id, message, color, visible: true };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };
  
  const hideToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  
  return (
    <View gap={4}>
      <View direction="row" gap={2}>
        <Button 
          onClick={() => showToast('Success message!', 'positive')}
          color="positive"
        >
          Show Success
        </Button>
        <Button 
          onClick={() => showToast('Error occurred!', 'critical')}
          color="critical"
        >
          Show Error
        </Button>
        <Button 
          onClick={() => showToast('Warning message!', 'warning')}
          color="warning"
        >
          Show Warning
        </Button>
      </View>
      
      {toasts.map((toast, index) => (
        <Toast
          key={toast.id}
          visible={toast.visible}
          onClose={() => hideToast(toast.id)}
          color={toast.color}
          position="top-right"
          duration={3000}
          style={{ top: `${20 + index * 80}px` }}
        >
          <Text>{toast.message}</Text>
        </Toast>
      ))}
    </View>
  );
}
```

## Toast Types
- **neutral**: General information messages
- **positive**: Success confirmations
- **critical**: Error messages and failures
- **warning**: Cautionary alerts

## Positioning
- **top/bottom**: Centered horizontally
- **top-left/top-right**: Corner positioning
- **bottom-left/bottom-right**: Bottom corner positioning

## Accessibility
- ARIA live regions for screen reader announcements
- Focus management for actionable toasts
- Keyboard dismiss support
- Reduced motion respect

## Related Components
- **Alert**: Persistent notification banners
- **Modal**: Modal dialogs for important messages