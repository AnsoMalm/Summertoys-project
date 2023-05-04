import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Products from "./routes/Products.jsx";
import ShoppingCart from "./routes/ShoppingCart.jsx";
import AdminLogin from "./routes/AdminLogin.jsx";
import AdminPage from "./routes/AdminPage.jsx";


export const router = createHashRouter([
	{
		path: '/',
		element: <Root />, 
		children: [
			{
				path: '', 
				element: <Home />
			}, 
			{
				path: 'våra-produkter', 
				element: <Products />, 
			},
			{
				path: 'varukorg', 
				element: <ShoppingCart />,
			}, 
			{
				path: 'admin-login', 
				element: <AdminLogin />,
				children: [
					{
						path: 'admin-sida',
						element: <AdminPage />
					},
				]
			},
		
		]
	}
])