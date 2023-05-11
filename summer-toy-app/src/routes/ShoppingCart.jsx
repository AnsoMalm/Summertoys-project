import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilValue, useSetRecoilState} from "recoil"
import { cartState } from "../data/cartState"
import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const ShoppingCart = () => {
	const cart = useRecoilValue(cartState)
	const setCart = useSetRecoilState(cartState);

	//tar bort en produkt med hjälp av minus-iconen och tar bort varan helt från varukorgen
	function removeProduct(productId) {
		const updatedCart = cart.map((item) => {
			if(item.id === productId && item.amount > 1) {
				return {
					...item, 
					amount: item.amount - 1
				}
			} else if (item.id === productId && item.amount === 1 ){
				return null;
			} else {
				return item; 
			}
		})
		.filter((item) => item !== null);

		setCart(updatedCart)
	}
	//totalsumman för varukorgen
	function calculateTotalSum() {
		return cart.reduce((total, product) => {
			return total + product.price * product.amount
		}, 0); 
	}

	
	return (
		<section>
			<h1>Din Varukorg</h1>
			<div className="shoppingcart-container">
						{cart.map((product, id) => (
						<div className="product-container" key={id}>
							<h3 className="heading-cart">{product.name}</h3>
							<FontAwesomeIcon
							className="minus-icon" 
							icon={faMinus}
							onClick={() => removeProduct(product.id)} />
							<p className="product-number">{product.amount}</p>
							<FontAwesomeIcon 
							className="plus-icon"
							icon={faPlus}
							/>
						<h4 className="price-heading">Pris:</h4>
						<p className="price-produkt">{product.price * product.amount} kr</p>
						</div>))}
				<div className="total-price-container">
					<p className="total-price-heading">Totalbelopp:</p>
					<p className="sum-for-all-product">{calculateTotalSum()} kr</p>
					<button className="pay-button">Betala köp</button>
				</div>
			</div>
			<Link className="back-to-product" to="/products">Tillbaka till våra produkter</Link>
		</section>
	)
}

export default ShoppingCart