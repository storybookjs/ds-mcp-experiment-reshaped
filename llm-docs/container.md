# Container

A responsive layout component that provides consistent horizontal padding and centering behavior for content sections.

## Keywords

Layout, Responsive, Padding, Centering, Container, Wrapper, Content

## Usage Description

The Container component serves as a wrapper for page content, providing consistent horizontal padding and automatic centering behavior. It's designed to create consistent layouts across different viewport sizes while allowing content to utilize the full available width with appropriate margins.

Container is ideal for wrapping main content areas, sections, or any content that needs consistent spacing from screen edges. It builds on top of the View component and automatically applies centering margins (`margin: 0 auto`) through CSS, making it perfect for creating centered layouts without requiring additional wrapper elements.

The component supports responsive design through its props, allowing different padding values, dimensions, and alignment properties across viewport breakpoints. This makes it suitable for creating layouts that adapt gracefully to different screen sizes while maintaining consistent visual hierarchy.

## Props Documentation

### `children`
- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The content to be rendered inside the container

### `padding`
- **Type**: `G.Responsive<number>`
- **Required**: No
- **Default**: `4`
- **Description**: Horizontal padding applied to both sides of the container. Accepts responsive values for different viewport breakpoints
- **Example Values**: `0`, `2`, `4`, `6`, `{ s: 2, m: 4, l: 6 }`

### `width`
- **Type**: `G.Responsive<string | number>`
- **Required**: No
- **Default**: `undefined`
- **Description**: Sets the width of the container. Can be a CSS value or responsive object
- **Example Values**: `"100%"`, `"200px"`, `{ s: "100%", m: "800px" }`

### `align`
- **Type**: `G.Responsive<"start" | "center" | "end" | "stretch" | "baseline">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Controls the alignment of child elements along the cross axis (inherited from View)
- **Example Values**: `"center"`, `"start"`, `{ s: "start", m: "center" }`

### `justify`
- **Type**: `G.Responsive<"start" | "center" | "end" | "space-between">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Controls the justification of child elements along the main axis (inherited from View)
- **Example Values**: `"center"`, `"space-between"`, `{ s: "start", m: "center" }`

### `height`
- **Type**: `G.Responsive<string | number>`
- **Required**: No
- **Default**: `undefined`
- **Description**: Sets the height of the container. Can be a CSS value or responsive object
- **Example Values**: `"200px"`, `"100vh"`, `{ s: "300px", m: "400px" }`

### `maxHeight`
- **Type**: `G.Responsive<string | number>`
- **Required**: No
- **Default**: `undefined`
- **Description**: Sets the maximum height of the container, useful for constraining content
- **Example Values**: `"300px"`, `"50vh"`, `{ s: "200px", m: "400px" }`

### `className`
- **Type**: `G.ClassName`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS classes to apply to the container element
- **Example Values**: `"custom-container"`, `["class1", "class2"]`

### `attributes`
- **Type**: `G.Attributes<"div">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes and data attributes to apply to the container element
- **Example Values**: `{ id: "main-container", "data-testid": "content" }`

## Code Examples

### Basic Usage
```tsx
import { Container } from 'reshaped';

function App() {
  return (
    <Container>
      <h1>Welcome to our website</h1>
      <p>This content is automatically centered with default padding.</p>
    </Container>
  );
}
```
*Demonstrates the simplest usage with default padding (4) and automatic centering.*

### Custom Padding and Dimensions
```tsx
import { Container } from 'reshaped';

function HeroSection() {
  return (
    <Container 
      padding={6} 
      width="800px" 
      height="400px"
    >
      <div>
        <h1>Hero Content</h1>
        <p>Custom container with larger padding and fixed dimensions.</p>
      </div>
    </Container>
  );
}
```
*Shows how to customize padding and set specific width and height values.*

### Responsive Layout
```tsx
import { Container } from 'reshaped';

function ResponsiveSection() {
  return (
    <Container 
      padding={{ s: 2, m: 4, l: 6 }}
      width={{ s: "100%", m: "800px", l: "1000px" }}
      height={{ s: "300px", m: "400px" }}
      maxHeight={{ s: "250px", m: "350px" }}
    >
      <div>
        <h2>Responsive Container</h2>
        <p>This container adapts its padding, width, and height based on viewport size.</p>
      </div>
    </Container>
  );
}
```
*Demonstrates responsive design with different values for small (s), medium (m), and large (l) viewports.*

### Centered Content with Flexbox Alignment
```tsx
import { Container } from 'reshaped';

function CenteredCard() {
  return (
    <Container 
      align="center" 
      justify="center" 
      height="400px"
      padding={4}
    >
      <div style={{ background: '#f5f5f5', padding: '2rem', borderRadius: '8px' }}>
        <h3>Perfectly Centered</h3>
        <p>This content is centered both horizontally and vertically.</p>
      </div>
    </Container>
  );
}
```
*Shows how to use align and justify props to center content both horizontally and vertically.*

### Container with Custom Attributes and Styling
```tsx
import { Container } from 'reshaped';

function CustomContainer() {
  return (
    <Container 
      className="main-content-area"
      attributes={{
        id: "content-container",
        "data-section": "main",
        role: "main"
      }}
      padding={0}
      width="100%"
    >
      <article>
        <h1>Article Title</h1>
        <p>Content with custom attributes and no padding.</p>
      </article>
    </Container>
  );
}
```
*Demonstrates adding custom CSS classes and HTML attributes, including accessibility attributes.*

## Related Components

### View
The Container component extends and builds upon the View component, inheriting its layout and styling capabilities. View provides the foundational flexbox layout system that Container uses.

### Layout Components
Container works well with other layout components in the design system:
- **Grid**: For creating grid-based layouts within containers
- **Stack**: For vertical spacing of content within containers
- **Divider**: For creating visual separation between container sections

### Content Components
Container is commonly used to wrap:
- **Card**: Multiple cards arranged within a container
- **Text**: Text content that needs consistent margins
- **Button**: Action elements that need proper spacing from edges
- **Form**: Form sections that require consistent layout treatment

The Container component's automatic centering and responsive padding make it an essential building block for creating consistent, well-structured layouts across an application.