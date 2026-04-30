import React from "react";
import { FaShop } from "react-icons/fa6";

const Footer = () => {
    return (
        <section className="py-10 bg-[#627F51] sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">

                    {/* Logo + About */}
                    <div className="col-span-2 lg:col-span-2 lg:pr-8">
                        <h1 className="flex items-center gap-2 text-3xl font-bold text-white uppercase">
                            <FaShop className="text-[#fff70a]" /> CartiFy
                        </h1>

                        <p className="text-base leading-relaxed text-white mt-6">
                            Your smart shopping partner. Discover products, manage carts,
                            and enjoy a seamless online shopping experience.
                        </p>

                        {/* Social icons */}
                        <ul className="flex items-center space-x-3 mt-8">
                            {["T", "F", "I", "G"].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center text-white bg-gray-800 rounded-full w-8 h-8 hover:bg-green-500 transition"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                            Company
                        </p>
                        <ul className="mt-6 space-y-4 text-white">
                            <li><a href="#" className="hover:text-yellow-300">About</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Features</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Works</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Career</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                            Help
                        </p>
                        <ul className="mt-6 space-y-4 text-white">
                            <li><a href="#" className="hover:text-yellow-300">Customer Support</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Delivery Details</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-yellow-300">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-2 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                            Subscribe to newsletter
                        </p>

                        <form className="mt-6">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-4 text-black rounded-md outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full mt-3 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <hr className="mt-16 mb-8 border-gray-300" />

                <p className="text-sm text-center text-white">
                    © {new Date().getFullYear()} CartiFy. All rights reserved.
                </p>

            </div>
        </section>
    );
};

export default Footer;