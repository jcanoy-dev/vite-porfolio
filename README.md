# React + Vite + Tailwind CSS

This project is a React application built with Vite, featuring Tailwind CSS for styling and React Router for navigation.

Checkout my Portfolio hosted in Cloudflare Workers :D 
- https://jcanoy-porfolio.jeffrey-canoy92.workers.dev/
  
## Features

- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **React**: Component-based UI library
- **Tailwind CSS**: Utility-first CSS framework with custom theme colors
- **React Router**: Client-side routing for single-page application
- **ESLint**: Code linting for better code quality

## Custom Tailwind Theme

The project includes custom color variables defined in `src/index.css`:

- `--color-gray-teal-pale`: #f0f4f4
- `--color-gray-teal-light`: #f4fafa
- `--color-gray-teal-soft`: #ccdada
- `--color-gray-teal-muted`: #9fb8b8
- `--color-gray-teal`: #5f7d7e

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/App.jsx`: Main app component with routing
- `src/main.jsx`: Entry point
- `src/index.css`: Global styles and Tailwind imports
- `src/layout/`: Layout components (AppLayout, AppHeader)
- `src/pages/`: Page components (Home, About, Contact)

## Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
