import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Layout/Root";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])

export default router