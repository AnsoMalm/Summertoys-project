import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import HamburgerMenu from "./HambugerMenu.jsx"
import { useState } from "react"
import { NavLink } from "react-router-dom";


const Header = () => {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	
	function showNav() {
	if (!showHamburgerMenu) {
		setShowHamburgerMenu(true); 
	} else {
		setShowHamburgerMenu(false);
	}
}


	return (
		<header>
			<div className="head-container-widescreen">
				<h1 className="heading">Strandleksparadiset</h1>
				<div className="nav-länkar">
					<FontAwesomeIcon
						className="hamburger-icon"
						icon={faShoppingBag}
						onClick={showNav}
					/>
					<NavLink to="våra-produkter">Våra Produkter</NavLink>
					<NavLink to="varukorg">Varukorg</NavLink>
					<FontAwesomeIcon 
						className="shopping-cart"
						icon={faBasketShopping}
						/>
				</div>
				{showHamburgerMenu && <HamburgerMenu />}

			</div>
		</header>
	)
}

export default Header