import React, { useContext, useEffect, useState } from 'react'
import emptycart from '../images/empty.png'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const AddtoCart = () => {
  const {token} = useContext(AuthContext)
  const [allCarts,setAllCarts] = useState([])
  const api_base = "https://e-commerce-project-3365.onrender.com"

  const fetchAllCarts = async ()=>{
    try {
      console.log("Carts Request Sending......")
      const cartRes = await axios.get(`${api_base}/users/user-cart`,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
      console.log("Carts:- ",cartRes.data)
      setAllCarts(cartRes.data)
      
    } catch (error) {
      console.log(`Error:- ${error} `)
    }
  }

  useEffect(()=>{
    fetchAllCarts()
  },[])

  return ( 
    <>
      <div className=' w-full h-screen flex flex-col justify-center items-center bg-[#eeffff] ' >
          <h1>My Cart</h1>
          <div className=' w-full h-full overscroll-auto flex justify-around items-center  ' >
            {/* ==== Left Side */}
            <div className=' w-[70%] h-full border rounded ' >

            </div>
            {/* ==== Right Side */}
            <div className=' w-[25%] h-full border rounded ' >

            </div>
          </div>
      </div>
    </>
  )
}

export default AddtoCart