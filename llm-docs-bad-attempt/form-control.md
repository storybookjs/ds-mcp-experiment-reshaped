# FormControl Component

## Overview
The FormControl component is a comprehensive form field wrapper that provides labels, helper text, error messages, and validation states for form inputs with consistent styling and accessibility.

## Key Features
- Form field labeling and description
- Error state management
- Helper text support
- Required field indication
- Validation state styling
- Accessibility compliance

## Props Interface
```typescript
type FormControlProps = {
  children: React.ReactNode;
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  required?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Form Control
```typescript
import { FormControl, TextField } from 'reshaped';
import { useState } from 'react';

function BasicFormControl() {
  const [email, setEmail] = useState('');
  
  return (
    <FormControl
      label="Email Address"
      helperText="We'll never share your email with anyone else"
      required
    >
      <TextField
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />
    </FormControl>
  );
}
```

### Form Control with Error State
```typescript
import { FormControl, TextField, Button, View } from 'reshaped';
import { useState } from 'react';

function FormControlWithValidation() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  
  const validatePassword = () => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)/.test(password)) {
      setError('Password must contain uppercase, lowercase, and numbers');
      return false;
    }
    setError('');
    return true;
  };
  
  const handleSubmit = () => {
    if (validatePassword()) {
      console.log('Password is valid');
    }
  };
  
  return (
    <View gap={4}>
      <FormControl
        label="Password"
        helperText="Must be at least 8 characters with mixed case and numbers"
        errorText={error}
        required
      >
        <TextField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          onBlur={validatePassword}
        />
      </FormControl>
      
      <Button onClick={handleSubmit}>
        Create Account
      </Button>
    </View>
  );
}
```

### Complex Form Layout
```typescript
import { FormControl, TextField, TextArea, Select, Option, Checkbox, Button, View } from 'reshaped';
import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });
  
  return (
    <View gap={5}>
      <View direction="row" gap={4}>
        <FormControl label="Full Name" required>
          <TextField
            value={formData.name}
            onChange={(name) => setFormData(prev => ({ ...prev, name }))}
            placeholder="Your full name"
          />
        </FormControl>
        
        <FormControl label="Email" required>
          <TextField
            type="email"
            value={formData.email}
            onChange={(email) => setFormData(prev => ({ ...prev, email }))}
            placeholder="your@email.com"
          />
        </FormControl>
      </View>
      
      <FormControl 
        label="Subject" 
        helperText="Choose the topic that best describes your message"
        required
      >
        <Select
          value={formData.subject}
          onChange={(subject) => setFormData(prev => ({ ...prev, subject }))}
          placeholder="Select a subject"
        >
          <Option value="general">General Inquiry</Option>
          <Option value="support">Technical Support</Option>
          <Option value="billing">Billing Question</Option>
          <Option value="feedback">Feedback</Option>
        </Select>
      </FormControl>
      
      <FormControl 
        label="Message" 
        helperText="Please provide as much detail as possible"
        required
      >
        <TextArea
          value={formData.message}
          onChange={(message) => setFormData(prev => ({ ...prev, message }))}
          placeholder="Type your message here..."
          rows={6}
        />
      </FormControl>
      
      <FormControl helperText="We'll only send you important updates">
        <Checkbox
          checked={formData.newsletter}
          onChange={(newsletter) => setFormData(prev => ({ ...prev, newsletter }))}
        >
          Subscribe to newsletter
        </Checkbox>
      </FormControl>
      
      <Button size="large">
        Send Message
      </Button>
    </View>
  );
}
```

### Custom Label Content
```typescript
import { FormControl, TextField, Text, View, Icon, Tooltip } from 'reshaped';
import { HelpIcon } from './icons';

function CustomLabelFormControl() {
  return (
    <FormControl
      label={
        <View direction="row" align="center" gap={2}>
          <Text>API Key</Text>
          <Tooltip
            trigger={<Icon svg={HelpIcon} size={4} color="neutral-faded" />}
            placement="right"
          >
            <Text variant="body-3">
              You can find your API key in the developer settings
            </Text>
          </Tooltip>
        </View>
      }
      helperText="Keep your API key secure and don't share it publicly"
      required
    >
      <TextField
        type="password"
        placeholder="Enter your API key"
      />
    </FormControl>
  );
}
```

### Different Sizes
```typescript
import { FormControl, TextField, View } from 'reshaped';

function FormControlSizes() {
  return (
    <View gap={4}>
      <FormControl
        label="Small Input"
        helperText="This is a small form control"
        size="small"
      >
        <TextField placeholder="Small size" />
      </FormControl>
      
      <FormControl
        label="Medium Input (Default)"
        helperText="This is the default medium size"
        size="medium"
      >
        <TextField placeholder="Medium size" />
      </FormControl>
      
      <FormControl
        label="Large Input"
        helperText="This is a large form control"
        size="large"
      >
        <TextField placeholder="Large size" />
      </FormControl>
    </View>
  );
}
```

## Form States
- **Default**: Normal form field state
- **Required**: Indicates mandatory fields
- **Error**: Shows validation errors with error styling
- **Disabled**: Non-interactive state
- **Helper**: Provides additional guidance

## Accessibility
- Proper label association with form inputs
- ARIA describedby for helper and error text
- Required field indication for screen readers
- Error state announcements
- Focus management and indicators

## Related Components
- **TextField**: Text input fields
- **TextArea**: Multi-line text inputs
- **Select**: Dropdown selection inputs
- **Checkbox**: Boolean input controls