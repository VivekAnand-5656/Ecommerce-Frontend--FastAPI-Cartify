import axios from 'axios'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import boy from '../images/boy.png'
import boy2 from '../images/boy2.png'
import boy3 from '../images/boy3.png'
import boy4 from '../images/boy4.png'
import boy5 from '../images/boy5.png'
import women from '../images/women.png'
import men from '../images/men.png'
import elctronics from '../images/ect.png'
import shoes from '../images/sh.png'
import sale1 from '../images/sale1.png'
import sale2 from '../images/sale2.png'
import sale3 from '../images/sale3.png'
import cosmetic from '../images/cosm.png'
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { toast, Bounce } from 'react-toastify'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Catagories from '../components/Catagories'
import Profile from '../components/Profile'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const { token, cartlength, setCartlength, showProfileMenu, setShowProfileMenu } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [newArrivalProducts, setNewArrivalProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    const images = [boy, boy2, boy3, boy4, boy5]
    const [active, setActive] = useState(null)

    const megasales = [sale1, sale2, sale3]

    const catg = [
        { img: women, name: "Women Fashion", navi: "womens" },
        { img: men, name: "Men Fashion", navi: "mens" },
        { img: elctronics, name: "Electronics", navi: "electronics" },
        { img: shoes, name: "Shoes", navi: "/" },
        { img: cosmetic, name: "Cosmetic", navi: "cosmetic" }
    ]

    // ---- All Products Fetch ------
    const api_base = "https://e-commerce-project-3365.onrender.com/users"
    const BASE_URL = "https://e-commerce-project-3365.onrender.com"
    const fetchProducts = async () => {
        try {
            console.log("Started")
            setLoading(true)
            const productRes = await axios.get(`${api_base}/products`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Products:- ", productRes.data)
            setLoading(false)


            setProducts(productRes.data)
        } catch (error) {
            console.log(`Error:- ${error}`)
            setLoading(false)

        }
    }


    // ------ Fetch New Arrival Products -----------
    const fetchNewArrivalProducts = async () => {
        try {
            const arrivalRes = await axios.get(`${api_base}/allnewarrivalproducts`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Api Call Success")
            console.log("Api data:- ", arrivalRes.data)
            setNewArrivalProducts(arrivalRes.data)
        } catch (error) {
            console.log(`Error:- ${error}`)
        }
    }


    // ======= Cart Length ======
    const cartSize = async () => {
        try {
            const sizeres = await axios.get(`${api_base}/user-cart`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Size of Cart :- ", sizeres.data.length)
            setCartlength(sizeres.data.length)
        } catch (error) {
            console.log(`Error:- ${error}`)
        }
    }

    // ================ Add to Cart ===========
    const addCart = async (id) => {
        try {
            console.log("Cart Adding.....")
            const cartRes = await axios.post(`${api_base}/addtocart/${id}`, {},
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
            await cartSize()
        } catch (error) {
            console.log(`Error:- ${error}`)
            toast.error("Cart not added !", {
                position: "top-center",
                autoClose: 2000,
                transition: Bounce
            });
        }
    }

    useEffect(() => {
        if (!token) return

        const loadData = async () => {
            await Promise.all([
                fetchProducts(),
                fetchNewArrivalProducts(),
                cartSize()
            ])
        }

        loadData()
    }, [token])

    return (
        <>
            <div className="w-full bg-slate-100 p-6 flex flex-col gap-14 ">

                <Profile />
                {/* HERO */}
                <section className="w-full h-[75vh] bg-white rounded-3xl shadow-xl flex justify-between items-center px-10">

                    {/* Left Text */}
                    <div className="w-1/2 flex flex-col gap-6">
                        <h1 className="text-5xl font-extrabold leading-tight">
                            <span className="text-[#1028ff]">Shop Smarter</span>
                            <br /> Live Better with Cartify
                        </h1>

                        <p className="text-gray-600 text-lg max-w-xl">
                            Your one-stop destination for electronics, fashion, gadgets and daily essentials.
                        </p>

                        <p className="text-sm text-gray-400">
                            Fast delivery • Best prices • Trusted quality
                        </p>
                    </div>

                    {/* Right Image Hover Gallery */}
                    <div className="w-1/2 flex justify-center">
                        <div className="w-full h-[85%] bg-slate-50 rounded-l-full flex justify-center items-center gap-4 overflow-hidden relative p-5">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    onMouseEnter={() => setActive(index)}
                                    onMouseLeave={() => setActive(null)}
                                    className={`
              rounded-3xl object-cover transition-all duration-500 cursor-pointer
              ${active === null && "w-[22%] h-[65%]"}
              ${active !== null && active !== index && "w-[12%] h-[45%] opacity-40 blur-sm"}
              ${active === index && "absolute w-[65%] h-[95%] z-20 shadow-2xl"}
            `}
                                />
                            ))}
                        </div>
                    </div>

                </section>

                {/* MEGA SALE CAROUSEL */}
                <section className="flex justify-center">
                    <Carousel
                        className="w-[75%] rounded-3xl overflow-hidden shadow-xl"
                        autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}
                    >
                        {[sale1, sale2, sale3].map((img, i) => (
                            <div key={i}>
                                <img src={img} className="h-[420px] w-full object-cover" />
                            </div>
                        ))}
                    </Carousel>
                </section>

                {/* CATEGORIES */}
                <section className="flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold">Shop by Categories</h2>

                    <div className="flex flex-wrap justify-center gap-8 bg-yellow-100 p-8 rounded-3xl shadow-inner w-full">
                        {catg.map(item => (
                            <div
                                onClick={() => navigate(item.navi)}
                                key={item.name}
                                className="w-52 bg-white rounded-2xl p-4 flex flex-col items-center gap-3 shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                                <img src={item.img} className="h-24" />
                                <p className="font-semibold">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* NEW ARRIVALS */}
                <section className="flex flex-col items-center gap-8">
                    {/* <h2 className="text-3xl font-bold">New Arrivals</h2> */}

                    <div className="flex flex-wrap justify-center gap-8">
                        {newArrivalProducts.map(item => (
                            <div key={item.id}
                                className="w-60 bg-white rounded-3xl shadow hover:shadow-2xl transition overflow-hidden relative">
                                <span className="absolute top-3 left-3  bg-yellow-400 px-3 py-1 rounded-full text-xs font-bold">
                                    Trending
                                </span>
                                <img src={item.image} className="h-44 w-full object-cover" />
                                <div className="p-4 text-center">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-green-600 font-bold">₹ {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ALL PRODUCTS */}
                <section className="flex flex-col items-center gap-10">
                    <h2 className="text-3xl font-bold">All Products</h2>

                    <div className="flex flex-wrap justify-center gap-10">
                        {products.map(item => (
                            <div key={item.id}
                                className="w-64 bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden">

                                <img src={item.image} className="h-56 w-full object-cover" />

                                <div className="p-5">
                                    <h3 className="font-semibold line-clamp-1 ">{item.name}</h3>
                                    <p className=' line-clamp-1 ' >{item.description}</p>

                                    <div className="flex gap-2 mt-2">
                                        <span className="text-xl font-bold text-green-600">₹{item.disc_price}</span>
                                        <span className="line-through text-gray-400">₹{item.price}</span>
                                    </div>

                                    <button
                                        onClick={() => addCart(item.id)}
                                        className="mt-4 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl font-semibold transition">
                                        Add to Cart
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    )
}

export default Hero