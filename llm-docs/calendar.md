# Calendar

**Component Name**: Calendar

**Brief Description**: A versatile date picker component that supports both single date and date range selection with keyboard navigation and accessibility features.

**Keywords**: Date Picker, Date Selection, Range Selection, Calendar Widget, Date Input, Month Navigation, Keyboard Navigation, Accessibility

## Usage Description

The Calendar component is a comprehensive date selection interface that allows users to pick individual dates or date ranges through an intuitive calendar grid. It serves as a standalone widget for date selection without requiring an input field, making it ideal for inline date picking scenarios such as booking interfaces, scheduling applications, and date filtering controls.

The component automatically handles both controlled and uncontrolled usage patterns. When a `value` prop is provided, it operates in controlled mode where the parent component manages the selected state. Without a `value` prop, it operates in uncontrolled mode with internal state management. This flexibility makes it suitable for various architectural patterns and form libraries.

The Calendar supports comprehensive keyboard navigation following WAI-ARIA guidelines, allowing users to navigate dates using arrow keys, select dates with Enter/Space, and navigate between months and years. It includes robust accessibility features with proper ARIA labels, roles, and semantic markup to ensure compatibility with screen readers and other assistive technologies.

## Props Documentation

### Core Selection Props

**`value`** (SingleValue | RangeValue | null) - _Optional_  
The current selected date(s) in controlled mode. For single selection, pass a Date object. For range selection, pass an object with `start` and `end` Date properties. Only used in controlled mode.

**`defaultValue`** (SingleValue | RangeValue) - _Optional_  
The initial selected date(s) in uncontrolled mode. Same format as `value` but only used when `value` is not provided.

**`onChange`** ((args: { value: SingleValue | RangeValue }) => void) - _Optional_  
Callback fired when the selected date(s) change. Receives an object containing the new `value`.

**`range`** (boolean) - _Optional, defaults to false_  
Whether to enable date range selection mode. When `true`, users can select a start and end date.

### Calendar Configuration

**`defaultMonth`** (Date) - _Optional_  
The month to display when the calendar first renders. If not provided, defaults to the current month.

**`min`** (Date) - _Optional_  
The minimum selectable date. Dates before this will be disabled and not selectable.

**`max`** (Date) - _Optional_  
The maximum selectable date. Dates after this will be disabled and not selectable.

**`firstWeekDay`** (number) - _Optional, defaults to 0_  
The first day of the week where 0 is Sunday, 1 is Monday, etc. Changes the column order in the calendar grid.

**`selectedDates`** (Date[]) - _Optional_  
Array of additional dates to mark as selected (highlighted) without affecting the main selection value. Useful for showing multiple significant dates.

### Rendering Customization

**`renderWeekDay`** ((args: { weekDay: number; date: Date }) => string) - _Optional_  
Function to customize weekday header labels. Receives the weekday number and a sample date for that day.

**`renderSelectedMonthLabel`** ((args: { date: Date }) => string) - _Optional_  
Function to customize the month/year display in the header. Receives the current month date.

**`renderMonthLabel`** ((args: { month: number; date: Date }) => string) - _Optional_  
Function to customize month labels in the month selection view. Receives the month number (0-11) and a date for that month.

### Accessibility Props

**`previousMonthAriaLabel`** (string) - _Optional, defaults to "Previous month"_  
ARIA label for the previous month navigation button.

**`nextMonthAriaLabel`** (string) - _Optional, defaults to "Next month"_  
ARIA label for the next month navigation button.

**`previousYearAriaLabel`** (string) - _Optional, defaults to "Previous year"_  
ARIA label for the previous year navigation button (in month selection mode).

**`nextYearAriaLabel`** (string) - _Optional, defaults to "Next year"_  
ARIA label for the next year navigation button (in month selection mode).

**`monthSelectionAriaLabel`** (string) - _Optional, defaults to "Select a month"_  
ARIA label for the month/year header button that opens month selection.

**`renderDateAriaLabel`** ((args: { date: Date }) => string) - _Optional_  
Function to customize ARIA labels for date buttons. Should return a descriptive label for screen readers.

**`renderMonthAriaLabel`** ((args: { month: number }) => string) - _Optional_  
Function to customize ARIA labels for month buttons in month selection mode.

## Code Examples

### Basic Single Date Selection

```tsx
import { Calendar } from "reshaped";

function BasicCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Calendar
      value={selectedDate}
      onChange={({ value }) => setSelectedDate(value)}
      defaultMonth={new Date()}
    />
  );
}
```

