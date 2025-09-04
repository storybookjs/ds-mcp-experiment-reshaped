# Carousel

## Component Name

Carousel

## Brief Description

A horizontal scrolling container component that displays multiple items in a row with navigation controls and responsive item sizing.

## Keywords

- Horizontal Scrolling
- Navigation Controls
- Responsive Layout
- Item Container
- Swipe Gestures
- Scroll Snap
- Gallery

## Usage Description

The Carousel component provides an elegant way to display a horizontal list of items with smooth scrolling and navigation capabilities. It's ideal for showcasing collections of content such as image galleries, product listings, testimonials, or any series of related items where horizontal space is limited.

The component automatically handles responsive behavior, allowing you to specify different numbers of visible items across different screen sizes. It includes built-in navigation controls that appear when needed and hide when the user reaches the beginning or end of the carousel. The component also supports RTL (right-to-left) layouts and provides programmatic navigation through its instance reference.

Common use cases include product carousels on e-commerce sites, image galleries, feature showcases, testimonial sliders, and any scenario where you need to present multiple items in a compact horizontal format with smooth navigation.

## Props Documentation

### children

- **Type**: `React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: The items to display in the carousel. Each child becomes a carousel item wrapped in a list item container.

### visibleItems

- **Type**: `G.Responsive<number>`
- **Required**: No
- **Default**: `undefined` (auto-sizing based on content)
- **Description**: Number of items visible at once. Accepts either a number or responsive object with breakpoint-specific values (e.g., `{ s: 2, m: 3, l: 4 }`). When not specified, items size automatically based on their content width.

### gap

- **Type**: `G.Responsive<number>`
- **Required**: No
- **Default**: `3`
- **Description**: Spacing between carousel items. Accepts either a number or responsive object with breakpoint-specific values. Uses the design system's spacing scale.

### bleed

- **Type**: `G.Responsive<number>`
- **Required**: No
- **Default**: `undefined`
- **Description**: Amount of horizontal overflow to show on smaller screens, creating a "peek" effect where parts of adjacent items are visible. Helps indicate scrollable content. Can be responsive.

### navigationDisplay

- **Type**: `"hidden"`
- **Required**: No
- **Default**: `undefined` (navigation shown)
- **Description**: Controls visibility of navigation buttons. When set to "hidden", the navigation arrows are not rendered, leaving only touch/swipe navigation available.

### instanceRef

- **Type**: `React.Ref<Instance>`
- **Required**: No
- **Default**: `undefined`
- **Description**: Reference to the carousel instance providing programmatic navigation methods (`navigateBack`, `navigateForward`, `navigateTo`).

### onChange

- **Type**: `(args: { index: number }) => void`
- **Required**: No
- **Default**: `undefined`
- **Description**: Callback fired when the first visible item changes. Receives an object with the current index of the first visible item.

### onScroll

- **Type**: `(e: React.UIEvent<HTMLUListElement>) => void`
- **Required**: No
- **Default**: `undefined`
- **Description**: Callback fired during scroll events on the carousel container. Provides access to the underlying scroll event.

### className

- **Type**: `G.ClassName`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS class names to apply to the carousel root element. Supports string, array, or conditional class patterns.

### attributes

- **Type**: `G.Attributes<"div">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes and props to apply to the carousel root element, including data attributes, ARIA labels, and event handlers.

## Code Examples

### Basic Carousel with Fixed Items

```jsx
import { Carousel } from "reshaped";

function BasicCarousel() {
  return (
    <Carousel visibleItems={3}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
    </Carousel>
  );
}
```

This example shows a basic carousel displaying 3 items at a time with default spacing and navigation controls.

### Responsive Carousel with Custom Gap

```jsx
import { Carousel } from "reshaped";

function ResponsiveCarousel() {
  return (
    <Carousel
      visibleItems={{ s: 1, m: 2, l: 3, xl: 4 }}
      gap={{ s: 2, m: 3, l: 4 }}
    >
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Carousel>
  );
}
```

This example demonstrates responsive behavior where the number of visible items and gap size change based on screen size.

### Carousel with Bleed Effect

```jsx
import { Carousel } from "reshaped";

function BleedCarousel() {
  return (
    <Carousel visibleItems={2} bleed={{ s: 4, l: 0 }} gap={3}>
      <img src="image1.jpg" alt="Image 1" />
      <img src="image2.jpg" alt="Image 2" />
      <img src="image3.jpg" alt="Image 3" />
      <img src="image4.jpg" alt="Image 4" />
    </Carousel>
  );
}
```

This example shows a carousel with bleed effect on small screens (showing partial next/previous items) that removes bleed on larger screens.

### Programmatic Navigation

```jsx
import { Carousel } from "reshaped";
import { Button } from "reshaped";
import { useRef, useState } from "react";

function ControlledCarousel() {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <Button onClick={() => carouselRef.current?.navigateBack()}>
          Previous
        </Button>
        <Button onClick={() => carouselRef.current?.navigateForward()}>
          Next
        </Button>
        <Button onClick={() => carouselRef.current?.navigateTo(3)}>
          Go to Item 4
        </Button>
        <span>Current: {currentIndex}</span>
      </div>

      <Carousel
        visibleItems={2}
        instanceRef={carouselRef}
        navigationDisplay="hidden"
        onChange={({ index }) => setCurrentIndex(index)}
      >
        {items.map((item, index) => (
          <div key={index}>Item {index}</div>
        ))}
      </Carousel>
    </div>
  );
}
```

This example shows how to use the instance reference for programmatic navigation and track the current position with the onChange callback.

### Auto-sizing Carousel

```jsx
import { Carousel } from "reshaped";

function AutoCarousel() {
  return (
    <Carousel gap={4}>
      <div style={{ width: "100px" }}>Small</div>
      <div style={{ width: "200px" }}>Medium Item</div>
      <div style={{ width: "300px" }}>Large Content Item</div>
      <div style={{ width: "150px" }}>Another Item</div>
    </Carousel>
  );
}
```

This example demonstrates auto-sizing behavior where items display at their natural width when visibleItems is not specified.

## Accessibility Considerations

The Carousel component includes several accessibility features:

- **Semantic HTML**: Uses `<section>` for the container and `<ul>`/`<li>` structure for items
- **Keyboard Navigation**: Supports keyboard scrolling when focused
- **Screen Reader Support**: Navigation buttons use `aria-hidden="true"` as they're supplementary to native scrolling
- **Focus Management**: Automatically manages focus between navigation controls
- **Smooth Scrolling**: Provides smooth scroll behavior for better user experience
- **RTL Support**: Full right-to-left language support with automatic direction handling

## Related Components

### View

The Carousel internally uses the View component for layout and spacing. The View component provides the gap functionality and responsive layout capabilities that Carousel leverages.

### Button

Navigation controls are implemented using the Button component with chevron icons, inheriting all button accessibility features and styling.

### CarouselControl (Internal)

An internal component that handles the navigation button logic, visibility states, and focus management. Not meant for direct use but provides the navigation functionality.

The Carousel component works well in combination with:

- **Card components** for structured item content
- **Image components** for gallery-style carousels
- **Product components** for e-commerce listings
- **Container components** for layout and spacing context
