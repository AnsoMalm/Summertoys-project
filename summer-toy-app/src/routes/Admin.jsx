import { Link, Outlet } from "react-router-dom"

const Admin = () => {

	return (
		<section className="admin-box">
			<h1>Du är nu inloggad</h1>
		<div className="admin-links">
			<Link to="admin-products">Produkt-sidan</Link>
			<Link to="users">Gå till Admin Usersidan</Link>
		</div>
		<Outlet />
		</section>
	)
}

export default Admin