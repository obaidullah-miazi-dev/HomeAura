import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Components/Products";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('furnitureData.json')
            },
            {
                path:'/products',
                Component: Products
            }
        ]
    }
])

export default router