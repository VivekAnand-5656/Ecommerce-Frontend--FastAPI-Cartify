import React, { useState } from 'react'
import women from '../images/wmlogo.png'
import men from '../images/mnlogo.png'
import elect from '../images/ectlogo.png'
import mkp from '../images/mkplogo.png'
import { useNavigate } from 'react-router-dom'
import { GrCaretPrevious, GrCaretNext } from "react-icons/gr";
const Sidebar = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    const catg = [
        { icon: women, name: "Women Fashion", navi: "womens" },
        { icon: men, name: "Men Fashion", navi: "mens" },
        { icon: elect, name: "Electronics", navi: "electronics" },
        { icon: mkp, name: "Cosmetic", navi: "cosmetic" }
    ]

    return (
        <>
            <div
                className={`
  w-16 h-[50vh] top-30 p-2 left-0 fixed bg-[#3445ff]
  flex flex-col justify-around gap-2 rounded-r-2xl
  transform transition-all duration-500 ease-in-out
  ${show ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
`}
            >
                {catg.map(item => (
                    <div
                        onClick={() => navigate(item.navi)}
                        key={item.name}
                        className="w-full h-[20%] bg-white rounded flex flex-col items-center gap-3 shadow hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
                        <img src={item.icon} className="h-full w-full " />
                    </div>
                ))}

                <GrCaretPrevious
                    onClick={() => setShow(false)}
                    className=' text-3xl fixed left-14 cursor-pointer bg-[#3445ff] text-white ' />
            </div>
            <GrCaretNext
                onClick={() => setShow(true)}
                className={`
    text-3xl cursor-pointer top-55 text-white p-1.5 left-0 fixed bg-[#3445ff]
    transition-all duration-500
    ${show ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"}
  `}
            />
        </>
    )
}

export default Sidebar