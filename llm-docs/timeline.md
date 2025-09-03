# Timeline

## Component Name
Timeline

## Brief Description
A component for displaying chronological sequences of events or content items with optional visual markers and connecting lines.

## Keywords
Timeline, Chronology, Events, Sequence, History, Progress, Steps, Markers, Vertical Layout

## Usage Description

The Timeline component is designed to display a series of events, activities, or content items in chronological order. It provides a clean, vertical layout with optional visual markers and connecting lines that help users understand the sequence and relationship between different timeline items.

Use Timeline when you need to show:
- Historical events or milestones
- Step-by-step processes or workflows  
- Activity feeds or logs
- Progress through multi-stage processes
- News feeds or updates in chronological order

The component automatically handles the visual connections between items and provides flexibility in customizing markers for different types of events or states. Timeline items can contain any React content, making it versatile for various use cases from simple text lists to complex nested components.

## Props Documentation

### Timeline Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | No | `undefined` | The timeline items to display. Can be Timeline.Item components or any React nodes that will be automatically wrapped |
| `className` | `ClassName` | No | `undefined` | Additional CSS classes to apply to the timeline container |
| `attributes` | `Attributes<"ul">` | No | `undefined` | Additional HTML attributes to apply to the underlying `<ul>` element including data attributes and event handlers |

### Timeline.Item Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | No | `undefined` | The content to display in this timeline item |
| `markerSlot` | `React.ReactNode \| null` | No | `undefined` | Custom marker content to display. When `null`, no marker is shown and item takes full width. When `undefined`, a default circular marker is displayed |
| `className` | `ClassName` | No | `undefined` | Additional CSS classes to apply to the timeline item |
| `attributes` | `Attributes<"li">` | No | `undefined` | Additional HTML attributes to apply to the underlying `<li>` element including data attributes and event handlers |

### Type Definitions

```typescript
type ClassName = string | null | undefined | false | ClassName[];

type Attributes<TagName extends keyof React.JSX.IntrinsicElements> = 
  React.JSX.IntrinsicElements[TagName] & 
  Record<`data-${string}`, string | boolean> & 
  { style?: React.CSSProperties };
```

## Code Examples

### Basic Timeline with Automatic Item Wrapping

```tsx
import Timeline from 'reshaped/Timeline';

function BasicTimeline() {
  return (
    <Timeline>
      <div>
        <h4>Project Started</h4>
        <p>Initial setup and planning phase completed</p>
      </div>
      <div>
        <h4>Development Phase</h4>
        <p>Core features implemented and tested</p>
      </div>
      <div>
        <h4>Launch</h4>
        <p>Product successfully deployed to production</p>
      </div>
    </Timeline>
  );
}
```

This example shows the simplest usage where children are automatically wrapped in Timeline.Item components with default circular markers.

### Timeline with Explicit Items and Custom Markers

```tsx
import Timeline from 'reshaped/Timeline';
import { Icon } from 'reshaped';

function CustomMarkerTimeline() {
  return (
    <Timeline>
      <Timeline.Item markerSlot={<Icon name="play" />}>
        <div>
          <h4>Project Kickoff</h4>
          <p>Team assembled and goals defined</p>
          <small>January 15, 2024</small>
        </div>
      </Timeline.Item>
      
      <Timeline.Item markerSlot={<Icon name="code" />}>
        <div>
          <h4>Development Sprint 1</h4>
          <p>User authentication and basic UI implemented</p>
          <small>February 1, 2024</small>
        </div>
      </Timeline.Item>
      
      <Timeline.Item markerSlot={<Icon name="check" />}>
        <div>
          <h4>MVP Release</h4>
          <p>Minimum viable product launched to beta users</p>
          <small>March 15, 2024</small>
        </div>
      </Timeline.Item>
    </Timeline>
  );
}
```

This example demonstrates using custom icon markers to visually distinguish different types of events.

### Timeline with Mixed Marker Types

