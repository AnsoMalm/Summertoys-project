import { useParams, useLoaderData, Link } from "react-router-dom"

const ProductDetails = () => {

	const { id } = useParams()
	const allProducts = useLoaderData()
	const product = allProducts.find(p => String(p.id) === id)

	console.log('ProductDetails: product= ', product)

	if(!product) {
		return (
			<section className="error-field">
				<h2>No product</h2>
				<p>Please check the URL again</p>
				<p><Link to="/våra-produkter">Tillbaka till våra produkter</Link></p>
			</section>
		)
	}
	
	return (
		<section className="product-detail-container">
				<h1>Produktinformation</h1>
				<div className="product-detail">
					<img className="product-img" src={product.picture} />
					<h2 className="product-name">{product.name}</h2>
					<p className="product-descript">{product.description}</p>
					<p className="product-price">{product.price}kr</p>

					<p><Link className="back-to-produkt" to="/våra-produkter">Tillbaka till produktsidan</Link></p>
				</div>
		</section>

	)
}

export default ProductDetails