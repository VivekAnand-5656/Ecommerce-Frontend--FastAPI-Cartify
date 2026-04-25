import React, { useContext, useState } from 'react'

import price from '../images/price.png'
import wide from '../images/wide.png'
import smooth from '../images/smooth.png'
import secure from '../images/secure.png'
import acc from '../images/acc.png'
import ad from '../images/ad.png'
import ect from '../images/ect.png'
import fsh from '../images/fsh.png'
import hm from '../images/hm.png'
import sh from '../images/sh.png'
import { AuthContext } from '../context/AuthContext'
import Hero from './Hero'

const Home = () => {
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <>
            {
                isLoggedIn ? (
                    <>
                        <Hero />
                        {/* <h1>Login Successful</h1> */}
                    </>
                ) : (
                    <>
                        <div className='  w-full  flex flex-col justify-center gap-2 p-2 ' >
                            {/* --- main ---- */}
                            <div className='bg-[#30373D]  h-[70vh] text-white flex flex-col justify-center items-center rounded-2xl ' >
                                <h1 className=' text-5xl font-bold uppercase ' >Shop Smarter. Live Better with Cartify.</h1>
                                <p >Your one-stop eCommerce destination for electronics, fashion, gadgets, and daily essentials — all in one place.</p>
                                <div className=' w-full  flex justify-center items-center p-2 gap-2 ' >
                                    <button className=' border border-[#ffffff] rounded p-1.5 cursor-pointer ' >🛍️ Start Shopping</button>
                                    <button className='border border-[#ffffff] rounded p-1.5 cursor-pointer' >🔍 Explore Products</button>
                                </div>
                                <p>Fast delivery • Best prices • Trusted quality</p>
                            </div>
                            {/* ---- about ----- */}
                            <div className=' bg-white flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ' >
                                <h1 className=' text-3xl text-center font-bold ' >Why Choose Cartify?</h1>
                                <p className=' text-center ' >Cartify is a modern eCommerce platform for easy shopping of fashion and gadgets in one place.</p>
                                <div className=' w-[60%] flex justify-between items-center gap-2 ' >
                                    <div className='bg-[#B4B6BD] w-[30%] h-full rounded p-2 cursor-pointer transition-all ease-in-out hover:scale-105 shadow-2xl ' >
                                        <img src={price} className=' w-full ' alt="" />
                                        <h1 className=' font-semibold ' >Affordable pricing</h1>
                                    </div>
                                    <div className='bg-[#B4B6BD] w-[30%] h-full rounded p-2 cursor-pointer transition-all ease-in-out hover:scale-105 shadow-2xl'>
                                        <img src={wide} className=' w-[85%] ' alt="" />
                                        <h1 className=' font-semibold '>Wide product selection</h1>
                                    </div>
                                    <div className='bg-[#B4B6BD] w-[30%] h-full rounded p-2 cursor-pointer transition-all ease-in-out hover:scale-105 shadow-2xl'>
                                        <img src={smooth} className='w-[85%]' alt="" />
                                        <h1 className=' font-semibold '>Smooth user experience</h1>
                                    </div>
                                    <div className='bg-[#B4B6BD] w-[30%] h-full rounded p-2 cursor-pointer transition-all ease-in-out hover:scale-105 shadow-2xl'>
                                        <img src={secure} alt="" />
                                        <h1 className=' font-semibold '>Secure shopping</h1>
                                    </div>
                                </div>
                            </div>
                            {/* ---- Catagories ---- */}
                            <div className=' bg-[#edd7d7] w-full  flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ' >
                                <h1 className=' text-3xl text-center font-bold '>Shop by Categories</h1>
                                <div className=' w-full flex justify-center flex-wrap gap-2 p-2 '>
                                    <div className=' w-[20%] h-auto flex flex-col text-center justify-center ' >
                                        <img src={ect} alt="" />
                                        <h1>📱 Electronics & Gadgets</h1>
                                    </div>
                                    <div className=' w-[20%] h-auto flex flex-col text-center justify-center  '>
                                        <img src={fsh} alt="" />
                                        <h1>👕 Fashion & Clothing</h1>
                                    </div>
                                    <div className=' w-[20%] h-auto flex flex-col text-center justify-center  '>
                                        <img src={sh} alt="" />
                                        <h1>👟 Shoes & Footwear</h1>
                                    </div>
                                    <div className=' w-[20%] h-auto flex flex-col text-center justify-center  '>
                                        <img src={acc} alt="" />
                                        <h1>👜 Accessories</h1>
                                    </div>
                                    <div className=' w-[20%] h-auto flex flex-col text-center justify-center '>
                                        <img src={hm} alt="" />
                                        <h1>🏠 Home Essentials</h1>
                                    </div>
                                    <div className=' w-[20%] h-auto flex flex-col text-center justify-center '>
                                        <img src={ad} alt="" />
                                        <h1>🎧 Audio Devices</h1>
                                    </div>
                                </div>
                            </div>
                            {/* -----  Features ------ */}
                            <div className=' bg-white  flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ' >
                                <h1 className=' text-3xl text-center font-bold '>What Makes Cartify Special?</h1>
                                <div className=' w-full flex gap-2 flex-wrap justify-around items-center  ' >
                                    <h1 className=' p-2 bg-[#8dddd3] rounded cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-none ' >⚡ Lightning Fast Checkout</h1>
                                    <h1 className=' p-2 bg-[#90eb77] rounded cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-none '>🔒 100% Secure Payments</h1>
                                    <h1 className=' p-2 bg-[#6f99e8] rounded cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-none '>🚚 Quick & Reliable Delivery</h1>
                                    <h1 className=' p-2 bg-[#eb71eb] rounded cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-none '>🔄 Easy Returns & Refunds</h1>
                                    <h1 className=' p-2 bg-[#ecdc4a] rounded cursor-pointer hover:scale-105 transition-all shadow-xl hover:shadow-none '>💬 24/7 Customer Support</h1>
                                </div>
                            </div>
                            {/* --- Deal Banner Section ---- */}
                            <div className=' bg-white   flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ' >
                                <h1 className=' text-3xl text-center font-bold '>Big Deals, Bigger Savings!</h1>
                                <p>Get up to 70% OFF on selected products. Limited time offers you don’t want to miss!</p>
                                <button>Grab Deals Now 🔥</button>
                            </div>
                            {/* ---- Testimonials ---- */}
                            <div className=' bg-white   flex flex-col justify-center items-center gap-2 p-3 rounded-2xl ' >
                                <h1 className=' text-3xl text-center font-bold '>What Our Customers Say</h1>
                                <div>
                                    <div>
                                        <h1>Amazing experience! Fast delivery and genuine products.</h1>
                                    </div>
                                    <div>
                                        <h1>Cartify has become my daily shopping app</h1>
                                    </div>
                                    <div>
                                        <h1>Best prices compared to other websites.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Home