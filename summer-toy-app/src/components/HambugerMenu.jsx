import { Link } from "react-router-dom"

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
			<li><Link>Våra produkter</Link></li>
			<li><Link>Kundkorg</Link></li>
			<li onClick={scrolldown}>Kontakt</li>
			</ul>
		</nav>
	)

}

export default HamburgerMenu