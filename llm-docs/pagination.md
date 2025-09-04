# Pagination

A pagination component that allows users to navigate through multiple pages of content with intelligent page number display and truncation.

## Keywords

Navigation, Paging, Page Numbers, Controls, Multi-page Content, User Interface, Data Navigation, Content Browsing

## Usage Description

The Pagination component provides an intuitive interface for navigating through large datasets or content that spans multiple pages. It displays page numbers with intelligent truncation when dealing with many pages, showing ellipsis (...) to indicate hidden pages while keeping the first, last, and currently selected pages visible.

This component is essential for any application that displays paginated content such as search results, data tables, product listings, or blog posts. It automatically handles the complex logic of determining which page numbers to show and when to display ellipsis for optimal user experience.

The component supports both controlled and uncontrolled modes, allowing it to integrate seamlessly with various state management approaches. It includes full accessibility support with proper ARIA labels and keyboard navigation capabilities.

## Props

### Required Props

| Prop                | Type     | Description                                                |
| ------------------- | -------- | ---------------------------------------------------------- |
| `total`             | `number` | Total number of pages available                            |
| `previousAriaLabel` | `string` | Aria-label for the previous page button for screen readers |
| `nextAriaLabel`     | `string` | Aria-label for the next page button for screen readers     |

### Controlled Mode Props

| Prop       | Type                               | Default | Description                                                                                          |
| ---------- | ---------------------------------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `page`     | `number`                           | -       | Currently selected page number (starts with 1). When provided, enables controlled component behavior |
| `onChange` | `(args: { page: number }) => void` | -       | Event handler triggered when the current page changes                                                |

### Uncontrolled Mode Props

| Prop          | Type                               | Default | Description                                                                           |
| ------------- | ---------------------------------- | ------- | ------------------------------------------------------------------------------------- |
| `defaultPage` | `number`                           | `1`     | Default selected page number (starts with 1). Enables uncontrolled component behavior |
| `onChange`    | `(args: { page: number }) => void` | -       | Event handler triggered when the current page changes                                 |

### Optional Props

| Prop            | Type                                                             | Default | Description                                                      |
| --------------- | ---------------------------------------------------------------- | ------- | ---------------------------------------------------------------- |
| `pageAriaLabel` | `(args: { page: number }) => string`                             | -       | Function to dynamically generate aria-label for each page button |
| `className`     | `string \| string[] \| (string \| null \| undefined \| false)[]` | -       | Custom CSS class names for the root element                      |
| `attributes`    | `React.HTMLAttributes<HTMLDivElement> & DataAttributes`          | -       | Custom HTML attributes and data attributes for the root element  |

## Code Examples

### Basic Uncontrolled Usage

```tsx
import { Pagination } from "reshaped";

function BasicPagination() {
  return (
    <Pagination
      total={10}
      previousAriaLabel="Previous page"
      nextAriaLabel="Next page"
      pageAriaLabel={({ page }) => `Go to page ${page}`}
      onChange={({ page }) => {
        console.log("Page changed to:", page);
      }}
    />
  );
}
```

This example shows the simplest usage where the component manages its own state, starting at page 1.

### Controlled Pagination with State Management

```tsx
import { useState } from "react";
import { Pagination } from "reshaped";

function ControlledPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  const handlePageChange = ({ page }) => {
    setCurrentPage(page);
    // Fetch data for the new page
    fetchDataForPage(page);
  };

  return (
    <Pagination
      total={totalPages}
      page={currentPage}
      onChange={handlePageChange}
      previousAriaLabel="Previous page"
      nextAriaLabel="Next page"
      pageAriaLabel={({ page }) => `Page ${page} of ${totalPages}`}
    />
  );
}
```

This example demonstrates controlled usage where the parent component manages the current page state.

### Starting from a Specific Page

```tsx
import { Pagination } from "reshaped";

function PaginationWithDefaultPage() {
  return (
    <Pagination
      total={15}
      defaultPage={5}
      previousAriaLabel="Go to previous page"
      nextAriaLabel="Go to next page"
      pageAriaLabel={({ page }) => `Navigate to page ${page}`}
      onChange={({ page }) => {
        // Handle page change
        loadContent(page);
      }}
    />
  );
}
```

This example shows how to start the pagination from a specific page (page 5) in uncontrolled mode.

### Customized Styling and Attributes

```tsx
import { Pagination } from "reshaped";

function CustomPagination() {
  return (
    <Pagination
      total={8}
      className="custom-pagination"
      attributes={{
        "data-testid": "product-pagination",
        "aria-label": "Product pages navigation",
      }}
      previousAriaLabel="Previous products"
      nextAriaLabel="Next products"
      pageAriaLabel={({ page }) => `View products page ${page}`}
      onChange={({ page }) => {
        analytics.track("pagination_click", { page });
        router.push(`/products?page=${page}`);
      }}
    />
  );
}
```

This example shows how to customize the component with CSS classes, data attributes, and integrate with analytics and routing.

### Integration with Data Fetching

```tsx
import { useState, useEffect } from "react";
import { Pagination } from "reshaped";

function DataPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await api.getData({ page, limit: 10 });
      setData(response.data);
      setTotalPages(response.totalPages);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}

      <Pagination
        total={totalPages}
        page={currentPage}
        onChange={({ page }) => setCurrentPage(page)}
        previousAriaLabel="Previous results"
        nextAriaLabel="Next results"
        pageAriaLabel={({ page }) => `Results page ${page}`}
      />
    </div>
  );
}
```

This example demonstrates a complete implementation with data fetching and loading states.

## Accessibility Considerations

The Pagination component includes comprehensive accessibility features:

- **ARIA Labels**: All buttons include proper aria-label attributes for screen readers
- **Current Page Indication**: The active page button has `aria-current="true"` to indicate the current page
- **Keyboard Navigation**: All buttons are focusable and operable with keyboard
- **Semantic Structure**: Uses proper button elements with descriptive labels
- **Screen Reader Support**: Page numbers use tabular numerals for consistent reading

### Accessibility Best Practices

1. **Always provide descriptive aria-labels**: Use the `previousAriaLabel`, `nextAriaLabel`, and `pageAriaLabel` props to provide clear, contextual labels
2. **Include page context in labels**: Consider including total page count in aria-labels (e.g., "Page 3 of 10")
3. **Announce page changes**: When using controlled mode, consider announcing page changes to screen readers
4. **Focus management**: Ensure proper focus management when page content changes

## Related Components

- **Button**: Used internally for all clickable elements (page numbers, previous/next buttons)
- **View**: Used as the container component for layout and spacing
- **IconChevronLeft/IconChevronRight**: Icons used in the previous/next navigation buttons

The Pagination component is composed of these fundamental components from the design system, ensuring consistent styling and behavior across the application.
