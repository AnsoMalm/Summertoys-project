import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink} from "react-router-dom";


const Header = () => {

	return (
		<header>
			<div className="head-container-widescreen">
				<h1 className="loggan">Strandleksparadiset</h1>		
				<div className="nav-länkar">
						<NavLink to="products">Våra Produkter</NavLink>
						<NavLink to="cart">Varukorg</NavLink>
					<FontAwesomeIcon 
						className="shopping-cart"
						icon={faCartShopping}
						/>
				</div>
			</div>
		</header>
	)
}

export default Header