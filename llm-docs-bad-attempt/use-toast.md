# useToast Hook

## Overview

The `useToast` hook is a React hook from the Reshaped design system that provides a simple and powerful way to display toast notifications. It returns methods to show and hide toast messages with full control over positioning, styling, and behavior. The hook must be used within a `ToastProvider` context and offers a programmatic API for creating temporary notifications that appear at various screen positions.

## Key Features

- **Programmatic Toast Management**: Show and hide toasts imperatively
- **Multiple Positioning Options**: 6 different screen positions (top, bottom, corners)
- **Customizable Timeouts**: Short, long, or custom timeout durations
- **Color Variants**: 6 semantic color options for different message types
- **Action Buttons**: Support for interactive buttons within toasts
- **Custom Content**: Full control over toast content with slots
- **Automatic Cleanup**: Built-in lifecycle management
- **Provider-based**: Context-driven architecture for nested components

## Hook Interface

```typescript
declare const useToast: () => {
    show: (toast: ShowProps) => string;
    hide: (id: string) => void;
    id: string;
};

type ShowProps = {
    // Content props
    title?: React.ReactNode;
    text?: React.ReactNode;
    children?: React.ReactNode;
    startSlot?: React.ReactNode;
    actionsSlot?: React.ReactNode;
    
    // Visual props
    size?: "small" | "medium" | "large";
    color?: "neutral" | "primary" | "critical" | "positive" | "warning" | "inverted";
    icon?: IconProps["svg"];
    
    // Behavior props
    timeout?: "short" | "long" | number; // 0 = no auto-dismiss
    position?: "top" | "top-end" | "top-start" | "bottom" | "bottom-start" | "bottom-end";
    
    // HTML props
    className?: string;
    attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## API Methods

### `show(toast: ShowProps): string`
Displays a new toast notification and returns a unique identifier string for the toast.

**Parameters:**
- `toast` - Configuration object containing toast properties
- Returns: Unique string ID for the created toast

### `hide(id: string): void`
Programmatically hides a specific toast by its ID.

**Parameters:**
- `id` - The unique identifier returned from the `show` method

### `id: string`
A unique identifier for the current toast context, useful for debugging and advanced use cases.

## Required Setup

The `useToast` hook requires the `ToastProvider` to be present in your component tree:

```typescript
import { ToastProvider } from 'reshaped';

function App() {
  return (
    <ToastProvider>
      <YourComponents />
    </ToastProvider>
  );
}
```

## Usage Examples

### Basic Toast Notification

```typescript
import { useToast, Button } from 'reshaped';

function BasicExample() {
  const toast = useToast();
  
  const showNotification = () => {
    toast.show({
      title: "Success!",
      text: "Your changes have been saved",
      color: "positive",
      timeout: "short"
    });
  };
  
  return (
    <Button onClick={showNotification}>
      Save Changes
    </Button>
  );
}
```

### Toast with Custom Actions

```typescript
import { useToast, Button } from 'reshaped';

function ActionToastExample() {
  const toast = useToast();
  
  const deleteItem = () => {
    const toastId = toast.show({
      title: "Item Deleted",
      text: "The item has been moved to trash",
      color: "critical",
      timeout: 0, // Don't auto-dismiss
      actionsSlot: [
        <Button 
          key="undo"
          variant="ghost" 
          onClick={() => {
            // Perform undo action
            undoDelete();
            toast.hide(toastId);
          }}
        >
          Undo
        </Button>,
        <Button 
          key="dismiss"
          variant="ghost"
          onClick={() => toast.hide(toastId)}
        >
          Dismiss
        </Button>
      ]
    });
  };
  
  const undoDelete = () => {
    toast.show({
      text: "Item restored successfully",
      color: "positive",
      timeout: "short"
    });
  };
  
  return (
    <Button color="critical" onClick={deleteItem}>
      Delete Item
    </Button>
  );
}
```

### Different Toast Positions

```typescript
import { useToast, Button, View } from 'reshaped';

function PositionExample() {
  const toast = useToast();
  
  const positions = [
    'top',
    'top-start', 
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end'
  ] as const;
  
  return (
    <View direction="row" gap={2} wrap>
      {positions.map(position => (
        <Button
          key={position}
          onClick={() => toast.show({
            text: `Toast from ${position}`,
            position,
            timeout: "long"
          })}
        >
          {position}
        </Button>
      ))}
    </View>
  );
}
```

### Toast with Custom Content and Icon

```typescript
import { useToast, Button, View, Image, Text } from 'reshaped';
import IconZap from 'reshaped/icons/Zap';

