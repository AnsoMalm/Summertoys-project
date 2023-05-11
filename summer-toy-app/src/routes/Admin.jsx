import { Link, Outlet } from "react-router-dom"

const Admin = () => {

	return (
		<section className="admin-choices-container">
			<h1>Du är nu inloggad</h1>
			<Link to="">
				<button className="admin-log-out">Logga ut</button>
			</Link>
			<p className="choice-heading">Välj mellan följande val:</p>
		<div className="admin-links">
			<Link to="admin-products">Produkt-sidan</Link>
			<Link to="users">Admin användarsidan</Link>
		</div>
		<Outlet />
		</section>
	)
}

export default Admin