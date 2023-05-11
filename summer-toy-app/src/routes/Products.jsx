import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilState } from 'recoil'
import { cartState } from '../data/cartState.js'
import { getProducts } from "../data/getProduct.js"
import { useLoaderData } from "react-router"
import { useState } from "react"
import { Link } from "react-router-dom"

export const loader = () => getProducts()


const Products = () => {
	const productData = useLoaderData()
	const [searchValue, setSearchValue] = useState(''); 
	const [cart, setCart] = useRecoilState(cartState); 

	const addToCart = (product) => {
		let cartItem = {
			id: product.id,
			amount: 1,
			name: product.name,
			price: product.price, 
		} 
		console.log(cartItem)

		let exitsCartItem = cart.find((item) => item.id === cartItem.id)
		if(exitsCartItem) {

			const updatedCart = cart.map((item) => {
				if(item.id === cartItem.id) {
					return {
						...item, 
						amount: item.amount + 1
					}
				} else {
					return item;
				} 
			});
			setCart(updatedCart)
		} else {
			const updatedCart = [ ...cart, cartItem];
				setCart(updatedCart)
		}
	}

	const handleChange = (event) => {
		setSearchValue(event.target.value)
	}

	const filterAllProducts = productData.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase())
	);
	
	return (
		<section className="body-container">
			<h1 className="product-title">Våra produkter</h1>
		
			<input 
				onChange={handleChange}
				className="search-input"
				type="text"
				placeholder="Sök på produkt..."
			/>

			<div className="grid-container">
				{filterAllProducts.map(({id, name, picture, price }) => (
					<div className="product" key={id}>
					<img 
						className="products-pic"
						src={picture}
					/>
					<p className="products-title"> {name}	
					</p>
					<Link to={`/products/${id}`}>Mer info om produkt</Link>
					<div className="products-price">
						<p className="price">{price}kr</p>
					</div>
					<button className="buy-button" onClick={() => addToCart({id, name, price})}>Lägg till</button>
				</div>

				))}
			</div>

		</section>

	)
}

export default Products