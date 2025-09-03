# TextArea

**Brief Description**: A multi-line text input component with configurable variants, sizes, and automatic resize functionality.

**Keywords**: Text Input, Multi-line, Form Field, Input, Textarea, Auto-resize, Form Control

## Usage Description

The TextArea component is designed for collecting longer text input from users, such as comments, descriptions, feedback, or any multi-line content. It provides a flexible and accessible way to handle text input that exceeds what a single-line TextField can accommodate.

Use TextArea when you need users to enter more than a few words or when the content is expected to span multiple lines. It's particularly useful for forms that collect user feedback, descriptions, messages, or any free-form text content. The component integrates seamlessly with the FormControl component to provide proper labeling, error states, and helper text.

The component supports both controlled and uncontrolled usage patterns, making it suitable for various state management approaches in React applications. It also features automatic height adjustment when configured with the auto-resize option, eliminating the need for users to manually resize the text area.

## Props Documentation

### Required Props

- **`name`** (`string`) - **Required** - The name attribute for the textarea element, used for form submission and accessibility

### Optional Props

- **`id`** (`string`) - **Optional** - Custom ID for the textarea element. If not provided, an auto-generated ID will be used
- **`value`** (`string`) - **Optional** - The controlled value of the textarea. When provided, the component becomes controlled and `defaultValue` cannot be used
- **`defaultValue`** (`string`) - **Optional** - The initial value for uncontrolled usage. Cannot be used together with `value` prop
- **`placeholder`** (`string`) - **Optional** - Placeholder text displayed when the textarea is empty
- **`size`** (`Responsive<"medium" | "large" | "xlarge">`) - **Optional** - Default: `"medium"` - Controls the size and padding of the textarea. Can be responsive using viewport-specific values
- **`variant`** (`"outline" | "faded" | "headless"`) - **Optional** - Default: `"outline"` - Visual style variant of the textarea
- **`resize`** (`"none" | "auto"`) - **Optional** - Controls the resize behavior. `"none"` disables resizing, `"auto"` enables automatic height adjustment based on content
- **`disabled`** (`boolean`) - **Optional** - When true, disables the textarea and applies disabled styling
- **`hasError`** (`boolean`) - **Optional** - When true, applies error styling to indicate validation errors
- **`onChange`** (`ChangeHandler<string, React.ChangeEvent<HTMLTextAreaElement>>`) - **Optional** - Callback fired when the textarea value changes. Receives an object with `name`, `value`, and `event` properties
- **`onFocus`** (`(e: React.FocusEvent<HTMLTextAreaElement>) => void`) - **Optional** - Callback fired when the textarea receives focus
- **`onBlur`** (`(e: React.FocusEvent<HTMLTextAreaElement>) => void`) - **Optional** - Callback fired when the textarea loses focus
- **`className`** (`ClassName`) - **Optional** - Additional CSS class names for the root container
- **`attributes`** (`Attributes<"div">`) - **Optional** - Additional HTML attributes for the root div container
- **`inputAttributes`** (`Attributes<"textarea">`) - **Optional** - Additional HTML attributes for the textarea element

### Size Options

- **`"medium"`** - Standard size with moderate padding and font size
- **`"large"`** - Larger size with increased padding and font size
- **`"xlarge"`** - Extra large size with maximum padding and font size

### Variant Options

- **`"outline"`** - Default variant with visible border and background
- **`"faded"`** - Subtle variant with faded background and no border until focused
- **`"headless"`** - Minimal variant with no visible styling, transparent background and borders

## Code Examples

### Basic Usage

```tsx
import { TextArea } from 'reshaped';

// Basic uncontrolled textarea
function BasicExample() {
  return (
    <TextArea 
      name="description" 
      placeholder="Enter your description here..." 
    />
  );
}
```

### Controlled Usage with State Management

```tsx
import { TextArea } from 'reshaped';
import { useState } from 'react';

function ControlledExample() {
  const [value, setValue] = useState('');
  
  return (
    <TextArea 
      name="message" 
      value={value}
      placeholder="Type your message..."
      onChange={({ value }) => setValue(value)}
    />
  );
}
```

### Form Integration with FormControl

```tsx
import { TextArea, FormControl } from 'reshaped';

function FormExample() {
  return (
    <FormControl>
      <FormControl.Label>Feedback</FormControl.Label>
      <TextArea 
        name="feedback" 
        placeholder="Share your thoughts..."
        size="large"
      />
      <FormControl.Helper>
        Please provide detailed feedback to help us improve.
      </FormControl.Helper>
      <FormControl.Error>
        This field is required
      </FormControl.Error>
    </FormControl>
  );
}
```

### Auto-resizing TextArea

```tsx
import { TextArea } from 'reshaped';

function AutoResizeExample() {
  return (
    <TextArea 
      name="content" 
      placeholder="This textarea will grow as you type..."
      resize="auto"
      variant="faded"
    />
  );
}
```

### Responsive Sizing and Error Handling

```tsx
import { TextArea } from 'reshaped';
import { useState } from 'react';

function ResponsiveExample() {
  const [hasError, setHasError] = useState(false);
  
  return (
    <TextArea 
      name="description"
      placeholder="Enter description..."
      size={{ s: "xlarge", m: "medium" }}
      hasError={hasError}
      onChange={({ value }) => {
        setHasError(value.length < 10);
      }}
    />
  );
}
```

### Using TextArea.Aligner for Layout

```tsx
import { TextArea, View, Text, Button } from 'reshaped';

function AlignerExample() {
  return (
    <View gap={2}>
      <Text variant="featured-2">
        What problem are you trying to solve?
      </Text>
      <TextArea.Aligner>
        <TextArea 
          variant="headless" 
          placeholder="Try something like 'I have a job'"
          name="description"
        />
      </TextArea.Aligner>
      <Button>Next</Button>
    </View>
  );
}
```

## Accessibility Considerations

The TextArea component follows accessibility best practices:

- **Proper labeling**: When used with FormControl, the component automatically associates labels with the textarea using `aria-labelledby`
- **Error state communication**: Error states are communicated through both visual styling and ARIA attributes
- **Focus management**: Proper focus states and keyboard navigation support
- **Screen reader support**: All text content is accessible to screen readers
- **Semantic HTML**: Uses native `textarea` element for proper semantic meaning

## Related Components

- **FormControl**: Primary wrapper component for form fields, providing labels, helper text, and error messaging
- **TextField**: Single-line text input component for shorter text input
- **Button**: Often used alongside TextArea in forms for submission actions
- **View**: Layout component frequently used to structure forms containing TextArea
- **Text**: Typography component used for labels and helper content in forms
- **TextArea.Aligner**: Layout utility component for aligning TextArea with other elements in complex layouts

The TextArea component is part of the Reshaped design system's form input family and shares consistent styling, behavior patterns, and integration capabilities with other form components.