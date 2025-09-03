# Image Component

## Overview
The Image component is an enhanced image element with built-in loading states, aspect ratio controls, and responsive behavior for optimized image display across different devices and screen sizes.

## Key Features
- Aspect ratio preservation
- Loading state management
- Responsive image handling
- Error state handling
- Accessibility support
- Performance optimizations

## Props Interface
```typescript
type ImageProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  fit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  loading?: 'lazy' | 'eager';
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  attributes?: React.ImgHTMLAttributes<HTMLImageElement>;
};
```

## Usage Examples

### Basic Image
```typescript
import { Image, View } from 'reshaped';

function BasicImage() {
  return (
    <View maxWidth={80}>
      <Image 
        src=\"/hero-image.jpg\"
        alt=\"Beautiful landscape with mountains and lake\"
        aspectRatio=\"16/9\"
      />
    </View>
  );
}
```

### Different Aspect Ratios
```typescript
import { Image, Grid, Text, View } from 'reshaped';

function AspectRatioExamples() {
  const images = [
    { src: '/square.jpg', ratio: '1/1', name: 'Square' },\n    { src: '/portrait.jpg', ratio: '3/4', name: 'Portrait' },\n    { src: '/landscape.jpg', ratio: '16/9', name: 'Landscape' },\n    { src: '/wide.jpg', ratio: '21/9', name: 'Ultra-wide' }\n  ];\n  \n  return (\n    <View gap={4}>\n      <Text variant=\"title-5\">Aspect Ratios</Text>\n      <Grid columns={2} gap={4}>\n        {images.map(({ src, ratio, name }) => (\n          <View key={name} gap={2}>\n            <Image \n              src={src}\n              alt={`${name} image example`}\n              aspectRatio={ratio}\n            />\n            <Text variant=\"body-3\" align=\"center\">{name} ({ratio})</Text>\n          </View>\n        ))}\n      </Grid>\n    </View>\n  );\n}\n```\n\n### Object Fit Options\n```typescript\nimport { Image, Grid, Text, View } from 'reshaped';\n\nfunction ObjectFitExamples() {\n  const fits: Array<'cover' | 'contain' | 'fill' | 'scale-down'> = [\n    'cover', 'contain', 'fill', 'scale-down'\n  ];\n  \n  return (\n    <View gap={4}>\n      <Text variant=\"title-5\">Object Fit Options</Text>\n      <Grid columns={2} gap={4}>\n        {fits.map(fit => (\n          <View key={fit} gap={2}>\n            <Image \n              src=\"/sample-image.jpg\"\n              alt={`Object fit ${fit} example`}\n              aspectRatio=\"16/9\"\n              fit={fit}\n            />\n            <Text variant=\"body-3\" align=\"center\">{fit}</Text>\n          </View>\n        ))}\n      </Grid>\n    </View>\n  );\n}\n```\n\n### Image with Loading States\n```typescript\nimport { Image, Skeleton, Text, View } from 'reshaped';\nimport { useState } from 'react';\n\nfunction LoadingImageExample() {\n  const [imageLoaded, setImageLoaded] = useState(false);\n  const [imageError, setImageError] = useState(false);\n  \n  return (\n    <View gap={3}>\n      <Text variant=\"title-6\">Image with Loading State</Text>\n      <View position=\"relative\">\n        {!imageLoaded && !imageError && (\n          <Skeleton \n            variant=\"rectangular\"\n            width=\"100%\"\n            height={48}\n            animation=\"wave\"\n          />\n        )}\n        \n        <Image \n          src=\"/large-image.jpg\"\n          alt=\"Large image that takes time to load\"\n          aspectRatio=\"16/9\"\n          loading=\"lazy\"\n          onLoad={() => setImageLoaded(true)}\n          onError={() => setImageError(true)}\n          style={{\n            opacity: imageLoaded ? 1 : 0,\n            transition: 'opacity 0.3s ease'\n          }}\n        />\n        \n        {imageError && (\n          <View \n            padding={8}\n            align=\"center\"\n            justify=\"center\"\n            style={{\n              position: 'absolute',\n              top: 0,\n              left: 0,\n              right: 0,\n              bottom: 0,\n              backgroundColor: 'var(--rs-color-background-neutral-faded)'\n            }}\n          >\n            <Text color=\"neutral-faded\">Failed to load image</Text>\n          </View>\n        )}\n      </View>\n    </View>\n  );\n}\n```\n\n### Responsive Images\n```typescript\nimport { Image, View } from 'reshaped';\n\nfunction ResponsiveImage() {\n  return (\n    <View>\n      <Image \n        src=\"/responsive-image.jpg\"\n        alt=\"Responsive image example\"\n        aspectRatio={{ mobile: '1/1', tablet: '4/3', desktop: '16/9' }}\n        loading=\"lazy\"\n      />\n    </View>\n  );\n}\n```\n\n### Image Gallery\n```typescript\nimport { Image, Grid, Modal, View } from 'reshaped';\nimport { useState } from 'react';\n\nfunction ImageGallery() {\n  const [selectedImage, setSelectedImage] = useState<string | null>(null);\n  \n  const images = [\n    { src: '/gallery-1.jpg', alt: 'Gallery image 1' },\n    { src: '/gallery-2.jpg', alt: 'Gallery image 2' },\n    { src: '/gallery-3.jpg', alt: 'Gallery image 3' },\n    { src: '/gallery-4.jpg', alt: 'Gallery image 4' }\n  ];\n  \n  return (\n    <View>\n      <Grid columns={2} gap={3}>\n        {images.map((image, index) => (\n          <Image \n            key={index}\n            src={image.src}\n            alt={image.alt}\n            aspectRatio=\"1/1\"\n            fit=\"cover\"\n            style={{ cursor: 'pointer' }}\n            onClick={() => setSelectedImage(image.src)}\n          />\n        ))}\n      </Grid>\n      \n      {selectedImage && (\n        <Modal \n          visible={!!selectedImage}\n          onClose={() => setSelectedImage(null)}\n        >\n          <Image \n            src={selectedImage}\n            alt=\"Enlarged gallery image\"\n            fit=\"contain\"\n            style={{ maxHeight: '90vh', maxWidth: '90vw' }}\n          />\n        </Modal>\n      )}\n    </View>\n  );\n}\n```\n\n### Avatar Image\n```typescript\nimport { Image, View, Text } from 'reshaped';\n\nfunction AvatarImage() {\n  return (\n    <View direction=\"row\" align=\"center\" gap={3}>\n      <Image \n        src=\"/user-avatar.jpg\"\n        alt=\"User profile picture\"\n        aspectRatio=\"1/1\"\n        fit=\"cover\"\n        style={{ \n          width: '48px',\n          borderRadius: '50%'\n        }}\n      />\n      <View gap={1}>\n        <Text variant=\"body-2\" weight=\"medium\">John Doe</Text>\n        <Text variant=\"body-3\" color=\"neutral-faded\">Software Engineer</Text>\n      </View>\n    </View>\n  );\n}\n```\n\n### Image with Fallback\n```typescript\nimport { Image, View, Text, Icon } from 'reshaped';\nimport { ImageIcon } from './icons';\n\nfunction ImageWithFallback() {\n  return (\n    <Image \n      src=\"/might-not-exist.jpg\"\n      alt=\"Image that might not exist\"\n      aspectRatio=\"16/9\"\n      fallback={\n        <View \n          padding={8}\n          align=\"center\"\n          justify=\"center\"\n          style={{\n            backgroundColor: 'var(--rs-color-background-neutral-faded)',\n            height: '100%'\n          }}\n        >\n          <Icon svg={ImageIcon} size={8} color=\"neutral-faded\" />\n          <Text variant=\"body-3\" color=\"neutral-faded\">Image not available</Text>\n        </View>\n      }\n    />\n  );\n}\n```\n\n## Aspect Ratio Control\n- Maintains consistent proportions\n- Prevents layout shift during loading\n- Responsive aspect ratios\n- Common ratios: 1/1, 4/3, 16/9, 21/9\n\n## Object Fit Behavior\n- **cover**: Fills container, may crop image\n- **contain**: Fits entire image, may have empty space\n- **fill**: Stretches to fill container\n- **scale-down**: Acts like contain or none, whichever is smaller\n\n## Loading Optimization\n- Lazy loading for performance\n- Progressive image enhancement\n- Loading state management\n- Error handling and fallbacks\n\n## Accessibility\n- Descriptive alt text required\n- Screen reader compatibility\n- Focus management for interactive images\n- High contrast support\n\n## Related Components\n- **Avatar**: Specialized image component for user photos\n- **Skeleton**: Loading placeholder for images\n- **Modal**: Full-screen image viewing"