# Image

**Component Name**: Image  
**Brief Description**: A responsive image component with smart loading states, fallback support, and flexible display modes.  
**Keywords**: Image Display, Media, Fallback, Loading States, Responsive, Object Fit, Accessibility, Error Handling

## Usage Description

The Image component is a comprehensive solution for displaying images with built-in error handling, loading states, and responsive behavior. It provides smart fallback mechanisms when images fail to load or when no source is provided, making it ideal for user-generated content scenarios or unreliable image sources.

Use this component when you need more than a basic HTML img tag - particularly when you require fallback handling, responsive sizing, or custom rendering. It's especially valuable in applications that display dynamic content where image availability cannot be guaranteed, such as user profiles, product catalogs, or content management systems.

The component automatically handles loading and error states, provides accessibility features out of the box, and supports responsive breakpoints for different screen sizes. Its flexible architecture allows for custom rendering functions and extensive styling customization while maintaining semantic HTML structure.

## Props Documentation

### Core Props

- **src** (`string`, optional): The URL of the image to display. When not provided or when the image fails to load, fallback content is shown if available.

- **alt** (`string`, optional): Alternative text for the image, used for accessibility. When not provided, the image receives a `role="presentation"` attribute indicating it's decorative.

### Sizing Props

- **width** (`Responsive<string | number>`, optional): Sets the width of the image container. Accepts responsive values for different breakpoints (e.g., `{ s: "200px", m: "300px" }`).

- **height** (`Responsive<string | number>`, optional): Sets the height of the image container. Works with responsive breakpoint values.

- **maxWidth** (`Responsive<string | number>`, optional): Sets the maximum width constraint for the image container.

- **aspectRatio** (`Responsive<number>`, optional): Defines the aspect ratio of the image container (e.g., `16/9`, `1/1`). Can be responsive across breakpoints.

### Display Props

- **displayMode** (`"cover" | "contain"`, optional, default: `"cover"`): Controls how the image fits within its container:
  - `"cover"`: Image covers the entire container, potentially cropping parts
  - `"contain"`: Image is scaled to fit entirely within the container

- **borderRadius** (`"small" | "medium" | "large"`, optional): Applies border radius to the image container using the design system's radius scale.

### Event Handlers

- **onLoad** (`(e: React.SyntheticEvent) => void`, optional): Callback fired when the image loads successfully. Receives the load event.

- **onError** (`(e: React.SyntheticEvent) => void`, optional): Callback fired when the image fails to load. Receives the error event.

### Fallback Props

- **fallback** (`string | React.ReactNode | boolean`, optional): Fallback content displayed when the image fails to load or when no src is provided:
  - `string`: URL of a fallback image
  - `React.ReactNode`: Custom JSX content (icons, text, etc.)
  - `boolean`: When `true`, shows a default styled placeholder background

### Advanced Props

- **renderImage** (`(attributes: ImageAttributes) => React.ReactNode`, optional): Custom rendering function that receives image attributes and returns a custom image element. Useful for integrating with third-party image libraries.

- **imageAttributes** (`G.Attributes<"img">`, optional): Additional HTML attributes to pass specifically to the img element (when not using renderImage).

- **className** (`G.ClassName`, optional): CSS class names to apply to the image container.

- **attributes** (`G.Attributes<"div"> & G.Attributes<"img">`, optional): HTML attributes to apply to the root container element.

## Code Examples

### Basic Usage

```jsx
// Simple image with alt text
<Image
  src="https://example.com/photo.jpg"
  alt="A beautiful landscape"
/>

// Decorative image without alt text
<Image src="https://example.com/decoration.jpg" />
```

### Responsive Sizing

```jsx
// Fixed dimensions
<Image
  src="https://example.com/photo.jpg"
  alt="Product photo"
  width="300px"
  height="200px"
/>

// Responsive width across breakpoints
<Image
  src="https://example.com/photo.jpg"
  alt="Hero image"
  width={{ s: "100%", m: "600px", l: "800px" }}
/>

// Aspect ratio constraint
<Image
  src="https://example.com/photo.jpg"
  alt="Square thumbnail"
  width="200px"
  aspectRatio={1/1}
/>
```

### Display Modes and Styling

```jsx
// Cover mode (default) with border radius
<Image
  src="https://example.com/photo.jpg"
  alt="Profile picture"
  width="100px"
  height="100px"
  borderRadius="large"
  displayMode="cover"
/>

// Contain mode to show full image
<Image
  src="https://example.com/photo.jpg"
  alt="Product diagram"
  width="400px"
  height="300px"
  displayMode="contain"
/>
```

### Fallback Handling

```jsx
// Boolean fallback shows default background
<Image
  src="https://unreliable-source.com/image.jpg"
  alt="User avatar"
  fallback={true}
/>

// String fallback provides alternative image
<Image
  src="https://unreliable-source.com/image.jpg"
  alt="Product photo"
  fallback="https://example.com/placeholder.jpg"
/>

// Custom JSX fallback with icon
<Image
  src="https://unreliable-source.com/image.jpg"
  alt="Profile picture"
  fallback={
    <Icon svg={UserIcon} size={8} />
  }
/>
```

### Event Handling

```jsx
// Handle load and error events
<Image
  src="https://example.com/photo.jpg"
  alt="Dynamic content"
  onLoad={(e) => console.log("Image loaded successfully")}
  onError={(e) => console.log("Failed to load image")}
  fallback={<div>Image unavailable</div>}
/>
```

### Custom Rendering

```jsx
// Custom image rendering with third-party library
<Image
  src="https://example.com/photo.jpg"
  alt="Optimized image"
  renderImage={(attributes) => (
    <NextImage
      {...attributes}
      priority
      quality={90}
    />
  )}
/>

// Custom attributes
<Image
  src="https://example.com/photo.jpg"
  alt="Tracked image"
  imageAttributes={{
    'data-analytics': 'hero-image',
    'loading': 'lazy'
  }}
  className="custom-image"
/>
```

## Accessibility Considerations

The Image component implements several accessibility best practices:

- **Semantic HTML**: Uses proper `img` elements with appropriate ARIA roles
- **Alt Text Handling**: When `alt` is provided, the image is treated as informative content. When omitted, the image receives `role="presentation"` indicating it's decorative
- **Loading States**: Component manages loading states internally, ensuring screen readers understand the content state
- **Fallback Content**: Fallback content maintains semantic meaning and can include accessible alternatives like descriptive text or icons
- **Focus Management**: Properly handles focus behavior for interactive fallback content

Developers should always provide meaningful `alt` text for informative images and omit it for purely decorative images. The component's fallback mechanisms ensure that users are never left with broken image experiences.

## Related Components

- **View**: Used as a container for Image components when specific layout constraints are needed
- **Icon**: Often used as fallback content when images fail to load, providing semantic alternatives
- **Avatar**: Higher-level component that typically uses Image internally for user profile pictures
- **Card**: Frequently contains Image components for media content
- **Gallery**: Composition component that displays multiple Image components in organized layouts

The Image component serves as a foundational building block for media-rich interfaces and integrates seamlessly with the broader design system's layout and styling utilities.
