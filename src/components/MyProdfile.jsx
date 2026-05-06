import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyProdfile = () => {
    const { logout, token } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    },[token])

    // Dummy user data (later you can fetch from API)
    const [user, setUser] = useState(
        {
            id: "",
            name: "",
            email: "",
            mobile :""
        }
    )
    // ==== Get My Profile ====
    const BASE_URL = "https://e-commerce-project-3365.onrender.com"
    const getMyProfile = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users/my-profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log(`My Data:- ${response.data["email"]}`);
            setUser(response.data)
            user.id = response.data["id"]
            user.name = response.data["name"]
            user.email = response.data["email"] 
            user.mobile = response.data["mobile"]

        } catch (error) {
            console.log(`Error:- ${error}`);

        }
    }
    useEffect(() => {
        getMyProfile()
    }, [])
    return (
        <div className="min-h-screen bg-slate-100 p-6 flex justify-center">

            <div className="w-full max-w-5xl flex flex-col gap-8">

                {/* HEADER */}
                <div className="bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-10 shadow-xl">
                    <h1 className="text-4xl font-bold">My Profile</h1>
                    <p className="text-blue-100 mt-2">Manage your account & orders</p>
                </div>

                {/* USER CARD */}
                <div className="bg-white rounded-3xl shadow-lg p-8 flex gap-10 items-center">

                    <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-700">
                        {user.name[0]}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600">{user.mobile}</p>
                    </div>

                    <div className="ml-auto">
                        <button className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                            Edit Profile
                        </button>
                    </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow text-center">
                        <h3 className="text-3xl font-bold text-blue-600">12</h3>
                        <p className="text-gray-500">Orders</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow text-center">
                        <h3 className="text-3xl font-bold text-blue-600">3</h3>
                        <p className="text-gray-500">Wishlist</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow text-center">
                        <h3 className="text-3xl font-bold text-blue-600">₹25k</h3>
                        <p className="text-gray-500">Total Spent</p>
                    </div>
                </div>

                {/* RECENT ORDERS */}
                {/* <div className="bg-white rounded-3xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>

                    <div className="flex flex-col gap-4">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex justify-between items-center border-b pb-3">
                                <div>
                                    <h3 className="font-semibold">Order #{item}245</h3>
                                    <p className="text-gray-500 text-sm">Delivered</p>
                                </div>
                                <p className="font-bold text-blue-600">₹2,499</p>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* LOGOUT */}
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            logout();
                            navigate("/");
                        }}
                        className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyProdfile;