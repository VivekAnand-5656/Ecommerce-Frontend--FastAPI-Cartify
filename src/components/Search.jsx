import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const Search = () => {
    const { searchQuery, allProducts, token } = useContext(AuthContext);
    const navigate = useNavigate()
    // 🔥 Filter products by search text
    const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.catagory.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (results.length === 0) {
        navigate("/")
    }
    console.log("Result:- ", results);
    console.log("Result:- ", allProducts);

     // ================ Add to Cart ===========
    //  ===== Cart not added bug ======
     const BASE_URL = "https://e-commerce-project-3365.onrender.com"
    const addCart = async (id) => {
        try {
            console.log("Cart Adding.....")
            const cartRes = await axios.post(`${BASE_URL}/addtocart/${id}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Cart Added Successfully :- ", cartRes.data)

            toast.success("Cart Added Successfully 🎉", {
                position: "top-center",
                autoClose: 2000,
                transition: Bounce
            }); 
        } catch (error) {
            console.log(`Error:- ${error}`)
            toast.error("Cart not added !", {
                position: "top-center",
                autoClose: 2000,
                transition: Bounce
            });
        }
    }


    return (
        <div className=" w-full h-screen p-3 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold mb-2">
                Search Results for: "{searchQuery}"
            </h1>

            <div className=" w-full h-full flex flex-wrap gap-6">

                {results.length === 0 ? (
                    <h2 className="text-xl">No products found 😢</h2>
                ) : (
                    results.map(item => (
                        <div key={item.id}
                                className="w-50 h-[50%] bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden">

                                <img src={item.image} className="h-[50%]  w-full object-cover" />

                                <div className="p-2">
                                    <h3 className="font-semibold text-[0.9rem] line-clamp-1 ">{item.name}</h3> 

                                    <div className="flex gap-2 mt-2">
                                        <span className="text-[1rem] font-bold  text-green-600">₹{item.disc_price}</span>
                                        <span className="line-through text-[0.9rem] text-gray-400">₹{item.price}</span>
                                    </div>

                                    <button
                                        onClick={() => addCart(item.id)}
                                        className="mt-4 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition">
                                        Add to Cart
                                    </button>
                                </div>

                            </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default Search;