function CustomContentExample() {
  const toast = useToast();
  
  const showPromotion = () => {
    const toastId = toast.show({
      size: "large",
      color: "neutral",
      position: "bottom-start",
      timeout: 0,
      children: (
        <View gap={3} direction="row">
          <View aspectRatio={1}>
            <Image 
              height="60px" 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" 
              borderRadius="medium"
            />
          </View>
          <View.Item grow>
            <View gap={1}>
              <Text variant="body-2" weight="bold">
                New Feature Available!
              </Text>
              <Text variant="body-3">
                Check out our latest gradient tools for better designs.
              </Text>
              <Button 
                size="small"
                onClick={() => {
                  // Handle action
                  toast.hide(toastId);
                }}
              >
                Learn More
              </Button>
            </View>
          </View.Item>
        </View>
      )
    });
  };
  
  const showSimpleIcon = () => {
    toast.show({
      icon: IconZap,
      title: "Power Up!",
      text: "Your account has been upgraded",
      color: "warning",
      timeout: "long"
    });
  };
  
  return (
    <View gap={3}>
      <Button onClick={showPromotion}>
        Show Promotion Toast
      </Button>
      <Button onClick={showSimpleIcon}>
        Show Icon Toast
      </Button>
    </View>
  );
}
```

### Toast Notification System

```typescript
import { useToast, Button, View } from 'reshaped';
import { useState } from 'react';

function NotificationSystem() {
  const toast = useToast();
  const [activeToasts, setActiveToasts] = useState<Set<string>>(new Set());
  
  const showNotification = (type: 'success' | 'error' | 'warning' | 'info') => {
    const config = {
      success: {
        color: 'positive' as const,
        title: 'Success!',
        text: 'Operation completed successfully'
      },
      error: {
        color: 'critical' as const,
        title: 'Error',
        text: 'Something went wrong'
      },
      warning: {
        color: 'warning' as const,
        title: 'Warning',
        text: 'Please check your input'
      },
      info: {
        color: 'neutral' as const,
        title: 'Information',
        text: 'Here is some useful information'
      }
    };
    
    const toastId = toast.show({
      ...config[type],
      timeout: type === 'error' ? 0 : 'short', // Errors don't auto-dismiss
      actionsSlot: type === 'error' ? (
        <Button onClick={() => {
          toast.hide(toastId);
          setActiveToasts(prev => {
            const next = new Set(prev);
            next.delete(toastId);
            return next;
          });
        }}>
          Dismiss
        </Button>
      ) : undefined
    });
    
    setActiveToasts(prev => new Set(prev).add(toastId));
    
    // Auto-remove from tracking (except errors)
    if (type !== 'error') {
      setTimeout(() => {
        setActiveToasts(prev => {
          const next = new Set(prev);
          next.delete(toastId);
          return next;
        });
      }, 3000);
    }
  };
  
  const clearAll = () => {
    activeToasts.forEach(id => toast.hide(id));
    setActiveToasts(new Set());
  };
  
  return (
    <View gap={3}>
      <View direction="row" gap={2}>
        <Button color="positive" onClick={() => showNotification('success')}>
          Success
        </Button>
        <Button color="critical" onClick={() => showNotification('error')}>
          Error
        </Button>
        <Button color="warning" onClick={() => showNotification('warning')}>
          Warning
        </Button>
        <Button onClick={() => showNotification('info')}>
          Info
        </Button>
      </View>
      
      {activeToasts.size > 0 && (
        <Button variant="outline" onClick={clearAll}>
          Clear All ({activeToasts.size})
        </Button>
      )}
    </View>
  );
}
```

### Form Validation with Toast Feedback

```typescript
import { useToast, Button, TextField, View } from 'reshaped';
import { useState } from 'react';

