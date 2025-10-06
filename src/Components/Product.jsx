import React from 'react';

const Product = ({ item }) => {
    console.log(item);
    return (
        <>
            <section className="py-8  bg-white">
                <div>
                    
                        <div className="shadow-md rounded-xl overflow-hidden  hover:shadow-xl transition bg-[#fdfdfd]">
                            <img src={item.image} alt={item.name} className="w-full h-64 " />
                            <div className="p-4 space-y-3">
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-xl font-medium text-gray-800">{item.name}</h3>
                                    <p className='bg-[#faf7f2] p-1 px-3 rounded-full font-semibold'>{item.category}</p>
                                </div>
                                <p className='text-gray-700 h-12'>{item.description}</p>
                                <p><span className='font-semibold'>Dimensions : </span>{item.dimensions}</p>
                                <p><span className='font-semibold'>Material : </span>{item.material}</p>
                                <div className='flex justify-between items-center my-4'>
                                    <p className="text-amber-600 font-semibold text-lg">$ {item.price}</p>
                                    <p className={`${item.stock?'bg-green-100 text-green-500':'bg-red-100 text-red-500'} font-semibold px-2 py-1 rounded-full`}>{item.stock?'Available':'Out of Stock'}</p>
                                </div>
                                <button className="mt-3 px-5 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition w-full">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    
                </div>
            </section>
        </>
    );
};

export default Product;