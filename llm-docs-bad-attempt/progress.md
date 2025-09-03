# Progress Component

## Overview
The Progress component is a linear progress bar that displays completion percentage with customizable colors, sizes, and animated transitions for visual progress indication.

## Key Features
- Linear progress indication
- Percentage-based values
- Color variants
- Size options
- Smooth animations
- Accessibility support

## Props Interface
```typescript
type ProgressProps = {
  value: number;
  max?: number;
  color?: 'primary' | 'positive' | 'warning' | 'critical';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Progress Bar
```typescript
import { Progress, Text, View } from 'reshaped';
import { useState, useEffect } from 'react';

function BasicProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => prev >= 100 ? 0 : prev + 10);
    }, 500);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <View gap={2}>
      <Text>Loading: {progress}%</Text>
      <Progress value={progress} />
    </View>
  );
}
```

### Upload Progress
```typescript
import { Progress, View, Text } from 'reshaped';

function UploadProgress({ fileName, progress }: { fileName: string; progress: number }) {
  const getColor = (progress: number) => {
    if (progress >= 100) return 'positive';
    if (progress >= 75) return 'primary';
    if (progress >= 50) return 'warning';
    return 'critical';
  };
  
  return (
    <View gap={2}>
      <View direction="row" justify="space-between">
        <Text variant="body-3">{fileName}</Text>
        <Text variant="body-3">{progress}%</Text>
      </View>
      <Progress 
        value={progress}
        color={getColor(progress)}
        size="medium"
        animated
      />
    </View>
  );
}
```

## Accessibility
- ARIA progressbar role
- Value announcements
- Screen reader support
- Proper labeling

## Related Components
- **Loader**: Indeterminate loading states
- **ProgressIndicator**: Multi-step progress