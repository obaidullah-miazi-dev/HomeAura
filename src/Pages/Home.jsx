import React from 'react';
import Banner from '../Components/Banner';
import { Link, useLoaderData } from 'react-router';
import Product from '../Components/Product';
import Container from '../Components/Container';
import useProducts from '../Hook/useProducts';

const Home = () => {
    const products = useLoaderData()
    const data = useProducts()
    console.log(data);
    const featuredProduct = products.slice(0, 8)
    // console.log(products);
    return (
        <>
            <Banner></Banner>
            <Container>
                
                    <div className='flex justify-between items-center mt-16'>
                        <h2 className='text-3xl font-bold  '>Featured Products</h2>
                        <Link to='/products' className='font-semibold py-2 px-4 border-1 rounded-2xl cursor-pointer hover:text-amber-600'>See All Products</Link>
                    </div>
                    <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            featuredProduct.map(item => <Product key={item.id} item={item}></Product>)
                        }
                    </div>
                
            </Container>
        </>
    );
};

export default Home;