This example shows the most basic usage for single date selection in controlled mode.

### Uncontrolled Calendar with Default Value

```tsx
import { Calendar } from "reshaped";

function UncontrolledCalendar() {
  return (
    <Calendar
      defaultValue={new Date()}
      onChange={({ value }) => console.log("Selected:", value)}
      defaultMonth={new Date()}
    />
  );
}
```

This demonstrates uncontrolled usage where the component manages its own state internally.

### Date Range Selection

```tsx
import { Calendar } from "reshaped";

function RangeCalendar() {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  return (
    <Calendar
      range={true}
      value={range}
      onChange={({ value }) => setRange(value)}
      defaultMonth={new Date()}
    />
  );
}
```

Shows how to implement date range selection with controlled state management.

### Calendar with Constraints and Custom Rendering

```tsx
import { Calendar } from "reshaped";

function CustomCalendar() {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 31);

  return (
    <Calendar
      defaultMonth={today}
      min={today}
      max={nextMonth}
      firstWeekDay={1} // Start week on Monday
      renderWeekDay={({ date }) =>
        date.toLocaleDateString("en", { weekday: "short" }).toUpperCase()
      }
      renderSelectedMonthLabel={({ date }) =>
        date.toLocaleDateString("en", { month: "long", year: "numeric" })
      }
      selectedDates={[
        new Date(today.getFullYear(), today.getMonth(), 15),
        new Date(today.getFullYear(), today.getMonth(), 20),
      ]}
    />
  );
}
```

This example demonstrates date constraints, custom week start day, custom rendering functions, and additional highlighted dates.

### Internationalized Calendar

```tsx
import { Calendar } from "reshaped";

function InternationalCalendar() {
  return (
    <Calendar
      defaultMonth={new Date()}
      renderWeekDay={({ date }) =>
        date.toLocaleDateString("de-DE", { weekday: "short" })
      }
      renderSelectedMonthLabel={({ date }) =>
        date.toLocaleDateString("de-DE", { month: "long", year: "numeric" })
      }
      renderMonthLabel={({ date }) =>
        date.toLocaleDateString("de-DE", { month: "short" })
      }
      previousMonthAriaLabel="Vorheriger Monat"
      nextMonthAriaLabel="Nächster Monat"
      monthSelectionAriaLabel="Monat auswählen"
      renderDateAriaLabel={({ date }) =>
        date.toLocaleDateString("de-DE", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }
    />
  );
}
```

Shows how to localize the calendar for different languages and regions using custom render functions.

### Calendar with Full Accessibility Labels

```tsx
import { Calendar } from "reshaped";

function AccessibleCalendar() {
  return (
    <Calendar
      defaultMonth={new Date()}
      previousMonthAriaLabel="Go to previous month"
      nextMonthAriaLabel="Go to next month"
      previousYearAriaLabel="Go to previous year"
      nextYearAriaLabel="Go to next year"
      monthSelectionAriaLabel="Choose a different month"
      renderDateAriaLabel={({ date }) => {
        const isToday = date.toDateString() === new Date().toDateString();
        const baseLabel = date.toLocaleDateString("en", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return isToday ? `${baseLabel}, today` : baseLabel;
      }}
      renderMonthAriaLabel={({ month }) => {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `Select ${monthNames[month]}`;
      }}
    />
  );
}
```

Demonstrates comprehensive accessibility labeling for screen reader compatibility.

## Accessibility Considerations

The Calendar component is built with comprehensive accessibility support following WAI-ARIA guidelines:

- **Keyboard Navigation**: Full arrow key navigation between dates, Tab navigation between interactive elements, Enter/Space for selection
- **Screen Reader Support**: Proper ARIA roles, labels, and states for all interactive elements
- **Focus Management**: Intelligent focus handling with visible focus indicators and logical tab order
- **Date Announcements**: Customizable ARIA labels for dates, months, and navigation controls
- **Grid Semantics**: Proper table/grid markup for calendar structure recognition
- **State Communication**: Clear indication of selected, disabled, and highlighted dates

The component automatically manages focus states and ensures that keyboard users can efficiently navigate and select dates without requiring mouse interaction.

## Related Components

- **DateField**: A text input component for date entry that could be paired with Calendar in a dropdown
- **View**: Used internally for layout and spacing of calendar sections
- **Button**: Used for navigation controls and date selection buttons

The Calendar component is designed as a standalone widget but integrates well with form libraries and can be combined with input components to create complete date picker solutions.
