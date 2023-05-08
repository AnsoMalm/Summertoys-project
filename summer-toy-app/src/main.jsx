import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom' 
import { router } from './routeConfig.jsx'
import './index.css'
import './Stylesheet/Footer.css'
import './Stylesheet/Header.css'
import './Stylesheet/Home.css'
import './Stylesheet/AdminLogin.css'
import './Stylesheet/Product.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
