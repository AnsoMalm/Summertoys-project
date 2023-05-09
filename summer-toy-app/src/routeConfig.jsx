import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Products, {loader as ProductsLoader} from "./routes/Products.jsx";
import ProductDetails from "./routes/ProductInfo.jsx";
import ShoppingCart from "./routes/ShoppingCart.jsx";
import AdminLogin from "./routes/AdminLogin.jsx";
import AdminUser from "./routes/AdminUser.jsx";



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
				path: 'products', 
				element: <Products />, 
				loader: ProductsLoader, 
			},
			{
				path: 'products/:id',
				element: <ProductDetails />,
				loader: ProductsLoader,
			},
			{
				path: 'cart', 
				element: <ShoppingCart />,
			}, 
			{
				path: 'admin', 
				element: <AdminLogin />,
			},
			{	
				path: 'admin/users',
				element: <AdminUser />,
		
			},
			
			
			// {
			// 	path: 'admin/products',
			// 	element: <AdminProducts />
			// },
		
		]
	}
])