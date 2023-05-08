import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getProducts } from "../data/getProduct.js"
import { useLoaderData } from "react-router"
import { useState } from "react"
import { Link } from "react-router-dom"

export const loader = () => getProducts()


const Products = () => {
	const productData = useLoaderData()
	const [searchValue, setSearchValue] = useState(''); 

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
				placeholder="Sök på produkt"
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
					<Link>Mer info om produkt</Link>
					<div className="products-price">
						<p className="price">{price}kr</p>
					</div>
					<button className="buy-button">Köp</button>
				</div>

				))}
			</div>

		</section>

	)
}

export default Products