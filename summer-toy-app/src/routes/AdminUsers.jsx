import { Outlet } from "react-router-dom"

const AdminUsers = () => {

	return (
		<section className="admin-inlog">
		<h1>Här finns alla inloggade på sidan</h1>
		<Outlet />
		</section>
	)
}

export default AdminUsers