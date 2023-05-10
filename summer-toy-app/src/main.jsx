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
import './Stylesheet/ProductDetails.css'
import './Stylesheet/AdminUser.css'
import './Stylesheet/ShoppingsCart.css'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
      <RecoilRoot>
      <RouterProvider router={router} />
      </RecoilRoot>
  </React.StrictMode>,
)
