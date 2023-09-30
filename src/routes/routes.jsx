import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import Registration from "../components/Registration";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/registration',
                element: <Registration/>,
            }
        ]
    }
])

export default routes;