# Components Library

A modern React component library built with **Vite** and styled with **Tailwind CSS**. This project demonstrates reusable UI components with smooth animations, navigation, and state management patterns.

## Features

- **Responsive Components**: Button, Accordion, Modal, Table, Link, and Route components
- **Smooth Animations**: Tailwind CSS-powered animations for expand/collapse interactions
- **Navigation System**: Context-based routing with custom hooks and navigation context
- **Accessibility**: Semantic HTML (buttons, proper ARIA attributes)
- **Modern Stack**: React 18+, Vite, Tailwind CSS, React Icons

## Components

### Button

A versatile button component with variant support (primary, secondary, success, warning, danger).

### Accordion

An accordion component with smooth expand/collapse animation using Tailwind CSS transforms and transitions. Supports toggle behavior and accessibility features.

### Modal

A modal dialog component that renders content via React Portal into a dedicated DOM container.

### Table

A flexible table component with customizable column configuration and row rendering.

### Link & Route

Navigation components for building client-side routing without external libraries.

## Getting Started

### Installation

```bash
cd componentsLibrary
npm install
```

### Development

```bash
npm run dev
```

Opens a development server at `http://localhost:5173` (or the next available port).

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Accordion.jsx
│   ├── Button.jsx
│   ├── Modal.jsx
│   ├── Table.jsx
│   ├── Link.jsx
│   └── Route.jsx
├── hooks/            # Custom React hooks
│   └── use-navigation.js
├── context/          # React Context providers
│   └── navigationContext.js
├── App.jsx
└── main.jsx
```

## Key Concepts

### Accordion Animation

Uses Tailwind's `scale-y` transform with `opacity` and `transition-all` for smooth expand/collapse. Content always renders but is visually hidden when collapsed.

### Navigation System

Implements a custom navigation context to manage routing state across components without external routing libraries.

### Portal Modal

Uses React's `createPortal` to render the modal into a separate DOM container (`#modal-container` in `index.html`).

## Props & Usage

Refer to individual component files for prop definitions and usage examples.

## Technologies

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **PropTypes**: Runtime type checking (for Button component validation)

## Notes

- PropTypes validation is configured for the Button component to enforce single variant selection
- Modal component requires a `#modal-container` div in `index.html`
- Table component uses a `keyFn` prop to generate unique keys for rows
- All animations leverage Tailwind's built-in transition and transform utilities
