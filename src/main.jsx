import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Context/Context.jsx'
import CartProvider from './Context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CartProvider>
     <ContextProvider>
    <App />  
    </ContextProvider> 
    </CartProvider>
  /* </React.StrictMode> */
)
