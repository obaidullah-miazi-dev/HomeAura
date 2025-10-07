import { createHashRouter } from 'react-router-dom';
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Products from "../Components/Products";
import ProductsDetails from "../Components/ProductsDetails";
import Wishlist from "../Pages/Wishlist";


const router = createHashRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                path: '*',
                element: <div className="text-center py-20 text-gray-500">404 - Page Not Found</div>
            }
        ]
    }
])

export default router