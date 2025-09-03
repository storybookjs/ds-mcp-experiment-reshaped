# Calendar Component

## Overview
The Calendar component is a flexible and accessible date picker that supports both single date selection and date range selection with extensive customization options and keyboard navigation.

## Key Features
- Single date and date range selection
- Keyboard navigation support
- Month/year navigation
- Disabled dates support
- Custom date formatting
- Localization support
- Accessible design

## Props Interface
```typescript
type CalendarProps = {
  value?: Date | { start: Date; end: Date } | null;
  onChange?: (value: Date | { start: Date; end: Date } | null) => void;
  mode?: 'single' | 'range';
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
  locale?: string;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Single Date Selection
```typescript
import { Calendar } from 'reshaped';
import { useState } from 'react';

function SingleDateCalendar() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <Calendar
      value={date}
      onChange={(value) => setDate(value as Date)}
      mode="single"
    />
  );
}
```

### Date Range Selection
```typescript
import { Calendar } from 'reshaped';
import { useState } from 'react';

function DateRangeCalendar() {
  const [range, setRange] = useState<{ start: Date; end: Date } | null>(null);

  return (
    <Calendar
      value={range}
      onChange={(value) => setRange(value as { start: Date; end: Date })}
      mode="range"
    />
  );
}
```

### With Disabled Dates
```typescript
import { Calendar } from 'reshaped';

function RestrictedCalendar() {
  const disabledDates = [
    new Date(2024, 11, 25), // Christmas
    new Date(2025, 0, 1),   // New Year
  ];

  return (
    <Calendar
      minDate={new Date()}
      maxDate={new Date(2025, 11, 31)}
      disabledDates={disabledDates}
      onChange={(date) => console.log('Selected:', date)}
    />
  );
}
```

## Accessibility
- Full keyboard navigation (arrow keys, Enter, Escape)
- Screen reader announcements for date selections
- ARIA labels for calendar grid and navigation
- Focus management and visual focus indicators
- Semantic markup with proper roles

## Keyboard Navigation
- **Arrow keys**: Navigate between dates
- **Enter/Space**: Select current date
- **Home/End**: Go to start/end of week
- **Page Up/Down**: Navigate months
- **Shift + Page Up/Down**: Navigate years

## Design Tokens
- Theme-aware colors for selection states
- Consistent spacing and sizing
- Typography scale integration
- Border radius and elevation tokens

## Related Components
- **DatePicker**: Input field with calendar popup
- **Button**: Navigation controls
- **Text**: Date labels and headers

## Best Practices
- Provide clear visual feedback for selections
- Use appropriate date constraints for your use case
- Consider timezone handling for your application
- Implement proper validation for date ranges
- Test with keyboard navigation