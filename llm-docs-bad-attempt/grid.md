# Grid Component

## Overview
The Grid component is a CSS Grid layout component for creating responsive grid-based layouts with configurable columns, gaps, and alignment options for complex layout structures.

## Key Features
- CSS Grid-based layout system
- Responsive column configuration
- Flexible gap control
- Alignment and justification options
- Auto-fit and auto-fill support
- Responsive design capabilities

## Props Interface
```typescript
type GridProps = {
  children: React.ReactNode;
  columns?: Responsive<number | string>;
  rows?: Responsive<number | string>;
  gap?: Responsive<number>;
  columnGap?: Responsive<number>;
  rowGap?: Responsive<number>;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyItems?: 'start' | 'center' | 'end' | 'stretch';
  className?: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
};
```

## Usage Examples

### Basic Grid Layout
```typescript
import { Grid, Card, Text, View } from 'reshaped';

function BasicGrid() {
  const items = Array.from({ length: 6 }, (_, i) => i + 1);
  
  return (
    <Grid columns={3} gap={4}>
      {items.map(item => (
        <Card key={item} padding={4} elevation="low">
          <Text variant="title-6">Item {item}</Text>
          <Text variant="body-3" color="neutral-faded">
            Grid item content
          </Text>
        </Card>
      ))}
    </Grid>
  );
}
```

### Responsive Grid
```typescript
import { Grid, Card, Text, View } from 'reshaped';

function ResponsiveGrid() {
  const products = [
    { id: 1, name: 'Product A', price: '$29.99' },
    { id: 2, name: 'Product B', price: '$39.99' },
    { id: 3, name: 'Product C', price: '$19.99' },
    { id: 4, name: 'Product D', price: '$49.99' },
    { id: 5, name: 'Product E', price: '$24.99' },
    { id: 6, name: 'Product F', price: '$34.99' }
  ];
  
  return (
    <Grid 
      columns={{ mobile: 1, tablet: 2, desktop: 3 }}
      gap={{ mobile: 3, desktop: 4 }}
    >
      {products.map(product => (
        <Card key={product.id} padding={5} elevation="medium">
          <View gap={2}>
            <Text variant="title-6">{product.name}</Text>
            <Text variant="body-2" color="primary" weight="medium">
              {product.price}
            </Text>
          </View>
        </Card>
      ))}
    </Grid>
  );
}
```

### Auto-Fit Grid
```typescript
import { Grid, Card, Text } from 'reshaped';

function AutoFitGrid() {
  const items = Array.from({ length: 12 }, (_, i) => i + 1);
  
  return (
    <Grid 
      columns="repeat(auto-fit, minmax(200px, 1fr))"
      gap={4}
    >
      {items.map(item => (
        <Card key={item} padding={4}>
          <Text variant="title-6">Auto Item {item}</Text>
        </Card>
      ))}
    </Grid>
  );
}
```

### Dashboard Layout
```typescript
import { Grid, Card, Text, View, Button } from 'reshaped';

function DashboardGrid() {
  return (
    <Grid 
      columns="2fr 1fr"
      rows="auto 1fr auto"
      gap={6}
      style={{ height: '100vh' }}
    >
      {/* Header - spans full width */}
      <View 
        direction="row" 
        justify="space-between" 
        align="center"
        padding={4}
        style={{ gridColumn: '1 / -1' }}
      >
        <Text variant="title-3">Dashboard</Text>
        <Button size="small">Settings</Button>
      </View>
      
      {/* Main Content */}
      <Card padding={6}>
        <View gap={4}>
          <Text variant="title-5">Main Content Area</Text>
          <Text>This is the primary content section of the dashboard.</Text>
        </View>
      </Card>
      
      {/* Sidebar */}
      <Card padding={4}>
        <View gap={3}>
          <Text variant="title-6">Sidebar</Text>
          <Text variant="body-3">Secondary information and actions.</Text>
        </View>
      </Card>
      
      {/* Footer - spans full width */}
      <View 
        padding={4} 
        align="center"
        style={{ 
          gridColumn: '1 / -1',
          backgroundColor: 'var(--rs-color-background-neutral-faded)'
        }}
      >
        <Text variant="body-3" color="neutral-faded">
          © 2024 Your Dashboard
        </Text>
      </View>
    </Grid>
  );
}
```

### Complex Grid Layout
```typescript
import { Grid, Card, Text, View, Image } from 'reshaped';

function ComplexGrid() {
  return (
    <Grid 
      columns="repeat(4, 1fr)"
      rows="repeat(3, 200px)"
      gap={4}
    >
      {/* Large featured item - spans 2x2 */}
      <Card 
        padding={6}
        style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
      >
        <View gap={3} height="100%">
          <Text variant="title-4">Featured Article</Text>
          <Text>This is a large featured content area that spans multiple grid cells.</Text>
        </View>
      </Card>
      
      {/* Regular items */}
      <Card padding={4}>
        <Text variant="title-6">Article 1</Text>
      </Card>
      
      <Card padding={4}>
        <Text variant="title-6">Article 2</Text>
      </Card>
      
      <Card padding={4}>
        <Text variant="title-6">Article 3</Text>
      </Card>
      
      <Card padding={4}>
        <Text variant="title-6">Article 4</Text>
      </Card>
      
      {/* Wide item - spans full width */}
      <Card 
        padding={4}
        style={{ gridColumn: '1 / -1' }}
      >
        <Text variant="title-6">Full Width Banner</Text>
      </Card>
    </Grid>
  );
}
```

### Different Gap Controls
```typescript
import { Grid, Card, Text } from 'reshaped';

function GapControlGrid() {
  return (
    <Grid 
      columns={3}
      columnGap={6}
      rowGap={3}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <Card key={i} padding={3}>
          <Text>Item {i + 1}</Text>
        </Card>
      ))}
    </Grid>
  );
}
```

## Column Configurations
- **Number**: Fixed number of columns (e.g., `3`)
- **CSS Grid syntax**: Custom grid template (e.g., `'1fr 2fr 1fr'`)
- **Auto-fit/fill**: Responsive column sizing
- **Responsive**: Different columns per breakpoint

## Alignment Options
- **alignItems**: Vertical alignment of items within cells
- **justifyItems**: Horizontal alignment of items within cells
- **Values**: `start`, `center`, `end`, `stretch`

## Responsive Behavior
- Breakpoint-specific column counts
- Responsive gap values
- Mobile-first responsive design
- Flexible grid configurations

## Related Components
- **View**: General layout container
- **Card**: Grid item containers