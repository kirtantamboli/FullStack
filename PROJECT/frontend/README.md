# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

STATE MANAGEMENT LIBRARY

STORE =>{
    count,product
}

//NOTE store is a global state management which provides all the state(data which changes over time) to the app.

//NOTE reducers => takes the odd state and return the updated state
eg => count :0 => reducer => count : 1

//NOTE actions => actions 