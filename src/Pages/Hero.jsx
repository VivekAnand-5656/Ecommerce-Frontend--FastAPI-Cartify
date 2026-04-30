import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
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
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { toast, Bounce } from 'react-toastify'

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Catagories from '../components/Catagories'

const Hero = () => {
    const { token, cartlength, setCartlength } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [newArrivalProducts, setNewArrivalProducts] = useState([])


    const images = [boy, boy2, boy3, boy4, boy5]
    const [active, setActive] = useState(null)

    const megasales = [sale1, sale2, sale3]

    const catg = [
        { img: women, name: "Women Fashion" },
        { img: men, name: "Men Fashion" },
        { img: elctronics, name: "Electronics" },
        { img: shoes, name: "Shoes" }
    ]

    // ---- All Products Fetch ------
    const api_base = "https://e-commerce-project-3365.onrender.com/users"
    const BASE_URL = "https://e-commerce-project-3365.onrender.com"
    const fetchProducts = async () => {
        try {
            console.log("Started")
            const productRes = await axios.get(`${api_base}/products`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log("Products:- ", productRes.data)


            setProducts(productRes.data)
        } catch (error) {
            console.log(`Error:- ${error}`)

        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

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
    useEffect(() => {
        fetchNewArrivalProducts()
    }, [])
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
        } catch (error) {
            console.log(`Error:- ${error}`)
            toast.error("Cart not added !", {
                position: "top-center",
                autoClose: 2000,
                transition: Bounce
            });
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
    useEffect(() => {
        cartSize()
    }, [])

    return (
        <>
            <div className="p-4 flex flex-col gap-2 bg-[#F2F2F2] ">
                {/* === Catagory === */}
                {/* <Catagories /> */}
                {/* ---- Main ---- */}
                <div className='bg-[#EAEAEA]  h-[70vh] text-white flex justify-around items-center rounded-2xl ' >
                    <div className=' w-[50%] h-full flex flex-col justify-center items-center p-2 ' >
                        <h1 className=' text-5xl text-black font-bold uppercase font-sans ' ><span className=' text-[#0724ff] ' >Shop Smarter</span>. Live Better with Cartify.</h1>
                        <p className='text-black ' >Your one-stop eCommerce destination htmlFor electronics, fashion, gadgets, and daily essentials — all in one place.</p>
                        <div className=' w-full  flex justify-center items-center p-2 gap-2  ' >
                            <button className=' border border-[#0f0bff] text-black rounded p-1.5 cursor-pointer ' >🛍️ Start Shopping</button>
                            <button className='border border-[#091aff] text-black rounded p-1.5 cursor-pointer' >🔍 Explore Products</button>
                        </div>
                        <p className=' font-mono text-black '>Fast delivery • Best prices • Trusted quality</p>
                    </div>
                    <div className=' w-[50%] h-full flex justify-center items-center ' >
                        <div className='  w-full h-[80%] bg-[#ffffff] rounded-l-full gap-2  p-5   flex justify-center items-center overflow-hidden relative ' >
                            {
                                images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt=""
                                        onMouseEnter={() => setActive(index)}
                                        onMouseLeave={() => setActive(null)}
                                        className={`   p-1 rounded-4xl cursor-pointer transition-all duration-500 ease-in-out object-cover
                                            ${active === null && "w-[20%] h-[60%] "}   
                                            ${active !== null && active !== index && "w-[10%] h-[40%] opacity-40 blur-sm"}
                                            ${active === index && "absolute w-[60%] h-[90%] z-20 shadow-2xl"}`}

                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* ======= Mega Sales Offer ====== */}

                <div className=' w-full p-3 flex justify-center items-center rounded-2xl  ' >
                    <Carousel
                        className=' w-[70%] rounded-2xl bg-red-500 '
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        interval={3000}
                    >
                        <div>
                            <img src={sale1} className="h-100 object-cover rounded-2xl " />
                        </div>

                        <div>
                            <img src={sale2} className="h-100 object-cover rounded-2xl" />
                        </div>

                        <div>
                            <img src={sale3} className="h-100 object-cover rounded-2xl" />
                        </div>
                    </Carousel>
                </div>
                {/* ------------ Catagories ------------ */}
                <h1 className=' text-2xl font-bold text-center ' >Shop By Catagories</h1>

                <div className='bg-[#fbf3b6] w-full h-[30vh] gap-3 p-3 flex  justify-center items-center rounded-2xl  ' >
                    {
                        catg.map((item, index) => (
                            <div key={index}
                                className='w-[20%] gap-2 bg-[#ffffff] p-2 rounded-2xl h-[60%] cursor-pointer flex justify-center items-center hover:scale-105 transition-all duration-100 ease-in-out hover:shadow-2xl hover:shadow-[#077979] ' >
                                <img src={item.img}
                                    className=' h-full '
                                    alt={item.name} />
                                <p className='font-semibold ' >{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                {/* ----------- New Arrivals Section ----------- */}
                <h1 className=' text-2xl font-bold text-center ' >New Arrivals</h1>

                <div className=' w-full h-auto gap-8 p-3 flex flex-wrap justify-center items-center rounded-2xl  ' >
                    {
                        newArrivalProducts.length === 0 ?
                            <h1>No Products</h1>
                            :
                            newArrivalProducts.map((item, index) => (
                                <div key={index}
                                    className='w-[18%] gap-2 bg-[#ffffff] rounded-2xl p-2 h-[45%] cursor-pointer relative flex flex-col justify-center items-center hover:scale-105 transition-all duration-100 ease-in-out hover:shadow-sm hover:shadow-[#6f7373] ' >
                                    <div className=' bg-[#ffef0a] font-semibold absolute top-0 left-0 -skew-6 rounded p-0.5 ' >Trending</div>
                                    <img src={item.image}
                                        className=' w-full h-[50%] rounded-2xl '
                                        alt="" />
                                    <p>{item.name}</p>
                                    <p>Rs. {item.price}</p>
                                </div>
                            ))
                        // newArrivalProducts.map((item, index) => (
                        //     <div key={index}
                        //         className='w-[18%] gap-2 bg-[#ffffff] rounded-2xl p-2 h-[45%] cursor-pointer relative flex flex-col justify-center items-center hover:scale-105 transition-all duration-100 ease-in-out hover:shadow-sm hover:shadow-[#6f7373] ' >
                        //         <div className=' bg-[#ffef0a] font-semibold absolute top-0 left-0 -skew-6 rounded p-0.5 ' >Trending</div>
                        //         <img src={item.image}
                        //             className=' w-full h-[50%] rounded-2xl '
                        //             alt="" />
                        //         <p>{item.name}</p>
                        //         <p>Rs. {item.price}</p>
                        //     </div>
                        // ))
                    }
                </div>
                {/* ======= All Products ====== */}
                <div className=' flex flex-wrap w-full justify-center items-center gap-2 ' >
                    {
                        products.map((item, index) => (
                            <div key={index} className="w-64 h-100 p-2 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 relative group">

                                {/* <!-- Discount Badge --> */}
                                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                                    -30%
                                </span>

                                {/* <!-- Product Image --> */}
                                <div className="overflow-hidden rounded-t-2xl">
                                    <img
                                        // src={sale1}
                                        src={`${BASE_URL}/${item.image}`}
                                        alt='loading....'
                                        className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                                    />
                                </div>

                                {/* <!-- Product Info --> */}
                                <div className="p-4">

                                    {/* <!-- Title --> */}
                                    <h3 className="text-sm font-semibold line-clamp-1 ">
                                        {item.name}
                                    </h3>

                                    {/* <!-- Rating --> */}
                                    <div className="flex items-center text-yellow-500 text-sm mt-1">
                                        ⭐⭐⭐⭐☆
                                        <span className="text-gray-500 ml-2">(245)</span>
                                    </div>

                                    {/* <!-- Price --> */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-lg font-bold">₹ {item.disc_price}</span>
                                        <span className="text-gray-400 line-through text-sm">₹ {item.price}</span>
                                        <button className="text-xl cursor-pointer absolute right-3 transition">
                                            <FaRegHeart />
                                        </button>
                                        <p>{item.id}</p>
                                    </div>

                                    {/* <!-- Add to Cart --> */}
                                    <button
                                        onClick={() => addCart(item.id)}
                                        className="mt-3 w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition">
                                        Add to Cart
                                    </button>

                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </>
    )
}

export default Hero