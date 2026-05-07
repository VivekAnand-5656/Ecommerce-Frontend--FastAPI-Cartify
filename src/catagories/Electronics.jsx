import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Electronics = () => {
    const { allProducts, token, lengthwishlist, setLengthwishlist } = useContext(AuthContext)

    const [wishlist, setWishlist] = useState([])
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [price, setPrice] = useState("all");
    const filteredProducts = allProducts.filter(product => {

        // 1️⃣ Only womens products
        const isWomensProduct =
            product.catagory.toLowerCase().includes("electronic") ||
            product.name.toLowerCase().includes("electronic")

        // 2️⃣ Sidebar search input filter 🔍
        const matchesSearch =
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.catagory.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())

        // 3️⃣ Category dropdown filter
        const matchesCategory =
            category === "all" ||
            product.name.toLowerCase().includes(category.toLowerCase()) ||
            product.catagory.toLowerCase().includes(category.toLowerCase()) ||
            product.description.toLowerCase().includes(category.toLowerCase())

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
            toast.error("Please Login",
                {
                    autoClose: 1000,
                    transition: Bounce,
                    closeOnClick: true
                }
            )
        }
    }
    // ==== Get Wishlist ===
    const getWishlist = async () => {
        try {
            const response = await axios.get(`${api_base}/users/getwishlists`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            const datas = response.data
            console.log("Api data:- ", datas)
            setWishlist(datas)
            setLengthwishlist(datas.length)
            console.log("Len:- ", datas.length);

        } catch (error) {
            console.log(`Error:- ${error}`)
        }
    }
    // ===== Add to Wishlist =====
    const addtowishlist = async (id) => {
        try {
            const response = await axios.post(`${api_base}/users/addtowishlist/${id}`, {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            const datas = response.data
            console.log(" Wishlist Added Successfully :- ", datas)

            toast.success("Wishlist Added Successfully 🎉", {
                position: "top-center",
                autoClose: 1000,
                transition: Bounce
            });
            getWishlist()

        } catch (error) {
            console.log(`Error:- ${error}`)
            toast.error("Product not added to Wishlist !", {
                position: "top-left",
                autoClose: 1000,
                transition: Bounce
            });
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
            console.log("Remove:- ", response.data);
            getWishlist()

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
        getWishlist()
    }, [])

    return (
        <div className="bg-[#f4f6fb] min-h-screen p-8">

            {/* PAGE TITLE */}
            <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
                Electronic's Collection
            </h1>

            <div className="flex gap-8">

                {/* ================= FILTER SIDEBAR ================= */}
                <div className="w-[260px] bg-white/80 backdrop-blur-lg p-6 rounded-3xl shadow-lg h-fit sticky top-5">

                    <h2 className="text-2xl font-semibold mb-6">Filters</h2>

                    {/* SEARCH */}
                    <input
                        type="text"
                        placeholder="Search product..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full p-3 border rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    {/* CATEGORY */}
                    <p className="text-sm font-semibold mb-1 text-gray-500">Category</p>
                    <select
                        className="w-full p-3 border rounded-xl mb-5"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All Category</option>
                        <option value="mobile">Mobiles & Tablets</option>
                        <option value="laptop">Laptops & Computers</option>
                        <option value="appliances">Home Appliances</option>
                        <option value="speaker">Audio & Gadgets</option>
                        <option value="cable">Charging & Data Cables</option>
                    </select>

                    {/* PRICE */}
                    <p className="text-sm font-semibold mb-1 text-gray-500">Price</p>
                    <select
                        className="w-full p-3 border rounded-xl"
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

                {/* ================= PRODUCTS ================= */}
                <div className="flex flex-wrap gap-8 flex-1">

                    {filteredProducts.length === 0 ? (
                        <div className="w-full flex justify-center items-center text-2xl text-gray-500">
                            No Products Found 😢
                        </div>
                    ) : (
                        filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="relative w-[230px] bg-white p-4 rounded-3xl flex flex-col shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300"
                            >

                                {/* HEART ICON */}
                                <div className="absolute right-4 top-4 text-xl">
                                    {
                                        wishlist.some(itm => itm.product_id === product.id) ? (
                                            <FaHeart
                                                onClick={() => {
                                                    const wishitem = wishlist.find(w => w.product_id === product.id)
                                                    removeWishlist(wishitem.id)
                                                }}
                                                className="text-red-500 cursor-pointer hover:scale-125 transition"
                                            />
                                        ) : (
                                            <FaRegHeart
                                                onClick={() => addtowishlist(product.id)}
                                                className="cursor-pointer hover:scale-125 transition"
                                            />
                                        )
                                    }
                                </div>

                                {/* IMAGE */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-[180px] w-full object-cover rounded-2xl"
                                />

                                {/* INFO */}
                                <h3 className="font-semibold mt-4 line-clamp-1">{product.name}</h3>
                                <p className="text-sm text-gray-500 line-clamp-1">
                                    {product.description}
                                </p>

                                {/* PRICE */}
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xl font-bold text-green-600">
                                        ₹{product.disc_price || product.price}
                                    </span>
                                    {product.disc_price && (
                                        <span className="text-gray-400 line-through text-sm">
                                            ₹{product.price}
                                        </span>
                                    )}
                                </div>

                                {/* BUTTON */}
                                <button
                                    onClick={() => addToCart(product.id)}
                                    className="mt-4 bg-black hover:bg-gray-800 text-white py-2 rounded-xl font-semibold transition"
                                >
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

export default Electronics;