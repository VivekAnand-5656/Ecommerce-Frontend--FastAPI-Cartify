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
import tr1 from '../images/tr1.jpg'
import tr2 from '../images/tr2.jpg'
import tr3 from '../images/tr3.jpg'
import tr4 from '../images/tr4.jpg'
import tr5 from '../images/tr5.jpg'
import tr6 from '../images/tr6.jpg'
import tr7 from '../images/tr7.jpg'
import tr8 from '../images/tr8.jpg'
import { FaCircleArrowRight } from "react-icons/fa6";


const Hero = () => {
    const { token } = useContext(AuthContext)
    const [products, setProducts] = useState([])
    const [newArrivalProducts,setNewArrivalProducts] = useState([])

    const images = [boy, boy2, boy3, boy4, boy5]
    const [active, setActive] = useState(null)

    const trending = [tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8]

    const catg = [
        { img: women, name: "Women Fashion" },
        { img: men, name: "Men Fashion" },
        { img: elctronics, name: "Electronics" },
        { img: shoes, name: "Shoes" }
    ]
// ---- All Products Fetch ------
    const fetchProducts = async () => {
        try {
            console.log("Started")
            const productRes = await axios.get("http://127.0.0.1:8000/users/products",
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
    const fetchNewArrivalProducts = async ()=>{
        try {
            const arrivalRes = await axios.get("http://127.0.0.1:8000/users/allnewarrivalproducts",
                {
                    headers:{
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
    useEffect(()=>{
        fetchNewArrivalProducts()
    },[])

    return (
        <>
            <div className="p-4 flex flex-col gap-2 ">

                {/* <div className="grid grid-cols-4 gap-4">
                        {
                            products.map((item) => (
                                <div key={item.id} className="border p-3 rounded shadow">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-40 w-full object-cover"
                                    />

                                    <h2 className="font-semibold mt-2">{item.name}</h2>
                                    <p className="text-green-600 font-bold">₹ {item.price}</p>

                                    <button className="bg-black text-white px-3 py-1 mt-2 rounded">
                                        Add to Cart
                                    </button>

                                </div>
                            ))
                        }
                    </div> */}
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
                {/* <div className='bg-[#F2F2F2] w-full h-screen gap-3 p-3 flex flex-wrap  justify-center items-center rounded-2xl  ' >
                    {
                        trending.map((item, index) => (
                            <div key={index}
                                className='w-[20%] gap-2 bg-[#ffffff] rounded-2xl h-[45%] cursor-pointer flex justify-center items-center hover:scale-105 transition-all duration-100 ease-in-out hover:shadow-2xl hover:shadow-[#077979] ' >
                                <img src={item}
                                    className=' w-full h-full rounded-2xl '
                                    alt="" /> 
                            </div>
                        ))
                    }
                </div> */}
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

            </div>
        </>
    )
}

export default Hero