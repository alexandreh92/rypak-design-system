# Rypak Design System

This repository contains a design system built for study purposes. It's based on the [Figma Community Design System UI Kit](https://www.figma.com/design/zzSHcpmsmqFweiFDePqbnb/Design-System-%7C-Ui-Kit-Free--Community-?node-id=403-674&p=f&t=SOpHgwMnuD9IH6bF-0).

## Overview

Rypak is a comprehensive design system that includes:

- 🎨 Typography components (Headings, Paragraphs)
- 🧩 UI components built with React and TypeScript
- 📚 Storybook documentation
- 🎭 Design tokens and theme configuration
- 🛠️ Development tooling and configurations

This project serves as a learning platform for understanding design systems, component libraries, and modern frontend development practices.

## Tech Stack

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Turborepo](https://turbo.build/repo) - Monorepo management
- [Panda CSS](https://panda-css.com/) - Styling solution
- [Storybook](https://storybook.js.org/) - Component documentation
- [Changesets](https://github.com/changesets/changesets) - Version management

## Project Structure

```
apps/
  ├── docs/       # Storybook documentation
  └── sandbox/    # Development playground
packages/
  ├── ui/         # Core UI components
  ├── panda-preset/ # Design tokens and theme
  └── ... (configuration packages)
```

## Getting Started

### Prerequisites

- Node.js (see [`.tool-versions`](.tool-versions) for version)
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start Storybook and Sandbox development servers and build in watch-mode for packages.
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

## Documentation

The design system documentation is available in the Storybook instance. Run `pnpm dev` to start the documentation server locally.

## Learning Resources

This project is meant for educational purposes. Here are some topics you can learn from this codebase:

- Building a component library with React and TypeScript
- Setting up a monorepo structure with Turborepo
- Creating and maintaining design tokens
- Documenting components with Storybook
- Managing package versions with Changesets
- Implementing accessibility best practices

## License

This project is for study purposes only. The original design is from [Figma Community Design System UI Kit](https://www.figma.com/design/zzSHcpmsmqFweiFDePqbnb/Design-System-%7C-Ui-Kit-Free--Community-?node-id=403-674&p=f&t=SOpHgwMnuD9IH6bF-0).
