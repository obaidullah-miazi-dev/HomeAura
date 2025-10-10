import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const savedProducts = JSON.parse(localStorage.getItem('wishlist') || [])
        if (savedProducts) setWishlist(savedProducts)
    }, [])

    if(!wishlist.length){
        return <Container><p className='text-red-500 text-2xl text-center my-96 font-semibold'> ⚠️ No Wishlist Added</p></Container>
    }


    const handleSort = (
        () => {
            if (sortOrder === 'price-asc') {
                return [...wishlist].sort((a, b) => a.price - b.price)
            }
            else if (sortOrder === 'price-desc') {
                return [...wishlist].sort((a, b) => b.price - a.price)
            }
            else {
                return wishlist
            }
        }
    )()

    const handleRemove = (id) => {
        const existingProducts = JSON.parse(localStorage.getItem('wishlist'))
        let updatedProducts = existingProducts.filter(p => p.id !== id)
        setWishlist(updatedProducts)
        localStorage.setItem('wishlist', JSON.stringify(updatedProducts))
    }



    const totalsByCategory = {}
    wishlist.forEach(p=>{
        const category = p.category
        totalsByCategory[category] = (totalsByCategory[category] || 0) + p.price
    })

    const chartData = Object.keys(totalsByCategory).map(category => ({
        category: category,
        total: totalsByCategory[category]
    }))
    return (
        <Container>
            <div>
            <title>HomeAura - WishList</title>
                <div className='flex justify-between items-center mt-16'>
                    <h2 className='text-2xl font-bold'>Wishlisted Products</h2>
                    <label className='form-control w-full max-w-xs'>
                        <select className='select select-bordered font-semibold' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="none">Sort By Price</option>
                            <option value="price-asc">Low to High</option>
                            <option value="price-desc">High to Low</option>
                        </select>
                    </label>
                </div>
                {
                    handleSort.map(p => (
                        <div key={p.id} className="flex  my-8 flex-col sm:flex-row bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-4 gap-4 border border-gray-100">

                            <div className="flex  md:justify-center items-center">
                                <img
                                    src={p.image}

                                    className="w-full h-54 object-cover rounded-xl "
                                />
                            </div>


                            <div className="flex flex-col space-y-4 w-full">
                                <div>
                                    <h2 className="text-2xl font-semibold text-gray-800">
                                        {p.name}
                                    </h2>

                                    <p>{p.description}</p>

                                </div>

                                <div className="flex  md:justify-start items-center sm:flex-row sm:items-center gap-4">
                                    <p className="text-2xl font-semibold text-amber-600">
                                        ${p.price}
                                    </p>
                                    <span
                                        className={`px-3 py-1 text-sm font-medium rounded-full ${p.stock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {p.stock ? "In Stock" : "Out of Stock"}
                                    </span>
                                </div>


                                <div className="flex flex-wrap items-center justify-between border-b-2 border-gray-200 pb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                            Category: {p.category}
                                        </span>

                                    </div>


                                </div>
                                <div className='flex items-center gap-3'>
                                    <Link to={`/product/${p.id}`} >
                                        <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full  sm:mt-0 w-full md:w-28">
                                            View Details
                                        </button>
                                    </Link>

                                    <button onClick={() => handleRemove(p.id)} className='bg-red-100 text-red-600 py-1.5 px-4 rounded-full font-semibold hover:bg-red-200'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))
                }


                <div className='space-y-5'>
                    <h2 className='font-bold text-3xl'>Whislist Summary</h2>
                    <div className='h-96 border rounded-xl bg-base-100 mb-3 p-5'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                
                                data={chartData}
                                
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />

                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>

            </div>
        </Container>
    );
};

export default Wishlist;