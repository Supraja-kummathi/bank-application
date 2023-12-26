import React from 'react';
import { createRoot } from 'react-dom/client';
import "./global.css"
import App from './App'
import { Provider } from 'react-redux';
import store from './redux/store';

// console.log(import.meta.env.VITE_API_BASE_URL)
createRoot(document.getElementById("root")).render(<Provider store={store}><App/></Provider> )
