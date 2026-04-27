import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { toast, Bounce } from 'react-toastify'

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const api_base = "http://127.0.0.1:8000/users"
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
            setFormData({
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
            <div className=' bg-[#25e1e8] w-full h-[90vh] p-2 flex flex-col justify-center items-center ' >
                <h1>Welcome to CartiFy</h1>
                <form
                    onSubmit={handleLogin}
                    className='bg-white w-[30%] flex flex-col p-2 gap-2 rounded border ' >
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' placeholder='example@gmail.com' required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Password</label>
                    <input type="password" name='password' placeholder='*********' required
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                    >Login</button>
                </form>
            </div>
        </>
    )
}

export default Login