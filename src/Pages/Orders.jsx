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
    <div className="bg-[#f4f6fb] min-h-screen p-8">

      <h1 className="text-4xl font-bold mb-10 text-center tracking-wide">
        My Orders
      </h1>

      {myOrders.length === 0 && (
        <div className="text-center text-gray-500 text-xl">
          No orders yet 😢
        </div>
      )}

      <div className="flex flex-col gap-8">
        {myOrders.map((order) => (
          <div
            key={order.order_id}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition"
          >

            {/* ORDER HEADER */}
            <div className="flex flex-wrap justify-between items-center gap-3 border-b pb-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-semibold">{order.order_id}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-semibold text-green-600">{order.status}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Total</p>
                <p className="font-bold text-lg">₹{order.total_price}</p>
              </div>
            </div>

            {/* ORDER ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 bg-gray-50 p-3 rounded-2xl hover:shadow-md transition"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />

                  <div className="flex flex-col justify-between">
                    <h3 className="font-semibold text-sm line-clamp-1">
                      {item.product.name}
                    </h3>

                    <p className="text-xs text-gray-500 line-clamp-1">
                      {item.product.description}
                    </p>

                    <div className="flex justify-between text-sm mt-1">
                      <span className="font-semibold text-green-600">
                        ₹{item.product.price}
                      </span>
                      <span className="text-gray-600">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders