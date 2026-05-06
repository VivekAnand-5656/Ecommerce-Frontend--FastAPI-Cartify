import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const api_base = "https://e-commerce-project-3365.onrender.com"
  const signupForm = async (e) => {
    e.preventDefault()
    try {
      const signRes = await axios.post(`${api_base}/users/create_user`, formData)
      console.log("User Created Success");
      console.log("User:- ", signRes.data);
      toast.success('Signup Successfull', {
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
      setFormData({
        name: "",
        mobile: "",
        email: "",
        password: ""
      })
      navigate("/login")

    } catch (error) {
      console.log(`Signup Error:- ${error}`)
      toast.error("Signup Failed!")
    }
  }

  return (
    <>
      <div className="w-full min-h-screen bg-[#EAEAEA] flex justify-center items-center p-6">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-3xl font-bold text-center mb-6">
            Signup to <span className="text-[#1028ff] ">CartiFy</span>
          </h1>

          <form
            onSubmit={signupForm}
            className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Full Name"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#1028ff]"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#1028ff] "
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#1028ff] "
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#1028ff] "
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#1028ff] text-white py-2 rounded-lg font-semibold hover:bg-[#010a55] transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account? <span className="text-[#1028ff] cursor-pointer" onClick={() => navigate("/login")} >Login</span>
            </p>

          </form>
        </div>

      </div>
    </>
  )
}

export default Signup