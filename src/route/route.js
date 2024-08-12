import { createBrowserRouter } from "react-router-dom";
import HomePage from "pages/homePage";
import Layout from "layout/layout";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                path : "/",
                element : <HomePage />
            }
        ]
    }
])

export default router