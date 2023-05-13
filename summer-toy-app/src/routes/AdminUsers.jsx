import { Outlet } from "react-router-dom"

const AdminUsers = () => {

	return (
		<section className="admin-inlog">
		<h1> Under konstruktion - Här är listan på alla som är inloggade</h1>
		<Outlet />
		</section>
	)
}

export default AdminUsers