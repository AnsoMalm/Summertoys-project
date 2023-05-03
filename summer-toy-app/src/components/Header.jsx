import { useState } from "react"
import HamburgerMenu from "./HambugerMenu"

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
			<h1>Sommarleksparadiset</h1>
		</header>
	)
}

export default Header