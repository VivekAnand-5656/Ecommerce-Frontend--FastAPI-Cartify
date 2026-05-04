import React from "react";
import { FaShop, FaFacebook, FaSquareTwitter, FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
     return (
        <section className="py-16 bg-linear-to-br from-[#0a0053] to-[#0b005f]">
            <div className="px-6 mx-auto max-w-7xl">

                {/* FLEX CONTAINER (NO GRID) */}
                <div className="flex flex-wrap justify-between gap-12">

                    {/* Logo + About */}
                    <div className="max-w-sm">
                        <h1 className="flex items-center gap-2 text-3xl font-bold text-white uppercase">
                            <FaShop className="text-[#fff70a]" /> CartiFy

                        </h1>


                        <p className="text-base leading-relaxed text-gray-200 mt-6">
                            Your smart shopping partner. Discover products, manage carts,
                            and enjoy a seamless online shopping experience.
                        </p>

                        {/* Social icons */}
                        <ul className="flex items-center space-x-3 mt-8">
                            <li> <a href="#"
                                className="flex items-center justify-center text-white bg-white/20 backdrop-blur-md rounded-full w-9 h-9 hover:bg-yellow-300 hover:text-black transition">
                                <FaFacebook/>
                            </a></li>
                             <li> <a href="#"
                                className="flex items-center justify-center text-white bg-white/20 backdrop-blur-md rounded-full w-9 h-9 hover:bg-yellow-300 hover:text-black transition">
                                <FaSquareTwitter/>
                            </a></li>
                             <li> <a href="#"
                                className="flex items-center justify-center text-white bg-white/20 backdrop-blur-md rounded-full w-9 h-9 hover:bg-yellow-300 hover:text-black transition">
                                <BsInstagram/>
                            </a></li>
                             <li> <a href="#"
                                className="flex items-center justify-center text-white bg-white/20 backdrop-blur-md rounded-full w-9 h-9 hover:bg-yellow-300 hover:text-black transition">
                                <FaSquareGithub/>
                            </a></li>
                        </ul>
                    </div>

                    {/* Links Wrapper */}
                    <div className="flex flex-wrap gap-16">

                        {/* Company */}
                        <div>
                            <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                                Company
                            </p>
                            <ul className="mt-6 space-y-4 text-white">
                                <li><a href="#" className="hover:text-yellow-300 transition">About</a></li>
                                <li><a href="#" className="hover:text-yellow-300 transition">Features</a></li>
                                <li><a href="#" className="hover:text-yellow-300 transition">Works</a></li>
                                <li><a href="#" className="hover:text-yellow-300 transition">Career</a></li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                                Help
                            </p>
                            <ul className="mt-6 space-y-4 text-white">
                                <li><a href="#" className="hover:text-yellow-300 transition">Customer Support</a></li>
                                <li><a href="#" className="hover:text-yellow-300 transition">Delivery Details</a></li>
                                <li><a href="#" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
                            </ul>
                        </div>

                    </div>

                    {/* Newsletter */}
                    <div className="max-w-sm w-full">
                        <p className="text-sm font-semibold tracking-widest text-gray-200 uppercase">
                            Subscribe to newsletter
                        </p>

                        <form className="mt-6">
                            <div className="bg-white rounded-lg overflow-hidden flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 p-4 text-black outline-none"
                                />
                                <button
                                    type="submit"
                                    className="px-6 bg-yellow-300 text-black font-semibold hover:bg-yellow-400 transition"
                                >
                                    Join
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Footer;