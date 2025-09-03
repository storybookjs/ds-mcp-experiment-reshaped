# FileUpload

**Component Name**: FileUpload

**Brief Description**: A drag-and-drop file upload component with visual feedback and customizable trigger options.

**Keywords**: File Upload, Drag and Drop, File Input, File Selection, Drop Zone, Upload Area, File Picker, Form Input

## Usage Description

The FileUpload component provides an intuitive interface for file selection through both drag-and-drop interactions and traditional file browser dialogs. It serves as a modern replacement for standard HTML file inputs, offering enhanced visual feedback and accessibility features.

Use this component when you need to collect files from users in forms, content management interfaces, or any application that requires file uploads. The component supports both single and multiple file selection, with built-in visual highlighting when files are dragged over the drop zone. It's particularly useful for creating rich file upload experiences in web applications, document management systems, or media upload workflows.

The component can be rendered in different styles - from a prominent dashed border drop zone to a completely headless variant that allows you to style the trigger however you prefer. This flexibility makes it suitable for both standalone upload areas and inline upload buttons integrated into existing UI layouts.

## Props Documentation

### Main Component Props

- **name** (string, required): The name attribute for the internal input element, used for form submission and identifying the field
- **children** (React.ReactNode | function, optional): Either static content to display in the upload area, or a render function that receives `{ highlighted: boolean }` to dynamically render based on drag state
- **onChange** (function, optional): Callback fired when files are selected or dropped. Receives `{ name: string, value: File[], event: React.DragEvent | React.ChangeEvent }`
- **height** (ViewProps["height"], optional): Controls the height of the upload area. Accepts standard View height values
- **variant** ("outline" | "headless", optional, default: "outline"): Visual style variant. "outline" shows a dashed border, "headless" provides no default styling
- **inline** (boolean, optional, default: false): When true, renders the component as an inline-block element rather than full-width block
- **className** (string | string[], optional): Additional CSS classes to apply to the root element
- **attributes** (object, optional): Additional HTML attributes to pass to the root div element, including drag event handlers
- **inputAttributes** (object, optional): Additional HTML attributes to pass to the internal file input element

### FileUpload.Trigger Props

- **children** (React.ReactNode, required): Content to render inside the trigger element that can be clicked to open the file browser

## Code Examples

### Basic File Upload with Drop Zone

```tsx
import FileUpload from 'reshaped/FileUpload';
import View from 'reshaped/View';
import Icon from 'reshaped/Icon';
import IconMic from 'reshaped/icons/Mic';

function BasicUpload() {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleChange = ({ value }: { value: File[] }) => {
    setFiles(prev => [...prev, ...value]);
  };

  return (
    <FileUpload name="documents" onChange={handleChange}>
      <View gap={3}>
        <Icon svg={IconMic} size={8} />
        Drop files to attach
      </View>
    </FileUpload>
  );
}
```
*Demonstrates basic usage with a visual drop zone and file state management*

### Upload with Custom Trigger Button

```tsx
import FileUpload from 'reshaped/FileUpload';
import Link from 'reshaped/Link';

function UploadWithTrigger() {
  return (
    <FileUpload name="attachments">
      <div>
        Drop files to attach, or{' '}
        <FileUpload.Trigger>
          <Link variant="plain">browse</Link>
        </FileUpload.Trigger>
      </div>
    </FileUpload>
  );
}
```
*Shows how to combine drag-and-drop with a clickable trigger for file browser access*

### Inline Upload Button

```tsx
import FileUpload from 'reshaped/FileUpload';
import Button from 'reshaped/Button';

function InlineUpload() {
  return (
    <FileUpload 
      name="profile-image" 
      variant="headless" 
      inline
      onChange={console.log}
    >
      <Button>Upload Photo</Button>
    </FileUpload>
  );
}
```
*Demonstrates inline styling with headless variant for seamless UI integration*

### Upload with Render Props and Highlight State

```tsx
import FileUpload from 'reshaped/FileUpload';
import Button from 'reshaped/Button';

function HighlightUpload() {
  return (
    <FileUpload 
      name="files" 
      variant="headless" 
      inline
      onChange={handleFileChange}
    >
      {({ highlighted }) => (
        <Button variant={highlighted ? "primary" : "outline"}>
          {highlighted ? "Drop files now!" : "Upload Files"}
        </Button>
      )}
    </FileUpload>
  );
}
```
*Shows dynamic rendering based on drag state using render props pattern*

### Custom Height Upload Area

```tsx
import FileUpload from 'reshaped/FileUpload';
import View from 'reshaped/View';
import Icon from 'reshaped/Icon';
import IconDocument from 'reshaped/icons/Document';

function LargeUploadArea() {
  return (
    <FileUpload name="bulk-files" height="300px">
      <View gap={4} align="center">
        <Icon svg={IconDocument} size={12} />
        <View>
          <View as="h3">Bulk File Upload</View>
          <View>Drop multiple files or folders here</View>
        </View>
      </View>
    </FileUpload>
  );
}
```
*Demonstrates custom sizing for larger upload areas with enhanced visual design*

## Accessibility Considerations

The FileUpload component implements several accessibility features:

- **Screen Reader Support**: Uses HiddenVisually component to make the file input accessible to screen readers while keeping it visually hidden
- **Keyboard Navigation**: Supports standard Tab navigation and Enter/Space key activation through the underlying input element
- **Focus Management**: Provides proper focus indicators when navigating with keyboard
- **Semantic Structure**: Uses proper label association between the trigger area and file input
- **ARIA Labels**: The internal input maintains proper form semantics and labeling

When using the component, ensure that:
- Provide clear instructions about accepted file types and size limits
- Include appropriate error messaging for upload failures
- Consider announcing file selection success to screen reader users
- Test keyboard navigation flows in your specific implementation

## Related Components

- **HiddenVisually**: Used internally to hide the file input while maintaining accessibility
- **View**: Provides the layout and styling foundation for the upload area
- **Button**: Commonly used with FileUpload.Trigger for clickable upload actions
- **Link**: Often used within FileUpload.Trigger for styled text triggers
- **Icon**: Frequently used to provide visual cues in upload areas
- **Image**: Useful for displaying file previews after upload

The FileUpload component integrates seamlessly with form components and can be used alongside other form fields in complex upload workflows.