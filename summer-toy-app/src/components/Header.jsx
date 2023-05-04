import { useState } from "react"
import {  Link ,NavLink } from "react-router-dom";
import HamburgerMenu from "./HambugerMenu"

const Header = () => {
	const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
	
	// function showNav() {
	// 	if (!showHamburgerMenu) {
	// 		setShowHamburgerMenu(true); 
	// 	} else {
	// 		setShowHamburgerMenu(false);
	// 	}
	// }

	return (
		<header>
			<h1>Strandleksparadiset</h1>
			<NavLink to="våra-produkter">Våra Produkter</NavLink>
			<NavLink to="varukorg">Varukorg</NavLink>
		</header>
	)
}

export default Header