import { Link } from "react-router-dom"

const AdminLogin = () => {
	
	return (
		<section>
			<h1>Personal login</h1>
			<form className="login-container">
				<label className="input-text">Användarnamn: </label> <br />
					<input type="text"
					placeholder="Skriv in ditt användarnamn"
					id="personal-input"></input> <br />
				<label className="input-text">Lösenord: </label> <br />
					<input type="text"
					placeholder="skriv in ditt lösenord"
					id="personal-input"></input> <br />
				<Link to="admin-sida"><button className="login-button">Logga in</button></Link>
			</form>
		</section>
	)
}

export default AdminLogin