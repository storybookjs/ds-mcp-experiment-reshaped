# FileUpload Component

## Overview
The FileUpload component is a flexible file upload interface that supports drag-and-drop functionality, file selection via click, and customizable trigger elements with progress tracking and validation.

## Key Features
- Drag and drop file upload
- Click to select files
- Multiple file selection
- File type validation
- Size limit enforcement
- Progress tracking
- Custom trigger elements

## Props Interface
```typescript
type FileUploadProps = {
  children?: React.ReactNode;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  onFilesChange?: (files: File[]) => void;
  onDrop?: (files: File[]) => void;
  disabled?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic File Upload
```typescript
import { FileUpload, Text, View } from 'reshaped';

function BasicFileUpload() {
  const handleFilesChange = (files: File[]) => {
    console.log('Files selected:', files);
  };

  return (
    <FileUpload 
      accept="image/*"
      multiple
      onFilesChange={handleFilesChange}
    >
      <View 
        padding={6}
        align="center"
        gap={2}
        style={{ 
          border: '2px dashed #ccc',
          borderRadius: '8px'
        }}
      >
        <Text variant="title-6">Drop files here</Text>
        <Text color="neutral-faded">
          or click to select files
        </Text>
      </View>
    </FileUpload>
  );
}
```

### Custom Upload Area
```typescript
import { FileUpload, Button, Icon, View, Text } from 'reshaped';
import { UploadIcon } from './icons';

function CustomFileUpload() {
  return (
    <FileUpload 
      accept=".pdf,.doc,.docx"
      maxSize={10 * 1024 * 1024} // 10MB
      onFilesChange={(files) => {
        files.forEach(file => {
          console.log(`Uploading: ${file.name}`);
        });
      }}
    >
      <Button variant="outline" size="large">
        <Icon svg={UploadIcon} />
        Choose Documents
      </Button>
    </FileUpload>
  );
}
```

## Validation
- File type restrictions via `accept` prop
- File size limits with `maxSize`
- Custom validation callbacks
- Error state handling

## Accessibility
- Keyboard accessible file input
- Screen reader announcements
- Focus management
- Proper labeling

## Related Components
- **Button**: Trigger elements
- **Progress**: Upload progress indication