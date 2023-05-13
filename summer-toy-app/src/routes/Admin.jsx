import { Link, Outlet } from "react-router-dom"

const Admin = () => {

	return (
		<section className="admin-choices-container">
			<h1>Du är nu inloggad</h1>
			<p className="choice-heading">Välj mellan följande val:</p>
		<div className="admin-links">
			<Link to="products">Produkt-sidan</Link>
			<Link to="users">Admin användarsidan</Link>
		</div>
		<Outlet />
		</section>
	)
}

export default Admin