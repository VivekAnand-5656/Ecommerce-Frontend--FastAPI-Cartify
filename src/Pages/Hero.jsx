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

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Catagories from '../components/Catagories'

const Hero = () => {
    const { token } = useContext(AuthContext)
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
    const api_base = "http://127.0.0.1:8000/users"
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
        fetchAllProducts()
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

    return (
        <>
            <div className="p-4 flex flex-col gap-2 "> 
                {/* === Catagory === */}
                <Catagories/>
                {/* ---- Main ---- */}
                <div className='bg-[#077979]  h-[70vh] text-white flex justify-around items-center rounded-2xl ' >
                    <div className=' w-[50%] h-full flex flex-col justify-center items-center p-2 ' >
                        <h1 className=' text-5xl font-bold uppercase font-sans ' >Shop Smarter. Live Better with Cartify.</h1>
                        <p className=' ' >Your one-stop eCommerce destination for electronics, fashion, gadgets, and daily essentials — all in one place.</p>
                        <div className=' w-full  flex justify-center items-center p-2 gap-2  ' >
                            <button className=' border border-[#ffffff] rounded p-1.5 cursor-pointer ' >🛍️ Start Shopping</button>
                            <button className='border border-[#ffffff] rounded p-1.5 cursor-pointer' >🔍 Explore Products</button>
                        </div>
                        <p className=' font-mono '>Fast delivery • Best prices • Trusted quality</p>
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

                <div className='bg-[#F2F2F2] w-full h-screen gap-8 p-3 flex flex-wrap justify-center items-center rounded-2xl  ' >
                    {
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
                    }
                </div>
                {/* ======= All Products ====== */}
                
               
            </div>
        </>
    )
}

export default Hero