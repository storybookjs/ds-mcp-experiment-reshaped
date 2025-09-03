# Loader

## Brief Description
A circular spinning loader component that indicates loading or processing states.

## Keywords
Loading Indicator, Spinner, Progress, Loading State, Circular Progress, Activity Indicator, Loading Animation, Progress Bar

## Usage Description

The Loader component is used to indicate that an operation is in progress, providing visual feedback to users during loading states. It displays as an animated circular spinner that continuously rotates, signaling ongoing background processes such as data fetching, form submission, or content loading.

Use the Loader component when you need to communicate to users that something is happening behind the scenes and they should wait for the process to complete. It's particularly effective in scenarios like async API calls, file uploads, form processing, or page transitions where immediate feedback isn't available.

The component is designed to be semantically accessible with proper ARIA attributes and can be customized in size and color to match your application's design system. It supports responsive sizing and inherits text color when needed, making it flexible for various UI contexts.

## Props Documentation

### `size`
- **Type**: `G.Responsive<"small" | "medium" | "large">`
- **Required**: No
- **Default**: `"small"`
- **Description**: Controls the physical size of the loader spinner. Supports responsive values for different viewport breakpoints.
- **Values**:
  - `"small"` - 16px diameter with 2px stroke
  - `"medium"` - 24px diameter with 3px stroke  
  - `"large"` - 40px diameter with 5px stroke
- **Example**: `size="medium"` or `size={{ s: "small", m: "medium" }}`

### `color`
- **Type**: `"primary" | "critical" | "positive" | "inherit"`
- **Required**: No
- **Default**: `"primary"`
- **Description**: Sets the color theme of the loader spinner.
- **Values**:
  - `"primary"` - Uses the primary border color from the theme
  - `"critical"` - Uses the critical/error border color (typically red)
  - `"positive"` - Uses the positive/success border color (typically green)
  - `"inherit"` - Inherits the current text color from parent element
- **Example**: `color="critical"`

### `ariaLabel`
- **Type**: `string`
- **Required**: No
- **Default**: `undefined`
- **Description**: Provides an accessible label for screen readers to describe the loading state.
- **Example**: `ariaLabel="Loading user data"`

### `className`
- **Type**: `G.ClassName`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS class names to apply to the loader container for custom styling.
- **Example**: `className="my-custom-loader"`

### `attributes`
- **Type**: `G.Attributes<"span">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to apply to the span element, including data attributes and standard span props.
- **Example**: `attributes={{ "data-testid": "loading-spinner", id: "main-loader" }}`

## Code Examples

### Basic Usage
```tsx
import { Loader } from 'reshaped';

// Simple loader with default small size and primary color
function LoadingState() {
  return (
    <div>
      <p>Loading data...</p>
      <Loader ariaLabel="Loading data" />
    </div>
  );
}
```

### Different Sizes
```tsx
import { Loader } from 'reshaped';

// Demonstrating different loader sizes
function LoaderSizes() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Loader size="small" ariaLabel="Small loader" />
      <Loader size="medium" ariaLabel="Medium loader" />
      <Loader size="large" ariaLabel="Large loader" />
    </div>
  );
}
```

### Color Variants
```tsx
import { Loader } from 'reshaped';

// Different color themes for various contexts
function ColoredLoaders() {
  return (
    <div>
      {/* Default primary loader */}
      <Loader ariaLabel="Primary loading" />
      
      {/* Error state loader */}
      <Loader color="critical" ariaLabel="Error processing" />
      
      {/* Success state loader */}
      <Loader color="positive" ariaLabel="Success processing" />
      
      {/* Inherit parent text color */}
      <div style={{ color: '#6366f1' }}>
        <Loader color="inherit" ariaLabel="Custom colored loader" />
      </div>
    </div>
  );
}
```

### Responsive Sizing
```tsx
import { Loader } from 'reshaped';

// Loader that changes size based on viewport
function ResponsiveLoader() {
  return (
    <Loader 
      size={{ 
        s: "small",    // Small on mobile
        m: "medium",   // Medium on tablet
        l: "large"     // Large on desktop
      }}
      ariaLabel="Responsive loading indicator"
    />
  );
}
```

### Loading Overlay
```tsx
import { Loader } from 'reshaped';

// Centered loader for full-page loading states
function LoadingOverlay() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <Loader size="large" ariaLabel="Processing request" />
        <p>Please wait while we process your request...</p>
      </div>
    </div>
  );
}
```

### Button Loading State
```tsx
import { Loader, Button } from 'reshaped';

// Loader integrated with button for form submission states
function SubmitButton({ isLoading, onSubmit }) {
  return (
    <Button
      disabled={isLoading}
      onClick={onSubmit}
      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
    >
      {isLoading && (
        <Loader 
          size="small" 
          color="inherit" 
          ariaLabel="Submitting form"
        />
      )}
      {isLoading ? 'Submitting...' : 'Submit'}
    </Button>
  );
}
```

## Related Components

### Progress Components
- **Progress**: For determinate progress indication where completion percentage is known
- **ProgressBar**: Linear progress indication alternative to circular loader
- **Skeleton**: Static placeholder content for loading states with known layouts

### Layout Components  
- **Container**: For centering loaders within page layouts
- **Card**: Often contains loaders during content loading states
- **Modal**: Frequently uses loaders for async operations within dialogs

### Interactive Components
- **Button**: Commonly integrates with loaders during action processing
- **Form**: Uses loaders during submission and validation processes
- **DataTable**: Shows loaders during data fetching and filtering operations