```tsx
import Timeline from 'reshaped/Timeline';
import { Badge, Avatar } from 'reshaped';

function MixedMarkerTimeline() {
  return (
    <Timeline>
      <Timeline.Item markerSlot={<Badge color="primary">1</Badge>}>
        <div>
          <h4>Planning Phase</h4>
          <p>Requirements gathering and architecture design</p>
        </div>
      </Timeline.Item>
      
      <Timeline.Item markerSlot={<Avatar src="/user-avatar.jpg" size="s" />}>
        <div>
          <h4>Code Review</h4>
          <p>John Smith reviewed and approved the initial implementation</p>
        </div>
      </Timeline.Item>
      
      <Timeline.Item>
        <div>
          <h4>Testing Complete</h4>
          <p>All unit tests passing, ready for deployment</p>
        </div>
      </Timeline.Item>
    </Timeline>
  );
}
```

This example shows mixing different marker types including badges, avatars, and default markers.

### Timeline with Full-Width Items

```tsx
import Timeline from 'reshaped/Timeline';

function FullWidthTimeline() {
  return (
    <Timeline>
      <Timeline.Item markerSlot={null}>
        <div style={{ padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
          <h4>System Maintenance</h4>
          <p>Scheduled downtime for database migration and server updates</p>
          <p><strong>Duration:</strong> 2 hours</p>
        </div>
      </Timeline.Item>
      
      <Timeline.Item markerSlot={null}>
        <div style={{ padding: '16px', backgroundColor: '#e8f4fd', borderRadius: '8px' }}>
          <h4>Feature Announcement</h4>
          <p>New dashboard analytics now available to all premium users</p>
        </div>
      </Timeline.Item>
      
      <Timeline.Item>
        <div>
          <h4>Back to Normal</h4>
          <p>All systems operational</p>
        </div>
      </Timeline.Item>
    </Timeline>
  );
}
```

This example demonstrates using `markerSlot={null}` to create full-width timeline items without markers, useful for announcements or special content blocks.

### Timeline with Custom Styling

```tsx
import Timeline from 'reshaped/Timeline';

function StyledTimeline() {
  return (
    <Timeline 
      className="custom-timeline"
      attributes={{ 'data-testid': 'project-timeline' }}
    >
      <Timeline.Item 
        className="priority-high"
        attributes={{ 'data-priority': 'high' }}
        markerSlot={
          <div style={{ 
            width: '20px', 
            height: '20px', 
            backgroundColor: '#ff4757', 
            borderRadius: '50%' 
          }} />
        }
      >
        <div>
          <h4>Critical Bug Fix</h4>
          <p>Security vulnerability patched immediately</p>
        </div>
      </Timeline.Item>
      
      <Timeline.Item 
        className="priority-medium"
        attributes={{ 'data-priority': 'medium' }}
      >
        <div>
          <h4>Feature Update</h4>
          <p>Enhanced user interface with improved accessibility</p>
        </div>
      </Timeline.Item>
    </Timeline>
  );
}
```

This example shows how to apply custom styling and data attributes for testing or advanced styling needs.

## Related Components

- **View**: Used internally for layout structure and spacing. Timeline items are built using View components with row direction and proper alignment.
- **View.Item**: Used internally within Timeline.Item to create flexible content containers that grow to fill available space.
- **List**: Alternative component for non-chronological item display without connecting lines or markers.
- **Steps**: More appropriate for step-by-step processes where users need to progress through defined stages.
- **Card**: Can be used within Timeline items to create more structured content blocks.
- **Badge**: Commonly used as custom markers to indicate status, priority, or sequence numbers.
- **Icon**: Frequently used as custom markers to represent different event types or states.
- **Avatar**: Useful as markers when showing user activities or actions in the timeline.

## Accessibility Considerations

The Timeline component is built with accessibility in mind:

- Uses semantic `<ul>` and `<li>` elements for proper screen reader navigation
- Supports all standard HTML attributes including ARIA attributes through the `attributes` prop
- Maintains logical tab order through the timeline items
- Visual markers are supplementary and don't convey essential information that isn't also available in text form
- Custom markers should include appropriate alt text or ARIA labels when conveying important information

## Implementation Details

- Timeline automatically wraps non-Timeline.Item children in Timeline.Item components
- Default markers are created using CSS pseudo-elements when no markerSlot is provided  
- Connecting lines between markers are handled automatically with CSS
- The last item in a timeline doesn't show a connecting line to avoid visual confusion
- Full-width items (markerSlot={null}) include separator lines to maintain visual hierarchy
- Built on top of the View component system for consistent spacing and layout