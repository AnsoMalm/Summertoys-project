import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilValue } from "recoil"
import { cartState } from "../data/cartState"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const ShoppingCart = () => {
	const cart = useRecoilValue(cartState)
	
	return (
		<section>
			<h1>Din Varukorg</h1>
			<div className="shoppingcart-container">
						{cart.map((product, id) => (
						<div className="product-container" key={id}>
							<h3 className="heading-cart">{product.name}</h3>
							<FontAwesomeIcon
							className="minus-icon" 
							icon={faMinus} />
							<p className="product-number">{product.amount}</p>
							<FontAwesomeIcon 
							className="plus-icon"
							icon={faPlus} />
						<h4 className="price-heading">Pris:</h4>
						<p className="price-produkt">{product.price} kr</p>
						</div>))}
				<div className="total-price-container">
					<p className="total-price-heading">Totalbelopp:</p>
					<p className="sum-for-all-product">summan man får in</p>
					<button className="pay-button">Betala köp</button>
				</div>
			</div>
		</section>
	)
}

export default ShoppingCart