import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root.jsx";
import Home from "./routes/Home.jsx";
import Products, {loader as ProductsLoader} from "./routes/Products.jsx";
import ProductDetails from "./routes/ProductInfo.jsx";
import ShoppingCart from "./routes/ShoppingCart.jsx";
import AdminLogin from "./routes/AdminLogin.jsx";
import Admin from "./routes/Admin.jsx";
import AdminProducts, {loader as LoadProduct } from "./routes/AdminProducts.jsx";
import AdminUsers from "./routes/AdminUsers.jsx";



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
				path: 'login', 
				element: <AdminLogin />,
			},
			{
				path: 'admin', 
				element: <Admin />,
				children: [
					{
						path: 'users', 
						element: <AdminUsers />
					},
					{
						path: 'admin-products',
						element: <AdminProducts />,
						loader: LoadProduct,
					}
				]
			}
		
		]
	}
])