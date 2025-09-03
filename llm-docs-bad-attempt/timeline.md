# Timeline Component

## Overview
The Timeline component displays a sequence of events or steps in chronological order with optional visual markers, perfect for showing progress, history, or step-by-step processes.

## Key Features
- Chronological event display
- Customizable markers and icons
- Flexible content layout
- Responsive design
- Visual connection lines
- Accessibility support

## Props Interface
```typescript
type TimelineProps = {
  children: React.ReactNode;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};

type TimelineItemProps = {
  children: React.ReactNode;
  marker?: React.ReactNode;
  timestamp?: string;
  title?: string;
  status?: 'completed' | 'current' | 'pending';
};
```

## Usage Examples

### Basic Timeline
```typescript
import { Timeline, TimelineItem, Text, View } from 'reshaped';

function BasicTimeline() {
  const events = [
    {
      timestamp: '9:00 AM',
      title: 'Project Started',
      description: 'Initial project setup and planning phase began.',
      status: 'completed'
    },
    {
      timestamp: '11:30 AM',
      title: 'Design Review',
      description: 'Team review of initial design mockups and feedback.',
      status: 'completed'
    },
    {
      timestamp: '2:00 PM',
      title: 'Development',
      description: 'Started implementing core features and components.',
      status: 'current'
    },
    {
      timestamp: '4:00 PM',
      title: 'Testing',
      description: 'Quality assurance and bug fixing phase.',
      status: 'pending'
    }
  ];
  
  return (
    <Timeline>
      {events.map((event, index) => (
        <TimelineItem
          key={index}
          timestamp={event.timestamp}
          title={event.title}
          status={event.status}
        >
          <Text color="neutral-faded">{event.description}</Text>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
```

### Custom Markers Timeline
```typescript
import { Timeline, TimelineItem, Icon, Text, View } from 'reshaped';
import { CheckIcon, ClockIcon, StarIcon } from './icons';

function CustomMarkersTimeline() {
  const getMarker = (status: string) => {
    switch (status) {
      case 'completed':
        return <Icon svg={CheckIcon} color="positive" />;
      case 'current':
        return <Icon svg={ClockIcon} color="primary" />;
      default:
        return <Icon svg={StarIcon} color="neutral-faded" />;
    }
  };
  
  return (
    <Timeline>
      <TimelineItem
        marker={getMarker('completed')}
        timestamp="Yesterday"
        title="Order Placed"
      >
        <Text>Your order #12345 has been successfully placed.</Text>
      </TimelineItem>
      
      <TimelineItem
        marker={getMarker('completed')}
        timestamp="Today, 9:00 AM"
        title="Order Processed"
      >
        <Text>Your order is being prepared for shipment.</Text>
      </TimelineItem>
      
      <TimelineItem
        marker={getMarker('current')}
        timestamp="Today, 2:30 PM"
        title="In Transit"
      >
        <Text>Your order is on its way to your delivery address.</Text>
      </TimelineItem>
      
      <TimelineItem
        marker={getMarker('pending')}
        timestamp="Tomorrow"
        title="Delivered"
      >
        <Text>Estimated delivery to your address.</Text>
      </TimelineItem>
    </Timeline>
  );
}
```

### Activity Timeline
```typescript
import { Timeline, TimelineItem, Avatar, Text, View } from 'reshaped';

function ActivityTimeline() {
  const activities = [
    {
      user: { name: 'Alice Johnson', avatar: '/alice.jpg' },
      action: 'created a new task',
      target: 'Homepage Redesign',
      timestamp: '2 hours ago'
    },
    {
      user: { name: 'Bob Smith', avatar: '/bob.jpg' },
      action: 'commented on',
      target: 'User Dashboard',
      timestamp: '4 hours ago'
    },
    {
      user: { name: 'Carol Davis', avatar: '/carol.jpg' },
      action: 'completed',
      target: 'API Integration',
      timestamp: '1 day ago'
    }
  ];
  
  return (
    <Timeline>
      {activities.map((activity, index) => (
        <TimelineItem
          key={index}
          marker={
            <Avatar
              src={activity.user.avatar}
              alt={activity.user.name}
              size={8}
            />
          }
          timestamp={activity.timestamp}
        >
          <View gap={1}>
            <Text>
              <Text weight="medium">{activity.user.name}</Text>
              {' '}{activity.action}{' '}
              <Text weight="medium">{activity.target}</Text>
            </Text>
          </View>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
```

## Status Types
- **completed**: Finished events with success styling
- **current**: Active/in-progress events
- **pending**: Future events not yet started

## Accessibility
- Semantic list structure with proper markup
- Screen reader friendly event descriptions
- Keyboard navigation support
- Timeline progression announcements

## Related Components
- **Icon**: Event markers and status indicators
- **Avatar**: User representations in activity timelines
- **Text**: Event descriptions and metadata