function FormWithToastValidation() {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const validateAndSubmit = () => {
    const errors = [];
    
    if (!email) errors.push('Email is required');
    else if (!/\S+@\S+\.\S+/.test(email)) errors.push('Email is invalid');
    
    if (!password) errors.push('Password is required');
    else if (password.length < 8) errors.push('Password must be at least 8 characters');
    
    if (errors.length > 0) {
      toast.show({
        title: 'Validation Error',
        text: errors.join(', '),
        color: 'critical',
        timeout: 'long'
      });
      return;
    }
    
    // Simulate API call
    const loadingToastId = toast.show({
      text: 'Submitting...',
      color: 'neutral',
      timeout: 0
    });
    
    setTimeout(() => {
      toast.hide(loadingToastId);
      
      // Simulate random success/failure
      if (Math.random() > 0.3) {
        toast.show({
          title: 'Account Created!',
          text: 'Welcome to the platform',
          color: 'positive',
          timeout: 'long'
        });
      } else {
        toast.show({
          title: 'Registration Failed',
          text: 'Email already exists',
          color: 'critical',
          timeout: 0,
          actionsSlot: (
            <Button onClick={() => toast.show({
              text: 'Please try a different email address',
              timeout: 'short'
            })}>
              Help
            </Button>
          )
        });
      }
    }, 2000);
  };
  
  return (
    <View gap={4} maxWidth="300px">
      <TextField
        label="Email"
        value={email}
        onChange={setEmail}
        type="email"
      />
      <TextField
        label="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Button onClick={validateAndSubmit}>
        Create Account
      </Button>
    </View>
  );
}
```

## Use Cases and Best Practices

### When to Use Toast Notifications

- **Success Confirmations**: After successful operations (save, delete, create)
- **Error Messages**: For non-critical errors that don't require modal intervention
- **Status Updates**: Progress notifications and state changes
- **Undo Actions**: Providing quick access to reverse operations
- **System Notifications**: Background process completions

### Best Practices

1. **Keep Messages Concise**: Use clear, actionable language
2. **Choose Appropriate Colors**: Match color to message severity
3. **Set Appropriate Timeouts**: 
   - Success: 3-4 seconds (short)
   - Informational: 5-6 seconds (long)
   - Errors: No timeout (0) with dismiss action
4. **Position Strategically**: Consider user's attention and screen size
5. **Limit Simultaneous Toasts**: Avoid overwhelming the user
6. **Provide Actions When Useful**: Especially for undo operations

### Timeout Configuration

```typescript
// Predefined aliases
timeout: "short"  // ~3 seconds
timeout: "long"   // ~6 seconds

// Custom duration in milliseconds
timeout: 5000     // 5 seconds

// No auto-dismiss (requires manual hide)
timeout: 0
```

### Color Semantics

- **neutral**: General information, loading states
- **primary**: Brand-related notifications
- **positive**: Success messages, completions
- **critical**: Errors, failures, destructive actions
- **warning**: Cautions, validations, alerts
- **inverted**: High contrast notifications

## Performance Considerations

1. **Memory Management**: The hook automatically manages toast lifecycle and cleanup
2. **Rendering Optimization**: Toasts are rendered in portals to avoid layout thrashing
3. **Event Handling**: Use stable references for action handlers to prevent unnecessary re-renders
4. **Batch Operations**: Consider batching multiple related notifications

```typescript
// Good: Batch related notifications
const handleBulkOperation = () => {
  const results = performBulkAction();
  const successCount = results.filter(r => r.success).length;
  const errorCount = results.length - successCount;
  
  if (successCount > 0) {
    toast.show({
      text: `${successCount} items processed successfully`,
      color: "positive"
    });
  }
  
  if (errorCount > 0) {
    toast.show({
      text: `${errorCount} items failed to process`,
      color: "critical"
    });
  }
};
```

## Related Hooks

- **useFormControl**: For form validation feedback
- **useToggle**: For managing toast visibility state
- **useKeyboardMode**: For accessibility-aware toast interactions

## Related Components

- **ToastProvider**: Required context provider for the hook
- **Alert**: For persistent notification banners
- **Modal**: For critical messages requiring user attention
- **Popover**: For contextual information displays
- **Tooltip**: For hover-based informational content

## Migration Notes

If migrating from other toast libraries:

```typescript
// From react-hot-toast
toast.success('Success!') 
// becomes
toast.show({ text: 'Success!', color: 'positive' })

// From react-toastify  
toast.error('Error message')
// becomes
toast.show({ text: 'Error message', color: 'critical', timeout: 0 })
```