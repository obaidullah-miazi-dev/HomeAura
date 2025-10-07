import { createHashRouter } from 'react-router-dom';
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Components/Products";
import ProductsDetails from "../Components/ProductsDetails";
import Wishlist from "../Pages/Wishlist";
import ErrorPage from '../Pages/ErrorPage';
import About from '../Pages/About';


const router = createHashRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/products',
                Component: Products
            },
            {
                path: '/product/:id',
                Component: ProductsDetails
            },
            {
                path: '/wishlist',
                Component: Wishlist
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    }
])

export default router