# getDataAttributes Utility Function

**Component Name**: getDataAttributes

**Brief Description**: A utility function for extracting and filtering data attributes from React props or DOM elements to ensure clean prop forwarding and attribute handling.

**Keywords**: Data Attributes, Props Filtering, DOM Attributes, React Props, Utility Function, Component Props, Attribute Extraction, Data Handling

## Usage Description

The `getDataAttributes` utility function is designed to extract data attributes (attributes starting with `data-`) from various sources such as React component props, DOM elements, or arbitrary objects. This function is particularly useful when building React components that need to forward data attributes to DOM elements while filtering out component-specific props.

In the context of design systems like Reshaped, this utility helps maintain clean prop interfaces by separating data attributes from functional props. It ensures that only valid HTML data attributes are passed to DOM elements, preventing React warnings about unknown DOM properties and maintaining semantic HTML structure.

The function is especially valuable when creating wrapper components, higher-order components, or when implementing component composition patterns where data attributes need to be preserved and forwarded correctly through the component tree.

## Props Documentation

### Function Signature
```typescript
function getDataAttributes<T extends Record<string, any>>(
  source: T | HTMLElement,
  options?: GetDataAttributesOptions
): Record<string, string | boolean>
```

### Parameters

**source** `T | HTMLElement` (required)
- The source object or DOM element from which to extract data attributes
- When an object: Extracts properties that start with `data-`
- When a DOM element: Extracts data attributes using `dataset` or `getAttributeNames`
- Default value: N/A
- Example values: `{ 'data-testid': 'button', onClick: () => {} }`, `document.getElementById('element')`

**options** `GetDataAttributesOptions` (optional)
- Configuration object to customize the extraction behavior
- Controls filtering, transformation, and output format
- Default value: `{}`
- Example values: `{ includeDataPrefix: true, filterEmpty: true }`

### Options Interface
```typescript
interface GetDataAttributesOptions {
  /** Include the 'data-' prefix in result keys */
  includeDataPrefix?: boolean;
  
  /** Filter out empty string and undefined values */
  filterEmpty?: boolean;
  
  /** Transform keys using a custom function */
  keyTransform?: (key: string) => string;
  
  /** Transform values using a custom function */
  valueTransform?: (value: any) => string | boolean;
  
  /** Only include attributes matching this pattern */
  include?: RegExp | string[];
  
  /** Exclude attributes matching this pattern */
  exclude?: RegExp | string[];
}
```

### Return Type
Returns `Record<string, string | boolean>` containing the extracted data attributes with string or boolean values.

## Code Examples

### Basic Usage - Extract from React Props
```typescript
import { getDataAttributes } from './utils/getDataAttributes';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  'data-testid'?: string;
  'data-analytics-event'?: string;
  disabled?: boolean;
}

const Button = ({ children, onClick, disabled, ...props }: ButtonProps) => {
  // Extract only data attributes from props
  const dataAttributes = getDataAttributes(props);
  
  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      {...dataAttributes}
    >
      {children}
    </button>
  );
};

// Usage
<Button 
  onClick={() => console.log('clicked')} 
  data-testid="submit-button"
  data-analytics-event="form_submit"
  className="custom-style" // This won't be included in dataAttributes
>
  Submit
</Button>
```

### Advanced Usage - Custom Filtering and Transformation
```typescript
import { getDataAttributes } from './utils/getDataAttributes';

const ComplexComponent = (props: ComponentProps) => {
  // Extract data attributes with custom options
  const analyticsAttributes = getDataAttributes(props, {
    include: ['data-analytics-', 'data-track-'],
    keyTransform: (key) => key.replace('data-analytics-', 'data-'),
    filterEmpty: true,
    includeDataPrefix: true
  });
  
  const testingAttributes = getDataAttributes(props, {
    include: /^data-test/,
    valueTransform: (value) => String(value).toLowerCase()
  });

  return (
    <div 
      {...analyticsAttributes}
      {...testingAttributes}
      className="component-wrapper"
    >
      {/* Component content */}
    </div>
  );
};
```

### DOM Element Extraction
```typescript
import { getDataAttributes } from './utils/getDataAttributes';

// Extract data attributes from an existing DOM element
const extractElementData = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return {};
  
  const dataAttrs = getDataAttributes(element, {
    includeDataPrefix: false,
    filterEmpty: true
  });
  
  console.log('Extracted data attributes:', dataAttrs);
  // Output: { testid: 'example', value: '123' }
  
  return dataAttrs;
};

// Usage with existing DOM element
// <div id="example" data-testid="example" data-value="123" class="styled">
extractElementData('example');
```

### Integration with Reshaped Components
```typescript
import { View, type ViewProps } from 'reshaped';
import { getDataAttributes } from './utils/getDataAttributes';

interface CustomViewProps extends Omit<ViewProps, 'data-*'> {
  children: React.ReactNode;
  'data-component-id'?: string;
  'data-analytics-label'?: string;
  'data-testid'?: string;
}

const CustomView = ({ children, ...props }: CustomViewProps) => {
  // Separate data attributes from Reshaped props
  const dataAttributes = getDataAttributes(props);
  const reshapedProps = Object.fromEntries(
    Object.entries(props).filter(([key]) => !key.startsWith('data-'))
  );
  
  return (
    <View {...reshapedProps} attributes={dataAttributes}>
      {children}
    </View>
  );
};
```

### Testing and Validation Helper
```typescript
import { getDataAttributes } from './utils/getDataAttributes';

// Helper for testing components with data attributes
export const createTestableComponent = <T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  defaultDataAttrs: Record<string, string> = {}
) => {
  return (props: T) => {
    const dataAttributes = getDataAttributes(props);
    const mergedDataAttrs = { ...defaultDataAttrs, ...dataAttributes };
    
    return <Component {...props} {...mergedDataAttrs} />;
  };
};

// Usage in tests
const TestableButton = createTestableComponent(Button, {
  'data-testid': 'default-button'
});

// In test file
render(
  <TestableButton 
    data-testid="custom-button" // Overrides default
    data-analytics-event="click"
    onClick={mockFn}
  >
    Click me
  </TestableButton>
);
```

## API Methods and Descriptions

### Core Functions

#### `getDataAttributes(source, options?)`
**Description**: Main function that extracts data attributes from the provided source.
**Parameters**: Source object/element and optional configuration
**Returns**: Object containing extracted data attributes
**Use Case**: Primary method for extracting data attributes in most scenarios

#### `hasDataAttribute(source, attributeName)`
**Description**: Utility function to check if a specific data attribute exists in the source.
**Parameters**: Source object/element and attribute name to check
**Returns**: Boolean indicating presence of the attribute
**Use Case**: Conditional logic based on attribute presence

#### `filterDataAttributes(attributes, pattern)`
**Description**: Helper function to filter data attributes based on a pattern.
**Parameters**: Attributes object and RegExp or string pattern
**Returns**: Filtered attributes object
**Use Case**: When you need to filter attributes after extraction

#### `normalizeDataAttributeValue(value)`
**Description**: Normalizes attribute values to valid HTML data attribute values.
**Parameters**: Any value to normalize
**Returns**: String or boolean representation suitable for HTML
**Use Case**: Ensuring attribute values are HTML-compliant

## Use Cases and Best Practices

### Component Prop Forwarding
Use `getDataAttributes` when creating wrapper components that need to forward data attributes without including functional props:

```typescript
const WrapperComponent = ({ children, customProp, ...props }) => {
  const dataAttrs = getDataAttributes(props);
  return <div {...dataAttrs}>{children}</div>;
};
```

### Testing and QA Integration
Leverage the function for test automation and quality assurance by extracting test-specific attributes:

```typescript
const testAttributes = getDataAttributes(props, {
  include: ['data-testid', 'data-qa-']
});
```

### Analytics and Tracking
Extract analytics-related data attributes for event tracking and user behavior analysis:

```typescript
const analyticsAttributes = getDataAttributes(props, {
  include: /^data-analytics-/,
  keyTransform: (key) => key.replace('analytics-', '')
});
```

### Accessibility Enhancement
Use data attributes to enhance accessibility features and ARIA implementations:

```typescript
const a11yAttributes = getDataAttributes(props, {
  include: ['data-describedby', 'data-labelledby', 'data-role']
});
```

## Performance Considerations

### Memory Management
- The function creates new objects for returned attributes, consider caching results for frequently called operations
- Use `useMemo` in React components when extracting attributes that depend on stable props

### Filtering Efficiency
- Regular expression matching can be expensive for large prop objects; prefer string array matching when possible
- Consider using the `include`/`exclude` options to limit processing to relevant attributes only

### DOM Performance
- When extracting from DOM elements, the function uses `dataset` when available for better performance
- Batch DOM attribute extraction operations when possible to minimize layout thrashing

### Bundle Size Impact
- The function uses minimal dependencies and should have negligible impact on bundle size
- Tree-shaking will remove unused options and transformation functions

## Related Components/Hooks

### Reshaped Components
- **View**: Uses the `attributes` prop which accepts the output of `getDataAttributes`
- **Actionable**: Forwards data attributes through its attribute handling system
- **All Reshaped components**: Support data attributes through their props interface

### React Utilities
- **forwardRef**: Often used together when creating ref-forwarding components that also need data attribute handling
- **React.createElement**: Can be used with `getDataAttributes` output for dynamic element creation

### Hooks
- **useHandlerRef**: Reshaped hook that might be used alongside data attribute extraction for ref management
- **useResponsiveClientValue**: Can be combined for responsive data attribute handling

### Type Utilities
- **Attributes<T>**: Reshaped's type that defines the shape of attributes including data attributes
- **DataAttributes**: Core type definition used by the function for type safety

The `getDataAttributes` utility function serves as a foundational tool for clean prop management and DOM attribute handling in React applications, especially when working with design systems like Reshaped that emphasize type safety and component composition.