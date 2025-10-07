import React, { useState } from "react";
import Logo from '../assets/HomeAura-logo.png'
import { Menu, X } from "lucide-react"; // icons
import Container from "./Container";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm">
            <Container>
                <div className="mx-auto flex justify-between items-center px-6 md:px-10 py-4">
                    <div className="flex items-center gap-2">
                        <NavLink to='/'>
                            <img
                            src={Logo}
                            alt="HomeAura"
                            className="w-20"
                        />
                        </NavLink>
                    </div>

                    <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                        <NavLink to='/'>
                        <li className="hover:text-amber-600 transition cursor-pointer">Home</li>
                        </NavLink>
                        <NavLink to='/products'>
                            <li className="hover:text-amber-600 transition cursor-pointer">Products</li>
                        </NavLink>
                        <NavLink to='/wishlist'>
                            <li className="hover:text-amber-600 transition cursor-pointer">WishList</li>
                        </NavLink>
                        <li className="hover:text-amber-600 transition cursor-pointer">About</li>
                        <li className="hover:text-amber-600 transition cursor-pointer">Contact</li>
                    </ul>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                            Login
                        </button>
                        <button className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                            Sign Up
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 text-gray-700"
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
                        <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
                            <li className="hover:text-amber-600 transition cursor-pointer">Home</li>
                            <li className="hover:text-amber-600 transition cursor-pointer">Shop</li>
                            <li className="hover:text-amber-600 transition cursor-pointer">About</li>
                            <li className="hover:text-amber-600 transition cursor-pointer">Blog</li>
                            <li className="hover:text-amber-600 transition cursor-pointer">Contact</li>
                            <div className="flex gap-3 mt-3">
                                <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                                    Login
                                </button>
                                <button className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                                    Sign Up
                                </button>
                            </div>
                        </ul>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;
