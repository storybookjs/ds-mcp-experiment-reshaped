# Skeleton Component

## Overview
The Skeleton component displays an animated shimmer effect to indicate content is being loaded, providing visual feedback during loading states with customizable dimensions and styling.

## Key Features
- Animated shimmer effect
- Customizable dimensions
- Multiple shape variants
- Responsive sizing
- Performance optimized
- Accessibility support

## Props Interface
```typescript
type SkeletonProps = {
  width?: Responsive<string | number>;
  height?: Responsive<string | number>;
  variant?: 'text' | 'rectangular' | 'circular';
  animation?: 'pulse' | 'wave' | 'none';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Text Skeleton
```typescript
import { Skeleton, View } from 'reshaped';

function TextSkeleton() {
  return (
    <View gap={3}>
      <Skeleton variant="text" width="60%" height={6} />
      <Skeleton variant="text" width="80%" height={5} />
      <Skeleton variant="text" width="40%" height={5} />
    </View>
  );
}
```

### Card Loading Skeleton
```typescript
import { Skeleton, View, Card } from 'reshaped';

function CardSkeleton() {
  return (
    <Card padding={5}>
      <View gap={4}>
        <View direction="row" gap={3} align="center">
          <Skeleton 
            variant="circular" 
            width={12} 
            height={12} 
          />
          <View gap={2} grow>
            <Skeleton variant="text" width="60%" height={5} />
            <Skeleton variant="text" width="40%" height={4} />
          </View>
        </View>
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height={40}
        />
        <View gap={2}>
          <Skeleton variant="text" width="100%" height={4} />
          <Skeleton variant="text" width="80%" height={4} />
        </View>
      </View>
    </Card>
  );
}
```

### Image Skeleton
```typescript
import { Skeleton } from 'reshaped';

function ImageSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      width="100%"
      height={48}
      animation="wave"
    />
  );
}
```

## Animation Types
- **pulse**: Subtle opacity pulsing
- **wave**: Shimmer wave effect
- **none**: Static placeholder

## Accessibility
- Proper ARIA labels for loading states
- Screen reader announcements
- Respects reduced motion preferences

## Related Components
- **Loader**: Spinning loading indicators
- **Progress**: Determinate progress indication