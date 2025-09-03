# ScrollArea

**Brief Description**: A customizable scrollable container component with optional custom scrollbars for both horizontal and vertical overflow content.

**Keywords**: Scrollable Container, Overflow, Custom Scrollbar, Scrolling, Viewport, Container

## Usage Description

The ScrollArea component provides a cross-platform scrollable container with customizable scrollbar appearance and behavior. It's designed to replace native browser scrollbars with a consistent, styled scrollbar that matches your design system.

Use ScrollArea when you need to display content that may exceed the available viewport space, such as long lists, large data tables, or content sections with dynamic height. The component automatically handles both horizontal and vertical scrolling scenarios and provides smooth scrolling interactions with mouse wheel, keyboard navigation, and touch gestures.

The component is particularly useful in design systems where consistent scrollbar styling is important across different browsers and operating systems, as it completely replaces native scrollbars with custom-styled alternatives that can be themed to match your application's visual identity.

## Props Documentation

### Required Props

- **children** (`React.ReactNode`) - Required
  - The content to be displayed within the scrollable area
  - Can be any valid React node including text, elements, or other components

### Optional Props

- **scrollbarDisplay** (`"visible" | "hover" | "hidden"`) - Optional
  - Default: `"hover"`
  - Controls when custom scrollbars are displayed
  - `"visible"`: Always show scrollbars when content overflows
  - `"hover"`: Show scrollbars only when hovering over the scroll area
  - `"hidden"`: Never show custom scrollbars (content still scrollable)

- **height** (`Responsive<string | number>`) - Optional
  - Sets the fixed height of the scroll area
  - Can be a string (e.g., "200px", "50%") or number (treated as pixels)
  - Supports responsive values with viewport breakpoints: `{ s: "100px", m: "150px", l: "200px" }`
  - When set, content will scroll vertically if it exceeds this height

- **maxHeight** (`Responsive<string | number>`) - Optional
  - Sets the maximum height of the scroll area
  - Same value types as height prop
  - Supports responsive values with viewport breakpoints
  - Content will expand up to this height, then become scrollable

- **onScroll** (`(coordinates: { x: number; y: number }) => void`) - Optional
  - Callback fired when the scroll position changes
  - Receives normalized scroll coordinates (0-1 range)
  - `x`: Horizontal scroll position as percentage (0 = start, 1 = end)
  - `y`: Vertical scroll position as percentage (0 = top, 1 = bottom)

- **className** (`ClassName`) - Optional
  - Additional CSS class names to apply to the root element
  - Can be a string, array of strings, or nested arrays

- **attributes** (`Attributes<"div">`) - Optional
  - Additional HTML attributes to apply to the root div element
  - Includes standard div props, data attributes, and custom style properties
  - Supports CSS custom properties (CSS variables) in style attribute

## Code Examples

### Basic Vertical Scrolling
```tsx
import { ScrollArea, View } from 'reshaped';

function BasicExample() {
  return (
    <ScrollArea height="200px">
      <View padding={4}>
        <p>Long content that will scroll when it exceeds the 200px height...</p>
        <p>More content...</p>
        <p>Even more content that makes scrolling necessary...</p>
      </View>
    </ScrollArea>
  );
}
```
This example demonstrates basic vertical scrolling with a fixed height container.

### Horizontal and Vertical Scrolling
```tsx
import { ScrollArea, View } from 'reshaped';

function BidirectionalExample() {
  return (
    <ScrollArea height="150px" scrollbarDisplay="visible">
      <View 
        backgroundColor="elevation-base" 
        padding={4} 
        width="150%" // Forces horizontal scrolling
      >
        Wide content that exceeds container width and also has enough height 
        to require vertical scrolling. This demonstrates both scrollbars 
        appearing when needed.
      </View>
    </ScrollArea>
  );
}
```
This example shows how ScrollArea handles both horizontal and vertical overflow with visible scrollbars.

### Responsive Heights
```tsx
import { ScrollArea, View } from 'reshaped';

function ResponsiveExample() {
  return (
    <ScrollArea 
      height={{ s: "100px", m: "150px", l: "200px" }}
      scrollbarDisplay="hover"
    >
      <View padding={4}>
        Content that adapts its scrollable height based on screen size:
        100px on small screens, 150px on medium, and 200px on large screens.
      </View>
    </ScrollArea>
  );
}
```
This example demonstrates responsive height configuration for different viewport sizes.

### Scroll Event Handling with Ref
```tsx
import { ScrollArea, Button, View } from 'reshaped';
import { useRef } from 'react';

function ScrollControlExample() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = (coordinates: { x: number; y: number }) => {
    console.log('Scroll position:', coordinates);
  };
  
  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <View gap={4}>
      <Button onClick={scrollToTop}>Scroll to Top</Button>
      <ScrollArea 
        height="200px"
        ref={scrollRef}
        onScroll={handleScroll}
        scrollbarDisplay="visible"
      >
        <View padding={4} height="500px">
          Tall content that can be programmatically scrolled...
        </View>
      </ScrollArea>
    </View>
  );
}
```
This example shows how to control scrolling programmatically and handle scroll events.

### Hidden Scrollbars with Max Height
```tsx
import { ScrollArea, View } from 'reshaped';

function HiddenScrollbarExample() {
  return (
    <ScrollArea 
      maxHeight="250px" 
      scrollbarDisplay="hidden"
    >
      <View padding={4}>
        <p>This content can expand up to 250px in height.</p>
        <p>If content exceeds this height, it becomes scrollable but without visible scrollbars.</p>
        <p>Users can still scroll using mouse wheel, keyboard, or touch gestures.</p>
        <p>Add more content here to test the behavior...</p>
      </View>
    </ScrollArea>
  );
}
```
This example demonstrates using maxHeight with hidden scrollbars for a cleaner appearance.

## Accessibility Considerations

- The ScrollArea component maintains keyboard accessibility with proper focus management
- The scrollable content area is focusable and supports keyboard navigation (arrow keys, page up/down)
- Custom scrollbars are marked with `aria-hidden="true"` as they are purely decorative
- Screen readers can still access and navigate the content normally
- Touch and gesture scrolling are fully supported on mobile devices
- The component respects user's motion preferences and system scrolling behavior

## Related Components

- **View**: Often used as a child component to provide padding, backgrounds, and layout structure within the scrollable area
- **Button**: Can be used to create scroll controls or navigation within scrollable content
- **List components**: Frequently wrapped in ScrollArea when displaying long lists of items
- **Modal/Dialog components**: May use ScrollArea for scrollable content areas within overlays
- **Layout components**: Can be combined with Grid, Flex, or Stack components to create complex scrollable layouts

The ScrollArea component integrates seamlessly with the reshaped design system's layout and styling utilities, supporting all standard spacing, color, and responsive design patterns.