import React from "react";

const Wishlist = () => {

  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1499,
      image: "https://via.placeholder.com/120"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      image: "https://via.placeholder.com/120"
    }
  ];

  return (
    <div className="w-[70%] mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-6">My Wishlist ❤️</h1>

      {/* Wishlist Container */}
      <div className="border rounded p-4 h-[500px] overflow-y-scroll scrollbar-hide">

        {wishlistItems.map((item) => (
          
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            
            {/* Left Side */}
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt=""
                className="w-[90px] h-[90px] object-cover rounded"
              />

              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">₹ {item.price}</p>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex gap-3">

              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Move to Cart
              </button>

              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Wishlist;