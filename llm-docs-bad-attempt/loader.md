# Loader Component

## Overview
The Loader component is a customizable spinning loader for indicating loading states and progress in user interfaces with various sizes and styling options.

## Key Features
- Spinning animation
- Multiple sizes
- Color customization
- Accessibility support
- Performance optimized

## Props Interface
```typescript
type LoaderProps = {
  size?: Responsive<number>;
  color?: 'primary' | 'neutral' | 'critical';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Loader
```typescript
import { Loader, View } from 'reshaped';

function BasicLoader() {
  return (
    <View align="center" padding={4}>
      <Loader />
    </View>
  );
}
```

### Custom Size and Color
```typescript
import { Loader } from 'reshaped';

function CustomLoader() {
  return (
    <Loader 
      size={8}
      color="primary"
    />
  );
}
```

### Loading State
```typescript
import { Loader, Button, View } from 'reshaped';
import { useState } from 'react';

function LoadingButton() {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };
  
  return (
    <Button onClick={handleClick} disabled={loading}>
      {loading ? (
        <View direction="row" align="center" gap={2}>
          <Loader size={4} />
          Loading...
        </View>
      ) : (
        'Submit'
      )}
    </Button>
  );
}
```

## Accessibility
- ARIA labels for loading states
- Screen reader announcements
- Reduced motion support

## Related Components
- **Button**: Loading states in buttons
- **Progress**: Alternative progress indicators