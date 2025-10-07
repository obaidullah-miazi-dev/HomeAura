import { createBrowserRouter } from "react-router";
import App from "../App";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Components/Products";
import ProductsDetails from "../Components/ProductsDetails";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                Component: Home
            },
            {
                path:'/products',
                Component: Products
            },
            {
                path:'/product/:id',
                Component: ProductsDetails
            }
        ]
    }
])

export default router