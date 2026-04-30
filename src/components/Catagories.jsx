import React from 'react'
import { FcElectronics } from 'react-icons/fc'
import { GiClothes } from 'react-icons/gi'
import { FaKitchenSet } from 'react-icons/fa6'
import { GiLipstick } from 'react-icons/gi'
import { FcSportsMode } from 'react-icons/fc'
import { RiBookShelfLine } from 'react-icons/ri'
import { SiLegacygames } from 'react-icons/si'

const Catagories = () => {
  return (
    <>
      <div className=' fixed z-10 bg-[#E1C7C0] w-[5vw] h-[70%] rounded-2xl flex flex-col justify-center items-center left-0 gap-3 p-2  ' >
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl ' ><FcElectronics /></a>
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl '><GiClothes /></a>
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl '><FaKitchenSet /></a>
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl '><GiLipstick /></a>
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl '><FcSportsMode /></a>
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl '><RiBookShelfLine /></a>
        <a href="" className=' text-4xl cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out hover:bg-[#ffffff] rounded-2xl '><SiLegacygames /></a>
      </div>
    </>
  )
}

export default Catagories