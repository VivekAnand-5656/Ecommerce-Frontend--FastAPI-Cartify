import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { FaRegWindowClose } from 'react-icons/fa'
import { FcBusinessman, FcNext } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { showProfileMenu, setShowProfileMenu, isLoggedIn, token } = useContext(AuthContext)
    const navigate = useNavigate()


    return (
        <>
            <div
                className={
                    showProfileMenu
                        ? "fixed right-6 top-20 w-60 bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-5 z-50 animate-[slideIn_.35s_ease]"
                        : "hidden"
                }
            >
                {/* Close Button */}
                <button
                    onClick={() => setShowProfileMenu(false)}
                    className="absolute top-3 right-4 text-red-500 text-xl hover:scale-125 transition"
                >
                    <FaRegWindowClose />
                </button>

                {/* Profile Icon */}
                <div className="flex flex-col items-center gap-2 mb-5">
                    <FcBusinessman className="text-6xl drop-shadow-md" />
                    <p className="font-semibold text-gray-700">Welcome 👋</p>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col gap-3">
                    <li
                        onClick={isLoggedIn ? () => navigate("myprofile") : null}
                        className="bg-white rounded-xl px-4 py-2 flex justify-between items-center cursor-pointer shadow hover:shadow-lg hover:scale-105 transition"
                    >
                        <span className="font-semibold">View Profile</span>
                        <FcNext />
                    </li>

                    <li
                        onClick={() => navigate("orders")}
                        className="bg-white rounded-xl px-4 py-2 flex justify-between items-center cursor-pointer shadow hover:shadow-lg hover:scale-105 transition"
                    >
                        <span className="font-semibold">My Orders</span>
                        <FcNext />
                    </li>
                </ul>
            </div>

            {/* Tailwind custom animation */}
            <style>
                {`
        @keyframes slideIn {
          from { opacity:0; transform: translateY(-20px) scale(.95); }
          to { opacity:1; transform: translateY(0) scale(1); }
        }
      `}
            </style>
        </>
    )
}

export default Profile