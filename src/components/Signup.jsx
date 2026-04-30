import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const api_base = "https://e-commerce-project-3365.onrender.com/users"

  return (
    <>
      <div className="w-full min-h-screen bg-[#EAEAEA] flex justify-center items-center p-6">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

          <h1 className="text-3xl font-bold text-center mb-6">
            Signup to <span className="text-green-500">CartiFy</span>
          </h1>

          <form className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Mobile</label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile Number"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                className="px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account? <span className="text-green-500 cursor-pointer" onClick={() => navigate("/login")} >Login</span>
            </p>

          </form>
        </div>

      </div>
    </>
  )
}

export default Signup