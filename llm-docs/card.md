# Card

## Component Name

Card

## Brief Description

A versatile container component that provides structured content areas with consistent styling, spacing, and interaction capabilities.

## Keywords

Container, Layout, Surface, Elevation, Interaction, Content Area, Padding, Border

## Usage Description

The Card component is a foundational layout element in the reshaped design system that creates visually distinct content containers. It serves as a surface for grouping related information, actions, or controls within a unified visual boundary.

Cards are ideal for displaying content that benefits from visual separation, such as product listings, user profiles, settings panels, or any content that forms a logical unit. The component automatically handles hover states, focus management, and accessibility when configured as an interactive element through onClick or href props.

The Card component leverages the design system's spacing scale and elevation tokens to maintain visual consistency across applications. It can be used both as a static content container and as an interactive element that responds to user input with appropriate visual feedback.

## Props Documentation

### Core Props

**`children`**

- Type: `React.ReactNode`
- Required: No
- Description: Content to be rendered inside the card
- Example: JSX elements, text, or other React components

**`padding`**

- Type: `Responsive<number>`
- Required: No
- Default: `4`
- Description: Internal spacing using the design system's spacing scale. Accepts responsive values for different breakpoints
- Example: `2`, `6`, `{ s: 4, m: 8 }`

**`className`**

- Type: `ClassName`
- Required: No
- Description: Additional CSS classes to apply to the card
- Example: `"custom-card"`, `["card", "featured"]`

**`as`**

- Type: `keyof React.JSX.IntrinsicElements`
- Required: No
- Default: `"div"`
- Description: HTML element to render as the card's root element
- Example: `"section"`, `"article"`, `"aside"`

### Interaction Props

**`onClick`**

- Type: `ActionableProps["onClick"]`
- Required: No
- Description: Click handler that makes the card interactive. Accepts mouse and keyboard events
- Example: `() => console.log('Card clicked')`

**`href`**

- Type: `string`
- Required: No
- Description: URL that makes the card behave as a link element
- Example: `"/profile"`, `"https://example.com"`

### Visual State Props

**`selected`**

- Type: `boolean`
- Required: No
- Default: `false`
- Description: Applies selected styling with a prominent border to indicate active/selected state
- Example: `true`

**`elevated`**

- Type: `boolean`
- Required: No
- Default: `false`
- Description: Adds elevation shadow and background treatment for raised appearance
- Example: `true`

### Layout Props

**`height`**

- Type: `Responsive<string | number>` (inherited from ViewProps)
- Required: No
- Description: Explicit height constraint with responsive support
- Example: `"200px"`, `300`, `{ s: "150px", m: "250px" }`

**`bleed`**

- Type: `Responsive<number>`
- Required: No
- Description: Negative margin that allows content to extend beyond the card's boundaries
- Example: `4`, `{ s: 4, m: 0 }`

### Advanced Props

**`attributes`**

- Type: `Attributes<TagName> & ActionableProps["attributes"]`
- Required: No
- Description: Additional HTML attributes and accessibility properties
- Example: `{ "aria-label": "User profile card", "data-testid": "profile-card" }`

## Code Examples

### Basic Usage

```jsx
import { Card } from "reshaped";

function BasicCard() {
  return (
    <Card>
      <h3>Card Title</h3>
      <p>This is the card content with default padding.</p>
    </Card>
  );
}
```

_A simple card container with default spacing and styling._

### Interactive Card with Click Handler

```jsx
import { Card } from "reshaped";

function ClickableCard() {
  const handleCardClick = () => {
    console.log("Card clicked!");
  };

  return (
    <Card
      onClick={handleCardClick}
      attributes={{ "aria-label": "Clickable content card" }}
    >
      <h3>Interactive Card</h3>
      <p>Click anywhere on this card to trigger an action.</p>
    </Card>
  );
}
```

_An interactive card that responds to clicks with proper accessibility support._

### Card as Navigation Link

```jsx
import { Card } from "reshaped";

function LinkCard() {
  return (
    <Card
      href="/user/profile"
      attributes={{ "aria-label": "Navigate to user profile" }}
    >
      <h3>User Profile</h3>
      <p>Click to view your profile settings.</p>
    </Card>
  );
}
```

_A card that functions as a navigation link to another page._

### Elevated Card with Custom Spacing

```jsx
import { Card } from "reshaped";

function ElevatedCard() {
  return (
    <Card elevated padding={6} height="250px">
      <h2>Premium Content</h2>
      <p>This elevated card stands out with increased padding and shadow.</p>
    </Card>
  );
}
```

_A visually prominent card with elevation shadow and custom spacing._

### Responsive Card with Conditional States

```jsx
import { Card } from "reshaped";

function ResponsiveCard({ isSelected, onSelect, content }) {
  return (
    <Card
      selected={isSelected}
      elevated={!isSelected}
      onClick={onSelect}
      padding={{ s: 4, m: 6, l: 8 }}
      bleed={{ s: 2, m: 0 }}
      attributes={{
        "aria-pressed": isSelected,
        "aria-label": `Content card ${isSelected ? "selected" : "unselected"}`,
      }}
    >
      <h3>{content.title}</h3>
      <p>{content.description}</p>
      {isSelected && <span>✓ Selected</span>}
    </Card>
  );
}
```

_A responsive card that adapts spacing across breakpoints with conditional visual states._

## Accessibility Considerations

The Card component implements comprehensive accessibility features:

- **Focus Management**: Interactive cards receive proper focus treatment with keyboard navigation support
- **ARIA Support**: When interactive, cards automatically receive appropriate ARIA roles (button for onClick, link for href)
- **Screen Reader Support**: The `attributes` prop allows adding `aria-label`, `aria-describedby`, and other accessibility attributes
- **Keyboard Interaction**: Interactive cards respond to both mouse and keyboard events (Enter/Space for onClick cards)
- **Focus Indicators**: Keyboard focus is clearly indicated with design system focus rings
- **Color Contrast**: All visual states meet accessibility color contrast requirements
- **Semantic HTML**: The `as` prop allows using semantic HTML elements like `<article>` or `<section>` when appropriate

Best practices for accessibility:

- Use descriptive `aria-label` values for interactive cards
- Ensure card content has proper heading hierarchy
- Provide focus-visible indicators for keyboard users
- Use semantic HTML elements via the `as` prop when the card represents specific content types

## Related Components

**Actionable**: The underlying component that handles Card's interactive behavior when `onClick` or `href` are provided. Cards inherit focus management, keyboard handling, and accessibility features from Actionable.

**View**: Provides the `height` prop and layout capabilities. Cards can leverage View's responsive height system for consistent sizing.

**Surface**: Related component for background treatments and elevation. While Cards have built-in elevation support, Surface provides more granular control over background appearance.

**Container**: For layout composition. Cards often work well inside Container components for consistent page-level spacing and alignment.

**Stack**: For arranging multiple cards vertically with consistent spacing between them.

**Grid**: For arranging multiple cards in responsive grid layouts with proper spacing and alignment.
