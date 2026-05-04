import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { toast, Bounce } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [formData, setformData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value });
    }
    const api_base = "https://e-commerce-project-3365.onrender.com/users"

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            console.log("Before API Call")
            const loginRes = await axios.post(`${api_base}/login`, formData)

            console.log("Login Done :- ", loginRes.data.id)
            login(loginRes.data.token)
            toast.success('Login Successfull', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setformData({
                email: "",
                password: ""
            })
            navigate("/")

        } catch (error) {
            console.log(`Error :- ${error}`)
        }
    }

    return (
        <>
            <div className="w-full min-h-screen bg-[#EAEAEA] flex justify-center items-center p-6">

                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                    <h1 className="text-3xl font-bold text-center mb-6">
                        Welcome to <span className="text-[#1028ff]">CartiFy</span>
                    </h1>

                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-4"
                    >

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#1028ff]"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#1028ff]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-[#1028ff] text-white py-2 rounded-lg font-semibold hover:bg-[#020a52] cursor-pointer transition duration-300"
                        >
                            Login
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            Don't have an account? <span className="text-[#1028ff] cursor-pointer" onClick={() => navigate("/signup")} >Sign up</span>
                        </p>

                    </form>

                </div>
            </div>
        </>
    )
}

export default Login