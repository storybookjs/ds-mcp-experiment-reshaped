# Scrim Component

## Overview
The Scrim component is a versatile overlay that renders content over a background with gradient effects and positioning options for creating modal-like experiences and highlighting content.

## Key Features
- Background overlay effects
- Gradient customization
- Portal rendering
- Positioning controls
- Click-outside handling
- Accessibility support

## Props Interface
```typescript
type ScrimProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
  gradient?: 'light' | 'dark' | 'none';
  position?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Scrim Overlay
```typescript
import { Scrim, Card, Button, Text, View } from 'reshaped';
import { useState } from 'react';

function BasicScrim() {
  const [visible, setVisible] = useState(false);
  
  return (
    <View>
      <Button onClick={() => setVisible(true)}>
        Show Overlay
      </Button>
      
      <Scrim
        visible={visible}
        onClose={() => setVisible(false)}
        gradient="dark"
        position="center"
      >
        <Card padding={6} maxWidth={80}>
          <View gap={4}>
            <Text variant="title-4">Important Notice</Text>
            <Text>
              This is an important message displayed over the content.
            </Text>
            <Button onClick={() => setVisible(false)}>
              Got it
            </Button>
          </View>
        </Card>
      </Scrim>
    </View>
  );
}
```

### Image Gallery Scrim
```typescript
import { Scrim, Image, Button } from 'reshaped';
import { useState } from 'react';

function ImageGalleryScrim() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <View>
      <Button onClick={() => setSelectedImage('/large-image.jpg')}>
        View Image
      </Button>
      
      <Scrim
        visible={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        gradient="dark"
      >
        {selectedImage && (
          <Image 
            src={selectedImage}
            maxWidth="90vw"
            maxHeight="90vh"
          />
        )}
      </Scrim>
    </View>
  );
}
```

## Positioning Options
- **center**: Centers content in viewport
- **top**: Positions content at top
- **bottom**: Positions content at bottom
- **left/right**: Side positioning

## Accessibility
- Focus trapping within scrim content
- Escape key to close
- Click outside to close
- Screen reader compatibility

## Related Components
- **Modal**: Structured dialog component
- **Overlay**: Low-level overlay utility