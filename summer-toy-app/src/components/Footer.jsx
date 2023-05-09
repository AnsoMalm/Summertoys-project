import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
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
				<div className="icons-row">
					<FontAwesomeIcon
						className="social-icon"
						icon={faInstagram}
					/>
					<FontAwesomeIcon 
						className="social-icon"
						icon={faFacebook}
					/>
					<FontAwesomeIcon
						className="social-icon"
						icon={faTwitter}
					/>
				</div>
					<p className="admin-login-text">
					<Link to="admin">Admin Login</Link>
						<FontAwesomeIcon
							className="admin-icon"
							icon={faRightToBracket}
						/>
					</p>
			</div>	
	</footer>
)

export default Footer