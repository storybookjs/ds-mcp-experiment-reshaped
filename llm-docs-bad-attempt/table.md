# Table Component

## Overview
The Table component is a flexible data table for displaying structured content in rows and columns with support for borders, alignment, and interactive features like sorting and selection.

## Key Features
- Structured data display
- Column sorting capabilities
- Row selection support
- Responsive design
- Custom cell rendering
- Accessibility compliance
- Sticky headers

## Props Interface
```typescript
type TableProps = {
  children: React.ReactNode;
  bordered?: boolean;
  striped?: boolean;
  compact?: boolean;
  stickyHeader?: boolean;
  className?: string;
  attributes?: React.TableHTMLAttributes<HTMLTableElement>;
};
```

## Usage Examples

### Basic Table
```typescript
import { Table, Text } from 'reshaped';

function BasicTable() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
  ];
  
  return (
    <Table bordered>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Role</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {users.map(user => (
          <Table.Row key={user.id}>
            <Table.Cell>
              <Text weight="medium">{user.name}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text color="neutral-faded">{user.email}</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>{user.role}</Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
```

### Sortable Table
```typescript
import { Table, Button, Icon, Text } from 'reshaped';
import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from './icons';

function SortableTable() {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: 'asc' | 'desc';
  } | null>(null);
  
  const data = [
    { name: 'Apple', price: 1.20, stock: 50 },
    { name: 'Banana', price: 0.80, stock: 30 },
    { name: 'Orange', price: 1.50, stock: 25 }
  ];
  
  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;
    
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortConfig]);
  
  const handleSort = (key: string) => {
    setSortConfig(current => ({
      key,
      direction: current?.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  };
  
  return (
    <Table bordered stickyHeader>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Button
              variant="ghost"
              size="small"
              onClick={() => handleSort('name')}
              icon={sortConfig?.key === 'name' ? 
                (sortConfig.direction === 'asc' ? ArrowUpIcon : ArrowDownIcon) : 
                undefined
              }
            >
              Product
            </Button>
          </Table.HeaderCell>
          <Table.HeaderCell align="right">
            <Button
              variant="ghost"
              size="small"
              onClick={() => handleSort('price')}
              icon={sortConfig?.key === 'price' ? 
                (sortConfig.direction === 'asc' ? ArrowUpIcon : ArrowDownIcon) : 
                undefined
              }
            >
              Price
            </Button>
          </Table.HeaderCell>
          <Table.HeaderCell align="right">Stock</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Text weight="medium">{item.name}</Text>
            </Table.Cell>
            <Table.Cell align="right">
              <Text>${item.price.toFixed(2)}</Text>
            </Table.Cell>
            <Table.Cell align="right">
              <Text>{item.stock}</Text>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
```

## Compound Components
- **Table.Header**: Table header section
- **Table.Body**: Table body section
- **Table.Row**: Table row container
- **Table.HeaderCell**: Header cell with sorting capabilities
- **Table.Cell**: Regular data cell

## Accessibility
- Proper table semantics with thead/tbody
- Column header associations
- Screen reader table navigation
- Keyboard sorting controls
- Focus management

## Related Components
- **Button**: Sorting controls in headers
- **Text**: Cell content formatting