import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, Twitch } from 'lucide-react';
import logo from '../assets/HomeAura-logo.png';

const Footer = () => {

    return (
        <footer className="bg-gray-900 text-gray-200 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Branding and Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="HomeAura Logo" className="h-30 mb-4" />
                        <p className="text-gray-400 text-center md:text-left">
                            HomeAura: Crafting beautiful, functional furniture for your home.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="hover:text-amber-600 transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-amber-600 transition">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/wishlist" className="hover:text-amber-600 transition">
                                    Wishlist
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-amber-600 transition">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <MapPin size={18} className="text-amber-600" />
                                <span>123 Furniture Lane, Design City, DC 12345</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} className="text-amber-600" />
                                <a href="mailto:support@homeaura.com" className="hover:text-amber-600 transition">
                                    support@homeaura.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} className="text-amber-600" />
                                <a href="tel:+1234567890" className="hover:text-amber-600 transition">
                                    +1 (234) 567-890
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe Form */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers.</p>
                        <form className="flex flex-col gap-2">
                            <label htmlFor="subscribe-email" className="input w-full input-bordered flex items-center gap-2">
                                <Mail size={18} className="text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full text-black"
                                />
                            </label>
                            <button

                                className="btn btn-primary bg-amber-600 hover:bg-amber-700 text-white border-none"
                            >
                                Subscribe <Send size={18} />
                            </button>

                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} HomeAura. All rights reserved.
                    </p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Facebook />
                        <Instagram />
                        <Linkedin />
                        <Twitch />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;