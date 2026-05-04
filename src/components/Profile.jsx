import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { FaRegWindowClose } from 'react-icons/fa'
import { FcBusinessman, FcNext } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const { showProfileMenu, setShowProfileMenu } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <>
            <div className={
                showProfileMenu
                    ? "fixed right-0 text-black top-15 h-[50%] w-50 bg-[#d7daf1f9] rounded-2xl shadow-lg flex flex-col items-center p-4 z-50 transition-all duration-100 ease-linear "
                    : "hidden"
            } >
                <button onClick={() => setShowProfileMenu(false)} 
                className=' text-[#f50d0d] text-2xl top-15 font-semibold cursor-pointer right-3 fixed  '
                    > <FaRegWindowClose/> </button>
                <FcBusinessman className=' text-5xl text-center ' /> 
                <ul className=' w-full flex flex-col gap-2 ' >
                    <li 
                    
                    className=' bg-[#ffffff] px-1.5 rounded cursor-pointer w-full transition-all duration-500 ease-initial   font-semibold hover:bg-[#cacad0] flex items-center justify-around ' >View Profile <FcNext/> </li>
                    <li
                    onClick={()=>navigate("orders")}  
                    className=' bg-[#ffffff] px-1.5 rounded cursor-pointer w-full transition-all duration-500 ease-initial  font-semibold hover:bg-[#cacad0] flex items-center justify-around ' >My Orders <FcNext/> </li>
                </ul>
            </div>
        </>
    )
}

export default Profile