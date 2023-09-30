import { Outlet, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <div>Hello from Root <Outlet/></div>,
        children: [
            {
                path: '/',
                element: <div>Hello from Home</div>
            }
        ]
    }
])

export default routes;