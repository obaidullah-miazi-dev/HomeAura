import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hook/useProducts';
import { Heart } from 'lucide-react';
import Container from './Container';

const ProductsDetails = () => {
    const { id } = useParams();
    const { products } = useProducts();

    const product = products.find(p => String(p.id) === id);

    if (!product) {
        return (
            <div className="text-center py-20 text-gray-500 text-lg">
                Loading product details...
            </div>
        );
    }

    

    return (
        <Container>
            <div className='md:flex gap-12 justify-between items-center my-24 '>
                <div className='bg-gray-50 p-12 w-full flex-1 flex justify-center items-center rounded-2xl'>
                    <img className='rounded-2xl w-full' src={product.image} alt="" />
                </div>
                <div className='flex-2  space-y-12 text-center md:text-left mt-12 md:mt-0'>
                    <h1 className='md:text-8xl text-5xl font-bold'>{product.name}</h1>
                    <p className='font-semibold text-gray-600 text-lg'>{ }</p>
                    <p className='font-semibold text-lg border-b-2 border-t-2 border-gray-200 py-3'>{product.description}</p>
                    <p className='font-semibold text-gray-600'><span className='font-bold'><span className='font-bold text-black'>Material : </span></span>{product.material}</p>

                    <p>
                        <span className='font-bold'>Dimensions : </span>
                        {product.dimensions}
                    </p>

                    <div className="flex justify-center md:justify-start items-center sm:flex-row sm:items-center gap-4">
                        <p className="text-2xl font-semibold text-amber-600">
                            ${product.price}
                        </p>
                        <span
                            className={`px-3 py-1 text-sm font-medium rounded-full ${product.stock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}
                        >
                            {product.stock ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>


                    <div className='flex gap-3'>


                        <button onClick={() => handleAddToWishList()} className="flex items-center mx-auto w-full  justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition">
                            <Heart size={20} />
                            Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ProductsDetails;
