# Pagination Component

## Overview
The Pagination component allows users to navigate through multiple pages of content with page numbers and previous/next controls for efficient content browsing and navigation.

## Key Features
- Page number navigation
- Previous/next controls
- Current page highlighting
- Configurable page range
- Responsive design
- Accessibility support
- Custom page size options

## Props Interface
```typescript
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  disabled?: boolean;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLElement>;
};
```

## Usage Examples

### Basic Pagination
```typescript
import { Pagination } from 'reshaped';
import { useState } from 'react';

function BasicPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}
```

### Custom Pagination Range
```typescript
import { Pagination } from 'reshaped';
import { useState } from 'react';

function CustomPagination() {
  const [currentPage, setCurrentPage] = useState(5);
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={20}
      onPageChange={setCurrentPage}
      siblingCount={2}
      showFirstLast
    />
  );
}
```

### Data Table Pagination
```typescript
import { Pagination, View, Text } from 'reshaped';
import { useState } from 'react';

function DataTablePagination() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;
  const totalItems = 150;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);
  
  return (
    <View gap={3} align="center">
      <Text color="neutral-faded">
        Showing {startItem}-{endItem} of {totalItems} items
      </Text>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </View>
  );
}
```

## Navigation Controls
- First/Last page buttons (optional)
- Previous/Next page buttons
- Individual page number buttons
- Current page highlighting
- Ellipsis for large page ranges

## Accessibility
- Keyboard navigation with arrow keys and Enter
- ARIA labels for page navigation
- Screen reader announcements
- Focus management between page controls

## Design Tokens
- Theme-aware colors for active/inactive states
- Consistent button sizing and spacing
- Hover and focus state styling
- Responsive breakpoint behavior

## Related Components
- **Button**: Individual page controls
- **Text**: Page information display