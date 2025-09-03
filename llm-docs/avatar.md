# Avatar

## Component Name
Avatar

## Brief Description
A versatile component for displaying user profile images, initials, or icons with customizable sizing, colors, and variants.

## Keywords
- User Profile
- Profile Picture
- Initials Display
- Icon Display
- Circular
- Square
- Responsive Sizing
- User Interface

## Usage Description

The Avatar component is designed to represent users or entities in your application interface. It provides a flexible way to display profile information through images, initials, or icons with consistent styling and accessibility features.

Use Avatar components in user profiles, comment sections, team member lists, notification areas, or anywhere you need to represent a person or entity visually. The component automatically handles fallback scenarios - if an image fails to load, it can gracefully fall back to displaying initials or an icon.

The component supports both circular and squared variants, making it suitable for various design contexts. It's fully responsive and supports different color schemes to match your application's design system, including semantic colors for different user states or roles.

## Props Documentation

### `src` (optional)
- **Type**: `string`
- **Required**: No
- **Default**: `undefined`
- **Description**: URL of the image to display in the avatar. If the image fails to load, the component will fall back to displaying initials or an icon.
- **Example**: `"https://example.com/user-avatar.jpg"`

### `alt` (optional)
- **Type**: `string`
- **Required**: No
- **Default**: `undefined`
- **Description**: Alternative text for the image, used for accessibility. If not provided and no alt is specified in imageAttributes, the image will have a presentation role.
- **Example**: `"User profile picture"`

### `imageAttributes` (optional)
- **Type**: `G.Attributes<"img">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to pass to the img element, such as loading, crossOrigin, etc. The alt attribute from this prop will be used if the main alt prop is not provided.
- **Example**: `{ loading: "lazy", crossOrigin: "anonymous" }`

### `renderImage` (optional)
- **Type**: `(attributes: Omit<G.Attributes<"img">, "src" | "alt"> & { src: string; alt: string; }) => React.ReactNode`
- **Required**: No
- **Default**: `undefined`
- **Description**: Custom function to render the image element. Useful for integrating with image optimization libraries like Next.js Image component. The function receives processed image attributes including src, alt, and className.
- **Example**: `(attrs) => <NextImage {...attrs} width={100} height={100} />`

### `initials` (optional)
- **Type**: `string`
- **Required**: No
- **Default**: `undefined`
- **Description**: Text initials to display when no image is provided or when the image fails to load. Typically 1-3 characters representing the user's name.
- **Example**: `"JD"` or `"RS"`

### `icon` (optional)
- **Type**: `IconProps["svg"]` (React.ReactElement | React.ComponentType)
- **Required**: No
- **Default**: `undefined`
- **Description**: Icon component to display when no image or initials are provided. The icon size is automatically calculated as 40% of the avatar size.
- **Example**: `<UserIcon />` or `IconUser`

### `squared` (optional)
- **Type**: `boolean`
- **Required**: No
- **Default**: `false`
- **Description**: When true, displays the avatar with square corners instead of circular. The border radius is automatically calculated based on the size: large (24+), medium (12+), or small (below 12).
- **Example**: `true`

### `variant` (optional)
- **Type**: `"solid" | "faded"`
- **Required**: No
- **Default**: `"solid"`
- **Description**: Visual variant of the avatar. "solid" uses full color intensity, while "faded" uses a more subdued appearance with lighter background colors.
- **Example**: `"faded"`

### `color` (optional)
- **Type**: `"neutral" | "critical" | "warning" | "positive" | "primary"`
- **Required**: No
- **Default**: `"neutral"`
- **Description**: Semantic color scheme for the avatar background and text. Used when displaying initials or icons, or when the faded variant is selected.
- **Example**: `"primary"`

### `size` (optional)
- **Type**: `G.Responsive<number>`
- **Required**: No
- **Default**: `12`
- **Description**: Size of the avatar in design system units. Supports responsive values using breakpoint objects. The component maintains a 1:1 aspect ratio.
- **Example**: `20` or `{ s: 10, m: 16, l: 20 }`

### `className` (optional)
- **Type**: `G.ClassName`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional CSS classes to apply to the root avatar container element.
- **Example**: `"custom-avatar"` or `["avatar", "large"]`

### `attributes` (optional)
- **Type**: `G.Attributes<"div">`
- **Required**: No
- **Default**: `undefined`
- **Description**: Additional HTML attributes to pass to the root container element, such as data attributes, event handlers, or ARIA labels.
- **Example**: `{ "data-testid": "user-avatar", onClick: handleClick }`

## Code Examples

### Basic Usage with Image
```jsx
<Avatar 
  src="https://example.com/user-avatar.jpg" 
  alt="John Doe profile picture" 
/>
```
Displays a circular avatar with the provided image and alternative text for accessibility.

### Initials Fallback
```jsx
<Avatar 
  src="https://example.com/broken-image.jpg" 
  alt="Jane Smith" 
  initials="JS" 
/>
```
Shows initials "JS" if the image fails to load, providing a graceful fallback experience.

### Icon Avatar with Custom Styling
```jsx
<Avatar 
  icon={<UserIcon />} 
  color="primary" 
  variant="faded" 
  size={16}
  squared
/>
```
Displays a squared avatar with a user icon, primary color scheme, faded variant, and custom size.

### Responsive Sizing
```jsx
<Avatar 
  initials="AB" 
  size={{ s: 10, m: 16, l: 24 }}
  color="positive"
/>
```
Creates a responsive avatar that scales from 10 units on small screens to 24 units on large screens.

### Custom Image Rendering with Next.js
```jsx
<Avatar 
  src="/user-profiles/john-doe.jpg"
  alt="John Doe"
  renderImage={(attrs) => (
    <Image 
      {...attrs} 
      width={200} 
      height={200} 
      priority 
    />
  )}
/>
```
Integrates with Next.js Image component for optimized image loading and performance.

### Team Member List
```jsx
<View direction="row" gap={3}>
  <Avatar src="/team/alice.jpg" alt="Alice Johnson" size={12} />
  <Avatar initials="BM" color="primary" size={12} />
  <Avatar icon={<PlusIcon />} color="neutral" variant="faded" size={12} />
</View>
```
Shows a row of team member avatars with mixed content types and consistent sizing.

## Related Components

- **Icon**: Used internally when the `icon` prop is provided. The Avatar component automatically sizes the icon to 40% of the avatar size.
- **View**: Used as the root container component, providing layout, styling, and responsive capabilities through the reshaped design system.
- **Image Components**: Can be integrated through the `renderImage` prop for custom image rendering (e.g., Next.js Image, Gatsby Image).

## Accessibility Considerations

- Automatically applies `role="presentation"` to images when no alt text is provided
- Supports proper alt text for screen readers through both `alt` prop and `imageAttributes.alt`
- Maintains proper contrast ratios with semantic color schemes
- Provides fallback content (initials or icons) when images fail to load
- Uses semantic HTML with proper ARIA attributes when needed

## Technical Notes

- The component maintains a 1:1 aspect ratio using CSS `aspect-ratio: 1`
- Icon size is automatically calculated as 40% of the avatar size
- Squared avatars use responsive border radius based on size (large: 24+, medium: 12+, small: <12)
- Font size for initials is calculated as one-third of the avatar height
- Supports CSS custom properties for advanced styling customization
- Images use `object-fit: cover` to maintain proper aspect ratio while filling the container