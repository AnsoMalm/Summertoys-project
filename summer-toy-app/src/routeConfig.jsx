import { createHashRouter } from "react-router-dom";
import Root from "./routes/Root";


export const router = createHashRouter([
	{
		path: '/',
		element: <Root />

	}
])