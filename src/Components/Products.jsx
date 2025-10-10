import React, { useState } from 'react';
import useProducts from '../Hook/useProducts';
import Product from './Product';
import Container from './Container';
import bannerImg from '../assets/products-banner.jpeg'
import Loader from './Loader';
import ErrorPage from '../Pages/ErrorPage';

const Products = () => {
    const { products,loading,error } = useProducts()
    console.log(products);
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedProducts = term ? products.filter(product => product.name.toLocaleLowerCase().includes(term)) : products

    if (loading) return <Container><Loader></Loader></Container>;
    if (error) return <Container><ErrorPage></ErrorPage></Container>;
    // console.log(searchedProducts);

    return (
        <Container>
            <title>HomeAura - Products</title>
            <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center  mt-12 rounded-2xl"
                style={{ backgroundImage: `url(${bannerImg})`, overflow: 'hidden', }}>

                <div className="absolute inset-0 bg-[#000000ab] bg-opacity-50 overflow-hidden"></div>

                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                        Our Complete Collection
                    </h1>
                    <p className="text-gray-300 mt-5 max-w-2xl mx-auto font-semibold">
                        Explore all our beautifully designed furniture and home decor items that bring style and comfort together.
                    </p>
                </div>
            </div>


            <div className='flex justify-between items-center mt-16'>
                <h2 className='text-3xl font-bold  '>All Products</h2>


                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search" />
                </label>


            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {
                    searchedProducts.map(item => <Product key={item.id} item={item}></Product>)
                }
            </div>

        </Container>
    );
};

export default Products;