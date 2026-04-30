import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { isLoggedIn, logout } = useContext(AuthContext)

    return (
        <div className='w-full h-[10vh] bg-white shadow-2xl flex justify-between items-center p-2'>

            {/* Logo */}
            <div className='h-full w-[20%] flex justify-center items-center'>
                <h1 className='text-2xl font-bold uppercase'>CartiFy</h1>
            </div>
            <input type="search" name="search" placeholder='Search products....'
                className=' border-2 border-[#20194a] p-1.5 rounded w-[30%] ' />

            {/* Menu */}
            <ul className='w-[40%] h-full flex justify-center text-[0.9rem] items-center gap-5'>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-[#180cff] font-semibold" : "font-semibold"} to="/">
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-[#180cff] font-semibold" : "font-semibold"} to="/about">
                        About
                    </NavLink>
                </li>

                <li>
                    <select name="catagory" className=' outline-0 font-semibold ' >
                        <option value="">All Catagories</option>
                        <option value="">Mens wear</option>
                        <option value="">Womens wear</option>
                        <option value="">T-shirt</option>
                        <option value="">Cosmetic</option>
                        <option value="">Electronics</option>
                        <option value="">Watches</option>
                        <option value="">Shoes & Footwear</option>
                    </select>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "text-[#180cff] font-semibold" : "font-semibold"} to="/addproduct">
                        Add Product
                    </NavLink>
                </li>

            </ul>
            <div className=' w-[10%] flex justify-center items-center gap-2  ' >
                <NavLink to="wishlist" >
                    <FaRegHeart className=' text-red-500 ' />
                </NavLink>
                <NavLink to="cart">
                    <FaShoppingCart className='text-blue-900 ' />
                </NavLink>


            </div>

            {
                isLoggedIn ? (
                    //  ---- After Login ----- 
                    <>
                        <div className='flex justify-center items-center gap-3 w-[20%]'>
                            <button
                                onClick={logout}
                                className='px-4 py-1 bg-[#377DF0] font-semibold text-white rounded-md cursor-pointer'>Logout</button>
                            <FaUserCircle className=' text-3xl cursor-pointer text-[#0b0348] ' />
                        </div>
                    </>
                ) : (
                    // {/* Buttons */}
                    <>
                        <div className='flex gap-3 w-[20%]'>
                            <button
                                onClick={() => navigate("signup")}
                                className='px-4 py-1 border rounded-md cursor-pointer'>Sign up</button>
                            <button
                                onClick={() => navigate("login")}
                                className='px-4 py-1 bg-black text-white rounded-md cursor-pointer'>Login</button>
                        </div>
                    </>
                )
            }




        </div>
    )
}

export default Navbar