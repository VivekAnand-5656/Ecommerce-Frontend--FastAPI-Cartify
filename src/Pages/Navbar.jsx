import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import Sidebar from '../catagories/Sidebar';

const Navbar = () => {
    const navigate = useNavigate()
    const { isLoggedIn, logout, cartlength, showProfileMenu, setShowProfileMenu, catagories, setCatagories, allProducts, searchQuery, setSearchQuery } = useContext(AuthContext)
    // const [searchData,setSearchData] = {}
    // ====== Search Baki hai =======

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            const value = e.target.value.trim()
            if (!value) return
            setSearchQuery(value)
            navigate("/search")
        } else{
            setSearchQuery("")
            navigate("/")
        }
    }
    return (
        <div className="w-full h-[10vh] sticky top-0 z-50 backdrop-blur-lg bg-white/80 shadow-lg flex justify-between items-center px-6">
            {/* ===== Sidebar Catagories ======= */}
            <Sidebar/>
            {/* LOGO */}
            <div className="flex items-center w-[10%]">
                <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide cursor-pointer">
                    CartiFy
                </h1>
            </div>

            {/* SEARCH */}
            <div className="w-[28%] relative">
                <input
                    type="search"
                    onKeyDown={handleSearch}
                    // onChange={(e)=>}
                    placeholder="Search products..."
                    className="w-full pl-4 pr-4 py-2 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#f6f9ff]"
                />
            </div>

            {/* MENU */}
            <ul className="w-[38%] flex justify-center items-center gap-7 font-semibold text-gray-700">

                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                : "hover:text-blue-600 transition"
                        }>
                        Home
                    </NavLink>
                </li>
 

                <li>
                    <NavLink
                        to="/addproduct"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                                : "hover:text-blue-600 transition"
                        }>
                        Add Product
                    </NavLink>
                </li>

            </ul>

            {/* ICONS */}
            <div className="flex items-center gap-6">

                {/* Wishlist */}
                <div className="relative cursor-pointer">
                    <NavLink to="wishlist">
                        <FaRegHeart className="text-red-500 text-xl hover:scale-110 transition" />
                    </NavLink>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                        0
                    </span>
                </div>

                {/* Cart */}
                <div className="relative cursor-pointer">
                    <NavLink to="cart">
                        <FaShoppingCart className="text-blue-700 text-xl hover:scale-110 transition" />
                    </NavLink>
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] px-1.5 rounded-full">
                        {cartlength}
                    </span>
                </div>

            </div>

            {/* AUTH */}
            {isLoggedIn ? (
                <div className="flex items-center gap-4">
                    <button
                        onClick={logout}
                        className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
                        Logout
                    </button>
                    <FaUserCircle
                        onClick={() => setShowProfileMenu(true)}
                        className="text-3xl text-blue-900 cursor-pointer" />
                </div>
            ) : (
                <div className="flex gap-3">
                    <button
                        onClick={() => navigate("signup")}
                        className="px-4 py-1.5 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
                        Sign up
                    </button>
                    <button
                        onClick={() => navigate("login")}
                        className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
                        Login
                    </button>
                </div>
            )}

        </div>
    )
}

export default Navbar