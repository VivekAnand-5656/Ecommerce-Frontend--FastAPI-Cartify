import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const Womens = () => {
    const { allProducts, token } = useContext(AuthContext)


    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [price, setPrice] = useState("all");
    const filteredProducts = allProducts.filter(product => {

        // 1️⃣ Only womens products
        const isWomensProduct =
            product.catagory.toLowerCase().includes("women") ||
            product.name.toLowerCase().includes("women") ||
            product.catagory.toLowerCase().includes("cosmetic") ||
            product.name.toLowerCase().includes("cosmetic")


        // 2️⃣ Sidebar search input filter 🔍
        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.catagory.toLowerCase().includes(search.toLowerCase());

        // 3️⃣ Category dropdown filter
        const matchesCategory =
            category === "all" ||
            product.name.toLowerCase().includes(category.toLowerCase()) ||
            product.catagory.toLowerCase().includes(category.toLowerCase()) ||
            product.description.toLowerCase().includes(category.toLowerCase()) ;

        // 4️⃣ Price filter
        const matchesPrice =
            price === "all" || product.price <= Number(price);

        return (
            isWomensProduct &&
            matchesSearch &&
            matchesCategory &&
            matchesPrice
        );
    });
    console.log("My Data", filteredProducts);

    // ===== Add to Cart ======
    const api_base = "https://e-commerce-project-3365.onrender.com"
    const addToCart = async (id) => {
        try {
            const response = await axios.post(`${api_base}/users/addtocart/${id}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Cart Added Successfully :- ", response.data)

            toast.success("Cart Added Successfully 🎉", {
                position: "top-center",
                autoClose: 1000,
                transition: Bounce
            });
        } catch (error) {
            console.log(`Error ${error}`);
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen p-5">

            <h1 className="text-3xl font-bold text-center mb-6">Women's Collection</h1>

            <div className="flex gap-6">

                {/* FILTER SIDEBAR */}
                <div className="w-[250px] bg-white p-5 rounded-xl shadow-md h-fit">
                    <h2 className="text-xl font-semibold mb-4">Filters</h2>

                    <input
                        type="text"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-2 border rounded mb-4"
                    />

                    <select
                        className="w-full p-2 border rounded mb-4"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Category</option>
                        <option value="shirt">Shirt</option>
                        <option value="tshirt">T-Shirt</option>
                        <option value="shoe">Shoes</option>
                        <option value="cosmetic">Cosmetic</option>
                        <option value="watch">Watch</option>
                    </select>



                    <select
                        className="w-full p-2 border rounded"
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="all">All Price</option>
                        <option value="500">Below ₹500</option>
                        <option value="1000">Below ₹1000</option>
                        <option value="2000">Below ₹2000</option>
                        <option value="4000">Below ₹4000</option>
                        <option value="6000">Below ₹6000</option>
                    </select>
                </div>

                {/* PRODUCTS FLEX WRAP */}
                <div className="flex flex-wrap gap-6 flex-1">

                    {filteredProducts.length === 0 ? (
                        <h2 className="text-2xl font-semibold">No Products Found 😢</h2>
                    ) : (
                        filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="w-[220px] bg-white p-4 rounded-xl flex flex-col justify-evenly shadow hover:scale-105 transition"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[180px] w-full object-cover rounded"
                                />

                                <h3 className="font-semibold mt-3 line-clamp-1 ">{product.name}</h3>
                                <p  className=" line-clamp-1 text-[0.8rem] " >{product.description}</p>
                                <p className="text-green-600 font-bold">₹{product.price}</p>

                                <button
                                    onClick={() => addToCart(product.id)}
                                    className="bg-black text-white w-full mt-3 py-2 rounded">
                                    Add to Cart
                                </button>
                            </div>
                        ))
                    )}

                </div>
            </div>
        </div>
    );
};

export default Womens;