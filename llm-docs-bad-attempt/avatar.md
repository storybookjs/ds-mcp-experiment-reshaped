# Avatar

**Brief Description**: A circular or square display component for user profile images, initials, or icons that provides visual identification.

**Keywords**: Profile Picture, User Image, Initials Display, Icon Avatar, User Identity, Profile Badge, Circular Image, Square Image

**Usage Description**: The Avatar component is designed to represent users or entities in a compact visual format. It serves as a visual identifier throughout your application's interface, commonly used in headers, user lists, comment sections, and profile areas.

The component intelligently handles multiple display modes with a fallback hierarchy: it first attempts to display an image if a `src` is provided, falls back to an icon if specified, and finally displays initials as a last resort. This ensures users always see meaningful visual representation even when profile images are unavailable.

## Props Documentation

- **src** (string, optional): URL of the image to display. When provided, takes priority over icon and initials.
- **alt** (string, optional): Alternative text for the image, used for accessibility. If not provided, the image will have `role="presentation"`.
- **initials** (string, optional): Text to display when no image or icon is provided, typically user's initials (e.g., "JD").
- **icon** (React.ReactElement | React.ComponentType, optional): Icon component to display when no image is provided but before falling back to initials.
- **squared** (boolean, optional, default: false): When true, displays the avatar with rounded square corners instead of circular shape.
- **variant** ("solid" | "faded", optional, default: "solid"): Visual style variant. "faded" uses lighter background colors with darker text.
- **color** ("neutral" | "critical" | "warning" | "positive" | "primary", optional, default: "neutral"): Color theme for the avatar background and text.
- **size** (G.Responsive<number>, optional, default: 12): Size of the avatar in design system units. Supports responsive values.

## Code Examples

### Basic Image Avatar
```tsx
<Avatar 
  src="https://example.com/profile.jpg" 
  alt="John Doe's profile picture" 
/>
```

### Initials Fallback
```tsx
<Avatar 
  initials="JD" 
  color="primary" 
/>
```

### Squared Avatar with Responsive Sizing
```tsx
<Avatar 
  src="/team-member.jpg" 
  alt="Team member photo"
  squared 
  size={{ s: 12, m: 16, l: 24 }} 
/>
```

## Related Components

- **Icon**: Used internally when the `icon` prop is provided. The Avatar automatically sizes the icon proportionally to the avatar size.
- **View**: The underlying layout component that handles the avatar's background, border radius, and positioning.
- **Image Components**: Works with custom image components through the `renderImage` prop, commonly integrated with Next.js Image, Gatsby Image, or other optimized image solutions.