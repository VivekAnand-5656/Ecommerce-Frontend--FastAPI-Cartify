import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const Orders = () => {
  const { token } = useContext(AuthContext)
  const [myOrders, setMyOrders] = useState([])
  const api_base = "https://e-commerce-project-3365.onrender.com/"

  const getOrders = async () => {
    try {
      console.log("Order Loading");
      const response = await axios.get(`${api_base}users/myorders`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const datas = response.data
      console.log("Order Fetched");
      console.log("Datas:- ", datas);
      setMyOrders(datas)

    } catch (error) {
      console.log(`Error:- ${error}`);

    }
  }
  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className='w-full min-h-screen p-10 bg-gray-100'>
      <h1 className='text-3xl font-bold mb-6'>My Orders</h1>

      {myOrders.length === 0 && (
        <p>No orders yet</p>
      )}

      {myOrders.map((order) => (
        <div key={order.order_id} className='mb-10 bg-white p-6 rounded shadow'>

          {/* Order Header */}
          <div className='flex justify-between mb-4 border-b pb-2'>
            <h2 className='font-bold'>Order ID: {order.order_id}</h2>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.total_price}</p>
          </div>

          {/* Order Items */}
          <div className='grid grid-cols-2 gap-6'>
            {order.items.map((item, index) => (
              <div key={index} className='flex gap-4 border p-4 rounded'>

                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className='w-28 h-28 object-cover rounded'
                />

                <div>
                  <h3 className='font-bold text-lg'>{item.product.name}</h3>
                  <p className='text-gray-600'>{item.product.description}</p>
                  <p className='font-semibold'>₹{item.product.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}

export default Orders