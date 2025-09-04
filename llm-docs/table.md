# Table

A flexible table component for displaying structured data in rows and columns with comprehensive styling and interaction capabilities.

## Keywords

Data Display, Tables, Rows, Columns, Structured Data, Grid, Tabular Data, Data Organization

## Usage Description

The Table component is designed for displaying structured data in a traditional tabular format with rows and columns. It provides a compound component architecture where the main Table component acts as a container, and sub-components like Table.Head, Table.Body, Table.Row, Table.Cell, and Table.Heading handle specific parts of the table structure.

The component is particularly useful for data tables, comparison tables, lists with multiple attributes, or any scenario where information needs to be organized in a grid format. It includes features like scrollable overflow with fade indicators, customizable borders, row highlighting, clickable rows, and flexible cell alignment and sizing options.

The Table automatically handles responsive behavior with horizontal scrolling and visual fade indicators when content overflows. It supports accessibility features including proper ARIA labeling, keyboard navigation for interactive rows, and semantic HTML structure with proper thead/tbody elements.

## Props Documentation

### Table (Main Component)

| Prop           | Type                  | Required | Default | Description                                                              |
| -------------- | --------------------- | -------- | ------- | ------------------------------------------------------------------------ |
| `children`     | `React.ReactNode`     | Yes      | -       | Table content including Table.Head, Table.Body, and Table.Row components |
| `border`       | `boolean`             | No       | `false` | Adds an outer border around the entire table                             |
| `columnBorder` | `boolean`             | No       | `false` | Adds vertical borders between columns                                    |
| `className`    | `G.ClassName`         | No       | -       | Additional CSS class names for styling                                   |
| `attributes`   | `G.Attributes<"div">` | No       | -       | Additional HTML attributes for the wrapper div                           |

### Table.Head

| Prop         | Type                    | Required | Default | Description                                                         |
| ------------ | ----------------------- | -------- | ------- | ------------------------------------------------------------------- |
| `children`   | `React.ReactNode`       | Yes      | -       | Table heading content, typically Table.Row with Table.Heading cells |
| `className`  | `G.ClassName`           | No       | -       | Additional CSS class names for the thead element                    |
| `attributes` | `G.Attributes<"thead">` | No       | -       | Additional HTML attributes for the thead element                    |

### Table.Body

| Prop         | Type                    | Required | Default | Description                                                 |
| ------------ | ----------------------- | -------- | ------- | ----------------------------------------------------------- |
| `children`   | `React.ReactNode`       | Yes      | -       | Table body content, typically multiple Table.Row components |
| `className`  | `G.ClassName`           | No       | -       | Additional CSS class names for the tbody element            |
| `attributes` | `G.Attributes<"tbody">` | No       | -       | Additional HTML attributes for the tbody element            |

### Table.Row

| Prop          | Type                            | Required | Default | Description                                                   |
| ------------- | ------------------------------- | -------- | ------- | ------------------------------------------------------------- |
| `children`    | `React.ReactNode`               | Yes      | -       | Row content, typically Table.Cell or Table.Heading components |
| `highlighted` | `boolean`                       | No       | `false` | Applies highlight background to the row                       |
| `onClick`     | `(e: React.MouseEvent) => void` | No       | -       | Click handler that makes the row clickable and focusable      |
| `className`   | `G.ClassName`                   | No       | -       | Additional CSS class names for the tr element                 |
| `attributes`  | `G.Attributes<"tr">`            | No       | -       | Additional HTML attributes for the tr element                 |

### Table.Cell

| Prop            | Type                           | Required | Default   | Description                                                                     |
| --------------- | ------------------------------ | -------- | --------- | ------------------------------------------------------------------------------- |
| `children`      | `React.ReactNode`              | No       | -         | Cell content                                                                    |
| `align`         | `"start" \| "center" \| "end"` | No       | `"start"` | Horizontal text alignment within the cell                                       |
| `verticalAlign` | `"start" \| "center" \| "end"` | No       | `"start"` | Vertical alignment of cell content                                              |
| `rowSpan`       | `number`                       | No       | -         | Number of rows the cell spans                                                   |
| `colSpan`       | `number`                       | No       | -         | Number of columns the cell spans                                                |
| `padding`       | `number`                       | No       | -         | Padding for all sides of the cell (in spacing units)                            |
| `paddingInline` | `number`                       | No       | -         | Horizontal padding (overrides padding if specified)                             |
| `paddingBlock`  | `number`                       | No       | -         | Vertical padding (overrides padding if specified)                               |
| `width`         | `"auto" \| string \| number`   | No       | -         | Cell width - "auto" creates nowrap behavior, strings/numbers set explicit width |
| `minWidth`      | `string \| number`             | No       | -         | Minimum width constraint for the cell                                           |
| `className`     | `G.ClassName`                  | No       | -         | Additional CSS class names for the td element                                   |
| `attributes`    | `G.Attributes<"td">`           | No       | -         | Additional HTML attributes for the td element                                   |

### Table.Heading

| Prop            | Type                           | Required | Default   | Description                                             |
| --------------- | ------------------------------ | -------- | --------- | ------------------------------------------------------- |
| `children`      | `React.ReactNode`              | No       | -         | Heading cell content                                    |
| `align`         | `"start" \| "center" \| "end"` | No       | `"start"` | Horizontal text alignment within the heading cell       |
| `verticalAlign` | `"start" \| "center" \| "end"` | No       | `"start"` | Vertical alignment of heading cell content              |
| `rowSpan`       | `number`                       | No       | -         | Number of rows the heading spans                        |
| `colSpan`       | `number`                       | No       | -         | Number of columns the heading spans                     |
| `padding`       | `number`                       | No       | -         | Padding for all sides of the heading (in spacing units) |
| `paddingInline` | `number`                       | No       | -         | Horizontal padding (overrides padding if specified)     |
| `paddingBlock`  | `number`                       | No       | -         | Vertical padding (overrides padding if specified)       |
| `width`         | `"auto" \| string \| number`   | No       | -         | Heading width - "auto" creates nowrap behavior          |
| `minWidth`      | `string \| number`             | No       | -         | Minimum width constraint for the heading                |
| `className`     | `G.ClassName`                  | No       | -         | Additional CSS class names for the th element           |
| `attributes`    | `G.Attributes<"th">`           | No       | -         | Additional HTML attributes for the th element           |

## Code Examples

### Basic Table Structure

```tsx
import Table from "reshaped/Table";

// Simple data table
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Heading>Name</Table.Heading>
      <Table.Heading>Email</Table.Heading>
      <Table.Heading>Status</Table.Heading>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
      <Table.Cell>Active</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Jane Smith</Table.Cell>
      <Table.Cell>jane@example.com</Table.Cell>
      <Table.Cell>Inactive</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>;
```

### Table with Borders and Alignment

```tsx
// Table with outer border, column borders, and mixed alignment
<Table border columnBorder>
  <Table.Head>
    <Table.Row>
      <Table.Heading align="start">Product</Table.Heading>
      <Table.Heading align="center">Quantity</Table.Heading>
      <Table.Heading align="end">Price</Table.Heading>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Laptop</Table.Cell>
      <Table.Cell align="center">2</Table.Cell>
      <Table.Cell align="end">$1,999.99</Table.Cell>
    </Table.Row>
    <Table.Row highlighted>
      <Table.Cell>Monitor</Table.Cell>
      <Table.Cell align="center">1</Table.Cell>
      <Table.Cell align="end">$299.99</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Interactive Table with Row Clicks

```tsx
// Clickable rows with highlighting and click handlers
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Heading>Task</Table.Heading>
      <Table.Heading>Priority</Table.Heading>
      <Table.Heading>Due Date</Table.Heading>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row onClick={(e) => console.log("Clicked task 1")} highlighted>
      <Table.Cell>Complete project proposal</Table.Cell>
      <Table.Cell>High</Table.Cell>
      <Table.Cell>2024-01-15</Table.Cell>
    </Table.Row>
    <Table.Row onClick={(e) => console.log("Clicked task 2")}>
      <Table.Cell>Review code changes</Table.Cell>
      <Table.Cell>Medium</Table.Cell>
      <Table.Cell>2024-01-20</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Advanced Layout with Span and Sizing

```tsx
// Table with rowspan, colspan, and custom sizing
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Heading width="40%" minWidth="200px">
        Department
      </Table.Heading>
      <Table.Heading colSpan={2} align="center">
        Employee Count
      </Table.Heading>
    </Table.Row>
    <Table.Row>
      <Table.Heading></Table.Heading>
      <Table.Heading align="center">Full-time</Table.Heading>
      <Table.Heading align="center">Part-time</Table.Heading>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell rowSpan={2} verticalAlign="center">
        Engineering
      </Table.Cell>
      <Table.Cell align="center">45</Table.Cell>
      <Table.Cell align="center">5</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell align="center">Marketing</Table.Cell>
      <Table.Cell align="center">12</Table.Cell>
      <Table.Cell align="center">3</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

### Selection Table with Checkboxes

```tsx
import { useState } from "react";
import Table from "reshaped/Table";
import Checkbox from "reshaped/Checkbox";

// Table with selectable rows using checkboxes
function SelectableTable() {
  const [selectedRows, setSelectedRows] = useState([]);

  const rows = [
    { id: "1", name: "Document A", size: "2.5MB" },
    { id: "2", name: "Document B", size: "1.8MB" },
    { id: "3", name: "Document C", size: "3.2MB" },
  ];

  const allSelected = selectedRows.length === rows.length;
  const someSelected =
    selectedRows.length > 0 && selectedRows.length < rows.length;

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.Heading width="auto">
            <Checkbox
              checked={allSelected}
              indeterminate={someSelected}
              onChange={({ checked }) => {
                setSelectedRows(checked ? rows.map((row) => row.id) : []);
              }}
              inputAttributes={{ "aria-label": "Select all rows" }}
            />
          </Table.Heading>
          <Table.Heading>File Name</Table.Heading>
          <Table.Heading>Size</Table.Heading>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {rows.map((row) => (
          <Table.Row key={row.id} highlighted={selectedRows.includes(row.id)}>
            <Table.Cell>
              <Checkbox
                checked={selectedRows.includes(row.id)}
                onChange={({ checked, value }) => {
                  if (checked) {
                    setSelectedRows((prev) => [...prev, value]);
                  } else {
                    setSelectedRows((prev) =>
                      prev.filter((id) => id !== value),
                    );
                  }
                }}
                value={row.id}
                inputAttributes={{ "aria-label": `Select ${row.name}` }}
              />
            </Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.size}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
```

## Related Components

- **Card**: Often used as a container for tables, especially when an elevated appearance is desired
- **Checkbox**: Commonly used within table cells for selection functionality and bulk operations
- **Button**: Frequently used in table cells for row actions or in table headers for sorting/filtering
- **Badge**: Used in table cells to display status indicators, categories, or labels
- **Link**: Used in table cells for navigation to detail views or external resources
- **View**: Can be used within table cells for custom layouts or spacing
- **Loader**: Used to show loading states within table cells during data fetching
- **Pagination**: Often paired with tables for navigating through large datasets
- **Dropdown**: Used in table headers for filtering options or in cells for quick actions
