import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Products, {loader as ProductsLoader} from "./routes/Products.jsx";
import ProductDetails from "./routes/ProductInfo.jsx";
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
				loader: ProductsLoader, 
			},
			{
				path: 'product/:id',
				element: <ProductDetails />,
				loader: ProductsLoader,
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