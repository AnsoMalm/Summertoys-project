import { Link } from "react-router-dom"

const Footer = () => (
	<footer>
			<div className="contact-info-container">
				<p className="contact">Kontakt:</p>
					<p className="contact-info">
					Telefon: 070-6354268<br />
					Telefontid: Må - Fre 09.00 - 18.00
					<br />
					E-mejl: info@strandleksparadiset.se
					</p>
			</div>
			<div className="contact-links-container">
					<Link to="">Till startsida</Link>
					<p>Om oss</p>
					<p>Vanliga frågor</p>
					<p>Köpvillkor</p>
			</div>
			<div className="social-icons-container">
				<img></img>
				<img></img>
				<img></img>
				<Link to="admin-login">Admin Login</Link>
				<img></img>
			</div>	
	</footer>
)

export default Footer