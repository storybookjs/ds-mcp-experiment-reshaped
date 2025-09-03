# Resizable

A flexible layout component that enables users to dynamically adjust the size of panels or sections through interactive dragging handles.

## Keywords

Layout, Panel, Resizing, Drag, Splitter, Panes, Interactive, Responsive

## Usage Description

The Resizable component creates flexible layouts where users can adjust panel sizes by dragging handles positioned between content areas. It's ideal for creating split-pane interfaces, dashboard layouts, or any scenario where users need control over content allocation within a constrained space.

Use Resizable when building applications that require customizable workspace layouts, such as code editors with sidebars, email clients with adjustable reading panes, or data visualization dashboards where users need to balance different content areas. The component supports both horizontal (row) and vertical (column) orientations and provides fine-grained control over minimum, maximum, and default sizes.

The component automatically handles the complex flex-grow calculations, boundary checking, and provides smooth visual feedback during drag operations. It integrates seamlessly with the View component system and maintains accessibility standards while delivering an intuitive user experience.

## Props Documentation

### Resizable Props

- **variant**: `"bordered" | "borderless"` (optional, default: `"borderless"`)
  - Controls the visual appearance of resize handles
  - "bordered" shows visible separator lines
  - "borderless" shows handles only on hover/drag

- **direction**: `"row" | "column"` (optional, default: `"row"`)
  - Determines the layout orientation
  - "row" creates horizontal panels with vertical drag handles
  - "column" creates vertical panels with horizontal drag handles

- **height**: `ViewProps["height"]` (optional)
  - Sets the overall height of the resizable container
  - Accepts any valid CSS height value or View height token

- **gap**: `ViewProps["gap"]` (optional, default: `2`)
  - Controls spacing between panels and handles
  - Uses the design system's spacing scale

- **className**: `string` (optional)
  - Additional CSS class names to apply to the container

- **attributes**: `React.HTMLAttributes<HTMLDivElement>` (optional)
  - Additional HTML attributes to pass to the container element

- **children**: `React.ReactNode` (required)
  - Collection of Resizable.Item and Resizable.Handle components

### Resizable.Item Props

- **children**: `React.ReactNode` (required)
  - Content to display within the resizable panel

- **minSize**: `${number}px` (optional)
  - Minimum size constraint in pixels
  - Prevents the panel from shrinking below this threshold

- **maxSize**: `${number}px` (optional)
  - Maximum size constraint in pixels
  - Prevents the panel from growing beyond this threshold

- **defaultSize**: `${number}px` (optional)
  - Initial size of the panel in pixels
  - Used for setting up non-equal panel distributions

### Resizable.Handle Props

- **children**: `(attributes: { ref: React.RefObject<HTMLButtonElement | null> }, props: { direction: "row" | "column"; status: "idle" | "dragging" }) => React.ReactNode` (optional)
  - Render prop function for custom handle UI
  - Receives drag attributes and current state
  - Enables complete customization of handle appearance and behavior

## Code Examples

### Basic Horizontal Layout

```tsx
import { Resizable, View } from 'reshaped';

function BasicResizable() {
  return (
    <Resizable height="400px">
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Left Panel
        </View>
      </Resizable.Item>
      
      <Resizable.Handle />
      
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Right Panel
        </View>
      </Resizable.Item>
    </Resizable>
  );
}
```
*Creates a basic two-panel horizontal layout with a draggable handle between them.*

### Vertical Layout with Multiple Panels

```tsx
import { Resizable, View } from 'reshaped';

function VerticalResizable() {
  return (
    <Resizable direction="column" height="500px">
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Top Panel
        </View>
      </Resizable.Item>
      
      <Resizable.Handle />
      
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Middle Panel
        </View>
      </Resizable.Item>
      
      <Resizable.Handle />
      
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Bottom Panel
        </View>
      </Resizable.Item>
    </Resizable>
  );
}
```
*Demonstrates a three-panel vertical layout with independent resize handles.*

### Size Constraints and Bordered Variant

```tsx
import { Resizable, View } from 'reshaped';

function ConstrainedResizable() {
  return (
    <Resizable variant="bordered" height="300px" gap={1}>
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Flexible Panel
        </View>
      </Resizable.Item>
      
      <Resizable.Handle />
      
      <Resizable.Item 
        minSize="150px" 
        maxSize="400px" 
        defaultSize="250px"
      >
        <View backgroundColor="primary-faded" padding={4}>
          Constrained Panel (150px - 400px)
        </View>
      </Resizable.Item>
    </Resizable>
  );
}
```
*Shows how to apply size constraints and use the bordered variant for visible separators.*

### Custom Handle with Render Props

```tsx
import { Resizable, View, Button } from 'reshaped';

function CustomHandleResizable() {
  return (
    <Resizable height="350px">
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Content Area
        </View>
      </Resizable.Item>
      
      <Resizable.Handle>
        {(attributes, props) => (
          <View 
            backgroundColor={props.status === "dragging" ? "primary" : "primary-faded"}
            padding={2}
            align="center" 
            justify="center"
            height="100%"
            borderRadius="small"
            animated
          >
            <Button attributes={attributes} size="small">
              {props.direction === "row" ? "⟷" : "⟺"}
            </Button>
          </View>
        )}
      </Resizable.Handle>
      
      <Resizable.Item>
        <View backgroundColor="neutral-faded" padding={4}>
          Sidebar
        </View>
      </Resizable.Item>
    </Resizable>
  );
}
```
*Illustrates custom handle styling with visual feedback during drag operations.*

### Complex Dashboard Layout

```tsx
import { Resizable, View, Card } from 'reshaped';

function DashboardLayout() {
  return (
    <View height="100vh" padding={3}>
      <Resizable direction="column" height="100%">
        <Resizable.Item defaultSize="60px">
          <Card padding={3}>
            <View backgroundColor="primary-faded">Header</View>
          </Card>
        </Resizable.Item>
        
        <Resizable.Handle />
        
        <Resizable.Item>
          <Resizable height="100%">
            <Resizable.Item minSize="200px" defaultSize="300px">
              <Card padding={3} height="100%">
                <View backgroundColor="neutral-faded">Sidebar</View>
              </Card>
            </Resizable.Item>
            
            <Resizable.Handle />
            
            <Resizable.Item>
              <Card padding={3} height="100%">
                <View backgroundColor="success-faded">Main Content</View>
              </Card>
            </Resizable.Item>
            
            <Resizable.Handle />
            
            <Resizable.Item minSize="150px" defaultSize="250px">
              <Card padding={3} height="100%">
                <View backgroundColor="warning-faded">Inspector</View>
              </Card>
            </Resizable.Item>
          </Resizable>
        </Resizable.Item>
      </Resizable>
    </View>
  );
}
```
*Demonstrates nested resizable layouts creating a complex dashboard with header, sidebar, main content, and inspector panels.*

## Related Components

- **View**: The foundational layout component that Resizable extends and uses internally for structure and styling
- **Container**: Provides consistent content width constraints that can be combined with Resizable for responsive layouts
- **Card**: Often used within Resizable.Item components to provide content boundaries and visual separation
- **Flyout**: Alternative solution for collapsible panels when dynamic resizing isn't necessary
- **Modal**: Used for overlay content when space allocation needs to be temporary rather than persistent
- **Scrim**: Can be combined with resizable layouts to create focus states or backdrop overlays during complex interactions