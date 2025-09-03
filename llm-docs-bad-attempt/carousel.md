# Carousel Component

## Overview
The Carousel component is a responsive, horizontally scrollable carousel with navigation controls for displaying a collection of items in a space-efficient layout with smooth scrolling animations.

## Key Features
- Horizontal scrolling with touch/drag support
- Navigation arrows and dot indicators
- Auto-play functionality
- Responsive item sizing
- Infinite loop option
- Keyboard navigation
- Accessibility support

## Props Interface
```typescript
type CarouselProps = {
  children: React.ReactNode;
  itemWidth?: Responsive<string | number>;
  gap?: Responsive<number>;
  navigation?: boolean;
  indicators?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  infinite?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Carousel
```typescript
import { Carousel, Card, Text } from 'reshaped';

function BasicCarousel() {
  const items = [1, 2, 3, 4, 5];
  
  return (
    <Carousel itemWidth={300} gap={4}>
      {items.map((item) => (
        <Card key={item} padding={4}>
          <Text variant="title-5">Item {item}</Text>
          <Text>Content for carousel item {item}</Text>
        </Card>
      ))}
    </Carousel>
  );
}
```

### Auto-play Carousel
```typescript
import { Carousel, Image } from 'reshaped';

function AutoPlayCarousel() {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg'
  ];
  
  return (
    <Carousel 
      autoPlay
      autoPlayInterval={3000}
      infinite
      indicators
      itemWidth="100%"
    >
      {images.map((src, index) => (
        <Image key={index} src={src} aspectRatio="16/9" />
      ))}
    </Carousel>
  );
}
```

## Accessibility
- Keyboard navigation with arrow keys
- Screen reader announcements for navigation
- Focus management for interactive elements
- ARIA labels for carousel regions
- Pause auto-play on focus/hover

## Design Tokens
- Smooth transition animations
- Theme-aware navigation controls
- Consistent spacing and sizing
- Responsive breakpoint handling

## Related Components
- **Card**: Item containers within carousel
- **Image**: Media content for carousel
- **Button**: Navigation controls