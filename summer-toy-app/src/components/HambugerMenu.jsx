import { NavLink } from "react-router-dom"

const HamburgerMenu = () => {

	const scrolldown = () => {
	window.scrollTo({
	top: document.body.scrollHeight - window.innerHeight, 
		behavior: 'smooth'
	});
}

	return (
		<nav className="nav-hamburger-menu">
			<ul className="links-hamburger-menu">
				<li><NavLink>Våra produkter</NavLink></li>
				<li><NavLink>Varukorg</NavLink></li>
				<li onClick={scrolldown}>Kontakt</li>
			</ul>
		</nav>
	)

}

export default HamburgerMenu