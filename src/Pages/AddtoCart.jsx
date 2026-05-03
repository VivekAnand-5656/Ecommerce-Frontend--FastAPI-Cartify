import React, { useContext, useEffect, useState } from 'react'
import emptycart from '../images/empty.png'
import axios from 'axios'
import { toast, Bounce } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'
import { FaTrash } from 'react-icons/fa'
import { FcMinus } from "react-icons/fc";
import { FcPlus } from 'react-icons/fc'
import { FcBusiness } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'


const AddtoCart = () => {
  const { token } = useContext(AuthContext)
  const [allCarts, setAllCarts] = useState([])
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()
  const api_base = "https://e-commerce-project-3365.onrender.com/"

  const fetchAllCarts = async () => {
    try {
      console.log("Carts Request Sending......")
      const cartRes = await axios.get(`${api_base}users/user-cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Carts:- ", cartRes.data)

      setAllCarts(cartRes.data)

    } catch (error) {
      console.log(`Error:- ${error} `)
    }
  }
  // ===== Total of CartTotal =======
  let sum = 0
  for (const product of allCarts) {
    sum += product.carttotal
  }
  console.log(`Sum :- ${sum}`)

  // ======= Increase Quantity ======= 
  const increaseQuantity = async (id) => {
    try {
      const plusRes = await axios.patch(`${api_base}users/updatequantity/${id}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Quantity Increased.")
      await fetchAllCarts()
    } catch (error) {
      console.log(`Error :- ${error}`)
    }
  }
  // ======= Decrease Quantity ======= 

  const decreaseQuantity = async (id) => {
    try {
      const minusRes = await axios.patch(`${api_base}users/decreasequantity/${id}`, {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Quantity Decreased.")
      await fetchAllCarts()
    } catch (error) {
      console.log(`Error :- ${error}`)
    }
  }
  // ========= Remove Cart By Id ========
  const removeCart = async (id) => {
    try {
      const removeRes = await axios.delete(`${api_base}users/removecart/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Cart Removed")
      await fetchAllCarts()
      toast.success("Cart Added Successfully 🎉", {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce
      });
      
    } catch (error) {
      console.log(`Error:- ${error}`)
    }
  }
  // ===== Clear ALl Cart ======
  const clearCart = async () => {
    try {
      const delet = await axios.delete(`${api_base}users/clearcart`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log("Cart Clear Successfully")

    } catch (error) {
      console.log(`Cart Clear Error:- ${error} `)
    }
  }

  useEffect(() => {
    fetchAllCarts()
  }, [])
  // ====== Plasing Order Baki hain abhi ------

  return (
    <>
      <div className=' w-full h-screen flex flex-col justify-center items-center ' >
        <h1>My Cart</h1>
        <div className=' w-full h-[90%]  flex justify-around   ' >
          {/* ==== Left Side */}
          <div className=' cartitem bg-[#cef9cf] p-2 w-[70%] h-[90%] rounded flex flex-col justify-baseline gap-2 cursor-pointer overflow-scroll  ' >

            {
              allCarts.length === 0 ? (
                <div className=' w-full flex flex-col justify-center items-center ' >
                  <h1 className=' text-center ' >Cart is Empty</h1>
                  <button
                    onClick={() => navigate('/')}
                    className=' bg-[#ff0202] p-0.5 rounded text-white font-semibold cursor-pointer flex justify-center items-center gap-0.5 ' >Go to Add Products <FcBusiness /> </button>
                </div>
              ) : (
                allCarts.map((item, index) => (
                  <div
                    key={index}
                    className=" w-full h-[20%] flex items-center gap-5 bg-white p-2 rounded-2xl shadow-md hover:shadow-lg transition">

                    {/* Product Image */}
                    <div className="w-28 h-full shrink-0">
                      <img
                        src={`${api_base}${item.product.image}`}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col flex-1">
                      <h2 className="text-lg font-semibold line-clamp-1 text-gray-800">
                        {item.product.name}
                      </h2>

                      {/* Price */}
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xl font-bold text-green-600">
                          ₹{item.product.disc_price}
                        </span>

                        <span className="text-gray-400 line-through">
                          ₹{item.product.price}
                        </span>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      // onClick={() => removeItem(product.id)}
                      className="text-red-500 text-xl flex gap-2 justify-center items-center "
                    >
                      <FcMinus
                        onClick={() => decreaseQuantity(item.product_id)}
                        className=' hover:bg-[#eae7e7] transition-all ease-in-out hover:p-0.5 rounded-2xl cursor-pointer ' />
                      <p className=' font-semibold ' >{item.quantity}</p>
                      <FcPlus
                        onClick={() => increaseQuantity(item.product_id)}
                        className=' hover:bg-[#eae7e7] transition-all ease-in-out hover:p-0.5 rounded-2xl cursor-pointer ' />
                      <FaTrash
                      onClick={()=> removeCart(item.id)} 
                      className=' hover:bg-[#eae7e7] transition-all ease-in-out hover:p-0.5 rounded-2xl cursor-pointer ' />
                    </button>
                  </div>
                ))
              )
            }


          </div>
          {/* ==== Right Side */}
          <div className=' w-[25%] h-[90%] bg-[#165d00] rounded  p-2 ' >
            <div className=' flex justify-between items-center ' >
              <h2 className="text-2xl text-white font-bold ">Order Summary</h2>
              <button
                onClick={clearCart}
                className="text-[1rem] text-white font-bold cursor-pointer hover:bg-[#bab4b4] hover:text-black transition-all ease-in-out p-0.5 rounded ">Clear Cart</button>
            </div>

            {/* Price Details */}
            <div className="space-y-4 text-white">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ subtotal</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">- ₹ 0.00</span>
              </div>

              <hr />

              {/* Total */}
              <div className="flex justify-between text-xl font-bold">
                <span>Total Amount</span>
                <span>₹{sum} </span>
              </div>

              <p className="text-sm text-gray-500">
                Taxes included. Delivery within 3–5 days.
              </p>
            </div>

            {/* Buttons */}
            <button className="w-full mt-6 bg-[#1aff00] text-black font-semibold cursor-pointer py-3 rounded-xl hover:bg-[#b6b9acc1] transition">
              Place Order
            </button>

            <button className="w-full mt-3 bg-[#b4b8ab] cursor-pointer py-3 rounded-xl hover:bg-gray-100 transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddtoCart