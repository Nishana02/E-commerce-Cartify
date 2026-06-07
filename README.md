# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project


E-commerce - Cartify App(React)

1. How to install and run the project

   -> Prerequisites
      Install node.js

   -> In order to create a react app using vite  - npm create vite@latest(terminal)

   -> In order to install dependencies - npm install

   -> To run the project - npm run dev


2.  Any key design or technical decisions you made

    -> Used vite instead of Create React App :-
       Create React App is deprecated, so Vite is the modern choice(faster builder tool).

    -> Used Axios for API calls instead of fetch.

    -> For navigation - React Router DOM is used.

    -> State Management - React Hooks.

    -> For styling - Tailwind CSS(Utility‑first approach, responsive design)

    -> Folder structure divided into two parts:-
       1. componenets - placed reusable ones(headers)
       2. pages - places each single pages(Home, ProductDetails, AddProduct, EditProduct)

    -> For notifications(success/error messages) - React toastify used.

    -> Icons - React icons(npm i react-icons)





