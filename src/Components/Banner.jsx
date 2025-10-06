import React from "react";
import Container from "./Container";
import bannerImg from '../assets/banner-chair.png'

const Banner = () => {
    return (
        <section className="bg-[#faf7f2] py-20 px-6 md:px-16">
            <Container>
                <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Make Your Home <br />
                            <span className="text-amber-600">Extra Special</span>
                        </h1>
                        <p className="text-gray-600 font-semibold">
                            People who have the freedom of time, flexibility & comfort of their home
                            with our exclusive furniture collection.
                        </p>
                        <button className="bg-amber-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-amber-700 transition">
                            View Our Collections
                        </button>
                    </div>

                        <div className="absolute bg-amber-100 w-60 h-60 rounded-full top-6 -z-10"></div>
                        <img
                            src={bannerImg}
                            alt="Chair"
                            className="w-72 md:w-96"
                        />
                    
                </div>
            </Container>
        </section>
    );
};

export default Banner;
