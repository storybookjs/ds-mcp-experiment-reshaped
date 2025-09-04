# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an experimental React + TypeScript + Vite project with Storybook integration for component development and documentation. The project includes experimental MCP (Model Context Protocol) integration via `@storybook/addon-mcp`.

## Development Commands

### Core Development

- `pnpm dev` - Start Vite development server
- `pnpm build` - Full TypeScript compilation and Vite build
- `pnpm lint` - Run ESLint on all files
- `pnpm preview` - Preview production build

### Storybook Development

- `pnpm storybook` - Start Storybook dev server on port 6006
- `pnpm build-storybook` - Build Storybook for production

### Package Manager

This project uses **pnpm 10.15.0** as specified in `packageManager` field.

## Architecture and Code Organization

### Component Structure

- Components follow atomic design principles with co-located `.stories.ts` files
- Each component has its own CSS file (e.g., `Button.tsx`, `Button.css`, `Button.stories.ts`)
- All components are in `src/stories/` directory
- Component props use TypeScript interfaces with strict typing

### Storybook Configuration

- Uses Storybook 10.0.0-beta.1 with modern story format
- Stories use `satisfies Meta<typeof Component>` pattern
- Autodocs enabled via `tags: ['autodocs']`
- Action spying with `fn()` for interaction testing
- Accessibility testing integrated through `@storybook/addon-a11y`

### Testing Setup

- **Vitest** for unit testing with browser support via Playwright
- **Storybook Test Runner** integration through `@storybook/addon-vitest`
- Browser testing configured with headless Chromium
- Coverage reporting with V8 provider
- Test setup file: `.storybook/vitest.setup.ts`

### TypeScript Configuration

- Strict mode enabled with comprehensive safety checks
- Project uses TypeScript project references for app and build tools
- ES2022 target for app code, ES2023 for build tools
- Bundler module resolution pattern
- TypeScript handles type checking; Vite handles compilation

### Build System

- **Vite 7.1.2** as primary build tool with React plugin
- ES modules project (`"type": "module"` in package.json)
- Hot Module Replacement (HMR) configured
- Separate TypeScript build step before Vite build

## Key Dependencies and Versions

- **React 19.1.1** - Latest React with React DOM
- **Storybook 10.0.0-beta.1** - Beta version with latest features
- **@storybook/addon-mcp 0.0.4** - Experimental MCP integration
- **Vitest 3.2.4** - Modern test runner
- **Playwright 1.55.0** - Browser automation

## Development Patterns

Before doing any UI, frontend or React development, ALWAYS call the storybook MCP server to get further instructions.

### Story Creation

Stories follow the modern Storybook format:

```typescript
const meta = {
  title: "Example/Component",
  component: Component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Component>;
```

### Component Development

- Components in `src/stories/` with TypeScript interfaces
- CSS modules pattern with component-specific stylesheets
- Accessibility-first development with a11y testing

### Code Quality

- Flat ESLint configuration with React Hooks rules
- Storybook-specific linting rules enabled
- No unused locals/parameters allowed in TypeScript config

## Special Considerations

- Project uses beta versions of Storybook and experimental MCP addon
- React 19 adoption requires awareness of latest React patterns
- Browser-based testing setup may require Playwright browsers to be installed
- MCP integration suggests AI/LLM development capabilities
