import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Wishlist = () => {
  const { token } = useContext(AuthContext)
  const [wishlists, setWishlists] = useState([])

  const api_base = "https://e-commerce-project-3365.onrender.com"

  const getWishlists = async () => {
    try {
      const response = await axios.get(`${api_base}/users/getwishlists`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const datas = response.data
      console.log("Wishlist Data:- ", datas);
      setWishlists(datas)


    } catch (error) {
      console.log(`Error:- Data:-  ${error} `);
    }
  }
  // ==== Remove Wishlist ====
  const removeWishlist = async (id) => {
    try {
      const response = await axios.delete(`${api_base}/users/removewishlist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      toast.success("Wishlist Removed Successfully 🎉", {
        position: "top-center",
        autoClose: 1000,
        transition: Bounce
      });
      setWishlists(prev => prev.filter(item => item.id !== id));
      console.log("Remove:- ", response.data);
      getWishlists()

    } catch (error) {
      console.log(`Removal Error:- ${error}`)
      toast.error("Wishlist not Removed !", {
        position: "top-left",
        autoClose: 1000,
        transition: Bounce
      });
    }
  }
  useEffect(() => {
    getWishlists()
  }, [])




  return (
  <div className="w-full min-h-screen bg-[#f5f7fb] sm:py-10 flex justify-center">
    
    {/* Main Card */}
    <div className="sm:w-[75%] w-[95%] bg-white rounded-3xl shadow-lg p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Wishlist ❤️</h1>
        <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm">
          {wishlists.length} items
        </span>
      </div>

      {/* Wishlist Container */}
      <div className="h-[520px] overflow-y-auto pr-2">

        {wishlists.length === 0 ? (
          <div className="h-full flex items-center justify-center text-gray-400 text-lg">
            Your wishlist is empty 😢
          </div>
        ) : (
          <div className="flex sm:flex-col flex-row justify-evenly flex-wrap sm:gap-5 gap-2 ">

            {wishlists.map((item) => (
              <div
                key={item.id}
                className="flex sm:flex-row flex-col w-[45%] h-[250px] justify-between items-center border bg-[#fafafa] sm:p-4 rounded p-1.5  sm:rounded-2xl hover:shadow-md transition"
              >

                {/* LEFT SIDE */}
                <div className="sm:w-auto w-full flex sm:flex-row flex-col  sm:gap-5 gap-1.5 items-center">
                  <img
                    src={item.product.image}
                    className="sm:w-[95px] sm:h-[95px] border w-full h-[50%] object-cover rounded-xl"
                    // =========  yhi se heights fixed krni hai 
                    
                  />

                  <div className="w-full border flex flex-col gap-1">
                    <h2 className="font-semibold sm:text-lg text-[0.9rem] line-clamp-1 ">
                      {item.product.name}
                    </h2>
                    <span className="flex w-full justify-between " >
                      <p className="text-green-600 font-bold sm:text-lg text-[1rem] ">
                      ₹ {item.product.disc_price}
                    </p>
                    <p className="text-gray-400 line-through text-sm">
                      ₹ {item.product.price}
                    </p>
                    </span>
                  </div>
                </div>

                {/* RIGHT BUTTONS */}
                <div className=" w-full border flex sm:flex-row flex-col gap-3">

                  <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl font-medium transition">
                    Add to Cart
                  </button>

                  <button
                    onClick={() => removeWishlist(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition"
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  </div>
);
};

export default Wishlist;