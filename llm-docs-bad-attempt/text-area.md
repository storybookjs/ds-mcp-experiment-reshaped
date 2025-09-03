# TextArea Component

## Overview
The TextArea component is a flexible multi-line text input with support for various sizes, styles, auto-resize functionality, and form integration for longer text content.

## Key Features
- Multi-line text input
- Auto-resize functionality
- Character count display
- Validation states
- Placeholder text support
- Form integration
- Accessibility compliance

## Props Interface
```typescript
type TextAreaProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  autoResize?: boolean;
  maxLength?: number;
  className?: string;
  attributes?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};
```

## Usage Examples

### Basic TextArea
```typescript
import { TextArea, FormControl } from 'reshaped';
import { useState } from 'react';

function BasicTextArea() {
  const [message, setMessage] = useState('');
  
  return (
    <FormControl
      label="Message"
      helperText="Enter your message here"
    >
      <TextArea
        value={message}
        onChange={setMessage}
        placeholder="Type your message..."
        rows={4}
      />
    </FormControl>
  );
}
```

### Auto-Resize TextArea
```typescript
import { TextArea, FormControl } from 'reshaped';
import { useState } from 'react';

function AutoResizeTextArea() {
  const [content, setContent] = useState('');
  
  return (
    <FormControl
      label="Description"
      helperText="Describe your project in detail"
    >
      <TextArea
        value={content}
        onChange={setContent}
        placeholder="Start typing..."
        autoResize
        minRows={3}
        maxRows={10}
      />
    </FormControl>
  );
}
```

### TextArea with Character Count
```typescript
import { TextArea, FormControl, Text, View } from 'reshaped';
import { useState } from 'react';

function CharacterCountTextArea() {
  const [bio, setBio] = useState('');
  const maxLength = 280;
  
  return (
    <FormControl
      label="Bio"
      helperText={
        <View direction="row" justify="space-between">
          <Text variant="body-3" color="neutral-faded">
            Tell us about yourself
          </Text>
          <Text 
            variant="body-3" 
            color={bio.length > maxLength * 0.8 ? 'warning' : 'neutral-faded'}
          >
            {bio.length}/{maxLength}
          </Text>
        </View>
      }
    >
      <TextArea
        value={bio}
        onChange={setBio}
        placeholder="Write a short bio..."
        maxLength={maxLength}
        autoResize
        minRows={2}
        maxRows={6}
      />
    </FormControl>
  );
}
```

### Comment Form
```typescript
import { TextArea, Button, View, FormControl } from 'reshaped';
import { useState } from 'react';

function CommentForm() {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setComment('');
    setIsSubmitting(false);
  };
  
  return (
    <View gap={4}>
      <FormControl label="Add Comment">
        <TextArea
          value={comment}
          onChange={setComment}
          placeholder="Share your thoughts..."
          autoResize
          minRows={3}
          maxRows={8}
          maxLength={1000}
        />
      </FormControl>
      
      <View direction="row" gap={2} justify="flex-end">
        <Button 
          variant="outline"
          onClick={() => setComment('')}
          disabled={!comment || isSubmitting}
        >
          Clear
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!comment || isSubmitting}
          loading={isSubmitting}
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </Button>
      </View>
    </View>
  );
}
```

## Auto-Resize Behavior
- Automatically adjusts height based on content
- Respects minRows and maxRows constraints
- Smooth height transitions
- Performance optimized for large text

## Accessibility
- Proper textarea semantics
- Label association with FormControl
- Character count announcements
- Screen reader support
- Focus management

## Related Components
- **TextField**: Single-line text input
- **FormControl**: Form field wrapper with labels